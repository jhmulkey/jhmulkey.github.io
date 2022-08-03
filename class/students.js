var _sl = []; var _ci; var _ti; var _slOLD = []; var _currentStudent;
var _asNum; var _mvNum;
var _asPts;
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3];
var _leapYear = false; // true if Jan-July falls within a leap year
var _dns = [22,29,43,50,57,64,71,78,85,92,99,106,127,134,141,162,169,176,183,190,197,204,211,218,225,232,239,246,253,267,274,281,288,295];
var _todaysDn
var _elapsedWeeks;
var _isClassDay;
var _weeksOff = 0;
    function setWeeksOff() {
        if (_todaysDn ==  29 || _todaysDn == 253) {
            _weeksOff = 1;
        } else if ((_todaysDn == 106 || _todaysDn == 141) ) {
            _weeksOff = 2;
        } else {
            _weeksOff = 0;
        }
    }
var _bdList = []; var _promoList = [];
var _noteIndex;
var _teacherNotes = [];
var _teacherNoteIndex;
var _log = ""; var _gameLog = ""; 
var _currentPop; var _currentPops; var _currentPops2; var _array;
var _populateNotesID = [];
var _focus;
var _currentFunction; var _currentParameter;
var _eligibleRandom;
var _teams = [];
var _dataInputParameter;
var _att = [];
var _pwd = []; var _backupIndex;
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

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    assignTodaysDn();
}

function resetStudentMenu() {
    for (i = 0; i < 3; i++) {
        if (i == 0) {
            bgColor("studentMenu"+i,"#777");
        } else {
            bgColor("studentMenu"+i,"black");
        }
    }
}

function studentMenuSwitch(x) {
    _array = ["missionsPop"];
    var allPops = document.getElementsByClassName("pop");
    var pops = ["studentStatsPop","missionsPop","calendarPop"];
    for (i = 0; i < 3; i++) {
        if (i == x) {
            bgColor("studentMenu"+i,"#777");
        } else {
            bgColor("studentMenu"+i,"black");
        }
    }
    for (j = 0; j < 3; j++) {
        if (j == x) {
            display(pops[j],"block")
        }
    }
    for (i = 0; i < allPops.length; i++) {
        if (allPops[i].id != pops[x] && allPops[i].id != "studentPop") {
            allPops[i].style.display = "none";
        }
    }
    if (x == 2) { populateCalendar() }
}

function findStudent() {
    document.activeElement.blur();
    innerHTML("nameList","");
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
            if (x[0] == _sl[i].name[0].split(" ")[1].toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 2) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + " " + x[1] == _sl[i].name[0].toLowerCase()) {
                matches.push(i);
            }
        }
    }
    if (x.length == 3) {
        for (i = 0; i < _sl.length; i++) {
            if (x[0] + " " + x[1] + " " + x[2] == _sl[i].name[0].toLowerCase()) {
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
        _ci = matches[0]; loadStudent(_ci); pop(["mainPop"],["studentPop","studentStatsPop"]);
    }
    if (matches.length > 1) {
        populateMatches(matches);
        infoAlert("More than one match found.<br>Please click the correct name below.",["mainPop"],"searchField",true);
    }
}

function populateMatches(indexArray) {
    for (i = 0; i < indexArray.length; i++) {
        var p = document.createElement("p");
        p.classList.add("name");
        (function(i){
            p.onclick = function () {
                let x = indexArray[i]; _ci = x;
                loadStudent(_ci);
                pop(["infoAlertPop"],["studentPop","studentStatsPop"]);
            }
        })(i);
        p.innerHTML = _sl[indexArray[i]].full;
        document.getElementById("nameList").appendChild(p);
    }  
}

function populateCalendar() {
    for (i = 0; i < _dns.length; i++) {
        innerHTML("calendarDate"+i,cdn(_dns[i]));
        if (i < 32) {
            innerHTML("calendarLesson"+i,_asFulls[i]);
            innerHTML("calendarMemory"+i,_mvFulls[i]);
        }
    }
    document.getElementById("calendarRow"+(_elapsedWeeks-1)).style.border = "2px solid lawngreen";
}

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

function isClassDay() {
    if (_dns.indexOf(_todaysDn) > -1) {
        _isClassDay = true; 
        document.getElementById("nameList").style.borderColor = "#3478F6";
    } else { _isClassDay = false; }
}

function setElapsedWeeks() {
    for (let i = 0; i < _dns.length; i++) {
        if (_todaysDn == _dns[i]) {
            _elapsedWeeks = i + 1; break;
        }
        if (_todaysDn > _dns[0] && _todaysDn < _dns[i]) {
            _elapsedWeeks = i; break;
        }
        if (_todaysDn < _dns[0] || _todaysDn > _dns[_dns.length-1]) {
            _elapsedWeeks = 34;
        }
    }
    _ti = _elapsedWeeks - 1;
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
        if (_leapYear === true) {
            dn = (cumulativeLeap[todaysMonth-1]) + todaysDate;
        } else {
            dn = (cumulative[todaysMonth-1]) + todaysDate;
        }
    }
    _todaysDn = dn;
    setWeeksOff(); isClassDay(); setElapsedWeeks(); populateMissions(); 
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
    generateRankTable(); generateAttListTable(); generateStudentAttTable(); generateStudentStatsTables();
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
    if (fontSize) {idFontSize("infoAlertMessage",fontSize)} else {idFontSize("infoAlertMessage",30)}
    if (textAlign) {
        document.getElementById("infoAlertMessage").style.textAlign = textAlign;
    } else {
        document.getElementById("infoAlertMessage").style.textAlign = "center";
    }
}

function actionAlert(message,popsArray,func,bypass,parameter) {
    if (document.getElementById("actionAlertPop").style.display != "block") {
        _currentPops = popsArray; _currentFunction = func; _currentParameter= parameter;
        display("actionAlertPop","block");
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== undefined) {
                display(_currentPops[i],"none");
            }
        }
        innerHTML("actionAlertMessage",message);
    } else if (document.getElementById("actionAlertPop").style.display == "block") {
        display("actionAlertPop","none");
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== undefined) {
                display(_currentPops[i],"block");
            }
        }
        innerHTML("actionAlertMessage","");
        if (!bypass) {
            _currentFunction(_currentParameter);
        }
    } 
}

function refreshStudentPop() {
    assignStatsRanks("pts",0);
    document.getElementById("studentPopInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    innerHTML("studentPopRankName",_rankNames[_sl[_ci].rank[0]]);
    innerHTML("studentPopName",_sl[_ci].name[0]);
    var ptsNeeded;
    if (_sl[_ci].pts == 220) {
        ptsNeeded = 0
    } else {
        ptsNeeded = _rankPts[_sl[_ci].rank[0]+1] - _sl[_ci].pts;
    }
    innerHTML("studentPopPts",_sl[_ci].pts + " | <span style='color: #999'>" + ptsNeeded +"</span>");
    if (_rankNames[_sl[_ci].rank[0]].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    if (_sl[_ci].att === true) {
        color("studentPopName","lawngreen");
    } else {
        color("studentPopName","white");
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
    var properties = ["name","gender","bdMonth","bdDate","email","photo"];
    for (let i = 0; i < properties.length; i++) {
        if (_sl[_ci][properties[i]] == false) {
            color("studentMenu2","red"); break;
        } else {
            color("studentMenu2","white");
        }
    }
}

function refreshMissionsPop() {
    if (_elapsedWeeks > 1) {
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
            if (_sl[_ci].as[i][0] == _asMaxPts[i]) {
                bgColor("as"+i+"Pop","green");
            } else if (_sl[_ci].as[i][0] > 0 && _sl[_ci].as[i][0] < _asMaxPts[i]) {
                bgColor("as"+i+"Pop","darkorange");
            } else {
                bgColor("as"+i+"Pop","black");
            }
        }
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
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

function loadStudent(index) {
    _ci = index; _currentStudent = _sl[_ci].name[0];
    value("searchField","");
    refreshStudentPop(); refreshMissionsPop(); resetMissions(); resetStudentMenu();
    loadLbs();
    document.activeElement.blur();
}

function loadLbs() {
    sortByPts(true); sortByASpts(true); sortByMVpts(true); sortByAtt(true); sortByTP(true); sortSL();
}

function asLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
}

function scanLinks() {
    window.open("docs/as-scans/"+_sl[_ci].name[0].split(" ")[0].toLowerCase()+"-"+_sl[_ci].name[0].split(" ")[1].toLowerCase()+"-as"+_asNum+".pdf","_blank");
}

function mvLinks() {
    window.open("docs/memory/mv"+_mvNum+".pdf","_blank");
}

function pop(closeArray,openArray) {
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
    scrollTo(0,0);
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (let i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        display("mainPop","block");
    }
    value("searchMain","");
    idFocus("searchMain");
    sortSL(); 
}

function asPop(asNum,pts) {
    _asNum = asNum;
    innerHTML("asSheetName",_asNames[_asNum].toUpperCase());
    innerHTML("asDateAssigned",cdn(_dns[asNum]));
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
        innerHTML("asDateTurnedIn",cdn(_sl[_ci].as[_asNum][1]));
    }
    display("missionsPop","none");
    display("asPtsPop","block");
    for (let i =1; i <= 6; i++) {
        if (document.getElementById("as"+i+"Pts").innerHTML == _sl[_ci].as[_asNum][0]) {
            bgColor("as"+i+"Pts","#3478F6");
        } else {
            bgColor("as"+i+"Pts","black");
        }
    }
    for (let i =1; i <= 6; i++) {
        if (i <= pts) {
            display("as"+i+"Pts","block");
        } else {
            display("as"+i+"Pts","none");
        }
    }
    scrollTo(0,0);
}

function mvPop(mvNum,pts) {
    display("missionsPop","none");
    display("mvPtsPop","block");
    _mvNum = mvNum;
    innerHTML("mvVerseName",_mvNames[_mvNum].toUpperCase());
    innerHTML("mvDateAssigned",cdn(_dns[mvNum]));
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
        innerHTML("mvDateRecited",cdn(_sl[_ci].mv[_mvNum][1]));
    }
    innerHTML("mvText",_mvText[mvNum]);
    for (let i =1; i <= 7; i++) {
        if (document.getElementById("mv"+i+"Pts").innerHTML == _sl[_ci].mv[_mvNum][0]) {
            bgColor("mv"+i+"Pts","#3478F6");
        } else {
            bgColor("mv"+i+"Pts","black");
        }
    }
    for (let i =1; i <= 7; i++) {
        if (i <= pts) {
            display("mv"+i+"Pts","block");
        } else {
            display("mv"+i+"Pts","none");
        }
    }
    scrollTo(0,0);
}

function generateRankTable() {
    for (let i = 0; i < 20; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td"); var td2 = document.createElement("td");
        var td3 = document.createElement("td"); var td4 = document.createElement("td");
        tr.setAttribute("id","rankChartRow"+i);
        td1.setAttribute("id","rankChartInsignia"+i);
        td2.setAttribute("id","rankChartRank"+i);
        td3.setAttribute("id","rankChartAbbreviation"+i);
        td4.setAttribute("id","rankChartPts"+i);
        tr.append(td1,td2,td3,td4);
        append("rankChartTable",tr);
    }
}

function generateStudentAttTable() {
    for (let i = 0; i < 34; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td"); var td2 = document.createElement("td");
        var td3 = document.createElement("td"); var td4 = document.createElement("td");
        tr.setAttribute("id","studentAttRow"+i);
        td1.setAttribute("id","studentAttDate"+i);
        td2.setAttribute("id","studentAttAM"+i);
        td3.setAttribute("id","studentAttPM"+i);
        tr.append(td1,td2,td3);
        append("studentAttTable",tr);
    }
}

function generateStudentStatsTables() {
    var tables = ["rankProgressTable","totalProgressTable","asProgressTable","mvProgressTable","attProgressTable","totalParticipationTable"];
    var ids = ["rankProgressBar","totalProgressBar","asProgressBar","mvProgressBar","attProgressBar","totalParticipationBar"];
    for (let i = 0; i < tables.length; i++) {
        var tr = document.createElement("tr");
        for (let j = 1; j < 41; j++) {
            var td = document.createElement("td");
            td.setAttribute("id",ids[i]+j);
            tr.append(td);
            append(tables[i],tr);
        }
    }
}

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank[0] + 1) / 20) * 100).toFixed(1);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0; var earnedASpts = 0;   
    var totalMVpts = 0; var earnedMVpts = 0;
    if (_elapsedWeeks > 1) {
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
            totalASpts += _asMaxPts[i];
            totalMVpts += _mvMaxPts[i];
            earnedASpts += _sl[_ci].as[i][0];
            earnedMVpts += _sl[_ci].mv[i][0];
        }
    }
    var totalPts = totalASpts + totalMVpts;
    var totalEarnedPts = earnedASpts + earnedMVpts;
    var asPercentage; var mvPercentage; var totalPtsPercentage;
    if (_elapsedWeeks > 1) {
        asPercentage = ((earnedASpts / totalASpts) * 100).toFixed(1);
        mvPercentage = ((earnedMVpts / totalMVpts) * 100).toFixed(1);
        totalPtsPercentage = ((totalEarnedPts / totalPts) * 100).toFixed(1);
    } else {
        asPercentage = 0; mvPercentage = 0; totalPtsPercentage = 0;
    }
    var asSquares = Math.round(asPercentage / 2.50);
    var mvSquares = Math.round(mvPercentage / 2.50);
    var totalPtsSquares = Math.round(totalPtsPercentage / 2.50);
    var weeksAttended = 0;
    for (let i = 0; i < _elapsedWeeks; i++) {
        weeksAttended += _sl[_ci].attArr[i][0];
        weeksAttended += _sl[_ci].attArr[i][1];
        if (_sl[_ci].attArr[i][0] == 1 && _sl[_ci].attArr[i][1] == 1) {
            weeksAttended--;
        }
    }
    var attPercentage = ((weeksAttended / _elapsedWeeks) * 100).toFixed(1);
    var attSquares = Math.round(attPercentage / 2.50);
    var totalEarned = weeksAttended + earnedASpts + earnedMVpts;
    var totalPossible = _elapsedWeeks + totalASpts + totalMVpts;
    var totalPercentage = ((totalEarned / totalPossible) * 100).toFixed(1);
    var totalSquares = Math.round(totalPercentage / 2.50);
    var squaresArray = [rankSquares,totalPtsSquares,asSquares,mvSquares,attSquares,totalSquares];
    var variableArray = [rankPercentage,totalPtsPercentage,asPercentage,mvPercentage,attPercentage,totalPercentage];
    var idArray1 = ["rankProgressTable","totalProgressTable","asProgressTable","mvProgressTable","attProgressTable","totalParticipationTable"];
    var idArray2 = ["rankProgressBar","totalProgressBar","asProgressBar","mvProgressBar","attProgressBar","totalParticipationBar"];
    for (let i = 0; i < squaresArray.length; i++) {
        for (let j =1; j <= 40; j++) {
            if (j <= squaresArray[i]) {
                if (i == 0) {
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
            if (i == 0) {
                bgColor(idArray1[i],"#3478F6");
            } else {
                bgColor(idArray1[i],"lawngreen");
            }
        } else {
            bgColor(idArray1[i],"black");
        }
    }
    innerHTML("rankProgressTableP","<span style='font-size:20px'>Promotions <span style='color:#bbb;font-size:16px'>" + (_sl[_ci].rank[0] + 1) + "/20" + " (" + rankPercentage + "%)</span>");

    innerHTML("totalProgressTableP","<span style='font-size:20px'>Total Points <span style='color:#bbb;font-size:16px'>" + totalEarnedPts + "/" + totalPts + " (" + totalPtsPercentage + "%) | Class Rank: " + _sl[_ci].statsRanks[0]) + "/span";

    innerHTML("asProgressTableP","<span style='font-size:20px'>Activities <span style='color:#bbb;font-size:16px'>" + earnedASpts + "/" + totalASpts + " (" + asPercentage + "%) | Class Rank: " + _sl[_ci].statsRanks[1]) + "/span";

    innerHTML("mvProgressTableP","<span style='font-size:20px'>Memory <span style='color:#bbb;font-size:16px'>" + earnedMVpts + "/" + totalMVpts + " (" + mvPercentage + "%) | Class Rank: " + _sl[_ci].statsRanks[2]) + "/span";

    innerHTML("attProgressTableP","<span style='font-size:20px'>Attendance <span style='color:#bbb;font-size:16px'>" + weeksAttended + "/" + _elapsedWeeks + " (" + attPercentage + "%) | Class Rank: " + _sl[_ci].statsRanks[3]) + "/span";

    innerHTML("totalParticipationTableP","<span style='font-size:20px'>Participation <span style='color:#bbb;font-size:16px'>" + totalEarned + "/" + totalPossible + " (" + totalPercentage + "%) | Class Rank: " + _sl[_ci].statsRanks[4]) + "/span";
}

function populateMissions() {
    innerHTML("asPop","");
    innerHTML("mvPop","");
    if (_elapsedWeeks > 1) {
        for (let i =_elapsedWeeks-2; i >= 0; i--) {
            if (i > 31) { continue }
            var div1 = document.createElement("div");
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
        for (let j =_elapsedWeeks-2; j >= 0; j--) {
            if (j > 31) { continue }
            var div2 = document.createElement("div");
            div2.setAttribute("id","mv"+j+"Pop");
            div2.classList.add("mvButton");
            (function(j){
                div2.onclick = function () {
                    mvPop(j,_mvMaxPts[j]);
                }
            })(j);
            div2.innerHTML = _mvFulls[j] + "<br>" + _mvText[j].split(" ").slice(0,3).join(" ");
            append("mvPop",div2);
        }
    }
}

function loadRankTable() {
    pop(["studentStatsPop"],["rankChartPop"]);
    for (let i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
        document.getElementById("rankChartInsignia"+i).style.cursor = "pointer";
        innerHTML("rankChartRank"+i,_rankNames[i]);
        innerHTML("rankChartAbbreviation"+i,_rankNamesShort[i]);
        innerHTML("rankChartPts"+i,_rankPts[i]);
        (function(i){
            document.getElementById("rankChartInsignia"+i).onclick = function () {
                pop(["rankChartPop"],["openInsigniaPop"]);
                document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";            }
        })(i);
        if (i == _sl[_ci].rank[0]) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        }
    }
    document.getElementById("rankChartContainer").scrollTop = 0;
}

function openInsignia() {
    document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    pop(["studentStatsPop"],["openInsigniaPop"]);
}

function toggleIncomplete() {
    if (_elapsedWeeks > 1) {
        var noneHidden = true;
        for (let i = 0; i < (_elapsedWeeks-2); i++) {
            if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
                noneHidden = false; break;
            }
        }
        if (noneHidden) {
            for (let i = 0; i < (_elapsedWeeks-2); i++) {
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
            for (let i = 0; i < (_elapsedWeeks-2); i++) {
                display("as"+i+"Pop","block");
                display("mv"+i+"Pop","block");
            }
        }
    }
}

function resetMissions() {
    if (_elapsedWeeks > 1) {
        for (let i = 0; i < (_elapsedWeeks-2); i++) {
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
    for (let i = 0; i < _elapsedWeeks; i++) {
        innerHTML("studentAttDate"+i,cdn(_dns[i]));
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
        if (i < _elapsedWeeks) {
            display("studentAttRow"+i,"table-row");
        } else {
            display("studentAttRow"+i,"none");
        }
    }
    pop(["studentStatsPop"],["studentAttStatsPop"]);
}

function cdn(dn,type) {
    if (dn == 0) { return "-" }
    var months = [8,9,10,11,12,1,2,3,4,5,6,7];
    var cumulative = [0,31,61,92,122,153,184,212,243,273,304,334];
    var cumulativeLeap = [0,31,61,92,122,153,184,213,244,274,305,335];
    var month; var date;
    if (_leapYear === false) {
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
        if (_leapYear === true) {
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

function assignStatsRanks(propertyName,index) {
    var pts = [];
    for (let i = 0; i < _sl.length; i++) {
        pts.push(_sl[i][propertyName]);
    } // creates an array of the points of each student in alphabetical order
    var ptsSorted = pts.slice().sort(function(a,b){return b - a}); // sorts the resuting array in numerical order
    var ptsRanked = pts.map(function(v){return ptsSorted.indexOf(v)+1}); // maps the index(+1) of each unique point value in the resulting array back to original array that was in alphabetical order
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].statsRanks[index] = ptsRanked[i];
    } // assigns the values of the resulting array as the rank of each student
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
    /* _sl is then sorted by rank.  An array of "corrected" ranks is created, and the first rank is pushed to it.  Now for every consecutive rank, if it's the same as the previous rank, a "repeat" is tallied, and the last value added to the "corrected" array is pushed to the array as a repeated rank.  If a consecutive rank is not the same as the previous rank, the rank is added to the "corrected" array after subtracting the current repeat tally from it.  This ensures no rank numbers are skipped, so instead of (for example) ranks [1,1,3,4,5,5,5,8,9,10], you get [1,1,2,3,4,4,4,5,6,7].  Finally, the current ranks are reassigned as the corrected ranks and _sl is sorted back into alphabetical order. */
}

function sortSLbyProperty(propertyName) {
    _sl.sort(function(a,b) {
            var textA = a[propertyName];
            var textB = b[propertyName];
            return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
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

function sortByPts(lb) {
    if (lb) {
        innerHTML("totalPtsLbList","");
    } else {
        innerHTML("nameListCustom","");
        display("nameListCustom","block");
        display("genderListContainer","none");
    }
    var totalASpts = 0; var totalMVpts = 0;
    if (_elapsedWeeks > 1) {
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
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
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

function sortByGamePts() {
    assignGameRanks(); innerHTML("nameListCustom","");
    display("nameListCustom","block"); display("genderListContainer","none");
    _sl.sort(function(b,a){return a.gamePts[0] - b.gamePts[0]});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].gamePts[0] == 0) {continue}
        if (_sl[i].gamePts[1] > 3) {break}
        var lastElementNode;
        var p = document.createElement("p");
        p.classList.add("name3");
        if (_sl[i].gamePts[0] != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        p.innerHTML = _sl[i].gamePts[1] + ". " + _sl[i].name[0] + " (" + _sl[i].gamePts[0] + ")";
        append("nameListCustom",p);
        lastElementNode = _sl[i].gamePts[0];
    }
    pop(["teamsListPop"],["customSortListPop"],"Game Points");
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
    if (_elapsedWeeks > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalASpts += _asMaxPts[j];
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        var earnedASpts = 0; var asPercentage;
        if (_elapsedWeeks > 1) {
            for (let j = 0; j < _ti; j++) {
                if (j > 31) {break}
                earnedASpts += _sl[i].as[j][0];
            }
        }
        if (_elapsedWeeks > 1) {
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
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
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
    if (_elapsedWeeks > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalMVpts += _mvMaxPts[j];
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        var earnedMVpts = 0; var mvPercentage;
        if (_elapsedWeeks > 1) {
            for (let j = 0; j < _ti; j++) {
                if (j > 31) {break}
                earnedMVpts += _sl[i].mv[j][0];
            }
        }
        if (_elapsedWeeks > 1) {
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
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
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
        for (let j = 0; j < _elapsedWeeks; j++) {
            amTotal.push(_sl[i].attArr[j][0]);
            pmTotal.push(_sl[i].attArr[j][1]);
        }
        var total = sumArrays([amTotal,pmTotal]);
        for (let j = 0; j < _elapsedWeeks; j++) {
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
        var attPercentage = ((_sl[i].totalWksAtt / _elapsedWeeks) * 100).toFixed(1);
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        p.classList.add("name3");
        if (_sl[i].totalWksAtt != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].statsRanks[3] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].totalWksAtt + "/" + _elapsedWeeks + " (" + attPercentage + "%)";
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
    if (_elapsedWeeks > 1) {
        for (let j = 0; j < _ti; j++) {
            if (j > 31) {break}
            totalASpts += _asMaxPts[j];
            totalMVpts += _mvMaxPts[j];
        }
    }
    var totalTPpts = totalASpts + totalMVpts + _elapsedWeeks;
    for (let i = 0; i < _sl.length; i++) {
        var amTotal = []; var pmTotal = []
        for (let j = 0; j < _elapsedWeeks; j++) {
            amTotal.push(_sl[i].attArr[j][0]);
            pmTotal.push(_sl[i].attArr[j][1]);
        }
        var total = sumArrays([amTotal,pmTotal]);
        for (let j = 0; j < _elapsedWeeks; j++) {
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
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
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

loadBackup();

idFocus("searchField");