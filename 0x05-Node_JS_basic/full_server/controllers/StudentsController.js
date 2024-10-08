import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    let respData = 'This is the list of our students\n';
    readDatabase(process.argv[2])
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
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const title = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((students) => {
        if (!(request.params.major && students[request.params.major])) {
          response.statusCode = 500;
          response.send('Major parameter must be CS or SWE');
          return;
        }
        const field = request.params.major;
        const report = `List: ${students[field].join(', ')}`;

        response.statusCode = 200;
        response.send(title + report);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }
}

module.exports = StudentsController;
