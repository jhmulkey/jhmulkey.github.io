var _leapYear = false; // true if Jan-July falls within a leap year
var _ti;
var _dns = [21,28,42,49,56,63,70,77,84,91,98,105,126,133,140,161,168,175,182,189,196,203,210,217,224,231,238,245,259,266,273,280,287,294];
var _todaysDn
var _ew;
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword"];

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
    if (x == "hour") { return today.getHours() }
    if (x == "full") { return (today.getMonth() + 1) + "/" + today.getDate() }
    if (x == "log") { return (today.getMonth() + 1)+"/"+today.getDate()+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds() }
}

function downloadCurrentMissionsDirect() {
  if (_ti < (_asNames.length-1)) {
      window.open("class/docs/combined-missions/asmv"+(_ti)+".pdf","_self");
  } else {
      window.open("class/docs/combined-missions/asmv"+(_asNames.length-1)+".pdf","_self");
  }
}

assignTodaysDn();