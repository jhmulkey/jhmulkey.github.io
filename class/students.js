var _sl = []; var _ci;
var _asNum; var _mvNum;
var _asPoints;
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3];
var _leapYear = false; // Jan-July falls within a leap year
var _weeksOff = 0;
    function setWeeksOff() {
        var todaysMonth = dateAndTime("month"); var todaysDate = dateAndTime("date")
        if ((todaysMonth == 8 && todaysDate == 29) || (todaysMonth == 4 && todaysDate == 10)) {
            _weeksOff = 1;
        } else if ((todaysMonth == 11 && todaysDate == 14) || (todaysMonth == 12 && todaysDate == 19)) {
            _weeksOff = 2;
        } else {
            _weeksOff = 0;
        }
    }
var _bdayList = []; var _promotionList = [];
var _noteIndex;
var _teacherNotes = [];
var _teacherNoteIndex;
var _log = ""; var _gameLog = ""; 
var _currentPops; var _currentPops2; var _sharedPop; var _array;
var _populateNotesID = [];
var _focus;
var _currentFunction; var _currentParameter;
var _eligibleRandom;
var _teams = [];
var _dataInputParameter;
var _amAtt = []; var _pmAtt = [];
var _rankNamesAbbr = ["PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAJ","LTC","COL","BG","MG","LTG","GEN","GOA"];
var _rankNames = ["Private","Private First Class","Corporal","Sergeant","Staff Sergeant","Sergeant First Class","Master Sergeant","Sergeant Major","Command Sergeant Major","Second Lieutenant","First Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","General of the Army"];
var _elapsedWeeks;
var _isClassDay;
var _classDates = ['8/22', '8/29', '9/12', '9/19', '9/26', '10/3', '10/10', '10/17', '10/24', '10/31', '11/7', '11/14', '12/5', '12/12', '12/19', '1/9', '1/16', '1/23', '1/30', '2/6', '2/13', '2/20', '2/27', '3/6', '3/13', '3/20', '3/27', '4/3', '4/10', '4/24', '5/1', '5/8', '5/15', '5/22'];
var _dateNumbers = [22, 29, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 127, 134, 141, 162, 169, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 267, 274, 281, 288, 295];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asFullNames = ["Class Intro","John Intro","John 1","John 2","John 3","John 4","John 5","John 6","John 7","John 8","John 9","John 1-9 Review","John 10","John 11","John 12","John 13","John 14","John 15","John 16","John 17","John 18","John 19","John 20","John 21","John 10-21 Review","Armor Intro","Belt","Breastplate","Shoes","Shield","Helmet","Sword"];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword"];
var _mvFullNames = ["Psalm 139:17-18","John 20:30-31","John 1:1-2","John 1:3","John 1:4-5","John 1:6-8","John 1:9-11","John 1:12-13","John 1:14","John 1:15","John 1:16-17","John 1:18","Phil 2:5-6","Phil 2:7","Phil 2:8","Phil 2:9","Phil 2:10-11","Rom 8:31","Rom 8:32","Rom 8:33","Rom 8:34","Rom 8:35","Rom 8:36","Rom 8:37","Rom 8:38-39","Eph 6:10-11","Eph 6:12","Eph 6:13","Eph 6:14-15","Eph 6:16","Eph 6:17","Eph 6:18"];
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8","phil-2-9","phil-2-10-11","rom-8-31","rom-8-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"];
var _mvTextSnippets = ["How precious to", "Now Jesus did", "In the beginning", "All things were", "In him was", "There was a", "The true light,", "But to all", "And the Word", "(John bore witness", "For from his", "No one has", "Have this mind", "but emptied himself,", "And being found", "Therefore God has", "so that at", "What then shall", "He who did", "Who shall bring", "Who is to", "Who shall separate", "As it is", "No, in all", "For I am", "Finally, be strong", "For we do", "Therefore take up", "Stand therefore, having", "In all circumstances", "and take the", "praying at all"]
var _mvText = [
    "<span style='color: #3478F6'>Psalm 139:17-18</span><br>How precious to me are your thoughts, O God! How vast is the sum of them! If I would count them, they are more than the sand. I awake, and I am still with you.",
    "<span style='color: #3478F6'>John 20:30-31</span><br>Now Jesus did many other signs in the presence of the disciples, which are not written in this book; but these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.",
    "<span style='color: #3478F6'>John 1:1-2</span><br>In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God.",
    "<span style='color: #3478F6'>John 1:3</span><br>All things were made through him, and without him was not any thing made that was made.",
    "<span style='color: #3478F6'>John 1:4-5</span><br>In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.",
    "<span style='color: #3478F6'>John 1:6-8</span><br>There was a man sent from God, whose name was John. He came as a witness, to bear witness about the light, that all might believe through him. He was not the light, but came to bear witness about the light.",
    "<span style='color: #3478F6'>John 1:9-11</span><br>The true light, which gives light to everyone, was coming into the world. He was in the world, and the world was made through him, yet the world did not know him. He came to his own, and his own people did not receive him.",
    "<span style='color: #3478F6'>John 1:12-13</span><br>But to all who did receive him, who believed in his name, he gave the right to become children of God, who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.",
    "<span style='color: #3478F6'>John 1:14</span><br>And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    "<span style='color: #3478F6'>John 1:15</span><br>(John bore witness about him, and cried out, “This was he of whom I said, ‘He who comes after me ranks before me, because he was before me.’”)",
    "<span style='color: #3478F6'>John 1:16-17</span><br>For from his fullness we have all received, grace upon grace. For the law was given through Moses; grace and truth came through Jesus Christ.",
    "<span style='color: #3478F6'>John 1:18</span><br>No one has ever seen God; the only God, who is at the Father's side, he has made him known.",
    "<span style='color: #3478F6'>Philippians 2:5-6</span><br>Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped,",
    "<span style='color: #3478F6'>Philippians 2:7</span><br>but emptied himself, by taking the form of a servant, being born in the likeness of men.",
    "<span style='color: #3478F6'>Philippians 2:8</span><br>And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    "<span style='color: #3478F6'>Philippians 2:9</span><br>Therefore God has highly exalted him and bestowed on him the name that is above every name,",
    "<span style='color: #3478F6'>Philippians 2:10-11</span><br>so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
    "<span style='color: #3478F6'>Romans 8:31</span><br>What then shall we say to these things? If God is for us, who can be against us?",
    "<span style='color: #3478F6'>Romans 8:31-32</span><br>He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
    "<span style='color: #3478F6'>Romans 8:33</span><br>Who shall bring any charge against God's elect? It is God who justifies.",
    "<span style='color: #3478F6'>Romans 8:34</span><br>Who is to condemn?  Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us.",
    "<span style='color: #3478F6'>Romans 8:35</span><br>Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?",
    "<span style='color: #3478F6'>Romans 8:36</span><br>As it is written, 'For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.'",
    "<span style='color: #3478F6'>Romans 8:37</span><br>No, in all these things we are more than conquerors through him who loved us.",
    "<span style='color: #3478F6'>Romans 8:38-39</span><br>For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "<span style='color: #3478F6'>Ephesians 6:10-11</span><br>Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.",
    "<span style='color: #3478F6'>Ephesians 6:12</span><br>For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.",
    "<span style='color: #3478F6'>Ephesians 6:13</span><br>Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.",
    "<span style='color: #3478F6'>Ephesians 6:14-15</span><br>Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness, and, as shoes for your feet, having put on the readiness given by the gospel of peace.",
    "<span style='color: #3478F6'>Ephesians 6:16</span><br>In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one;",
    "<span style='color: #3478F6'>Ephesians 6:17</span><br>and take the helmet of salvation, and the sword of the Spirit, which is the word of God,",
    "<span style='color: #3478F6'>Ephesians 6:18</span><br>praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints," 
];

function threeWords() {
    var finalArray = [];
    for (i = 0; i < _mvText.length; i++) {
        var tempArray = _mvText[i].split(" ")
        finalArray[i] = tempArray[0] + " " + tempArray[1] + " " + tempArray[2]
    }
    console.log(finalArray);
}

/* INDEX + RANK / POINTS / RANK FACTOR
0 PVT / 0
1 PFC / 10
2 CPL / 20
3 SGT / 30
4 SSG / 40
5 SFC / 50
6 MSG / 60
7 SGM / 70
8 CSM / 80
9 2LT / 100 / 1
10 1LT / 110
11 CPT / 120
12 MAJ / 130
13 LTC / 140
14 COL / 150 
15 BG / 170 / 2
16 MG / 180
17 LTG / 190
18 GEN / 200 
19 GOA / 220 / 3
*/

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    setElapsedWeeks(); isClassDay(); populateMissions(); populateCalendar();
}

function isClassDay() {
    var todaysDateNumber = assignTodaysDateNumber();
    for (i = 1; i < _dateNumbers.length; i++) {
        if (todaysDateNumber == _dateNumbers[i]) {
            _isClassDay = true; 
            document.getElementById("nameList").style.borderColor = "#3478F6";
            break;
        } else {
            _isClassDay = false;
        }
    }
}

// _dateNumbers = (34) [22, 29, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 127, 134, 141, 162, 169, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 267, 274, 281, 288, 295];

function setElapsedWeeks() {
    var todaysDateNumber = assignTodaysDateNumber();
    //var todaysDateNumber = 190;
    for (i = 0; i < _dateNumbers.length; i++) {
        if (todaysDateNumber == _dateNumbers[i]) {
            _elapsedWeeks = i + 1; break;
        }
        if (todaysDateNumber > _dateNumbers[0] && todaysDateNumber < _dateNumbers[i]) {
            _elapsedWeeks = i; break;
        }
        if (todaysDateNumber < _dateNumbers[0] || todaysDateNumber > _dateNumbers[_dateNumbers.length-1]) {
            _elapsedWeeks = 34;
        }
    }
}

function assignTodaysDateNumber() {
    //return 295;
    var todaysMonth = dateAndTime("month"); var todaysDate = dateAndTime("date")
    var cumulative = [0,153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [0,153,184,213,244,274,305,335,0,31,61,92,122];
    var dateNumber;
    if (_leapYear === true) {
        dateNumber = cumulativeLeap[todaysMonth] + todaysDate;
    } else {
        dateNumber = cumulative[todaysMonth] + todaysDate;
    }
    return dateNumber;
}

function dateAndTime(x) {
    var today = new Date();
    if (x == "month") { return today.getMonth() + 1 }
    if (x == "date") { return today.getDate() }
    if (x == "hour") { return today.getHours() }
    if (x == "full") { return (today.getMonth() + 1) + "/" + today.getDate() }
    if (x == "log") { return (today.getMonth() + 1)+"/"+today.getDate()+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds() }
}

function assignClassRanks() {
    var points = [];
    for (i = 0; i < _sl.length; i++) {
        points.push(_sl[i].points);
    }
    var pointsSorted = points.slice().sort(function(a,b){return b - a});
    var pointsRanked = points.map(function(v){return pointsSorted.indexOf(v)+1});
    for (i = 0; i < _sl.length; i++) {
        _sl[i].classRank = pointsRanked[i];
    }
}

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

function infoAlert(message,idArray,focus) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        document.getElementById("infoAlertPop").style.display = "none";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "block"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = "";
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        document.getElementById("infoAlertPop").style.display = "block";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "none"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = message;
    }
    if (_focus) { document.getElementById(_focus).focus(); }
}

function asPoints(_asNum,x,secondCall) {
    if (_sl[_ci].asDates[_asNum] == 0) {
        _sl[_ci].asDates[_asNum] = assignTodaysDateNumber();
    };
    if (x < _asMaxPts[_asNum] && x != _sl[_ci].as[_asNum] && !secondCall) {
        _asPoints = x;
        var buttons = ["as1Points","as2Points","as3Points","as4Points","as5Points","as6Points"];
        for (i = 0; i < buttons.length; i++) {
            if (i == (x-1)) {
                document.getElementById(buttons[i]).style.backgroundColor = "#3478F6";
            } else {
                document.getElementById(buttons[i]).style.backgroundColor = "black";
            }
        }
        document.getElementById("as"+x+"Points").style.backgroundColor = "#3478F6";
        document.getElementById("asReasonContainer").style.display = "block";
        document.getElementById("asReasonText").value = "";
        document.getElementById("asReasonText").focus();
        return;
    } else {
        if (x < _asMaxPts[_asNum] && x != _sl[_ci].as[_asNum] && document.getElementById("asReasonText").value == "") {
            infoAlert("Reason for partial credit required",["asPointsPop","studentPop","asReasonContainer"],"asReasonText"); return;
        }
        if (document.getElementById("asReasonContainer").style.display = "block") {
            document.getElementById("asReasonContainer").style.display = "none"
            _sl[_ci].asReasons[_asNum] = document.getElementById("asReasonText").value;
            if (x < _asMaxPts[_asNum]) {
                document.getElementById("asReason").innerHTML = "Reason for partial credit:<br><span style='color:white'>" + _sl[_ci].asReasons[_asNum] + "</span>";
            } else {
                document.getElementById("asReason").innerHTML = "";
            }
            document.getElementById("asReasonText").value = "";
        }
        var rankNum = _sl[_ci].rank;
        var rankFactor = _sl[_ci].rankFactor;
        var totalPts = _sl[_ci].points;
        var asPts = _sl[_ci].as[_asNum];
        var netPts = x - _sl[_ci].as[_asNum];
        var promotionStatus = 0;
        if (_sl[_ci].rank != 8 && _sl[_ci].rank != 14 && _sl[_ci].rank != 18) {
            if (asPts == 0 || asPts < x) {
                if ((totalPts - ((rankNum + rankFactor) * 10)) + netPts >= 10 && totalPts < 200) {
                    promotionStatus = 1;
                }
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            }
            if (asPts > x) {
                if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                    promotionStatus = -1;
                }
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            }
            if (asPts == x) {
                _sl[_ci].asDates[_asNum] = 0;
                if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                    promotionStatus = -1;
                }
                _sl[_ci].points -= x; netPts = -x;
                _sl[_ci].as[_asNum] = 0;
                document.getElementById("asReason").innerHTML = "";
            }
        } else if (_sl[_ci].rank == 8 || _sl[_ci].rank == 14 || _sl[_ci].rank == 18) {
            if (asPts == 0 || asPts < x) {
                if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                    promotionStatus = 1;
                }
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            }
            if (asPts > x) {
                if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                    promotionStatus = -1;
                }
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            }
            if (asPts == x) {
                _sl[_ci].asDates[_asNum] = 0;
                if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                    promotionStatus = -1;
                }
                _sl[_ci].points -= x;; netPts = -x;
                _sl[_ci].as[_asNum] = 0;
                document.getElementById("asReason").innerHTML = "";
            }
        }
        var plusSign = ""; if (netPts > 0) {plusSign = "+"}
        var log = _sl[_ci].fullName + " " + plusSign + netPts + " pts " + _asNames[_asNum] + " sheet " + "<br>" + "(" + asPts + "-->" + _sl[_ci].as[_asNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")" + "<br>" + dateAndTime("log");
        activityLog(log);
        if (promotionStatus > 0) {
            promotion();
        } else if (promotionStatus < 0) {
            demotion();
        }
        document.getElementById("studentPopRankName").innerHTML = _sl[_ci].rankName;
        assignClassRanks();
        storeAndBackup();
        loadStudent(_ci);
        pop(["asPointsPop"],["missionsPop"]);
    }
}

function mvPoints(_mvNum,x) {
    if (_sl[_ci].mvDates[_mvNum] == 0) {
        _sl[_ci].mvDates[_mvNum] = assignTodaysDateNumber();
    };
    var rankNum = _sl[_ci].rank;
    var rankFactor = _sl[_ci].rankFactor;
    var totalPts = _sl[_ci].points;
    var mvPts = _sl[_ci].mv[_mvNum];
    var netPts = x - _sl[_ci].mv[_mvNum];
    var promotionStatus = 0;
    if (_sl[_ci].rank != 8 && _sl[_ci].rank != 14 && _sl[_ci].rank != 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + netPts >= 10 && totalPts < 220) {
                promotionStatus = 1;
            }
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        }
        if (mvPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promotionStatus = -1;
            }
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        }
        if (mvPts == x) {
            _sl[_ci].mvDates[_mvNum] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promotionStatus = -1;
            }
            _sl[_ci].points -= x; netPts = -x;
            _sl[_ci].mv[_mvNum] = 0;
        }
    } else if (_sl[_ci].rank == 8 || _sl[_ci].rank == 14 || _sl[_ci].rank == 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                promotionStatus = 1;
            }
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        }
        if (mvPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promotionStatus = -1;
            }
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        }
        if (mvPts == x) {
            _sl[_ci].mvDates[_mvNum] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promotionStatus = -1;
            }
            _sl[_ci].points -= x; netPts = -x;
            _sl[_ci].mv[_mvNum] = 0;
        }
    }
    var plusSign = ""; if (netPts > 0) {plusSign = "+"}
    var log = _sl[_ci].fullName + " " + plusSign + netPts + " pts " + _mvNames[_mvNum] + " verse "  + "<br>" +  "(" + mvPts + "-->" + _sl[_ci].mv[_mvNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")" + "<br>" + dateAndTime("log");
    activityLog(log);
    if (promotionStatus > 0) {
        promotion();
    } else if (promotionStatus < 0) {
        demotion();
    }
    document.getElementById("studentPopRankName").innerHTML = _sl[_ci].rankName;
    assignClassRanks();
    storeAndBackup();
    loadStudent(_ci);
    pop(["mvPointsPop"],["missionsPop"]);
}

function resetStudentMenu() {
    for (i = 0; i < 3; i++) {
        if (i == 0) {
            document.getElementById("studentMenu"+i).style.backgroundColor = "#777";
        } else {
            document.getElementById("studentMenu"+i).style.backgroundColor = "black";
        }
    }
}

function studentMenuSwitch(x) {
    _array = ["missionsPop"];
    var allPops = document.getElementsByClassName("pop");
    var pops = ["studentStatsPop","missionsPop","calendarPop"];
    for (i = 0; i < 3; i++) {
        if (i == x) {
            document.getElementById("studentMenu"+i).style.backgroundColor = "#777";
        } else {
            document.getElementById("studentMenu"+i).style.backgroundColor = "black";
        }
    }
    for (j = 0; j < 3; j++) {
        if (j == x) {
            document.getElementById(pops[j]).style.display = "block";
        }
    }
    for (i = 0; i < allPops.length; i++) {
        if (allPops[i].id != pops[x] && allPops[i].id != "studentPop") {
            allPops[i].style.display = "none";
        }
    }
}

function asLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
}

function scanLinks() {
    window.open("docs/as-scans/"+_sl[_ci].firstName.toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+"-as"+_asNum+".pdf","_blank");
}

function mvLinks() {
    window.open("docs/memory/mv"+_mvNum+".pdf","_blank");
}

function pop(closeArray,openArray) {
    for (i = 0; i < closeArray.length; i++) {
        if (closeArray != []) {
            document.getElementById(closeArray[i]).style.display = "none";
        }
    }
    for (i = 0; i < openArray.length; i++) {
        if (openArray != []) {
            document.getElementById(openArray[i]).style.display = "block";
        }    
    }
    if (openArray.includes("mainPop")) {
        document.getElementById("search").value = "";
        document.getElementById("search").focus();
        sortStudentList();
    }
    if (openArray.includes("randomPop") || openArray.includes("drawingPop")) {
        document.getElementById("randomName").innerHTML = "tap here<br>to pick";
        document.getElementById("drawingName").innerHTML = "tap here<br>to pick";
    }
    if (openArray.includes("logPop")) {
        document.getElementById("searchLog").value = "";
        document.getElementById("searchLog").focus();
        document.getElementById("log").innerHTML = _log;
    }
    if (openArray.includes("att2Pop")) {
        document.getElementById("search2").value = "";
        document.getElementById("search2").focus();
    }
    if (openArray.includes("att3Pop")) {
        document.getElementById("search3").value = "";
        document.getElementById("search3").focus();
    }
    if (openArray.includes("newStudentPop")) {
        document.getElementById("newFirstName").focus();
    }
    if (openArray.includes("addStudentNotePop")) {
        document.getElementById("addStudentNote").focus()
    }
    if (openArray.includes("addTeacherNotePop")) {
        document.getElementById("addTeacherNote").focus();
    }
    if (openArray.includes("teamsListPop")) {
        document.getElementById("teamsListNav").style.display = "flex";
        document.getElementById("teamsListButtons").style.display = "block";
    }
    if (openArray.includes("customSortListPop") && _populateNotesID.includes("customSortListPop")) {
        sortByNotes(true);
    }
    if (openArray.includes("sortChoicePop")) {
        _populateNotesID = [];
    }
    scrollTo(0,0);
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    }
    document.getElementById("search").value = "";
    document.getElementById("search").focus();
    alerts();
    sortStudentList();
}

function asPop(asNum,points) {
    _asNum = asNum;
    document.getElementById("asSheetName").innerHTML = _asNames[_asNum].toUpperCase();
    document.getElementById("asDateAssigned").innerHTML = _classDates[_asNum]
    if (_sl[_ci].as[_asNum] == _asMaxPts[_asNum]) {
        document.getElementById("asCompletionStatus").innerHTML = "COMPLETED";
        document.getElementById("asCompletionStatus").style.color = "lawnGreen";
    } else if (_sl[_ci].as[_asNum] == 0) {
        document.getElementById("asCompletionStatus").innerHTML = "NOT TURNED IN";
        document.getElementById("asCompletionStatus").style.color = "red";
    } else {
        document.getElementById("asCompletionStatus").innerHTML = "PARTIAL CREDIT";
        document.getElementById("asCompletionStatus").style.color = "orange";
    }
    if (_sl[_ci].asReasons[_asNum] != "") {
        document.getElementById("asReason").style.display = "table-cell";
    } else {
        document.getElementById("asReason").style.display = "none";
    }
    if (_sl[_ci].as[_asNum] > 0) {
        document.getElementById("scannedImage").style.display = "table-cell";
    } else {
        document.getElementById("scannedImage").style.display = "none";
    }
    if (_sl[_ci].asDates[_asNum] == 0) {
        document.getElementById("asDateTurnedIn").innerHTML = "-"
    } else {
        document.getElementById("asDateTurnedIn").innerHTML = cdn(_sl[_ci].asDates[_asNum]);
    }
    if (_sl[_ci].asReasons[_asNum] != "") {
        document.getElementById("asReason").innerHTML = "Reason for partial credit:<br> <span style='color:white'>" + _sl[_ci].asReasons[_asNum] + "</span>";
    } else {
        document.getElementById("asReason").innerHTML = ""
    }
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPointsPop").style.display = "block";
    for (i = 1; i <= 6; i++) {
        if (document.getElementById("as"+i+"Points").innerHTML == _sl[_ci].as[_asNum]) {
            document.getElementById("as"+i+"Points").style.background = "#3478F6";
        } else {
            document.getElementById("as"+i+"Points").style.background = "black";
        }
    }
    for (i = 1; i <= 6; i++) {
        if (i <= points) {
            document.getElementById("as"+i+"Points").style.display = "block";
        } else {
            document.getElementById("as"+i+"Points").style.display = "none";
        }
    }
    scrollTo(0,0);
}

function mvPop(mvNum,points) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPointsPop").style.display = "block";
    _mvNum = mvNum;
    document.getElementById("mvVerseName").innerHTML = _mvNames[_mvNum].toUpperCase();
    document.getElementById("mvDateAssigned").innerHTML = _classDates[_mvNum]
    if (_sl[_ci].mv[_mvNum] == _mvMaxPts[_mvNum]) {
        document.getElementById("mvCompletionStatus").innerHTML = "COMPLETED";
        document.getElementById("mvCompletionStatus").style.color = "lawnGreen";
    } else if (_sl[_ci].mv[_mvNum] == 0) {
        document.getElementById("mvCompletionStatus").innerHTML = "NOT RECITED";
        document.getElementById("mvCompletionStatus").style.color = "red";
    } else {
        document.getElementById("mvCompletionStatus").innerHTML = "PARTIAL CREDIT";
        document.getElementById("mvCompletionStatus").style.color = "orange";
    }
    if (_sl[_ci].mvDates[_mvNum] == 0) {
        document.getElementById("mvDateRecited").innerHTML = "-"
    } else {
        document.getElementById("mvDateRecited").innerHTML = cdn(_sl[_ci].mvDates[_mvNum]);
    }
    document.getElementById("mvText").innerHTML = _mvText[mvNum];
    for (i = 1; i <= 7; i++) {
        if (document.getElementById("mv"+i+"Points").innerHTML == _sl[_ci].mv[_mvNum]) {
            document.getElementById("mv"+i+"Points").style.background = "#3478F6";
        } else {
            document.getElementById("mv"+i+"Points").style.background = "black";
        }
    }
    for (i = 1; i <= 7; i++) {
        if (i <= points) {
            document.getElementById("mv"+i+"Points").style.display = "block";
        } else {
            document.getElementById("mv"+i+"Points").style.display = "none";
        }
    }
    scrollTo(0,0);
}

function populateNames() {
    document.getElementById("nameList").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        if (_sl[i].attendance === true) {
            elementNode.style.color = "lawnGreen";
        } else {
            elementNode.style.color = "white";
        }
        elementNode.classList.add("name");
        if (document.getElementById("rapidAttCheck").checked == true) {
            (function(i){
                elementNode.onclick = function () {
                    _ci = i; toggleAtt2(i); populateNames();
                }
            })(i);
        } else {
            (function(i){
                elementNode.onclick = function () {
                    loadStudent(i);
                }
            })(i);
        }
        var textNode = document.createTextNode(_sl[i].rankName + " " + _sl[i].fullName + " " + _sl[i].points);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    }  
}

function populateNames2() {
    if (document.getElementById("studentPop").style.display == "block") {
        pop(["studentPop"],["att2Pop"]);
    } else {
        pop(["att2Pop"],["studentPop"]);
    }
    document.getElementById("nameList2").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        if (_sl[i].attendance === true) {
            elementNode.style.color = "lawnGreen";
            if (_sl[i].promoted === true) {
                elementNode.style.color = "yellow";
            }
        } else {
            elementNode.style.color = "white";
        }
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                att2(i);
                pop(["att2Pop"],["studentPop"]);
                document.getElementById("search2").value = "";
            }
        })(i);
        var textNode = document.createTextNode(_sl[i].rankName + " " + _sl[i].fullName + " " + _sl[i].points);
        elementNode.appendChild(textNode);
        document.getElementById("nameList2").appendChild(elementNode);
        document.getElementById("search2").focus();
    }  
}

function confirmAction(id) {
    document.getElementById(id).style.display = "block"
}
 
function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank + 1) / 20) * 100).toFixed(1);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    if (_elapsedWeeks > 1) {
        for (i = 0; i < (_elapsedWeeks-1); i++) {
            if (i > 31) { break; };
            totalASpts += _asMaxPts[i];
            totalMVpts += _mvMaxPts[i];
        }
        for (i = 0; i < (_elapsedWeeks-1); i++) {
            if (i > 31) { break; };
            earnedASpts += _sl[_ci].as[i];
            earnedMVpts += _sl[_ci].mv[i];
        }
    }
    var totalPoints = totalASpts + totalMVpts;
    var totalEarnedPoints = earnedASpts + earnedMVpts;
    var asPercentage; var mvPercentage; var totalPointsPercentage;
    if (_elapsedWeeks > 1) {
        asPercentage = ((earnedASpts / totalASpts) * 100).toFixed(1);
        mvPercentage = ((earnedMVpts / totalMVpts) * 100).toFixed(1);
        totalPointsPercentage = ((totalEarnedPoints / totalPoints) * 100).toFixed(1);
    } else {
        asPercentage = 0; mvPercentage = 0; totalPointsPercentage = 0;
    }
    var asSquares = Math.round(asPercentage / 2.50);
    var mvSquares = Math.round(mvPercentage / 2.50);
    var totalPointsSquares = Math.round(totalPointsPercentage / 2.50);
    var weeksAttended = 0;
    for (i = 0; i < _elapsedWeeks; i++) {
        weeksAttended += _sl[_ci].amAtt[i];
        weeksAttended += _sl[_ci].pmAtt[i];
        if (_sl[_ci].amAtt[i] == 1 && _sl[_ci].pmAtt[i] == 1) {
            weeksAttended--;
        }
    }
    var attendancePercentage = ((weeksAttended / _elapsedWeeks) * 100).toFixed(1);
    var attendanceSquares = Math.round(attendancePercentage / 2.50);
    var totalEarned = weeksAttended + earnedASpts + earnedMVpts;
    var totalPossible = _elapsedWeeks + totalASpts + totalMVpts;
    var totalPercentage = ((totalEarned / totalPossible) * 100).toFixed(1);
    var totalSquares = Math.round(totalPercentage / 2.50);
    var squaresArray = [rankSquares,totalPointsSquares,asSquares,mvSquares,attendanceSquares,totalSquares];
    var variableArray = [rankPercentage,totalPointsPercentage,asPercentage,mvPercentage,attendancePercentage,totalPercentage];
    var idArray1 = ["rankProgressTable","totalProgressTable","asProgressTable","mvProgressTable","attProgressTable","totalParticipationTable"];
    var idArray2 = ["rankProgressBar","totalProgressBar","asProgressBar","mvProgressBar","attProgressBar","totalParticipationBar"];
    for (i = 0; i < squaresArray.length; i++) {
        for (j = 1; j <= 40; j++) {
            if (j <= squaresArray[i]) {
                if (i == 0) {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "#3478F6";
                } else {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "lawngreen";
                }
            } else {
                document.getElementById(idArray2[i]+j).style.backgroundColor = "black";
            }
        }
    }
    for (i = 0; i < variableArray.length; i++) {
        if (variableArray[i] == 100.00) {
            if (i == 0) {
                document.getElementById(idArray1[i]).style.backgroundColor = "#3478F6";
            } else {
                document.getElementById(idArray1[i]).style.backgroundColor = "lawngreen";
            }
        } else {
            document.getElementById(idArray1[i]).style.backgroundColor = "black";
        }
    }
    document.getElementById("rankProgressTableP").innerHTML = "Rank Progress: " + (_sl[_ci].rank + 1) + "/20" + " (" + rankPercentage + "%)";
    document.getElementById("totalProgressTableP").innerHTML = "Total Points: " + totalEarnedPoints + "/" + totalPoints + " (" + totalPointsPercentage + "%)";
    document.getElementById("asProgressTableP").innerHTML = "Activity Sheet Points: " + earnedASpts + "/" + totalASpts + " (" + asPercentage + "%)";
    document.getElementById("mvProgressTableP").innerHTML = "Memory Verse Points: " + earnedMVpts + "/" + totalMVpts + " (" + mvPercentage + "%)";
    document.getElementById("attProgressTableP").innerHTML = "Attendance: " + weeksAttended + "/" + _elapsedWeeks + " (" + attendancePercentage + "%)";
    document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + totalPercentage + "%)";
}

function populateMissions() {
    if (_elapsedWeeks > 0) {
        for (i = _elapsedWeeks-1; i >= 0; i--) {
            if (i > 31) { continue }
            var div1 = document.createElement("div");
            div1.setAttribute("id","as"+i+"Pop");
            div1.classList.add("asButton");
            (function(i){
                div1.onclick = function () {
                    asPop(i,_asMaxPts[i]);
                }
            })(i);
            var textNode1 = document.createTextNode(_asFullNames[i]);
            div1.appendChild(textNode1);
            document.getElementById("asPop").appendChild(div1);
        }
        for (j = _elapsedWeeks-1; j >= 0; j--) {
            if (j > 31) { continue }
            var div2 = document.createElement("div");
            div2.setAttribute("id","mv"+j+"Pop");
            div2.classList.add("mvButton");
            (function(j){
                div2.onclick = function () {
                    mvPop(j,_mvMaxPts[j]);
                }
            })(j);
            var textNode2 = _mvFullNames[j] + "<br>" + _mvTextSnippets[j];
            div2.innerHTML = textNode2;
            document.getElementById("mvPop").appendChild(div2);
        }
    }
}

function loadRankTable() {
    _sharedPop = "rankChartPop";
    pop(["studentStatsPop"],["rankChartPop"]);
    for (i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
        document.getElementById("rankChartInsignia"+i).style.cursor = "pointer";
        document.getElementById("rankChartRank"+i).innerHTML = _rankNames[i];
        document.getElementById("rankChartAbbreviation"+i).innerHTML = _rankNamesAbbr[i];
        document.getElementById("rankChartPoints"+i).innerHTML = _rankPts[i];
        (function(i){
            document.getElementById("rankChartInsignia"+i).onclick = function () {
                pop(["rankChartPop"],["openInsigniaPop"]);
                document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";            }
        })(i);
        if (i == _sl[_ci].rank) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        }
    }
    document.getElementById("rankChartContainer").scrollTop = 0;
}

function openInsignia() {
    _sharedPop = "studentStatsPop";
    document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    pop(["studentStatsPop"],["openInsigniaPop"]);
}

function toggleIncomplete() {
    var noneHidden = true;
    for (i = 0; i < (_checkedState.length); i++) {
        if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
            noneHidden = false; break;
        }
    }
    if (noneHidden) {
        for (i = 0; i < (_checkedState.length); i++) {
            if (_sl[_ci].as[i] < _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.display = "block"
            } else {
                document.getElementById("as"+i+"Pop").style.display = "none"
            }
            if (_sl[_ci].mv[i] < _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.display = "block"
            } else {
                document.getElementById("mv"+i+"Pop").style.display = "none"
            }
        }
    } else {
        for (i = 0; i < (_checkedState.length); i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        }
    }
}

function averageArray(x) {
    function sumArray(a,b) {
        return a + b;
    }
    return Math.round(x.reduce(sumArray)/x.length);
}

function sumArray(array) {
    function sum(a,b) {
        return a + b;
    }
    return array.reduce(sum);
}

function sumArrays(arrays) {
    var sum = 0;
    for (k = 0; k < arrays.length; k++) {
        sum += sumArray(arrays[k])
    }
    return sum;
}

function loadAttStats() {
    var amArray = _amAtt.slice(0,_amAtt.length); var pmArray = _pmAtt.slice(0,_pmAtt.length);
    var amBoysArray = []; var pmBoysArray = []; var amGirlsArray = []; var pmGirlsArray = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            amBoysArray.push(_sl[i].amAtt.slice(0,_sl[i].amAtt.length));
            pmBoysArray.push(_sl[i].pmAtt.slice(0,_sl[i].pmAtt.length));
        } else {
            amGirlsArray.push(_sl[i].amAtt.slice(0,_sl[i].amAtt.length));
            pmGirlsArray.push(_sl[i].pmAtt.slice(0,_sl[i].pmAtt.length));
        }
    }
    if (_isClassDay === true && dateAndTime("hours") < 18) {
        amArray.pop(); pmArray.pop();
        for (i = 0; i < _sl.length; i++) {
            if (i < amBoysArray.length) { amBoysArray[i].pop(); }
            if (i < pmBoysArray.length) { pmBoysArray[i].pop(); }
            if (i < amGirlsArray.length) { amGirlsArray[i].pop(); }
            if (i < pmGirlsArray.length) { pmGirlsArray[i].pop(); }
        }
    }
    amBoysCount = 0; pmBoysCount = 0; amGirlsCount = 0; pmGirlsCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (i < amBoysArray.length) { amBoysCount += sumArray(amBoysArray[i]); }
        if (i < pmBoysArray.length) { pmBoysCount += sumArray(pmBoysArray[i]); }
        if (i < amGirlsArray.length) { amGirlsCount += sumArray(amGirlsArray[i]); }
        if (i < pmGirlsArray.length) { pmGirlsCount += sumArray(pmGirlsArray[i]); }
    }
    var bothArray = [];
    for (i = 0; i < amArray.length; i++) {
        bothArray.push(amArray[i] + pmArray[i]);
    }
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            amBoysArray.push(sumArray(_sl[i].amAtt));
            pmBoysArray.push(sumArray(_sl[i].pmAtt));
        } else {
            amGirlsArray.push(sumArray(_sl[i].amAtt));
            pmGirlsArray.push(sumArray(_sl[i].pmAtt));
        }
    }
    var bothBoysArray = []; var bothGirlsArray = [];
    for (i = 0; i < amBoysArray.length; i++) {
        bothBoysArray.push(amBoysArray[i] + pmBoysArray[i]);
    }
    for (i = 0; i < amGirlsArray.length; i++) {
        bothGirlsArray.push(amGirlsArray[i] + pmGirlsArray[i]);
    }
    var divisor = amArray.length;
    document.getElementById("amAvg").innerHTML = averageArray(amArray);
    document.getElementById("pmAvg").innerHTML = averageArray(pmArray);
    document.getElementById("bothAvg").innerHTML = averageArray(bothArray);
    document.getElementById("amMax").innerHTML = Math.max(...amArray);
    document.getElementById("pmMax").innerHTML = Math.max(...pmArray);
    document.getElementById("bothMax").innerHTML = Math.max(...bothArray);
    document.getElementById("amMin").innerHTML = Math.min(...amArray);
    document.getElementById("pmMin").innerHTML = Math.min(...pmArray);
    document.getElementById("bothMin").innerHTML = Math.min(...bothArray);
    document.getElementById("amBoysAvg").innerHTML = Math.round(amBoysCount/divisor);
    document.getElementById("pmBoysAvg").innerHTML = Math.round(pmBoysCount/divisor);
    document.getElementById("bothBoysAvg").innerHTML = Math.round((amBoysCount+pmBoysCount)/divisor);
    document.getElementById("amGirlsAvg").innerHTML = Math.round(amGirlsCount/divisor);
    document.getElementById("pmGirlsAvg").innerHTML = Math.round(pmGirlsCount/divisor);
    document.getElementById("bothGirlsAvg").innerHTML = Math.round((amGirlsCount+pmGirlsCount)/divisor);
    for (i = 0; i < amArray.length; i++) {
        document.getElementById("attDate"+i).innerHTML = _classDates[i];
        document.getElementById("attAM"+i).innerHTML = _amAtt[i];
        document.getElementById("attPM"+i).innerHTML = _pmAtt[i];
        document.getElementById("attBoth"+i).innerHTML = _amAtt[i] + _pmAtt[i];
        document.getElementById("attAM"+i).classList.add("pointer");
        document.getElementById("attPM"+i).classList.add("pointer");
        (function(i){
            document.getElementById("attAM"+i).onclick = function () {
                loadArchiveAttendees(i,"AM");
            }
            document.getElementById("attPM"+i).onclick = function () {
                loadArchiveAttendees(i,"PM");
            }
        })(i);
    }
    for (i = amArray.length; i < 34; i++) {
        document.getElementById("attRow"+i).style.display = "none";
    }
    pop(["mainMenuPop"],["attStatsPop"]);
}

function loadStudentAttStats() {
    for (i = 0; i < _elapsedWeeks; i++) {
        document.getElementById("studentAttDate"+i).innerHTML = _classDates[i];
        if (_sl[_ci].amAtt[i] == 1) {
            document.getElementById("studentAttAM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttAM"+i).innerHTML = "";
        }
        if (_sl[_ci].pmAtt[i] == 1) {
            document.getElementById("studentAttPM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttPM"+i).innerHTML = "";
        }
        if (_sl[_ci].amAtt[i] == 0 && _sl[_ci].pmAtt[i] == 0) {
            document.getElementById("studentAttDate"+i).style.color = "firebrick";
        } else {
            document.getElementById("studentAttDate"+i).style.color = "lawngreen";
        }
    }
    for (i = _elapsedWeeks; i < 34; i++) {
        document.getElementById("studentAttRow"+i).style.display = "none";
    }
    pop(["studentStatsPop"],["studentAttStatsPop"]);
}

function findStudent() {
    document.activeElement.blur();
    document.getElementById("nameList").innerHTML = "";
    var x = (document.getElementById("searchField").value.trim().toLowerCase()).split(" ");
    if (x == false) { return; }
    for (i = 0; i < x.length; i++) {
        if (x[i] == false) {
            x.splice(i,1); i = 0; continue;
        }
    }
    var matches = [];
    if (x.length == 1) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] == _sl[i].lastName.toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 2) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + " " + x[1] == _sl[i].fullName.toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 3) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + " " + x[1] + " " + x[2] == _sl[i].fullName.toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (matches.length == 0) {
        for (i = 0; i < x.length; i++) {
            x[i] = x[i][0].toUpperCase() + x[i].substr(1);
        }
        var string = x.join(" ");
        infoAlert("No matches found for <span style='color:red;font-weight:bold'>" + string + "</span>.  Please check the spelling and try again or use the contact buttons above for help.",["mainPop"],"searchField");
        document.getElementById("searchField").value = "";
    }
    if (matches.length == 1) {
        _ci = matches[0]; loadStudentStats(); loadStudent(_ci);
    }
    if (matches.length > 1) {
        populateMatches(matches);
        infoAlert("More than one match found.<br>Please click the correct name below.",["mainPop"],"searchField",true);
    }
}

function populateMatches(indexArray) {
    for (i = 0; i < indexArray.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                let x = indexArray[i]; _ci = x;
                loadStudentStats(); loadStudent(_ci);
            }
        })(i);
        var textNode = document.createTextNode(_sl[indexArray[i]].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    }  
}

function loadStudent(index) {
    _ci = index;
    assignClassRanks(); resetStudentMenu(); loadStudentStats();
    document.getElementById("searchField").value = "";
    document.getElementById("infoAlertPop").style.display = "none";
    document.getElementById("studentPopInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    document.getElementById("studentPopRankName").innerHTML = _rankNames[_sl[_ci].rank];
    document.getElementById("studentPopName").innerHTML = _sl[_ci].fullName;
    var pointsNeeded;
    if (_sl[_ci].points == 220) {
        pointsNeeded = 0
    } else {
        pointsNeeded = _rankPts[_sl[_ci].rank+1] - _sl[_ci].points;
    }
    document.getElementById("studentPopPts").innerHTML = _sl[_ci].points + " | <span style='color: #999'>" + pointsNeeded +"</span>";
    if (_rankNames[_sl[_ci].rank].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    document.getElementById("studentPopClassRank").innerHTML = "Class Rank: " + _sl[_ci].classRank;

    if (_rankNames[_sl[_ci].rank].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    if (_sl[_ci].fullName.length > 17) {
        document.getElementById("studentPopName").style.fontSize = "22px";
    } else {
        document.getElementById("studentPopName").style.fontSize = "25px";
    }
    if (_elapsedWeeks > 1) {
        for (i = 0; i < _elapsedWeeks-1; i++) {
            if (i > 31) { break };
            if (_sl[_ci].as[i] == _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].as[i] > 0 && _sl[_ci].as[i] < _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("as"+i+"Pop").style.background = "black";
            }
        }
        for (i = 0; i < _elapsedWeeks-1; i++) {
            if (i > 31) { break };
            if (_sl[_ci].mv[i] == _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].mv[i] > 0 && _sl[_ci].mv[i] < _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("mv"+i+"Pop").style.background = "black";
            }
        }
    }
    pop(["mainPop"],["studentPop","studentStatsPop"]);
}

function cdn(dateNumber) {
    var cumulative = [0,153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [0,153,184,213,244,274,305,335,0,31,61,92,122];
    var month; var date;
    if (_leapYear === false) {
        for (i = 1; i < cumulative.length; i++) {
            if (dateNumber >= cumulative[i] && dateNumber <= cumulative[i+1]) {
                month = i; date = dateNumber - cumulative[i]; break;
            }
            if (dateNumber > 334) {
                month = 7; date = dateNumber - 334; break;
            }
        }
    } else {
        for (i = 1; i < cumulative.length; i++) {
            if (dateNumber >= cumulativeLeap[i] && dateNumber <= cumulativeLeap[i+1]) {
                month = i; date = dateNumber - cumulativeLeap[i]; break;
            }
            if (dateNumber > 335) {
                month = 7; date = dateNumber - 335; break;
            }
        }
    }
    return month.toString() + "/" + date.toString();
}

function populateCalendar() {
    for (i = 0; i < _classDates.length; i++) {
        document.getElementById("calendarDate"+i).innerHTML = _classDates[i];
        if (i < 32) {
            document.getElementById("calendarLesson"+i).innerHTML = _asFullNames[i];
            document.getElementById("calendarMemory"+i).innerHTML = _mvFullNames[i];
        }
    }
    document.getElementById("calendarRow"+(_elapsedWeeks-1)).style.border = "2px solid lawngreen";
}

loadBackup();

document.getElementById("searchField").focus();