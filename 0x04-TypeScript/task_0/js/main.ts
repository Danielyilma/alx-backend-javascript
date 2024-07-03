interface Student {
    firstName: string, 
    lastName: string,
    age: number,
    location: string;
}

let student1: Student = {
    firstName: "abel",
    lastName: "abebe",
    age: 22,
    location: "A.A"
}

let student2: Student = {
    firstName: "abel1",
    lastName: "abebe1",
    age: 22,
    location: "A.A"
}

let studentsList = [student1, student2]
let table = document.querySelector("tbody");

studentsList.forEach((element) => {
    let row = document.createElement("tr");
    let el1 = document.createElement("td");
    el1.textContent = element.firstName;
    let el2 = document.createElement("td");
    el2.textContent = element.location;

    row.appendChild(el1);
    row.appendChild(el2);
    table.appendChild(row);
})