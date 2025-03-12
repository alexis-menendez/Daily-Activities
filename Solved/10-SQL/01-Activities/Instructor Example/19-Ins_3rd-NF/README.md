# Database Normalization: From Non-3NF to 3NF

Database normalization is a process used to organize a database into tables and columns to reduce redundancy and improve data integrity.

## Non-3NF Design

We have a `students` table that combined student information, course details, and enrollment information:

**students** Table:

* `student_id`

* `student_name`

* `course_name`

* `course_instructor`

### Sample Data

| student_id | student_name | course_name     | course_instructor |
|------------|--------------|-----------------|-------------------|
| 1          | Alice        | Math            | Mr Smith          |
| 1          | Alice        | Science         | Dr Doe            |
| 2          | Bob          | Science         | Dr Doe            |
| 3          | Charlie      | Math            | Mr Smith          |
| 4          | David        | Geography       | Mr Williams       |
| 5          | Eva          | History         | Mrs Anderson      |
| 6          | Frank        | English         | Ms Johnson        |
| 7          | Grace        | Geography       | Mr Williams       |
| 8          | Hannah       | English         | Ms Johnson        |
| 9          | Ian          | History         | Mrs Anderson      |
| 10         | Jenna        | Math            | Mr Smith          |

## 3NF Design

We transform the design to 3NF by splitting the data into three separate tables:

1. **courses**:

    * `course_id`

    * `course_name`

    * `course_instructor`

2. **students**:

    * `student_id`

    * `student_name`

3. **enrollments**:

    * `student_id`

    * `course_id`

### Sample Data

**courses**:

| course_id | course_name | course_instructor |
|-----------|-------------|-------------------|
| 101       | Math        | Mr Smith          |
| 102       | Science     | Dr Doe            |
| 103       | History     | Mrs Anderson      |
| 104       | English     | Ms Johnson        |
| 105       | Geography   | Mr Williams       |

**students**:

| student_id | student_name |
|------------|--------------|
| 1          | Alice        |
| 2          | Bob          |
| 3          | Charlie      |
| 4          | David        |
| 5          | Eva          |
| 6          | Frank        |
| 7          | Grace        |
| 8          | Hannah       |
| 9          | Ian          |
| 10         | Jenna        |

**enrollments**:

| student_id | course_id |
|------------|-----------|
| 1          | 101       |
| 1          | 102       |
| 2          | 102       |
| 3          | 101       |
| 4          | 105       |
| 5          | 103       |
| 6          | 104       |
| 7          | 105       |
| 8          | 104       |
| 9          | 103       |
| 10         | 101       |
