// ObjectId() method for converting studentId string into an ObjectId for querying database
import { ObjectId } from 'mongodb';
import { Student, Course } from '../models/index.js';
import { Request, Response } from 'express';

// TODO: Create an aggregate function to get the number of students overall

export const headCount = async () => {
    // Your code here
    const numberOfStudents = await Student.aggregate()
    return numberOfStudents;
}

// Aggregate function for getting the overall grade using $avg
export const grade = async (studentId: string) =>
    Student.aggregate([
        // TODO: Ensure we include only the student who can match the given ObjectId using the $match operator
    {
        // Your code here
      },
      {
        $unwind: '$assignments',
      },
      // TODO: Group information for the student with the given ObjectId alongside an overall grade calculated using the $avg operator
      {
        // Your code here
      },
    ]);

/**
 * GET All Students /students
 * @returns an array of Students
*/
export const getAllStudents = async (_req: Request, res: Response) => {
    try {
        const students = await Student.find();

        const studentObj = {
            students,
            headCount: await headCount(),
        }

        res.json(studentObj);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Student based on id /students/:id
 * @param string id
 * @returns a single Student object
*/
export const getStudentById = async (req: Request, res: Response) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findById(studentId);
        if (student) {
            res.json({
                student,
                grade: await grade(studentId)
            });
        } else {
            res.status(404).json({
                message: 'Student not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * POST Student /students
 * @param object student
 * @returns a single Student object
*/

export const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (err) {
        res.status(500).json(err);
    }
}
/**
 * DELETE Student based on id /students/:id
 * @param string id
 * @returns string 
*/

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findOneAndDelete({ _id: req.params.studentId });

        if (!student) {
            return res.status(404).json({ message: 'No such student exists' });
        }

        const course = await Course.findOneAndUpdate(
            { students: req.params.studentId },
            { $pull: { students: req.params.studentId } },
            { new: true }
        );

        if (!course) {
            return res.status(404).json({
                message: 'Student deleted, but no courses found',
            });
        }

        return res.json({ message: 'Student successfully deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

/**
 * POST Assignment based on /students/:studentId/assignments
 * @param string id
 * @param object assignment
 * @returns object student 
*/

export const addAssignment = async (req: Request, res: Response) => {
    console.log('You are adding an assignment');
    console.log(req.body);
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.studentId },
            { $addToSet: { assignments: req.body } },
            { runValidators: true, new: true }
        );

        if (!student) {
            return res
                .status(404)
                .json({ message: 'No student found with that ID :(' });
        }

        return res.json(student);
    } catch (err) {
        return res.status(500).json(err);
    }
}

/**
 * DELETE Assignment based on /students/:studentId/assignments
 * @param string assignmentId
 * @param string studentId
 * @returns object student 
*/

export const removeAssignment = async (req: Request, res: Response) => {
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.studentId },
            { $pull: { assignments: { assignmentId: req.params.assignmentId } } },
            { runValidators: true, new: true }
        );

        if (!student) {
            return res
                .status(404)
                .json({ message: 'No student found with that ID :(' });
        }

        return res.json(student);
    } catch (err) {
        return res.status(500).json(err);
    }
}
