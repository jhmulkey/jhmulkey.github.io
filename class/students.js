var _sl = [];
var _asNum;
var _mvNum;
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,6,3,3,3,3,3,3,6,3,3,3,3,3,3,3,6];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,7,3,4,3,3,3,6,4,4,3,4,3,3,3,0];
var _currentPops;
var _currentPops2;
var _focus;
var _elapsedWeeks = 1;
var _leapYears = [];
var _classDates = ["8/22", "8/29", "9/12", "9/19", "9/26", "10/3", "10/10", "10/17", "10/24", "10/31", "11/7", "11/14", "12/5", "12/12", "12/19", "1/9", "1/23", "1/30", "2/6", "2/13", "2/20", "2/27", "3/6", "3/13", "3/20", "3/27", "4/3", "4/10", "4/24", "5/1", "5/8", "5/15", "5/22"];
var _dateNumbers = [22, 29, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 127, 134, 141, 162, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 267, 274, 281, 288, 295]
var _isClassDay;
var _rankNamesAbbr = ["PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAJ","LTC","COL","BG","MG","LTG","GEN","GOA"];
var _rankNames = ["Private","Private First Class","Corporal","Sergeant","Staff Sergeant","Sergeant First Class","Master Sergeant","Sergeant Major","Command Sergeant Major","Second Lieutenant","First Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","General of the Army"];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asNamesFull = ["Class Intro","John Intro","John 1","John 2","John 3","John 4","John 5","John 6","John 7","John 8","John 9","John 1-9-review","John 10","John 11","John 12","John 13","John 14-15","John 16","John 17","John 18","John 19","John 20","John 21","John 10-21 Review","Armor Intro","Belt","Breastplate","Shoes","Shield","Helmet","Sword","Armor Review"];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword","armor-review"];
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8",
"phil-2-9","phil-2-10-11","rom-8-31-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"];
var _mvNamesFull = ["Psalm 139:17-18","John 20-30-31","John 1:1-2","John 1:3","John 1:4-5","John 1:6-8","John 1:9-11","John 1:12-13","John 1:14","John 1:15","John 1:16-17","John 1:18","Philippians 2:5-6","Philippians 2:7","Philippians 2:8",
"Philippians 2:9","Philippians 2:10-11","Romans 8:31-32","Romans 8:33","Romans 8:34","Romans 8:35","Romans 8:36","Romans 8:37","Romans 8:38-39","Ephesians 6:10-11","Ephesians 6:12","Ephesians 6:13","Ephesians 6:14-15","Ephesians 6:16","Ephesians 6:17","Ephesians 6:18"];
var _mvText = [
    "<span style='color: dodgerblue'>Psalm 139:17-18</span><br>How precious to me are your thoughts, O God! How vast is the sum of them! If I would count them, they are more than the sand. I awake, and I am still with you.",
    "<span style='color: dodgerblue'>John 20:30-31</span><br>Now Jesus did many other signs in the presence of the disciples, which are not written in this book; but these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.",
    "<span style='color: dodgerblue'>John 1:1-2</span><br>In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God.",
    "<span style='color: dodgerblue'>John 1:3</span><br>All things were made through him, and without him was not any thing made that was made.",
    "<span style='color: dodgerblue'>John 1:4-5</span><br>In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.",
    "<span style='color: dodgerblue'>John 1:6-8</span><br>There was a man sent from God, whose name was John. He came as a witness, to bear witness about the light, that all might believe through him. He was not the light, but came to bear witness about the light.",
    "<span style='color: dodgerblue'>John 1:9-11</span><br>The true light, which gives light to everyone, was coming into the world. He was in the world, and the world was made through him, yet the world did not know him. He came to his own, and his own people did not receive him.",
    "<span style='color: dodgerblue'>John 1:12-13</span><br>But to all who did receive him, who believed in his name, he gave the right to become children of God, who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.",
    "<span style='color: dodgerblue'>John 1:14</span><br>And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    "<span style='color: dodgerblue'>John 1:15</span><br>(John bore witness about him, and cried out, “This was he of whom I said, ‘He who comes after me ranks before me, because he was before me.’”)",
    "<span style='color: dodgerblue'>John 1:16-17</span><br>For from his fullness we have all received, grace upon grace. For the law was given through Moses; grace and truth came through Jesus Christ.",
    "<span style='color: dodgerblue'>John 1:18</span><br>No one has ever seen God; the only God, who is at the Father's side, he has made him known.",
    "<span style='color: dodgerblue'>Philippians 2:5-6</span><br>Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped,",
    "<span style='color: dodgerblue'>Philippians 2:7</span><br>but emptied himself, by taking the form of a servant, being born in the likeness of men.",
    "<span style='color: dodgerblue'>Philippians 2:8</span><br>And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    "<span style='color: dodgerblue'>Philippians 2:9</span><br>Therefore God has highly exalted him and bestowed on him the name that is above every name,",
    "<span style='color: dodgerblue'>Philippians 2:10-11</span><br>so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
    "<span style='color: dodgerblue'>Romans 8:31-32</span><br>What then shall we say to these things? If God is for us, who can be against us?  He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
    "<span style='color: dodgerblue'>Romans 8:33</span><br>Who shall bring any charge against God's elect? It is God who justifies.",
    "<span style='color: dodgerblue'>Romans 8:34</span><br>Who is to condemn?  Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us.",
    "<span style='color: dodgerblue'>Romans 8:35</span><br>Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?",
    "<span style='color: dodgerblue'>Romans 8:36</span><br>As it is written, 'For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.'",
    "<span style='color: dodgerblue'>Romans 8:37</span><br>No, in all these things we are more than conquerors through him who loved us.",
    "<span style='color: dodgerblue'>Romans 8:38-39</span><br>For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "<span style='color: dodgerblue'>Ephesians 6:10-11</span><br>Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.",
    "<span style='color: dodgerblue'>Ephesians 6:12</span><br>For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.",
    "<span style='color: dodgerblue'>Ephesians 6:13</span><br>Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.",
    "<span style='color: dodgerblue'>Ephesians 6:14-15</span><br>Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness, and, as shoes for your feet, having put on the readiness given by the gospel of peace.",
    "<span style='color: dodgerblue'>Ephesians 6:16</span><br>In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one;",
    "<span style='color: dodgerblue'>Ephesians 6:17</span><br>and take the helmet of salvation, and the sword of the Spirit, which is the word of God,",
    "<span style='color: dodgerblue'>Ephesians 6:18</span><br>praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints," 
];

function infoAlert(message,idArray,focus,noIcon) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        document.getElementById("infoAlertPop").style.display = "none";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "block"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = "";
        document.getElementById("nameList").innerHTML = "";
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        if (noIcon) {
            document.getElementById("infoAlertTitle").style.display = "none";
        } else {
            document.getElementById("infoAlertTitle").style.display = "block";
        }
        document.getElementById("infoAlertPop").style.display = "block";
        scrollTo(0,0);
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "none"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = message;
    }
    if (_focus) {
        document.getElementById(_focus).focus();
    }
}

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

function assignClassRank() {
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

function setRankFactor() {
    if (_sl[_ci].rank == 14 || _sl[_ci].rank == 15) {
        _sl[_ci].rankFactor = 1;
    } else if (_sl[_ci].rank == 18 || _sl[_ci].rank == 19) {
        _sl[_ci].rankFactor = 2;
    } else {
        _sl[_ci].rankFactor = 0;
    }
}

function setRankName() {
    _sl[_ci].rankName = _rankNamesAbbr[_sl[_ci].rank];
}

function removePtBoxes() {
    pops = ["asPointsPop","mvPointsPop"];
    buttons = ["as4Points","as5Points","as6Points","mv4Points","mv5Points","mv6Points","mv7Points"];
    for (i = 0; i <pops.length; i++) {
        if (document.getElementById(pops[i]).style.display != "block") {
            for (i = 0; i <buttons.length; i++) {
                document.getElementById(buttons[i]).style.display = "none";
            }
        }
    }
}

function searchNames() {
    var inputVal = document.getElementById("searchField").value.toLowerCase();
    var names = document.getElementsByClassName("name");
    for (i = 0; i < names.length; i++) {
        if (names[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        }
    }
}

function loadStudent(index) {
    _ci = index;
    for (i = 0; i < _asMaxPts.length; i++) {
        if (_sl[_ci].as[i] == _asMaxPts[i]) {
            document.getElementById("as"+i+"Pop").style.background = "green";
        } else if (_sl[_ci].as[i] > 0 && _sl[_ci].as[i] < _asMaxPts[i]) {
            document.getElementById("as"+i+"Pop").style.background = "darkorange";
        } else {
            document.getElementById("as"+i+"Pop").style.background = "firebrick";
        }
    }
    for (i = 0; i < _mvMaxPts.length; i++) {
        if (_sl[_ci].mv[i] == _mvMaxPts[i]) {
            document.getElementById("mv"+i+"Pop").style.background = "green";
        } else if (_sl[_ci].mv[i] > 0 && _sl[_ci].mv[i] < _mvMaxPts[i]) {
            document.getElementById("mv"+i+"Pop").style.background = "darkorange";
        } else {
            document.getElementById("mv"+i+"Pop").style.background = "firebrick";
        }
    }
    pop([],["missionsPop"]);
}

function asLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
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
    if (closeArray.includes("asPointsPop") || closeArray.includes("mvPointsPop")) {
        removePtBoxes();
    }
    if (openArray.includes("mainPop")) {
        document.getElementById("searchField").value = "";
        document.getElementById("searchField").focus();
        for (i = 0; i < _elapsedWeeks-1; i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        }
        document.getElementById("toggleIncompleteCheck").checked = false;
    }
    if (openArray.includes("randomPop") || openArray.includes("drawingPop")) {
        document.getElementById("randomName").innerHTML = "tap here<br>to pick";
        document.getElementById("winnerName").innerHTML = "tap here<br>to pick";
    }
    if (openArray.includes("logPop")) {
        document.getElementById("searchLog").value = "";
        document.getElementById("searchLog").focus();
        document.getElementById("log").innerHTML = _log;
    }
    if (openArray.includes("attendance2Pop")) {
        document.getElementById("search2").value = "";
        document.getElementById("search2").focus();
        document.getElementById("log").innerHTML = _log;
    }
    if (openArray.includes("newStudentPop")) {
        document.getElementById("newFirstAndLast").focus();
    }
    if (openArray.includes("addNotePop")) {
        document.getElementById("addNote").focus()
    }
    if (openArray.includes("addTeacherNotePop")) {
        document.getElementById("addTeacherNote").focus();
    }
    if (openArray.includes("logPop")) {
        loadTodaysDate()
    }
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    }
    for (i = 0; i < _elapsedWeeks-1; i++) {
        document.getElementById("as"+i+"Pop").style.display = "block";
        document.getElementById("mv"+i+"Pop").style.display = "block";
    }
    document.getElementById("searchField").value = "";
    document.getElementById("searchField").focus();
    removePtBoxes();
}

function asPop(asNum,points) {
    _asNum = asNum;
    if (_sl[_ci].asReasons[_asNum] != "") {
        document.getElementById("asReason").innerHTML = "Reason for partial credit:<br><span style='color:white'>" + _sl[_ci].asReasons[_asNum] + "</span>";
    } else {
        document.getElementById("asReason").innerHTML = ""
    }
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPointsPop").style.display = "block";
    var asPts = document.getElementsByClassName("asPts");
    for (i = 0; i < asPts.length; i++) {
        if (asPts[i].innerHTML == _sl[_ci].as[_asNum]) {
            asPts[i].style.background = "blue";
        } else {
            asPts[i].style.background = "black";
        }
    }
    if (points == 4) {
        document.getElementById("as4Points").style.display = "block";
    }
    if (points == 5) {
        document.getElementById("as4Points").style.display = "block";
        document.getElementById("as5Points").style.display = "block";
    }
    if (points == 6) {
        document.getElementById("as4Points").style.display = "block";
        document.getElementById("as5Points").style.display = "block";
        document.getElementById("as6Points").style.display = "block";
    }
    if (points > 3) {
        document.getElementById("asPage3").style.display = "block";
    } else {
        document.getElementById("asPage3").style.display = "none";
    }
    var urlStart = "url(img/missions/as";
    var urlEnd1 = "a.jpg)"; var urlEnd2 = "b.jpg)"; var urlEnd3 = "c.jpg)"
    document.getElementById("asPage1").style.backgroundImage = urlStart+_asNum+urlEnd1;
    document.getElementById("asPage2").style.backgroundImage = urlStart+_asNum+urlEnd2;
    if (points > 3) {
        document.getElementById("asPage3").style.backgroundImage = urlStart+_asNum+urlEnd3;
    }
    document.getElementById("totalParticipationTable").scrollIntoView();
}

function mvPop(mvNum,index,points) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPointsPop").style.display = "block";
    _mvNum = mvNum;
    document.getElementById("mvText").innerHTML = _mvText[index];
    var mvPts = document.getElementsByClassName("mvPts");
    for (i = 0; i < mvPts.length; i++) {
        if (mvPts[i].innerHTML == _sl[_ci].mv[_mvNum]) {
            mvPts[i].style.background = "blue";
        } else {
            mvPts[i].style.background = "black";
        }
    }
    if (points == 4) {
        document.getElementById("mv4Points").style.display = "block";
    }
    if (points == 5) {
        document.getElementById("mv4Points").style.display = "block";
        document.getElementById("mv5Points").style.display = "block";
    }
    if (points == 6) {
        document.getElementById("mv4Points").style.display = "block";
        document.getElementById("mv5Points").style.display = "block";
        document.getElementById("mv6Points").style.display = "block";
    }
    document.getElementById("totalParticipationTable").scrollIntoView();
}

function showMissions() {
    x = 0;
    for (i = 0; i < _elapsedWeeks-1; i++) {
        if (_sl[0].amAtt[i] == 0 || _sl[0].amAtt[i] == 1) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
            x++;
        }
    }
    document.getElementById("missionsPop").style.height = 200 + (x * 65) + "px";
}

function checkForLeapYear() {
    var today = new Date();
    var todaysYear = today.getFullYear();
    var nextYear = todaysYear + 1;
    if ((todaysYear % 4 == 0) && (todaysYear % 100 != 0) || (todaysYear % 400 == 0)) {
        _leapYears[0] = 1; } else { _leapYears[0] = 0; }
    if ((nextYear % 4 == 0) && (nextYear % 100 != 0) || (nextYear % 400 == 0)) {
        _leapYears[1] = 1; } else { _leapYears[1] = 0; }
}

function assignTodaysDateNumber() {
    checkForLeapYear();
    var today = new Date(); var todaysMonth = today.getMonth() + 1; var todaysDate = today.getDate();
    var cumulative = [0,153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [0,153,184,213,244,274,305,335,0,31,61,92,122];
    var dateNumber;
    if (_leapYears[1] == 1) {
        dateNumber = cumulativeLeap[todaysMonth] + todaysDate;
    } else {
        dateNumber = cumulative[todaysMonth] + todaysDate;
    }
    return dateNumber;
}

function isClassDay() {
    var todaysDateNumber = assignTodaysDateNumber();
    for (i = 1; i < _dateNumbers.length; i++) {
        if (todaysDateNumber == _dateNumbers[i]) {
            _isClassDay = true; break;
        } else {
            _isClassDay = false;
        }
    }
}

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    _elapsedWeeks = 32 //_sl[0].amAtt.length;
    isClassDay(); showMissions(); removePtBoxes();
}

function findStudent() {
    document.activeElement.blur();
    var x = document.getElementById("searchField").value.toLowerCase()
    if (x == "") { return; }
    if (x.includes(" ")) {
        var y = x.split(" ")[0];
        x = x.split(" ")[1];
    }
    var matches = [];
    for (i = 0; i < _sl.length; i++) {
        if (y) {
            if (_sl[i].lastName.toLowerCase() == x && _sl[i].firstName.toLowerCase() == y) {
                matches.push(i);
            }
        } else {
            if (_sl[i].lastName.toLowerCase() == x) {
                matches.push(i);
            }
        }
    }
    if (matches.length == 0) {
        infoAlert("No matches found for <span style='color:red;font-weight:bold'>" + document.getElementById("searchField").value + "</span>.  Please check the spelling and be sure you're typing your child's LAST name only.  Please try again or use the contact buttons above for help.",["mainPop"],"searchField");
        document.getElementById("searchField").value = "";
    }
    if (matches.length == 1) {
        _ci = matches[0]; loadStudentStats(); loadStudent(_ci);
    }
    if (matches.length > 1) {
        populateMatches(matches);
        infoAlert("More than one match found.<br>Please click the correct name below",["mainPop"],"searchField",true);
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

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank + 1) / 20) * 100).toFixed(1);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    for (i = 0; i < _elapsedWeeks-1; i++) {
        totalASpts += _asMaxPts[i];
        totalMVpts += _mvMaxPts[i];
    }
    for (i = 0; i < _elapsedWeeks-1; i++) {
        earnedASpts += Object.values(_sl[_ci].as)[i];
        earnedMVpts += Object.values(_sl[_ci].mv)[i];
    }
    var asPercentage = ((earnedASpts / totalASpts) * 100).toFixed(1);
    var asSquares = Math.round(asPercentage / 2.50);
    var mvPercentage = ((earnedMVpts / totalMVpts) * 100).toFixed(1);
    var mvSquares = Math.round(mvPercentage / 2.50);
    var totalPoints = totalASpts + totalMVpts;
    var totalEarnedPoints = earnedASpts + earnedMVpts;
    var totalPointsPercentage = ((totalEarnedPoints / totalPoints) * 100).toFixed(1);
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
    var idArray1 = ["rankProgressTable","totalProgressTable","asProgressTable","mvProgressTable","attendanceProgressTable","totalParticipationTable"];
    var idArray2 = ["rankProgressBar","totalProgressBar","asProgressBar","mvProgressBar","attendanceProgressBar","totalParticipationBar"];
    for (i = 0; i < squaresArray.length; i++) {
        for (j = 1; j <= 40; j++) {
            if (j <= squaresArray[i]) {
                if (i == 0) {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "dodgerblue";
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
                document.getElementById(idArray1[i]).style.backgroundColor = "dodgerblue";
            } else {
                document.getElementById(idArray1[i]).style.backgroundColor = "lawngreen";
            }
        } else {
            document.getElementById(idArray1[i]).style.backgroundColor = "black";
        }
    }
    assignClassRank();
    document.getElementById("studentStatsInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    document.getElementById("statsRankName").innerHTML = _rankNames[_sl[_ci].rank];
    if (_rankNames[_sl[_ci].rank].length > 20) {
        document.getElementById("statsRankName").style.fontSize = "15px";
    } else {
        document.getElementById("statsRankName").style.fontSize = "18px";
    }
    document.getElementById("statsName").innerHTML = _sl[_ci].fullName;
    document.getElementById("statsClassRank").innerHTML = "Class Rank: " + _sl[_ci].classRank;
    document.getElementById("rankProgressTableP").innerHTML = "Rank Progress: " + (_sl[_ci].rank + 1) + "/20" + " (" + rankPercentage + "%)";
    document.getElementById("totalProgressTableP").innerHTML = "Total Points: " + totalEarnedPoints + "/" + totalPoints + " (" + totalPointsPercentage + "%)";
    document.getElementById("asProgressTableP").innerHTML = "Activity Sheet Points: " + earnedASpts + "/" + totalASpts + " (" + asPercentage + "%)";
    document.getElementById("mvProgressTableP").innerHTML = "Memory Verse Points: " + earnedMVpts + "/" + totalMVpts + " (" + mvPercentage + "%)";
    document.getElementById("attendanceProgressTableP").innerHTML = "Attendance: " + weeksAttended + "/" + _elapsedWeeks + " (" + attendancePercentage + "%)";
    //document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + Math.round(totalPercentage) + "%)";
    document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + totalPercentage + "%)";
    pop(["mainPop","infoAlertPop"],["studentStatsPop"]);
    document.getElementById("nameList").innerHTML = "";
}

function loadRankTable() {
    pop(["studentStatsPop","missionsPop","asPointsPop","mvPointsPop"],["rankChartPop"]);
    for (i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
        document.getElementById("rankChartRank"+i).innerHTML = _rankNames[i];
        document.getElementById("rankChartAbbreviation"+i).innerHTML = _rankNamesAbbr[i];
        document.getElementById("rankChartPoints"+i).innerHTML = _rankPts[i];
        document.getElementById("rankChartInsignia"+i).onclick = function() {
            pop(["rankChartPop"],["openInsigniaPop"]);
            document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+x+"-rank.jpg)";
        }
        if (i == _sl[_ci].rank) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        }
    }
    document.getElementById("rankChartContainer").scrollTop = 0;
}

function openInsignia() {
    pop(["rankChartPop"],["openInsigniaPop"]);
    document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    pop(["studentStatsPop","missionsPop","asPointsPop","mvPointsPop"],["openInsigniaPop"]);
}

function toggleIncomplete() {
    var noneHidden = true;
    for (i = 0; i < _elapsedWeeks-1; i++) {
        if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
            noneHidden = false; break;
        }
    }
    if (noneHidden) {
        for (i = 0; i < _elapsedWeeks-1; i++) {
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
        for (i = 0; i < _elapsedWeeks-1; i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        }
    }
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
    pop(["studentStatsPop","missionsPop"],["studentAttStatsPop"]);
}


function loadMissionsList(id) {
    document.getElementById("listAS").innerHTML = "";
    document.getElementById("listMV").innerHTML = "";
    document.getElementById("asHeading").innerHTML = "";
    document.getElementById("mvHeading").innerHTML = "";
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    for (i = 0; i < _elapsedWeeks-1; i++) {
        totalASpts += _asMaxPts[i];
        totalMVpts += _mvMaxPts[i];
    }
    for (i = 0; i < _elapsedWeeks-1; i++) {
        earnedASpts += Object.values(_sl[_ci].as)[i];
        earnedMVpts += Object.values(_sl[_ci].mv)[i];
    }
    document.getElementById("asHeading").innerHTML = " Activity Sheets " + "(" + earnedASpts + "/" + totalASpts + ")";
    document.getElementById("mvHeading").innerHTML = " Memory Verses " + "(" + earnedMVpts + "/" + totalMVpts + ")";
    for (i = 0; i < _elapsedWeeks-1; i++) {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        p1.classList.add("pointer"); p2.classList.add("pointer");
        p1.innerHTML = _asNamesFull[i] + " (" + _sl[_ci].as[i] + "/" + _asMaxPts[i] + ")";
        if (_sl[_ci].as[i] > 0 && _sl[_ci].as[i] < _asMaxPts[i]) {
            p1.style.color = "darkorange";
            p1.innerHTML = _asNamesFull[i] + " (" + _sl[_ci].as[i] + "/" + _asMaxPts[i] + ")" + "<br>" + "<span style='font-size: 15px'>" + "Reason for partial credit: " + _sl[_ci].asReasons[i] + "</span>";
        } else if (_sl[_ci].as[i] == 0) {
            p1.style.color = "firebrick";
        } else {
            p1.style.color = "lawngreen";
        }
        var mv = document.createTextNode(_mvNamesFull[i] + " (" + _sl[_ci].mv[i] + "/" + _mvMaxPts[i] + ")");
        if (_sl[_ci].mv[i] > 0 && _sl[_ci].mv[i] < _mvMaxPts[i]) {
            p2.style.color = "darkorange";
        } else if (_sl[_ci].mv[i] == 0) {
            p2.style.color = "firebrick";
        } else {
            p2.style.color = "lawngreen";
        }
        (function(i){
            p1.onclick = function () {
                _asNum = i; asLinks();
            }
        })(i);
        (function(i){
            p2.onclick = function () {
                _mvNum = i; mvLinks();
            }
        })(i);
        p2.appendChild(mv);
        document.getElementById("listAS").appendChild(p1);
        document.getElementById("listMV").appendChild(p2);
    }
    pop(["studentStatsPop","missionsPop","asPointsPop","mvPointsPop"],["listMissionPointsPop"]);
    scrollTo(0,0);
}

loadBackup();

document.getElementById("searchField").focus();

window.onbeforeunload = function() { return "Please use the back button at the top of the page"; }