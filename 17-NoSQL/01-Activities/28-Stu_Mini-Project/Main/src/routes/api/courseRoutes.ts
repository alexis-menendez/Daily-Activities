import { Router } from 'express';
const router = Router();
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../../controllers/courseController.js';

// /api/courses
router.route('/').get(getAllCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getCourseById)
  .put(updateCourse)
  .delete(deleteCourse);

export { router as courseRouter };
