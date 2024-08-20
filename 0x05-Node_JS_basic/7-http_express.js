const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 1245;

function captureScriptOutput(path) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', ['./script.js', path]);

    let output = '';
    let error = '';
    child.stdout.on('data', (data) => {
      if (data != null) {
        output += data.toString();
      }
    });

    child.stderr.on('data', (data) => {
      error += data;
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`Process exited with code ${code}. Error: ${error}`));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const title = 'This is the list of our students\n';
  captureScriptOutput(process.argv[2])
    .then((output) => res.end(title + output.slice(0, -1)))
    .catch(() => {
      res.statusCode = 400;
      res.end('error not found');
    });
});

app.listen(port, () => {
  console.log('express app listening on port 1245');
});

module.exports = app;
