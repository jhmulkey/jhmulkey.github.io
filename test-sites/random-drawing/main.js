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

let pickedStudents = [];

/*
function chooseWinner() {
    let i = Math.floor(Math.random() * (students.length - 1));
    let winner = students[i];
    if (winner === undefined) {
        document.getElementById("winner").classList.add("white");
        document.getElementById("winner").innerHTML = "No More Names!";
    } else {
        document.getElementById("winner").innerHTML = winner;
        students.splice(i, 1);
        pickedStudents.push(winner);
        document.getElementById("picked-students").innerHTML = "Picked: " + pickedStudents.join(", ");
        document.getElementById("reset-button").classList.remove("hide");
    };
}
*/

function chooseWinner() {
    let i = Math.floor(Math.random() * (students.length - 1));
    let winner = students[i];
    if (winner === undefined) {
        document.getElementById("winner").classList.add("white");
        document.getElementById("winner").innerHTML = "No More Names!";
    } else if (pickedStudents.length > 0) {
        document.getElementById("picked-students").classList.remove("hide");
        document.getElementById("winner").innerHTML = winner;
        students.splice(i, 1);
        pickedStudents.push(winner);
        document.getElementById("picked-students").innerHTML = "Picked: " + pickedStudents.join(", ");
    } else {
        document.getElementById("winner").innerHTML = winner;
        students.splice(i, 1);
        pickedStudents.push(winner);
        document.getElementById("picked-students").innerHTML = "Picked: " + pickedStudents.join(", ");
    };
}

function resetPage() {
    location.reload();
}