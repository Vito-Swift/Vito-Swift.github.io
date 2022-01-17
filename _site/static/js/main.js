$(function() {
  deadlineByConf = {};

  
  
  
  var rawDeadlines = ["2021-04-15 23:59","2021-08-19 23:59","2021-12-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#s-p-oakland-2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#s-p-oakland-2022').addClass('past');
    }
    $('#s-p-oakland-2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["s-p-oakland-2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2022-03-21 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#icics2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#icics2022').addClass('past');
    }
    $('#icics2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["icics2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-09-22 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#euro-s-p2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#euro-s-p2022').addClass('past');
    }
    $('#euro-s-p2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["euro-s-p2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2022-01-14 23:59","2022-05-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#ccs2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#ccs2022').addClass('past');
    }
    $('#ccs2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["ccs2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2021-07-30 23:59","2021-11-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#asiaccs2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#asiaccs2022').addClass('past');
    }
    $('#asiaccs2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["asiaccs2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2021-06-08 23:59","2021-10-12 23:59","2022-02-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#usenix2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#usenix2022').addClass('past');
    }
    $('#usenix2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["usenix2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2021-05-21 23:59","2021-07-23 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#ndss2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#ndss2022').addClass('past');
    }
    $('#ndss2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["ndss2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2022-01-31 23:59","2022-05-22 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#esorics2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#esorics2022').addClass('past');
    }
    $('#esorics2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["esorics2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2021-05-14 23:59","2021-10-01 23:59","2022-02-04 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#csf2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#csf2022').addClass('past');
    }
    $('#csf2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["csf2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-06-17 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/UTC");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#cans2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#cans2021').addClass('past');
    }
    $('#cans2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["cans2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2022-02-02 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#wisec2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#wisec2022').addClass('past');
    }
    $('#wisec2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["wisec2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2022-02-17 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#soups2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#soups2022').addClass('past');
    }
    $('#soups2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["soups2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-09-09 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#fc2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#fc2022').addClass('past');
    }
    $('#fc2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["fc2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-08-23 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Europe/Helsinki");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#nordsec2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#nordsec2021').addClass('past');
    }
    $('#nordsec2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["nordsec2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-07-23 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+11");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#wpes2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#wpes2020').addClass('past');
    }
    $('#wpes2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["wpes2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-05-31 23:59","%y-08-31 23:59","%y-11-30 23:59","%y-02-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+11");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#pets2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#pets2022').addClass('past');
    }
    $('#pets2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["pets2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-02-11 16:00" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+5");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#crypto2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#crypto2020').addClass('past');
    }
    $('#crypto2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["crypto2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2019-09-26 11:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Europe/Zurich");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#eurocrypt2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#eurocrypt2020').addClass('past');
    }
    $('#eurocrypt2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["eurocrypt2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2019-05-14 05:00" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/UTC");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#asiacrypt2019 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#asiacrypt2019').addClass('past');
    }
    $('#asiacrypt2019 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["asiacrypt2019"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-06-04 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#aft2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#aft2020').addClass('past');
    }
    $('#aft2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["aft2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-05-26 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#tcc2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#tcc2020').addClass('past');
    }
    $('#tcc2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["tcc2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2019-11-02 09:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/UTC");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#pkc2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#pkc2020').addClass('past');
    }
    $('#pkc2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["pkc2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2019-09-20 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+5");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#ct-rsa2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#ct-rsa2020').addClass('past');
    }
    $('#ct-rsa2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["ct-rsa2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-07-15 23:59","%y-10-15 23:59","%y-01-15 23:59","%y-04-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#tches2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#tches2021').addClass('past');
    }
    $('#tches2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["tches2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-07-12 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#sac2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#sac2021').addClass('past');
    }
    $('#sac2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["sac2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-03-26 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#raid2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#raid2021').addClass('past');
    }
    $('#raid2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["raid2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-06-23 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#acsac2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#acsac2021').addClass('past');
    }
    $('#acsac2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["acsac2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-05-26 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#imc2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#imc2021').addClass('past');
    }
    $('#imc2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["imc2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-12-10 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#dsn2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#dsn2022').addClass('past');
    }
    $('#dsn2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["dsn2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2021-09-03 23:59","2022-01-14 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#acns2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#acns2022').addClass('past');
    }
    $('#acns2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["acns2022"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-05-25 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#secdev2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#secdev2020').addClass('past');
    }
    $('#secdev2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["secdev2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-05-28 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/UTC");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#isc2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#isc2020').addClass('past');
    }
    $('#isc2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["isc2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2020-04-03 16:00" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Europe/Zurich");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#cvcbt2020 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#cvcbt2020').addClass('past');
    }
    $('#cvcbt2020 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["cvcbt2020"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-04-27 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#ieee-dapps2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#ieee-dapps2021').addClass('past');
    }
    $('#ieee-dapps2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["ieee-dapps2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-05-14 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#ieee-s-b2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#ieee-s-b2021').addClass('past');
    }
    $('#ieee-s-b2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["ieee-s-b2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2021-06-04 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+11");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#nspw2021 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#nspw2021').addClass('past');
    }
    $('#nspw2021 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["nspw2021"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2022-03-21 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#cloud-s-p2022 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#cloud-s-p2022').addClass('past');
    }
    $('#cloud-s-p2022 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["cloud-s-p2022"] = confDeadline;
  }
  
  

  // Reorder list
  confs = $('.conf');
  confs.detach().sort(function(a, b) {
    var today = moment();
    var a = deadlineByConf[a.id];
    var b = deadlineByConf[b.id];
    var diff1 = today.diff(a)
    var diff2 = today.diff(b)
    if (a == null && b == null) {
      return 0;
    }
    if (a == null && diff2 > 0) {
      return -1;
    }
    if (a == null && diff2 < 0) {
      return +1;
    }
    if (b == null && diff1 > 0) {
      return +1;
    }
    if (b == null && diff1 < 0) {
      return -1;
    }
    if (diff1 < 0 && diff2 > 0) {
      return -1;
    }
    if (diff1 > 0 && diff2 < 0) {
      return +1;
    }
    if (diff1 < 0 && diff2 < 0) {
      return -1 ? diff1 < diff2 : +1;
    }
    if (diff1 > 0 && diff2 > 0) {
      return -1 ? a < b : +1;
    }
  });
  $('.conf-container').append(confs);

  // Set checkboxes
  var conf_type_data = [{"name":"Security","tag":"SEC"},{"name":"Privacy","tag":"PRIV"},{"name":"Crypto","tag":"CRYPTO"}];
  var all_tags = [];
  var toggle_status = {};
  for (var i = 0; i < conf_type_data.length; i++) {
    all_tags[i] = conf_type_data[i]['tag'];
    toggle_status[all_tags[i]] = false;
  }
  var tags = store.get('sec-deadlines.github.io');
  if (tags === undefined) {
    tags = all_tags;
  }
  for (var i = 0; i < tags.length; i++) {
    $('#' + tags[i] + '-checkbox').prop('checked', true);
    toggle_status[tags[i]] = true;
  }
  store.set('sec-deadlines.github.io', tags);

  function update_conf_list() {
    confs.each(function(i, conf) {
      var conf = $(conf);
      var show = false;
      for (var i = 0; i < all_tags.length; i++) {
        if(conf.hasClass(all_tags[i])) {
          show = show | toggle_status[all_tags[i]];
        }
      }
      if (show) {
        conf.show();
      } else {
        conf.hide()
      }
    });
  }
  update_conf_list();

  // Event handler on checkbox change
  $('form :checkbox').change(function(e) {
    var checked = $(this).is(':checked');
    var tag = $(this).prop('id').slice(0, -9);
    toggle_status[tag] = checked;

    if (checked == true) {
      if (tags.indexOf(tag) < 0)
        tags.push(tag);
    }
    else {
      var idx = tags.indexOf(tag);
      if (idx >= 0)
        tags.splice(idx, 1);
    }
    store.set('sec-deadlines.github.io', tags);
    update_conf_list();
  });
});
