const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 1245;

function captureScriptOutput(path) {
  return new Promise((resolve, reject) => {
    if (path == null) {
      reject(new Error('Cannot load the databas'));
    }
    const child = spawn('node', ['./script.js', path]);

    let output = '';

    child.stdout.on('data', (data) => {
      if (data != null) {
        output += data.toString();
      }
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error('Cannot load the databas'));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const title = 'This is the list of our students\n';
  captureScriptOutput(process.argv[2])
    .then((output) => {
      res.statusCode = 200;
      res.end(title + output.slice(0, -1));
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(title + err.message);
    });
});

app.listen(port, () => {
  console.log('express app listening on port 1245');
});

module.exports = app;
