var _sl = []; var _ci;
var _asNum; var _mvNum;
var _asPoints;
var _asMaxPts = [3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3];
var _mvMaxPts = [4,6,3,3,3,5,5,5,4,4,3,3,4,3,3,3,4,3,4,3,4,3,3,3,6,4,4,3,4,3,3,3];
var _leapYear = false; // true if Jan-July falls within a leap year
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
var _bdList = []; var _promotionList = [];
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
var _dns = [22, 29, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 127, 134, 141, 162, 169, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 267, 274, 281, 288, 295];
var _rankPts = [0,10,20,30,40,50,60,70,80,100,110,120,130,140,150,170,180,190,200,220];
var _asNames = ["class-intro","jn-intro","jn-1","jn-2","jn-3","jn-4","jn-5","jn-6","jn-7","jn-8","jn-9","jn-1-9-review","jn-10","jn-11","jn-12","jn-13","jn-14","jn-15","jn-16","jn-17","jn-18","jn-19","jn-20","jn-21","jn-10-21-review","armor-intro","belt","breastplate","shoes","shield","helmet","sword"];
var _asFulls = ["Class Intro","John Intro","John 1","John 2","John 3","John 4","John 5","John 6","John 7","John 8","John 9","John 1-9 Review","John 10","John 11","John 12","John 13","John 14","John 15","John 16","John 17","John 18","John 19","John 20","John 21","John 10-21 Review","Armor Intro","Belt","Breastplate","Shoes","Shield","Helmet","Sword"];
var _mvNames = ["ps-139-17-18","jn-20-30-31","jn-1-1-2","jn-1-3","jn-1-4-5","jn-1-6-8","jn-1-9-11","jn-1-12-13","jn-1-14","jn-1-15","jn-1-16-17","jn-1-18","phil-2-5-6","phil-2-7","phil-2-8","phil-2-9","phil-2-10-11","rom-8-31","rom-8-32","rom-8-33","rom-8-34","rom-8-35","rom-8-36","rom-8-37","rom-8-38-39","eph-6-10-11","eph-6-12","eph-6-13","eph-6-14-15","eph-6-16","eph-6-17","eph-6-18"];
var _mvFulls = ["Psalm 139:17-18","John 20:30-31","John 1:1-2","John 1:3","John 1:4-5","John 1:6-8","John 1:9-11","John 1:12-13","John 1:14","John 1:15","John 1:16-17","John 1:18","Phil 2:5-6","Phil 2:7","Phil 2:8","Phil 2:9","Phil 2:10-11","Rom 8:31","Rom 8:32","Rom 8:33","Rom 8:34","Rom 8:35","Rom 8:36","Rom 8:37","Rom 8:38-39","Eph 6:10-11","Eph 6:12","Eph 6:13","Eph 6:14-15","Eph 6:16","Eph 6:17","Eph 6:18"];
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
    constructor(first,last,month,date,email,gender,note) {
        this.first = first;
        this.last = last;
        this.full = first + " " + last;
        this.pron;
        this.gender = gender;
        this.dateAdded = assignTodaysDn();
        this.bdn = assignDn(month,date);
        this.hasBd = false;
        this.bdDone = false;
        this.email = email;
        this.photo = false;
        this.notes = note;
        this.points = 0;
        this.classRank = 0;
        this.rank = 0;
        this.rankFactor = 0;
        this.rankName = "PVT"
        this.attendance = false;
        this.amAtt = [];
        this.pmAtt = [];
        this.promoted = false;
        this.promotionNum = 0;
        this.drawing = false;
        this.random = false;
        this.asReasons = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
        this.asDates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.mvDates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.as = {
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
        }
        this.mv = {
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

function allAlerts() {
    var alert = false;
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].promoted === true) {
            alert = true; document.getElementById("promotionButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("promotionButton").style.backgroundColor = "black";
        }
    }
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].hasBd === true && _sl[i].bdDone === false) {
            alert = true; document.getElementById("bdButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("bdButton").style.backgroundColor = "black";
        }
    }
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].photo === false) {
            alert = true; document.getElementById("photosNeededButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("photosNeededButton").style.backgroundColor = "black";
        }
    }
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].email == false) {
            alert = true; document.getElementById("emailsNeededButton").style.backgroundColor = "red"; break;
        } else {
            document.getElementById("emailsNeededButton").style.backgroundColor = "black";
        }
    }
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].bdn == 1000) {
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

function populateCustomList(log1,log2,type) {
    if (log1) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name");
        var textNode1 = document.createTextNode(log1);
        elementNode1.appendChild(textNode1);
        if (type == "promotion") {
            (function(i){
                elementNode1.onclick = function () {
                    actionAlert("Complete promotion for <br>" + _sl[i].full + " (" + _sl[i].rankName + ")?",["customListPop"],completePromotion,false,i);
                }
            })(i);
        } else if (type == "bdDone") {
            (function(i){
                elementNode1.onclick = function () {
                    actionAlert("Complete birthday for <br>" + _sl[i].full + "?",["customListPop"],completeBd,false,i);
                }
            })(i);
        } else if (type == "photo") {
            (function(i){
                elementNode1.onclick = function () {
                    actionAlert("Take photo for <br>" + _sl[i].full + "?",["customListPop"],completePhoto,false,i);
                }
            })(i);
        } else if (type == "email") {
            (function(i){
                elementNode1.onclick = function () {
                    _ci = i; _array = ["customListPop"];
                    populateStudentFields("editEmail",loadNeededEmails);
                }
            })(i);
        } else if (type == "bdNeeded") {
            (function(i){
                elementNode1.onclick = function () {
                    _ci = i; _array = ["customListPop"];
                    populateStudentFields("editBdMonth",loadNeededBds);
                    document.getElementById("editBdMonth").value = "";
                    document.getElementById("editBdDate").value = ""; 
                }
            })(i);
        }
        document.getElementById("customList").appendChild(elementNode1);
    }
    if (log2) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name");
        var textNode2 = document.createTextNode(log2);
        elementNode2.appendChild(textNode2);
        document.getElementById("customListAbsent").appendChild(elementNode2);
    }
}

function loadPromotions() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Promotions";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].promoted === true && _sl[i].attendance === true) {
            if (_sl[i].promotionNum < 2) {
                populateCustomList(_sl[i].rankName + " " + _sl[i].full,false,false,"promotion");
            } else if (_sl[i].promotionNum > 1) {
                populateCustomList(_sl[i].rankName + " " + "(" + _sl[i].promotionNum + ") " + _sl[i].full);
            }
        } else if (_sl[i].promoted === true && _sl[i].attendance === false) {
            if (_sl[i].promotionNum < 2) {
                populateCustomList(false,false,_sl[i].rankName + " " + _sl[i].full,"");
            } else if (_sl[i].promotionNum > 1) {
                populateCustomList(false,false,_sl[i].rankName + " " + "(" + _sl[i].promotionNum + ") " + _sl[i].full);
            }
        }
    }
}

function loadBds() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Birthdays";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].hasBd === true && _sl[i].bdDone === false && _sl[i].attendance === true) {
            populateCustomList(_sl[i].full + " (" + cdn(_sl[i].bdn) + ")",false,"bdDone");
        } else if (_sl[i].hasBd === true && _sl[i].bdDone === false && _sl[i].attendance === false) {
            populateCustomList(false,_sl[i].full+" (" + cdn(_sl[i].bdn) + ")");
        }
    }
}

function loadNeededPhotos() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Photos";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].photo === false && _sl[i].attendance === true) {
            populateCustomList(_sl[i].full,false,"photo");
        } else if (_sl[i].photo === false && _sl[i].attendance === false) {
            populateCustomList(false,_sl[i].full);
        }
    }
}

function loadNeededEmails() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Emails";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].email == "" && _sl[i].attendance === true) {
            populateCustomList(_sl[i].full,false,"email");
        } else if (_sl[i].email == "" && _sl[i].attendance === false) {
            populateCustomList(false,_sl[i].full);
        }
    }
}

function loadNeededBds() {
    document.getElementById("customList").innerHTML = "";
    document.getElementById("customListAbsent").innerHTML = "";
    document.getElementById("customListLabel").innerHTML = "Missing Birthdays";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].bdn == 1000 && _sl[i].attendance === true) {
            populateCustomList(_sl[i].full,false,"bdNeeded");
        } else if (_sl[i].bdn == 1000 && _sl[i].attendance === false) {
            populateCustomList(false,_sl[i].full);
        }
    }
}

function completePromotion(x) {
    _sl[x].promoted = false;
    _sl[x].promotionNum = 0;
    activityLog(_sl[x].full + " promotion complete<br>" + dateAndTime("log"));
    loadPromotions(); storeAndBackup();
}

function completeBd(x) {
    _sl[x].bdDone = true; 
    activityLog(_sl[x].full + " birthday complete<br>" + dateAndTime("log"));
    loadBds(); storeAndBackup();
}

function completePhoto(x) {
    _sl[x].photo = true; loadNeededPhotos(); allAlerts(); storeAndBackup();
}

function teams() {
    var attCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
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
    var teamObject = new Teams; _teams.push(teamObject);
    document.getElementById("team1Score").innerHTML = 0
    document.getElementById("team2Score").innerHTML = 0
    var attendees = [];
    for (i = 0; i <_sl.length; i++) {
        if (_sl[i].attendance === true) {
            attendees.push(_sl[i].full)
        }
    }
    shuffleArray(attendees);
    var remainder = 0
    if (attendees.length % 2 == 1) { remainder = 1 }
    for (i = 0; i < attendees.length; i++) {
        if (i < ((attendees.length - remainder) / 2)) {
            _teams[0].team1.push(attendees[i]);
            _teams[0].team1Reset.push(attendees[i]);
        } else {
            _teams[0].team2.push(attendees[i]);
            _teams[0].team2Reset.push(attendees[i]);           
        }
    }
    _teams[0].currentPlayer = _teams[0].team1[0];
    for (i = 1; i < 11; i++) {
        document.getElementById("gamePoint"+i).style.backgroundColor = "black";
    }
    document.getElementById("gameLog").innerHTML = "";
    populateTeams();
    storeNewData();
}

function populateTeams() {
    document.getElementById("team1List").innerHTML = "";
    document.getElementById("team2List").innerHTML = "";
    for (i = 0; i < _teams[0].team1Reset.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name2");
        var textNode = document.createTextNode(_teams[0].team1Reset[i]);
        elementNode.appendChild(textNode);
        document.getElementById("team1List").appendChild(elementNode);
    }  
    for (i = 0; i < _teams[0].team2Reset.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("name2");
        var textNode = document.createTextNode(_teams[0].team2Reset[i]);
        elementNode.appendChild(textNode);
        document.getElementById("team2List").appendChild(elementNode);
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

function gameScorePoints(x) {
    _teams[0].undoGamePts = x; _teams[0].undoLimit = false; var log;
    if (_teams[0].currentTeam == 1) {
        log = _teams[0].team1[0] + " +" + x + " pts team 1" + "<br>" +  "(" + _teams[0].team1Score + "-->" + (_teams[0].team1Score + x) + ")";
        _teams[0].team1Score += x;
        document.getElementById("team1Score").innerHTML = _teams[0].team1Score;
        _teams[0].currentTeam ++;
        _teams[0].undoCurrentPlayer = _teams[0].team1[0];
        _teams[0].undoTeam = 1;
        _teams[0].team1.shift();
        _teams[0].currentPlayer = _teams[0].team2[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        if (_teams[0].team1.length == 0) {
            for (i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            }
        }
        gameActivityLog(log);
        storeNewData();
    } else {
        log = _teams[0].team2[0] + " +" + x + " pts team 2" + "<br>" +  "(" + _teams[0].team2Score + "-->" + (_teams[0].team2Score + x) + ")";
        _teams[0].team2Score += x;
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].currentTeam --;
        _teams[0].undoCurrentPlayer = _teams[0].team2[0];
        _teams[0].undoTeam = 2;
        _teams[0].team2.shift();
        _teams[0].currentPlayer = _teams[0].team1[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
        document.getElementById("team1Score").style.backgroundColor = "yellow";
        document.getElementById("team2Score").style.backgroundColor = "#eee";
        if (_teams[0].team2.length == 0) {
            for (i = 0; i < _teams[0].team2Reset.length; i++) {
                _teams[0].team2.push(_teams[0].team2Reset[i])
            }
        }
        gameActivityLog(log);
        storeNewData();
    }
    for (i = 1; i < 11; i++) {
        if (i == x) {
            document.getElementById("gamePoint"+i).style.backgroundColor = "midnightblue";
        } else {
            document.getElementById("gamePoint"+i).style.backgroundColor = "black";
        }
    }
}

function undoGameScorePoints() {
    var log;
    if (_teams[0].undoLimit === true) {
        infoAlert("Cannot undo more than one score in a row",["playGamePop"]); return;
    } else {
        _teams[0].undoLimit = true;
    }
    if (_teams[0].currentTeam == 1) {
        log = "UNDO " + _teams[0].undoCurrentPlayer + " -" + _teams[0].undoGamePts + " pts team 2 " + "<br>" + "(" + _teams[0].team2Score + "-->" + (_teams[0].team2Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 2;
        _teams[0].team2Score -= _teams[0].undoGamePts;
        document.getElementById("team2Score").innerHTML = _teams[0].team2Score;
        _teams[0].team2.unshift(_teams[0].undoCurrentPlayer);
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team2[0] + "</span>";
        document.getElementById("team2Score").style.backgroundColor = "yellow";
        document.getElementById("team1Score").style.backgroundColor = "#eee";
        gameActivityLog(log);
    } else if (_teams[0].currentTeam == 2) {
        log = "UNDO " + _teams[0].undoCurrentPlayer + " -" + _teams[0].undoGamePts + " pts team 1 " + "<br>" + "(" + _teams[0].team1Score + "-->" + (_teams[0].team1Score - _teams[0].undoGamePts) + ")";
        _teams[0].currentTeam = 1;
        _teams[0].team1Score -= _teams[0].undoGamePts;
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
    document.getElementById("gameLog").appendChild(paragraph);
    _gameLog = document.getElementById("gameLog").innerHTML;
    storeNewData();
}

function skipPlayer() {
    var log;
    if (_teams[0].currentTeam == 1) {
        log = "SKIPPED " + _teams[0].team1[0];
        _teams[0].team1.shift();
        if (_teams[0].team1.length == 0) {
            for (i = 0; i < _teams[0].team1Reset.length; i++) {
                _teams[0].team1.push(_teams[0].team1Reset[i])
            }
        }
        _teams[0].currentPlayer = _teams[0].team1[0];
        document.getElementById("currentPlayer").innerHTML = "Current Player:<br><span style='color: lawngreen'>" + _teams[0].team1[0] + "</span>";
    } else {
        log = "SKIPPED " + _teams[0].team2[0];
        _teams[0].team2.shift();
        if (_teams[0].team2.length == 0) {
            for (i = 0; i < _teams[0].team2Reset.length; i++) {
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
            for (i = 0; i < _teams[0].team1Reset.length; i++) {
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
            for (i = 0; i < _teams[0].team2Reset.length; i++) {
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
    if (x == 1) {
        _teams[0].team1.push(_sl[i].full);
        _teams[0].team1Reset.push(_sl[i].full);
        log = "ADDED " + _sl[i] + " to Team 1";

    } else {
        _teams[0].team2.push(_sl[i].full);
        _teams[0].team2Reset.push(_sl[i].full);
        log = "ADDED " + _sl[i] + " to Team 2";
    }
    gameActivityLog(log);
    populateTeams();
    storeNewData();
}

function whatToLoad() {
    if (!localStorage.getItem("sl") && !JSON.parse(localStorage.getItem("slBackup"))) {
        infoAlert("No data",["mainPop"]);
    } else if (localStorage.getItem("sl") && JSON.parse(localStorage.getItem("slBackup"))) {
        pop(["mainPop"],["wtlPop"]);
    } else if (!localStorage.getItem("sl") && JSON.parse(localStorage.getItem("slBackup"))) {
        loadBackup();
    }
}

function loadBackup() {
    _sl = JSON.parse(localStorage.getItem("slBackup"));
    _amAtt = JSON.parse(localStorage.getItem("amAttBackup"));
    _pmAtt = JSON.parse(localStorage.getItem("pmAttBackup"));
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotesBackup"));
    _promotionList = []; _bdList = [];
    activityLog("backup loaded" + "<br>" + dateAndTime("log"));
    isClassDay(); setElapsedWeeks(); findAllBds(); populateTeacherNotes(); populateMissions();
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = false;
        _sl[i].random = false;
    }
    if (_isClassDay === true && _amAtt.length < _elapsedWeeks) {
        for (i = 0; i < _sl.length; i++) {
            _sl[i].amAtt.push(0); _sl[i].pmAtt.push(0);
        }
        _amAtt.push(0); _pmAtt.push(0);
    }
    storeAndBackup();
    pop(["wtlPop"],["mainPop"]);
}

function loadLS() {
    _sl = JSON.parse(localStorage.getItem("sl"));
    _amAtt = JSON.parse(localStorage.getItem("amAtt"));
    _pmAtt = JSON.parse(localStorage.getItem("pmAtt"));
    _promotionList = JSON.parse(localStorage.getItem("promotionList"));
    _bdList = JSON.parse(localStorage.getItem("bdList"));
    _log = localStorage.getItem("log");
    _gameLog = localStorage.getItem("gameLog");
    document.getElementById("log").innerHTML = _log;
    document.getElementById("gameLog").innerHTML = _gameLog;
    _teacherNotes = JSON.parse(localStorage.getItem("teacherNotes"));
    _teams = JSON.parse(localStorage.getItem("teams"));
    isClassDay(); setElapsedWeeks(); populateMissions();
    populateTeacherNotes(); attCount();
    activityLog("localstorage loaded" + "<br>" + dateAndTime("log"));
    backupNewData();
    pop(["wtlPop"],["mainPop"]);
}

function isClassDay() {
    var todaysDn = assignTodaysDn();
    for (i = 1; i < _dns.length; i++) {
        if (todaysDn == _dns[i]) {
            _isClassDay = true; 
            document.getElementById("nameList").style.borderColor = "#3478F6";
            break;
        } else {
            _isClassDay = false;
        }
    }
}

// _dns = (34) [22, 29, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 127, 134, 141, 162, 169, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 267, 274, 281, 288, 295];

function setElapsedWeeks() {
    var todaysDn = assignTodaysDn();
    //var todaysDn = 44;
    for (i = 0; i < _dns.length; i++) {
        if (todaysDn == _dns[i]) {
            _elapsedWeeks = i + 1; break;
        }
        if (todaysDn > _dns[0] && todaysDn < _dns[i]) {
            _elapsedWeeks = i; break;
        }
        if (todaysDn < _dns[0] || todaysDn > _dns[_dns.length-1]) {
            _elapsedWeeks = 34;
        }
    }
}

function assignTodaysDn() {
    var todaysMonth = dateAndTime("month"); var todaysDate = dateAndTime("date")
    var cumulative = [0,153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [0,153,184,213,244,274,305,335,0,31,61,92,122];
    var dn;
    if (_leapYear === true) {
        dn = cumulativeLeap[todaysMonth] + todaysDate;
    } else {
        dn = cumulative[todaysMonth] + todaysDate;
    }
    return dn;
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

function setRankFactor() {
    if (_sl[_ci].rank >= 9 && _sl[_ci].rank < 15) {
        _sl[_ci].rankFactor = 1;
    } else if (_sl[_ci].rank >= 15 && _sl[_ci].rank < 19) {
        _sl[_ci].rankFactor = 2;
    } else if (_sl[_ci].rank >= 19) {
        _sl[_ci].rankFactor = 3;
    } else {
        _sl[_ci].rankFactor = 0;
    }
}

function setRankName() {
    _sl[_ci].rankName = _rankNamesAbbr[_sl[_ci].rank];
}

function setRandomFalse() {
    for (i = 0; i < _sl.length; i++) {
        _sl[i].random = false;
    }
}

function attCount() {
    var attCount = 0
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
            attCount++;
        }
    }
    document.getElementById("attCountButton").innerHTML = attCount;
    document.getElementById("attCount").innerHTML = attCount;
}

function ampmAttendance() {
    var attCount = 0;
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) {
            attCount++
        }
    }
    if (dateAndTime("hours") < 16) {
        _amAtt[_elapsedWeeks-1] = attCount;
    } else {
        _pmAtt[_elapsedWeeks-1] = attCount;
    }
    storeAndBackup();
}

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
            boys.push(_sl[i].full);
        } else if (_sl[i].gender == "F" && _sl[i].attendance === true) {
            girls.push(_sl[i].full);
        }
    }
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        if (_promotionList.indexOf(boys[i]) !== -1) {
            elementNode1.style.color = "yellow";
        }
        if (_bdList.indexOf(boys[i]) !== -1) {
            elementNode1.style.border = "1px solid fuchsia";
        }
        document.getElementById("boysListAtt").appendChild(elementNode1);
    }  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        if (_promotionList.indexOf(girls[i]) !== -1) {
            elementNode2.style.color = "yellow";
        }
        if (_bdList.indexOf(girls[i]) !== -1) {
            elementNode2.style.border = "1px solid fuchsia";
        }
        document.getElementById("girlsListAtt").appendChild(elementNode2);
    }  
    document.getElementById("boysListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListAttP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainPop"],["attListPop"]);
}

function loadArchiveAttendees(index,time) {
    document.getElementById("boysArchiveListAtt").innerHTML = "";
    document.getElementById("girlsArchiveListAtt").innerHTML = "";
    document.getElementById("boysArchiveListAttP").innerHTML = "";
    document.getElementById("girlsArchiveListAttP").innerHTML = "";
    var boys = [];
    var girls = [];
    if (time == "AM") {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].amAtt[index] == 1) {
                boys.push(_sl[i].full);
            } else if (_sl[i].gender == "F" && _sl[i].amAtt[index] == 1) {
                girls.push(_sl[i].full);
            }
        }
    } else {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].gender == "M" && _sl[i].pmAtt[index] == 1) {
                boys.push(_sl[i].full);
            } else if (_sl[i].gender == "F" && _sl[i].pmAtt[index] == 1) {
                girls.push(_sl[i].full);
            }
        }
    }
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        document.getElementById("boysArchiveListAtt").appendChild(elementNode1);
    }  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        document.getElementById("girlsArchiveListAtt").appendChild(elementNode2);
    }  
    document.getElementById("boysArchiveListAttP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsArchiveListAttP").innerHTML = "Girls (" + girls.length + ")";
    document.getElementById("attArchiveCount").innerHTML = boys.length + girls.length;
    document.getElementById("attArchiveDate").innerHTML = cdn(_dns[i]) + " " + time + " Attendance";
    pop(["attStatsPop"],["attArchiveListPop"]);
}

function resetAtt() {
    for (i = 0; i < _sl.length; i++) {
        if (_isClassDay === false) {
            _sl[i].attendance = false;
        } else {
            if (_sl[i].attendance === true && _sl[i].amAtt[_elapsedWeeks-1] == 1) {
                _sl[i].amAtt[_elapsedWeeks-1] = 0; _sl[i].attendance = false;
            } else if (_sl[i].attendance === true && _sl[i].pmAtt[_elapsedWeeks-1] == 1) {
                _sl[i].pmAtt[_elapsedWeeks-1] = 0;  _sl[i].attendance = false;
            }
        }
    }
    var log = "removed all attendees" + "<br>" + dateAndTime("log");
    activityLog(log);
    attCount();
    if (_isClassDay === true) { ampmAttendance(); }
    pop(["attListPop"],["mainPop"]);
    storeAndBackup();
}

function att2(i) {
    if (_sl[i].attendance === false) {
        _sl[i].attendance = true;
        if (_isClassDay === true && dateAndTime("hours") < 16) {
            _sl[i].amAtt[_elapsedWeeks-1] = 1;
        } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
            _sl[i].pmAtt[_elapsedWeeks-1] = 1;
        }
    } else {
        _sl[i].attendance = false;
        if (_isClassDay === true && dateAndTime("hours") < 16) {
            _sl[i].amAtt[_elapsedWeeks-1] = 0;
        } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
            _sl[i].pmAtt[_elapsedWeeks-1] = 0;
        }
    }
    if (_sl[i].attendance === true) {
        var log = "added attendee " + _sl[i].first + " " + _sl[i].last + "<br>" + dateAndTime("log");
    } else {
        var log = "removed attendee " + _sl[i].first + " " + _sl[i].last + "<br>" + dateAndTime("log");
    }
    activityLog(log);
    attCount();
    if (_isClassDay === true) { ampmAttendance(); }
    storeNewData();
}

function randomAtt(blank,x) {
    if (x > _sl.length) {
        x = _sl.length;
    }
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = false;
    }
    for (i = 0; i < x; i++) {
        let x = Math.floor(Math.random() * _sl.length);
        if (_sl[x].attendance === false) {
            _sl[x].attendance = true;
        } else {
            i--
        }
    }
    if (_isClassDay === true && dateAndTime("hours") < 16) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _amAtt[_elapsedWeeks-1] += 1;
                _sl[i].amAtt[_elapsedWeeks-1] = 1;
            }
        } 
    } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true) {
                _pmAtt[_elapsedWeeks-1] += 1;
                _sl[i].pmAtt[_elapsedWeeks-1] = 1;
            }
        } 
    }
    loadAttendees();
    attCount();
    populateNames();
    storeNewData();
}

function allAtt() {
    for (i = 0; i < _sl.length; i++) {
        _sl[i].attendance = true;
    }
    if (_isClassDay === true && dateAndTime("hours") < 16) {
        for (i = 0; i < _sl.length; i++) {
            _amAtt[_elapsedWeeks-1] += 1;
            _sl[i].amAtt[_elapsedWeeks-1] = 1;
        } 
    } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
        for (i = 0; i < _sl.length; i++) {
            _pmAtt[_elapsedWeeks-1] += 1;
            _sl[i].pmAtt[_elapsedWeeks-1] = 1;
        } 
    }
    attCount();
    populateNames();
    storeNewData();
}

function sortByPoints() {
    assignClassRanks();
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    _sl.sort(function(b,a){return a.points - b.points});
    document.getElementById("nameListCustom").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var lastElementNode;
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        if (_sl[i].rank != lastElementNode) {
            elementNode.style.borderTop = "1px solid #555";
            elementNode.style.paddingTop = "5px";
        }
        var textNode = document.createTextNode(_sl[i].classRank + ". " + _sl[i].full + " (" + _sl[i].points + "|" + _sl[i].rankName+ ")");
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
        lastElementNode = _sl[i].rank;
    }
    pop(["sortChoicePop"],["customSortListPop"]);
}

function sortByRank() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var rankOrder = _sl.sort(function(b,a){return a.rank - b.rank});
    for (i = 0; i < _sl.length; i++) {
        var lastElementNode;
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        if (_sl[i].rank != lastElementNode) {
            elementNode.style.borderTop = "1px solid #555";
        }
        var textNode = document.createTextNode(rankOrder[i].rankName + " " + rankOrder[i].full);
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
        lastElementNode = _sl[i].rank;
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}

function sortByAttendance() {
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    for (i = 0; i < _sl.length; i++) {
        var total = sumArrays([_sl[i].amAtt,_sl[i].pmAtt]);
        for (j = 0; j < _sl[i].amAtt.length; j++) {
            if (_sl[i].amAtt[j] == 1 && _sl[i].pmAtt[j] == 1) {
                total--
            }
        }
        _sl[i].totalWksAtt = total;
    }
    _sl.sort(function(a,b){return b.totalWksAtt - a.totalWksAtt});
    document.getElementById("nameListCustom").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        var lastElementNode;
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        if (_sl[i].totalWksAtt != lastElementNode) {
            elementNode.style.borderTop = "1px solid #555";
            elementNode.style.paddingTop = "5px";
        }
        var textNode = document.createTextNode(_sl[i].full + " (" + _sl[i].totalWksAtt + "/" + _elapsedWeeks + ")");
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
        lastElementNode = _sl[i].totalWksAtt;
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}

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
            boys.push(_sl[i].full);
        } else {
            girls.push(_sl[i].full);
        }
    }
    for (i = 0; i < boys.length; i++) {
        var elementNode1 = document.createElement("p");
        elementNode1.classList.add("name2");
        var textNode1 = document.createTextNode(boys[i]);
        elementNode1.appendChild(textNode1);
        document.getElementById("boysList").appendChild(elementNode1);
    }  
    for (i = 0; i < girls.length; i++) {
        var elementNode2 = document.createElement("p");
        elementNode2.classList.add("name2");
        var textNode2 = document.createTextNode(girls[i]);
        elementNode2.appendChild(textNode2);
        document.getElementById("girlsList").appendChild(elementNode2);
    }  
    document.getElementById("boysListP").innerHTML = "Boys (" + boys.length + ")";
    document.getElementById("girlsListP").innerHTML = "Girls (" + girls.length + ")";
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}

function sortByBd() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var bdnOrder = _sl.sort(function(a,b){return a.bdn - b.bdn});
    for (i = 0; i < _sl.length; i++) {
        if (bdnOrder[i].bdn == 1000) { break }
        var lastElementNode;
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        if (cdn(_sl[i].bdn,"M") != lastElementNode) {
            elementNode.style.borderTop = "1px solid #333";
            elementNode.style.paddingTop = "5px";
        }
        if (_sl[i].bdDone === true) {
            elementNode.style.color = "gray";
        };
        var textNode = document.createTextNode(cdn(bdnOrder[i].bdn) + " " + bdnOrder[i].full);
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
        lastElementNode = cdn(_sl[i].bdn,"M");
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}

function sortByDateAdded() {
    document.getElementById("nameListCustom").innerHTML = "";
    document.getElementById("nameListCustom").style.display = "block";
    document.getElementById("genderListContainer").style.display = "none";
    var dateAddedOrder = _sl.sort(function(a,b){return a.dateAdded - b.dateAdded});
    for (i = 0; i < _sl.length; i++) {
        var dateAddedMonth; var dateAddedDate;
        var dateAddedArray = cdn(_sl[i].dateAdded).split("/");
        dateAddedMonth = dateAddedArray[0]; dateAddedDate = dateAddedArray[1];
        var lastElementNode;
        var elementNode = document.createElement("p");
        elementNode.classList.add("name3");
        if (dateAddedMonth != lastElementNode) {
            elementNode.style.borderTop = "1px solid #333";
            elementNode.style.paddingTop = "5px";
        }
        var textNode = document.createTextNode(dateAddedMonth + "/" + dateAddedDate + " " + dateAddedOrder[i].full);
        elementNode.appendChild(textNode);
        document.getElementById("nameListCustom").appendChild(elementNode);
        lastElementNode = dateAddedMonth;
    }  
    pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]);
}

function sortByNotes(bypass) {
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
            var full = document.createTextNode(_sl[i].full);
            var notesString = "";
            for (j = 0; j < _sl[i].notes.length; j++) {
                if (j < (_sl[i].notes.length-1)) {
                    notesString += (j+1) + ". " + _sl[i].notes[j] + "<br>"
                } else {
                    notesString += (j+1) + ". " + _sl[i].notes[j];
                }
            }
            p1.appendChild(full);
            p1.appendChild(br);
            p2.innerHTML = notesString;
            p1.appendChild(p2);
            document.getElementById("nameListCustom").appendChild(p1);
        }
    }  
    if (!bypass) { pop(["mainMenuPop","sortChoicePop"],["customSortListPop"]); }
}

function sortStudentList() {
    _sl.sort(function(a,b) {
        var textA = a.last.toLowerCase();
        var textB = b.last.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    populateNames();
}

function populateStudentNotes(id) {
    _populateNotesID = id;
    document.getElementById("studentNotesList").innerHTML = "";
    for (i = 0; i < _sl[_ci].notes.length; i++) {
        if (_sl[_ci].notes[i] == false) { continue }
        var elementNode = document.createElement("p");
        elementNode.classList.add("note");
        (function(i){
            elementNode.onclick = function () {
                pop(["studentNotesPop"],["editStudentNotePop","editStudentNote"]);
                document.getElementById("editStudentNote").focus();
                _noteIndex = i;
                document.getElementById("editStudentNote").value = _sl[_ci].notes[_noteIndex];
            }
        })(i);
        var textNode = document.createTextNode((i + 1) + ". " + _sl[_ci].notes[i]);
        elementNode.appendChild(textNode);
        document.getElementById("studentNotesList").appendChild(elementNode);
    }
    var elementNode2 = document.createElement("p");
    elementNode2.classList.add("addNew");
    elementNode2.onclick = function () {
        pop(["studentNotesPop"],["addStudentNotePop","addStudentNote"]);
        document.getElementById("addStudentNote").focus();
    }
    var textNode2 = document.createTextNode("Add New Note");
    elementNode2.appendChild(textNode2);
    document.getElementById("studentNotesList").appendChild(elementNode2);
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
    var todaysDn = assignTodaysDn();
    setWeeksOff();
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].bdn >= todaysDn && _sl[i].bdn <= (todaysDn + (6 + (7 * _weeksOff))) && _sl[i].hasBd === false && _sl[i].bdDone === false) {
            _sl[i].hasBd = true; _bdList.push(_sl[i].full);
            activityLog(_sl[i].full + " birthday found (" + cdn(_sl[i].bdn) + ")<br>" + dateAndTime("log"));
        }
    }
}

function findBd() {
    var todaysDn = assignTodaysDn();
    setWeeksOff();
    if (_sl[_ci].bdn >= todaysDn && _sl[_ci].bdn <= (todaysDn + (6 + (7 * _weeksOff))) && _sl[_ci].hasBd === false && _sl[_ci].bdDone === false) {
        _sl[_ci].hasBd = true; _bdList.push(_sl[_ci].full);
        activityLog(_sl[_ci].full + " birthday found (" + cdn(_sl[i].bdn) + ")<br>" + dateAndTime("log"));
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
    document.getElementById("log").appendChild(paragraph);
    _log = document.getElementById("log").innerHTML;
    storeNewData();
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

function dataInputAlert(message,popArray,func,parameter,bypass) {
    if (document.getElementById("dataInputAlertPop").style.display != "block") {
        _dataInputParameter = parameter;
        _currentPops2 = popArray;
        _currentFunction = func;
        document.getElementById("dataInputAlertPop").style.display = "block";
        document.getElementById("dataInputTextField").value = "";
        for (i = 0; i < _currentPops2.length; i++) {
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
            for (i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            }
            document.getElementById("dataInputAlertMessage").innerHTML = "";
            document.getElementById("dataInputAlertPop").style.display = "none";
        } else {
            document.getElementById("dataInputAlertPop").style.display = "none";
            for (i = 0; i < _currentPops2.length; i++) {
                document.getElementById(_currentPops2[i]).style.display = "block"
            }
        }
    }
}

function actionAlert(message,popsArray,func,bypass,parameter) {
    if (document.getElementById("actionAlertPop").style.display != "block") {
        _currentPops = popsArray; _currentFunction = func; _currentParameter= parameter;
        document.getElementById("actionAlertPop").style.display = "block";
        for (i = 0; i < _currentPops.length; i++) {
            if (_currentPops[i] !== undefined) {
                document.getElementById(_currentPops[i]).style.display = "none"
            }
        }
        document.getElementById("actionAlertMessage").innerHTML = message;
    } else if (document.getElementById("actionAlertPop").style.display == "block") {
        document.getElementById("actionAlertPop").style.display = "none";
        for (i = 0; i < _currentPops.length; i++) {
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

function newStudent() {
    var NFNArray = (document.getElementById("newFirst").value.trim().toLowerCase()).split(" ")
    var NLNArray = (document.getElementById("newLast").value.trim().toLowerCase()).split(" ")
    var newGender = document.getElementById("newGender").value
    var newbdMonth = document.getElementById("newbdMonth").value
    var newbdDate = document.getElementById("newbdDate").value
    var email = document.getElementById("newEmail").value.toLowerCase();
    var note = [document.getElementById("initialNote").value];
    if (newFirst == "" || newLast == "") {
        infoAlert("First and last name required",["newStudentPop"]); return;
    } else {
        for (i = 0; i < NFNArray.length; i++) {
            NFNArray[i] = NFNArray[i][0].toUpperCase() + NFNArray[i].substr(1);
        }
        for (i = 0; i < NLNArray.length; i++) {
            NLNArray[i] = NLNArray[i][0].toUpperCase() + NLNArray[i].substr(1);
        }
        var first = NFNArray.join("-");
        var last = NLNArray.join("-");
    }
    if (newGender.toLowerCase() == "m") {
        var gender = "M";
    } else if (newGender.toLowerCase() == "f") {
        var gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["newStudentPop"]); return;
    }
    if (newbdMonth == "" || newbdDate == "") {
        var month = 0; var date = 0;
    } else {
        var month = parseInt(newbdMonth);
        var date = parseInt(newbdDate);
    }
    var newStudent = new Student(first,last,month,date,email,gender,note);
    newStudent.attendance = true;
    for (i = 0; i < _elapsedWeeks; i++) {
        newStudent.amAtt.push(0);
        newStudent.pmAtt.push(0);
    }
    if (_isClassDay === true) {
        if (dateAndTime("hours") < 16) {
            newStudent.amAtt[_elapsedWeeks-1] = 1;
        } else if (dateAndTime("hours") >= 16) {
            newStudent.pmAtt[_elapsedWeeks-1] = 1;
        }
    }
    _sl.push(newStudent); _ci = _sl.length-1;
    attCount();
    findBd();
    sortStudentList();
    var log = "new student " + first + " " + last + "<br>" + dateAndTime("log");
    activityLog(log);
    storeAndBackup();
    clearStudentFields()
    if (document.getElementById("rapidEntryCheck").checked === true) {
        document.getElementById("newFirst").focus();
        return;
    } else {
        pop(["newStudentPop"],["mainPop"]);
    }
}

function deleteStudent() {
    _sl.splice(_ci,1);
    attCount(); storeAndBackup(); sortStudentList(); goHome();
}

function editStudent() {
    var originalFirst = _sl[_ci].first;
    var originalLast = _sl[_ci].last;
    var originalGender = _sl[_ci].gender;
    var originalBdn = _sl[_ci].bdn;
    var originalEmail = _sl[_ci].email;
    var editFirst = document.getElementById("editFirst").value
    var editLast = document.getElementById("editLast").value
    var editGender = document.getElementById("editGender").value
    var editBdMonth = parseInt(document.getElementById("editBdMonth").value);
    var editBdDate = parseInt(document.getElementById("editBdDate").value);
    _sl[_ci].email = document.getElementById("editEmail").value.toLowerCase();
    if (editFirst == "" || editLast == "") {
        infoAlert("First and last name required",["editStudentPop"]); return;
    } else {
        _sl[_ci].first = capitalize(editFirst.toLowerCase());
        _sl[_ci].last = capitalize(editLast.toLowerCase());
        _sl[_ci].full = _sl[_ci].first + " " + _sl[_ci].last
    }
    if (editGender.toLowerCase() == "m") {
        _sl[_ci].gender = "M";
    } else if (editGender.toLowerCase() == "f") {
        _sl[_ci].gender = "F";
    } else {
        infoAlert("Please enter 'M' or 'F' for gender",["editStudentPop"]); return;
    }
    if (editBdMonth == "" || editBdDate == "") {
        _sl[_ci].bdn = 1000;
        _sl[_ci].hasBd = false;
    } else {
        _sl[_ci].bdn = assignDn(editBdMonth,editBdDate);
    }
    if (_sl[_ci].bdn != originalBdn) { findBd() }
    document.getElementById("studentPopName").innerHTML = _sl[_ci].full;
    var original = [originalFirst,originalLast,originalGender,cdn(originalBdn),originalEmail];
    var edit = [editFirst,editLast,editGender,cdn(_sl[_ci].bdn),_sl[_ci].email];
    var labels = ["first name","last name","gender","birthday","email"];
    for (i = 0; i < original.length; i++) {
        if (original[i] != edit[i]) {
            activityLog(originalFirst + " " + originalLast + " " + labels[i] + " edited<br>" + original[i] + "-->" + edit[i] + "<br>" + dateAndTime("log"));
        }
    }
    refreshStudentPop(); storeAndBackup(); allAlerts();
    if (_currentFunction == loadNeededEmails || _currentFunction == loadNeededBds) { _currentFunction() };
    if (document.getElementById("rapidEditCheck").checked === true) {
        _ci++;
        if (_ci < _sl.length) {
            loadStudent(_ci); populateStudentFields();
        } else {
            pop(["editStudentPop","missionsPop"],["studentPop"]);
        }
    } else {
        resetStudentMenu();
        pop(["editStudentPop"],_array);
    }
}

function refreshStudentPop() {
    assignClassRanks();
    document.getElementById("studentPopInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    document.getElementById("studentPopRankName").innerHTML = _rankNames[_sl[_ci].rank];
    document.getElementById("studentPopName").innerHTML = _sl[_ci].full;
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
    if (_sl[_ci].attendance === true) {
        document.getElementById("studentPopName").style.color = "lawngreen";
    } else {
        document.getElementById("studentPopName").style.color = "white";
    }
    if (_rankNames[_sl[_ci].rank].length > 20) {
        document.getElementById("studentPopRankName").style.fontSize = "15px";
    } else {
        document.getElementById("studentPopRankName").style.fontSize = "18px";
    }
    if (_sl[_ci].full.length > 17) {
        document.getElementById("studentPopName").style.fontSize = "22px";
    } else {
        document.getElementById("studentPopName").style.fontSize = "25px";
    }
    var properties = ["first","last","gender","bdMonth","bdDate","email","photo"];
    for (i = 0; i < properties.length; i++) {
        if (_sl[_ci][properties[i]] == false) {
            document.getElementById("studentMenu2").style.color = "red"; break;
        } else {
            document.getElementById("studentMenu2").style.color = "white";
        }
    }
}

function refreshMissionsPop() {
    if (_elapsedWeeks > 1) {
        for (i = 0; i < _elapsedWeeks-2; i++) {
            if (_sl[_ci].as[i] == _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].as[i] > 0 && _sl[_ci].as[i] < _asMaxPts[i]) {
                document.getElementById("as"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("as"+i+"Pop").style.background = "black";
            }
        }
        for (i = 0; i < _elapsedWeeks-2; i++) {
            if (_sl[_ci].mv[i] == _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.background = "green";
            } else if (_sl[_ci].mv[i] > 0 && _sl[_ci].mv[i] < _mvMaxPts[i]) {
                document.getElementById("mv"+i+"Pop").style.background = "darkorange";
            } else {
                document.getElementById("mv"+i+"Pop").style.background = "black";
            }
        }
    }
}

function populateStudentFields(id,func) {
    if (func) { _currentFunction = func }
    document.getElementById("editFirst").value = _sl[_ci].first
    document.getElementById("editLast").value = _sl[_ci].last
    if (_sl[_ci].bdn != 1000) {
        document.getElementById("editBdMonth").value = cdn(_sl[_ci].bdn,"M").toString();
        document.getElementById("editBdDate").value = cdn(_sl[_ci].bdn,"D").toString();
    }
    document.getElementById("editEmail").value = _sl[_ci].email;
    document.getElementById("editGender").value = _sl[_ci].gender;
    loadStudentPhoto();
    pop(_array,["editStudentPop"]);
    if (id) {
        document.getElementById(id).focus();
    }
}

function clearStudentFields() {
    var ids = ["newFirst","newLast","newGender","newbdMonth","newbdDate","newEmail","initialNote"];
    for (i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).value = "";
    }
}

function promotion() {
    _sl[_ci].rank++;
    _sl[_ci].promoted = true;
    _sl[_ci].promotionNum++; _promotionList.push(_sl[_ci].full);
    setRankFactor();
    setRankName();
    document.getElementById("studentPopRankName").innerHTML = _sl[_ci].rankName;
    document.getElementById("dispRankNamePromo").innerHTML = _sl[_ci].rankName;
    storeAndBackup();
    document.getElementById("promoInsignia").style.backgroundImage = "url(img/insignia-darkgray/"+_sl[_ci].rank+"-rank.jpg)";
    var log = _sl[_ci].full + " promoted to " + _sl[_ci].rankName + "<br>" + dateAndTime("log");
    activityLog(log);
    setTimeout(function() {
        pop(["studentPop","missionsPop"],["promoPop"])
    },10);
}

function demotion() {
    _sl[_ci].rank--;
    if (_sl[_ci].promotionNum == 1) {
        _sl[_ci].promoted = false;
    }
    _sl[_ci].promotionNum--;
    setRankFactor();
    setRankName();
    var log = _sl[_ci].full + " demoted to " + _sl[_ci].rankName + "<br>" + dateAndTime("log");
    activityLog(log);
    document.getElementById("studentPopRankName").innerHTML = _sl[_ci].rankName;
    storeAndBackup();
}

function asPoints(_asNum,x,secondCall) {
    if (_sl[_ci].asDates[_asNum] == 0) {
        _sl[_ci].asDates[_asNum] = assignTodaysDn();
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
        var log = _sl[_ci].full + " " + plusSign + netPts + " pts " + _asNames[_asNum] + " sheet " + "<br>" + "(" + asPts + "-->" + _sl[_ci].as[_asNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")" + "<br>" + dateAndTime("log");
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
        _sl[_ci].mvDates[_mvNum] = assignTodaysDn();
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
    var log = _sl[_ci].full + " " + plusSign + netPts + " pts " + _mvNames[_mvNum] + " verse "  + "<br>" +  "(" + mvPts + "-->" + _sl[_ci].mv[_mvNum] + ")" + " (" + (_sl[_ci].points - netPts) + "-->" + _sl[_ci].points + ")" + "<br>" + dateAndTime("log");
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

function searchNames(id,className) {
    var inputVal = document.getElementById(id).value.toLowerCase();
    var names = document.getElementsByClassName(className);
    for (i = 0; i < names.length; i++) {
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
    for (i = 0; i < logEntries.length; i++) {
        if (logEntries[i].innerHTML.toLowerCase().search(inputVal) >= 0) {
            logEntries[i].style.display = "block";
        } else {
            logEntries[i].style.display = "none";
        }
    }
}

function loadStudent(index) {
    document.getElementById("searchMain").value = "";
    _ci = index;
    checkInAtt(); refreshStudentPop(); refreshMissionsPop(); resetMissions(); resetStudentMenu();
    if (document.getElementById("editStudentPop").style.display != "block") {
        pop(["mainPop"],["studentPop","missionsPop"]);
    }
}

function resetStudentMenu() {
    for (i = 0; i < 4; i++) {
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
    for (i = 0; i < 4; i++) {
        if (i == x) {
            document.getElementById("studentMenu"+i).style.backgroundColor = "#777";
        } else {
            document.getElementById("studentMenu"+i).style.backgroundColor = "black";
        }
    }
    for (k = 0; k < 5; k++) {
        if (k == x) {
            document.getElementById(pops[k]).style.display = "block";
            if (k > 0 && k < 4) { funcs[k]() }
        }
    }
    for (l = 0; l < allPops.length; l++) {
        if (allPops[l].id != pops[x] && allPops[l].id != "studentPop") {
            allPops[l].style.display = "none";
        }
    }
}

function asLinks() {
    window.open("docs/missions/as"+_asNum+".pdf","_blank");
}

function scanLinks() {
    window.open("docs/as-scans/"+_sl[_ci].first.toLowerCase()+"-"+_sl[_ci].last.toLowerCase()+"-as"+_asNum+".pdf","_blank");
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
        document.getElementById("searchMain").value = "";
        document.getElementById("searchMain").focus();
        sortStudentList(); populateNames();
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
    scrollTo(0,0);
}

function goHome() {
    var pops = document.getElementsByClassName("pop");
    for (i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
        document.getElementById("mainPop").style.display = "block";
    }
    document.getElementById("searchMain").value = "";
    document.getElementById("searchMain").focus();
    sortStudentList(); populateNames();
}

function asPop(asNum,points) {
    _asNum = asNum;
    document.getElementById("asSheetName").innerHTML = _asNames[_asNum].toUpperCase();
    document.getElementById("asDateAssigned").innerHTML = cdn(_dns[asNum]);
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
    document.getElementById("mvDateAssigned").innerHTML = cdn(_dns[mvNum]);
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
        var p = document.createElement("p");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        if (_sl[i].attendance === true) {
            span1.style.color = "white";
        } else {
            span1.style.color = "#555";
        }
        if (_sl[i].attendance === true) {
            span2.style.color = "lawnGreen";
        } else {
            span2.style.color = "white";
        }
        p.classList.add("name");
        span1.classList.add("quickAttendance");
        (function(i){
            span1.onclick = function () {
                _ci = i; toggleAtt(i); populateNames();
            }
        })(i);
        (function(i){
            span2.onclick = function () {
                loadStudent(i);
            }
        })(i);
        span1.innerHTML = "V"
        span2.innerHTML = " " + _sl[i].full;
        p.append(span1,span2);
        document.getElementById("nameList").appendChild(p);
    }
    var elementNode2 = document.createElement("p");
    elementNode2.classList.add("addNew");
    elementNode2.onclick = function () {
        pop(["mainPop"],["newStudentPop"]);
        document.getElementById("newFirst").focus();
    }
    var textNode2 = document.createTextNode("Add New Student");
    elementNode2.appendChild(textNode2);
    document.getElementById("nameList").appendChild(elementNode2);
    allAlerts();
    document.getElementById("searchMain").value = "";
    document.getElementById("searchMain").focus();
}

function populateNames2() {
    document.getElementById("att2Pop").style.display = "block";
    document.getElementById("nameList2").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true) { continue };
        var elementNode = document.createElement("p");
        elementNode.classList.add("name");
        (function(i){
            elementNode.onclick = function () {
                att2(i);
                pop(["att2Pop"],["studentPop"]);
                document.getElementById("searchMain2").value = "";
            }
        })(i);
        var textNode = document.createTextNode(_sl[i].full);
        elementNode.appendChild(textNode);
        document.getElementById("nameList2").appendChild(elementNode);
        document.getElementById("searchMain2").focus();
    }  
}

function populateNames3(x) {
    document.getElementById("att3Pop").style.display = "block"
    document.getElementById("teamsListNav").style.display = "none";
    document.getElementById("teamsListButtons").style.display = "none";
    document.getElementById("nameList3").innerHTML = "";
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === false || _teams[0].team1Reset.includes(_sl[i].full) || _teams[0].team2Reset.includes(_sl[i].full)) { continue }
        var elementNode = document.createElement("p");
        elementNode.classList.add("nameSmaller");
        (function(i){
            elementNode.onclick = function () {
                addPlayer(x,i);
                pop(["att3Pop"],["teamsListPop"]);
                document.getElementById("searchMain3").value = "";
            }
        })(i);
        var textNode = document.createTextNode(_sl[i].full);
        elementNode.appendChild(textNode);
        document.getElementById("nameList3").appendChild(elementNode);
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
    for (i = 0; i < _teacherNotes.length; i++) {
        var elementNode = document.createElement("p");
        elementNode.classList.add("note");
        (function(i){
            elementNode.onclick = function () {
                pop(["teacherNotesPop"],["editTeacherNotePop","editTeacherNote"]);
                document.getElementById("editTeacherNote").focus();
                _teacherNoteIndex = i;
                document.getElementById("editTeacherNote").value = _teacherNotes[_teacherNoteIndex];
            }
        })(i);
        var textNode = document.createTextNode((i + 1) + ". " + _teacherNotes[i]);
        elementNode.appendChild(textNode);
        document.getElementById("teacherNotesList").appendChild(elementNode);
    }
    var elementNode2 = document.createElement("p");
    elementNode2.classList.add("addNew");
    elementNode2.onclick = function () {
        pop(["teacherNotesPop"],["addTeacherNotePop","addTeacherNote"]);
        document.getElementById("addTeacherNote").focus();
    }
    var textNode2 = document.createTextNode("Add New Note");
    elementNode2.appendChild(textNode2);
    document.getElementById("teacherNotesList").appendChild(elementNode2);
}

function checkInAtt() {
    if (_sl[_ci].attendance === false) {
        _sl[_ci].attendance = true;
        var log = "added attendee " + _sl[_ci].first + " " + _sl[_ci].last + "<br>" + dateAndTime("log");
        activityLog(log);
        if (_isClassDay === true && dateAndTime("hours") < 16) {
            _sl[_ci].amAtt[_elapsedWeeks-1] = 1;
        } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
            _sl[_ci].pmAtt[_elapsedWeeks-1] = 1;
        }
        document.getElementById("studentPopName").style.color = "lawngreen";
    }
    attCount();
    if (_isClassDay === true) { ampmAttendance(); }
    storeNewData();
}

function toggleAtt() {
    if (_sl[_ci].attendance === false) {
        _sl[_ci].attendance = true;
        if (_isClassDay === true && dateAndTime("hours") < 16) {
            _sl[_ci].amAtt[_elapsedWeeks-1] = 1;
        } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
            _sl[_ci].pmAtt[_elapsedWeeks-1] = 1;
        }
        document.getElementById("studentPopName").style.color = "lawngreen";
    } else {
        _sl[_ci].attendance = false;
        if (_isClassDay === true && dateAndTime("hours") < 16) {
            _sl[_ci].amAtt[_elapsedWeeks-1] = 0;
        } else if (_isClassDay === true && dateAndTime("hours") >= 16) {
            _sl[_ci].pmAtt[_elapsedWeeks-1] = 0;
        }
        document.getElementById("studentPopName").style.color = "white"; goHome();
    }
    if (_sl[_ci].attendance === true) {
        var log = "added attendee " + _sl[_ci].first + " " + _sl[_ci].last + "<br>" + dateAndTime("log");
    } else {
        var log = "removed attendee " + _sl[_ci].first + " " + _sl[_ci].last + "<br>" + dateAndTime("log");
    }
    activityLog(log);
    attCount();
    if (_isClassDay === true) { ampmAttendance(); }
    storeNewData();
}
 
function drawing() {
    var eligibleNames = [];
    for (i = 0; i < _sl.length; i++) {
        if (_sl[i].attendance === true && _sl[i].drawing === false) {
            eligibleNames.push(_sl[i])
        }
    }
    if (eligibleNames.length == 0) {
        actionAlert('No more eligible names.  Reset drawing?',['drawingPop'],resetDrawing);
    } else {
        var x = Math.floor(Math.random() * eligibleNames.length);
        var winner = eligibleNames[x];
        winner.drawing = true;
        if (winner.first.length > 9 || winner.last.length > 9) {
            document.getElementById("drawingName").style.fontSize = "65px"; 
        } else {
            document.getElementById("drawingName").style.fontSize = "75px"; 
        }
        document.getElementById("drawingName").innerHTML = winner.first + "<br>" + winner.last;
        storeAndBackup();
    }
}

function resetDrawing() {
    for (i = 0; i < _sl.length; i++) {
        _sl[i].drawing = false;
    }
    document.getElementById("drawingName").innerHTML = "tap here<br>to pick";
    storeAndBackup();
}

function random() {
    document.getElementById("randomName").style.color = "white";
    if (document.getElementById("all").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    } else if (document.getElementById("boys").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].gender == "M" && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    } else if (document.getElementById("girls").checked === true) {
        _eligibleRandom = [];
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].attendance === true && _sl[i].gender == "F" && _sl[i].random === false) {
                _eligibleRandom.push(_sl[i])
            }
        }
    }
    if (_eligibleRandom.length == 0) {
        setRandomFalse();
        document.getElementById("randomName").style.color = "fireBrick";
        document.getElementById("randomName").innerHTML = "all names picked";
        return;
    }
    var x = Math.floor(Math.random() * _eligibleRandom.length);
    var picked = _eligibleRandom[x];
    picked.random = true;
    if (picked.first.length > 9 || picked.last.length > 9) {
        document.getElementById("randomName").style.fontSize = "65px"; 
    } else {
        document.getElementById("randomName").style.fontSize = "75px"; 
    }
    document.getElementById("randomName").innerHTML = picked.first + "<br>" + picked.last;
    storeNewData();
}

function clearEligibleRandom() {
    _eligibleRandom = []; return;
}

function storeAndBackup() {
    storeNewData();
    backupNewData();
}

function storeNewData() {
    localStorage.setItem("sl",JSON.stringify(_sl));
    localStorage.setItem("amAtt",JSON.stringify(_amAtt));
    localStorage.setItem("pmAtt",JSON.stringify(_pmAtt));
    localStorage.setItem("teacherNotes",JSON.stringify(_teacherNotes));
    localStorage.setItem("log",_log);
    localStorage.setItem("promotionList",JSON.stringify(_promotionList));
    localStorage.setItem("bdList",JSON.stringify(_bdList));
    localStorage.setItem("gameLog",_gameLog);
    localStorage.setItem("teams",JSON.stringify(_teams));
}

function backupNewData() {
    document.getElementById("slBackupArray").innerHTML = "var _slBackup = "+localStorage.getItem("sl")+";";
    document.getElementById("amAttBackupArray").innerHTML = "var _amAttBackup = "+localStorage.getItem("amAtt")+";";
    document.getElementById("pmAttBackupArray").innerHTML = "var _pmAttBackup = "+localStorage.getItem("pmAtt")+";";
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
    document.getElementById("dateAdded").innerHTML = _sl[_ci].dateAdded;
    document.getElementById("first").innerHTML = _sl[_ci].first;
    document.getElementById("last").innerHTML = _sl[_ci].last;
    document.getElementById("full").innerHTML = _sl[_ci].full;
    document.getElementById("pron").innerHTML = _sl[_ci].pron;
    document.getElementById("gender").innerHTML = _sl[_ci].gender;
    document.getElementById("bdn").innerHTML = _sl[_ci].bdn;
    document.getElementById("hasBd").innerHTML = _sl[_ci].hasBd;
    document.getElementById("bdDone").innerHTML = _sl[_ci].bdDone;
    document.getElementById("email").innerHTML = _sl[_ci].email;
    document.getElementById("photo").innerHTML = _sl[_ci].photo;
    document.getElementById("notes").innerHTML = JSON.stringify(_sl[_ci].notes);
    document.getElementById("points").innerHTML = _sl[_ci].points;
    document.getElementById("classRank").innerHTML = _sl[_ci].classRank;
    document.getElementById("rank").innerHTML = _sl[_ci].rank;
    document.getElementById("rankFactor").innerHTML = _sl[_ci].rankFactor;
    document.getElementById("rankName").innerHTML = _sl[_ci].rankName;
    document.getElementById("attendance").innerHTML = _sl[_ci].attendance;
    document.getElementById("amAtt").innerHTML = JSON.stringify(_sl[_ci].amAtt);
    document.getElementById("pmAtt").innerHTML = JSON.stringify(_sl[_ci].pmAtt);
    document.getElementById("promoted").innerHTML = _sl[_ci].promoted;
    document.getElementById("promotionNum").innerHTML = _sl[_ci].promotionNum;
    document.getElementById("drawing").innerHTML = _sl[_ci].drawing;
    document.getElementById("random").innerHTML = _sl[_ci].random;
    document.getElementById("asReasons").innerHTML = JSON.stringify(_sl[_ci].asReasons);
    document.getElementById("asDates").innerHTML = JSON.stringify(_sl[_ci].asDates);
    document.getElementById("mvDates").innerHTML = JSON.stringify(_sl[_ci].mvDates);
    document.getElementById("as").innerHTML = JSON.stringify(_sl[_ci].as);
    document.getElementById("mv").innerHTML = JSON.stringify(_sl[_ci].mv);
}

function loadStudentStats() {
    var rankPercentage = (((_sl[_ci].rank + 1) / 20) * 100).toFixed(1);
    var rankSquares = Math.round(rankPercentage / 2.50);
    var totalASpts = 0;
    var earnedASpts = 0;   
    var totalMVpts = 0;
    var earnedMVpts = 0;
    if (_elapsedWeeks > 2) {
        for (i = 0; i < (_elapsedWeeks-2); i++) {
            if (i > 31) { break; };
            totalASpts += _asMaxPts[i];
            totalMVpts += _mvMaxPts[i];
        }
        for (i = 0; i < (_elapsedWeeks-2); i++) {
            if (i > 31) { break; };
            earnedASpts += _sl[_ci].as[i];
            earnedMVpts += _sl[_ci].mv[i];
        }
    }
    var totalPoints = totalASpts + totalMVpts;
    var totalEarnedPoints = earnedASpts + earnedMVpts;
    var asPercentage; var mvPercentage; var totalPointsPercentage;
    if (_elapsedWeeks > 2) {
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
    if (_elapsedWeeks > 1) {
        for (i = _elapsedWeeks-2; i >= 0; i--) {
            if (i > 31) { continue }
            var div1 = document.createElement("div");
            div1.setAttribute("id","as"+i+"Pop");
            div1.classList.add("asButton");
            (function(i){
                div1.onclick = function () {
                    asPop(i,_asMaxPts[i]);
                }
            })(i);
            var textNode1 = document.createTextNode(_asFulls[i]);
            div1.appendChild(textNode1);
            document.getElementById("asPop").appendChild(div1);
        }
        for (j = _elapsedWeeks-2; j >= 0; j--) {
            if (j > 31) { continue }
            var div2 = document.createElement("div");
            div2.setAttribute("id","mv"+j+"Pop");
            div2.classList.add("mvButton");
            (function(j){
                div2.onclick = function () {
                    mvPop(j,_mvMaxPts[j]);
                }
            })(j);
            var textNode2 = _mvFulls[j] + "<br>" + _mvTextSnippets[j];
            div2.innerHTML = textNode2;
            document.getElementById("mvPop").appendChild(div2);
        }
    }
}

function loadStudentPhoto() {
    document.getElementById("dispStudentPhoto").style.backgroundImage = "none";
    if (_sl[_ci].photo === true) {
        if (_sl[_ci].first.includes(" ")) {
            var firstArray = _sl[_ci].first.split(" ");
            document.getElementById("dispStudentPhoto").style.backgroundImage = "url(img/student-thumbnails/"+firstArray[0].toLowerCase()+"-"+firstArray[1].toLowerCase()+"-"+_sl[_ci].last.toLowerCase()+".jpeg";
        } else {
            document.getElementById("dispStudentPhoto").style.backgroundImage = "url(img/student-thumbnails/"+_sl[_ci].first.toLowerCase()+"-"+_sl[_ci].last.toLowerCase()+".jpeg)";
        }
        document.getElementById("dispStudentPhoto").innerHTML = "";
    } else {
        document.getElementById("dispStudentPhoto").innerHTML = "click here to add photo";
    }
}

function photoLinks() {
    if (_sl[_ci].photo === false) {
        actionAlert("Toggle photo on/off?",["editStudentPop"],togglePhoto);
    } else {
        if (_sl[_ci].first.includes(" ")) {
            var firstArray = _sl[_ci].first.split(" ");
            window.open("img/students/"+firstArray[0].toLowerCase()+"-"+firstArray[1].toLowerCase()+"-"+_sl[_ci].last.toLowerCase()+".jpeg");
        } else {
            window.open("img/students/"+_sl[_ci].first.toLowerCase()+"-"+_sl[_ci].last.toLowerCase()+".jpeg");
        }
    }
}

function togglePhoto() {
    if (_sl[_ci].photo === false) {
        _sl[_ci].photo = true;
    } else {
        _sl[_ci].photo = false;
    }
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
    if (_elapsedWeeks > 1) {
        var noneHidden = true;
        for (i = 0; i < (_elapsedWeeks-2); i++) {
            if (document.getElementById("as"+i+"Pop").style.display == "none" || document.getElementById("mv"+i+"Pop").style.display == "none") {
                noneHidden = false; break;
            }
        }
        if (noneHidden) {
            for (i = 0; i < (_elapsedWeeks-2); i++) {
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
            for (i = 0; i < (_elapsedWeeks-2); i++) {
                document.getElementById("as"+i+"Pop").style.display = "block";
                document.getElementById("mv"+i+"Pop").style.display = "block";
            }
        }
    }
}

function resetMissions() {
    if (_elapsedWeeks > 1) {
        for (i = 0; i < (_elapsedWeeks-2); i++) {
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
        document.getElementById("attDate"+i).innerHTML = cdn(_dns[i]);
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
        document.getElementById("studentAttDate"+i).innerHTML = cdn(_dns[i]);
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

function cdn(dn,type) {
    var months = [8,9,10,11,12,1,2,3,4,5,6,7];
    var cumulative = [0,31,61,92,122,153,184,212,243,273,304,334];
    var cumulativeLeap = [0,31,61,92,122,153,184,213,244,274,305,335];
    var month; var date;
    if (_leapYear === false) {
        for (j = 0; j < cumulative.length; j++) {
            if (dn >= cumulative[j] && dn <= cumulative[j+1]) {
                month = months[j]; date = dn - cumulative[j]; break;
            }
            if (dn > 334) {
                month = 7; date = dn - 334; break;
            }
        }
    } else {
        for (j = 0; j < cumulative.length; j++) {
            if (dn >= cumulativeLeap[i] && dn <= cumulativeLeap[j+1]) {
                month = months[j]; date = dn - cumulativeLeap[j]; break;
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
        return month.toString() + "/" + date.toString();
    }
}

function assignDn(month,date) {
    if (month == 0 || date == 0) { return 1000 } var dn;
    var cumulative = [153,184,212,243,273,304,334,0,31,61,92,122];
    var cumulativeLeap = [153,184,213,244,274,305,335,0,31,61,92,122];
    if (month >= 8) {
        dn = (cumulative[month-1]) + date;
    }
    if (month < 8) {
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
    for (i = 0; i < months.length; i++) {
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

function allPhotosTrue() {
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            _sl[i].photo = true
        }
    } 
    storeAndBackup();
}

function allEmailsOnFile() {
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            _sl[i].email = "on file"
        }
    } 
    storeAndBackup();
}

function batchFilterSL(property,value) {
    var count = 0;
    for (i = 0; i < _sl.length; i++) {
        if(_sl[i][property] == value) {
            console.log(_sl[i].full); count++;
        } 
    }
    if (count == 0) { 
        console.log("no results");
    } else { 
        console.log(count + " MATCHES / " + (_sl.length - count) + " NON-MATCHES");
    }
}

function batchDisplaySL(property) {
    for (i = 0; i < _sl.length; i++) {
        console.log(_sl[i].full + ": " + _sl[i][property]);
    } 
}

function displayStudentProperties(full) {
    var result = false;
    for (i = 0; i < _sl.length; i++) {
        if(_sl[i]["full"] == full) {
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

function batchEditObject(objectName) {
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            var array = [];
            for (var x in _sl[i][objectName]) {
                array.push(_sl[i][objectName][x]);
            } // creates an array of all values from student.as
            if (array[16] == 6) {
                array[16] = 3;
                array.splice(16,0,3) // if student earned full credit for jn-14-15, assign full credit (3) to jn-14 (now index 16) and full credit (3) to jn-15 (now index 17)
            } else {
                array.splice(16,0,0) // if student earned no points for jn-14-15, assign 0 points to jn-14 and jn-15
            }
            for (j = 0; j < 32; j++) {
                _sl[i][objectName][j] = array[j]
            } // overwrite student.as with properties 0-31 with values from the respective indices from array
        }
        storeAndBackup();
    }
}

function batchEditArray() {
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            if (_sl[i].amAtt[16] == 1) {
                _sl[i].amAtt.splice(16,0,1)
            } else {
                _sl[i].amAtt.splice(16,0,0)
            }
            if (_sl[i].pmAtt[16] == 1) {
                _sl[i].pmAtt.splice(16,0,1)
            } else {
                _sl[i].pmAtt.splice(16,0,0)
            }
        }
        storeAndBackup();
    }
}

function batchDeleteProperty(propertyName) {
    var doesntExist = []; var count = 0;
    for (i = 0; i < _sl.length; i++) {
        if (typeof _sl[i][propertyName] === "undefined") {
            doesntExist.push(_sl[i])
        }
    }
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            if (typeof _sl[i][propertyName] !== "undefined") {
                delete _sl[i][propertyName]; count++
            }
        }
    }
    console.log("The property '" + propertyName + "' has been deleted from " + count + " out of " + _sl.length + " students");
    if (doesntExist.length > 0) {
        console.log(doesntExist.length + " students did not have property and were skipped:")
        for (i = 0; i < doesntExist.length; i++) {
            console.log(doesntExist[i].full)
        }
    }
    storeAndBackup();
}

function batchAddProperty(propertyName,value) {
    var alreadyExists = []; var count = 0;
    for (i = 0; i < _sl.length; i++) {
        if (typeof _sl[i][propertyName] !== "undefined") {
            alreadyExists.push(_sl[i])
        }
    }
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            if (typeof _sl[i][propertyName] === "undefined") {
                _sl[i][propertyName] = value; count++
            }
        }
    }
    console.log("The property '" + propertyName + "' has been added to " + count + " out of " + _sl.length + " students");
    if (alreadyExists.length > 0) {
        console.log(alreadyExists.length + " students already had this property and were skipped. To force this property and value to all students, use 'consoleBatchEditSL' instead:")
        for (i = 0; i < alreadyExists.length; i++) {
            console.log(alreadyExists[i].full + " '" + propertyName + "': " + alreadyExists[i][propertyName])
        }
    }
    storeAndBackup();
}

function batchEditSL(propertyName,value) {
    var count = 0;
    if (confirm("Confirm batch action") == true) {
        for (i = 0; i < _sl.length; i++) {
            _sl[i][propertyName] = value; count++
        }
    }
    console.log("The property '" + propertyName + "' has been edited for " + count + " out of " + _sl.length + " students");
    storeAndBackup();
}

whatToLoad()

document.getElementById("searchMain").focus();