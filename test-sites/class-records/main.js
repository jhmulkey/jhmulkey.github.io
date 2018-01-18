var promotionSound = new Audio();
promotionSound.src = "promotion.mp3";

var _currentName;
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
        this.as = {
            as11: false,
            as12: false,
            as13: false,
            as14: false,
            as15: false,
            as16: false,
            as17: false,
            as18: false,
            as19: false,
            asq1b: false,
            as21: false,
            as22: false,
            as23: false,
            as24: false,
            as25: false,
            as26: false,
            as27: false,
            as28: false,
            asq2b: false,
            as31: false,
            as32: false,
            as33: false,
            as34: false,
            as35: false,
            as36: false,
            as37: false,
            asq3b: false,
            as41: false,
            as42: false,
            as43: false,
            as44: false,
            as45: false,
            as46: false,
            as47: false,
            as48: false,
            asq4b: false
        }
        this.mv = {
            mv11: false,
            mv12: false,
            mv13: false,
            mv14: false,
            mv15: false,
            mv16: false,
            mv17: false,
            mv18: false,
            mv19: false,
            mv21: false,
            mv22: false,
            mv23: false,
            mv24: false,
            mv25: false,
            mv26: false,
            mv27: false,
            mv28: false,
            mv31: false,
            mv32: false,
            mv33: false,
            mv34: false,
            mv35: false,
            mv36: false,
            mv37: false,
            mv41: false,
            mv42: false,
            mv43: false,
            mv44: false,
            mv45: false,
            mv46: false,
            mv47: false
        }
    }
    
    setPoints(x) {
        this.points = x;
        this.rank = Math.floor(x/10);
    }
    
    promotion() {
        this.rank++;
        this.setRankName();
        promotionSound.play();
        document.getElementById("popRank").innerHTML = this.rankName;
        document.getElementById("popInsignia").style.backgroundImage = "url(images/"+this.rank+".png)";
        document.getElementById("popRankPromo").innerHTML = this.rankName;
        document.getElementById("popInsigniaPromo").style.backgroundImage = "url(images/"+this.rank+".png)";
        setTimeout(function() {
            pop("missionsPop","promoPop")
        },500);
    }
    
    asPoints(_asNum,x) {
        this.as[_asNum] = true;
        if ((this.points - (this.rank * 10)) + x >= 10) {
            this.promotion();
        }
        this.points += x;
        document.getElementById("popPoints").innerHTML = this.points;
        document.getElementById("popRank").innerHTML = this.rankName;
        
        for (var key in this.as) {
            if (this.as[key] === true) {
                document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
            } else {
                document.getElementById(key+"Pop").style.backgroundImage = "none";
            };
        };
        
        pop("asPointsPop","missionsPop")
    }
    
    mvPoints(_mvNum,x) {
        this.mv[_mvNum] = true;
        if ((this.points - (this.rank * 10)) + x >= 10) {
            this.promotion();
            this.setRankName();
        }
        this.points += x;
        document.getElementById("popPoints").innerHTML = this.points;
        document.getElementById("popRank").innerHTML = this.rankName;
    }
    
    asDone(x,undo) {
        if (undo) {
            this.as[x] = false;
        } else {
            this.as[x] = true;
        };
    }
    
    mvDone(x,undo) {
        if (undo) {
            this.mv[x] = false;
        } else {
            this.mv[x] = true;
        };
    }
    
    setRankName() {
        var rankNames = ["New Recruit","PVT","PFC","CPL","SGT","SSG","SFC","MSG","SGM","CSM","2LT","1LT","CPT","MAG","LTC","COL","BG","MG","LTG","GEN","GOA",];
        this.rankName = rankNames[this.rank];
    }
    
    asCompletion() {
        var completed = 0;
        for (var key in this.as) {
            if (this.as[key] === true) {
                completed++;
            };
        };
        return (Math.round(((completed / Object.keys(this.as).length) * 100) * 10) / 10) + " %";
    }
    
    mvCompletion() {
        var completed = 0;
        for (var key in this.mv) {
            if (this.mv[key] === true) {
                completed++;
            };
        };
        return (Math.round(((completed / Object.keys(this.mv).length) * 100) * 10) / 10) + " %";
    }
    
    allCompletion() {
        var completed = 0;
        for (var key in this.as) {
            if (this.as[key] === true) {
                completed++;
            };
        };
        for (var key in this.mv) {
            if (this.mv[key] === true) {
                completed++;
            };
        };
        return (Math.round(((completed / (Object.keys(this.as).length + Object.keys(this.mv).length) * 100) * 10)) / 10) + " %";
    }
};


var Rogers = new Student("Cameron","Rogers");
var Walker = new Student("Macie","Walker");

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

function loadStudent(name) {
    _currentName = name;
    document.getElementById("studentPop").style.display = "block";
    document.getElementById("mainPop").style.display = "none";    
    document.getElementById("popRank").innerHTML = name.rankName;
    document.getElementById("popName").innerHTML = name.fullName;
    document.getElementById("popInsignia").style.backgroundImage = "url(images/"+name.rank+".png)";
    document.getElementById("popPoints").innerHTML = name.points;
    document.getElementById("search").value = "";
    searchNames();
    
    for (var key in name.as) {
        if (name.as[key] === true) {
            document.getElementById(key+"Pop").style.backgroundImage = "url(images/check.png)";
        } else {
            document.getElementById(key+"Pop").style.backgroundImage = "none";
        };
    };
    
    for (var key in name.mv) {
        if (name.mv[key] === true) {
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
};

function mvPop(mvNum) {
    document.getElementById("missionsPop").style.display = "none";
    document.getElementById("mvPointsPop").style.display = "block"; 
    _mvNum = mvNum;
};
    
document.getElementById("search").focus();