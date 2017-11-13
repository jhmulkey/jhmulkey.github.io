let students = [
    "Aeralind Aldrich",
    "Bronwyn Aldrich",
    "Evan Brown",
    "Samuel Collins",
    "Ashton Cruice",
    "Raegan Deming",
    "Bella Mair",
    "Connell Morris",
    "Katie Neal",
    "Annaliese Nelson",
    "Hailey Norton",
    "Jill Pahnke",
    "Job Peoples",
    "Blake Pidcock",
    "Cameron Rogers",
    "Liam Snyder",
    "Macie Walker",
    "Olivia Waters",
];

function chooseWinner() {
    return document.getElementById("winner").innerHTML = students[Math.floor(Math.random() * (students.length - 1))];
}

function reset() {
    return document.getElementById("winner").innerHTML = "";
}

// STUDENTS RESET

/*
let students = [
    "Aeralind Aldrich",
    "Bronwyn Aldrich",
    "Evan Brown",
    "Samuel Collins",
    "Ashton Cruice",
    "Raegan Deming",
    "Bella Mair",
    "Connell Morris",
    "Katie Neal",
    "Annaliese Nelson",
    "Hailey Norton",
    "Jill Pahnke",
    "Job Peoples",
    "Blake Pidcock",
    "Cameron Rogers",
    "Liam Snyder",
    "Macie Walker",
    "Olivia Waters",
];
*/