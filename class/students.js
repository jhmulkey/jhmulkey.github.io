var _sl = []; //student list - array where all student objects are stored and accessed
var _ci; //current index of _sl array
var _asNum; // activity sheet number
var _mvNum; // memory verse number
var _asPoints; // asPoints() stores the point value here if less than max points for when the function is called again after entering a reason
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,6]; // max points possible for each activity sheet
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3,0]; // max points possible for each memory verse
var _leapYear = false; // used to determine whether Feb has 29 or 29 days for purposes of upcoming birthday alerts
var _weeksOff = 0; // used to determine when alerts for upcoming birthdays appear if kidstuff will not meet for 1-2 weeks
var _checkedState = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // array where checkbox value for each mission's visibility is stored (default is to show the first mission only)
var _currentPops; // used to store an array of which Pop divs are visible when infoAlert() is called
var _currentPops2; // used to store an array of which Pop divs are visible when dataInputAlert() is called
var _sharedPop; // used if the back button may one of two or more Pops
var _focus; // stores text field id that focus() is called on when infoAlertPop is dismissed with the back button
var _currentFunction; // used to store a function so various other functions can use it
var _dataInputParameter; // if dataInputAlert() needs to pass a parameter to the formula it calls when user clicks OK, it is stored here
var _elapsedWeeks = 1; // number of class sessions to date
var _classDates = ["8/22", "8/29", "9/12", "9/19", "9/26", "10/3", "10/10", "10/17", "10/24", "10/31", "11/7", "11/14", "12/5", "12/12", "12/19", "1/9", "1/16", "1/23", "1/30", "2/6", "2/13", "2/20", "2/27", "3/6", "3/13", "3/20", "3/27", "4/3", "4/10", "4/24", "5/1", "5/8", "5/15", "5/22"];
var _dateNumbers = [234, 241, 255, 262, 269, 276, 283, 290, 297, 304, 311, 318, 339, 346, 353, 1009, 1016, 1023, 1030, 1037, 1044, 1051, 1058, 1065, 1072, 1079, 1086, 1093, 1100, 1114, 1121, 1128, 1135, 1142]; // unique numbers assinged to each class date
var _isClassDay; // if false, attendance-related functions will not alter the student's attendanceCount array values
var _rankNamesAbbr = ["PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAJ","LTC","COL","BG","MG","LTG","GEN","GOA"];
var _rankNames = ["Private","Private First Class","Corporal","Sergeant","Staff Sergeant","Sergeant First Class","Master Sergeant","Sergeant Major","Command Sergeant Major","Second Lieutenant","First Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","General of the Army"];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword","armor-review"]; // activity sheet names
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8",
"phil-2-9","phil-2-10-11","rom-8-31","rom-8-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"]; // memory verse names
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
    "<span style='color: dodgerblue'>Romans 8:31</span><br>What then shall we say to these things? If God is for us, who can be against us?",
    "<span style='color: dodgerblue'>Romans 8:32</span><br>He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
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

function setWeeksOff() {
    var today = new Date()
    var todaysMonth = today.getMonth() + 1;
    var todaysDate = today.getDate();
    if ((todaysMonth == 8 && todaysDate == 29) || (todaysMonth == 4 && todaysDate == 10)) {
        _weeksOff = 1;
    } else if ((todaysMonth == 11 && todaysDate == 14) || (todaysMonth == 12 && todaysDate == 19)) {
        _weeksOff = 2;
    } else {
        _weeksOff = 0;
    }
};

function loadTodaysDate() {
    document.getElementById("todaysDate").style.fontSize = "15px";
    document.getElementById("todaysDate").innerHTML = Date();
}; // for top of activity log

function infoAlert(message,idArray,focus,noIcon) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        document.getElementById("infoAlertPop").style.display = "none";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "block"
            };
        };
        document.getElementById("infoAlertMessage").innerHTML = "";
        document.getElementById("nameList").innerHTML = "";
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        if (noIcon) {
            document.getElementById("infoAlertTitle").style.display = "none";
        } else {
            document.getElementById("infoAlertTitle").style.display = "block";
        };
        document.getElementById("infoAlertPop").style.display = "block";
        scrollTo(0,0);
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "none"
            };
        };
        document.getElementById("infoAlertMessage").innerHTML = message;
    };
    if (_focus) {
        document.getElementById(_focus).focus();
    };
};

function dataInputAlert(message,popArray,reasonRequired,func,parameter,bypass) {
    if (document.getElementById("dataInputAlertPop").style.display != "block") {
        _dataInputParameter = parameter;
        _currentPops2 = popArray;
        _currentFunction = func;
        document.getElementById("dataInputAlertPop").style.display = "block";
        document.getElementById("dataInputTextField").value = "";
        for (i = 0; i < _currentPops2.length; i++) {
            document.getElementById(_currentPops2[i]).style.display = "none"
        };
        document.getElementById("dataInputAlertMessage").innerHTML = message;
        if (reasonRequired === true) {
            document.getElementById("enterReasonDiv").style.display = "block";
            document.getElementById("enterReasonTextField").value = "";
        } else {
            document.getElementById("enterReasonDiv").style.display = "none";
        };
        document.getElementById("dataInputTextField").focus();
    } else if (document.getElementById("dataInputAlertPop").style.display == "block") {
        if (!bypass) {
            if (isNaN(parseInt(document.getElementById("dataInputTextField").value))) {
                infoAlert("Please enter a number",["dataInputAlertPop"],"dataInputTextField"); return;
            }
            if (!bypass && document.getElementById("enterReasonDiv").style.display == "block" && document.getElementById("enterReasonTextField").value == "") {
                infoAlert("Reason required",["dataInputAlertPop"],"enterReasonTextField"); return;
            };
            var data = parseInt(document.getElementById("dataInputTextField").value);
            var reason = document.getElementById("enterReasonTextField").value;
            _currentFunction(_dataInputParameter,data,reason);
            for (i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            };
            document.getElementById("enterReasonDiv").style.display = "none";
            document.getElementById("dataInputAlertMessage").innerHTML = "";
            document.getElementById("enterReasonTextField").value = "";
            document.getElementById("dataInputAlertPop").style.display = "none";
        } else {
            document.getElementById("dataInputAlertPop").style.display = "none";
            for (i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            };
        };
    };
};

function actionAlert(message,popsArray,func,bypass) {
    if (document.getElementById("actionAlertPop").style.display != "block") { //A
        _currentPops = popsArray; //A1
        _currentFunction = func; //A1
        document.getElementById("actionAlertPop").style.display = "block"; //A2
        for (i = 0; i < _currentPops.length; i++) { //A3
            if (_currentPops[i] !== undefined) {
                document.getElementById(_currentPops[i]).style.display = "none"
            };
        };
        document.getElementById("actionAlertMessage").innerHTML = message; //A4
    } else if (document.getElementById("actionAlertPop").style.display == "block") { //B
        document.getElementById("actionAlertPop").style.display = "none"; //B1
        for (i = 0; i < _currentPops.length; i++) { //B2
            if (_currentPops[i] !== undefined) {
                document.getElementById(_currentPops[i]).style.display = "block"
            };
        };
        document.getElementById("actionAlertMessage").innerHTML = ""; //B3
        if (!bypass) { //B4
            _currentFunction();
        };
    }; 
};

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
};

function assignClassRank() {
    var points = [];
    for (i = 0; i < _sl.length; i++) {
        points.push(_sl[i].points);
    };
    var pointsSorted = points.slice().sort(function(a,b){return b - a});
    var pointsRanked = points.map(function(v){return pointsSorted.indexOf(v)+1});
    for (i = 0; i < _sl.length; i++) {
        _sl[i].classRank = pointsRanked[i];
    };
};

function setRankFactor() {
    if (_sl[_ci].rank == 14 || _sl[_ci].rank == 15) {
        _sl[_ci].rankFactor = 1;
    } else if (_sl[_ci].rank == 18 || _sl[_ci].rank == 19) {
        _sl[_ci].rankFactor = 2;
    } else {
        _sl[_ci].rankFactor = 0;
    };
};

function setRankName() {
    _sl[_ci].rankName = _rankNamesAbbr[_sl[_ci].rank];
};

function removePtBoxes() {
    pops = ["asPointsPop","mvPointsPop"];
    buttons = ["as4Points","as5Points","as6Points","mv4Points","mv5Points","mv6Points"];
    for (i = 0; i <pops.length; i++) {
        if (document.getElementById(pops[i]).style.display != "block") {
            for (i = 0; i <buttons.length; i++) {
                document.getElementById(buttons[i]).style.display = "none";
            };
        };
    };
};

function searchNames() {
    var inputVal = document.getElementById("search").value.toLowerCase();
    var names = document.getElementsByClassName("name");
    for (i = 0; i < names.length; i++) {
        if (names[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        };
    };
};

function loadStudent(index) {
    _ci = index;
    for (i = 0; i < _asMaxPts.length; i++) {
        if (_sl[_ci].as[i] == _asMaxPts[i]) {
            document.getElementById("as"+i+"Pop").style.background = "green";
        } else if (_sl[_ci].as[i] > 0 && _sl[_ci].as[i] < _asMaxPts[i]) {
            document.getElementById("as"+i+"Pop").style.background = "darkorange";
        } else {
            document.getElementById("as"+i+"Pop").style.background = "black";
        };
    };
    for (i = 0; i < _mvMaxPts.length; i++) {
        if (_sl[_ci].mv[i] == _mvMaxPts[i]) {
            document.getElementById("mv"+i+"Pop").style.background = "green";
        } else if (_sl[_ci].mv[i] > 0 && _sl[_ci].mv[i] < _mvMaxPts[i]) {
            document.getElementById("mv"+i+"Pop").style.background = "darkorange";
        } else {
            document.getElementById("mv"+i+"Pop").style.background = "black";
        };
    };
    pop([],["missionsPop"]);
};

function missionLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
};

function mvLinks() {
    window.open("docs/memory/mv"+_mvNum+".pdf","_blank");
};

function pop(closeArray,openArray) {
    for (i = 0; i < closeArray.length; i++) {
        if (closeArray != []) {
            document.getElementById(closeArray[i]).style.display = "none";
        };
    };
    for (i = 0; i < openArray.length; i++) {
        if (openArray != []) {
            document.getElementById(openArray[i]).style.display = "block";
        };    
    };
    if (closeArray.includes("asPointsPop") || closeArray.includes("mvPointsPop")) {
        removePtBoxes();
    };
    if (openArray.includes("mainPop")) {
        document.getElementById("search").value = "";
        document.getElementById("multipleMatches").innerHTML = "";
        document.getElementById("search").focus();
        for (i = 0; i < (_elapsedWeeks - 1); i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        };
        document.getElementById("toggleIncompleteCheck").checked = false;
    };
    if (openArray.includes("randomPop") || openArray.includes("drawingPop")) {
        document.getElementById("randomName").innerHTML = "tap here<br>to pick";
        document.getElementById("winnerName").innerHTML = "tap here<br>to pick";
    };
    if (openArray.includes("logPop")) {
        document.getElementById("searchLog").value = "";
        document.getElementById("searchLog").focus();
        document.getElementById("log").innerHTML = _log;
    };
    if (openArray.includes("attendance2Pop")) {
        document.getElementById("search2").value = "";
        document.getElementById("search2").focus();
        document.getElementById("log").innerHTML = _log;
    };
    if (openArray.includes("newStudentPop")) {
        document.getElementById("newFirstAndLast").focus();
    };
    if (openArray.includes("addNotePop")) {
        document.getElementById("addNote").focus()
    };
    if (openArray.includes("addTeacherNotePop")) {
        document.getElementById("addTeacherNote").focus();
    };
    if (openArray.includes("logPop")) {
        loadTodaysDate()
    };
};

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    };
    for (i = 0; i < (_elapsedWeeks - 1); i++) {
        document.getElementById("as"+i+"Pop").style.display = "block";
        document.getElementById("mv"+i+"Pop").style.display = "block";
    };
    document.getElementById("search").value = "";
    document.getElementById("search").focus();
    for (i = 0; i < (_elapsedWeeks - 1); i++) {
        document.getElementById("as"+i+"Pop").style.display = "block";
        document.getElementById("mv"+i+"Pop").style.display = "block";
    };
    removePtBoxes();
};

function asPop(asNum,points) {
    _asNum = asNum;
    if (_sl[_ci].asReasons[_asNum] != "") {
        document.getElementById("asReason").innerHTML = "Reason for partial credit:<br><span style='color:white'>" + _sl[_ci].asReasons[_asNum] + "</span>";
    } else {
        document.getElementById("asReason").innerHTML = ""
    };
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPointsPop").style.display = "block";
    var asPts = document.getElementsByClassName("asPts");
    for (i = 0; i < asPts.length; i++) {
        if (asPts[i].innerHTML == _sl[_ci].as[_asNum]) {
            asPts[i].style.background = "blue";
        } else {
            asPts[i].style.background = "black";
        };
    };
    if (points == 4) {
        document.getElementById("as4Points").style.display = "block";
    };
    if (points == 5) {
        document.getElementById("as4Points").style.display = "block";
        document.getElementById("as5Points").style.display = "block";
    };
    if (points == 6) {
        document.getElementById("as4Points").style.display = "block";
        document.getElementById("as5Points").style.display = "block";
        document.getElementById("as6Points").style.display = "block";
    };
    if (points > 3) {
        document.getElementById("asPage3").style.display = "block";
    } else {
        document.getElementById("asPage3").style.display = "none";
    };
    var urlStart = "url(img/missions/as";
    var urlEnd1 = "a.jpg)"; var urlEnd2 = "b.jpg)"; var urlEnd3 = "c.jpg)"
    document.getElementById("asPage1").style.backgroundImage = urlStart+_asNum+urlEnd1;
    document.getElementById("asPage2").style.backgroundImage = urlStart+_asNum+urlEnd2;
    if (points > 3) {
        document.getElementById("asPage3").style.backgroundImage = urlStart+_asNum+urlEnd3;
    };
    document.getElementById("totalParticipationTable").scrollIntoView();
};

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
        };
    };
    if (points == 4) {
        document.getElementById("mv4Points").style.display = "block";
    };
    if (points == 5) {
        document.getElementById("mv4Points").style.display = "block";
        document.getElementById("mv5Points").style.display = "block";
    };
    if (points == 6) {
        document.getElementById("mv4Points").style.display = "block";
        document.getElementById("mv5Points").style.display = "block";
        document.getElementById("mv6Points").style.display = "block";
    };
    document.getElementById("totalParticipationTable").scrollIntoView();
};

function confirmAction(id) {
    document.getElementById(id).style.display = "block"
}

function toggleMissions(x) {
    var as = document.getElementById("as"+x+"Pop");
    var mv = document.getElementById("mv"+x+"Pop")
    if (as.style.display != "block") {
        as.style.display = "block";
        mv.style.display = "block";
        _checkedState[x] = 1;
    } else {
        as.style.display = "none";
        mv.style.display = "none";
        _checkedState[x] = 0;
    };
    storeAndBackup();
};

function showMissions() {
    for (i = 0; i < _checkedState.length; i++) {
        if (_checkedState[i] == 1) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        } else if (_checkedState[i] == 0) {
            document.getElementById("as"+i+"Pop").style.display = "none";
            document.getElementById("mv"+i+"Pop").style.display = "none";
        };
    };
};
 
function loadBackup() {
    _sl = []; _checkedState = [];
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    _checkedState = JSON.parse(localStorage.getItem("checkedStateBackup"));
    elapsedWeekCount();
    showMissions();
    removePtBoxes();
};

function findStudent() {
    var x = document.getElementById("search").value.toLowerCase()
    var matches = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].lastName.toLowerCase() == x) {
            matches.push(i);
        };
    };
    if (matches.length == 0) {
        infoAlert("No matches found.  Please try again or use contact buttons below for help.", ["mainPop"],"search");
        document.getElementById("search").value = "";
        document.getElementById("multipleMatches").innerHTML = "";
    };
    if (matches.length == 1) {
        _ci = matches[0]; loadStudentStats(); loadStudent(_ci);
    };
    if (matches.length > 1) {
        populateMatches(matches);
        infoAlert("More than one match found.<br>Please click the correct name below",["mainPop"],"search",true);
    };
};

function populateMatches(indexArray) {
    for (i = 0; i < indexArray.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                let x = indexArray[i]; _ci = x;
                loadStudentStats(); loadStudent(_ci);
            };
        })(i);
        var textNode = document.createTextNode(_sl[indexArray[i]].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    };  
};

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank + 1) / 20) * 100).toFixed(2);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    for (i = 0; i < (_elapsedWeeks - 1); i++) {
        totalASpts += _asMaxPts[i];
        totalMVpts += _mvMaxPts[i];
    };
    for (i = 0; i < (_elapsedWeeks - 1); i++) {
        earnedASpts += Object.values(_sl[_ci].as)[i];
        earnedMVpts += Object.values(_sl[_ci].mv)[i];
    };
    var asPercentage = ((earnedASpts / totalASpts) * 100).toFixed(2);
    var asSquares = Math.round(asPercentage / 2.50);
    var mvPercentage = ((earnedMVpts / totalMVpts) * 100).toFixed(2);
    var mvSquares = Math.round(mvPercentage / 2.50);
    var totalPoints = totalASpts + totalMVpts;
    var totalEarnedPoints = earnedASpts + earnedMVpts;
    var totalPointsPercentage = ((totalEarnedPoints / totalPoints) * 100).toFixed(2);
    var totalPointsSquares = Math.round(totalPointsPercentage / 2.50);
    var weeksAttended = 0;
    for (i = 0; i < _sl[_ci].attendanceCount.length; i++) {
        weeksAttended += _sl[_ci].attendanceCount[i];
    };
    var attendancePercentage = ((weeksAttended / _elapsedWeeks) * 100).toFixed(2);
    var attendanceSquares = Math.round(attendancePercentage / 2.50);
    var totalEarned = weeksAttended + earnedASpts + earnedMVpts;
    var totalPossible = _elapsedWeeks + totalASpts + totalMVpts;
    var totalPercentage = ((totalEarned / totalPossible) * 100).toFixed(2);
    var totalSquares = Math.round(totalPercentage / 2.50);
    for (i = 1; i <= 40; i++) {
        if (i <= rankSquares) {
            document.getElementById("rankProgressBar"+i).style.backgroundColor = "dodgerblue";
        } else {
            document.getElementById("rankProgressBar"+i).style.backgroundColor = "black";
        };
    };
    for (i = 1; i <= 40; i++) {
        if (i <= totalPointsSquares) {
            document.getElementById("totalProgressBar"+i).style.backgroundColor = "lawngreen";
        } else {
            document.getElementById("totalProgressBar"+i).style.backgroundColor = "black";
        };
    };
    for (i = 1; i <= 40; i++) {
        if (i <= asSquares) {
            document.getElementById("asProgressBar"+i).style.backgroundColor = "lawngreen";
        } else {
            document.getElementById("asProgressBar"+i).style.backgroundColor = "black";
        };
    };
    for (i = 1; i <= 40; i++) {
        if (i <= mvSquares) {
            document.getElementById("mvProgressBar"+i).style.backgroundColor = "lawngreen";
        } else {
            document.getElementById("mvProgressBar"+i).style.backgroundColor = "black";
        };
    };
    for (i = 1; i <= 40; i++) {
        if (i <= attendanceSquares) {
            document.getElementById("attendanceProgressBar"+i).style.backgroundColor = "lawngreen";
        } else {
            document.getElementById("attendanceProgressBar"+i).style.backgroundColor = "black";
        };
    };
    for (i = 1; i <= 40; i++) {
        if (i <= totalSquares) {
            document.getElementById("totalParticipationBar"+i).style.backgroundColor = "lawngreen";
        } else {
            document.getElementById("totalParticipationBar"+i).style.backgroundColor = "black";
        };
    };
    if (rankPercentage == 100.00) {
        document.getElementById("rankProgressTable").style.backgroundColor = "dodgerblue";
    } else {
        document.getElementById("rankProgressTable").style.backgroundColor = "black";
    };
    if (totalPointsPercentage == 100.00) {
        document.getElementById("totalProgressTable").style.backgroundColor = "lawngreen";
    } else {
        document.getElementById("totalProgressTable").style.backgroundColor = "black";
    };
    if (asPercentage == 100.00) {
        document.getElementById("asProgressTable").style.backgroundColor = "lawngreen";
    } else {
        document.getElementById("asProgressTable").style.backgroundColor = "black";
    };
    if (mvPercentage == 100.00) {
        document.getElementById("mvProgressTable").style.backgroundColor = "lawngreen";
    } else {
        document.getElementById("mvProgressTable").style.backgroundColor = "black";
    };
    if (attendancePercentage == 100.00) {
        document.getElementById("attendanceProgressTable").style.backgroundColor = "lawngreen";
    } else {
        document.getElementById("attendanceProgressTable").style.backgroundColor = "black";
    };
    if (totalPercentage == 100.00) {
        document.getElementById("totalParticipationTable").style.backgroundColor = "lawngreen";
    } else {
        document.getElementById("totalParticipationTable").style.backgroundColor = "black";
    };
    assignClassRank();
    document.getElementById("studentStatsInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    document.getElementById("statsRankName").innerHTML = _rankNames[_sl[_ci].rank];
    document.getElementById("statsName").innerHTML = _sl[_ci].fullName;
    document.getElementById("statsClassRank").innerHTML = "Class Rank: " + _sl[_ci].classRank;
    document.getElementById("rankProgressTableP").innerHTML = "Rank Progress: " + (_sl[_ci].rank + 1) + "/20" + " (" + Math.round(rankPercentage) + "%)";
    document.getElementById("totalProgressTableP").innerHTML = "Total Points: " + totalEarnedPoints + "/" + totalPoints + " (" + Math.round(totalPointsPercentage) + "%)";
    document.getElementById("asProgressTableP").innerHTML = "Activity Sheet Points: " + earnedASpts + "/" + totalASpts + " (" + Math.round(asPercentage) + "%)";
    document.getElementById("mvProgressTableP").innerHTML = "Memory Verse Points: " + earnedMVpts + "/" + totalMVpts + " (" + Math.round(mvPercentage) + "%)";
    document.getElementById("attendanceProgressTableP").innerHTML = "Attendance: " + weeksAttended + "/" + _elapsedWeeks + " (" + Math.round(attendancePercentage) + "%)";
    document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + Math.round(totalPercentage) + "%)";
    pop(["mainPop","infoAlertPop"],["studentStatsPop"]);
    document.getElementById("nameList").innerHTML = "";
};

function elapsedWeekCount() {
    _elapsedWeeks = 1;
    for (i = 0; i < _checkedState.length; i++) {
        if (_checkedState[i] == 1) {
            _elapsedWeeks++;
        };
    };
};

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
        };
        if (i == _sl[_ci].rank) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        };
    };
    document.getElementById("rankChartContainer").scrollTop = 0;
};

function openInsignia() {
    pop(["rankChartPop"],["openInsigniaPop"]);
    document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    pop(["studentStatsPop","missionsPop","asPointsPop","mvPointsPop"],["openInsigniaPop"]);
};

function toggleIncomplete() {
    var noneHidden = true;
    for (i = 0; i < (_elapsedWeeks - 1); i++) {
        if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
            noneHidden = false; break;
        };
    };
    if (noneHidden) {
        for (i = 0; i < (_elapsedWeeks - 1); i++) {
            if (_sl[_ci].as[i] < _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.display = "block"
            } else {
                document.getElementById("as"+i+"Pop").style.display = "none"
            };
            if (_sl[_ci].mv[i] < _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.display = "block"
            } else {
                document.getElementById("mv"+i+"Pop").style.display = "none"
            };
        };
    } else {
        for (i = 0; i < (_elapsedWeeks - 1); i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        };
    };
};

loadBackup();

document.getElementById("search").focus();
