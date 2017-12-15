bonusArray = [
    "Up to 4 six-sided tiles may be stored on player board",
    "Sell all your goods",
    "Instantly move to first player position on turn order track",
    "Take any building tile from the board including black market",
    "Take any knowledge tile from the board including black market",
    "Take any animal tile from the board including black market",
    "Take a castle tile from the board including black market",
    "Take a mine tile from the board including black market",
    "Take a ship tile from the board including black market",
    "You get one free move",
    "Take two silverlings",
    "Take two worker tiles",
    "Earn 2 silverlings for every mine on estate at end of each phase",
    "You earn 5 victory points",
    "Each animal tile you place is worth double victory points but only at time of placement",
    "Place any stored six-sided tile onto estate even if not adjacent to a previously placed tile"
];

function chooseBonus() {
    x = bonusArray[(Math.floor(Math.random() * bonusArray.length))];
    document.getElementById("bonus-description").innerHTML = x;
};

chooseBonus();