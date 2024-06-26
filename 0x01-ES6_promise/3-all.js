import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => {
    process.stdout.write(`${response.body} `);
  }).catch(() => {
    console.log('Signup system offline');
  });

  createUser().then((response) => {
    console.log(response.firstName, response.lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
