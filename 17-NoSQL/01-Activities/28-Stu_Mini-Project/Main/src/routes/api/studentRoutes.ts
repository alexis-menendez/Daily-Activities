import { Router } from 'express';
const router = Router();
import {
  getAllStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} from '../../controllers/studentController.js';

// /api/students
router.route('/').get(getAllStudents).post(createStudent);

// /api/students/:studentId
router.route('/:studentId').get(getStudentById).delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

export { router as studentRouter} ;
