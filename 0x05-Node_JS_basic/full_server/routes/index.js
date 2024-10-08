import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const routes = express.Router();

routes.get('/', AppController.getHomepage);
routes.get('/students', StudentController.getAllStudents);
routes.get('/students/:major', StudentController.getAllStudentsByMajor);

export default routes;
