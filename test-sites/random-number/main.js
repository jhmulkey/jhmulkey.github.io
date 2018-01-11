var _numberArray = [];

function loadNumbers() {
    var lower = parseInt(prompt("Lower Limit:"));
    var upper = parseInt(prompt("Upper Limit:"));
    
    for (i = lower; i <= upper; i++) {
        _numberArray.push(i);
    };
};

function chooseNumbers() {
    if (_numberArray.length < 1) {
        if (window.confirm("All numbers chosen. Click OK to reset")) {
            location.reload();
        };
    } else {
        i = Math.floor(Math.random() * _numberArray.length);
        document.getElementById("random-number").innerHTML = _numberArray[i];
        _numberArray.splice(i,1);
    };
};