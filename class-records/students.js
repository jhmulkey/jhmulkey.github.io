var _ci;
var _asNum;
var _mvNum;

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

sl = [];

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

function ranksLink() {
    window.open("../docs/ranks.pdf");
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
};

function mvPop(mvNum,index) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPointsPop").style.display = "block"; 
    _mvNum = mvNum;
    document.getElementById("mvText").innerHTML = mvText[index];
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
    "Rom 8:34<br/>Who is to condemn?  Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us.",
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

//***ONLOAD***//
document.getElementById("search").focus();
sl = JSON.parse(localStorage.getItem("backup"));
populateNames();