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

function chooseWinner() {
    let i = Math.floor(Math.random() * (students.length - 1));
    let winner = students[i];
    if (students.length > 0) {
        document.getElementById("winner").innerHTML = winner;
        students.splice(i, 1);
        pickedStudents.push(winner);
        document.getElementById("picked-students").classList.remove("hide");
        document.getElementById("picked-students").innerHTML = '<span style="background-color: rgba(255,255,255,0.35)">Picked (' + pickedStudents.length + " of " + (pickedStudents.length + students.length) + ")</span><br/>" + pickedStudents.join("<br/>");
    } else {
        document.getElementById("winner").classList.add("white");
        document.getElementById("winner").innerHTML = "No More Names!";
        document.getElementById("winner-button").classList.add("hide");
        document.getElementById("reset-button").classList.remove("hide");
    };
}

function resetPage() {
    location.reload();
}