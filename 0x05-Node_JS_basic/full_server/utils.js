import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else if (data) {
        const filedata = data.trim().split('\n');
        const students = {};

        filedata.slice(1).map((element) => {
          const studentData = element.split(',');
          if (!students[studentData[studentData.length - 1]]) {
            students[studentData[studentData.length - 1]] = [];
          }
          students[studentData[studentData.length - 1]].push(studentData[0]);
          return null;
        });
        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
