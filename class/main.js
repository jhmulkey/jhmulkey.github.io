var _sl = []; var _ci; var _ti; var _slOLD = [];
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

class Student {
    constructor(name,month,date,email,gender,note,pron) {
        this.name = [name,pron];
        this.gender = gender;
        this.dateAdded = _todaysDn;
        this.bd = [assignDn(month,date),false,false] // [birthdayNumber,hasBd,bdDone]
        this.email = email;
        this.photo = false;
        this.notes = note;
        this.pts = [0,0]; // [pts,classRank]
        this.gamePts = [0,0]; // [gamePts,gameRank]
        this.rank = [0,0]; // [rankNumber,rankFactor]
        this.att;
        this.attArr = [];
        this.promo = [false,0]; // [promoted,promoNum]
        this.randDraw = [false,false];
        this.statsRanks = [];
        this.as = { // [ptsEarned,dateCompleted]
            0: [0,0], //class-intro
            1: [0,0], //john-intro
            2: [0,0], //john-1
            3: [0,0], //john-2
            4: [0,0], //john-3
            5: [0,0], //john-4
            6: [0,0], //john-5
            7: [0,0], //john-6
            8: [0,0], //john-7
            9: [0,0], //john-8
            10: [0,0], //john-9
            11: [0,0], //john-1-9-review
            12: [0,0], //john-10
            13: [0,0], //john-11
            14: [0,0], //john-12
            15: [0,0], //john-13
            16: [0,0], //john-14
            17: [0,0], //john-15
            18: [0,0], //john-16
            19: [0,0], //john-17
            20: [0,0], //john-18
            21: [0,0], //john-19
            22: [0,0], //john-20
            23: [0,0], //john-21
            24: [0,0], //john-10-21-review
            25: [0,0], //armor-intro
            26: [0,0], //belt
            27: [0,0], //breastplate
            28: [0,0], //shoes
            29: [0,0], //shield
            30: [0,0], //helmet
            31: [0,0], //sword
        }
        this.mv = {
            0: [0,0], //ps-139-17-18
            1: [0,0], //jn-20-30-31
            2: [0,0], //jn-1-1-2
            3: [0,0], //jn-1-3
            4: [0,0], //jn-1-4-5
            5: [0,0], //jn-1-6-8
            6: [0,0], //jn-1-9-11
            7: [0,0], //jn-1-12-13
            8: [0,0], //jn-1-14
            9: [0,0], //jn-1-15
            10: [0,0], //jn-1-16-17
            11: [0,0], //jn-1-18
            12: [0,0], //phil-2-5-6
            13: [0,0], //phil-2-7
            14: [0,0], //phil-2-8
            15: [0,0], //phil-2-9
            16: [0,0], //phil-2-10-11
            17: [0,0], //rom-8-31
            18: [0,0], //rom-8-32
            19: [0,0], //rom-8-33
            20: [0,0], //rom-8-34
            21: [0,0], //rom-8-35
            22: [0,0], //rom-8-36
            23: [0,0], //rom-8-37
            24: [0,0], //rom-8-38-39
            25: [0,0], //eph-6-10-11
            26: [0,0], //eph-6-12
            27: [0,0], //eph-6-13
            28: [0,0], //eph-6-14-15
            29: [0,0], //eph-6-16
            30: [0,0], //eph-6-17
            31: [0,0], //eph-6-18
        }
    }
}

class Teams {
    constructor () {
        this.team1 = [];
        this.team2 = [];
        this.team1Reset = [];
        this.team2Reset = [];
        this.team1Score = 0;
        this.team2Score = 0;
        this.currentTeam = 1;
        this.currentPlayer;
        this.undoGamePts;
        this.undoLimit = true;
        this.undoTeam;
    }
}

function whatToLoad() {
    if (!localStorage.getItem("sl") && !localStorage.getItem("slBackup")) {
        infoAlert("No data",["mainPop"]);
    } else if (!localStorage.getItem("sl") && localStorage.getItem("slBackup")) {
        loadBackup();
    } else if (localStorage.getItem("sl") && localStorage.getItem("slBackup")) {
        pop(['mainPop'],['wtlPop'])
    }
}

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    _slOLD = JSON.parse(localStorage.getItem("slBackupOLD"));
    _att = JSON.parse(localStorage.getItem("attBackup"));
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotesBackup"));
    _promoList = []; _bdList = [];
    activityLog("backup loaded<br>" + dateAndTime("log"));
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].randDraw[0] = false;
    }
    generateAllTables(); assignTodaysDn(); clearAttendees(); populateMissions(); populateTeacherNotes(); storeAndBackup();
    pop(["wtlPop"],["mainPop"]);
}

function loadLS() {
    _sl = JSON.parse(localStorage.getItem("sl"));
    _att = JSON.parse(localStorage.getItem("att"));
    _promoList = JSON.parse(localStorage.getItem("promoList"));
    _log = localStorage.getItem("log");
    _gameLog = localStorage.getItem("gameLog");
    document.getElementById("log").innerHTML = _log;
    document.getElementById("gameLog").innerHTML = _gameLog;
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotes"));
    _teams = JSON.parse(localStorage.getItem("teams"));
    generateAllTables(); populateTeacherNotes(); assignTodaysDn(); attCount();
    activityLog("localstorage loaded" + "<br>" + dateAndTime("log"));
    backupNewData();
    pop(["wtlPop"],["mainPop"]); 
}

function pwdEntry() {
    var pwd = parseInt(document.getElementById("pwd").value);
    if (pwd == 3784) {
        loadBackup(_backupIndex);
        document.getElementById("pwdPop").style.display = "none";
        document.getElementById("pwd").value = "";
    } else {
        infoAlert("incorrect password",["pwdPop"],"pwd");
        document.getElementById("pwd").value = ""; pwd = 0;
    }
}

function pwdAutoEnter() {
    if (document.getElementById("pwd").value.length == 4) {pwdEntry()}
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
    setWeeksOff(); isClassDay(); setElapsedWeeks(); findAllBds(); populateMissions(); 
}

function dateAndTime(x) {
    var today = new Date();
    if (x == "month") { return today.getMonth() + 1 }
    if (x == "date") { return today.getDate() }
    if (x == "hour") { return today.getHours() }
    if (x == "full") { return (today.getMonth() + 1) + "/" + today.getDate() }
    if (x == "log") { return (today.getMonth() + 1)+"/"+today.getDate()+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds() }
}

function allAlerts() {
    var alert = false;
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].promo[0] === true) {
            alert = true; document.getElementById("promoButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("promoButton").style.backgroundColor = "black";
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].bd[1] === true && _sl[i].bd[2] === false) {
            alert = true; document.getElementById("bdButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("bdButton").style.backgroundColor = "black";
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].photo === false) {
            alert = true; document.getElementById("photosNeededButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("photosNeededButton").style.backgroundColor = "black";
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].email == false) {
            alert = true; document.getElementById("emailsNeededButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("emailsNeededButton").style.backgroundColor = "black";
        }
    }
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].bd[0] == 0) {
            alert = true; document.getElementById("bdNeededButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("bdNeededButton").style.backgroundColor = "black";
        }
    }
    if (alert === true) { 
        document.getElementById("alertButton").style.backgroundColor = "red";
    } else {
        document.getElementById("alertButton").style.backgroundColor = "black";
    }
}

function generateAllTables() {
    generateRankTable(); generateAttListTable(); generateStudentAttTable(); generateStudentStatsTables();
}

function populateCustomList(log1,log2,type) {
    if (log1) {
        var p1 = document.createElement("p");
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
                    document.getElementById("editBdMonth").value = "";
                    document.getElementById("editBdDate").value = ""; 
                }
            })(i);
        }
        document.getElementById("customList").append(p1);
    }
    if (log2) {
        var p2 = document.createElement("p");
        p2.classList.add("name");
        p2.innerHTML = log2;
        document.getElementById("customListAbsent").append(p2);
    }
}

function loadPromos() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Promotions";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].promo[0] === true && _sl[i].att === true) {
            if (_sl[i].promo[1] < 2) {
                populateCustomList(_rankNamesShort[_sl[i].rank[0]] + " " + _sl[i].name[0],false,"promo");
            } else if (_sl[i].promo[1] > 1) {
                populateCustomList(_rankNamesShort[_sl[i].rank[0]] + " " + "(" + _sl[i].promo[1] + ") " + _sl[i].name[0],false,"promo");
            }
        } else if (_sl[i].promo[0] === true && _sl[i].att === false) {
            if (_sl[i].promo[1] < 2) {
                populateCustomList(false,_rankNamesShort[_sl[i].rank[0]] + " " + _sl[i].name[0],"");
            } else if (_sl[i].promo[1] > 1) {
                populateCustomList(false,_rankNamesShort[_sl[i].rank[0]] + " " + "(" + _sl[i].promo[1] + ") " + _sl[i].name[0]);
            }
        }
    }
}

function loadBds() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Birthdays";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].bd[1] === true && _sl[i].bd[2] === false && _sl[i].att === true) {
            populateCustomList(_sl[i].name[0] + " (" + cdn(_sl[i].bd[0]) + ")",false,"bdDone");
        } else if (_sl[i].bd[1] === true && _sl[i].bd[2] === false && _sl[i].att === false) {
            populateCustomList(false,_sl[i].name[0]+" (" + cdn(_sl[i].bd[0]) + ")");
        }
    }
}

function loadNeededPhotos() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Photos";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].photo === false && _sl[i].att === true) {
            populateCustomList(_sl[i].name[0],false,"photo");
        } else if (_sl[i].photo === false && _sl[i].att === false) {
            populateCustomList(false,_sl[i].name[0]);
        }
    }
}

function loadNeededEmails() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Emails";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].email == "" && _sl[i].att === true) {
            populateCustomList(_sl[i].name[0],false,"email");
        } else if (_sl[i].email == "" && _sl[i].att === false) {
            populateCustomList(false,_sl[i].name[0]);
        }
    }
}

function loadNeededBds() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Birthdays";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].bd[0] == 0 && _sl[i].att === true) {
            populateCustomList(_sl[i].name[0],false,"bdNeeded");
        } else if (_sl[i].bd[0] == 0 && _sl[i].att === false) {
            populateCustomList(false,_sl[i].name[0]);
        }
    }
}

function completePromo(x) {
    _sl[x].promo[0] = false;
    _sl[x].promo[1] = 0;
    activityLog(_sl[x].name[0] + " promotion complete<br>" + dateAndTime("log"));
    loadPromos(); allAlerts(); storeAndBackup();
}

function completeBd(x) {
    _sl[x].bd[2] = true; 
    activityLog(_sl[x].name[0] + " birthday complete<br>" + dateAndTime("log"));
    loadBds(); allAlerts(); storeAndBackup();
}

function completePhoto(x) {
    _sl[x].photo = true; loadNeededPhotos(); allAlerts(); storeAndBackup();
    activityLog(_sl[x].name[0] + " photo complete<br>" + dateAndTime("log"));
}

function teams() {
    var attCount = 0;
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true) {
            attCount++
        }
    }
    if (_teams != "") {
        populateTeams();
        pop(["mainMenuPop"],["teamsListPop"]);
    } else if (attCount < 2) {
        infoAlert("At least two students must be in attendance to create teams",["mainMenuPop"]);
    } else {
        createTeams();
        populateTeams();
        pop(["mainMenuPop"],["teamsListPop"]);
    }
}

function createTeams() {
    _teams.pop();
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].gamePts[0] = 0;
        _sl[i].gamePts[1] = 0;
    }
    var teamObject = new Teams; _teams.push(teamObject);
    document.getElementById("team1Score").innerHTMl = 0
    document.getElementById("team2Score").innerHTMl = 0
    var attendees = [];
    for (let i = 0; i <_sl.length; i++) {
        if (_sl[i].att === true) {
            attendees.push(_sl[i].name[0])
        }
    }
    shuffleArray(attendees);
    var remainder = 0
    if (attendees.length % 2 == 1) { remainder = 1 }
    for (let i = 0; i < attendees.length; i++) {
        if (i < ((attendees.length - remainder) / 2)) {
            _teams[0].team1.push(attendees[i]);
            _teams[0].team1Reset.push(attendees[i]);
        } else {
            _teams[0].team2.push(attendees[i]);
            _teams[0].team2Reset.push(attendees[i]);           
        }
    }
    _teams[0].currentPlayer = _teams[0].team1[0];
    for (let i =1; i < 11; i++) {
        document.getElementById("gamePoint"+i).style.backgroundColor = "black";
    }
    document.getElementById("gameLog").innerHTML = "";
    populateTeams();
    storeNewData();
}

function populateTeams() {
    document.getElementById("team1List").innerHTML = "";
    document.getElementById("team2List").innerHTML = "";
    for (let i = 0; i < _teams[0].team1Reset.length; i++) {
        var p = document.createElement("p");
        p.classList.add("name2");
        p.innerHTML = _teams[0].team1Reset[i];
        document.getElementById("team1List").append(p);
    }
    for (let i = 0; i < _teams[0].team2Reset.length; i++) {
        var p = document.createElement("p");
        p.classList.add("name2");
        p.innerHTML = _teams[0].team2Reset[i];
        document.getElementById("team2List").append(p);
    }
}

function loadGame() {
    if (_teams[0].currentTeam == 1) {
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
    } else {
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
    }
    document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
    document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
    if (_teams[0].undoTeam != _teams[0].currentTeam) {
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].currentPlayer + "</span>";
    } else {
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].undoCurrentPlayer + "</span>";
    }
    pop(["teamsListPop"],["playGamePop"]);
}

function gameScorePts(x) {
    _teams[0].undoGamePts = x; _teams[0].undoLimit = false; var log;
    if (_teams[0].currentTeam == 1) {
        log = _teams[0].team1[0] + " +" + x + " points team 1" + "<br>" +  "(" + _teams[0].team1Score + "-->" + (_teams[0].team1Score + x) + ")";
        _teams[0].team1Score += x;
        document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
        _teams[0].currentTeam ++;
        _teams[0].undoCurrentPlayer = _teams[0].team1[0];
        _teams[0].undoTeam = 1;
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].name[0] == _teams[0].undoCurrentPlayer) {
                _sl[i].gamePts[0] += x; break;
            }
        }
        _teams[0].team1.shift();
        _teams[0].currentPlayer = _teams[0].team2[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        if (_teams[0].team1.length == 0) {
            for (let i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            }
        }
        gameActivityLog(log);
        storeNewData();
    } else {
        log = _teams[0].team2[0] + " +" + x + " points team 2" + "<br>" +  "(" + _teams[0].team2Score + "-->" + (_teams[0].team2Score + x) + ")";
        _teams[0].team2Score += x;
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].currentTeam --;
        _teams[0].undoCurrentPlayer = _teams[0].team2[0];
        _teams[0].undoTeam = 2;
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].name[0] == _teams[0].undoCurrentPlayer) {
                _sl[i].gamePts[0] += x; break;
            }
        }
        _teams[0].team2.shift();
        _teams[0].currentPlayer = _teams[0].team1[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
        if (_teams[0].team2.length == 0) {
            for (let i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            }
        }
        gameActivityLog(log);
        storeNewData();
    }
    for (let i =1; i < 11; i++) {
        if (i == x) {
            document.getElementById("gamePoint"+i).style.backgroundColor = "midnightblue";
        } else {
            document.getElementById("gamePoint"+i).style.backgroundColor = "black";
        }
    }
}

function undoGameScorePts() {
    var log;
    if (_teams[0].undoLimit === true) {
        infoAlert("Cannot undo more than one score in a row",["playGamePop"]); return;
    } else {
        _teams[0].undoLimit = true;
    }
    if (_teams[0].currentTeam == 1) {
        log = "UNDO " + _teams[0].undoCurrentPlayer + " -" + _teams[0].undoGamePts + " points team 2 " + "<br>" + "(" + _teams[0].team2Score + "-->" + (_teams[0].team2Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 2;
        _teams[0].team2Score -= _teams[0].undoGamePts;
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].name[0] == _teams[0].undoCurrentPlayer) {
                _sl[i].gamePts[0] -= _teams[0].undoGamePts; break;
            }
        }
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].team2.unshift(_teams[0].undoCurrentPlayer);
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        gameActivityLog(log);
    } else if (_teams[0].currentTeam == 2) {
        log = "UNDO " + _teams[0].undoCurrentPlayer + " -" + _teams[0].undoGamePts + " points team 1 " + "<br>" + "(" + _teams[0].team1Score + "-->" + (_teams[0].team1Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 1;
        _teams[0].team1Score -= _teams[0].undoGamePts;
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].name[0] == _teams[0].undoCurrentPlayer) {
                _sl[i].gamePts[0] -= _teams[0].undoGamePts; break;
            }
        }
        document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
        _teams[0].team1.unshift(_teams[0].undoCurrentPlayer);
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
        gameActivityLog(log);
    }
    storeNewData();
}

function adjustGameScore(parameter,data) {
    var original
    if (parameter == 1) { 
        original = _teams[0].team1Score;
        _teams[0].team1Score = data;
    } else { 
        original = _teams[0].team2Score
        _teams[0].team2Score = data;
    }
    document.getElementById("team"+parameter+"Score").innerHTML = data;
    var log = "Team " + parameter.toString() + " points set " + "<br>" + original + "-->" + data;
    gameActivityLog(log);
    storeAndBackup();
}

function gameActivityLog(log,color,background) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = log;
    paragraph.classList.add("logEntry");
    if (color) {
        paragraph.style.color = color;
    }
    if (background) {
        paragraph.style.background = background;
    }
    document.getElementById("gameLog").append(paragraph);
    _gameLog = document.getElementById("gameLog").innerHTML;
    storeNewData();
}

function skipPlayer() {
    var log;
    if (_teams[0].currentTeam == 1) {
        log = "SKIPPED " + _teams[0].team1[0];
        _teams[0].team1.shift();
        if (_teams[0].team1.length == 0) {
            for (let i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            }
        }
        _teams[0].currentPlayer = _teams[0].team1[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
    } else {
        log = "SKIPPED " + _teams[0].team2[0];
        _teams[0].team2.shift();
        if (_teams[0].team2.length == 0) {
            for (let i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            }
        }
        _teams[0].currentPlayer = _teams[0].team2[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
    }
    gameActivityLog(log);
    storeNewData();
}

function deleteCurrentPlayer() {
    var log;
    if (_teams[0].currentTeam == 1) {
        if (_teams[0].team1Reset.length == 1) { 
            infoAlert("There must be at least one player on a team",["playGamePop"]); return;
        }
        log = "DELETED " + _teams[0].team1[0] + " from Team 1";
        _teams[0].team1.shift();
        _teams[0].team1Reset.splice(_teams[0].team1Reset.length - _teams[0].team1.length - 1,1);
        if (_teams[0].team1.length == 0) {
            for (let i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            }
        }
        _teams[0].currentPlayer = _teams[0].team1[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
    } else {
        if (_teams[0].team2Reset.length == 1) { 
            infoAlert("There must be at least one player on a team",["playGamePop"]); return;
        }
        log = "DELETED " + _teams[0].team2[0] + " from Team 2";
        _teams[0].team2.shift();
        _teams[0].team2Reset.splice(_teams[0].team2Reset.length - _teams[0].team2.length - 1,1);
        if (_teams[0].team2.length == 0) {
            for (let i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            }
        }
        _teams[0].currentPlayer = _teams[0].team2[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
    }
    gameActivityLog(log);
    populateTeams();
    storeNewData();
}

function addPlayer(x,i) {
    var log;
    if (x == 1) {
        _teams[0].team1.push(_sl[i].name[0]);
        _teams[0].team1Reset.push(_sl[i].name[0]);
        log = "ADDED " + _sl[i] + " to Team 1";
    } else {
        _teams[0].team2.push(_sl[i].name[0]);
        _teams[0].team2Reset.push(_sl[i].name[0]);
        log = "ADDED " + _sl[i] + " to Team 2";
    }
    gameActivityLog(log);
    populateTeams();
    storeNewData();
}

function assignStatsRanks(propertyName) {
    var pts = [];
    for (let i = 0; i < _sl.length; i++) {
        pts.push(_sl[i][propertyName][0]);
    } // creates an array of the points of each student in alphabetical order
    var ptsSorted = pts.slice().sort(function(a,b){return b - a}); // sorts the resuting array in numerical order
    var ptsRanked = pts.map(function(v){return ptsSorted.indexOf(v)+1}); // maps the index(+1) of each unique point value in the resulting array back to original array that was in alphabetical order
    for (let i = 0; i < _sl.length; i++) {
        _sl[i][propertyName][1] = ptsRanked[i];
    } // assigns the values of the resulting array as the class rank of each student
    sortSLbyProperty(propertyName,1); var repeats = 0;
    var corrected = []; corrected.push(_sl[0][propertyName][1]);
    for (let i = 1; i < _sl.length; i++) {
        if (_sl[i][propertyName][1] == _sl[i-1][propertyName][1]) {
            repeats++;
            corrected.push(corrected[i-1]);
        } else {
            corrected.push(_sl[i][propertyName][1] - repeats);
        }
    }
    for (let i = 1; i < _sl.length; i++) {
        _sl[i][propertyName][1] = corrected[i];
    }
    sortSL();
    /* _sl is then sorted by class rank.  An array of "corrected" class ranks is created, and the first class rank is pushed to it.  Now for every consecutive class rank, if it's the same as the previous class rank, a "repeat" is tallied, and the last value added to the "corrected" array is pushed to the array as a repeated class rank.  If a consecutive class rank is not the same as the previous class rank, the class rank is added to the "corrected" array after subtracting the current repeat tally from it.  This ensures no class rank numbers are skipped, so instead of (for example) class ranks [1,1,3,4,5,5,5,8,9,10], you get [1,1,2,3,4,4,4,5,6,7].  Finally, the current class ranks are reassigned as the corrected class ranks and _sl is sorted back into alphabetical order. */
}

function assignAttRanks() {
    var wksAttended = [];
    for (let i = 0; i < _sl.length; i++) {
        wksAttended.push(_sl[i].totalWksAtt);
    }
    var wksAttendedSorted = wksAttended.slice().sort(function(a,b){return b - a});
    var wksAttendedRanked = wksAttended.map(function(v){return wksAttendedSorted.indexOf(v)+1});
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].attRank = wksAttendedRanked[i];
    }
    sortSLbyProperty(); var repeats = 0;
    var corrected = []; corrected.push(_sl[0].attRank);
    for (let i = 1; i < _sl.length; i++) {
        if (_sl[i].attRank == _sl[i-1].attRank) {
            repeats++;
            corrected.push(corrected[i-1]);
        } else {
            corrected.push(_sl[i].attRank - repeats);
        }
    }
    for (let i = 1; i < _sl.length; i++) {
        _sl[i].attRank = corrected[i];
    }
    sortSL();
}

function assignTPranks() {
    var tpPts = [];
    for (let i = 0; i < _sl.length; i++) {
        tpPts.push(_sl[i].tpPts);
    }
    var tpPtsSorted = tpPts.slice().sort(function(a,b){return b - a});
    var tpPtsRanked = tpPts.map(function(v){return tpPtsSorted.indexOf(v)+1});
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].tpRank = tpPtsRanked[i];
    }
    sortSLbyProperty(); var repeats = 0;
    var corrected = []; corrected.push(_sl[0].tpRank);
    for (let i = 1; i < _sl.length; i++) {
        if (_sl[i].tpRank == _sl[i-1].tpRank) {
            repeats++;
            corrected.push(corrected[i-1]);
        } else {
            corrected.push(_sl[i].tpRank - repeats);
        }
    }
    for (let i = 1; i < _sl.length; i++) {
        _sl[i].tpRank = corrected[i];
    }
    sortSL();
}

function assignStatRanks(propertyName1,index1,rankName,index2) {
    var array = [];
    for (let i = 0; i < _sl.length; i++) {
        if (index1) { 
            array.push(_sl[i][propertyName1][index1]);
        } else {
            array.push(_sl[i][propertyName1]);
        }
    }
    var arraySorted = array.slice().sort(function(a,b){return b - a});
    var arrayRanked = array.map(function(v){return arraySorted.indexOf(v)+1});
    for (let i = 0; i < _sl.length; i++) {
        _sl[i][rankName] = arrayRanked[i];
    }
    sortSLbyProperty(rankName,index2); var repeats = 0;
    var corrected = []; corrected.push(_sl[0][rankName]);
    for (let i = 1; i < _sl.length; i++) {
        if (_sl[i][rankName] == _sl[i-1][rankName]) {
            repeats++;
            corrected.push(corrected[i-1]);
        } else {
            corrected.push(_sl[i][rankName] - repeats);
        }
    }
    for (let i = 1; i < _sl.length; i++) {
        _sl[i][rankName] = corrected[i];
    }
    sortSL();
}

function setRankFactor() {
    if (_sl[_ci].rank[0] >= 9 && _sl[_ci].rank[0] < 15) {
        _sl[_ci].rank[1] = 1;
    } else if (_sl[_ci].rank[0] >= 15 && _sl[_ci].rank[0] < 19) {
        _sl[_ci].rank[1] = 2;
    } else if (_sl[_ci].rank[0] >= 19) {
        _sl[_ci].rank[1] = 3;
    } else {
        _sl[_ci].rank[1] = 0;
    }
}

function attCount() {
    var attCount = 0;
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true) {
            attCount++;
        }
    }
    document.getElementById("attCountButton").innerHTML = attCount;
    document.getElementById("attCount").innerHTML = attCount;
}

function ampmAttendance() {
    var attCount = 0;
    for (let i = 0; i < _sl.length; i++) {
        if (dateAndTime("hour") < 16 && _sl[i].att === true) {
            _sl[i].attArr[_ti][0] == 1; attCount++;
        } else if (dateAndTime("hour") >= 16 && _sl[i].att === true) {
            _sl[i].attArr[_ti][1] == 1; attCount++;
        }
    }
    if (dateAndTime("hour") < 16) {
        _att[_ti][0] = attCount;
    } else {
        _att[_ti][1] = attCount;
    }
    storeAndBackup();
}

function loadAttendees() {
    attCount(); var boys = []; var girls = [];
    var ids = ["boysListAtt","girlsListAtt","boysListAttP","girlsListAttP"]
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M" && _sl[i].att === true) {
            boys.push(_sl[i].name[0]);
        } else if (_sl[i].gender == "F" && _sl[i].att === true) {
            girls.push(_sl[i].name[0]);
        }
    }
    for (let i = 0; i < boys.length; i++) {
        var p1 = document.createElement("p");
        p1.classList.add("name2");
        p1.innerHTML = boys[i];
        if (_promoList.indexOf(boys[i]) !== -1) {
            p1.style.color = "yellow";
        }
        if (_bdList.indexOf(boys[i]) !== -1) {
            p1.style.border = "1px solid fuchsia";
        }
        document.getElementById("boysListAtt").append(p1);
    }  
    for (let i = 0; i < girls.length; i++) {
        var p2 = document.createElement("p");
        p2.classList.add("name2");
        p2.innerHTML = girls[i];
        if (_promoList.indexOf(girls[i]) !== -1) {
            p2.style.color = "yellow";
        }
        if (_bdList.indexOf(girls[i]) !== -1) {
            p2.style.border = "1px solid fuchsia";
        }
        document.getElementById("girlsListAtt").append(p2);
    }  
    document.getElementById("boysListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListAttP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainPop"],["attListPop"]);
}

function loadArchiveAttendees(index,time) {
    var boys = []; var girls = [];
    var ids = ["boysArchiveListAtt","girlsArchiveListAtt","boysArchiveListAttP","girlsArchiveListAttP"]
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
    if (time == "AM") {
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].attArr[index][0] == 1) {
                boys.push(_sl[i].name[0]);
            } else if (_sl[i].gender == "F" && _sl[i].attArr[index][0] == 1) {
                girls.push(_sl[i].name[0]);
            }
        }
    } else {
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].attArr[index][1] == 1) {
                boys.push(_sl[i].name[0]);
            } else if (_sl[i].gender == "F" && _sl[i].attArr[index][1] == 1) {
                girls.push(_sl[i].name[0]);
            }
        }
    }
    for (let i = 0; i < boys.length; i++) {
        var p1 = document.createElement("p");
        p1.classList.add("name2");
        p1.innerHTML = boys[i];
        document.getElementById("boysArchiveListAtt").append(p1);
    }  
    for (let i = 0; i < girls.length; i++) {
        var p2 = document.createElement("p");
        p2.classList.add("name2");
        p2.innerHTML = girls[i];
        document.getElementById("girlsArchiveListAtt").append(p2);
    }  
    document.getElementById("boysArchiveListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsArchiveListAttP").innerHTML = "Girls (" + girls.length + ")";
    document.getElementById("attArchiveCount").innerHTML = boys.length + girls.length;
    document.getElementById("attArchiveDate").innerHTML = cdn(_dns[index]) + " " + time + " Attendance";
    pop(["attStatsPop"],["attArchiveListPop"]);
}

function resetAtt() {
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].att = false;
        if (_isClassDay) {
            if (dateAndTime("hour") < 16) {
                _sl[i].attArr[_ti][0] = 0;
            } else {
                _sl[i].attArr[_ti][1] = 0;
            }
        }
    }
    if (_isClassDay) {
        if (dateAndTime("hour") < 16) {
            _att[_ti][0] = 0;
        } else {_att[_ti][1] = 0;}
    }
    var log = "removed all attendees" + "<br>" + dateAndTime("log");
    if (_isClassDay) {ampmAttendance()}
    pop(["attListPop"],["mainPop"]);
    activityLog(log); attCount(); storeAndBackup();
}

function clearAttendees() {
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].att = false;
        if (_isClassDay) {
            if (dateAndTime("hour") < 16) {
                _sl[i].attArr[_ti][0] = 0;
            } else {_sl[i].attArr[_ti][1] = 0}
        }
    }
    if (_isClassDay) {
        _att[_ti][0] = 0;
        _att[_ti][1] = 0;
    }

}

function att2(i) {
    _sl[i].att = true;
    if (_isClassDay) {
        if (dateAndTime("hour") < 16) {
            _sl[i].attArr[_ti][0] = 1;
        } else {
            _sl[i].attArr[_ti][1] = 1;
        } 
        ampmAttendance()
    }
    var log = "added attendee " + _sl[i].name[0] + "<br>" + dateAndTime("log");
    activityLog(log); attCount(); storeNewData();
}

function randAtt(blank,x) {
    if (x > _sl.length) {
        x = _sl.length;
    }
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].att = false;
    }
    for (let i = 0; i < x; i++) {
        let x = Math.floor(Math.random() * _sl.length);
        if (_sl[x].att === false) {
            _sl[x].att = true;
        } else {
            i--
        }
    }
    if (_isClassDay && dateAndTime("hour") < 16) {
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].att === true) {
                _att[_ti][0] += 1;
                _sl[i].attArr[_ti][0] = 1;
            }
        } 
    } else if (_isClassDay && dateAndTime("hour") >= 16) {
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].att === true) {
                _att[_ti][1] += 1;
                _sl[i].attArr[_ti][1] = 1;
            }
        } 
    }
    loadAttendees(); attCount(); populateNames(); storeAndBackup();
}

function sortByRank() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    _sl.sort(function(b,a){return a.rank[0] - b.rank[0]});
    for (let i = 0; i < _sl.length; i++) {
        var lastElementNode;
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        if (_sl[i].rank[0] != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].name[0];
        span2.innerHTML = " " + _rankNamesShort[_sl[i].rank[0]];
        p.append(span1,span2);
        document.getElementById("nameListCustom").append(p);
        lastElementNode = _sl[i].rank[0];
    }
    pop(["sortChoicePop"],["customSortListPop"],"Rank");
}

function sortByPts(lb) {
    if (lb) {
        document.getElementById("totalPtsLbList").innerHTML = "";
    } else {
        document.getElementById("nameListCustom").innerHTML = "";
        document.getElementById("nameListCustom").style.display = "block";
        document.getElementById("genderListContainer").style.display = "none";
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
    assignStatsRanks("pts");
    _sl.sort(function(b,a){return a.pts[0] - b.pts[0]});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].pts[0] == 0) {continue}
        if (lb) {if ( _sl[i].pts[1] > 10 ) {continue}}
        var totalPtsPercentage = ((_sl[i].pts[0] / totalPts) * 100).toFixed(1);
        var lastElementNode;
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        p.classList.add("name3");
        span2.classList.add("sortValues");
        if (_sl[i].pts[0] != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].pts[1] + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].pts[0] + "/" + totalPts + " (" + totalPtsPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            document.getElementById("totalPtsLbList").append(p);
        } else {
            document.getElementById("nameListCustom").append(p);
        }
        lastElementNode = _sl[i].pts[0];
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByGamePts() {
    assignStatsRanks("gamePts");
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
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
        document.getElementById("nameListCustom").append(p);
        lastElementNode = _sl[i].gamePts[0];
    }
    pop(["teamsListPop"],["customSortListPop"],"Game Points");
}

function sortByASpts(lb) {
    if (lb) {
        document.getElementById("asPtsLbList").innerHTML = "";
    } else {
        document.getElementById("nameListCustom").innerHTML = "";
        document.getElementById("nameListCustom").style.display = "block";
        document.getElementById("genderListContainer").style.display = "none";
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
    assignStatRanks("earnedASpts",false,"asRank");
    _sl.sort(function(b,a){return a.earnedASpts - b.earnedASpts});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].earnedASpts == 0) {continue}
        if (lb) {if ( _sl[i].asRank > 10 ) {continue}}
        var lastElementNode;
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        if (_sl[i].earnedASpts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].asRank + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].earnedASpts + "/" + totalASpts + " (" + _sl[i].asPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            document.getElementById("asPtsLbList").append(p);
        } else {
            document.getElementById("nameListCustom").append(p);
        }        lastElementNode = _sl[i].earnedASpts;
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByMVpts(lb) {
    if (lb) {
        document.getElementById("mvPtsLbList").innerHTML = "";
    } else {
        document.getElementById("nameListCustom").innerHTML = "";
        document.getElementById("nameListCustom").style.display = "block";
        document.getElementById("genderListContainer").style.display = "none";
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
    assignStatRanks("earnedMVpts",false,"mvRank");
    _sl.sort(function(b,a){return a.earnedMVpts - b.earnedMVpts});
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].earnedMVpts == 0) {continue}
        if (lb) {if ( _sl[i].mvRank > 10 ) {continue}}
        var lastElementNode;
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        if (_sl[i].earnedMVpts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].mvRank + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].earnedMVpts + "/" + totalMVpts + " (" + _sl[i].mvPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            document.getElementById("mvPtsLbList").append(p);
        } else {
            document.getElementById("nameListCustom").append(p);
        }        lastElementNode = _sl[i].earnedMVpts;
    }
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByAtt(lb) {
    if (lb) {
        document.getElementById("attLbList").innerHTML = "";
    } else {
        document.getElementById("nameListCustom").innerHTML = "";
        document.getElementById("nameListCustom").style.display = "block";
        document.getElementById("genderListContainer").style.display = "none";
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
    assignAttRanks();
    assignStatRanks("totalWksAtt",false,"attRank");
    _sl.sort(function(a,b){return b.totalWksAtt - a.totalWksAtt});
    for (let i = 0; i < _sl.length; i++) {
        if (lb) {if ( _sl[i].attRank > 10 ) {continue}}
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
        span1.innerHTML = _sl[i].attRank + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].totalWksAtt + "/" + _elapsedWeeks + " (" + attPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            document.getElementById("attLbList").append(p);
        } else {
            document.getElementById("nameListCustom").append(p);
        }        lastElementNode = _sl[i].totalWksAtt;
    }  
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByTP(lb) {
    if (lb) {
        document.getElementById("tpLbList").innerHTML = "";
    } else {
        document.getElementById("nameListCustom").innerHTML = "";
        document.getElementById("nameListCustom").style.display = "block";
        document.getElementById("genderListContainer").style.display = "none";
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
        _sl[i].tpPts = _sl[i].pts[0] + total;
    }
    assignStatRanks("tpPts",false,"tpRank");
    _sl.sort(function(a,b){return b.tpPts - a.tpPts});
    for (let i = 0; i < _sl.length; i++) {
        if (lb) {if ( _sl[i].tpRank > 10 ) {continue}}
        var lastElementNode;
        var tpPercentage = ((_sl[i].tpPts / totalTPpts) * 100).toFixed(1);
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span2.classList.add("sortValues");
        p.classList.add("name3");
        p.classList.add("name3");
        if (_sl[i].tpPts != lastElementNode) {
            p.style.borderTop = "1px solid #555";
            p.style.paddingTop = "10px";
        }
        span1.innerHTML = _sl[i].tpRank + ". " + _sl[i].name[0];
        span2.innerHTML = " " + _sl[i].tpPts + "/" + totalTPpts + " (" + tpPercentage + "%)";
        p.append(span1,span2);
        if (lb) {
            document.getElementById("tpLbList").append(p);
        } else {
            document.getElementById("nameListCustom").append(p);
        }
        lastElementNode = _sl[i].tpPts;
    }  
    if (!lb) {pop(["sortChoicePop"],["customSortListPop"],"Total Points")}
}

function sortByGender() {
    var boys = []; var girls = [];
    document.getElementById("nameListCustom").style.display = "none";
    document.getElementById("boysList").innerHTML = "";
    document.getElementById("girlsList").innerHTML = "";
    document.getElementById("genderListContainer").style.display = "flex";
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            boys.push(_sl[i].name[0]);
        } else {
            girls.push(_sl[i].name[0]);
        }
    }
    for (let i = 0; i < boys.length; i++) {
        var p1 = document.createElement("p");
        p1.classList.add("name2");
        p1.innerHTML = boys[i];
        document.getElementById("boysList").append(p1);
    }  
    for (let i = 0; i < girls.length; i++) {
        var p2 = document.createElement("p");
        p2.classList.add("name2");
        p2.innerHTML = girls[i];
        document.getElementById("girlsList").append(p2);
    }  
    document.getElementById("boysListP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"],"Gender");
}

function sortByBd() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var bdnOrder = _sl.sort(function(a,b){return a.bd[0] - b.bd[0]});
    for (let i = 0; i < _sl.length; i++) {
        if (bdnOrder[i].bd[0] == 0) { continue }
        var lastElementNode;
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        p.classList.add("name3");
        span1.classList.add("sortValues");
        if (cdn(_sl[i].bd[0],"M") != lastElementNode) {
            p.style.borderTop = "1px solid #333";
            p.style.paddingTop = "10px";
        }
        if (_sl[i].bd[2] === true) {
            p.style.color = "gray";
        };
        if (_bdList.indexOf(_sl[i].name[0]) > -1 && _sl[i].bd[2] === false) {
            p.style.color = "fuchsia";
        };
        span1.innerHTML = cdn(bdnOrder[i].bd[0]);
        span2.innerHTML = " " + bdnOrder[i].name[0];
        p.append(span1,span2);
        document.getElementById("nameListCustom").append(p);
        lastElementNode = cdn(_sl[i].bd[0],"M");
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"],"Birthdays");
}

function sortByDateAdded() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var dateAddedOrder = _sl.sort(function(a,b){return a.dateAdded - b.dateAdded});
    for (let i = 0; i < _sl.length; i++) {
        var dateAddedMonth; var dateAddedDate;
        var dateAddedArray = cdn(_sl[i].dateAdded).split("/");
        dateAddedMonth = dateAddedArray[0]; dateAddedDate = dateAddedArray[1];
        var lastElementNode;
        var p = document.createElement("p");
        p.classList.add("name3");
        if (dateAddedMonth != lastElementNode) {
            p.style.borderTop = "1px solid #333";
            p.style.paddingTop = "10px";
        }
        p.innerHTML = dateAddedMonth + "/" + dateAddedDate + " " + dateAddedOrder[i].name[0];
        document.getElementById("nameListCustom").append(p);
        lastElementNode = dateAddedMonth;
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"],"Date Added");
}

function sortByNotes(bypass) {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].notes.length != 0) {
            var lastElementNode;
            var p1 = document.createElement("p");
            var br = document.createElement("br");
            var p2 = document.createElement("p");
            p1.classList.add("name3");
            p2.classList.add("noteText");
            if (_sl[i] != lastElementNode) {
                p1.style.borderTop = "1px solid #333";
                p1.style.paddingTop = "10px";
            }
            p1.innerHTML = _sl[i].name[0];
            var notesString = "";
            for (let j = 0; j < _sl[i].notes.length; j++) {
                if (j < (_sl[i].notes.length-1)) {
                    notesString += (j+1) + ". " + _sl[i].notes[j] + "<br>"
                } else {
                    notesString += (j+1) + ". " + _sl[i].notes[j];
                }
            }
            p1.append(br);
            p2.innerHTML = notesString;
            p1.append(p2);
            document.getElementById("nameListCustom").append(p1);
            lastElementNode = _sl[i];
        }
    }  
    if (!bypass) { pop(["mainMenuPop","sortChoicePop"],["customSortListPop"],"Notes"); }
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
    populateNames();
}

function sortSLbyProperty(propertyName,index) {
    _sl.sort(function(a,b) {
        if (index) {
            var textA = a[propertyName][index];
            var textB = b[propertyName][index];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        } else {
            var textA = a[propertyName];
            var textB = b[propertyName];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }

    });
}

function populateStudentNotes(id) {
    _populateNotesID = id;
    document.getElementById("studentNotesList").innerHTML = "";
    for (let i = 0; i < _sl[_ci].notes.length; i++) {
        if (_sl[_ci].notes[i] == false) { continue }
        var p1 = document.createElement("p");
        p1.classList.add("note");
        (function(i){
            p1.onclick = function () {
                pop(["studentNotesPop"],["editStudentNotePop","editStudentNote"]);
                document.getElementById("editStudentNote").focus();
                _noteIndex = i;
                document.getElementById("editStudentNote").value = _sl[_ci].notes[_noteIndex];
            }
        })(i);
        p1.innerHTML = (i + 1) + ". " + _sl[_ci].notes[i];
        document.getElementById("studentNotesList").append(p1);
    }
    var p2 = document.createElement("p");
    p2.classList.add("addNew");
    p2.onclick = function () {
        pop(["studentNotesPop"],["addStudentNotePop","addStudentNote"]);
        document.getElementById("addStudentNote").focus();
    }
    p2.innerHTML = "Add New Note";
    document.getElementById("studentNotesList").append(p2);
}

function addStudentNote() {
    var note = document.getElementById("addStudentNote").value;
    if (note === null || note == "") {
        return;
    } else {
        _sl[_ci].notes.push(note);
        document.getElementById("addStudentNote").value = "";
        storeAndBackup();
        populateStudentNotes(_populateNotesID);
        pop(["addStudentNotePop","addStudentNote"],["studentNotesPop","studentNotesList"]);
    }
}

function addTeacherNote() {
    var note = document.getElementById("addTeacherNote").value;
    if (note === null || note == "") {
        return;
    } else {
        _teacherNotes.push(note);
        document.getElementById("addTeacherNote").value = "";
        storeAndBackup();
        populateTeacherNotes();
        pop(["addTeacherNotePop","addTeacherNote"],["teacherNotesPop","teacherNotesList"]);
    }
}

function deleteNote() {
    _sl[_ci].notes.splice(_noteIndex,1);
    storeAndBackup();
    populateStudentNotes(_populateNotesID);
    pop(["editStudentNotePop"],["studentNotesPop"]);
}

function editStudentNote() {
    if (document.getElementById("editStudentNote").value == "") {
        _sl[_ci].notes.splice(_noteIndex,1);
        if (_sl[_ci].notes.length == 0) {
            document.getElementById("notesButton").style.background = "black";
        }
    } else {
        _sl[_ci].notes[_noteIndex] = document.getElementById("editStudentNote").value;
    }
    storeAndBackup();
    populateStudentNotes(_populateNotesID);
    pop(["editStudentNotePop"],["studentNotesPop"]);
}

function findAllBds() {
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].bd[1] === true && _sl[i].bd[2] === false) {
            _bdList.push(_sl[i].name[0]);
        }
        if (_sl[i].bd[0] >= _todaysDn && _sl[i].bd[0] <= (_todaysDn + (6 + (7 * _weeksOff))) && _sl[i].bd[1] === false) {
            _sl[i].bd[1] = true; _bdList.push(_sl[i].name[0]);
            activityLog(_sl[i].name[0] + " birthday found (" + cdn(_sl[i].bd[0]) + ")<br>" + dateAndTime("log"));
        }
    }
}

function findBd() {
    if (_sl[_ci].bd[0] >= _todaysDn && _sl[_ci].bd[0] <= (_todaysDn + (6 + (7 * _weeksOff))) && _sl[_ci].bd[1] === false && _sl[_ci].bd[2] === false) {
        _sl[_ci].bd[1] = true; _bdList.push(_sl[_ci].name[0]);
        activityLog(_sl[_ci].name[0] + " birthday found (" + cdn(_sl[i].bd[0]) + ")<br>" + dateAndTime("log"));
    } else if (_bdList.indexOf(_sl[_ci].name[0]) > -1) {
        _sl[_ci].bd[1] = false; _bdList.splice(_bdList.indexOf(_sl[_ci].name[0]),1);
    }
}

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function activityLog(log,color,background) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = log;
    paragraph.classList.add("logEntry");
    if (color) {
        paragraph.style.color = color;
    }
    if (background) {
        paragraph.style.background = background;
    }
    document.getElementById("log").append(paragraph);
    _log = document.getElementById("log").innerHTML;
    storeNewData();
}

function infoAlert(message,idArray,focus,noImage) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        document.getElementById("infoAlertPop").style.display = "none";
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "block"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = "";
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        document.getElementById("infoAlertPop").style.display = "block";
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "none"
            }
        }
        document.getElementById("infoAlertMessage").innerHTML = message;
    }
    if (_focus) { document.getElementById(_focus).focus(); }
    if (noImage) {
        document.getElementById("infoAlertTitle").style.display = "none";
    } else {
        document.getElementById("infoAlertTitle").style.display = "block";
    }
}

function dataInputAlert(message,popArray,func,parameter,bypass) {
    if (document.getElementById("dataInputAlertPop").style.display != "block") {
        _dataInputParameter = parameter;
        _currentPops2 = popArray;
        _currentFunction = func;
        document.getElementById("dataInputAlertPop").style.display = "block";
        document.getElementById("dataInputTextField").value = "";
        for (let i = 0; i < _currentPops2.length; i++) {
            document.getElementById(_currentPops2[i]).style.display = "none"
        }
        document.getElementById("dataInputAlertMessage").innerHTML = message;
        document.getElementById("dataInputTextField").focus();
    } else if (document.getElementById("dataInputAlertPop").style.display == "block") {
        if (!bypass) {
            if (isNaN(parseInt(document.getElementById("dataInputTextField").value))) {
                infoAlert("Please enter a number",["dataInputAlertPop"],"dataInputTextField"); return;
            }
            var data = parseInt(document.getElementById("dataInputTextField").value);
            _currentFunction(_dataInputParameter,data);
            for (let i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            }
            document.getElementById("dataInputAlertMessage").innerHTML = "";
            document.getElementById("dataInputAlertPop").style.display = "none";
        } else {
            document.getElementById("dataInputAlertPop").style.display = "none";
            for (let i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            }
        }
    }
}

function actionAlert(message,popsArray,func,bypass,parameter) {
    if (document.getElementById("actionAlertPop").style.display != "block") {
        _currentPops = popsArray; _currentFunction = func; _currentParameter= parameter;
        document.getElementById("actionAlertPop").style.display = "block";
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== undefined) {
                document.getElementById(_currentPops[i]).style.display = "none"
            }
        }
        document.getElementById("actionAlertMessage").innerHTML = message;
    } else if (document.getElementById("actionAlertPop").style.display == "block") {
        document.getElementById("actionAlertPop").style.display = "none";
        for (let i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== undefined) {
                document.getElementById(_currentPops[i]).style.display = "block"
            }
        }
        document.getElementById("actionAlertMessage").innerHTML = "";
        if (!bypass) {
            _currentFunction(_currentParameter);
        }
    } 
}

function proofDate(month,date) {
    var months = [1,2,3,4,5,6,7,8,9,10,11,12];
    var dates = [31,29,31,30,31,30,31,31,30,31,30,31];
    if (month != "" && date != "") {
        if (months.indexOf(month) < 0 || date < 1 || date > dates[month-1] || isNaN(date)) {
            return false;
        }
    }
}

function newStudent() {
    var NFNArray; var NLNArray;
    if (document.getElementById("newFirst").value.trim().indexOf(" ") > -1) {
        var NFNArray = (document.getElementById("newFirst").value.trim().toLowerCase()).split(" ");
    } else if (document.getElementById("newFirst").value.trim().indexOf("-") > -1) {
        var NFNArray = (document.getElementById("newFirst").value.trim().toLowerCase()).split("-");
    } else {
        var NFNArray = [(document.getElementById("newFirst").value.trim().toLowerCase())];
    }
    if (document.getElementById("newLast").value.trim().indexOf(" ") > -1) {
        var NLNArray = (document.getElementById("newLast").value.trim().toLowerCase()).split(" ");
    } else if (document.getElementById("newLast").value.trim().indexOf("-") > -1) {
        var NLNArray = (document.getElementById("newLast").value.trim().toLowerCase()).split("-");
    } else {
        var NLNArray = [(document.getElementById("newLast").value.trim().toLowerCase())];
    }
    var newGender = document.getElementById("newGender").value
    var newbdMonth = document.getElementById("newbdMonth").value
    var newbdDate = document.getElementById("newbdDate").value
    var email = document.getElementById("newEmail").value.toLowerCase();
    var note = [document.getElementById("initialNote").value];
    var pron = document.getElementById("newNamePron").value;
    if (NFNArray == false || NLNArray == false) {
        infoAlert("First and last name required",["newStudentPop"]); return;
    } else {
        for (let i = 0; i < NFNArray.length; i++) {
            NFNArray[i] = capitalize(NFNArray[i]);
        }
        for (let i = 0; i < NLNArray.length; i++) {
            NLNArray[i] = capitalize(NLNArray[i]);
        }
        var first = NFNArray.join("-");
        var last = NLNArray.join("-");
        var name = first + " " + last;
    }
    if (newGender.toLowerCase() == "m") {
        var gender = "M";
    } else if (newGender.toLowerCase() == "f") {
        var gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["newStudentPop"]); return;
    }
    if (newbdMonth == "" && newbdDate == "") {
        var month = 0; var date = 0;
    } else {
        var month = parseInt(newbdMonth);
        var date = parseInt(newbdDate);
    }
    if (proofDate(month,date) === false) {
        infoAlert("Invalid birthday date",["newStudentPop"]); return;
    }
    var newStudent = new Student(name,month,date,email,gender,note,pron);
    newStudent.att = true;
    for (let i = 0; i < _dns.length; i++) {
        newStudent.attArr[i] = [0,0];
    }
    if (_isClassDay) {
        if (dateAndTime("hour") < 16) {
            newStudent.attArr[_ti][0] = 1;
        } else if (dateAndTime("hour") >= 16) {
            newStudent.attArr[_ti][1] = 1;
        }
    }
    _sl.push(newStudent); _ci = _sl.length-1;
    var log = "new student " + _sl[_ci].name[0] + "<br>" + dateAndTime("log");
    attCount(); findBd(); sortSL(); activityLog(log); storeAndBackup(); clearStudentFields()
    if (document.getElementById("rapidEntryCheck").checked === true) {
        document.getElementById("newFirst").focus();
        return;
    } else {
        pop(["newStudentPop"],["mainPop"]);
    }
}

function deleteStudent() {
    _sl.splice(_ci,1);
    attCount(); storeAndBackup(); sortSL(); goHome();
}

function editStudent() {
    var originalFull = _sl[_ci].name[0].toString();
    var originalGender = _sl[_ci].gender;
    var originalBdn = _sl[_ci].bd[0];
    var originalEmail = _sl[_ci].email;
    var EFNArray; var ELNArray;
    if (document.getElementById("editFirst").value.trim().indexOf(" ") > -1) {
        var EFNArray = (document.getElementById("editFirst").value.trim().toLowerCase()).split(" ");
    } else if (document.getElementById("editFirst").value.trim().indexOf("-") > -1) {
        var EFNArray = (document.getElementById("editFirst").value.trim().toLowerCase()).split("-");
    } else {
        var EFNArray = [(document.getElementById("editFirst").value.trim().toLowerCase())];
    }
    if (document.getElementById("editLast").value.trim().indexOf(" ") > -1) {
        var ELNArray = (document.getElementById("editLast").value.trim().toLowerCase()).split(" ");
    } else if (document.getElementById("editLast").value.trim().indexOf("-") > -1) {
        var ELNArray = (document.getElementById("editLast").value.trim().toLowerCase()).split("-");
    } else {
        var ELNArray = [(document.getElementById("editLast").value.trim().toLowerCase())];
    }
    var editGender = document.getElementById("editGender").value;
    var editBdMonth = document.getElementById("editBdMonth").value;
    var editBdDate = document.getElementById("editBdDate").value;
    if (editBdMonth == "" && editBdDate == "") {
        _sl[_ci].bd[0] = 0; _sl[_ci].bd[1] = false;
    } else {
        editBdMonth = parseInt(editBdMonth); editBdDate = parseInt(editBdDate);
    }
    if (proofDate(editBdMonth,editBdDate) === false) {
        infoAlert("Invalid birthday date",["editStudentPop"]); return;
    } else {
        _sl[_ci].bd[0] = assignDn(editBdMonth,editBdDate);
    }
    _sl[_ci].name[1] = document.getElementById("editNamePron").value;
    _sl[_ci].email = document.getElementById("editEmail").value.toLowerCase();
    if (EFNArray == false || ELNArray == false) {
        infoAlert("First and last name required",["editStudentPop"]); return;
    } else {
        for (let i = 0; i < EFNArray.length; i++) {
            EFNArray[i] = capitalize(EFNArray[i]);
        }
        for (let i = 0; i < ELNArray.length; i++) {
            ELNArray[i] = capitalize(ELNArray[i]);
        }
        var first = EFNArray.join("-");
        var last = ELNArray.join("-");
        _sl[_ci].name[0] = first + " " + last;
    }
    if (editGender.toLowerCase() == "m") {
        _sl[_ci].gender = "M";
    } else if (editGender.toLowerCase() == "f") {
        _sl[_ci].gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["editStudentPop"]); return;
    }
    if (_sl[_ci].bd[0] != originalBdn) { findBd() }
    document.getElementById("studentPopName").innerHTML = _sl[_ci].name[0];
    var original = [originalFull,originalGender,cdn(originalBdn),originalEmail];
    var edit = [_sl[_ci].name[0].toString(),_sl[_ci].gender,cdn(_sl[_ci].bd[0]),_sl[_ci].email];
    var labels = ["name","gender","birthday","email"];
    for (let i = 0; i < original.length; i++) {
        if (original[i] != edit[i]) {
            activityLog(originalFull + " " + labels[i] + " edited<br>" + original[i] + "-->" + edit[i] + "<br>" + dateAndTime("log"));
        }
    }
    refreshStudentPop(); allAlerts(); sortSL(); storeAndBackup();
    if (_currentFunction == loadNeededEmails || _currentFunction == loadNeededBds) { _currentFunction() };
    if (document.getElementById("rapidEditCheck").checked === true) {
        if (_ci < _sl.length-1) {
            _ci++; refreshStudentPop(); refreshMissionsPop(); populateStudentFields();
        } else if (_ci == _sl.length-1) {
            pop(["editStudentPop","studentPop"],["mainPop"]); rapidOff();
        }
    } else {
        resetStudentMenu();
        pop(["editStudentPop"],_array);
    }
}

function refreshStudentPop() {
    assignStatsRanks("pts");
    document.getElementById("studentPopInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    document.getElementById("studentPopRankName").innerHTML = _rankNames[_sl[_ci].rank[0]];
    document.getElementById("studentPopName").innerHTML = _sl[_ci].name[0];
    var ptsNeeded;
    if (_sl[_ci].pts[0] == 220) {
        ptsNeeded = 0
    } else {
        ptsNeeded = _rankPts[_sl[_ci].rank[0]+1] - _sl[_ci].pts[0];
    }
    document.getElementById("studentPopPts").innerHTML = _sl[_ci].pts[0] + " | <span style='color: #999'>" + ptsNeeded +"</span>";
    if (_rankNames[_sl[_ci].rank[0]].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    document.getElementById("studentPopClassRank").innerHTML = "Class Rank: " + _sl[_ci].pts[1];
    if (_sl[_ci].att === true) {
        document.getElementById("studentPopName").style.color = "lawngreen";
    } else {
        document.getElementById("studentPopName").style.color = "white";
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
            document.getElementById("studentMenu2").style.color = "red"; break;
        } else {
            document.getElementById("studentMenu2").style.color = "white";
        }
    }
}

function refreshMissionsPop() {
    if (_elapsedWeeks > 1) {
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
            if (_sl[_ci].as[i][0] == _asMaxPts[i] && _sl[_ci].as[i][1] <= _todaysDn) {
                document.getElementById("as"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].as[i][0] > 0 && _sl[_ci].as[i][0] < _asMaxPts[i] && _sl[_ci].as[i][1] <= _todaysDn) {
                document.getElementById("as"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("as"+i+"Pop").style.background = "black";
            }
        }
        for (let i = 0; i < _ti; i++) {
            if (i > 31) {break}
            if (_sl[_ci].mv[i][0] == _mvMaxPts[i] && _sl[_ci].mv[i][1] <= _todaysDn) {
                document.getElementById("mv"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].mv[i][0] > 0 && _sl[_ci].mv[i][0] < _mvMaxPts[i] && _sl[_ci].mv[i][1] <= _todaysDn) {
                document.getElementById("mv"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("mv"+i+"Pop").style.background = "black";
            }
        }
    }
}

function populateStudentFields(id,func) {
    if (func) { _currentFunction = func }
    document.getElementById("editFirst").value = _sl[_ci].name[0].split(" ")[0]
    document.getElementById("editLast").value = _sl[_ci].name[0].split(" ")[1]
    if (_sl[_ci].bd[0] != 0) {
        document.getElementById("editBdMonth").value = cdn(_sl[_ci].bd[0],"M").toString();
        document.getElementById("editBdDate").value = cdn(_sl[_ci].bd[0],"D").toString();
    } else {
        document.getElementById("editBdMonth").value = "";
        document.getElementById("editBdDate").value = "";
    }
    document.getElementById("editEmail").value = _sl[_ci].email;
    document.getElementById("editGender").value = _sl[_ci].gender;
    document.getElementById("editNamePron").value = _sl[_ci].name[1];
    loadStudentPhoto();
    pop(_array,["editStudentPop"]);
    if (id) {
        document.getElementById(id).focus();
    }
}

function clearStudentFields() {
    var ids = ["newFirst","newLast","newGender","newbdMonth","newbdDate","newEmail","initialNote","newNamePron"];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).value = "";
    }
}

function rapidOff() {
    document.getElementById("rapidEntryCheck").checked = false;
    document.getElementById("rapidEditCheck").checked = false;
}

function promo() {
    _sl[_ci].rank[0]++; _sl[_ci].promo[0] = true; _sl[_ci].promo[1]++; _promoList.push(_sl[_ci].name[0]);
    setRankFactor();
    document.getElementById("studentPopRankName").innerHTML = _rankNames[_sl[_ci].rank[0]];
    document.getElementById("dispRankNamePromo").innerHTML = _rankNames[_sl[_ci].rank[0]];
    storeAndBackup();
    document.getElementById("promoInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank[0]+"-rank.jpg)";
    var log = _sl[_ci].name[0] + " promoted to " + _rankNamesShort[_sl[_ci].rank[0]] + "<br>" + dateAndTime("log");
    activityLog(log);
    setTimeout(function() {
        pop(["studentPop","missionsPop"],["promoPop"])
    },10);
}

function demo() {
    _sl[_ci].rank[0]--;
    if (_sl[_ci].promo[1] == 1) {
        _sl[_ci].promo[0] = false;
    }
    _sl[_ci].promo[1]--;
    setRankFactor();
    var log = _sl[_ci].name[0] + " demoted to " + _rankNamesShort[_sl[_ci].rank[0]] + "<br>" + dateAndTime("log");
    activityLog(log);
    document.getElementById("studentPopRankName").innerHTML = _rankNames[_sl[_ci].rank[0]];
    storeAndBackup();
}

function asPts(_asNum,x) {
    if (_sl[_ci].as[_asNum][1] == 0) {_sl[_ci].as[_asNum][1] = _todaysDn};
    var rankNum = _sl[_ci].rank[0];
    var rankFactor = _sl[_ci].rank[1];
    var totalPts = _sl[_ci].pts[0];
    var asPts = _sl[_ci].as[_asNum][0];
    var netPts = x - _sl[_ci].as[_asNum][0];
    var promoStatus = 0;
    if (_sl[_ci].rank[0] != 8 && _sl[_ci].rank[0] != 14 && _sl[_ci].rank[0] != 18) {
        if (asPts == 0 || asPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + netPts >= 10 && totalPts < 220) {
                promoStatus = 1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].as[_asNum][0] = x;
        }
        if (asPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].as[_asNum][0] = x;
        }
        if (asPts == x) {
            _sl[_ci].as[_asNum][1] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] -= x; netPts = -x;
            _sl[_ci].as[_asNum][0] = 0;
        }
    } else if (_sl[_ci].rank[0] == 8 || _sl[_ci].rank[0] == 14 || _sl[_ci].rank[0] == 18) {
        if (asPts == 0 || asPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                promoStatus = 1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].as[_asNum][0] = x;
        }
        if (asPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].as[_asNum][0] = x;
        }
        if (asPts == x) {
            _sl[_ci].as[_asNum][1] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] -= x; netPts = -x;
            _sl[_ci].as[_asNum][0] = 0;
        }
    }
    var plusSign = ""; if (netPts > 0) {plusSign = "+"}
    var log = _sl[_ci].name[0] + " " + plusSign + netPts + " points " + _asNames[_asNum] + " sheet "  + "<br>" +  "(" + asPts + "-->" + _sl[_ci].as[_asNum][0] + ")" + " (" + (_sl[_ci].pts[0] - netPts) + "-->" + _sl[_ci].pts[0] + ")" + "<br>" + dateAndTime("log");
    activityLog(log);
    if (promoStatus > 0) {
        promo();
    } else if (promoStatus < 0) {
        demo();
    }
    assignStatsRanks("pts"); storeAndBackup(); loadStudent(_ci);
    pop(["asPtsPop"],["missionsPop"]);
}

function mvPts(_mvNum,x) {
    if (_sl[_ci].mv[_mvNum][1] == 0) {_sl[_ci].mv[_mvNum][1] = _todaysDn};
    var rankNum = _sl[_ci].rank[0];
    var rankFactor = _sl[_ci].rank[1];
    var totalPts = _sl[_ci].pts[0];
    var mvPts = _sl[_ci].mv[_mvNum][0];
    var netPts = x - _sl[_ci].mv[_mvNum][0];
    var promoStatus = 0;
    if (_sl[_ci].rank[0] != 8 && _sl[_ci].rank[0] != 14 && _sl[_ci].rank[0] != 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + netPts >= 10 && totalPts < 220) {
                promoStatus = 1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].mv[_mvNum][0] = x;
        }
        if (mvPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].mv[_mvNum][0] = x;
        }
        if (mvPts == x) {
            _sl[_ci].mv[_mvNum][1] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] -= x; netPts = -x;
            _sl[_ci].mv[_mvNum][0] = 0;
        }
    } else if (_sl[_ci].rank[0] == 8 || _sl[_ci].rank[0] == 14 || _sl[_ci].rank[0] == 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                promoStatus = 1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].mv[_mvNum][0] = x;
        }
        if (mvPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] += netPts;
            _sl[_ci].mv[_mvNum][0] = x;
        }
        if (mvPts == x) {
            _sl[_ci].mv[_mvNum][1] = 0;
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                promoStatus = -1;
            }
            _sl[_ci].pts[0] -= x; netPts = -x;
            _sl[_ci].mv[_mvNum][0] = 0;
        }
    }
    var plusSign = ""; if (netPts > 0) {plusSign = "+"}
    var log = _sl[_ci].name[0] + " " + plusSign + netPts + " points " + _mvNames[_mvNum] + " verse "  + "<br>" +  "(" + mvPts + "-->" + _sl[_ci].mv[_mvNum][0] + ")" + " (" + (_sl[_ci].pts[0] - netPts) + "-->" + _sl[_ci].pts[0] + ")" + "<br>" + dateAndTime("log");
    activityLog(log);
    if (promoStatus > 0) {
        promo();
    } else if (promoStatus < 0) {
        demo();
    }
    assignStatsRanks("pts");
    storeAndBackup();
    loadStudent(_ci);
    pop(["mvPtsPop"],["missionsPop"]);
}

function searchNames(id,className) {
    if (id == "searchMain") { 
        var inputVal = " " + document.getElementById(id).value.toLowerCase();
    } else {
        console.log("hello");
        var inputVal = document.getElementById(id).value.toLowerCase();
    }
    var names = document.getElementsByClassName(className);
    for (let i = 0; i < names.length; i++) {
        if (names[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        }
    }
}

function searchLog() {
    var inputVal = document.getElementById("searchLog").value.toLowerCase();
    var logEntries = document.getElementsByClassName("logEntry");
    for (let i = 0; i < logEntries.length; i++) {
        if (logEntries[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            logEntries[i].style.display = "block";
        } else {
            logEntries[i].style.display = "none";
        }
    }
}

function loadStudent(index) {
    _ci = index; document.getElementById("searchMain").value = "";
    checkInAtt(); refreshStudentPop(); refreshMissionsPop(); resetMissions(); resetStudentMenu();
    loadLbs();
    document.activeElement.blur();
    if (document.getElementById("editStudentPop").style.display != "block") {
        pop(["mainPop"],["studentPop","missionsPop"]);
    }
}

function loadLbs() {
    sortByPts(true); sortByASpts(true); sortByMVpts(true); sortByAtt(true); sortByTP(true); sortSL();
}

function resetStudentMenu() {
    for (let i = 0; i < 4; i++) {
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
    var pops = ["missionsPop","studentStatsPop","editStudentPop","studentNotesPop","studentPropertiesPop"];
    var funcs = [false,loadStudentStats,populateStudentFields,populateStudentNotes]
    for (let i = 0; i < 4; i++) {
        if (i == x) {
            document.getElementById("studentMenu"+i).style.backgroundColor = "#777";
        } else {
            document.getElementById("studentMenu"+i).style.backgroundColor = "black";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (i == x) {
            document.getElementById(pops[i]).style.display = "block";
            if (i > 0 && i < 4) { funcs[i]() }
        }
    }
    for (let i = 0; i < allPops.length; i++) {
        if (allPops[i].id != pops[x] && allPops[i].id != "studentPop") {
            allPops[i].style.display = "none";
        }
    }
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

function pop(closeArray,openArray,title) {
    for (let i = 0; i < closeArray.length; i++) {
        if (closeArray != []) {
            document.getElementById(closeArray[i]).style.display = "none";
        }
    }
    for (let i = 0; i < openArray.length; i++) {
        if (openArray != []) {
            document.getElementById(openArray[i]).style.display = "block";
        }    
    }
    if (openArray.includes("mainPop")) {
        document.getElementById("searchMain").value = "";
        document.getElementById("searchMain").focus();
        sortSL(); populateNames();
    }
    if (openArray.includes("logPop")) {
        document.getElementById("searchLog").value = "";
        document.getElementById("searchLog").focus();
        document.getElementById("log").innerHTML = _log;
    }
    if (openArray.includes("att2Pop")) {
        document.getElementById("searchMain2").value = "";
        document.getElementById("searchMain2").focus();
    }
    if (openArray.includes("att3Pop")) {
        document.getElementById("searchMain3").value = "";
        document.getElementById("searchMain3").focus();
    }
    if (openArray.includes("newStudentPop")) {
        document.getElementById("newFirst").focus();
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
    if (openArray.includes("pwdPop")) {
        setTimeout(function() {
            document.getElementById("pwd").focus();
        },10);
    }
    if (openArray.includes("customSortListPop")) {
        document.getElementById("customSortListLabel").innerHTML = title;
    }
    if (_currentPop == "sortChoicePop") {
        for (let i = 0; i < _sl.length; i++) {
            batchDeletePropertyQuick(["earnedASpts","asPercentage","asRank","earnedMVpts","mvPercentage","mvRank","attRank","totalWksAtt","tpPts","tpRank"])
        }
    }
    scrollTo(0,0);
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (let i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    }
    document.getElementById("searchMain").value = "";
    document.getElementById("searchMain").focus();
    sortSL(); populateNames();
}

function asPop(asNum,pts) {
    _asNum = asNum;
    document.getElementById("asSheetName").innerHTML = _asNames[_asNum].toUpperCase();
    document.getElementById("asDateAssigned").innerHTML = cdn(_dns[asNum]);
    if (_sl[_ci].as[_asNum][0] == _asMaxPts[_asNum]) {
        document.getElementById("asCompletionStatus").innerHTML = "COMPLETED";
        document.getElementById("asCompletionStatus").style.color = "lawnGreen";
    } else if (_sl[_ci].as[_asNum][0] == 0) {
        document.getElementById("asCompletionStatus").innerHTML = "NOT TURNED IN";
        document.getElementById("asCompletionStatus").style.color = "red";
    } else {
        document.getElementById("asCompletionStatus").innerHTML = "PARTIAL CREDIT";
        document.getElementById("asCompletionStatus").style.color = "orange";
    }
    if (_sl[_ci].as[_asNum][0] > 0) {
        document.getElementById("scannedImage").style.display = "table-cell";
    } else {
        document.getElementById("scannedImage").style.display = "none";
    }
    if (_sl[_ci].as[_asNum][1] == 0 || _sl[_ci].as[_asNum][1] > _todaysDn) {
        document.getElementById("asDateTurnedIn").innerHTML = "-"
    } else {
        document.getElementById("asDateTurnedIn").innerHTML = cdn(_sl[_ci].as[_asNum][1]);
    }
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("asPtsPop").style.display = "block";
    for (let i =1; i <= 6; i++) {
        if (document.getElementById("as"+i+"Pts").innerHTML == _sl[_ci].as[_asNum][0]) {
            document.getElementById("as"+i+"Pts").style.background = "#3478F6";
        } else {
            document.getElementById("as"+i+"Pts").style.background = "black";
        }
    }
    for (let i =1; i <= 6; i++) {
        if (i <= pts) {
            document.getElementById("as"+i+"Pts").style.display = "block";
        } else {
            document.getElementById("as"+i+"Pts").style.display = "none";
        }
    }
    scrollTo(0,0);
}

function mvPop(mvNum,pts) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPtsPop").style.display = "block";
    _mvNum = mvNum;
    document.getElementById("mvVerseName").innerHTML = _mvNames[_mvNum].toUpperCase();
    document.getElementById("mvDateAssigned").innerHTML = cdn(_dns[mvNum]);
    if (_sl[_ci].mv[_mvNum][0] == _mvMaxPts[_mvNum]) {
        document.getElementById("mvCompletionStatus").innerHTML = "COMPLETED";
        document.getElementById("mvCompletionStatus").style.color = "lawnGreen";
    } else if (_sl[_ci].mv[_mvNum][0] == 0) {
        document.getElementById("mvCompletionStatus").innerHTML = "NOT RECITED";
        document.getElementById("mvCompletionStatus").style.color = "red";
    } else {
        document.getElementById("mvCompletionStatus").innerHTML = "PARTIAL CREDIT";
        document.getElementById("mvCompletionStatus").style.color = "orange";
    }
    if (_sl[_ci].mv[_mvNum][1] == 0 || _sl[_ci].mv[_mvNum][1] > _todaysDn) {
        document.getElementById("mvDateRecited").innerHTML = "-"
    } else {
        document.getElementById("mvDateRecited").innerHTML = cdn(_sl[_ci].mv[_mvNum][1]);
    }
    document.getElementById("mvText").innerHTML = _mvText[mvNum];
    for (let i =1; i <= 7; i++) {
        if (document.getElementById("mv"+i+"Pts").innerHTML == _sl[_ci].mv[_mvNum][0]) {
            document.getElementById("mv"+i+"Pts").style.background = "#3478F6";
        } else {
            document.getElementById("mv"+i+"Pts").style.background = "black";
        }
    }
    for (let i =1; i <= 7; i++) {
        if (i <= pts) {
            document.getElementById("mv"+i+"Pts").style.display = "block";
        } else {
            document.getElementById("mv"+i+"Pts").style.display = "none";
        }
    }
    scrollTo(0,0);
}

function populateNames() {
    document.getElementById("nameList").innerHTML = "";
    for (let i = 0; i < _sl.length; i++) {
        var p1 = document.createElement("p");
        var span1 = document.createElement("span");
        span1.classList.add("quickAttendance");
        span1.innerHTML = "V"
        if (_sl[i].att === true) {
            span1.style.color = "white";
        } else {
            span1.style.color = "#555";
        }
        (function(i){
            span1.onclick = function () {
                _ci = i; toggleAtt(i); populateNames();
            }
        })(i);
        var span2 = document.createElement("span");
        if (_sl[i].att === true) {
            span2.style.color = "lawnGreen";
        } else {
            span2.style.color = "white";
        }
        p1.classList.add("name");
        (function(i){
            span2.onclick = function () {
                loadStudent(i);
            }
        })(i);
        span2.innerHTML = " " + _sl[i].name[0];
        p1.append(span1,span2);
        document.getElementById("nameList").append(p1);
    }
    var p2 = document.createElement("p");
    p2.classList.add("addNew");
    p2.onclick = function () {
        pop(["mainPop"],["newStudentPop"]);
        document.getElementById("newFirst").focus();
    }
    p2.innerHTML = "Add New Student";
    document.getElementById("nameList").append(p2);
    allAlerts();
    document.getElementById("searchMain").value = "";
    document.getElementById("searchMain").focus();
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
        document.getElementById("rankChartTable").append(tr);
    }
}

function generateAttListTable() {
    for (let i = 0; i < 34; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td"); var td2 = document.createElement("td");
        var td3 = document.createElement("td"); var td4 = document.createElement("td");
        tr.setAttribute("id","attRow"+i);
        td1.setAttribute("id","attDate"+i);
        td2.setAttribute("id","attAM"+i);
        td3.setAttribute("id","attPM"+i);
        td4.setAttribute("id","attBoth"+i);
        tr.append(td1,td2,td3,td4);
        document.getElementById("attListTable").append(tr);
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
        document.getElementById("studentAttTable").append(tr);
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
            document.getElementById(tables[i]).append(tr);
        }
    }
}

function populateNames2() {
    document.getElementById("att2Pop").style.display = "block";
    document.getElementById("nameList2").innerHTML = "";
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true) { continue };
        var p = document.createElement("p");
        p.classList.add("name");
        (function(i){
            p.onclick = function () {
                att2(i);
                pop(["att2Pop"],["studentPop"]);
                document.getElementById("searchMain2").value = "";
            }
        })(i);
        p.innerHTML = _sl[i].name[0];
        document.getElementById("nameList2").append(p);
        document.getElementById("searchMain2").focus();
    }  
}

function populateNames3(x) {
    document.getElementById("att3Pop").style.display = "block"
    document.getElementById("teamsListNav").style.display = "none";
    document.getElementById("teamsListButtons").style.display = "none";
    document.getElementById("nameList3").innerHTML = "";
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === false || _teams[0].team1Reset.includes(_sl[i].name[0]) || _teams[0].team2Reset.includes(_sl[i].name[0])) { continue }
        var p = document.createElement("p");
        p.classList.add("nameSmaller");
        (function(i){
            p.onclick = function () {
                addPlayer(x,i);
                pop(["att3Pop"],["teamsListPop"]);
                document.getElementById("searchMain3").value = "";
            }
        })(i);
        p.innerHTML = _sl[i].name[0];
        document.getElementById("nameList3").append(p);
        document.getElementById("searchMain3").focus();
    }  
}

function confirmAction(id) {
    document.getElementById(id).style.display = "block"
}

function deleteTeacherNote() {
    _teacherNotes.splice(_teacherNoteIndex,1);
    storeAndBackup();
    populateTeacherNotes();
    pop(["editTeacherNotePop"],["teacherNotesPop","teacherNotesList"]);
}

function editTeacherNote() {
    if (document.getElementById("editTeacherNote").value == "") {
        _teacherNotes.splice(_teacherNoteIndex,1);
    } else {
        _teacherNotes[_teacherNoteIndex] = document.getElementById("editTeacherNote").value;
    }
    storeAndBackup();
    populateTeacherNotes();
    pop(["editTeacherNotePop"],["teacherNotesPop"]);
}

function populateTeacherNotes() {
    document.getElementById("teacherNotesList").innerHTML = "";
    for (let i = 0; i < _teacherNotes.length; i++) {
        var p1 = document.createElement("p");
        p1.classList.add("note");
        (function(i){
            p1.onclick = function () {
                pop(["teacherNotesPop"],["editTeacherNotePop","editTeacherNote"]);
                document.getElementById("editTeacherNote").focus();
                _teacherNoteIndex = i;
                document.getElementById("editTeacherNote").value = _teacherNotes[_teacherNoteIndex];
            }
        })(i);
        p1.innerHTML = (i + 1) + ". " + _teacherNotes[i];
        document.getElementById("teacherNotesList").append(p1);
    }
    var p2 = document.createElement("p");
    p2.classList.add("addNew");
    p2.onclick = function () {
        pop(["teacherNotesPop"],["addTeacherNotePop","addTeacherNote"]);
        document.getElementById("addTeacherNote").focus();
    }
    p2.innerHTML = "Add New Note";
    document.getElementById("teacherNotesList").append(p2);
}

function checkInAtt() {
    if (_sl[_ci].att === false) {
        _sl[_ci].att = true;
        if (_isClassDay) {
            if (dateAndTime("hour") < 16) {
                _sl[_ci].attArr[_ti][0] = 1;
            } else {
                _sl[_ci].attArr[_ti][1] = 1;
            }
            ampmAttendance()
        }
        document.getElementById("studentPopName").style.color = "lawngreen";
        var log = "added attendee " + _sl[_ci].name[0] + "<br>" + dateAndTime("log");
        attCount(); storeNewData(); activityLog(log);
    }
}

function toggleAtt() {
    if (_sl[_ci].att === false) {
        _sl[_ci].att = true;
        var log = "added attendee " + _sl[_ci].name[0] + "<br>" + dateAndTime("log");
    } else {
        _sl[_ci].att = false;
        var log = "removed attendee " + _sl[_ci].name[0] + "<br>" + dateAndTime("log");
    }
    if (_isClassDay) {
        if (_sl[_ci].att === true) {
            if (dateAndTime("hour") < 16) {
                _sl[_ci].attArr[_ti][0] = 1;
            } else {
                _sl[_ci].attArr[_ti][1] = 1;
            } 
        } else {
            if (dateAndTime("hour") < 16) {
                _sl[_ci].attArr[_ti][0] = 0;
            } else {
                _sl[_ci].attArr[_ti][1] = 0;
            } 
        }
        ampmAttendance();
    }
    refreshStudentPop(); activityLog(log); attCount(); populateNames(); storeNewData();
}

function draw() {
    var eligibleNames = [];
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].att === true && _sl[i].randDraw[1] === false) {
            eligibleNames.push(_sl[i])
        }
    }
    if (eligibleNames.length == 0) {
        actionAlert('No more eligible names.  Reset drawing?',['drawPop'],resetDrawing);
    } else {
        var x = Math.floor(Math.random() * eligibleNames.length);
        var winner = eligibleNames[x];
        winner.randDraw[1] = true;
        if (winner.name[0].split(" ")[0].length > 9 || winner.name[0].split(" ")[1].length > 9) {
            document.getElementById("drawName").style.fontSize = "65px"; 
        } else {
            document.getElementById("drawName").style.fontSize = "75px"; 
        }
        document.getElementById("drawName").innerHTML = winner.name[0].split(" ")[0] + "<br>" + winner.name[0].split(" ")[1];
        storeAndBackup();
    }
}

function resetDrawing() {
    for (let i = 0; i < _sl.length; i++) {
        _sl[i].randDraw[1] = false;
    }
    document.getElementById("drawName").innerHTML = "tap here<br>to pick";
    storeAndBackup();
}

function rand() {
    document.getElementById("randName").style.color = "white";
    if (document.getElementById("all").checked === true) {
        _eligibleRandom = [];
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].att === true && _sl[i].randDraw[0] === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    } else if (document.getElementById("boys").checked === true) {
        _eligibleRandom = [];
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].att === true && _sl[i].gender == "M" && _sl[i].randDraw[0] === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    } else if (document.getElementById("girls").checked === true) {
        _eligibleRandom = [];
        for (let i = 0; i < _sl.length; i++) {
            if (_sl[i].att === true && _sl[i].gender == "F" && _sl[i].randDraw[0] === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    }
    if (_eligibleRandom.length == 0) {
        document.getElementById("randName").style.color = "red";
        document.getElementById("randName").innerHTML = "all names picked";
        for (let i = 0; i < _sl.length; i++) {_sl[i].randDraw[0] = false}
        setTimeout(function() {
            document.getElementById("randName").style.color = "white";
            document.getElementById("randName").innerHTML = "tap here<br>to pick";
        },1000); return;
    }
    var x = Math.floor(Math.random() * _eligibleRandom.length);
    var picked = _eligibleRandom[x];
    picked.randDraw[0] = true;
    if (picked.name[0].split(" ")[0].length > 9 || picked.name[0].split(" ")[1].length > 9) {
        document.getElementById("randName").style.fontSize = "65px"; 
    } else {
        document.getElementById("randName").style.fontSize = "75px"; 
    }
    document.getElementById("randName").innerHTML = picked.name[0].split(" ")[0] + "<br>" + picked.name[0].split(" ")[1];
    storeNewData();
}

function storeAndBackup() {
    storeNewData();
    backupNewData();
}

function storeNewData() {
    var globalObjects = [_sl,_att,_teacherNotes,_promoList,_teams];
    var objectLabels = ["sl","att","teacherNotes","promoList","teams"];
    var globalOther = [_log,_gameLog];
    var otherLabels = ["log","gameLog"];
    for (let i = 0; i < globalObjects.length; i++) {
        localStorage.setItem(objectLabels[i],JSON.stringify(globalObjects[i]));
    }
    for (let i = 0; i < globalOther.length; i++) {
        localStorage.setItem(otherLabels[i],globalOther[i]);
    }
}

function backupNewData() {
    document.getElementById("slBackupArray").innerHTML = "var _slBackup = "+localStorage.getItem("sl")+";";
    document.getElementById("attBackupArray").innerHTML = "var _attBackup = "+localStorage.getItem("att")+";";
    document.getElementById("teacherNotesBackupArray").innerHTML = "var _teacherNotesBackup = "+localStorage.getItem("teacherNotes")+";";
}

function selectText(element) {
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
    }
}

function loadStudentProperties() {
    document.getElementById("name").innerHTML = JSON.stringify(_sl[_ci].name);
    document.getElementById("gender").innerHTML = _sl[_ci].gender;
    document.getElementById("dateAdded").innerHTML = _sl[_ci].dateAdded;
    document.getElementById("dateAddedConverted").innerHTML = " (" + cdn(_sl[_ci].dateAdded) + ")";
    document.getElementById("bd").innerHTML = JSON.stringify(_sl[_ci].bd);
    document.getElementById("bdnConverted").innerHTML = " (" + cdn(_sl[_ci].bd[0]) +")";
    document.getElementById("email").innerHTML = _sl[_ci].email;
    document.getElementById("photo").innerHTML = _sl[_ci].photo;
    document.getElementById("notes").innerHTML = JSON.stringify(_sl[_ci].notes);
    document.getElementById("pts").innerHTML = JSON.stringify(_sl[_ci].pts);
    document.getElementById("gamePts").innerHTML = JSON.stringify(_sl[_ci].gamePts);
    document.getElementById("rank").innerHTML = JSON.stringify(_sl[_ci].rank);
    document.getElementById("rankConverted").innerHTML = " (" + _rankNamesShort[_sl[_ci].rank[0]] + ")";
    document.getElementById("att").innerHTML = _sl[_ci].att;
    document.getElementById("attArr").innerHTML = JSON.stringify(_sl[_ci].attArr);
    document.getElementById("promo").innerHTML = JSON.stringify(_sl[_ci].promo);
    document.getElementById("randDraw").innerHTML = JSON.stringify(_sl[_ci].randDraw);
    document.getElementById("as").innerHTML = JSON.stringify(_sl[_ci].as);
    document.getElementById("mv").innerHTML = JSON.stringify(_sl[_ci].mv);
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
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "#3478F6";
                } else {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "lawngreen";
                }
            } else {
                document.getElementById(idArray2[i]+j).style.backgroundColor = "black";
            }
        }
    }
    for (let i = 0; i < variableArray.length; i++) {
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
    document.getElementById("rankProgressTableP").innerHTML = "Rank Progress: " + (_sl[_ci].rank[0] + 1) + "/20" + " (" + rankPercentage + "%)";
    document.getElementById("totalProgressTableP").innerHTML = "Total Pts: " + totalEarnedPts + "/" + totalPts + " (" + totalPtsPercentage + "%)";
    document.getElementById("asProgressTableP").innerHTML = "Activity Sheet Pts: " + earnedASpts + "/" + totalASpts + " (" + asPercentage + "%)";
    document.getElementById("mvProgressTableP").innerHTML = "Memory Verse Pts: " + earnedMVpts + "/" + totalMVpts + " (" + mvPercentage + "%)";
    document.getElementById("attProgressTableP").innerHTML = "Attendance: " + weeksAttended + "/" + _elapsedWeeks + " (" + attPercentage + "%)";
    document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + totalPercentage + "%)";
}

function populateMissions() {
    document.getElementById("asPop").innerHTML = "";
    document.getElementById("mvPop").innerHTML = "";
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
            document.getElementById("asPop").append(div1);
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
            document.getElementById("mvPop").append(div2);
        }
    }
}

function loadStudentPhoto() {
    document.getElementById("dispStudentPhoto").style.backgroundImage = "none";
    if (_sl[_ci].photo === true) {
        document.getElementById("dispStudentPhoto").style.backgroundImage = "url(img/student-thumbnails/"+_sl[_ci].name[0].split(" ")[0].toLowerCase()+"-"+_sl[_ci].name[0].split(" ")[1].toLowerCase()+".jpeg)";
        document.getElementById("dispStudentPhoto").innerHTML = "";
    } else {
        document.getElementById("dispStudentPhoto").innerHTML = "click here to add photo";
    }
}

function photoLinks() {
    if (_sl[_ci].photo === false) {
        actionAlert("Load photo for<br>" + _sl[_ci].name[0] + "?",["editStudentPop"],loadPhoto);
    } else {
        window.open("img/students/"+_sl[_ci].name[0].split(" ")[0].toLowerCase()+"-"+_sl[_ci].name[0].split(" ")[1].toLowerCase()+".jpeg");
    }
}

function loadPhoto() {
    if (_sl[_ci].photo === false) {_sl[_ci].photo = true}
    loadStudentPhoto(); refreshStudentPop(); allAlerts(); storeAndBackup();         
}

/* function doesFileExist(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            return true;
        } else {
            return false;
        }
      }
    }
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    }
    xhr.send(null);
} */

function loadRankTable() {
    pop(["studentStatsPop"],["rankChartPop"]);
    for (let i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
        document.getElementById("rankChartInsignia"+i).style.cursor = "pointer";
        document.getElementById("rankChartRank"+i).innerHTML = _rankNames[i];
        document.getElementById("rankChartAbbreviation"+i).innerHTML = _rankNamesShort[i];
        document.getElementById("rankChartPts"+i).innerHTML = _rankPts[i];
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
                    document.getElementById("as"+i+"Pop").style.display = "block"
                } else {
                    document.getElementById("as"+i+"Pop").style.display = "none"
                }
                if (_sl[_ci].mv[i][0] < _mvMaxPts[i]) {
                    document.getElementById("mv"+i+"Pop").style.display = "block"
                } else {
                    document.getElementById("mv"+i+"Pop").style.display = "none"
                }
            }
        } else {
            for (let i = 0; i < (_elapsedWeeks-2); i++) {
                document.getElementById("as"+i+"Pop").style.display = "block";
                document.getElementById("mv"+i+"Pop").style.display = "block";
            }
        }
    }
}

function resetMissions() {
    if (_elapsedWeeks > 1) {
        for (let i = 0; i < (_elapsedWeeks-2); i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
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

function compareAtt() {
    for (let j = 0; j < _dns.length; j++) {    
        var invididualWeekArrayAM = [];
        var invididualWeekArrayPM = [];
        for (let i = 0; i < _sl.length; i++) {
            invididualWeekArrayAM.push(_sl[i].attArr[j][0])
            invididualWeekArrayPM.push(_sl[i].attArr[j][1])
        }
        if (sumArray(invididualWeekArrayAM) != _att[j][0]) {
            console.log("Week " + j + " AM attendance " + sumArray(invididualWeekArrayAM) + " vs " + _att[j][0])
        } 
        if (sumArray(invididualWeekArrayPM) != _att[j][1]) {
            console.log("Week " + j + " PM attendance " + sumArray(invididualWeekArrayPM) + " vs " + _att[j][1])
        } 
    }
}

function listAttendees(m,d) {
    var AM = []; var PM = [];
    index = _dns.indexOf(assignDn(m,d));
    for (let i = 0; i < _sl.length; i++) {
        if (_sl[i].attArr[index][0] == 1) {
            AM.push(_sl[i].name[0]);
        }
        if (_sl[i].attArr[index][1] == 1) {
            PM.push(_sl[i].name[0]);
        }
    }
    console.log(AM); console.log(PM);
}

function loadAttStats() {
    var amArray = []; var pmArray = []; var bothArray = [];
    var amBoysArray = []; var pmBoysArray = []; var amGirlsArray = []; var pmGirlsArray = [];
    var amPmBoysArray = []; var amPmGirlsArray = [];
    var elapsedWeeks;
    if (_isClassDay === true && dateAndTime("hours") < 18) {
        elapsedWeeks = _elapsedWeeks -1;
    } else {
        elapsedWeeks = _elapsedWeeks;
    }
    for (let i = 0; i < elapsedWeeks; i++) {
        amArray.push(_att[i][0]);
        pmArray.push(_att[i][1]);
        bothArray.push(_att[i][0] + _att[i][1]);
    }
    for (let i = 0; i < _sl.length; i++) {
        for (let j = 0; j < elapsedWeeks; j++) {
            if (_sl[i].attArr[j][0] > 0) {
                if (_sl[i].gender == "M") {
                    amBoysArray.push(_sl[i].attArr[j][0]);
                    amPmBoysArray.push(_sl[i].attArr[j][0]);
                } else {
                    amGirlsArray.push(_sl[i].attArr[j][0]);
                    amPmGirlsArray.push(_sl[i].attArr[j][0]);
                }
            }
            if (_sl[i].attArr[j][1] > 0) {
                if (_sl[i].gender == "M") {
                    pmBoysArray.push(_sl[i].attArr[j][1]);
                    amPmBoysArray.push(_sl[i].attArr[j][1]);
                } else {
                    pmGirlsArray.push(_sl[i].attArr[j][1]);
                    amPmGirlsArray.push(_sl[i].attArr[j][1]);
                }
            }
        }
    }
    document.getElementById("amAvg").innerHTML = averageArray(amArray);
    document.getElementById("pmAvg").innerHTML = averageArray(pmArray);
    document.getElementById("bothAvg").innerHTML = averageArray(bothArray);
    document.getElementById("amMax").innerHTML = Math.max(...amArray);
    document.getElementById("pmMax").innerHTML = Math.max(...pmArray);
    document.getElementById("bothMax").innerHTML = Math.max(...bothArray);
    document.getElementById("amMin").innerHTML = Math.min(...amArray);
    document.getElementById("pmMin").innerHTML = Math.min(...pmArray);
    document.getElementById("bothMin").innerHTML = Math.min(...bothArray);
    document.getElementById("amBoysAvg").innerHTML = Math.round((sumArray(amBoysArray))/elapsedWeeks);
    document.getElementById("pmBoysAvg").innerHTML = Math.round((sumArray(pmBoysArray))/elapsedWeeks);
    document.getElementById("bothBoysAvg").innerHTML = Math.round((sumArray(amPmBoysArray))/elapsedWeeks);
    document.getElementById("amGirlsAvg").innerHTML = Math.round((sumArray(amGirlsArray))/elapsedWeeks);
    document.getElementById("pmGirlsAvg").innerHTML = Math.round((sumArray(pmGirlsArray))/elapsedWeeks);
    document.getElementById("bothGirlsAvg").innerHTML = Math.round((sumArray(amPmGirlsArray))/elapsedWeeks);
    for (i = 0; i < amArray.length; i++) {
        document.getElementById("attDate"+i).innerHTML = cdn(_dns[i]);
        document.getElementById("attAM"+i).innerHTML = _att[i][0];
        document.getElementById("attPM"+i).innerHTML = _att[i][1];
        document.getElementById("attBoth"+i).innerHTML = _att[i][0] + _att[i][1];
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
    for (let i = 0; i < 34; i++) {
        if (i < _elapsedWeeks) {
            document.getElementById("attRow"+i).style.display = "table-row";
        } else {
            document.getElementById("attRow"+i).style.display = "none";
        }
    }
    pop(["mainMenuPop"],["attStatsPop"]);
}

function loadStudentAttStats() {
    for (let i = 0; i < _elapsedWeeks; i++) {
        document.getElementById("studentAttDate"+i).innerHTML = cdn(_dns[i]);
        if (_sl[_ci].attArr[i][0] == 1) {
            document.getElementById("studentAttAM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttAM"+i).innerHTML = "";
        }
        if (_sl[_ci].attArr[i][1] == 1) {
            document.getElementById("studentAttPM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttPM"+i).innerHTML = "";
        }
        if (_sl[_ci].attArr[i][0] == 0 && _sl[_ci].attArr[i][1] == 0) {
            document.getElementById("studentAttDate"+i).style.color = "red";
        } else {
            document.getElementById("studentAttDate"+i).style.color = "lawngreen";
        }
    }
    for (let i = 0; i < 34; i++) {
        if (i < _elapsedWeeks) {
            document.getElementById("studentAttRow"+i).style.display = "table-row";
        } else {
            document.getElementById("studentAttRow"+i).style.display = "none";
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

function assignClassDns() {
    var cumulative = [153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [153,184,213,244,274,305,335,0,31,61,92,122];
    var months = [8,8,9,9,9,10,10,10,10,10,11,11,12,12,12,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5];
    var dates = [22,29,12,19,26,3,10,17,24,31,7,14,5,12,19,9,16,23,30,6,13,20,27,6,13,20,27,3,10,24,1,8,15,22];
    var dns1 = []; var dns2 = [];
    for (let i = 0; i < months.length; i++) {
        if (months[i] >= 8) {
            dns1.push(cumulative[months[i]-1] + dates[i]);
        }
        if (months[i] < 8) {
            if (_leapYear === true) {
                dns2.push(cumulativeLeap[months[i]-1] + dates[i]);
            } else {
                dns2.push(cumulative[months[i]-1] + dates[i]);
            }
        }
    }
    var dnsCombined = dns1.concat(dns2);
    console.log(dnsCombined);
}

function allEmailsOnFile() {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            _sl[i].email = "on file"
        }
    } 
    storeAndBackup();
}

function batchFilterSL(property,value) {
    var count = 0;
    for (let i = 0; i < _sl.length; i++) {
        if(_sl[i][property] == value) {
            console.log(_sl[i].name[0]); count++;
        } 
    }
    if (count == 0) { 
        console.log("no results");
    } else { 
        console.log(count + " MATCHES / " + (_sl.length - count) + " NON-MATCHES");
    }
}

function batchDisplaySL(property) {
    for (let i = 0; i < _sl.length; i++) {
        console.log(_sl[i].name[0] + ": " + _sl[i][property]);
    }
    var values = [];
    var occurrences = [];
    for (let i = 0; i < _sl.length; i++) {
        if (values.indexOf(_sl[i][property]) < 0) {
            values.push(_sl[i][property]); occurrences[values.indexOf(_sl[i][property])] = 1;
        } else {
            occurrences[values.indexOf(_sl[i][property])]++
        }
    }
    for (let i = 0; i < values.length; i++) {
        console.log(values[i] + "(" + occurrences[i] + ")")
    }
}

function displayStudentProperties(full) {
    var result = false;
    for (let i = 0; i < _sl.length; i++) {
        if(_sl[i]["name"][0] == full) {
            result = true;
            for (let x in _sl[i]) {
                if (typeof _sl[i][x] !== "object") {
                    console.log(x + ": " + _sl[i][x]); 
                }
            }
            for (let x in _sl[i]) {
                if (typeof _sl[i][x] === "object") {
                    console.log(x + ":");
                    console.log(_sl[i][x]);
                }
            }
            break;
        }
    }
    if (result === false) { 
        console.log("The student " + full + " was not found.") 
    }
}

function batchEditObjectSpecial1(objectName) {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            var array = [];
            for (var x in _sl[i][objectName]) {
                array.push(_sl[i][objectName][x]);
            } // creates an array of all values from student.as
            if (array[16] == 6) {
                array[16] = 3;
                array.splice(16,0,3) // if student earned full credit for jn-14-15, assign full credit (3) to jn-14 (now index 16) and full credit (3) to jn-15 (now index 17)
            } else {
                array.splice(16,0,0) // if student earned no pts for jn-14-15, assign 0 pts to jn-14 and jn-15
            }
            for (let j = 0; j < 32; j++) {
                _sl[i][objectName][j] = array[j]
            } // overwrite student.as with properties 0-31 with values from the respective indices from array
        }
        storeAndBackup();
    }
}

function batchEditObjectSpecial2(objectName) {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            for (let j = 0; j < 35; j++) {
                _sl[i].att[j] = [_slOLD[i].amATT[j],_slOLD[i].pmATT[j]]
            }
        }
        batchDeleteProperty("asDates");
        batchDeleteProperty("mvDates");
    }   
    storeAndBackup();
}

function batchEditArray1() {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _slOLD.length; i++) {
            for (let j = 0; j < 34; j++) {
                _sl[i].attArr[j] = [_slOLD[i].amAtt[j],_slOLD[i].pmAtt[j]];
            }
        }
        storeAndBackup();
    }
}

function batchEditArray2() {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            for (let j = 30; j > 16; j--) {
                _sl[i].asReas[j+1] = _sl[i].asReas[j];
                if (j == 17) { _sl[i].asReas[j] = "" }
            }
        }
        storeAndBackup();
    }
}

function batchDeleteProperty(propertyName) {
    var doesntExist = []; var count = 0;
    for (let i = 0; i < _sl.length; i++) {
        if (typeof _sl[i][propertyName] === "undefined") {
            doesntExist.push(_sl[i])
        }
    }
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            if (typeof _sl[i][propertyName] !== "undefined") {
                delete _sl[i][propertyName]; count++
            }
        }
    }
    console.log("The property '" + propertyName + "' has been deleted from " + count + " out of " + _sl.length + " students");
    if (doesntExist.length > 0) {
        console.log(doesntExist.length + " students did not have property and were skipped:")
        for (let i = 0; i < doesntExist.length; i++) {
            console.log(doesntExist[i].name[0])
        }
    }
    storeAndBackup();
}

function batchDeletePropertyQuick(propertyNames) {
    array = propertyNames;
    for (let i = 0; i < _sl.length; i++) {
        for (let j = 0; j < array.length; j++) {
            delete _sl[i][array[j]];
        }
    }
    storeAndBackup();
}

function batchAddProperty(propertyName,value) {
    if (!value) {
        console.log("initial property value required"); return;
    }
    var alreadyExists = []; var count = 0;
    for (let i = 0; i < _sl.length; i++) {
        if (typeof _sl[i][propertyName] !== "undefined") {
            alreadyExists.push(_sl[i])
        }
    }
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            if (typeof _sl[i][propertyName] === "undefined") {
                _sl[i][propertyName] = value; count++
            }
        }
    }
    console.log("The property '" + propertyName + "' has been added to " + count + " out of " + _sl.length + " students");
    if (alreadyExists.length > 0) {
        console.log(alreadyExists.length + " students already had this property and were skipped. To ensure this property's value is the same for all students, use 'batchEditSL' now:")
        for (let i = 0; i < alreadyExists.length; i++) {
            console.log(alreadyExists[i].name[0] + " '" + propertyName + "': " + alreadyExists[i][propertyName])
        }
    }
    storeAndBackup();
}

function batchEditProperties(propertyName,value) {
    var count = 0; var hasProperty = 0;
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            if (typeof(_sl[i][propertyName]) !== "undefined") {
                hasProperty++
            }
        }
        if (hasProperty < _sl.length) {
            console.log("'" + propertyName + "' does not exist for one or more students. Use 'batchAddProperty' instead to add/overwrite this property for all students"); return;
        }
        for (let i = 0; i < _sl.length; i++) {
            _sl[i][propertyName] = value; count++
        }
    }
    console.log("The property '" + propertyName + "' has been changed to the " + typeof(value) + " '" + value + "' for " + count + " out of " + _sl.length + " students");
    storeAndBackup();
}

function editProperty(full,property,newValue) {
    var result1 = false; var result2 = false;
    for (let i = 0; i < _sl.length; i++) {
        if(_sl[i]["full"] == full) {
            result1 = true; 
            if(typeof _sl[i][property] !== "undefined") {
                result2 = true; _sl[i][property] = newValue;
            } break;
        }
    }
    if (result1 === false) { 
        console.log("The student " + full + " was not found.") 
    }
    if (result1 === true && result2 === false) { 
        console.log("The property '" + property + "' was not found for " + full ) 
    }
    if (result1 === true && result2 === true) {
        console.log("The property '" + property + "' was changed to the " + typeof(newValue) + " '" + newValue + "' for " + full) 
    }
    storeAndBackup();
}

function allPhotosTrue() {
    batchEditSL("photo",true)
}

function allBdsFalse() {
    if (confirm("Confirm batch action") == true) {
        for (let i = 0; i < _sl.length; i++) {
            _sl[i].bd[1] = false;
            _sl[i].bd[2] = false;
        }
        storeAndBackup();
    }
}

function pressKey(key,id) {
    if(event.keyCode==key)document.getElementById(id).click()
}

whatToLoad();

document.getElementById("searchMain").focus();