const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8').trim().split('\n');
  } catch (e) {
    throw new Error('Cannot load the database');
  }
  const fields = data[0].split(',');
  const studentsData = {};

  for (let i = 1; i < data.length; i += 1) {
    const student = data[i].split(',');
    const tempDict = {
      [fields[0]]: student[0],
      [fields[1]]: student[1],
      [fields[2]]: student[2],
    };

    // console.log(tempDict)
    if (!studentsData[student.at(-1)]) {
      studentsData[student.at(-1)] = [];
    }
    studentsData[student.at(-1)].push(tempDict);
  }

  console.log(`Number of students: ${data.length - 1}`);
  for (const [key, value] of Object.entries(studentsData)) {
    const names = value.map((element) => element[fields[0]], value);
    console.log(`Number of students in ${key}: ${value.length}. List: ${names.join(', ')}`);
  }
}
module.exports = countStudents;
