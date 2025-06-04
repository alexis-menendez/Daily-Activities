DO $$
  DECLARE
      -- Any variable declarations would go here
  BEGIN
      -- Begin transaction

      INSERT INTO students (student_id, student_name)
      VALUES
        (1, 'Kim Tan'),
        (2, 'Jane Dispenza'),
        (3, 'Han Cohen'),
        (4, 'Emily Johnson'),
        (5, 'Lance Dorji');

      INSERT INTO courses (course_id, course_name)
      VALUES
        (101, 'Math'),
        (102, 'Science'),
        (103, 'History'),
        (104, 'English');

      INSERT INTO enrollments (enrollment_id, student_id, course_id)
      VALUES
        (1001, 1, 101),
        (1002, 2, 102),
        (1003, 3, 101),
        (1004, 4, 103),
        (1005, 5, 104);


    -- If the code reaches here, it means no exceptions were raised.
    -- Thus, it will commit automatically at the end of the block.
RAISE NOTICE 'Transaction complete';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM; -- Log the error
        ROLLBACK; -- Explicitly roll back changes in case of error
END $$;

-- Query the database
-- SELECT * FROM students;
-- SELECT * FROM courses;
-- SELECT * FROM enrollments
-- JOIN students ON students.student_id = enrollments.student_id
-- JOIN courses ON courses.course_id = enrollments.course_id;
