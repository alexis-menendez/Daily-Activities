# 08 TypeScript and OOP: Vehicle Builder

## Your Task

Your task is to update an existing TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application.

Because this application won't be deployed, you'll need to provide a link to a walkthrough video that demonstrates its functionality. You'll need to submit a link to the video **and** add it to the README of your project.

Refer to the [video submission guide on the Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

### User Story

```md
AS a developer
I WANT to update an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit
```

## Additional Requirements

This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

Your application should use [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
npm start
```

## 📝 Notes

Moving forward, you will be provided with the `tsconfig.json` file. This is to reflect the fact that most companies assign you projects with these configurations already set up.

## Helpful TypeScript Resources

* [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

* [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

* [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

* [More on functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Grading Requirements

> **Note** If a Challenge assignment submission is marked as "0," it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 20%

* A walkthrough video that demonstrates the functionality of the Vehicle Builder.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate all the prompts and functionality related to trucks and motorbikes working properly.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * It uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

  * The application must have properly implemented `Truck` and `Motorbike` classes:

    * The user should be able to choose between a car, a truck, or a motorbike when creating a vehicle.

    * The `Truck` and `Motorbike` classes must prompt the user for details that the `Car` class doesn't.

    * The `Truck` class must allow the user to implement an action that the `Car` and `Motorbike` classes cannot.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
