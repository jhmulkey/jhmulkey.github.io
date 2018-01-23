var promotionSound = new Audio();
promotionSound.src = "promotion.mp3";

var feedbackSound = new Audio();
feedbackSound.src = "feedback.mp3";

var _ci; //current index
var _asNum;
var _mvNum;
var _attendance = 0;

class Student {
    constructor(first,last) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = first + " " + last;
        this.points = 0;
        this.rank = 0;
        this.rankName = "New Recruit"
        this.attendance = false;
        this.promoted = false;
        this.drawing = false;
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

var sl = []; // student list
var Aldrich1 = new Student("Aeralind","Aldrich");
var Aldrich2 = new Student("Bronwyn","Aldrich");
var Ballard = new Student("Calvin","Ballard");
var Brown = new Student("Evan","Brown");
var Childs = new Student("Darius","Childs");
var Collins = new Student("Samuel","Collins");
var Cronin = new Student("Ben","Cronin");
var Cruice = new Student("Ashton","Cruice");
var Deming = new Student("Raegan","Deming");
var Hotchkiss = new Student("Rowan","Hotchkiss");
var Ice = new Student("Isaac","Ice");
var Mair = new Student("Bella","Mair");
var Morris = new Student("Connell","Morris");
var Neal = new Student("Katie","Neal");
var Nelson = new Student("Annaliese","Nelson");
var Noblitt = new Student("Sydney","Noblitt");
var Norton = new Student("Hailey","Norton");
var Pahnke = new Student("Jill","Pahnke");
var Peoples = new Student("Job","Peoples");
var Pidcock = new Student("Blake","Pidcock");
var Rogers = new Student("Cameron","Rogers");
var Schley = new Student("Adalyn","Schley");
var Snyder = new Student("Liam","Snyder");
var Walker = new Student("Macie","Walker");
var Waters = new Student("Olivia","Waters");

function pushData() {
    sl.push(Aldrich1);
    sl.push(Aldrich2);
    sl.push(Ballard);
    sl.push(Brown);
    sl.push(Childs);
    sl.push(Collins);
    sl.push(Cronin);
    sl.push(Cruice);
    sl.push(Deming);
    sl.push(Hotchkiss);
    sl.push(Ice);
    sl.push(Mair);
    sl.push(Morris);
    sl.push(Neal);
    sl.push(Nelson);
    sl.push(Noblitt);
    sl.push(Norton);
    sl.push(Pahnke);
    sl.push(Peoples);
    sl.push(Pidcock);
    sl.push(Rogers);
    sl.push(Schley);
    sl.push(Snyder);
    sl.push(Walker);
    sl.push(Waters);
};

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
        pop("missionsPop","promoPop")
    },500);
};

function demotion() {
    sl[_ci].rank--;
    setRankName();
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
};

function setRankName() {
    var rankNames = ["New Recruit","PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAG","LTC","COL","BG","MG","LTG","GEN","GOA",];
    sl[_ci].rankName = rankNames[sl[_ci].rank];
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
    feedbackSound.play();
    pop("mvPointsPop","missionsPop");
};

function searchNames() {
    var inputVal = document.getElementById("search").value.toLowerCase();
    var inputLength = inputVal.length;
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
    document.getElementById("mainPop").style.display = "none";    
    document.getElementById("dispRankName").innerHTML = sl[_ci].rankName;
    document.getElementById("dispName").innerHTML = sl[_ci].fullName;
    document.getElementById("dispInsig").style.backgroundImage = "url(images/"+sl[_ci].rank+".png)";
    document.getElementById("dispPts").innerHTML = sl[_ci].points;
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
};

function pop(close,open,close2) {
    document.getElementById(close).style.display = "none";
    document.getElementById(open).style.display = "block"; 
    if (close2) {
        document.getElementById(close2).style.display = "none";
    };
    if (open == "mainPop") {
        document.getElementById("search").focus();
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
};

function promotionList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("promoList").appendChild(elementNode);
}

function loadPromotees() {
    document.getElementById("promoList").innerHTML = "";
    for (i = 0; i < sl.length; i++) {
        if (sl[i].promoted === true) {
            promotionList(sl[i].rankName + " " + sl[i].fullName);
        };
    };
    pop("mainMenuPop","promoListPop");
};

function attendanceList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("attList").appendChild(elementNode);
}

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
        var textNode = document.createTextNode(sl[i].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    };  
};

function attendance() {
    if (sl[_ci].attendance === false) {
        sl[_ci].attendance = true;
        document.getElementById("attendanceButton").style.borderColor = "green";
        setTimeout(function() {
            document.getElementById("attendanceButton").style.borderColor = "white";
        },500);
    } else {
        sl[_ci].attendance = false;
        document.getElementById("attendanceButton").style.borderColor = "red";
        setTimeout(function() {
            document.getElementById("attendanceButton").style.borderColor = "white";
        },500);
    }
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
        resetDrawing();
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

function resetDrawing() {
    if (confirm("Are you sure you want to reset quarterly drawing stats?")) {
        for (i = 0; i < sl.length; i++) {
            sl[i].drawing = false;
        };
        storeNewData();
        backupNewData();
    };
};
    
var mvText = [
    "How precious to me are your thoughts, O God! How vast is the sum of them!",
    "Have this mind among yourselves, which is yours in Christ Jesus,",
    "who, though he was in the form of God, did not count equality with God a thing to be grasped,",
    "but emptied himself, by taking the form of a servant, being born in the likeness of men.",
    "And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    "Therefore God has highly exalted him and bestowed on him the name that is above every name,",
    "so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth,",
    "and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
    "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    "Blessed are those who mourn, for they shall be comforted.",
    "Blessed are the meek, for they shall inherit the earth.",
    "Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.",
    "Blessed are the merciful, for they shall receive mercy.",
    "Blessed are the pure in heart, for they shall see God.",
    "Blessed are the peacemakers, for they shall be called sons of God.",
    "Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.",
    "Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.",
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
    "n all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one;",
    "and take the helmet of salvation, and the sword of the Spirit, which is the word of God,",
    "praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints,"  
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
                sl[i].promoted = false;
            };
        } else {
            pushData();
            sortStudentList();
            populateNames();
        };
    } else {
        pop("mainPop","wtlPop");
    };
}; 

function loadBackup() {
    if (confirm("This action may potentially overwrite more current data. Are you sure?")) {
        sl = JSON.parse(localStorage.getItem("backup"));
        sortStudentList();
        populateNames();
        for (i = 0; i < sl.length; i++) {
            sl[i].attendance = false;
            sl[i].promoted = false;
        };
        pop("wtlPop","mainPop");
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


//***ONLOAD FUNCTION CALLS***//
whatToLoad();

document.getElementById("search").focus();


for (i = 0; i < sl.length; i++) {
    if (sl[i].drawing === true) {
       console.log(sl[i].fullName);
    };
};
/*
asCompletion() {
    var completed = 0;
    for (var key in this.as) {
        if (this.as[key] > 0) {
            completed++;
        };
    };
    return (Math.round(((completed / Object.keys(this.as).length) * 100) * 10) / 10) + " %";
}

mvCompletion() {
    var completed = 0;
    for (var key in this.mv) {
        if (this.mv[key] > 0) {
            completed++;
        };
    };
    return (Math.round(((completed / Object.keys(this.mv).length) * 100) * 10) / 10) + " %";
}

allCompletion() {
    var completed = 0;
    for (var key in this.as) {
        if (this.as[key] > 0) {
            completed++;
        };
    };
    for (var key in this.mv) {
        if (this.mv[key] > 0) {
            completed++;
        };
    };
    return (Math.round(((completed / (Object.keys(this.as).length + Object.keys(this.mv).length) * 100) * 10)) / 10) + " %";
}
*/