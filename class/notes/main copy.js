var _sl = []; //student list - array where all student objects are stored and accessed
var _ci; //current index of _sl array
var _asNum; //activity sheet number
var _mvNum; //memory verse number
var _asPoints; //asPoints() stores the point value here if less than max points for when the function is called again after entering a reason
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,6]; //max points possible for each activity sheet
var _asReasons = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3,0]; //max points possible for each memory verse
var _leapYear = false; //used to determine whether Feb has 29 or 29 days for purposes of upcoming birthday alerts
var _weeksOff = 0; //used to determine when alerts for upcoming birthdays appear if class will not meet for 1-2 weeks
var _noteIndex; //selected note index of notes array
var _teacherNotes = []; //array where teacher notes are stored
var _teacherNoteIndex; //selected note index of teacherNotes array
var _log = ""; //activity log
var _gameLog = ""; 
var _currentPops; //used to store an array of which Pop divs are visible when infoAlert() is called
var _currentPops2; //used to store an array of which Pop divs are visible when dataInputAlert() is called
var _sharedPop; //used if the back button may one of two or more Pops
var _populateNotesID = []; //used to determine which pops to return to after notesPop back button is clicked
var _focus; //stores text field id that focus() is called on when infoAlertPop is dismissed with the back button
var _currentFunction; //used to store a function so various other functions can use it
var _eligibleRandom; //used to store an array of eligble names for random selection
var _teams = []; //an array containing a single team object with key/value pairs (rather than defining individual global variables)
var _dataInputParameter; //if dataInputAlert() needs to pass a parameter to the formula it calls when user clicks OK, it is stored here
var _checkedState = []; //array where checkbox value for each mission's visibility is stored
var _amAtt = []; //stores total AM attendance number for each week
var _pmAtt = []; //stores total PM attendance number for each week
var _elapsedWeeks = 1; //number of class sessions to date
var _classDates = ["8/22", "8/29", "9/12", "9/19", "9/26", "10/3", "10/10", "10/17", "10/24", "10/31", "11/7", "11/14", "12/5", "12/12", "12/19", "1/9", "1/16", "1/23", "1/30", "2/6", "2/13", "2/20", "2/27", "3/6", "3/13", "3/20", "3/27", "4/3", "4/10", "4/24", "5/1", "5/8", "5/15", "5/22"];
var _dateNumbers = [234, 241, 255, 262, 269, 276, 283, 290, 297, 304, 311, 318, 339, 346, 353, 1009, 1016, 1023, 1030, 1037, 1044, 1051, 1058, 1065, 1072, 1079, 1086, 1093, 1100, 1114, 1121, 1128, 1135, 1142]; //unique numbers assinged to each class date
var _isClassDay; //if false, attendance-related functions will not alter the student's attCount array values
var _studentPhotoExists; //if true, Photo button displays green on StudentPop, otherwise it displays red
var _rankNamesAbbr = ["PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAJ","LTC","COL","BG","MG","LTG","GEN","GOA"];
var _rankNames = ["Private","Private First Class","Corporal","Sergeant","Staff Sergeant","Sergeant First Class","Master Sergeant","Sergeant Major","Command Sergeant Major","Second Lieutenant","First Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","General of the Army"];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword","armor-review"]; //activity sheet names
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8",
"phil-2-9","phil-2-10-11","rom-8-31","rom-8-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"]; //memory verse names
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

/* INDEX + RANK / POINTS / RANK FACTOR
0 PVT / 0
1 PFC / 10
2 CPL / 20
3 SGT / 30
4 SSG / 40
5 SFG / 50
6 MSG / 60
7 SGM / 70
8 CSM / 80
9 2LT / 100
10 1LT / 110
11 CPT / 120
12 MAJ / 130
13 LTC / 140
14 COL / 150 / 1
15 BG / 170 / 1
16 MG / 180
17 LTG / 190
18 GEN / 200 / 2
19 GOA / 220 / 2
*/

class Student {
    constructor(first,last,month,date,email1,email2,gender,note) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = first + " " + last;
        this.gender = gender;
        this.birthdayMonth = month; //1-12 or 0 if birthday unknown
        this.birthdayDate = date; //1-31 or 0 if birthday unknown
        this.birthdayNumber = month + date;
        this.birthday = month + "/" + date;
        this.hasBirthday = false; //has birthday today or before next class
        this.birthdayDone = false; //birthday has been announced in class (and thus will no longer be indicated anywhere in the UI)
        this.birthdayLogged = false;
        this.email1 = email1; //primary email
        this.email2 = email2; //secondary email
        this.notes = note; //array where student notes are stored
        this.points = 0; //total, cumulative points earned year to date
        this.classRank = 0; //rank in class based on total points
        this.rank = 0; //0 is PVT; 19 is GOA
        this.rankFactor = 0; //compensates for 20 point promotions in asPoints and mvPoints functions
        this.rankName = "PVT"
        this.attendance = false; //student is in attendance today
        this.amAttCount = []; //AM attendance per week (0 = absent; 1 = present)
        this.pmAttCount = []; //PM attendance per week (0 = absent; 1 = present)
        this.promoted = false; //student has earned a promotion
        this.promotionNum = 0; //number of promotions accumulated (in case student is absent for promotion ceremony)
        this.drawing = false; //has been picked in drawing (if true, then inelligble to be picked again until stats are reset)
        this.random = false; //has been picked using random name selector (will not be picked again until all other names have been picked)
        this.asReasons = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
        this.as = { //activity sheet number: points
            0: 0, //class-intro
            1: 0, //john-intro
            2: 0, //john-1
            3: 0, //john-2
            4: 0, //john-3
            5: 0, //john-4
            6: 0, //john-5
            7: 0, //john-6
            8: 0, //john-7
            9: 0, //john-8
            10: 0, //john-9
            11: 0, //john-1-9-review
            12: 0, //john-10
            13: 0, //john-11
            14: 0, //john-12
            15: 0, //john-13
            16: 0, //john-14
            17: 0, //john-15
            18: 0, //john-16
            19: 0, //john-17
            20: 0, //john-18
            21: 0, //john-19
            22: 0, //john-20
            23: 0, //john-21
            24: 0, //john-10-21-review
            25: 0, //armor-intro
            26: 0, //belt
            27: 0, //breastplate
            28: 0, //shoes
            29: 0, //shield
            30: 0, //helmet
            31: 0, //sword
            32: 0, //armor-review
        };
        this.mv = { //memory verse number: points
            0: 0, //ps-139-17-18
            1: 0, //jn-20-30-31
            2: 0, //jn-1-1-2
            3: 0, //jn-1-3
            4: 0, //jn-1-4-5
            5: 0, //jn-1-6-8
            6: 0, //jn-1-9-11
            7: 0, //jn-1-12-13
            8: 0, //jn-1-14
            9: 0, //jn-1-15
            10: 0, //jn-1-16-17
            11: 0, //jn-1-18
            12: 0, //phil-2-5-6
            13: 0, //phil-2-7
            14: 0, //phil-2-8
            15: 0, //phil-2-9
            16: 0, //phil-2-10-11
            17: 0, //rom-8-31
            18: 0, //rom-8-32
            19: 0, //rom-8-33
            20: 0, //rom-8-34
            21: 0, //rom-8-35
            22: 0, //rom-8-36
            23: 0, //rom-8-37
            24: 0, //rom-8-38-39
            25: 0, //eph-6-10-11
            26: 0, //eph-6-12
            27: 0, //eph-6-13
            28: 0, //eph-6-14-15
            29: 0, //eph-6-16
            30: 0, //eph-6-17
            31: 0, //eph-6-18
        };
    };
};

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
    };
};

function skipPlayer() {
    if (_teams[0].currentTeam == 1) {
        var log = _teams[0].team1[0].fullName + " skipped";
        _teams[0].team1.shift();
        if (_teams[0].team1.length == 0) {
            for (i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            };
        };
        _teams[0].currentPlayer = _teams[0].team1[0].fullName;
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0].fullName + "</span>";
    } else {
        var log = _teams[0].team2[0].fullName + " skipped";
        _teams[0].team2.shift();
        if (_teams[0].team2.length == 0) {
            for (i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            };
        };
        _teams[0].currentPlayer = _teams[0].team2[0].fullName;
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0].fullName + "</span>";
    };
    gameActivityLog(log,false,"red");
    storeNewData();
};

function gameScorePoints(x) {
    _teams[0].undoGamePts = x;
    _teams[0].undoLimit = false;
    if (_teams[0].currentTeam == 1) {
        var log1 = _teams[0].team1[0].fullName + " +" + x + " pts team 1 (" + _teams[0].team1Score + "-->" + (_teams[0].team1Score + x) + ")";
        _teams[0].team1Score += x;
        document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
        _teams[0].currentTeam ++;
        _teams[0].undoCurrentPlayer = _teams[0].team1[0];
        _teams[0].undoTeam = 1;
        _teams[0].team1.shift();
        _teams[0].currentPlayer = _teams[0].team2[0].fullName;
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0].fullName + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        if (_teams[0].team1.length == 0) {
            for (i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            };
        };
        gameActivityLog(log1,false,"lawngreen");
        storeNewData();
    } else {
        var log2 = _teams[0].team2[0].fullName + " +" + x + " pts team 2 (" + _teams[0].team2Score + "-->" + (_teams[0].team2Score + x) + ")";
        _teams[0].team2Score += x;
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].currentTeam --;
        _teams[0].undoCurrentPlayer = _teams[0].team2[0];
        _teams[0].undoTeam = 2;
        _teams[0].team2.shift();
        _teams[0].currentPlayer = _teams[0].team1[0].fullName;
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0].fullName + "</span>";
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
        if (_teams[0].team2.length == 0) {
            for (i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            };
        };
        gameActivityLog(log2,false,"yellow");
        storeNewData();
    };
    for (i = 1; i < 11; i++) {
        if (i == x) {
            document.getElementById("gamePoint"+i).style.backgroundColor = "midnightblue";
        } else {
            document.getElementById("gamePoint"+i).style.backgroundColor = "black";
        };
    };
};

function undoGameScorePoints() {
    if (_teams[0].undoLimit === true) {
        infoAlert("Cannot undo more than one score in a row",["playGamePop"]); return;
    } else {
        _teams[0].undoLimit = true;
    };
    if (_teams[0].currentTeam == 1) {
        var log1 = "UNDO " + _teams[0].undoCurrentPlayer.fullName + " -" + _teams[0].undoGamePts + " pts team 2 " + "(" + _teams[0].team2Score + "-->" + (_teams[0].team2Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 2;
        _teams[0].team2Score -= _teams[0].undoGamePts;
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].team2.unshift(_teams[0].undoCurrentPlayer);
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0].fullName + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        gameActivityLog(log1,false,"red");
    } else if (_teams[0].currentTeam == 2) {
        var log2 = _teams[0].undoCurrentPlayer.fullName + " -" + _teams[0].undoGamePts + " pts team 1 " + "(" + _teams[0].team1Score + "-->" + (_teams[0].team1Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 1;
        _teams[0].team1Score -= _teams[0].undoGamePts;
        document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
        _teams[0].team1.unshift(_teams[0].undoCurrentPlayer);
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0].fullName + "</span>";
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
        gameActivityLog(log2,false,"red");
    };
    storeNewData();
};

function teams() {
    var attCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
            attCount++
        };
    };
    if (_teams != "") {
        populateTeams();
        pop(["mainMenuPop"],["teamsListPop"]);
    } else if (attCount < 2) {
        infoAlert("At least two students must be in attendance to create teams",["mainMenuPop"]);
    } else {
        createTeams();
        populateTeams();
        pop(["mainMenuPop"],["teamsListPop"]);
    };
};

function createTeams() {
    _teams.pop();
    var teamObject = new Teams; _teams.push(teamObject);
    _teams[0].team1Reset = []; _teams[0].team2Reset = [];
    _teams[0].team1Score = 0; _teams[0].team2Score = 0
    document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
    document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
    var attendees = [];
    for (i = 0; i <_sl.length; i++) {
        if (_sl[i].attendance === true) {
            attendees.push(_sl[i])
        };
    };
    shuffleArray(attendees);
    if (attendees.length % 2 == 0) {
        for (i = 0; i < attendees.length; i++) {
            if (i < (attendees.length / 2)) {
                teamObject.team1.push(attendees[i]);
                teamObject.team1Reset.push(attendees[i]);
            } else {
                teamObject.team2.push(attendees[i]);
                teamObject.team2Reset.push(attendees[i]);           
            };
        };
    } else if (attendees.length % 2 == 1) {
        for (i = 0; i < attendees.length; i++) {
            if (i < ((attendees.length - 1) / 2)) {
                teamObject.team1.push(attendees[i]);
                teamObject.team1Reset.push(attendees[i]);
             } else {
                teamObject.team2.push(attendees[i]);
                teamObject.team2Reset.push(attendees[i]);
            };
        };
    };
    _teams[0].currentPlayer = _teams[0].team1[0].fullName;
    for (i = 1; i < 11; i++) {
        document.getElementById("gamePoint"+i).style.backgroundColor = "black";
    };
    document.getElementById("gameLog").innerHTML = "";
    populateTeams();
    storeNewData();
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};

function populateTeams() {
    document.getElementById("team1List").innerHTML = "";
    document.getElementById("team2List").innerHTML = "";
    for (i = 0; i < _teams[0].team1Reset.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name2");
        var textNode = document.createTextNode(_teams[0].team1Reset[i].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("team1List").appendChild(elementNode);
    };  
    for (i = 0; i < _teams[0].team2Reset.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name2");
        var textNode = document.createTextNode(_teams[0].team2Reset[i].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("team2List").appendChild(elementNode);
    };
};

function loadGame() {
    if (_teams[0].currentTeam == 1) {
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
    } else {
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
    };
    document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
    document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
    if (_teams[0].undoTeam != _teams[0].currentTeam) {
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].currentPlayer + "</span>";
    } else {
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].undoCurrentPlayer.fullName + "</span>";
    };
    pop(["teamsListPop"],["playGamePop"]);
};

function adjustGameScore(parameter,data) {
    var original
    if (parameter == 1) { 
        original = _teams[0].team1Score;
        _teams[0].team1Score = data;
    } else { 
        original = _teams[0].team2Score
        _teams[0].team2Score = data;
    };
    document.getElementById("team"+parameter+"Score").innerHTML = data;
    var log1 = "Team " + parameter.toString() + " points set " + original + "-->" + data;
    gameActivityLog(log1,false,"orange");
    storeAndBackup();
};

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

function activityLog(log1,log2,color,background) {
    var paragraph = document.createElement("p");
    var lineBreak = document.createElement("br");
    if (color) {
        paragraph.style.color = color;
    };
    if (background) {
        paragraph.style.background = background;
    };
    paragraph.classList.add("logEntry");
    var textNode1 = document.createTextNode(log1);
    var textNode2 = document.createTextNode(log2);
    if (log2) {
        paragraph.appendChild(textNode1);
        paragraph.appendChild(lineBreak);
        paragraph.appendChild(textNode2);
        document.getElementById("log").appendChild(paragraph);
    } else {
        paragraph.appendChild(textNode1);
        document.getElementById("log").appendChild(paragraph);
    };
    _log = document.getElementById("log").innerHTML;
    storeNewData();
};

function gameActivityLog(log1,log2,color,background) {
    var paragraph = document.createElement("p");
    var lineBreak = document.createElement("br");
    if (color) {
        paragraph.style.color = color;
    };
    if (background) {
        paragraph.style.background = background;
    };
    paragraph.classList.add("logEntry");
    var textNode1 = document.createTextNode(log1);
    var textNode2 = document.createTextNode(log2);
    if (log2) {
        paragraph.appendChild(textNode1);
        paragraph.appendChild(lineBreak);
        paragraph.appendChild(textNode2);
        document.getElementById("gameLog").appendChild(paragraph);
    } else {
        paragraph.appendChild(textNode1);
        document.getElementById("gameLog").appendChild(paragraph);
    };
    _gameLog = document.getElementById("gameLog").innerHTML;
    storeNewData();
};

function attCount() {
    var attCount = 0
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
            attCount++;
        };
    };
    document.getElementById("attCountButton").innerHTML = attCount;
    document.getElementById("attCount").innerHTML = attCount;
};

function ampmAttendance() {
    var today = new Date();
    var attCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
            attCount++
        };
    };
    if (today.getHours() < 14) {
        _amAtt[_checkedState.length] = attCount;
    } else {
        _pmAtt[_checkedState.length] = attCount;
    };
    storeAndBackup();
};

function loadAttendees() {
    attCount();
    document.getElementById("boysListAtt").innerHTML = "";
    document.getElementById("girlsListAtt").innerHTML = "";
    document.getElementById("boysListAttP").innerHTML = "";
    document.getElementById("girlsListAttP").innerHTML = "";
    var boys = [];
    var girls = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M" && _sl[i].attendance === true) {
            boys.push(_sl[i].fullName);
        } else if (_sl[i].gender == "F" && _sl[i].attendance === true) {
            girls.push(_sl[i].fullName);
        };
    };
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        document.getElementById("boysListAtt").appendChild(elementNode1);
    };  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        document.getElementById("girlsListAtt").appendChild(elementNode2);
    };  
    document.getElementById("boysListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListAttP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainPop"],["attListPop"]);
};

function loadArchiveAttendees(index,time) {
    document.getElementById("boysArchiveListAtt").innerHTML = "";
    document.getElementById("girlsArchiveListAtt").innerHTML = "";
    document.getElementById("boysArchiveListAttP").innerHTML = "";
    document.getElementById("girlsArchiveListAttP").innerHTML = "";
    var boys = [];
    var girls = [];
    if (time == "AM") {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].amAttCount[index] == 1) {
                boys.push(_sl[i].fullName);
            } else if (_sl[i].gender == "F" && _sl[i].amAttCount[index] == 1) {
                girls.push(_sl[i].fullName);
            };
        };
    } else {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].pmAttCount[index] == 1) {
                boys.push(_sl[i].fullName);
            } else if (_sl[i].gender == "F" && _sl[i].pmAttCount[index] == 1) {
                girls.push(_sl[i].fullName);
            };
        };
    };
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        document.getElementById("boysArchiveListAtt").appendChild(elementNode1);
    };  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        document.getElementById("girlsArchiveListAtt").appendChild(elementNode2);
    };  
    document.getElementById("boysArchiveListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsArchiveListAttP").innerHTML = "Girls (" + girls.length + ")";
    document.getElementById("attArchiveCount").innerHTML = boys.length + girls.length;
    document.getElementById("attArchiveDate").innerHTML = _classDates[index] + " " + time + " Attendance";
    pop(["attStatsPop"],["attArchiveListPop"]);
};

function attendanceList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    elementNode.classList.add("name");
    document.getElementById("attendanceList").appendChild(elementNode);
};

function resetAtt() {
    for (i = 0; i < _sl.length; i++) {
        if (_isClassDay === false) {
            _sl[i].attendance = false;
        } else {
            if (_sl[i].attendance === true && _sl[i].amAttCount[_checkedState.length] == 1) {
                _sl[i].amAttCount[_checkedState.length] = 0; _sl[i].attendance = false;
            } else if (_sl[i].attendance === true && _sl[i].pmAttCount[_checkedState.length] == 1) {
                _sl[i].pmAttCount[_checkedState.length] = 0;  _sl[i].attendance = false;
            };
        };
    };
    attCount();
    if (_isClassDay === true) { ampmAttendance(); };
    pop(["attListPop"],["mainPop"]);
    storeAndBackup();
};

function loadTodaysDate() {
    document.getElementById("todaysDate").style.fontSize = "15px";
    document.getElementById("todaysDate").innerHTML = Date();
}; // for top of activity log

function infoAlert(message,idArray,focus) {
    if (document.getElementById("infoAlertPop").style.display == "block") {
        document.getElementById("infoAlertPop").style.display = "none";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "block"
            };
        };
        document.getElementById("infoAlertMessage").innerHTML = "";
    } else if (document.getElementById("infoAlertPop").style.display != "block") {
        _currentPops = idArray;
        _focus = focus;
        document.getElementById("infoAlertPop").style.display = "block";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== null) {
                document.getElementById(_currentPops[i]).style.display = "none"
            };
        };
        document.getElementById("infoAlertMessage").innerHTML = message;
    };
    if (_focus) { document.getElementById(_focus).focus(); };
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
}; // Before a function which resets data is invoked, it is first channeled through the actionAlert function, which serves as a confirmation dialogue.  e.g. user clicks the <p> id="attCount" to reset attendance back to 0.  This invokes the actionAlert function the first time (A) with the following parameters: 1. a *message* (to display in the actionAlertPop), 2. an *id* (of the Pop that needs to disappear when the actionAlertPop appears), and 3. a func(tion) (which will be executed when the user clicks the "OK" button on the actionAlertPop).  A1: The id (and a second, optional id) is assigned to the global _currentPops array, and the function is assigned to the global _currentFunction.  A2: The actionAlertPop appears and the other pop(s) (id1 and id2) disappear.  A4 The message is assigned to the actionAlertPop.  The actionAlert function is called a second time when the user clicks on either the "OK" or "CANCEL" buttons on the actoinAlertPop.  If "OK" is clicked, then B1: the actionAlertPop disappears.  B2: the other pop(s) (id1 and id2) appear again (though they may not be seen if the function that is called next makes them disappear, but they will always be seen if the user clicks "CANCEL", since that bypasses the function call).  B3: the actionAlerPop message is cleared.  B4: the function is called (unless the bypass parameter is present, which it is when the actionAlert function is called from the "CANCEL" button).

function newStudent() {
    var firstLastArray = document.getElementById("newFirstAndLast").value.split("/");
    if (firstLastArray.length < 2) {
        infoAlert("Please enter first and last names separated by a &#47;",["newStudentPop"]); return;
    };
    var first = capitalize(firstLastArray[0]);
    var last = capitalize(firstLastArray[1]);
    var newBdayArray = document.getElementById("newBday").value.split("/");
    if (newBdayArray.length < 2) {
        var month = 0
        var date = 0
    } else {
        var month = parseInt(newBdayArray[0]);
        var date = parseInt(newBdayArray[1]);
    };
    if (document.getElementById("newEmail1").value == "") {
        var email1 = document.getElementById("newEmail1").value;
    } else {
        var email1 = document.getElementById("newEmail1").value.toLowerCase();
    };
    if (document.getElementById("newEmail1").value == "") {
        var email2 = document.getElementById("newEmail2").value;
    } else {
        var email2 = document.getElementById("newEmail2").value.toLowerCase();
    };
    if (document.getElementById("newGender").value.toLowerCase() == "m") {
        var gender = "M";
    } else if (document.getElementById("newGender").value.toLowerCase() == "f") {
        var gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["newStudentPop"]); return;
    };
    if (document.getElementById("initialNote").value == "") {
        var note = [];
    } else {
        var note = [document.getElementById("initialNote").value];
    };
    var newStudent = new Student(first,last,month,date,email1,email2,gender,note);
    newStudent.attendance = true;
    for (i = 0; i < _elapsedWeeks; i++) {
        newStudent.amAttCount.push(0);
        newStudent.pmAttCount.push(0);
    };
    var today = new Date();
    if (today.getHours() < 14) {
        newStudent.amAttCount[_checkedState.length] = 1;
    } else if (today.getHours() >= 14) {
        newStudent.pmAttCount[_checkedState.length] = 1;
    };
    _sl.push(newStudent);
    assignBdayNumber(_sl.length-1);
    sortStudentList();
    findBday();
    var log = "new student " + first + " " + last;
    activityLog(log,"","aqua");
    storeAndBackup();
    clearStudentFields()
    if (document.getElementById("rapidEntryCheck").checked === true) {
        document.getElementById("newFirstAndLast").focus();
        return;
    } else {
        pop(["newStudentPop"],["mainPop"]);
    };
};

function deleteStudent() {
    _sl.splice(_ci,1);
    attCount();
    storeAndBackup();
    sortStudentList();
    goHome();
};

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
};

function randomAtt() {
    today = new Date();
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = false;
    };
    randomIndex = Math.floor(Math.random()*(25-10)+10);
    for (i = 0; i < randomIndex; i++) {
        let x = Math.floor(Math.random() * _sl.length);
        if (_sl[x].attendance === false) {
            _sl[x].attendance = true;
        } else {
            i--
        };    
    };
    if (_isClassDay === true && today.getHours() < 14) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _amAtt[_checkedState.length] += 1;
                _sl[i].amAttCount[_checkedState.length] = 1;
            };
        }; 
    } else if (_isClassDay === true && today.getHours() >= 14) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _pmAtt[_checkedState.length] += 1;
                _sl[i].pmAttCount[_checkedState.length] = 1;
            };
        }; 
    };
    attCount();
    populateNames();
    storeNewData();
    pop(["attListPop"],["mainPop"]);
};

function randomAtt2(x) {
    today = new Date();
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = false;
    };
    for (i = 0; i < x; i++) {
        let x = Math.floor(Math.random() * _sl.length);
        if (_sl[x].attendance === false) {
            _sl[x].attendance = true;
        } else {
            i--
        };
    };
    if (_isClassDay === true && today.getHours() < 14) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _amAtt[_checkedState.length] += 1;
                _sl[i].amAttCount[_checkedState.length] = 1;
            };
        }; 
    } else if (_isClassDay === true && today.getHours() >= 14) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _pmAtt[_checkedState.length] += 1;
                _sl[i].pmAttCount[_checkedState.length] = 1;
            };
        }; 
    };
    attCount();
    populateNames();
    storeNewData();
}

function quickTeams(x) {
    randomAtt2(x);
    createTeams();
    pop(["mainPop"],["teamsListPop"]);
};

function allAtt() {
    today = new Date();
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = true;
    };
    if (_isClassDay === true && today.getHours() < 14) {
        for (i = 0; i < _sl.length; i++) {
            _amAtt[_checkedState.length] += 1;
            _sl[i].amAttCount[_checkedState.length] = 1;
        }; 
    } else if (_isClassDay === true && today.getHours() >= 14) {
        for (i = 0; i < _sl.length; i++) {
            _pmAtt[_checkedState.length] += 1;
            _sl[i].pmAttCount[_checkedState.length] = 1;
        }; 
    };
    attCount();
    populateNames();
    storeNewData();
};

function editStudent() {
    var firstLastArray = document.getElementById("editFirstAndLast").value.split("/");
    if (firstLastArray.length < 2) {
        infoAlert("Please enter first and last names separated by a &#47;",["editStudentPop"]); return;
    };
    _sl[_ci].firstName = capitalize(firstLastArray[0]);
    _sl[_ci].lastName = capitalize(firstLastArray[1]);
    _sl[_ci].fullName = capitalize(firstLastArray[0]) + " " + capitalize(firstLastArray[1]);
    var newBdayArray = document.getElementById("editBday").value.split("/");
    if (newBdayArray.length < 2) {
        _sl[_ci].birthdayMonth = 0;
        _sl[_ci].birthdayDate = 0;
        _sl[_ci].birthday = "0/0";
        _sl[_ci].hasBirthday = false;
    } else {
        _sl[_ci].birthdayMonth = parseInt(newBdayArray[0]);
        _sl[_ci].birthdayDate = parseInt(newBdayArray[1]);
        _sl[_ci].birthday = newBdayArray[0] + "/" + newBdayArray[1];
    };
    assignBdayNumber();
    if (document.getElementById("editEmail1").value == "") {
        _sl[_ci].email1 = document.getElementById("editEmail1").value;
    } else {
        _sl[_ci].email1 = document.getElementById("editEmail1").value.toLowerCase();
    };
    if (document.getElementById("editEmail1").value == "") {
        _sl[_ci].email2 = document.getElementById("editEmail2").value;
    } else {
        _sl[_ci].email2 = document.getElementById("editEmail2").value.toLowerCase();
    };
    if (document.getElementById("editGender").value.toLowerCase() == "m") {
        _sl[_ci].gender = "M";
    } else if (document.getElementById("editGender").value.toLowerCase() == "f") {
        _sl[_ci].gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["editStudentPop"]); return;
    };
    document.getElementById("dispName").innerHTML = _sl[_ci].fullName;
    document.getElementById("dispBday").innerHTML = "Birthday: "+_sl[_ci].birthday;
    refreshStudentPop();
    storeAndBackup();
    if (document.getElementById("rapidEditCheck").checked === true) {
        _ci++;
        if (_ci < _sl.length) {
            loadStudent(_ci); populateStudentFields();
        } else {
            pop(["editStudentPop","missionsPop"],["studentPop"]);
        };
    } else {
        pop(["editStudentPop"],["studentPop","missionsPop"]);
    };
};

function assignBdayNumber(x) {
    if (x) {
        _ci = x;
    };
    var cumulative = [0,0,31,59,90,120,151,181,212,243,273,304,334];
    var cumulativeLeap = [0,0,31,60,91,121,152,182,213,244,274,305,335];
    if (_leapYear) {
        _sl[_ci].birthdayNumber = cumulativeLeap[_sl[_ci].birthdayMonth] + _sl[_ci].birthdayDate;
    } else {
        _sl[_ci].birthdayNumber = cumulative[_sl[_ci].birthdayMonth] + _sl[_ci].birthdayDate;
    };
};

function refreshStudentPop() {
    findBday();
    if (_sl[_ci].attendance === true && _sl[_ci].promoted === false) {
        document.getElementById("dispName").style.color = "lawngreen";
    } else if (_sl[_ci].attendance === true && _sl[_ci].promoted === true) {
        document.getElementById("dispName").style.color = "yellow";
    } else {
        document.getElementById("dispName").style.color = "white";
    };
    if (_sl[_ci].hasBirthday === true) {
        document.getElementById("dispBday").style.backgroundColor = "darkgoldenrod";
    } else if (_sl[_ci].hasBirthday === false && _sl[_ci].birthdayMonth != 0 && _sl[_ci].birthdayDate != 0) {
        document.getElementById("dispBday").style.backgroundColor = "#111";
    } else {
        document.getElementById("dispBday").style.backgroundColor = "fireBrick";
    };
    if (_sl[_ci].firstName.includes(" ")) {
        var firstNameArray = _sl[_ci].firstName.split(" ");
        doesFileExist("https://ksgrade2.com/class/img/student-thumbnails/"+firstNameArray[0].toLowerCase()+"-"+firstNameArray[1].toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg");
    } else {
        doesFileExist("https://ksgrade2.com/class/img/student-thumbnails/"+_sl[_ci].firstName.toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg");
    }
    if (_sl[_ci].email1 == false && _sl[_ci].email2 == false) {
        document.getElementById("emailButton").style.background = "fireBrick";
    } else {
        document.getElementById("emailButton").style.background = "green";
    };
    if (_sl[_ci].notes == false) {
        document.getElementById("notesButton").style.background = "black";
    } else {
        document.getElementById("notesButton").style.background = "darkgoldenrod";
    };
};

function populateStudentFields(id) {
    pop(["studentPop","missionsPop"],["editStudentPop"]);
    if (id) {
        document.getElementById(id).focus();
    };
    document.getElementById("editFirstAndLast").value = _sl[_ci].firstName + "/" + _sl[_ci].lastName;
    document.getElementById("editBday").value = _sl[_ci].birthdayMonth.toString() + "/" + _sl[_ci].birthdayDate.toString();
    document.getElementById("editEmail1").value = _sl[_ci].email1;
    document.getElementById("editEmail2").value = _sl[_ci].email2;
    document.getElementById("editGender").value = _sl[_ci].gender;
};

function clearStudentFields() {
    var ids = ["newFirstAndLast","newGender","newBday","newEmail1","newEmail2","initialNote"];
    for (i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).value = "";
    };
};

function sortStudentList() {
    _sl.sort(function(a,b) {
        var textA = a.lastName.toLowerCase();
        var textB = b.lastName.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    populateNames();
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

function setPoints(parameter,data,reason) {
    original = _sl[_ci].points;
    y = data;
    _sl[_ci].points = y;
    if (y < 90) {
        _sl[_ci].rank = Math.floor(y / 10);
    } else if (y >= 90 && y < 160) {
        _sl[_ci].rank = Math.floor(y / 10) - 1;
    } else if (y >= 160 && y <210){
        _sl[_ci].rank = Math.floor(y / 10) - 2;
    } else if (y >= 210 && y < 220 ) {
        _sl[_ci].rank = Math.floor(y / 10) - 3;
    } else if (y >= 220) {
        _sl[_ci].rank = 19;
    };
    setRankName();
    setRankFactor();
    assignClassRank();
    populateNames();
    document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
    document.getElementById("dispPts").innerHTML = "("+_sl[_ci].points+")";
    var log1 = _sl[_ci].fullName + " points set " + original + "-->" + y;
    var log2 = "(reason: " + reason + ")";
    activityLog(log1,log2,"orange");
    storeAndBackup();
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

function promotion() {
    _sl[_ci].rank++;
    _sl[_ci].promoted = true;
    _sl[_ci].promotionNum++;
    setRankFactor();
    setRankName();
    document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
    document.getElementById("dispRankNamePromo").innerHTML = _sl[_ci].rankName;
    storeAndBackup();
    document.getElementById("promoInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    var logPromo = _sl[_ci].fullName + " promoted to " + _sl[_ci].rankName;
    activityLog(logPromo,"","black","lawnGreen");
    setTimeout(function() {
        pop(["studentPop","missionsPop"],["promoPop"])
    },10);
};

function demotion() {
    _sl[_ci].rank--;
    if (_sl[_ci].promotionNum == 1) {
        _sl[_ci].promoted = false;
    };
    _sl[_ci].promotionNum--;
    setRankFactor();
    setRankName();
    var logDemo = _sl[_ci].fullName + " demoted to " + _sl[_ci].rankName;
    activityLog(logDemo,"","black","fireBrick");
    document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
    storeAndBackup();
};

function setRankName() {
    _sl[_ci].rankName = _rankNamesAbbr[_sl[_ci].rank];
};

function asPoints(_asNum,x,secondCall) {
    if (x < _asMaxPts[_asNum] && x != _sl[_ci].as[_asNum] && !secondCall) {
        _asPoints = x;
        var buttons = ["as1Points","as2Points","as3Points","as4Points","as5Points","as6Points"];
        for (i = 0; i < buttons.length; i++) {
            if (i == (x-1)) {
                document.getElementById(buttons[i]).style.backgroundColor = "blue";
            } else {
                document.getElementById(buttons[i]).style.backgroundColor = "black";
            };
        };
        document.getElementById("as"+x+"Points").style.backgroundColor = "blue";
        document.getElementById("asReasonContainer").style.display = "block";
        document.getElementById("asReasonText").value = "";
        document.getElementById("asReasonText").focus();
        return;
    } else {
        if (x < _asMaxPts[_asNum] && x != _sl[_ci].as[_asNum] && document.getElementById("asReasonText").value == "") {
            infoAlert("Reason for partial credit required",["asPointsPop","studentPop","asReasonContainer"],"asReasonText"); return;
        };
        if (document.getElementById("asReasonContainer").style.display = "block") {
            document.getElementById("asReasonContainer").style.display = "none"
            _sl[_ci].asReasons[_asNum] = document.getElementById("asReasonText").value;
            if (x < _asMaxPts[_asNum]) {
                document.getElementById("asReason").innerHTML = "Reason for partial credit:<br><span style='color:white'>" + _sl[_ci].asReasons[_asNum] + "</span>";
            } else {
                document.getElementById("asReason").innerHTML = "";
            };
            document.getElementById("asReasonText").value = "";
        };
        var rankNum = _sl[_ci].rank;
        var rankFactor = _sl[_ci].rankFactor;
        var totalPts = _sl[_ci].points;
        var asPts = _sl[_ci].as[_asNum];
        var netPts = x - _sl[_ci].as[_asNum];
        if (_sl[_ci].rank != 8 && _sl[_ci].rank != 14 && _sl[_ci].rank != 18) {
            if (asPts == 0 || asPts < x) {
                if ((totalPts - (rankNum * 10)) + netPts >= 10 && totalPts < 200) {
                    promotion();
                };
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            };
            if (asPts > x) {
                if ((totalPts + netPts < (rankNum * 10))) {
                    demotion();
                };
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            };
            if (asPts == x) {
                if ((totalPts - (rankNum * 10)) - x < 0) {
                    demotion();
                };
                _sl[_ci].points -= x; netPts = -x;
                _sl[_ci].as[_asNum] = 0;
                document.getElementById("asReason").innerHTML = "";
            };
        } else if (_sl[_ci].rank == 8 || _sl[_ci].rank == 14 || _sl[_ci].rank == 18) {
            if (asPts == 0 || asPts < x) {
                if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                    promotion();
                };
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            };
            if (asPts > x) {
                if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                    demotion();
                };
                _sl[_ci].points += netPts;
                _sl[_ci].as[_asNum] = x;
            };
            if (asPts == x) {
                if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                    demotion();
                };
                _sl[_ci].points -= x;; netPts = -x;
                _sl[_ci].as[_asNum] = 0;
                document.getElementById("asReason").innerHTML = "";
            };
        };
        var plusSign = ""; if (netPts > 0) {plusSign = "+"};
        var log = _sl[_ci].fullName + " " + plusSign + netPts + " pts " + _asNames[_asNum] + " sheet " + "(" + asPts + "-->" + _sl[_ci].as[_asNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")";
        if (asPts < x) {
            activityLog(log,"","lawnGreen");
        } else {
            activityLog(log,"","red");
        };
        document.getElementById("dispPts").innerHTML = "("+_sl[_ci].points+")";
        document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
        assignClassRank();
        storeAndBackup();
        loadStudent(_ci);
        pop(["asPointsPop"],["missionsPop"]);
    };
};

function mvPoints(_mvNum,x) {
    var rankNum = _sl[_ci].rank;
    var rankFactor = _sl[_ci].rankFactor;
    var totalPts = _sl[_ci].points;
    var mvPts = _sl[_ci].mv[_mvNum];
    var netPts = x - _sl[_ci].mv[_mvNum];
    if (_sl[_ci].rank != 8 && _sl[_ci].rank != 14 && _sl[_ci].rank != 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - (rankNum * 10)) + netPts >= 10 && totalPts < 200) {
                promotion();
            };
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        };
        if (mvPts > x) {
            if ((totalPts + netPts < (rankNum * 10))) {
                demotion();
            };
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        };
        if (mvPts == x) {
            if ((totalPts - (rankNum * 10)) - x < 0) {
                demotion();
            };
            _sl[_ci].points -= x; netPts = -x;
            _sl[_ci].mv[_mvNum] = 0;
        };
    } else if (_sl[_ci].rank == 8 || _sl[_ci].rank == 14 || _sl[_ci].rank == 18) {
        if (mvPts == 0 || mvPts < x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) + x >= 20) {
                promotion();
            };
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        };
        if (mvPts > x) {
            if ((totalPts + netPts < ((rankNum + rankFactor) * 10))) {
                demotion();
            };
            _sl[_ci].points += netPts;
            _sl[_ci].mv[_mvNum] = x;
        };
        if (mvPts == x) {
            if ((totalPts - ((rankNum + rankFactor) * 10)) - x < 0) {
                demotion();
            };
            _sl[_ci].points -= x; netPts = -x;
            _sl[_ci].mv[_mvNum] = 0;
        };
    };
    var plusSign = ""; if (netPts > 0) {plusSign = "+"};
    var log = _sl[_ci].fullName + " " + plusSign + netPts + " pts " + _mvNames[_mvNum] + " verse " + "(" + mvPts + "-->" + _sl[_ci].mv[_mvNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")";
    if (mvPts < x) {
        activityLog(log,"","lawnGreen");
    } else {
        activityLog(log,"","red");
    };
    document.getElementById("dispPts").innerHTML = "("+_sl[_ci].points+")";
    document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
    assignClassRank();
    storeAndBackup();
    loadStudent(_ci);
    pop(["mvPointsPop"],["missionsPop"]);
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

function searchNames2() {
    var inputVal = document.getElementById("search2").value.toLowerCase();
    var names = document.getElementsByClassName("name");
    for (i = 0; i < names.length; i++) {
        if (names[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        };
    };
};

function searchLog() {
    var inputVal = document.getElementById("searchLog").value.toLowerCase();
    var logEntries = document.getElementsByClassName("logEntry");
    for (i = 0; i < logEntries.length; i++) {
        if (logEntries[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            logEntries[i].style.display = "block";
        } else {
            logEntries[i].style.display = "none";
        };
    };
};

function loadStudent(index) {
    _ci = index;
    var today = new Date();
    if (_sl[_ci].attendance === false) {
        _sl[_ci].attendance = true;
        if (_isClassDay === true && today.getHours() < 14) {
            _sl[_ci].amAttCount[_checkedState.length] = 1;
        } else if (_isClassDay === true && today.getHours() >= 14) {
            _sl[_ci].pmAttCount[_checkedState.length] = 1;
        };
    };
    attCount();
    if (_isClassDay === true) { ampmAttendance(); };
    storeNewData();
    refreshStudentPop();
    if (document.getElementById("editStudentPop").style.display != "block") {
        pop(["mainPop"],["studentPop","missionsPop"]);
    };
    document.getElementById("dispRankName").innerHTML = _sl[_ci].rankName;
    document.getElementById("dispName").innerHTML = _sl[_ci].fullName;
    document.getElementById("dispPts").innerHTML = "("+_sl[_ci].points+")";
    document.getElementById("dispBday").innerHTML = "Birthday: "+_sl[_ci].birthday;
    document.getElementById("search").value = "";
    searchNames();
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
};

function missionLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
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
        document.getElementById("search").focus();
        sortStudentList();
    };
    if (openArray.includes("randomPop") || openArray.includes("drawingPop")) {
        document.getElementById("randomName").innerHTML = "tap here<br>to pick";
        document.getElementById("drawingName").innerHTML = "tap here<br>to pick";
    };
    if (openArray.includes("logPop")) {
        document.getElementById("searchLog").value = "";
        document.getElementById("searchLog").focus();
        document.getElementById("log").innerHTML = _log;
    };
    if (openArray.includes("att2Pop")) {
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
    if (openArray.includes("customSortListPop") && _populateNotesID.includes("customSortListPop")) {
        sortByNotes(true);
    };
    alerts();
    scrollTo(0,0);
};

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    };
    for (i = 0; i < (_checkedState.length); i++) {
        document.getElementById("as"+i+"Pop").style.display = "block";
        document.getElementById("mv"+i+"Pop").style.display = "block";
    };
    document.getElementById("search").value = "";
    document.getElementById("search").focus();
    anyAlert();
    sortStudentList();
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
    scrollTo(0,0);
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
    scrollTo(0,0);
};

function populateNames() {
    document.getElementById("nameList").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        if (_sl[i].attendance === true) {
            elementNode.style.color = "lawnGreen";
            if (_sl[i].promoted === true) {
                elementNode.style.color = "yellow";
            } else {
                elementNode.style.border = "none";
            };
        } else {
            elementNode.style.color = "white";
        };
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                loadStudent(i);
            };
        })(i);
        var textNode = document.createTextNode(_sl[i].rankName + " " + _sl[i].fullName + " " + _sl[i].points);
        elementNode.appendChild(textNode);
        document.getElementById("nameList").appendChild(elementNode);
    };  
};

function populateNames2() {
    if (document.getElementById("studentPop").style.display == "block") {
        pop(["studentPop"],["att2Pop"]);
    } else {
        pop(["att2Pop"],["studentPop"]);
    };
    document.getElementById("nameList2").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        if (_sl[i].attendance === true) {
            elementNode.style.color = "lawnGreen";
            if (_sl[i].promoted === true) {
                elementNode.style.color = "yellow";
            } else {
                elementNode.style.border = "none";
            };
        } else {
            elementNode.style.color = "white";
        };
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                attendance2(i);
                pop(["att2Pop"],["studentPop"]);
                document.getElementById("search2").value = "";
            };
        })(i);
        var textNode = document.createTextNode(_sl[i].rankName + " " + _sl[i].fullName + " " + _sl[i].points);
        elementNode.appendChild(textNode);
        document.getElementById("nameList2").appendChild(elementNode);
        document.getElementById("search2").focus();
    };  
};

function sortByPoints() {
    assignClassRank();
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    _sl.sort(function(a,b){return b.points - a.points});
    document.getElementById("nameListCustom").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        var textNode = document.createTextNode(_sl[i].classRank + ". " + _sl[i].fullName + " (" + _sl[i].points + ")");
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
    };  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
};

function sortByGender() {
    document.getElementById("nameListCustom").style.display = "none";
    document.getElementById("genderListContainer").style.display = "flex";
    document.getElementById("boysList").innerHTML = "";
    document.getElementById("girlsList").innerHTML = "";
    document.getElementById("boysListP").innerHTML = "";
    document.getElementById("girlsListP").innerHTML = "";
    var boys = [];
    var girls = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            boys.push(_sl[i].fullName);
        } else {
            girls.push(_sl[i].fullName);
        };
    };
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        document.getElementById("boysList").appendChild(elementNode1);
    };  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        document.getElementById("girlsList").appendChild(elementNode2);
    };  
    document.getElementById("boysListP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
};

function sortByBday() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var birthdayNumberOrder = _sl.sort(function(a,b){return a.birthdayNumber - b.birthdayNumber});
    for (i = 0; i < _sl.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        var textNode = document.createTextNode(birthdayNumberOrder[i].birthday + " " + birthdayNumberOrder[i].fullName);
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
    };  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
};

function sortByNotes(bypass) {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].notes.length != 0) {
            var p1 = document.createElement("p");
            (function(i){
                p1.onclick = function () {
                    _ci = i; populateNotes(["customSortListPop"]);
                    pop(["customSortListPop"],["notesPop","notesList"]);
                };
            })(i);
            var br = document.createElement("br");
            var p2 = document.createElement("p");
            p1.classList.add("name3");
            p2.classList.add("noteText");
            var fullName = document.createTextNode(_sl[i].fullName);
            var notesString = "";
            for (j = 0; j < _sl[i].notes.length; j++) {
                if (j < (_sl[i].notes.length-1)) {
                    notesString += (j+1) + ". " + _sl[i].notes[j] + "<br>"
                } else {
                    notesString += (j+1) + ". " + _sl[i].notes[j];
                };
            };
            p1.appendChild(fullName);
            p1.appendChild(br);
            p2.innerHTML = notesString;
            p1.appendChild(p2);
            document.getElementById("nameListCustom").appendChild(p1);
        };
    };  
    if (!bypass) { pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]); };
};

for (i = 0; i < _sl.length; i++) {
    if (_sl[i].notes.length != 0) {
        for (j = 0; j < _sl[i].notes.length; j++) {
            var x;
            x += j;
            console.log(x);
        };
    };
};

/* function sortByNotes() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].notes.length != 0) {
            var p1 = document.createElement("p");
            var br = document.createElement("br");
            var p2 = document.createElement("p");
            p1.classList.add("name3");
            p2.classList.add("noteText");
            var fullName = document.createTextNode(_sl[i].fullName);
            var notes = document.createTextNode(_sl[i].notes);
            p2.appendChild(notes);
            p1.appendChild(fullName);
            p1.appendChild(br);
            p1.appendChild(p2);
            document.getElementById("nameListCustom").appendChild(p1);
        };
    };  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}; */

function populateNotes(id) {
    _populateNotesID = id;
    document.getElementById("notesList").innerHTML = "";
    for (i = 0; i < _sl[_ci].notes.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("note");
        (function(i){
            elementNode.onclick = function () {
                pop(["notesPop"],["editNotePop","editNote"]);
                document.getElementById("editNote").focus();
                _noteIndex = i;
                document.getElementById("editNote").value = _sl[_ci].notes[_noteIndex];
            };
        })(i);
        var textNode = document.createTextNode((i + 1) + ". " + _sl[_ci].notes[i]);
        elementNode.appendChild(textNode);
        document.getElementById("notesList").appendChild(elementNode);
    };
    document.getElementById("studentNotesHeader").innerHTML = _sl[_ci].fullName + " Notes";
};

function addNote() {
    var note = document.getElementById("addNote").value;
    if (note === null || note == "") {
        return;
    } else {
        _sl[_ci].notes.push(note);
        if (_sl[_ci].notes.length > 0) {
            document.getElementById("notesButton").style.background = "darkgoldenrod";
        };
        document.getElementById("addNote").value = "";
        storeAndBackup();
        populateNotes(_populateNotesID);
        pop(["addNotePop","addNote"],["notesPop","notesList"]);
    };
};

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
    };
};

function deleteNote() {
    _sl[_ci].notes.splice(_noteIndex,1);
    if (_sl[_ci].notes.length == 0) {
        document.getElementById("notesButton").style.background = "black";
    };
    storeAndBackup();
    populateNotes(_populateNotesID);
    pop(["editNotePop"],["notesPop"]);
};

function editNote() {
    if (document.getElementById("editNote").value == "") {
        _sl[_ci].notes.splice(_noteIndex,1);
        if (_sl[_ci].notes.length == 0) {
            document.getElementById("notesButton").style.background = "black";
        };
    } else {
        _sl[_ci].notes[_noteIndex] = document.getElementById("editNote").value;
    };
    storeAndBackup();
    populateNotes(_populateNotesID);
    pop(["editNotePop"],["notesPop"]);
};

function confirmAction(id) {
    document.getElementById(id).style.display = "block"
}

function deleteTeacherNote() {
    _teacherNotes.splice(_teacherNoteIndex,1);
    storeAndBackup();
    populateTeacherNotes();
    pop(["editTeacherNotePop"],["teacherNotesPop","teacherNotesList"]);
};

function editTeacherNote() {
    if (document.getElementById("editTeacherNote").value == "") {
        _teacherNotes.splice(_teacherNoteIndex,1);
    } else {
        _teacherNotes[_teacherNoteIndex] = document.getElementById("editTeacherNote").value;
    };
    storeAndBackup();
    populateTeacherNotes();
    pop(["editTeacherNotePop"],["teacherNotesPop"]);
};

function populateTeacherNotes() {
    document.getElementById("teacherNotesList").innerHTML = "";
    for (i = 0; i < _teacherNotes.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("note");
        (function(i){
            elementNode.onclick = function () {
                pop(["teacherNotesPop"],["editTeacherNotePop","editTeacherNote"]);
                document.getElementById("editTeacherNote").focus();
                _teacherNoteIndex = i;
                document.getElementById("editTeacherNote").value = _teacherNotes[_teacherNoteIndex];
            };
        })(i);
        var textNode = document.createTextNode((i + 1) + ". " + _teacherNotes[i]);
        elementNode.appendChild(textNode);
        document.getElementById("teacherNotesList").appendChild(elementNode);
    };
};

function attendance2(i) {
    var today = new Date();
    if (_sl[i].attendance === false) {
        _sl[i].attendance = true;
        if (_isClassDay === true && today.getHours() < 14) {
            _sl[i].amAttCount[_checkedState.length] = 1;
        } else if (_isClassDay === true && today.getHours() >= 14) {
            _sl[i].pmAttCount[_checkedState.length] = 1;
        };
    } else {
        _sl[i].attendance = false;
        if (_isClassDay === true && today.getHours() < 14) {
            _sl[i].amAttCount[_checkedState.length] = 0;
        } else if (_isClassDay === true && today.getHours() >= 14) {
            _sl[i].pmAttCount[_checkedState.length] = 0;
        };
    };
    attCount();
    storeNewData();
};

function toggleAtt() {
    var today = new Date();
    if (_sl[_ci].attendance === false) {
        _sl[_ci].attendance = true;
        if (_isClassDay === true && today.getHours() < 14) {
            _sl[_ci].amAttCount[_checkedState.length] = 1;
        } else if (_isClassDay === true && today.getHours() >= 14) {
            _sl[_ci].pmAttCount[_checkedState.length] = 1;
        };
        document.getElementById("dispName").style.color = "lawngreen";
    } else {
        _sl[_ci].attendance = false;
        if (_isClassDay === true && today.getHours() < 14) {
            _sl[_ci].amAttCount[_checkedState.length] = 0;
        } else if (_isClassDay === true && today.getHours() >= 14) {
            _sl[_ci].pmAttCount[_checkedState.length] = 0;
        };
        document.getElementById("dispName").style.color = "white";
    };
    attCount();
    if (_isClassDay === true) { ampmAttendance(); };
    storeNewData();
};

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
};
 
function drawing() {
    var eligibleNames = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].drawing === false) {
            eligibleNames.push(_sl[i])
        };
    };
    if (eligibleNames.length == 0) {
        actionAlert('No more eligible names.  Reset drawing?',['drawingPop'],resetDrawing);
    } else {
        var x = Math.floor(Math.random() * eligibleNames.length);
        var winner = eligibleNames[x];
        winner.drawing = true;
        if (winner.firstName.length > 9 || winner.lastName.length > 9) {
            document.getElementById("drawingName").style.fontSize = "65px"; 
        } else {
            document.getElementById("drawingName").style.fontSize = "75px"; 
        };
        document.getElementById("drawingName").innerHTML = winner.firstName + "<br>" + winner.lastName;
        storeAndBackup();
    };
};

function resetDrawing() {
    for (i = 0; i < _sl.length; i++) {
        _sl[i].drawing = false;
    };
    document.getElementById("drawingName").innerHTML = "tap here<br>to pick";
    storeAndBackup();
};

function random() {
    document.getElementById("randomName").style.color = "white";
    if (document.getElementById("all").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            };
        };
    } else if (document.getElementById("boys").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].gender == "M" && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            };
        };
    } else if (document.getElementById("girls").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].gender == "F" && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            };
        };
    };
    if (_eligibleRandom.length == 0) {
        setRandomFalse();
        document.getElementById("randomName").style.color = "red";
        document.getElementById("randomName").innerHTML = "all names picked";
        return;
    };
    var x = Math.floor(Math.random() * _eligibleRandom.length);
    var picked = _eligibleRandom[x];
    picked.random = true;
    if (picked.firstName.length > 9 || picked.lastName.length > 9) {
        document.getElementById("randomName").style.fontSize = "65px"; 
    } else {
        document.getElementById("randomName").style.fontSize = "75px"; 
    };
    document.getElementById("randomName").innerHTML = picked.firstName + "<br>" + picked.lastName;
    storeNewData();
};

function clearEligibleRandom() {
    _eligibleRandom = []; return;
};

function setRandomFalse() {
    for (i = 0; i < _sl.length; i++) {
        _sl[i].random = false;
    };
};

function leapYear() {
    var today = new Date();
    var todaysYear = today.getFullYear();
    if ((todaysYear % 4 == 0) && (todaysYear % 100 != 0) || (todaysYear % 400 == 0)) {
        _leapYear = true;
    } else {
        _leapYear = false;
    };
}; //determines whether current year is a leap year or not

function findBday() {
    leapYear();
    setWeeksOff();
    var today = new Date()
    var todaysMonth = today.getMonth() + 1;
    var todaysDate = today.getDate();
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].birthdayDone === false) {
            if (todaysMonth == _sl[i].birthdayMonth && _sl[i].birthdayDate >= todaysDate && _sl[i].birthdayDate <= (todaysDate + (6 + (7 * _weeksOff)))) {
                _sl[i].hasBirthday = true;
            } else {
                _sl[i].hasBirthday = false;
            };
            if (todaysMonth == 2 && _sl[i].birthdayMonth == (todaysMonth + 1)) {
                if (_leapYear === false) {
                    y = 28 - todaysDate;
                        if (_sl[i].birthdayDate + y <= (6 + (7 * _weeksOff))) {
                            _sl[i].hasBirthday = true;
                        } else {
                            _sl[i].hasBirthday = false;
                        };
                } else {
                    y = 29 - todaysDate;
                        if (_sl[i].birthdayDate + y <= (6 + (7 * _weeksOff))) {
                            _sl[i].hasBirthday = true;
                        } else {
                            _sl[i].hasBirthday = false;
                        };
                };
            };
            if ((todaysMonth == 4 || todaysMonth == 6 || todaysMonth == 9 || todaysMonth == 11) &&  _sl[i].birthdayMonth == (todaysMonth + 1)) {
                y = 30 - todaysDate;
                if (_sl[i].birthdayDate + y <= (6 + (7 * _weeksOff))) {
                    _sl[i].hasBirthday = true;
                } else {
                    _sl[i].hasBirthday = false;
                };
            };
            if ((todaysMonth == 1 || todaysMonth == 3 || todaysMonth == 5 || todaysMonth == 7 || todaysMonth == 8 || todaysMonth == 10 || todaysMonth == 12) &&  _sl[i].birthdayMonth == (todaysMonth + 1)) {
                y = 31 - todaysDate;
                if (_sl[i].birthdayDate + y <= (6 + (7 * _weeksOff))) {
                    _sl[i].hasBirthday = true;
                } else {
                    _sl[i].hasBirthday = false;
                };
            };
        };
    };
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].hasBirthday === true && _sl[i].birthdayLogged === false) {
            activityLog("birthday found: " + _sl[i].fullName + " " + _sl[i].birthday,false,"darkgoldenrod");
            _sl[i].birthdayLogged = true;
        };
    };
};

function promotionList(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    (function(i){
        elementNode.onclick = function () {
            completePromotion(i);
        };
    })(i);
    document.getElementById("promoList").appendChild(elementNode);
};

function bdayList(log1,log2) {
    var elementNode1 = document.createElement("p");
    var textNode1 = document.createTextNode(log1+log2);
    elementNode1.appendChild(textNode1);
    (function(i){
        elementNode1.onclick = function () {
            completeBday(i);
        };
    })(i);
    document.getElementById("bdayList").appendChild(elementNode1);
};

function promotionListAbsent(log) {
    var elementNode = document.createElement("p");
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("promoListAbsent").appendChild(elementNode);
};

function bdayListAbsent(log1,log2) {
    var elementNode1 = document.createElement("p");
    var textNode1 = document.createTextNode(log1+log2);
    elementNode1.appendChild(textNode1);
    document.getElementById("bdayListAbsent").appendChild(elementNode1);
};

function loadPromotions() {
    document.getElementById("promoList").innerHTML = "";
    document.getElementById("promoListAbsent").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].promoted === true && _sl[i].attendance === true) {
            if (_sl[i].promotionNum < 2) {
                promotionList(_sl[i].rankName + " " + _sl[i].fullName);
            } else if (_sl[i].promotionNum > 1) {
                promotionList(_sl[i].rankName + " " + "(" + _sl[i].promotionNum + ") " + _sl[i].fullName);
            };
        } else if (_sl[i].promoted === true && _sl[i].attendance === false) {
            if (_sl[i].promotionNum < 2) {
                promotionListAbsent(_sl[i].rankName + " " + _sl[i].fullName);
            } else if (_sl[i].promotionNum > 1) {
                promotionListAbsent(_sl[i].rankName + " " + "(" + _sl[i].promotionNum + ") " + _sl[i].fullName);
            };
        };
    };
};

function loadBdays() {
    document.getElementById("bdayList").innerHTML = "";
    document.getElementById("bdayListAbsent").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].hasBirthday === true && _sl[i].birthdayDone === false && _sl[i].attendance === true) {
            bdayList(_sl[i].fullName+" ",_sl[i].birthday);
        } else if (_sl[i].hasBirthday === true && _sl[i].birthdayDone === false && _sl[i].attendance === false) {
            bdayListAbsent(_sl[i].fullName+" ",_sl[i].birthday);
        };
    };
};

function completePromotion(x) {
    _sl[x].promoted = false;
    _sl[x].promotionNum = 0;
    loadPromotions();
    storeAndBackup();
};

function completeBday(x) {
    _sl[x].hasBirthday = false;
    _sl[x].birthdayDone = true;
    loadBdays();
    storeAndBackup();
};

function alerts() {
    promotionAlert();
    birthdayAlert();
    notesAlert();
    anyAlert();
};

function anyAlert() {
    if (document.getElementById("promoList").innerHTML != "" || document.getElementById("bdayList").innerHTML != "") {
        document.getElementById("alertButton").style.backgroundColor = "darkgoldenrod";
    } else {
        document.getElementById("alertButton").style.backgroundColor = "black";
    };
};

function promotionAlert() {
    loadPromotions();
    if (document.getElementById("promoList").innerHTML != "") {
        document.getElementById("promotionButton").style.backgroundColor = "darkgoldenrod";
    } else {
        document.getElementById("promotionButton").style.backgroundColor = "black";
    };
};

function birthdayAlert() {
    loadBdays();
    if (document.getElementById("bdayList").innerHTML != "") {
        document.getElementById("birthdayButton").style.backgroundColor = "darkgoldenrod";
    } else {
        document.getElementById("birthdayButton").style.backgroundColor = "black";
    };
};

function notesAlert() {
    if (document.getElementById("teacherNotesList").innerHTML != "") {
        document.getElementById("teacherNotesButton").style.backgroundColor = "darkgoldenrod";
    } else {
        document.getElementById("teacherNotesButton").style.backgroundColor = "black";
    };
};

function storeAndBackup() {
    storeNewData();
    backupNewData();
};

function storeNewData() {
    localStorage.setItem("sl",JSON.stringify(_sl));
    localStorage.setItem("amAtt",JSON.stringify(_amAtt));
    localStorage.setItem("pmAtt",JSON.stringify(_pmAtt));
    localStorage.setItem("teacherNotes",JSON.stringify(_teacherNotes));
    localStorage.setItem("log",_log);
    localStorage.setItem("gameLog",_gameLog);
    localStorage.setItem("teams",JSON.stringify(_teams));
};

function backupNewData() {
    document.getElementById("slBackupArray").innerHTML = "var _slBackup = "+localStorage.getItem("sl")+";";
    document.getElementById("amAttBackupArray").innerHTML = "var _amAttBackup = "+localStorage.getItem("amAtt")+";";
    document.getElementById("pmAttBackupArray").innerHTML = "var _pmAttBackup = "+localStorage.getItem("pmAtt")+";";
    document.getElementById("teacherNotesBackupArray").innerHTML = "var _teacherNotesBackup = "+localStorage.getItem("teacherNotes")+";";
}; // overwrites (index.html id:"slBackupArray" and id:"checkedStateBackupArray") any time their values change

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
    };
}; //allows the div of arrays (index.html id:"backupArrays") to be selected all at once by clicking or tapping/hodling briefly in order to easily copy/paste it into an email, text document, etc.

function preloadImages() {
    pop(["mainMenuPop"],["preloadImagesPop"]);
    for (i = 0; i < 20; i++) {
        document.getElementById(i+"-rank").style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
    };
    var iLimit = 0
    for (i = 0; i < 34; i++) {
        if (_checkedState[i] == 1) {
            iLimit++
        };
    };
    for (i = 0; i < (iLimit); i++) {
        document.getElementById(i+"a-as").style.backgroundImage = "url(img/missions/as"+i+"a.jpg)";
        document.getElementById(i+"b-as").style.backgroundImage = "url(img/missions/as"+i+"b.jpg)";
        if (i == 11) {
            document.getElementById(i+"c-as").style.backgroundImage = "url(img/missions/as11c.jpg)";
        };
        if (i == 24) {
            document.getElementById(i+"c-as").style.backgroundImage = "url(img/missions/as24c.jpg)";
        };
        if (i == 32) {
            document.getElementById(i+"c-as").style.backgroundImage = "url(img/missions/as32c.jpg)";
        };
    };
};

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank + 1) / 20) * 100).toFixed(2);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    for (i = 0; i < (_checkedState.length); i++) {
        totalASpts += _asMaxPts[i];
        totalMVpts += _mvMaxPts[i];
    };
    for (i = 0; i < (_checkedState.length); i++) {
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
    for (i = 0; i < _elapsedWeeks; i++) {
        weeksAttended += _sl[_ci].amAttCount[i];
        weeksAttended += _sl[_ci].pmAttCount[i];
        if (_sl[_ci].amAttCount[i] == 1 && _sl[_ci].pmAttCount[i] == 1) {
            weeksAttended--;
        };
    };
    var attendancePercentage = ((weeksAttended / _elapsedWeeks) * 100).toFixed(2);
    var attendanceSquares = Math.round(attendancePercentage / 2.50);
    var totalEarned = weeksAttended + earnedASpts + earnedMVpts;
    var totalPossible = _elapsedWeeks + totalASpts + totalMVpts;
    var totalPercentage = ((totalEarned / totalPossible) * 100).toFixed(2);
    var totalSquares = Math.round(totalPercentage / 2.50);
    var squaresArray = [rankSquares,totalPointsSquares,asSquares,mvSquares,attendanceSquares,totalSquares];
    var variableArray = [rankPercentage,totalPointsPercentage,asPercentage,mvPercentage,attendancePercentage,totalPercentage];
    var idArray1 = ["rankProgressTable","totalProgressTable","asProgressTable","mvProgressTable","attProgressTable","totalParticipationTable"];
    var idArray2 = ["rankProgressBar","totalProgressBar","asProgressBar","mvProgressBar","attProgressBar","totalParticipationBar"];
    for (i = 0; i < squaresArray.length; i++) {
        for (j = 1; j <= 40; j++) {
            if (j <= squaresArray[i]) {
                if (squaresArray[i] == rankSquares) {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "dodgerblue";
                } else {
                    document.getElementById(idArray2[i]+j).style.backgroundColor = "lawngreen";
                };
            } else {
                document.getElementById(idArray2[i]+j).style.backgroundColor = "black";
            };
        };
    };
    for (i = 0; i < variableArray.length; i++) {
        if (variableArray[i] == 100.00) {
            if (variableArray[i] == rankPercentage) {
                document.getElementById(idArray1[i]).style.backgroundColor = "dodgerblue"; break;
            } else {
                document.getElementById(idArray1[i]).style.backgroundColor = "lawngreen";
            };
        } else {
            document.getElementById(idArray1[i]).style.backgroundColor = "black";
        };
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
    document.getElementById("attProgressTableP").innerHTML = "Attendance: " + weeksAttended + "/" + _elapsedWeeks + " (" + Math.round(attendancePercentage) + "%)";
    document.getElementById("totalParticipationTableP").innerHTML = "Total Participation: " + totalEarned + "/" + totalPossible + " (" + Math.round(totalPercentage) + "%)";
    pop(["studentPop","missionsPop"],["studentStatsPop"]);
};

function assignDateNumbers() {
    leapYear();
    var months = [8,8,9,9,9,10,10,10,10,10,11,11,12,12,12,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5]; //mm of each mm/dd class date
    var dates = [22,29,12,19,26,3,10,17,24,31,7,14,5,12,19,9,16,23,30,6,13,20,27,6,13,20,27,3,10,24,1,8,15,22]; //dd of each mm/dd class date
    var monthsAndDates = []; //combines corresponding indexes of months and date arrays into mm/dd strings
    var cumulative = [0,0,31,59,90,120,151,181,212,243,273,304,334];
    var cumulativeLeap = [0,0,31,60,91,121,152,182,213,244,274,305,335];
    //number of elapsed days at start of each month in non-leap and leap years (January is index 1. Index 0 is a placeholder since there is no "0" month)
    for (i = 0; i < months.length; i++) {
        monthsAndDates.push(months[i]+"/"+dates[i]);
    };
    for (i = 0; i < months.length; i++) {
        if (_leapYear) {
            if (months[i] >= 8) {
                _dateNumbers[i] = cumulativeLeap[months[i]] + dates[i];
            } else {
                _dateNumbers[i] = cumulativeLeap[months[i]] + dates[i] + 1000;
            };
        } else {
            if (months[i] >= 8) {
                _dateNumbers[i] = cumulative[months[i]] + dates[i];
            } else {
                _dateNumbers[i] = cumulative[months[i]] + dates[i] + 1000;
            };
        };
    };
    console.log(_dateNumbers);
    console.log(monthsAndDates);
}; //assigns number to each calendar date that class meets and adds 1000 to dates after December to make them order higher than the Sept-Dec dates even though the day of the year they represent is lower

function loadCheckedStates() {
    leapYear();
    var today = new Date();
    var todaysMonth = today.getMonth() + 1;
    var todaysDate = today.getDate();
    var todaysDateNumber;
    var cumulative = [0,0,31,59,90,120,151,181,212,243,273,304,334];
    var cumulativeLeap = [0,0,31,60,91,121,152,182,213,244,274,305,335];
    if (_leapYear) {
        if (todaysMonth >= 8) {
            todaysDateNumber = cumulativeLeap[todaysMonth] + todaysDate;
        } else {
            todaysDateNumber = cumulativeLeap[todaysMonth] + todaysDate + 1000;
        };
    } else {
        if (todaysMonth >= 8) {
            todaysDateNumber = cumulative[todaysMonth] + todaysDate;
        } else {
            todaysDateNumber = cumulative[todaysMonth] + todaysDate + 1000;
        };
    };
    for (i = 1; i < _dateNumbers.length; i++) {
        if (todaysDateNumber >= _dateNumbers[i]) {
            _checkedState[i-1] = 1;
        };
        if (todaysDateNumber == _dateNumbers[i]) {
            _isClassDay = true; break;
        } else {
            _isClassDay = false;
        };
    };
    _elapsedWeeks = _checkedState.length + 1;
}; // assigns a 1 ("show") to each index of the _checkedState array corresponding with a class date that is today or past and a 0 ("hide") for future class dates - this array determines which missions will be visible in the missionsPop

function showMissions() {
    for (i = 0; i < _checkedState.length; i++) {
        if (_checkedState[i] == 1) {
            document.getElementById("check"+i).checked = true;
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        };
    };
};

function loadStudentPhoto() {
    if (_studentPhotoExists === true) {
        if (_sl[_ci].firstName.includes(" ")) {
            var firstNameArray = _sl[_ci].firstName.split(" ");
            document.getElementById("dispStudentPhoto").style.backgroundImage = "url(img/student-thumbnails/"+firstNameArray[0].toLowerCase()+"-"+firstNameArray[1].toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg";
        } else {
            document.getElementById("dispStudentPhoto").style.backgroundImage = "url(img/student-thumbnails/"+_sl[_ci].firstName.toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg)";
        };
        pop(["studentPop","missionsPop","asPointsPop","mvPointsPop"],["studentPhotoPop"]);
    } else {
        infoAlert("No photo exists for this student",["studentPop","missionsPop"]);
    };
};

function photoLinks() {
    if (_sl[_ci].firstName.includes(" ")) {
        var firstNameArray = _sl[_ci].firstName.split(" ");
        window.open("img/students/"+firstNameArray[0].toLowerCase()+"-"+firstNameArray[1].toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg");
    } else {
        window.open("img/students/"+_sl[_ci].firstName.toLowerCase()+"-"+_sl[_ci].lastName.toLowerCase()+".jpeg");
    };
};

function doesFileExist(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            _studentPhotoExists = true;
            document.getElementById("photoButton").style.background = "green";
        } else {
            _studentPhotoExists = false;
            document.getElementById("photoButton").style.background = "firebrick";
        };
      };
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
};

function loadRankTable() {
    _sharedPop = "rankChartPop";
    pop(["studentStatsPop"],["rankChartPop"]);
    for (i = 0; i < _rankNames.length; i++) {
        let x; x = i;
        document.getElementById("rankChartInsignia"+i).style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";
        document.getElementById("rankChartRank"+i).innerHTML = _rankNames[i];
        document.getElementById("rankChartAbbreviation"+i).innerHTML = _rankNamesAbbr[i];
        document.getElementById("rankChartPoints"+i).innerHTML = _rankPts[i];
        (function(i){
            document.getElementById("rankChartInsignia"+i).onclick = function () {
                pop(["rankChartPop"],["openInsigniaPop"]);
                document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+i+"-rank.jpg)";            };
        })(i);
        if (i == _sl[_ci].rank) {
            document.getElementById("rankChartRow"+i).style.border = "3px solid lawngreen";
        } else {
            document.getElementById("rankChartRow"+i).style.border = "1px solid white";
        };
    };
    document.getElementById("rankChartContainer").scrollTop = 0;
};

function openInsignia() {
    _sharedPop = "studentStatsPop";
    document.getElementById("displayInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    pop(["studentStatsPop"],["openInsigniaPop"]);
};

function toggleIncomplete() {
    var noneHidden = true;
    for (i = 0; i < (_checkedState.length); i++) {
        if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
            noneHidden = false; break;
        };
    };
    if (noneHidden) {
        for (i = 0; i < (_checkedState.length); i++) {
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
        for (i = 0; i < (_checkedState.length); i++) {
            document.getElementById("as"+i+"Pop").style.display = "block";
            document.getElementById("mv"+i+"Pop").style.display = "block";
        };
    };
};

function averageArray(x) {
    function sumArray(a,b) {
        return a + b;
    };
    return Math.round(x.reduce(sumArray)/x.length);
};

function sumArray(array) {
    function sum(a,b) {
        return a + b;
    };
    return array.reduce(sum);
};

function loadAttStats() {
    var today = new Date();
    var amArray = _amAtt.slice(0,_amAtt.length); var pmArray = _pmAtt.slice(0,_pmAtt.length);
    var amBoysArray = []; var pmBoysArray = []; var amGirlsArray = []; var pmGirlsArray = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            amBoysArray.push(_sl[i].amAttCount.slice(0,_sl[i].amAttCount.length));
            pmBoysArray.push(_sl[i].pmAttCount.slice(0,_sl[i].pmAttCount.length));
        } else {
            amGirlsArray.push(_sl[i].amAttCount.slice(0,_sl[i].amAttCount.length));
            pmGirlsArray.push(_sl[i].pmAttCount.slice(0,_sl[i].pmAttCount.length));
        };
    };
    if (_isClassDay === true && today.getHours() < 18) {
        amArray.pop(); pmArray.pop();
        for (i = 0; i < _sl.length; i++) {
            if (i < amBoysArray.length) { amBoysArray[i].pop(); };
            if (i < pmBoysArray.length) { pmBoysArray[i].pop(); };
            if (i < amGirlsArray.length) { amGirlsArray[i].pop(); };
            if (i < pmGirlsArray.length) { pmGirlsArray[i].pop(); };
        };
    };
    amBoysCount = 0; pmBoysCount = 0; amGirlsCount = 0; pmGirlsCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (i < amBoysArray.length) { amBoysCount += sumArray(amBoysArray[i]); };
        if (i < pmBoysArray.length) { pmBoysCount += sumArray(pmBoysArray[i]); };
        if (i < amGirlsArray.length) { amGirlsCount += sumArray(amGirlsArray[i]); };
        if (i < pmGirlsArray.length) { pmGirlsCount += sumArray(pmGirlsArray[i]); };
    };
    var bothArray = [];
    for (i = 0; i < amArray.length; i++) {
        bothArray.push(amArray[i] + pmArray[i]);
    };
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].gender == "M") {
            amBoysArray.push(sumArray(_sl[i].amAttCount));
            pmBoysArray.push(sumArray(_sl[i].pmAttCount));
        } else {
            amGirlsArray.push(sumArray(_sl[i].amAttCount));
            pmGirlsArray.push(sumArray(_sl[i].pmAttCount));
        };
    };
    var bothBoysArray = []; var bothGirlsArray = [];
    for (i = 0; i < amBoysArray.length; i++) {
        bothBoysArray.push(amBoysArray[i] + pmBoysArray[i]);
    };
    for (i = 0; i < amGirlsArray.length; i++) {
        bothGirlsArray.push(amGirlsArray[i] + pmGirlsArray[i]);
    };
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
        (function(i){
            document.getElementById("attAM"+i).onclick = function () {
                loadArchiveAttendees(i,"AM");
            };
            document.getElementById("attPM"+i).onclick = function () {
                loadArchiveAttendees(i,"PM");
            };
        })(i);
    };
    for (i = amArray.length; i < 34; i++) {
        document.getElementById("attRow"+i).style.display = "none";
    };
    pop(["mainMenuPop"],["attStatsPop"]);
};

function loadStudentAttStats() {
    for (i = 0; i < _elapsedWeeks; i++) {
        document.getElementById("studentAttDate"+i).innerHTML = _classDates[i];
        if (_sl[_ci].amAttCount[i] == 1) {
            document.getElementById("studentAttAM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttAM"+i).innerHTML = "";
        };
        if (_sl[_ci].pmAttCount[i] == 1) {
            document.getElementById("studentAttPM"+i).innerHTML = "X";
        } else {
            document.getElementById("studentAttPM"+i).innerHTML = "";
        };
        if (_sl[_ci].amAttCount[i] == 0 && _sl[_ci].pmAttCount[i] == 0) {
            document.getElementById("studentAttDate"+i).style.color = "red";
        } else {
            document.getElementById("studentAttDate"+i).style.color = "lawngreen";
        };
    };
    for (i = _elapsedWeeks; i < 34; i++) {
        document.getElementById("studentAttRow"+i).style.display = "none";
    };
    pop(["studentPop","missionsPop"],["studentAttStatsPop"]);
};

function whatToLoad() {
    if (!localStorage.getItem("sl")) { //A
        if (JSON.parse(localStorage.getItem("slBackup"))) { //A1
            _sl = JSON.parse(localStorage.getItem("slBackup"));
            _amAtt = JSON.parse(localStorage.getItem("amAttBackup"));
            _pmAtt = JSON.parse(localStorage.getItem("pmAttBackup"));
            _teacherNotes = JSON.parse(localStorage.getItem("teacherNotesBackup"));
            loadCheckedStates();
            removePtBoxes();
            showMissions();
            sortStudentList();
            for (i = 0; i < _sl.length; i++) {
                _sl[i].attendance = false;
                _sl[i].random = false;
            };
            findBday();
        } else { //A2
            return;
        };
    } else { //B
        pop(["mainPop"],["wtlPop"]);
    };
}; // if (A) no localStorage data exists, then if (A1) backup.js exists, backup.js will be loaded, else (A2) blank/default data will be loaded
// else (B) if localStorage data exists, you are given the choice to load it or backup.js */

function loadBackup() {
    if (!JSON.parse(localStorage.getItem("slBackup"))) {
        infoAlert("backup.js not available",["wtlPop"]); return;
    } else {
        _sl = JSON.parse(localStorage.getItem("slBackup"));
        _amAtt = JSON.parse(localStorage.getItem("amAttendanceBackup"));
        _pmAtt = JSON.parse(localStorage.getItem("pmAttendanceBackup"));
        _teacherNotes = JSON.parse(localStorage.getItem("teacherNotesBackup"));
        loadCheckedStates();
        showMissions();
        for (i = 0; i < _sl.length; i++) {
            _sl[i].attendance = false;
            _sl[i].random = false;
        };
        if (_isClassDay === true) {
            for (i = 0; i < _sl.length; i++) {
                _sl[i].amAttCount.push(0); _sl[i].pmAttCount.push(0);
            };
            _amAtt.push(0); _pmAtt.push(0);
        };
        findBday();
        removePtBoxes();
        populateTeacherNotes();
        pop(["wtlPop"],["mainPop"]);
    };
};

function loadLS() {
    _sl = JSON.parse(localStorage.getItem("sl"));
    _amAtt = JSON.parse(localStorage.getItem("amAtt"));
    _pmAtt = JSON.parse(localStorage.getItem("pmAtt"));
    _log = localStorage.getItem("log");
    _gameLog = localStorage.getItem("gameLog");
    document.getElementById("log").innerHTML = _log;
    document.getElementById("gameLog").innerHTML = _gameLog;
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotes"));
    _teams = JSON.parse(localStorage.getItem("teams"));
    loadCheckedStates();
    showMissions();
    attCount();
    removePtBoxes();
    findBday();
    backupNewData();
    populateTeacherNotes();
    pop(["wtlPop"],["mainPop"]);
};

//*** ONLOAD FUNCTION CALLS ***//
whatToLoad()

document.getElementById("search").focus();

//*** NOTES ***//
/* Math.random() returns a random number greater than 0 and less than 1
multiply Math.random() by one more than the maximum random number you want to generate
use Math.floor(Math.random()) to be sure the randomly-generated number is rounded down to the ones place
e.g. if you want to generate a number from 0-10, then do Math.floor(Math.random() * 11)

.sort(function(a,b){return a - b}); returns new array sorted A-Z or 0-10
.sort(function(a,b){return b - a}); returns new array sorted Z-A or 10-0

to add an onclick function to a series of elements with a for loop, use:

    //to add an onclick function to elements you're about to write to the DOM
    (function(i){
        elementNode.onclick = function () {
            functionName(i);
        };
    })(i);

    //to add an onclick function to elements already in the DOM
    (function(i){
        document.getElementById("idName").onclick = function () {
            functionName(i);
        };
    })(i);

    The final (i) allows the function to be called (with i as the parameter) when you click on the elements in the DOM.  If you leave this out, nothing will happen when you click on the elements.

to copy an existing array to a new one: var newArray = originalArray.slice(0,originalArray.length)

*/

//*** TO DO LIST ***//
// add ability to skip current player in game and move to next player in that team