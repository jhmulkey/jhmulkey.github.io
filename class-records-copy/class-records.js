var promotionSound = new Audio();
promotionSound.src = "promotion.mp3";

var feedbackSound = new Audio();
feedbackSound.src = "feedback.mp3";

var _ci; //current index
var _asNum; // activity sheet number
var _mvNum; // memory verse number

class Student {
    constructor(first,last) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = first + " " + last;
        this.points = 0;
        this.rank = 0;
        this.rankName = "New Recruit"
        this.rankNameAbbr = "NR"
        this.attendance = false;
        this.promoted = false;
        this.drawing = false;
        this.random = false;
        this.as = {
            as11: 0,
            as12: 0,
            as13: 0,
            as14: 0,
            as15: 0,
            as16: 0,
            as17: 0,
            as18: 0,
            as19: 0,
            asq1b: 0,
            as21: 0,
            as22: 0,
            as23: 0,
            as24: 0,
            as25: 0,
            as26: 0,
            as27: 0,
            as28: 0,
            asq2b: 0,
            as31: 0,
            as32: 0,
            as33: 0,
            as34: 0,
            as35: 0,
            as36: 0,
            as37: 0,
            as38: 0,
            asq3b: 0,
            as41: 0,
            as42: 0,
            as43: 0,
            as44: 0,
            as45: 0,
            as46: 0,
            as47: 0,
            as48: 0,
            asq4b: 0
        }
        this.mv = {
            mv11: 0,
            mv12: 0,
            mv13: 0,
            mv14: 0,
            mv15: 0,
            mv16: 0,
            mv17: 0,
            mv18: 0,
            mv19: 0,
            mv21: 0,
            mv22: 0,
            mv23: 0,
            mv24: 0,
            mv25: 0,
            mv26: 0,
            mv27: 0,
            mv28: 0,
            mv31: 0,
            mv32: 0,
            mv33: 0,
            mv34: 0,
            mv35: 0,
            mv36: 0,
            mv37: 0,
            mv38: 0,
            mv41: 0,
            mv42: 0,
            mv43: 0,
            mv44: 0,
            mv45: 0,
            mv46: 0,
            mv47: 0
        }
    }
};

sl = [
]; //student list

function newStudent() {
    var first = prompt("First Name:");
    var last = prompt("Last Name:");
    if (first === null || last === null) {
        return;
    } else {
        var newStudent = new Student(first,last);
        newStudent.attendance = true;
        sl.push(newStudent);
        sortStudentList();
        populateNames();
        storeNewData();
        backupNewData();
    };
};

function sortStudentList() {
    sl.sort(function(a,b) {
        var textA = a.lastName.toLowerCase();
        var textB = b.lastName.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
};

function setPoints() {
    x = prompt("set points to:");
    if (x === null) {
        return;
    } else {
        y = parseInt(x);
        sl[_ci].points = y;
        sl[_ci].rank = Math.floor(y/10);
        setRankName();
        document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
        document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
        document.getElementById("dispPts").innerHTML = sl[_ci].points;
        storeNewData();
        backupNewData();
    };
};

function promotion() {
    sl[_ci].rank++;
    sl[_ci].promoted = true;
    setRankName();
    promotionSound.play();
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
    document.getElementById("dispRankNamePromo").innerHTML = sl[_ci].rankName;
    document.getElementById("dispInsigPromo").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
    setTimeout(function() {
        pop("studentPop","promoPop","missionsPop")
    },50);
};

function demotion() {
    sl[_ci].rank--;
    sl[_ci].promoted = false;
    setRankName();
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
};

function setRankName() {
    var rankNames = [
        "New Recruit",
        "Private",
        "Private First Class",
        "Corporal",
        "Sergeant",
        "Staff Sergeant",
        "Sergeant First Class",
        "Master Sergeant",
        "Sergeant Major",
        "Command Sergeant Major",
        "2nd Lieutenant",
        "1st Lieutenant",
        "Captain",
        "Major",
        "Lieutenant Colonel",
        "Colonel",
        "Brigadier General",
        "Major General",
        "Lieutenant General",
        "General",
        "General of the Army",
    ];
    var rankNamesAbbr = [
        "NR",
        "PVT",
        "PFC",
        "CPL",
        "SGT",
        "SSG",
        "SFC",
        "MSG",
        "SGM",
        "CSM",
        "2LT",
        "1LT",
        "CPT",
        "MAJ",
        "LTC",
        "COL",
        "BG",
        "MG",
        "LTG",
        "GEN",
        "GOA",
    ];
    sl[_ci].rankName = rankNames[sl[_ci].rank];
    sl[_ci].rankNameAbbr = rankNamesAbbr[sl[_ci].rank];
}

function asPoints(_asNum,x) {
    if (sl[_ci].as[_asNum] == 0) {
        if ((sl[_ci].points - (sl[_ci].rank * 10)) + x >= 10) {
            promotion();
        };
        sl[_ci].points += x;
        sl[_ci].as[_asNum] = x;
    } else if (sl[_ci].as[_asNum] > 0 && sl[_ci].as[_asNum] != x) {
        if ((sl[_ci].points + (x - sl[_ci].as[_asNum])) < (sl[_ci].rank * 10)) {
            demotion();
        };
        if ((sl[_ci].points - (sl[_ci].rank * 10)) + (x - sl[_ci].as[_asNum]) >= 10) {
            promotion();
        };
        sl[_ci].points += (x - sl[_ci].as[_asNum]);
        sl[_ci].as[_asNum] = x;
    } else if (sl[_ci].as[_asNum] > 0 && sl[_ci].as[_asNum] == x) {
        sl[_ci].as[_asNum] -= x;
        sl[_ci].points -= x;
        if (sl[_ci].points < (sl[_ci].rank * 10)) {
            demotion();
        };
    };
    document.getElementById("dispPts").innerHTML = sl[_ci].points;
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    for (var key in sl[_ci].as) {
        if (sl[_ci].as[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check"+sl[_ci].as[key]+".png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    storeNewData();
    backupNewData();
    populateNames();
    feedbackSound.play();
    pop("asPointsPop","missionsPop");
};

function mvPoints(_mvNum,x) {
    if (sl[_ci].mv[_mvNum] == 0) {
        if ((sl[_ci].points - (sl[_ci].rank * 10)) + x >= 10) {
            promotion();
        };
        sl[_ci].points += x;
        sl[_ci].mv[_mvNum] = x;
    } else if (sl[_ci].mv[_mvNum] > 0 && sl[_ci].mv[_mvNum] != x) {
        if ((sl[_ci].points + (x - sl[_ci].mv[_mvNum])) < (sl[_ci].rank * 10)) {
            demotion();
        };
        if ((sl[_ci].points - (sl[_ci].rank * 10)) + (x - sl[_ci].mv[_mvNum]) >= 10) {
            promotion();
        };
        sl[_ci].points += (x - sl[_ci].mv[_mvNum]);
        sl[_ci].mv[_mvNum] = x;
    } else if (sl[_ci].mv[_mvNum] > 0 && sl[_ci].mv[_mvNum] == x) {
        sl[_ci].mv[_mvNum] -= x;
        sl[_ci].points -= x;
        if (sl[_ci].points < (sl[_ci].rank * 10)) {
            demotion();
        };
    };
    document.getElementById("dispPts").innerHTML = sl[_ci].points;
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    for (var key in sl[_ci].mv) {
        if (sl[_ci].mv[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check"+sl[_ci].mv[key]+".png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    storeNewData();
    backupNewData();
    populateNames();
    feedbackSound.play();
    pop("mvPointsPop","missionsPop");
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
    document.getElementById("studentPop").style.display = "block";
    document.getElementById("missionsPop").style.display = "block";
    document.getElementById("mainPop").style.display = "none";    
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    document.getElementById("dispName").innerHTML = sl[_ci].fullName;
    document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
    document.getElementById("dispPts").innerHTML = sl[_ci].points;
    if (sl[_ci].attendance === true) {
        document.getElementById("attendanceButton").style.borderColor = "green";
    } else {
        document.getElementById("attendanceButton").style.borderColor = "red";
    };
    document.getElementById("search").value = "";
    searchNames();
    for (var key in sl[_ci].as) {
        if (sl[_ci].as[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check"+sl[_ci].as[key]+".png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    for (var key in sl[_ci].mv) {
        if (sl[_ci].mv[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check"+sl[_ci].mv[key]+".png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    scrollTo(0,0);
};

function missionLinks() {
    window.open("../docs/"+_asNum+".pdf","_blank");
};

function pop(close,open,close2,open2) {
    document.getElementById(close).style.display = "none";
    document.getElementById(open).style.display = "block"; 
    if (close2) {
        document.getElementById(close2).style.display = "none";
    };
    if (open2) {
        document.getElementById(open2).style.display = "block";
    };
    if (open == "mainPop") {
        document.getElementById("search").focus();
    };
    if (document.getElementById("asPointsPop").style.display == "block") {
        document.getElementById("asPointsPop").style.display = "none";
    };
    if (document.getElementById("mvPointsPop").style.display == "block") {
        document.getElementById("mvPointsPop").style.display = "none";
    };
    scrollTo(0,0);
};

function asPop(asNum) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPointsPop").style.display = "block"; 
    _asNum = asNum;
    var asPts = document.getElementsByClassName("asPts");
    for (i = 0; i < asPts.length; i++) {
        if (asPts[i].innerHTML == sl[_ci].as[_asNum]) {
            asPts[i].style.cssText = "border: 3px solid green";
        } else {
            asPts[i].style.cssText = "border: 1px solid white";
        };
    };
};

function mvPop(mvNum,index) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPointsPop").style.display = "block";
    _mvNum = mvNum;
    document.getElementById("mvText").innerHTML = mvText[index];
    var mvPts = document.getElementsByClassName("mvPts");
    for (i = 0; i < mvPts.length; i++) {
        if (mvPts[i].innerHTML == sl[_ci].mv[_mvNum]) {
            mvPts[i].style.cssText = "border: 3px solid green";
        } else {
            mvPts[i].style.cssText = "border: 1px solid white";
        };
    };
    if (_mvNum == "mv28" || _mvNum == "mv38" || _mvNum == "mv42" || _mvNum == "mv44") {
        document.getElementById("fourPoints").style.display = "block";
    };
};

function attendanceList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("attList").appendChild(elementNode);
};

function loadAttendees() {
    document.getElementById("attList").innerHTML = "";
    var attCount = 0
    for (i = 0; i < sl.length; i++) {
        if (sl[i].attendance === true) {
            attendanceList(sl[i].fullName);
            attCount++;
        };
    };
    document.getElementById("attCount").innerHTML = attCount;
    pop("mainMenuPop","attListPop");
};

function promotionList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    (function(i){
        elementNode.onclick = function () {
            togglePromotion(i);
        };
    })(i);
    document.getElementById("promoList").appendChild(elementNode);
};

function togglePromotion(x) {
    if (sl[x].promoted === true) {
        sl[x].promoted = false;
    } else {
        sl[x].promoted = true;
    };
    loadPromotees();
    storeNewData();
    backupNewData();
    feedbackSound.play();
};

function loadPromotees() {
    document.getElementById("promoList").innerHTML = "";
    for (i = 0; i < sl.length; i++) {
        if (sl[i].promoted === true) {
            promotionList(sl[i].rankNameAbbr + " " + sl[i].fullName);
        };
    };
    pop("mainMenuPop","promoListPop");
};

function populateNames() {
    document.getElementById("nameList").innerHTML = "";
    for (i = 0; i < sl.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                loadStudent(i);
            };
        })(i);
        var textNode = document.createTextNode(sl[i].rankNameAbbr + " " + sl[i].fullName + " " + sl[i].points);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    };  
};

function attendance() {
    if (sl[_ci].attendance === false) {
        sl[_ci].attendance = true;
        document.getElementById("attendanceButton").style.borderColor = "green";
    } else {
        sl[_ci].attendance = false;
        document.getElementById("attendanceButton").style.borderColor = "red";
    };
    storeNewData();
    backupNewData();
    feedbackSound.play();
};

function drawing() {
    var eligibleNames = [];
    for (i = 0; i < sl.length; i++) {
        if (sl[i].attendance === true && sl[i].drawing === false) {
            eligibleNames.push(sl[i])
        };
    };
    if (eligibleNames.length == 0) {
        if (confirm("No eligible names. Click OK to reset drawing stats.")) {
            resetDrawing();
        };
    } else {
        var x = Math.floor(Math.random() * eligibleNames.length);
        var winner = eligibleNames[x];
        winner.drawing = true;
        document.getElementById("drawingFirst").innerHTML = winner.firstName;
        document.getElementById("drawingLast").innerHTML = winner.lastName;
        storeNewData();
        backupNewData();
        pop("mainMenuPop","drawingPop");
    };
};

function validateRandom() {
    var count = 0;
    for (i = 0; i < sl.length; i++) {
        if (sl[i].attendance === true) {
            count++
        };
    };
    if (count > 0) {
        random();
    } else {
        alert("No attendees");
    };
};

function random() {
    var eligibleNames = [];
    for (i = 0; i < sl.length; i++) {
        if (sl[i].attendance === true && sl[i].random === false) {
            eligibleNames.push(sl[i])
        };
    };
    if (eligibleNames.length == 0) {
        for (i = 0; i < sl.length; i++) {
            sl[i].random = false;
        };
        random();
    } else {
        var x = Math.floor(Math.random() * eligibleNames.length);
        var picked = eligibleNames[x];
        picked.random = true;
        document.getElementById("randomFirst").innerHTML = picked.firstName;
        document.getElementById("randomLast").innerHTML = picked.lastName;
        storeNewData();
        backupNewData();
        pop("mainMenuPop","randomPop");
    };
};

function resetDrawing() {
    if (confirm("Are you sure you want to reset drawing stats?")) {
        for (i = 0; i < sl.length; i++) {
            sl[i].drawing = false;
        };
        storeNewData();
        backupNewData();
    };
};
    
var mvText = [
    "Ps 139:17<br/>How precious to me are your thoughts, O God! How vast is the sum of them!",
    "Phil 2:5<br/>Have this mind among yourselves, which is yours in Christ Jesus,",
    "Phil 2:6<br/>who, though he was in the form of God, did not count equality with God a thing to be grasped,",
    "Phil 2:7<br/>but emptied himself, by taking the form of a servant, being born in the likeness of men.",
    "Phil 2:8<br/>And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    "Phil 2:9<br/>Therefore God has highly exalted him and bestowed on him the name that is above every name,",
    "Phil 2:10<br/>so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth,",
    "Phil 2:11<br/>and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
    "Mt 5:3<br/>Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    "Mt 5:4<br/>Blessed are those who mourn, for they shall be comforted.",
    "Mt 5:5<br/>Blessed are the meek, for they shall inherit the earth.",
    "Mt 5:6<br/>Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.",
    "Mt 5:7<br/>Blessed are the merciful, for they shall receive mercy.",
    "Mt 5:8<br/>Blessed are the pure in heart, for they shall see God.",
    "Mt 5:9<br/>Blessed are the peacemakers, for they shall be called sons of God.",
    "Mt 5:10<br/>Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.",
    "Mt 5:11-12<br/>Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.",
    "Rom 8:31<br/>What then shall we say to these things? If God is for us, who can be against us?",
    "Rom 8:32<br/>He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
    "Rom 8:33<br/>Who shall bring any charge against God's elect? It is God who justifies.",
    "Rom 8:34<br/>Who is to condemn?  Christ Jesus is the one who died???more than that, who was raised???who is at the right hand of God, who indeed is interceding for us.",
    "Rom 8:35<br/>Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?",
    "Rom 8:36<br/>As it is written, 'For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.'",
    "Rom 8:37<br/>No, in all these things we are more than conquerors through him who loved us.",
    "Rom 8:28-39<br/>For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Eph 6:10-11<br/>Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.",
    "Eph 6:12<br/>For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.",
    "Eph 6:13<br/>Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.",
    "Eph 6:14-15<br/>Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness, and, as shoes for your feet, having put on the readiness given by the gospel of peace.",
    "Eph 6:16<br/>In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one;",
    "Eph 6:17<br/>and take the helmet of salvation, and the sword of the Spirit, which is the word of God,",
    "Eph 6:18<br/>praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints," 
];

//***ONLOAD FUNCTIONS***//
function whatToLoad() {
    if (!localStorage.getItem("sl")) {
        if (JSON.parse(localStorage.getItem("backup"))) {
            sl = JSON.parse(localStorage.getItem("backup"));
            sortStudentList();
            populateNames();
            for (i = 0; i < sl.length; i++) {
                sl[i].attendance = false;
                sl[i].random = false;
            };
        } else {
            sortStudentList();
            populateNames();
        };
    } else {
        pop("mainPop","wtlPop");
    };
}; /* if no localStorage data exists, bacjup.js will be loaded; if backup.js is not available, original zeroed data will load
if localStorage data exists, you are given the choice to load it or backup.js */

function loadBackup() {
    if (!JSON.parse(localStorage.getItem("backup"))) {
        alert("backup.js not available");
        return;
    } else {
        if (confirm("This action may potentially overwrite more current data. Are you sure?")) {
            sl = JSON.parse(localStorage.getItem("backup"));
            sortStudentList();
            populateNames();
            for (i = 0; i < sl.length; i++) {
                sl[i].attendance = false;
            };
            pop("wtlPop","mainPop");
        };
    };
};

function loadLS() {
    sl = JSON.parse(localStorage.getItem("sl"));
    populateNames();
    backupNewData();
    pop("wtlPop","mainPop");
};

function storeNewData() {
    localStorage.setItem("sl",JSON.stringify(sl));
};

function backupNewData() {
    document.getElementById("backupArray").innerHTML = localStorage.getItem("sl");
};

function SelectText(element) {
    var text = document.getElementById(element);
    var range; var selection;    
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    };
};

document.onclick = function(e) {    
    if (e.target.className === "select") {
        SelectText('backupArray');
    };
};

//***ONLOAD FUNCTION CALLS***//
whatToLoad();

document.getElementById("search").focus();

//***POSSIBLE FUNCTIONS FOR FUTURE***//

/*
asCompletion() {
    var completed = 0;
    for (var key in sl[_ci].as) {
        if (sl[_ci].as[key] > 0) {
            completed++;
        };
    };
    return (Math.round(((completed / Object.keys(sl[_ci].as).length) * 100) * 10) / 10) + " %";
}

mvCompletion() {
    var completed = 0;
    for (var key in sl[_ci].mv) {
        if (sl[_ci].mv[key] > 0) {
            completed++;
        };
    };
    return (Math.round(((completed / Object.keys(sl[_ci].mv).length) * 100) * 10) / 10) + " %";
}

function allCompletion() {
    var completed = 0;
    for (var key in sl[_ci].as) {
        if (sl[_ci].as[key] > 0) {
            completed++;
        };
    };
    for (var key in sl[_ci].mv) {
        if (sl[_ci].mv[key] > 0) {
            completed++;
        };
    };
    document.getElementById("allCompletion").innerHTML = (Math.round(((completed / (Object.keys(sl[_ci].as).length + Object.keys(sl[_ci].mv).length) * 100) * 10)) / 10) + "%";
}*/