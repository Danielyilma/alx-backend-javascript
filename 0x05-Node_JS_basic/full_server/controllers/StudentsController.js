import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const title = 'This is the list of our students\n';
    let respData = title;
    readDatabase('database.csv')
      .then((students) => {
        for (const key of Object.keys(students).sort()) {
          respData += `Number of students in ${key}: ${
            students[key].length
          }. List: ${students[key].join(', ')}\n`;
        }
        response.statusCode = 200;
        response.send(respData.slice(0, -1));
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(title + err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const title = 'This is the list of our students\n';
    readDatabase('database.csv')
      .then((students) => {
        if (!(request.params.major && students[request.params.major])) {
          response.statusCode = 500;
          response.send('Major parameter must be CS or SWE');
          return;
        }
        const field = request.params.major;
        const report = `List: ${field}: ${
          students[field].length
        }. List: ${students[field].join(', ')}`;

        response.statusCode = 200;
        response.send(title + report);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(title + err.message);
      });
  }
}

module.exports = StudentsController;
