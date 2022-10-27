var _alert = false; 
var _sl = []; var _ci; var _ti; var _currentStudent;
var _totalASpts; var _totalMVpts; var _totalPts; var _totalPossible;
var _earnedASpts; var _earnedMVpts; var _totalEarnedPts; var _weeksAttended; var _totalEarned;
var _rankPercentage; var _asPercentage; var _mvPercentage; var _attPercentage; var _totalPtsPercentage; var _totalPercentage;
var _firstName; var _nomPron; var _possPron;
var _asNum; var _mvNum;
var _asPts;
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3];
var _leapYear = false; // true if Jan-July falls within a leap year
var _dns = [21,28,42,49,56,63,70,77,84,91,98,105,126,133,140,161,168,175,182,189,196,203,210,217,224,231,238,245,259,266,273,280,287,294];
var _todaysDn
var _ew;
var _isClassDay;
var _weeksOff = 0;
var _bdList = []; var _promoList = [];
var _noteIndex;
var _teacherNotes = [];
var _teacherNoteIndex;
var _log = ""; var _gameLog = ""; 
var _currentPop = "mainPop"; var _currentPops; var _currentPops2; var _array;
var _populateNotesID = [];
var _focus;
var _currentFunction; var _currentParameter;
var _eligibleRandom;
var _teams = [];
var _dataInputParameter;
var _att = [];
var _pwd = []; var _backupIndex;
var _currentMainMenuIndex;
var _rankNamesShort = ["PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAJ","LTC","COL","BG","MG","LTG","GEN","GOA"];
var _rankNames = ["Private","Private First Class","Corporal","Sergeant","Staff Sergeant","Sergeant First Class","Master Sergeant","Sergeant Major","Command Sergeant Major","Second Lieutenant","First Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","General of the Army"];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword"];
var _asFulls = ["Class Intro","John Intro","John 1","John 2","John 3","John 4","John 5","John 6","John 7","John 8","John 9","John 1-9 Review","John 10","John 11","John 12","John 13","John 14","John 15","John 16","John 17","John 18","John 19","John 20","John 21","John 10-21 Review","Armor Intro","Belt","Breastplate","Shoes","Shield","Helmet","Sword"];
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8","phil-2-9","phil-2-10-11","rom-8-31","rom-8-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"];
var _mvFulls = ["Psalm 139:17-18","John 20:30-31","John 1:1-2","John 1:3","John 1:4-5","John 1:6-8","John 1:9-11","John 1:12-13","John 1:14","John 1:15","John 1:16-17","John 1:18","Phil 2:5-6","Phil 2:7","Phil 2:8","Phil 2:9","Phil 2:10-11","Rom 8:31","Rom 8:32","Rom 8:33","Rom 8:34","Rom 8:35","Rom 8:36","Rom 8:37","Rom 8:38-39","Eph 6:10-11","Eph 6:12","Eph 6:13","Eph 6:14-15","Eph 6:16","Eph 6:17","Eph 6:18"];
var _mvText = [
    "How precious to me are your thoughts, O God! How vast is the sum of them! If I would count them, they are more than the sand. I awake, and I am still with you.",
    "Now Jesus did many other signs in the presence of the disciples, which are not written in this book; but these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.",
    "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God.",
    "All things were made through him, and without him was not any thing made that was made.",
    "In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.",
    "There was a man sent from God, whose name was John. He came as a witness, to bear witness about the light, that all might believe through him. He was not the light, but came to bear witness about the light.",
    "The true light, which gives light to everyone, was coming into the world. He was in the world, and the world was made through him, yet the world did not know him. He came to his own, and his own people did not receive him.",
    "But to all who did receive him, who believed in his name, he gave the right to become children of God, who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.",
    "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    "(John bore witness about him, and cried out, “This was he of whom I said, 'He who comes after me ranks before me, because he was before me.’”)",
    "For from his fullness we have all received, grace upon grace. For the law was given through Moses; grace and truth came through Jesus Christ.",
    "No one has ever seen God; the only God, who is at the Father's side, he has made him known.",
    "Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped,",
    "but emptied himself, by taking the form of a servant, being born in the likeness of men.",
    "And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    "Therefore God has highly exalted him and bestowed on him the name that is above every name,",
    "so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
    "What then shall we say to these things? If God is for us, who can be against us?",
    "He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
    "Who shall bring any charge against God's elect? It is God who justifies.",
    "Who is to condemn?  Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us.",
    "Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?",
    "As it is written, 'For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.'",
    "No, in all these things we are more than conquerors through him who loved us.",
    "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.",
    "For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.",
    "Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.",
    "Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness, and, as shoes for your feet, having put on the readiness given by the gospel of peace.",
    "In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one;",
    "and take the helmet of salvation, and the sword of the Spirit, which is the word of God,",
    "praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints," 
];

function color(id,color) {
    document.getElementById(id).style.color = color;
}

function bgColor(id,color) {
    document.getElementById(id).style.backgroundColor = color;
}

function innerHTML(id,innerHTML) {
    document.getElementById(id).innerHTML = innerHTML;
}

function display(id,display) {
    document.getElementById(id).style.display = display;
}

function idFontSize(id,fontSize) {
    document.getElementById(id).style.fontSize = fontSize+"px";
}

function value(id,value) {
    document.getElementById(id).value = value;
}

function idFocus(id) {
    document.getElementById(id).focus();
}

function append(id,element) {
    document.getElementById(id).append(element);
}

function createElement(elementName) {
    return document.createElement(elementName);
}

function border(id,px,type,color,padding) {
    document.getElementById(id).style.border = px + " " + type + " " + color;
    document.getElementById(id).style.padding = padding;
}

function getLastUpdateTime() {
    var x = new Date(document.lastModified); var hours; var ampm;
    if (x.getHours() >= 12) {
        ampm = "PM";
        if (x.getHours() != 12) {
            hours = x.getHours() - 12
        } else {
            hours = 12;
        }
    } else {
        ampm = "AM"
        hours = x.getHours();
        if (hours == 0) { hours = 12 }
    }
    var minutes = x.getMinutes().toString();
    if (minutes.length == 1) {minutes = 0 + minutes}
    var date = (x.getMonth() + 1) + "/" + x.getDate() + "/" + x.getFullYear() + " " + hours + ":" + minutes + " " + ampm;
    innerHTML("lastUpdated","Last Updated: " + date);
}

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    _slOLD = JSON.parse(localStorage.getItem("slBackupOLD"));
    _att = JSON.parse(localStorage.getItem("attBackup"));
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotesBackup"));
    _promoList = []; _bdList = [];
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].randDraw[0] = false;
    }
    assignTodaysDn(); alertMssg(); getLastUpdateTime();
}

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
    setWeeksOff(); isClassDay(); setElapsedWeeks(); populateMissions(); populateMissions2(); generateAllTables();
}

function isClassDay() {
    if (_dns.indexOf(_todaysDn) > -1) {_isClassDay = true}
}

function setWeeksOff() {
    if (_isClassDay) {
        if (_dns[_dns.indexOf(_todaysDn)+1] - _todaysDn == 14) {
            _weeksOff = 1;
        } else if (_dns[_dns.indexOf(_todaysDn)+1] - _todaysDn == 21) {
            _weeksOff = 2;
        } else {
            _weeksOff = 0;
        }
    }
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
}

function dateAndTime(x) {
    var today = new Date();
    if (x == "month") { return today.getMonth() + 1 }
    if (x == "date") { return today.getDate() }
    if (x == "hour") { return today.getHours() }
    if (x == "full") { return (today.getMonth() + 1) + "/" + today.getDate() }
    if (x == "log") { return (today.getMonth() + 1)+"/"+today.getDate()+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds() }
}

function generateAllTables() {
    generateRankTable(); generateStudentAttTable(); generateStudentStatsTables(); generateCalendarTable();
}

function pinEntry(x) {
    hideMainMenu(); resetMainMenu();
    var match = false; innerHTML("nameList","");
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].pin == x) {
            match = true; _ci = i; 
            if (_alert) {
                pop(["mainPop"],["alertPop"]);
                document.activeElement.blur();
            } else {
                loadStudent(i); pop(["mainPop"],["studentPop","studentStatsPop"]);
            }
        }
    }
    if (!match) {
        display("hint","none");
        infoAlert("The PIN <span style='color:red;font-weight:bold'>" + x + "</span> does not match any students. Use the back button above to try again or search by name instead.",["mainPop"],"searchField");
        document.getElementById("searchField").value = "";
        document.activeElement.blur();
    }
}

function pinAutoEnter() {
    var x = parseInt(document.getElementById("searchField").value);
    if (document.getElementById("searchField").value.length == 3 && !isNaN(x)) {pinEntry(x)}
}

function findStudent() {
    hideMainMenu(); resetMainMenu();
    if (_sl == false) {
        display("hint","none"); value("searchField","");
        infoAlert("The new class database is currently being built and should be ready by 4pm on 8/21/2022. Please check back later.",["mainPop"]); return
    }
    document.activeElement.blur(); innerHTML("nameList","");
    var x = (document.getElementById("searchField").value.trim().toLowerCase()).split(" ");
    if (x == false) {idFocus("searchField");return;}
    for (i = 0; i < x.length; i++) {
        if (x[i] == false) {
            x.splice(i,1); i = 0; continue;
        }
    }
    var matches = [];
    if (x.length == 1) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] == _sl[i].name[0].split(" ")[1].toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 2) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + " " + x[1] == _sl[i].name[0].toLowerCase() || x[0] + "-" + x[1] == _sl[i].name[0].split(" ")[1].toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 3) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + "-" + x[1] + " " + x[2] == _sl[i].name[0].toLowerCase() || x[0] + " " + x[1] + "-" + x[2] == _sl[i].name[0].toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (matches.length == 0) {
        for (i = 0; i < x.length; i++) {
            x[i] = x[i][0].toUpperCase() + x[i].substr(1);
        }
        var string = x.join(" "); display("hint","none");
        infoAlert("No matches found for <span style='color:red;font-weight:bold'>" + string + "</span>. Use the back button above to try again or search by PIN instead.",["mainPop"],"searchField");
        document.getElementById("searchField").value = "";
    }
    if (matches.length == 1) {
        _ci = matches[0];
        if (_alert) {
            pop(["mainPop"],["alertPop"]);
        } else {
            loadStudent(_ci); pop(["mainPop"],["studentPop","studentStatsPop"]);
        }
    }
    if (matches.length > 1) {
        display("hint","block"); document.getElementById("searchField").value = ""; populateMatches(matches);
        infoAlert("More than one match found.<br>Click the correct name below.",["mainPop"],"searchField",true);
    }
}

function populateMatches(indexArray) {
    for (i = 0; i < indexArray.length; i++) {
        var p = createElement("p");
        p.classList.add("name");
        p.classList.add("ptr");
        (function(i){
            p.onclick = function () {
                let x = indexArray[i]; _ci = x;
                if (_alert) {
                    pop(["infoAlertPop"],["alertPop"]);
                } else {
                    loadStudent(_ci); pop(["infoAlertPop"],["studentPop","studentStatsPop"]);
                }
            }
        })(i);
        p.innerHTML = _sl[indexArray[i]].name[0];
        document.getElementById("nameList").appendChild(p);
    }  
}

function populateCalendar() {
    for (i = 0; i < _dns.length; i++) {
        innerHTML("calendarDate"+i,cdn(_dns[i],"word"));
        if (i < _dns.length-2) {
            innerHTML("calendarLesson"+i,_asFulls[i]);
            innerHTML("calendarMemory"+i,_mvFulls[i]);
        }
    }
    document.getElementById("calendarRow"+(_ti)).style.border = "2px solid lawngreen";
}

function populateCustomList(log1,log2,type) {
    if (log1) {
        var p1 = createElement("p");
        p1.classList.add("name");
        p1.innerHTML = log1;
        if (type == "promo") {
            var message;
            if (_sl[i].name[1] != "") {
                message = "Complete promotion for <br>" + _sl[i].name[0] + " (" + _rankNamesShort[_sl[i].rank[0]] + ")?" + "<br> (" + _sl[i].name[1] + ")"
            } else {
                message = "Complete promotion for <br>" + _sl[i].name[0] + " (" + _rankNamesShort[_sl[i].rank[0]] + ")?"
            }
            (function(i){
                p1.onclick = function () {
                    actionAlert(message,["customListPop"],completePromo,false,i);
                }
            })(i);
        } else if (type == "bdDone") {
            (function(i){
                p1.onclick = function () {
                    actionAlert("Complete birthday for <br>" + _sl[i].name[0] + "?",["customListPop"],completeBd,false,i);
                }
            })(i);
        } else if (type == "photo") {
            (function(i){
                p1.onclick = function () {
                    actionAlert("Take photo for <br>" + _sl[i].name[0] + "?",["customListPop"],completePhoto,false,i);
                }
            })(i);
        } else if (type == "email") {
            (function(i){
                p1.onclick = function () {
                    _ci = i; _array = ["customListPop"];
                    populateStudentFields("editEmail",loadNeededEmails);
                }
            })(i);
        } else if (type == "bdNeeded") {
            (function(i){
                p1.onclick = function () {
                    _ci = i; _array = ["customListPop"];
                    populateStudentFields("editBdMonth",loadNeededBds);
                    value("editBdMonth","");
                    value("editBdDate",""); 
                }
            })(i);
        }
        append("customList",p1);
    }
    if (log2) {
        var p2 = createElement("p");
        p2.classList.add("name");
        p2.innerHTML = log2;
        append("customListAbsent",p2);
    }
}

function assignStatsRanks(propertyName,index) {
    var pts = [];
    for (let i = 0; i < _sl.length; i++) {
        pts.push(_sl[i][propertyName]);
    }
    var ptsSorted = pts.slice().sort(function(a,b){return b - a});
    var ptsRanked = pts.map(function(v){return ptsSorted.indexOf(v)+1});
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].statsRanks[index] = ptsRanked[i];
    }
    sortSLbyProperty(propertyName); var repeats = 0;
    var corrected = []; corrected.push(_sl[0].statsRanks[index]);
    for (let i = 1; i < _sl.length; i++) {
        if (_sl[i].statsRanks[index] == _sl[i-1].statsRanks[index]) {
            repeats++;
            corrected.push(corrected[i-1]);
        } else {
            corrected.push(_sl[i].statsRanks[index] - repeats);
        }
    }
    for (let i = 1; i < _sl.length; i++) {
        _sl[i].statsRanks[index] = corrected[i];
    }
    sortSL();
}

function sortByPts(lb) {
    if (lb) {
        innerHTML("totalPtsLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    var totalASpts = 0; var totalMVpts = 0;
    if (_ew > 1) {
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
            totalASpts += _asMaxPts[i];
            totalMVpts += _mvMaxPts[i];
        }
    }
    var totalPts = totalASpts + totalMVpts;
    assignStatsRanks("pts",0);
    _sl.sort(function(b,a){return a.pts - b.pts});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].pts == 0) {continue}
        if (lb) {if ( _sl[i].statsRanks[0] > 10 ) {continue}}
        var totalPtsPercentage = ((_sl[i].pts / totalPts) * 100).toFixed(1);
        var lastElementNode;
        var p = createElement("p");
        var span1 = createElement("span");
        var span2 = createElement("span");
        p.classList.add("name3");
        span2.classList.add("sortValues");
        if (_sl[i].pts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[0] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].pts + "/" + totalPts + " (" + totalPtsPercentage + "%)";
        if (lb) {if (_sl[i].name[0] == _currentStudent) {span1.style.color = "lawngreen"}}
        p.append(span1,span2);
        if (lb) {
            append("totalPtsLbList",p);
        } else {
            append("nameListCustom",p);
        }
        lastElementNode = _sl[i].pts;
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByASpts(lb) {
    if (lb) {
        innerHTML("asPtsLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    var totalASpts = 0;
    if (_ew > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalASpts += _asMaxPts[j];
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        var earnedASpts = 0; var asPercentage;
        if (_ew > 1) {
            for (let j = 0; j < _ti; j++) {
                if (j > 31) {break}
                earnedASpts += _sl[i].as[j][0];
            }
        }
        if (_ew > 1) {
            asPercentage = ((earnedASpts / totalASpts) * 100).toFixed(1);
        } else {
            asPercentage = 0;
        }
        _sl[i].earnedASpts = earnedASpts;
        _sl[i].asPercentage = asPercentage;
    }
    assignStatsRanks("earnedASpts",1);
    _sl.sort(function(b,a){return a.earnedASpts - b.earnedASpts});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].earnedASpts == 0) {continue}
        if (lb) {if ( _sl[i].statsRanks[1] > 10 ) {continue}}
        var lastElementNode;
        var p = createElement("p");
        var span1 = createElement("span");
        var span2 = createElement("span");
        if (lb) {if (_sl[i].name[0] == _currentStudent) {span1.style.color = "lawngreen"}}
        span2.classList.add("sortValues");
        p.classList.add("name3");
        if (_sl[i].earnedASpts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[1] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].earnedASpts + "/" + totalASpts + " (" + _sl[i].asPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            append("asPtsLbList",p);
        } else {
            append("nameListCustom",p);
        }        lastElementNode = _sl[i].earnedASpts;
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Activity Points")}
}

function sortByMVpts(lb) {
    if (lb) {
        innerHTML("mvPtsLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    var totalMVpts = 0;
    if (_ew > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalMVpts += _mvMaxPts[j];
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        var earnedMVpts = 0; var mvPercentage;
        if (_ew > 1) {
            for (let j = 0; j < _ti; j++) {
                if (j > 31) {break}
                earnedMVpts += _sl[i].mv[j][0];
            }
        }
        if (_ew > 1) {
            mvPercentage = ((earnedMVpts / totalMVpts) * 100).toFixed(1);
        } else {
            mvPercentage = 0;
        }
        _sl[i].earnedMVpts = earnedMVpts;
        _sl[i].mvPercentage = mvPercentage;
    }
    assignStatsRanks("earnedMVpts",2);
    _sl.sort(function(b,a){return a.earnedMVpts - b.earnedMVpts});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].earnedMVpts == 0) {continue}
        if (lb) {if ( _sl[i].statsRanks[2] > 10 ) {continue}}
        var lastElementNode;
        var p = createElement("p");
        var span1 = createElement("span");
        var span2 = createElement("span");
        if (lb) {if (_sl[i].name[0] == _currentStudent) {span1.style.color = "lawngreen"}}
        span2.classList.add("sortValues");
        p.classList.add("name3");
        if (_sl[i].earnedMVpts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[2] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].earnedMVpts + "/" + totalMVpts + " (" + _sl[i].mvPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            append("mvPtsLbList",p);
        } else {
            append("nameListCustom",p);
        }        lastElementNode = _sl[i].earnedMVpts;
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Memory Points")}
}

function sortByAtt(lb) {
    if (lb) {
        innerHTML("attLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    for (let i = 0; i < _sl.length; i++) {
        var amTotal = []; var pmTotal = []
        for (let j = 0; j < _ew; j++) {
            amTotal.push(_sl[i].attArr[j][0]);
            pmTotal.push(_sl[i].attArr[j][1]);
        }
        var total = sumArrays([amTotal,pmTotal]);
        for (let j = 0; j < _ew; j++) {
            if (_sl[i].attArr[j][0] == 1 && _sl[i].attArr[j][1] == 1) {
                total--
            }
        }
        _sl[i].totalWksAtt = total;
    }
    assignStatsRanks("totalWksAtt",3);
    _sl.sort(function(a,b){return b.totalWksAtt - a.totalWksAtt});
    for (let i = 0; i < _sl.length; i++) {
        if (lb) {if ( _sl[i].statsRanks[3] > 10 ) {continue}}
        var lastElementNode;
        var attPercentage = ((_sl[i].totalWksAtt / _ew) * 100).toFixed(1);
        var p = createElement("p");
        var span1 = createElement("span");
        var span2 = createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        p.classList.add("name3");
        if (_sl[i].totalWksAtt != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[3] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].totalWksAtt + "/" + _ew + " (" + attPercentage + "%)";
        if (lb) {if (_sl[i].name[0] == _currentStudent) {span1.style.color = "lawngreen"}}
        p.append(span1,span2);
        if (lb) {
            append("attLbList",p);
        } else {
            append("nameListCustom",p);
        }        lastElementNode = _sl[i].totalWksAtt;
    }  
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Attendance")}
}

function sortByTP(lb) {
    if (lb) {
        innerHTML("tpLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    var totalASpts = 0; var totalMVpts = 0;
    if (_ew > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalASpts += _asMaxPts[j];
            totalMVpts += _mvMaxPts[j];
        }
    }
    var totalTPpts = totalASpts + totalMVpts + _ew;
    for (let i = 0; i < _sl.length; i++) {
        var amTotal = []; var pmTotal = []
        for (let j = 0; j < _ew; j++) {
            amTotal.push(_sl[i].attArr[j][0]);
            pmTotal.push(_sl[i].attArr[j][1]);
        }
        var total = sumArrays([amTotal,pmTotal]);
        for (let j = 0; j < _ew; j++) {
            if (_sl[i].attArr[j][0] == 1 && _sl[i].attArr[j][1] == 1) {
                total--
            }
        }
        _sl[i].tpPts = _sl[i].pts + total;
    }
    assignStatsRanks("tpPts",4);
    _sl.sort(function(a,b){return b.tpPts - a.tpPts});
    for (let i = 0; i < _sl.length; i++) {
        if (lb) {if ( _sl[i].statsRanks[4] > 10 ) {continue}}
        var lastElementNode;
        var tpPercentage = ((_sl[i].tpPts / totalTPpts) * 100).toFixed(1);
        var p = createElement("p");
        var span1 = createElement("span");
        var span2 = createElement("span");
        if (lb) {if (_sl[i].name[0] == _currentStudent) {span1.style.color = "lawngreen"}}
        span2.classList.add("sortValues");
        p.classList.add("name3");
        p.classList.add("name3");
        if (_sl[i].tpPts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[4] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].tpPts + "/" + totalTPpts + " (" + tpPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            append("tpLbList",p);
        } else {
            append("nameListCustom",p);
        }
        lastElementNode = _sl[i].tpPts;
    }  
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Participation")}
}

function sortSL() {
    _sl.sort(function(a,b) {
        var textA = a.name[0].split(" ")[1].toLowerCase(); // last name A
        var textB = b.name[0].split(" ")[1].toLowerCase(); // last name B
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }); // sorts by last name
    _sl.sort(function(a,b) {
        var textA1 = a.name[0].split(" ")[1].toLowerCase(); // last name A
        var textB1 = b.name[0].split(" ")[1].toLowerCase(); // last name B
        var textA0 = a.name[0].split(" ")[0].toLowerCase(); // first name A
        var textB0 = b.name[0].split(" ")[0].toLowerCase(); // first name B
        if (textA1 == textB1) {
            return (textA0 < textB0) ? -1 : (textA0 > textB0) ? 1 : 0;
        }
    }); // then sorts students with the same last name by their first name
}

function sortSLbyProperty(propertyName) {
    _sl.sort(function(a,b) {
            var textA = a[propertyName];
            var textB = b[propertyName];
            return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
}

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

function infoAlert(message,idArray,focus,noImage,fontSize,textAlign) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        display("infoAlertPop","none");
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                display(_currentPops[i],"block");
            }
        }
        innerHTML("infoAlertMessage","");
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        display("infoAlertPop","block");
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                display(_currentPops[i],"none");
            }
        }
        innerHTML("infoAlertMessage",message);
    }
    if (_focus) {idFocus(_focus)}
    if (noImage) {display("infoAlertTitle","none")} else {display("infoAlertTitle","block")}
    if (fontSize) {idFontSize("infoAlertMessage",fontSize)} else {idFontSize("infoAlertMessage",22)}
    if (textAlign) {
        document.getElementById("infoAlertMessage").style.textAlign = textAlign;
    } else {
        document.getElementById("infoAlertMessage").style.textAlign = "center";
    }
}

function refreshStudentPop() {
    assignStatsRanks("pts",0);
    document.getElementById("studentPopInsignia").style.backgroundImage = "url(class/img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    innerHTML("studentPopRankName",_rankNames[_sl[_ci].rank[0]]);
    innerHTML("studentPopName",_sl[_ci].name[0]);
    innerHTML("studentPopPIN","PIN: "+_sl[_ci].pin);
    var ptsNeeded;
    if (_sl[_ci].pts == 220) {
        ptsNeeded = 0
    } else {
        ptsNeeded = _rankPts[_sl[_ci].rank[0]+1] - _sl[_ci].pts;
    }
    if (_sl[_ci].rank[0] < 19) {
        // innerHTML("studentPopPts",_sl[_ci].pts + " <span style='color: #999'>| " + ptsNeeded +"</span>");
        innerHTML("studentPopPts",_sl[_ci].pts);
        innerHTML("ptsNote",_sl[_ci].pts+" points earned | "+ptsNeeded+" needed for next promotion");
    } else {
        innerHTML("studentPopPts",_sl[_ci].pts);
        innerHTML("ptsNote",_sl[_ci].pts+" points earned");
    }
    if (_rankNames[_sl[_ci].rank[0]].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    if (_rankNames[_sl[_ci].rank[0]].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    if (_sl[_ci].name[0].length > 15) {
        document.getElementById("studentPopName").style.fontSize = "22px";
    } else {
        document.getElementById("studentPopName").style.fontSize = "25px";
    }
}

function refreshMissionsPop() {
    if (_ew > 1) {
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _asNames.length) {continue}
            if (_sl[_ci].as[i][0] == _asMaxPts[i]) {
                bgColor("as"+i+"Pop","green");
            } else if (_sl[_ci].as[i][0] > 0 && _sl[_ci].as[i][0] < _asMaxPts[i]) {
                bgColor("as"+i+"Pop","darkorange");
            } else {
                bgColor("as"+i+"Pop","black");
            }
        }
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _mvNames.length) {continue}
            if (_sl[_ci].mv[i][0] == _mvMaxPts[i]) {
                bgColor("mv"+i+"Pop","green");
            } else if (_sl[_ci].mv[i][0] > 0 && _sl[_ci].mv[i][0] < _mvMaxPts[i]) {
                bgColor("mv"+i+"Pop","darkorange");
            } else {
                bgColor("mv"+i+"Pop","black");
            }
        }
    }
}

function hideMainMenu() {
    var pops = ["missionsPop2","calendarPop","resourcesPop","helpPop"]
    for (i = 0; i < pops.length; i++) {
        if (document.getElementById(pops[i]).style.display == "block") {
            document.getElementById(pops[i]).style.display = "none"
        }
    }
}

function loadStudent(index) {
    _ci = index; _currentStudent = _sl[_ci].name[0]; _firstName = _sl[_ci].name[0].split(" ")[0];
    if (_sl[_ci].gender == "M") {_nomPron = "He";_possPron = "His"} else {_nomPron = "She";_possPron = "Her"}
    value("searchField",""); display("hint","none");
    refreshStudentPop(); refreshMissionsPop(); resetMissions(); resetStudentMenu(); loadStudentStats(); loadLbs(); loadPopText(); hideMainMenu();
    document.activeElement.blur();
}

function loadPopText() {

    innerHTML("rankChartPopText",_firstName+" has earned "+_sl[_ci].rank[0]+" out of 19 possible promotions ("+_rankPercentage+"%). "+_possPron+" current rank is highlighted in <span class='lg'>green</span> below. Note that certain promotions (2LT, BG, and GOA) require more points than others.");

    innerHTML("tpPopText",_firstName+" has earned "+_totalEarnedPts+" out of "+_totalPts+" possible points for all missions ("+_totalPtsPercentage+"%). To see the completion status of all "+_firstName+"'s assigned missions, click the <span class='do'>MISSIONS</span> tab above.<br><br><span class='colorCode' style='background-color:green'></span> Completed missions are green<br><br><span class='colorCode' style='background-color:darkorange'></span> Partially completed missions are orange<br><br><span class='colorCode' style='background-color:black'></span> Incomplete missions are black");
    
    innerHTML("asPointsPopText",_firstName+" has earned "+_earnedASpts+" out of "+_totalASpts+" possible activity sheet points ("+_asPercentage+"%). To see the completion status of all "+_firstName+"'s assigned activity sheets, click the <span class='do'>MISSIONS</span> tab above.<br><br><span class='colorCode' style='background-color:green'></span> Completed activities are green<br><br><span class='colorCode' style='background-color:darkorange'></span> Partially completed activities are orange<br><br><span class='colorCode' style='background-color:black'></span> Incomplete activities are black");
    
    innerHTML("mvPointsPopText",_firstName+" has earned "+_earnedMVpts+" out of "+_totalMVpts+" possible memory verse points ("+_mvPercentage+"%). To see the completion status of all "+_firstName+"'s assigned memory verses, click the <span class='do'>MISSIONS</span> tab above.<br><br><span class='colorCode' style='background-color:green'></span> Completed verses are green<br><br><span class='colorCode' style='background-color:darkorange'></span> Partially completed verses are orange<br><br><span class='colorCode' style='background-color:black'></span> Incomplete verses are black");
    
    innerHTML("studentAttStatsPopText",_firstName+" has attended "+_weeksAttended+" out of "+_ew+" class sessions ("+_attPercentage+"%). Attendance does not count towards points/promotions, but students with perfect attendance will receive a special certificate at the end of the year.");
    
    innerHTML("participationPopText","Participation is a combination of all the student's activity sheet points, memory verse points, and attendance. Students with a perfect participation score will receive a special, extra prize on the last day of class (separate from the General of the Army prizes).<br><br>"+_firstName+" has earned "+_earnedASpts+" out of "+_totalASpts+" activity sheet points, "+_earnedMVpts+" out of "+_totalMVpts+" memory verse points, and has attended "+_weeksAttended+" out of "+_ew+" weeks. That totals to "+_totalEarned+" out of "+_totalPossible+" possible ("+_totalPercentage+"%)");
    
    innerHTML("calendarPopText","Latest class date is highlighted in <span class='lg'>green</span> below");
}

function loadLbs() {
    if (!pointsExist()) {
        display("lbContainer","none"); display("lbMssg","block");
        innerHTML("lbMssg","Leader boards will appear here once students start earning points."); return
    } else {
        display("lbContainer","block"); display("lbMssg","none");
        sortByPts(true); sortByASpts(true); sortByMVpts(true); sortByAtt(true); sortByTP(true); sortSL();
    }
}

function resetStudentMenu() {
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            bgColor("studentMenu"+i,"#777");
        } else {
            bgColor("studentMenu"+i,"black");
        }
    }
}

function resetMainMenu() {
    for (let i = 0; i < 4; i++) {
            bgColor("main"+i,"black");
    }
}

function studentMenuSwitch(x) {
    _array = ["missionsPop"];
    var allPops = document.getElementsByClassName("pop");
    var pops = ["studentStatsPop","missionsPop","calendarPop","resourcesPop"];
    _currentPop = pops[x];
    for (let i = 0; i < 4; i++) {
        if (i == x) {
            bgColor("studentMenu"+i,"#777");
        } else {
            bgColor("studentMenu"+i,"black");
        }
    }
    for (let i = 0; i < 5; i++) {
        if (i == x) {
            display(pops[i],"block");
        }
    }
    for (let i = 0; i < allPops.length; i++) {
        if (allPops[i].id != pops[x] && allPops[i].id != "studentPop") {
            allPops[i].style.display = "none";
        }
    }
    setTimeout(function() {window.scrollTo(0,0);},100);
}

function mainMenuSwitch(x) {
    if (x == _currentMainMenuIndex) {
        hideMainMenu(); resetMainMenu(); _currentMainMenuIndex = -1; return;
    }
    _currentMainMenuIndex = x;
    _array = ["missionsPop2"];
    var allPops = document.getElementsByClassName("pop");
    var pops = ["missionsPop2","calendarPop","resourcesPop","helpPop"];
    _currentPop = pops[x];
    for (let i = 0; i < 4; i++) {
        if (i == x) {
            bgColor("main"+i,"#777");
        } else {
            bgColor("main"+i,"black");
        }
    }
    for (let i = 0; i < 5; i++) {
        if (i == x) {
            display(pops[i],"block");
        }
    }
    for (let i = 0; i < allPops.length; i++) {
        if (allPops[i].id != pops[x] && allPops[i].id != "mainPop") {
            allPops[i].style.display = "none";
        }
    }
    setTimeout(function() {window.scrollTo(0,0);},100);
}

function asLinks() {
    window.open("class/docs/missions/as"+_asNum+".pdf","_blank");
}

function scanLinks() {
    window.open("class/docs/as-scans/"+_firstName.toLowerCase()+"-"+_sl[_ci].name[0].split(" ")[1].toLowerCase()+"-"+_asNum+".pdf","_blank");
}

function mvLinks() {
    window.open("class/docs/memory/mv"+_mvNum+".pdf","_blank");
}

function currentMissionsButton() {
    if (_isClassDay && dateAndTime("hour") < 22) {
        pop(['mainPop'],['currentMissionsPop'])
    } else {
        downloadCurrentMissions()
    }
}

function currentMissionsButton2() {
    if (_isClassDay && dateAndTime("hour") < 22) {
        pop(['missionsPop'],['currentMissionsPop2'])
    } else {
        downloadCurrentMissions()
    }
}

function downloadCurrentMissions(old) {
    var factor = 0; if (old) { factor = 1 }
    if (_ti-factor < (_asNames.length-1)) {
        window.open("class/docs/combined-missions/asmv"+(_ti-factor)+".pdf","_blank");
    } else {
        window.open("class/docs/combined-missions/asmv"+(_asNames.length-1)+".pdf","_blank");
    }
}

function pop(closeArray,openArray,title) {
    for (let i = 0; i < closeArray.length; i++) {
        if (closeArray != []) {
            display(closeArray[i],"none");
        }
    }
    for (let i = 0; i < openArray.length; i++) {
        if (openArray != []) {
            display(openArray[i],"block");
        }    
    }
    if (openArray.includes("mainPop")) {
        value("searchField","");
        idFocus("searchField");
    }
    if (openArray.includes("customSortListPop")) {
        innerHTML("customSortListLabel",title);
    }
    setTimeout(function() {window.scrollTo(0,0);},100);
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (let i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        display("mainPop","block");
    }
    resetMainMenu();
    _currentPop = "mainPop";
    value("searchField","");
    idFocus("searchField");
}

function asPop(asNum,pts) {
    _asNum = asNum;
    innerHTML("asSheetName",_asNames[_asNum].toUpperCase());
    innerHTML("asDateAssigned",cdn(_dns[asNum],"word"));
    innerHTML("asDateDue",cdn(_dns[asNum+1],"word"));
    innerHTML("asPtsEarned",_sl[_ci].as[_asNum][0]+"/"+_asMaxPts[_asNum]);
    if (_sl[_ci].as[_asNum][0] == _asMaxPts[_asNum]) {
        innerHTML("asCompletionStatus","COMPLETED");
        color("asCompletionStatus","lawnGreen");
    } else if (_sl[_ci].as[_asNum][0] == 0) {
        innerHTML("asCompletionStatus","NOT TURNED IN");
        color("asCompletionStatus","red"); 
    } else {
        innerHTML("asCompletionStatus","PARTIAL CREDIT");
        color("asCompletionStatus","orange");
    }
    if (_sl[_ci].as[_asNum][0] > 0) {
        display("scannedImage","table-cell");
    } else {
        display("scannedImage","none");
    }
    if (_sl[_ci].as[_asNum][1] == 0) {
        innerHTML("asDateTurnedIn","-");
    } else {
        innerHTML("asDateTurnedIn",cdn(_sl[_ci].as[_asNum][1],"word"));
    }
    display("missionsPop","none");
    display("asPtsPop","block");
}

function mvPop(mvNum,pts) {
    display("missionsPop","none");
    display("mvPtsPop","block");
    _mvNum = mvNum;
    innerHTML("mvVerseName",_mvNames[_mvNum].toUpperCase());
    innerHTML("mvDateAssigned",cdn(_dns[mvNum],"word"));
    innerHTML("mvDateDue",cdn(_dns[mvNum+1],"word"));
    innerHTML("mvPtsEarned",_sl[_ci].mv[_mvNum][0]+"/"+_mvMaxPts[_mvNum]);
    if (_sl[_ci].mv[_mvNum][0] == _mvMaxPts[_mvNum]) {
        innerHTML("mvCompletionStatus","COMPLETED");
        color("mvCompletionStatus","lawnGreen");
    } else if (_sl[_ci].mv[_mvNum][0] == 0) {
        innerHTML("mvCompletionStatus","NOT RECITED");
        color("mvCompletionStatus","red");
    } else {
        innerHTML("mvCompletionStatus","PARTIAL CREDIT");
        color("mvCompletionStatus","orange");
    }
    if (_sl[_ci].mv[_mvNum][1] == 0) {
        innerHTML("mvDateRecited","-");
    } else {
        innerHTML("mvDateRecited",cdn(_sl[_ci].mv[_mvNum][1],"word"));
    }
    innerHTML("mvText","\""+_mvText[mvNum]+"\"");
}

function generateRankTable() {
    for (let i = 0; i < 20; i++) {
        var tr = createElement("tr");
        var td1 = createElement("td"); var td2 = createElement("td");
        var td3 = createElement("td"); var td4 = createElement("td");
        var td5 = createElement("td");
        tr.setAttribute("id","rankChartRow"+i);
        td1.setAttribute("id","rankChartInsignia"+i);
        td2.setAttribute("id","rankChartRank"+i);
        td3.setAttribute("id","rankChartAbbreviation"+i);
        td4.setAttribute("id","rankChartPts"+i);
        td5.setAttribute("id","rankChartDate"+i);
        tr.append(td1,td2,td3,td4,td5);
        append("rankChartTable",tr);
    }
}

function generateStudentAttTable() {
    for (let i = 0; i < 34; i++) {
        var tr = createElement("tr");
        var td1 = createElement("td"); var td2 = createElement("td");
        var td3 = createElement("td"); var td4 = createElement("td");
        tr.setAttribute("id","studentAttRow"+i);
        td1.setAttribute("id","studentAttDate"+i);
        td2.setAttribute("id","studentAttAM"+i);
        td3.setAttribute("id","studentAttPM"+i);
        tr.append(td1,td2,td3);
        append("studentAttTable",tr);
    }
}

function generateStudentStatsTables() {
    var tables = ["tpTable","asProgressTable","mvProgressTable","attProgressTable","participationTable"];
    var ids = ["tpBar","asProgressBar","mvProgressBar","attProgressBar","participationBar"];
    for (let i = 0; i < tables.length; i++) {
        var tr = createElement("tr");
        for (let j = 1; j < 41; j++) {
            var td = createElement("td");
            td.setAttribute("id",ids[i]+j);
            tr.append(td);
            append(tables[i],tr);
        }
    }
}

function generateCalendarTable() {
    var titles = ["No Kidstuff (Labor Day weekend)","No Kidstuff (Anniversary Sunday)","No Kidstuff (Thanksgiving)","No Kidstuff (Christmas)","No Kidstuff (New Years)","No Kidstuff (Easter)","Armor Review","CLASS PARTY"];
    for (let i = 0; i < _dns.length; i++) {
        if (_dns[i] - _dns[i-1] == 14) {
            var tr1 = createElement("tr");
            var td1 = createElement("td");
            var td2 = createElement("td");
            tr1.style.color = "red";
            td2.setAttribute("colspan",2);
            td1.innerHTML = cdn(_dns[i-1]+7,"word");
            td2.innerHTML = titles.shift();
            tr1.append(td1,td2);
            append("calendarTable",tr1);
        } 
        if (_dns[i] - _dns[i-1] == 21) {
            var tr1 = createElement("tr");
            tr1.style.color = "red";
            var td1 = createElement("td");
            var td2 = createElement("td");
            td1.innerHTML = cdn(_dns[i-1]+7,"word");
            td2.innerHTML = titles.shift();
            td2.setAttribute("colspan",2);
            tr1.append(td1,td2);
            append("calendarTable",tr1);
            var tr2 = createElement("tr");
            tr2.style.color = "red";
            var td3 = createElement("td");
            var td4 = createElement("td");
            td3.innerHTML = cdn(_dns[i-1]+14,"word");
            td4.innerHTML = titles.shift();
            td4.setAttribute("colspan",2);
            tr2.append(td3,td4);
            append("calendarTable",tr2);
        }
        var tr1 = createElement("tr");
        var td1 = createElement("td");
        tr1.setAttribute("id","calendarRow"+i);
        td1.setAttribute("id","calendarDate"+i);
        if (i >= _dns.length-2) {
            var td2 = createElement("td");
            td2.setAttribute("colspan",2);
            td2.innerHTML = titles.shift();
            tr1.append(td1,td2);
            append("calendarTable",tr1);
        } else {
            var td2 = createElement("td");
            var td3 = createElement("td");
            tr1.setAttribute("id","calendarRow"+i);
            td1.setAttribute("id","calendarDate"+i);
            td2.setAttribute("id","calendarLesson"+i);
            td3.setAttribute("id","calendarMemory"+i);
            tr1.append(td1,td2,td3);
            append("calendarTable",tr1);
        }
    }
    populateCalendar();
}

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank[0]) / 19) * 100).toFixed(1); _rankPercentage = rankPercentage;
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0; var earnedASpts = 0;   
    var totalMVpts = 0; var earnedMVpts = 0;
    for (let i = 0; i < _ti; i++) {
        if (i > (_asMaxPts.length-1)) {break}
        totalASpts += _asMaxPts[i];
        totalMVpts += _mvMaxPts[i];
        earnedASpts += _sl[_ci].as[i][0];
        earnedMVpts += _sl[_ci].mv[i][0];
    }
    _totalASpts = totalASpts; _totalMVpts = totalMVpts;
    _earnedASpts = earnedASpts; _earnedMVpts = earnedMVpts;
    var totalPts = totalASpts + totalMVpts; _totalPts = totalPts;
    var totalEarnedPts = earnedASpts + earnedMVpts; _totalEarnedPts = totalEarnedPts;
    var asPercentage = _totalPts > 0 ? ((earnedASpts / totalASpts) * 100).toFixed(1) : 0;
    var mvPercentage = _totalPts > 0 ? ((earnedMVpts / totalMVpts) * 100).toFixed(1) : 0;
    var totalPtsPercentage = _totalPts > 0 ? ((totalEarnedPts / totalPts) * 100).toFixed(1) : 0;
    _asPercentage = asPercentage; _mvPercentage = mvPercentage; _totalPtsPercentage = totalPtsPercentage;
    var asSquares = Math.round(asPercentage / 2.50);
    var mvSquares = Math.round(mvPercentage / 2.50);
    var totalPtsSquares = Math.round(totalPtsPercentage / 2.50);
    var weeksAttended = 0;
    for (let i = 0; i < _ew; i++) {
        weeksAttended += _sl[_ci].attArr[i][0];
        weeksAttended += _sl[_ci].attArr[i][1];
        if (_sl[_ci].attArr[i][0] == 1 && _sl[_ci].attArr[i][1] == 1) {
            weeksAttended--;
        }
    }
    _weeksAttended = weeksAttended;
    var attPercentage = ((weeksAttended / _ew) * 100).toFixed(1); _attPercentage = attPercentage;
    var attSquares = Math.round(attPercentage / 2.50);
    var totalEarned = weeksAttended + earnedASpts + earnedMVpts; _totalEarned = totalEarned;
    var totalPossible = _ew + totalASpts + totalMVpts; _totalPossible = totalPossible;
    var totalPercentage = ((totalEarned / totalPossible) * 100).toFixed(1); _totalPercentage = totalPercentage;
    var totalSquares = Math.round(totalPercentage / 2.50);
    var squaresArray = [totalPtsSquares,asSquares,mvSquares,attSquares,totalSquares];
    var variableArray = [totalPtsPercentage,asPercentage,mvPercentage,attPercentage,totalPercentage];
    var idArray1 = ["tpTable","asProgressTable","mvProgressTable","attProgressTable","participationTable"];
    var idArray2 = ["tpBar","asProgressBar","mvProgressBar","attProgressBar","participationBar"];
    for (let i = 0; i < squaresArray.length; i++) {
        for (let j =1; j <= 40; j++) {
            if (j <= squaresArray[i]) {
                if (i > 2) {
                    bgColor(idArray2[i]+j,"#3478F6");
                } else {
                    bgColor(idArray2[i]+j,"lawngreen");
                }
            } else {
                bgColor(idArray2[i]+j,"black");
            }
        }
    }
    for (let i = 0; i < variableArray.length; i++) {
        if (variableArray[i] == 100.00) {
            if (i > 2) {
                bgColor(idArray1[i],"#3478F6");
            } else {
                bgColor(idArray1[i],"lawngreen");
            }
        } else {
            bgColor(idArray1[i],"black");
        }
    }

    innerHTML("tpTableP","<span style='font-size:20px'>Total Points <span style='color:#bbb;font-size:16px'>" + totalEarnedPts + "/" + totalPts + " (" + totalPtsPercentage + "%)<span class='classRankSpan'> | Class Rank: " + _sl[_ci].statsRanks[0] + "</span>");

    innerHTML("asProgressTableP","<span style='font-size:20px'>Activities <span style='color:#bbb;font-size:16px'>" + earnedASpts + "/" + totalASpts + " (" + asPercentage + "%)<span class='classRankSpan'> | Class Rank: " + _sl[_ci].statsRanks[1] + "</span>");

    innerHTML("mvProgressTableP","<span style='font-size:20px'>Memory <span style='color:#bbb;font-size:16px'>" + earnedMVpts + "/" + totalMVpts + " (" + mvPercentage + "%)<span class='classRankSpan'> | Class Rank: " + _sl[_ci].statsRanks[2] + "</span>");

    innerHTML("attProgressTableP","<span style='font-size:20px'>Attendance <span style='color:#bbb;font-size:16px'>" + weeksAttended + "/" + _ew + " (" + attPercentage + "%)<span class='classRankSpan'> | Class Rank: " + _sl[_ci].statsRanks[3] + "</span>");

    innerHTML("participationTableP","<span style='font-size:20px'>Participation <span style='color:#bbb;font-size:16px'>" + totalEarned + "/" + totalPossible + " (" + totalPercentage + "%)<span class='classRankSpan'> | Class Rank: " + _sl[_ci].statsRanks[4] + "</span>");

    if (_ew == 1) { 
        var spans = document.getElementsByClassName("classRankSpan");
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.display = "none";
        }
    }
}

function populateMissions() {
    innerHTML("asPop",""); innerHTML("mvPop","");
    if (_ew == 1) {
        display("initialMissionsNote","block");
        innerHTML("initialMissionsNote","No missions are due yet. Missions that have come due will appear here starting next Sunday ("+cdn(_dns[1],"word")+"). To download the missions that were assigned for this week (and due next Sunday), click the \"Download This Week's Missions\" button on the home page.");
    } else {display("initialMissionsNote","none");}
    if (_ew > 1) {
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _asNames.length) { continue }
            var div1 = createElement("div");
            div1.setAttribute("id","as"+i+"Pop");
            div1.classList.add("asButton");
            (function(i){
                div1.onclick = function () {
                    asPop(i,_asMaxPts[i]);
                }
            })(i);
            div1.innerHTML = _asFulls[i];
            append("asPop",div1);
        }
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _mvNames.length) { continue }
            var div2 = createElement("div");
            div2.setAttribute("id","mv"+i+"Pop");
            div2.classList.add("mvButton");
            (function(i){
                div2.onclick = function () {
                    mvPop(i,_mvMaxPts[i]);
                }
            })(i);
            div2.innerHTML = _mvFulls[i] + "<br>" + _mvText[i].split(" ").slice(0,3).join(" ");
            append("mvPop",div2);
        }
    }
}

function populateMissions2() {
    innerHTML("asPop2",""); innerHTML("mvPop2","");
    if (_ew == 1) {
        display("initialMissionsNote","block");
        innerHTML("initialMissionsNote","No missions are due yet. Missions that have come due will appear here starting next Sunday ("+cdn(_dns[1],"word")+"). To download the missions that were assigned for this week (and due next Sunday), click the \"Download This Week's Missions\" button above.");
    } else {display("initialMissionsNote","none");}
    if (_ew > 1) {
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _asNames.length) { continue }
            var div1 = createElement("div");
            div1.setAttribute("id","as2-"+i+"Pop");
            div1.classList.add("asButton");
            (function(i){
                div1.onclick = function () {
                    _asNum = i;
                    asLinks();
                }
            })(i);
            div1.innerHTML = _asFulls[i];
            append("asPop2",div1);
        }
        for (let i = (_ti-1); i >= 0; i--) {
            if (i >= _mvNames.length) { continue }
            var div2 = createElement("div");
            div2.setAttribute("id","mv2-"+i+"Pop");
            div2.classList.add("mvButton");
            (function(i){
                div2.onclick = function () {
                    _mvNum = i;
                    mvLinks();
                }
            })(i);
            div2.innerHTML = _mvFulls[i] + "<br>" + _mvText[i].split(" ").slice(0,3).join(" ");
            append("mvPop2",div2);
        }
    }
}

function loadRankTable() {
    var ids = ["studentStatsPop","missionsPop","calendarPop","resourcesPop"];
    for (let i = 0; i < ids.length; i++) {
        if (document.getElementById(ids[i]).style.display == "block") {
            document.getElementById(ids[i]).style.display = "none"
        }
        display("rankChartPop","block")
    }
    for (let i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(class/img/insignia-darkgray/"+i+"-rank.jpg)";
        innerHTML("rankChartRank"+i,_rankNames[i]);
        innerHTML("rankChartAbbreviation"+i,_rankNamesShort[i]);
        innerHTML("rankChartPts"+i,_rankPts[i]);
        if (i > 0) {
            innerHTML("rankChartDate"+i,cdn(_sl[_ci].promoDns[i-1]))
        } else {
            innerHTML("rankChartDate"+i,cdn(_sl[_ci].dateAdded))
        }
        if (i == _sl[_ci].rank[0]) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        }
    }
    setTimeout(function() {window.scrollTo(0,0);},100);
}

function openInsignia() {
    document.getElementById("displayInsignia").style.backgroundImage = "url(class/img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    pop(["studentStatsPop"],["openInsigniaPop"]);
}

function toggleIncomplete() {
    if (_ew > 1) {
        var noneHidden = true;
        for (let i = 0; i < (_ew-2); i++) {
            if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
                noneHidden = false; break;
            }
        }
        if (noneHidden) {
            for (let i = 0; i < (_ew-2); i++) {
                if (_sl[_ci].as[i][0] < _asMaxPts[i]) {
                    display("as"+i+"Pop","block");
                } else {
                    display("as"+i+"Pop","none");
                }
                if (_sl[_ci].mv[i][0] < _mvMaxPts[i]) {
                    display("mv"+i+"Pop","block");
                } else {
                    display("mv"+i+"Pop","none");
                }
            }
        } else {
            for (let i = 0; i < (_ew-2); i++) {
                display("as"+i+"Pop","block");
                display("mv"+i+"Pop","block");
            }
        }
    }
}

function resetMissions() {
    if (_ew > 1) {
        for (let i = 0; i < (_ew-2); i++) {
            display("as"+i+"Pop","block");
            display("mv"+i+"Pop","block");
        }
    }
}

function averageArray(array) {
    function sum(a,b) {
        return a + b;
    }
    return Math.round(array.reduce(sum)/array.length);
}

function sumArray(array) {
    function sum(a,b) {
        return a + b;
    }
    return array.reduce(sum);
}

function sumArrays(arrays) {
    var sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        sum += sumArray(arrays[i])
    }
    return sum;
}

function loadStudentAttStats() {
    for (let i = 0; i < _ew; i++) {
        innerHTML("studentAttDate"+i,cdn(_dns[i],"word"));
        if (_sl[_ci].attArr[i][0] == 1) {
            innerHTML("studentAttAM"+i,"X");
        } else {
            innerHTML("studentAttAM"+i,"");
        }
        if (_sl[_ci].attArr[i][1] == 1) {
            innerHTML("studentAttPM"+i,"X");
        } else {
            innerHTML("studentAttPM"+i,"");
        }
        if (_sl[_ci].attArr[i][0] == 0 && _sl[_ci].attArr[i][1] == 0) {
            color("studentAttDate"+i,"red");
        } else {
            color("studentAttDate"+i,"lawngreen");
        }
    }
    for (let i = 0; i < 34; i++) {
        if (i < _ew) {
            display("studentAttRow"+i,"table-row");
        } else {
            display("studentAttRow"+i,"none");
        }
    }
    pop(["studentStatsPop"],["studentAttStatsPop"]);
}

function cdn(dn,type) {
    if (dn == 0) { return "-" }
    var words = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var months = [8,9,10,11,12,1,2,3,4,5,6,7];
    var cumulative = [0,31,61,92,122,153,184,212,243,273,304,334];
    var cumulativeLeap = [0,31,61,92,122,153,184,213,244,274,305,335];
    var month; var date;
    if (!_leapYear) {
        for (let i = 0; i < cumulative.length; i++) {
            if (dn >= cumulative[i] && dn <= cumulative[i+1]) {
                month = months[i]; date = dn - cumulative[i]; break;
            }
            if (dn > 334) {
                month = 7; date = dn - 334; break;
            }
        }
    } else {
        for (let i = 0; i < cumulative.length; i++) {
            if (dn >= cumulativeLeap[i] && dn <= cumulativeLeap[i+1]) {
                month = months[i]; date = dn - cumulativeLeap[i]; break;
            }
            if (dn > 335) {
                month = 7; date = dn - 335; break;
            }
        }
    }
    if (type == "M") {
        return month
    } else if (type == "D") {
        return date
    } else if (type == "word") {
        return words[month-1] + " " + date;
    } else {
        return month + "/" + date;
    }
}

function assignDn(month,date) {
    if (month == 0 || date == 0) { return 0 } var dn;
    var cumulative = [153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [153,184,213,244,274,305,335,0,31,61,92,122];
    if (month < 3 || month > 7) {
        dn = (cumulative[month-1]) + date;
    }
    if (month > 2 || month < 8) {
        if (_leapYear) {
            dn = (cumulativeLeap[month-1]) + date;
        } else {
            dn = (cumulative[month-1]) + date;
        }
    }
    return dn;
}

function pressKey(key,id) {
    if(event.keyCode==key)document.getElementById(id).click()
}

function pointsExist() {
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].pts > 0) {
            return true
        }
    }
    return false
}

function manualSetEw(x) {
    _ew = x; _ti = x-1;
    populateMissions();
}

function passThruAlert(currentPop,currentFunction,mssg) {
    _currentPops = currentPop; _currentFunction = currentFunction;
    innerHTML("passThruAlertMssg",mssg);
    pop([_currentPop],["passThruAlertPop"]);
}

function alertMssg() {
    var timeWord = "Next Sunday"; var holidays = []; var dayOf = [];
    for (let i = 0; i < _dns.length; i++) {
        if (_dns[i] - _dns[i+1] < -7) {
            holidays.push(_dns[i]); dayOf.push(_dns[i]+7);
        }
    }
    dayOf.push(holidays[1]+14,holidays[2]+14);
    if (_todaysDn == holidays[0]+7 || _todaysDn == holidays[1]+7 || _todaysDn == holidays[1]+14 || _todaysDn == holidays[2]+7 || _todaysDn == holidays[2]+14 || _todaysDn == holidays[3]+7 || _todaysDn == holidays[3]+14) {timeWord = "Today"}
    var laborDay = timeWord+" ("+cdn(holidays[0]+7,"word")+") is a \"Family Worship Sunday\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[0]+14,"word")+"!";
    var annivThanks1 = timeWord+" ("+cdn(holidays[1]+7,"word")+") and the following Sunday ("+cdn(holidays[1]+14,"word")+") are \"Family Worship Sundays\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[1]+21,"word")+"!";
    var annivThanks2 = timeWord+" ("+cdn(holidays[1]+14,"word")+") is a \"Family Worship Sunday\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[1]+21,"word")+"!";
    var christmasNew1 = timeWord+" ("+cdn(holidays[2]+7,"word")+") and the following Sunday ("+cdn(holidays[2]+14,"word")+") are \"Family Worship Sundays\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[2]+21,"word")+"!";
    var christmasNew2 = timeWord+" ("+cdn(holidays[2]+14,"word")+") is a \"Family Worship Sunday\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[2]+21,"word")+"!";
    var easter = timeWord+" ("+cdn(holidays[3]+7,"word")+") is a \"Family Worship Sunday\", meaning that K5-6th grade kids will remain with their families during the worship service; Kidstuff and Treehouse will not meet. We'll see you all back in the Kidstuff hallways on "+cdn(holidays[3]+14,"word")+"!";
    if (_todaysDn >= holidays[0] && _todaysDn <= holidays[0]+7) {
        _alert = true; innerHTML("alertMssg",laborDay);
    } else if (_todaysDn >= holidays[1] && _todaysDn <= holidays[1]+7) {
        _alert = true; innerHTML("alertMssg",annivThanks1);
    } else if (_todaysDn > holidays[1]+7 && _todaysDn <= holidays[1]+14) {
        _alert = true; innerHTML("alertMssg",annivThanks2);
    } else if (_todaysDn >= holidays[2] && _todaysDn <= holidays[2]+7) {
        _alert = true; innerHTML("alertMssg",christmasNew1);
    } else if (_todaysDn > holidays[2]+7 && _todaysDn <= holidays[2]+14) {
        _alert = true; innerHTML("alertMssg",christmasNew2);
    } else if (_todaysDn >= holidays[3] && _todaysDn <= holidays[3]+7) {
        _alert = true; innerHTML("alertMssg",easter);
    }
}

loadBackup();

idFocus("searchField");