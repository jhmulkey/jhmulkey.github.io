var promotionSound = new Audio();
promotionSound.src = "promotion.mp3";

var feedbackSound = new Audio();
feedbackSound.src = "feedback.mp3";

var _currentIndex;
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

var studentList = [];
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
    studentList.push(Aldrich1);
    studentList.push(Aldrich2);
    studentList.push(Ballard);
    studentList.push(Brown);
    studentList.push(Childs);
    studentList.push(Collins);
    studentList.push(Cronin);
    studentList.push(Cruice);
    studentList.push(Deming);
    studentList.push(Hotchkiss);
    studentList.push(Ice);
    studentList.push(Mair);
    studentList.push(Morris);
    studentList.push(Neal);
    studentList.push(Nelson);
    studentList.push(Noblitt);
    studentList.push(Norton);
    studentList.push(Pahnke);
    studentList.push(Peoples);
    studentList.push(Pidcock);
    studentList.push(Rogers);
    studentList.push(Schley);
    studentList.push(Snyder);
    studentList.push(Walker);
    studentList.push(Waters);
};

function setPoints() {
    x = parseInt(prompt("set points to:"));
    studentList[_currentIndex].points = x;
    studentList[_currentIndex].rank = Math.floor(x/10);
    setRankName();
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popInsignia").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
    document.getElementById("popPoints").innerHTML = studentList[_currentIndex].points;
    localStorage.setItem("studentList",JSON.stringify(studentList));
    backupNewData();
};

function promotion() {
    studentList[_currentIndex].rank++;
    setRankName();
    promotionSound.play();
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popInsignia").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
    document.getElementById("popRankPromo").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popInsigniaPromo").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
    log = studentList[_currentIndex].rankName + " " + studentList[_currentIndex].fullName;
    promotionList(log);
    setTimeout(function() {
        pop("missionsPop","promoPop")
    },500);
};

function demotion() {
    studentList[_currentIndex].rank--;
    setRankName();
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popInsignia").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
    document.getElementById("popRankPromo").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popInsigniaPromo").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
};

function setRankName() {
    var rankNames = ["New Recruit","PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAG","LTC","COL","BG","MG","LTG","GEN","GOA",];
    studentList[_currentIndex].rankName = rankNames[studentList[_currentIndex].rank];
}

function asPoints(_asNum,x) {
    feedbackSound.play();
    if (studentList[_currentIndex].as[_asNum]) {
        if ((studentList[_currentIndex].points + (x - studentList[_currentIndex].as[_asNum])) < (studentList[_currentIndex].rank * 10)) {
            demotion();
        };
        if ((studentList[_currentIndex].points - (studentList[_currentIndex].rank * 10)) + (x - studentList[_currentIndex].as[_asNum]) >= 10) {
            promotion();
        };
        studentList[_currentIndex].points += (x - studentList[_currentIndex].as[_asNum]);
    } else {
        if ((studentList[_currentIndex].points - (studentList[_currentIndex].rank * 10)) + x >= 10) {
            promotion();
        };
        studentList[_currentIndex].points += x;
    };
    studentList[_currentIndex].as[_asNum] = x;
    document.getElementById("popPoints").innerHTML = studentList[_currentIndex].points;
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    for (var key in studentList[_currentIndex].as) {
        if (studentList[_currentIndex].as[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    localStorage.setItem("studentList",JSON.stringify(studentList));
    backupNewData();
    pop("asPointsPop","missionsPop");
};

function mvPoints(_mvNum,x) {
    feedbackSound.play();
    if (studentList[_currentIndex].mv[_mvNum]) {
        if ((studentList[_currentIndex].points + (x - studentList[_currentIndex].mv[_mvNum])) < (studentList[_currentIndex].rank * 10)) {
            demotion();
        };
        if ((studentList[_currentIndex].points - (studentList[_currentIndex].rank * 10)) + (x - studentList[_currentIndex].mv[_mvNum]) >= 10) {
            promotion();
        };
        studentList[_currentIndex].points += (x - studentList[_currentIndex].mv[_mvNum]);
    } else {
        if ((studentList[_currentIndex].points - (studentList[_currentIndex].rank * 10)) + x >= 10) {
            promotion();
        };
        studentList[_currentIndex].points += x;
    };
    studentList[_currentIndex].mv[_mvNum] = x;
    document.getElementById("popPoints").innerHTML = studentList[_currentIndex].points;
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    for (var key in studentList[_currentIndex].mv) {
        if (studentList[_currentIndex].mv[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    localStorage.setItem("studentList",JSON.stringify(studentList));
    backupNewData();
    pop("mvPointsPop","missionsPop");
};

function asVoid() {
    
};

function mvVoid() {
    
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
    _currentIndex = index;
    document.getElementById("studentPop").style.display = "block";
    document.getElementById("mainPop").style.display = "none";    
    document.getElementById("popRank").innerHTML = studentList[_currentIndex].rankName;
    document.getElementById("popName").innerHTML = studentList[_currentIndex].fullName;
    document.getElementById("popInsignia").style.backgroundImage = "url(images/"+studentList[_currentIndex].rank+".png)";
    document.getElementById("popPoints").innerHTML = studentList[_currentIndex].points;
    document.getElementById("search").value = "";
    searchNames();
    for (var key in studentList[_currentIndex].as) {
        if (studentList[_currentIndex].as[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    for (var key in studentList[_currentIndex].mv) {
        if (studentList[_currentIndex].mv[key] > 0) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
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
};

function asPop(asNum) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPointsPop").style.display = "block"; 
    _asNum = asNum;
    var asPts = document.getElementsByClassName("asPts");
    for (i = 0; i < asPts.length; i++) {
        if (asPts[i].innerHTML == studentList[_currentIndex].as[_asNum]) {
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
        if (mvPts[i].innerHTML == studentList[_currentIndex].mv[_mvNum]) {
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

function attendanceList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("attList").appendChild(elementNode);
}

function loadAttendees() {
    document.getElementById("attList").innerHTML = "";
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i].attendance === true) {
            attendanceList(studentList[i].fullName);
        };
    };
    pop("mainPop","attListPop");
};

function populateNames() {
    for (i = 0; i < studentList.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                loadStudent(i);
            };
        })(i);
        var textNode = document.createTextNode(studentList[i].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    };  
};

function attendance() {
    if (studentList[_currentIndex].attendance === false) {
        studentList[_currentIndex].attendance = true;
        document.getElementById("attendanceButton").style.borderColor = "green";
        setTimeout(function() {
            document.getElementById("attendanceButton").style.borderColor = "white";
        },500);
    } else {
        studentList[_currentIndex].attendance = false;
        document.getElementById("attendanceButton").style.borderColor = "red";
        setTimeout(function() {
            document.getElementById("attendanceButton").style.borderColor = "white";
        },500);
    }
    localStorage.setItem("studentList",JSON.stringify(studentList));
    backupNewData();
    feedbackSound.play();
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
function loadBackup() {
    if (!localStorage.getItem("studentList")) {
        if (JSON.parse(localStorage.getItem("backup"))) {
            studentList = JSON.parse(localStorage.getItem("backup"));
            populateNames();
        } else {
            pushData();
            populateNames();
        };
    } else {
        studentList = JSON.parse(localStorage.getItem("studentList"));
        populateNames();
    };
}; // only loads localstorage data from backup.js if localstorage data from main.js does not exist
// if no localstorage data is found, all students will be loaded with default values (only suitable for testing purposes) */

function restoreData() {
    studentList = JSON.parse(localStorage.getItem("studentList"));
};

function backupNewData() {
    document.getElementById("backupArray").innerHTML = localStorage.getItem("studentList");
};


//***ONLOAD FUNCTION CALLS***//
loadBackup();

if (JSON.parse(localStorage.getItem("studentList"))) {
    restoreData();
    backupNewData();
};

document.getElementById("search").focus();

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