import json
import os
import yaml
import openai
from tqdm import tqdm
import datetime
from pathlib import Path

# os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
# os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"

TYPES = [
    {"name": "Networking", "tag": "networking"},
    {"name": "Architecture", "tag": "architecture"},
    {"name": "Security", "tag": "security"},
    {"name": "Others", "tag": "others"},
]

SYSTEM_PROMPT = """You are a careful research-conference metadata extraction and tagging agent. You may use web search and read web pages.

You will be given a list of base conference series names (e.g., "SIGCOMM", "MobiCom"). For EACH series, you must find and output metadata for the MOST RECENT 3 editions (3 distinct years), based on official sources.
Recent editions selection rule (very important):
- For each conference series, output up to 3 editions (3 distinct years) using this rule:
  1) Include the latest FUTURE edition if an official CFP page exists (e.g., year = current_year+1).
     - Example: if today is 2025 and SIGCOMM 2026 CFP is published, include 2026.
     - if official page lists dates/location but does not provide CFP full-paper submission deadline, DO NOT include it; 
  2) Then include the most recent PAST editions to reach at most 3 total items.
     - Example outputs:
       - If 2026 is announced: [2026, 2025, 2024]
       - If 2026 not announced: [2025, 2024] (and optionally 2023 if you want 3 past; but only if you still want 3 items)
- Do NOT invent a future edition if you cannot find an official page for it.
- If fewer than 3 confirmed editions exist from official sources, output only the confirmed ones.

If the future edition (current_year+1) is not officially announced, do NOT backfill with older years just to reach 3 items. Output only the editions that have official pages with dates/deadlines (typically current_year and current_year-1).

Output requirements:
- Output must be STRICT JSON only (no Markdown).
- Top-level shape:
{
  "conferences": [ { ... }, ... ]
}

For each conference edition, output these fields (use null if unknown):
- name: string                      // series short name, e.g., "SIGCOMM"
- year: integer                     // edition year
- date: string|null                 // keep official display style when possible
- description: string|null          // full name or one-sentence description
- link: string|null                 // official website for that year/edition
- comment: string|null              // explain assumptions/uncertainty (within one sentence)
- type: "networking"|"architecture"|"security"|"others"
- tags: array of strings            // MUST exist; include the type tag as one element
- deadline: string|array|null       // main-conference full-paper submission deadline only
- timezone: string|null             // if deadline present, must be "Etc/GMT+8"
- place: string|null                // city, country/region

Hard rules:
1) Source priority: official website / official CFP / official "Important Dates" pages first. Avoid third-party aggregators unless unavoidable; if used, note it in comment.
2) Deadline scope: ONLY the main conference full-paper submission deadline.
   Do NOT use registration/camera-ready/artifact/workshop/poster/demo/etc.
3) Tagging:
   - type must be exactly one of: networking, architecture, security, others
   - tags must be an array and MUST include type (e.g., tags: ["networking"])
   - Do not invent extra tags unless strongly justified by official scope; keep tags minimal.
4) Timezone normalization:
   - Final timezone must be "Etc/GMT+8" whenever deadline is present.
   - If official page specifies AoE/PDT/UTC/etc, convert to Etc/GMT+8.
   - If only a date (no time) is given, assume 23:59 in the stated timezone; if no timezone is stated, assume AoE; if still unclear, assume UTC and add comment "time assumed".
5) Multiple deadlines:
   - If multiple rounds/cycles exist for main-conference full papers, output deadline as an array and set comment to include "Multiple deadlines".
6) Recent 3 editions:
   - Prefer the latest 3 distinct years that are real editions of the conference series.
   - If fewer than 3 editions can be confirmed from official sources, output what you can and explain in comment.
7) Do not fabricate: if deadline cannot be found on official pages, set deadline=null and add comment "deadline not found on official pages".
"""

USER_PROMPT_TEMPLATE = """Search the web and produce STRICT JSON for the most recent 3 editions (years) of each conference series name below.

Conference series names:
{series_json}

Today year is {current_year}. "Most recent 3 editions" should be chosen relative to this.

Remember: output STRICT JSON only, with top-level key "conferences".
"""


def call_poe(system_prompt: str, user_prompt: str):
    api_key = os.getenv("POE_API_KEY") or os.getenv("API_KEY")
    url = "https://api.poe.com/v1"
    client = openai.OpenAI(
        api_key=api_key,
        base_url=url,
    )
    model = "GPT-5.2"
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "system", "content": (system_prompt)},
                  {"role": "user", "content": (user_prompt)}],
        stream=False,
        extra_body={
            "web_search": True
        }
    )
    prompt = response.choices[0].message.content.strip()

    return json.loads(prompt)


def main():
    series = ["SIGCOMM", "MobiCom", "SenSys", "NSDI", "Mobisys",
              "OSDI", "SOSP", "ASPLOS", "Eurosys", "Sigmetrics"]

    user_prompt = USER_PROMPT_TEMPLATE.format(
        series_json=json.dumps(series, ensure_ascii=False),
        current_year=datetime.datetime.utcnow().year,
    )

    data = call_poe(SYSTEM_PROMPT, user_prompt)
    confs = data.get("conferences", [])

    cleaned = []
    for c in confs:
        # Ensure type exists
        if not c.get("type"):
            c["type"] = "others"

        # Ensure tags exists and contains type
        tags = c.get("tags")
        if not isinstance(tags, list):
            tags = []
        if c["type"] not in tags:
            tags.insert(0, c["type"])
        c["tags"] = tags

        # Optionally: normalize name capitalization consistency
        # (leave as-is if you prefer)
        # if isinstance(c.get("name"), str):
        #     c["name"] = c["name"].strip()

        # Drop nulls
        c2 = {k: v for k, v in c.items() if v is not None}
        cleaned.append(c2)
    print(cleaned)

    project_root = Path(__file__).resolve().parents[1]
    data_dir = project_root / "_data"
    data_dir.mkdir(parents=True, exist_ok=True)
    conferences_path = data_dir / "conferences.yml"
    types_path = data_dir / "types.yml"

    with open(conferences_path, "w", encoding="utf-8") as f:
        f.write(yaml.safe_dump(cleaned, sort_keys=False, allow_unicode=True))

    with open(types_path, "w", encoding="utf-8") as f:
        f.write(yaml.safe_dump(TYPES, sort_keys=False, allow_unicode=True))
    print(f"Wrote {conferences_path} and {types_path}")


if __name__ == '__main__':
    main()
