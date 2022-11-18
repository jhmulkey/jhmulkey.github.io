var _leapYear = false; // true if Jan-July falls within a leap year
var _ti;
var _dns = [21,28,42,49,56,63,70,77,84,91,98,105,126,133,140,161,168,175,182,189,196,203,210,217,224,231,238,245,259,266,273,280,287,294];
var _todaysDn
var _ew;

function assignTodaysDn() {
    var todaysMonth = dateAndTime("month"); 
    var todaysDate = dateAndTime("date")
    var cumulative = [153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [153,184,213,244,274,305,335,0,31,61,92,122];
    var dn;
    if (todaysMonth < 3 || todaysMonth > 7) {
        dn = (cumulative[todaysMonth-1]) + todaysDate;
    }
    if (todaysMonth > 2 || todaysMonth < 8) {
        if (_leapYear) {
            dn = (cumulativeLeap[todaysMonth-1]) + todaysDate;
        } else {
            dn = (cumulative[todaysMonth-1]) + todaysDate;
        }
    }
    _todaysDn = dn;
    setElapsedWeeks();
}

function setElapsedWeeks() {
    for (let i = 0; i < _dns.length; i++) {
        if (_todaysDn == _dns[i]) {
            _ew = i + 1; break;
        }
        if (_todaysDn > _dns[0] && _todaysDn < _dns[i]) {
            _ew = i; break;
        }
        if (_todaysDn < _dns[0] || _todaysDn > _dns[_dns.length-1]) {
            _ew = 34;
        }
    }
    _ti = _ew - 1;
    downloadCurrentMissionsDirect();
}

function dateAndTime(x) {
    var today = new Date();
    if (x == "month") { return today.getMonth() + 1 }
    if (x == "date") { return today.getDate() }
}

function downloadCurrentMissionsDirect() {
  if (_ti < (32-1)) {
      window.open("class/docs/combined-missions/asmv"+(_ti)+".pdf","_self");
  } else {
      window.open("class/docs/combined-missions/asmv"+(32-1)+".pdf","_self");
  }
}

assignTodaysDn();