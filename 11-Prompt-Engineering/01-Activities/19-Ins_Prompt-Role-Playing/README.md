# Role-Playing Prompts

Role-playing prompts involve assigning specific roles to the AI or the user to simulate real-world scenarios or interactions. This technique helps in testing workflows, practicing soft skills, or exploring different perspectives in a conversation.

Unlike contextual prompts that provide background information upfront, role-playing prompts immerse the AI in a specific role to generate responses aligned with that persona.

* Open ChatGPT in your browser and enter the following prompt:

  ```text
  You are an experienced developer explaining the concept of variables to a high school student just starting to learn programming.
  ```

  * ChatGPT responds by simplifying the concept of variables, making it accessible to a beginner.

    ```text
    A variable in programming is like a box where you can store information, such as a number or a piece of text. You can give this box a name, and later, you can open the box to see what's inside or even change what's in it. For example, if you want to keep track of the number of apples you have, you could create a variable called `appleCount` and set it to a number like 5. If you eat an apple, you can change `appleCount` to 4.
    ```

  * Discuss the response with the class, noting how the AI adopts a teaching style that’s appropriate for someone new to programming, using relatable analogies.

* Now, let’s change the perspective:

  ```text
  You are a software engineer explaining the concept of variables to a non-technical manager who needs to understand it for a project discussion.
  ```

  * ChatGPT responds by focusing on the practical implications of variables in the context of project development.

    ```text
    A variable in programming is a way to store and manage information that our code needs to work with. Think of it as a labeled container where we keep data that might change over time. For example, if our application tracks the number of users currently logged in, we'd store that number in a variable. This allows the program to update and use this information dynamically as users log in and out.
    ```

  * Discuss how this response is tailored to a non-technical audience, emphasizing the functional role of variables in a project without getting too deep into technical details.

* Let’s explore another example with a different audience and perspective:

  ```text
  You are a senior developer explaining the concept of recursion to a peer developer who is struggling with it.
  ```

  * ChatGPT responds by diving into a technical explanation while being mindful of the peer's existing knowledge.

    ```text
    Recursion is a technique in programming where a function calls itself to solve a problem. It’s particularly useful for problems that can be broken down into smaller, similar subproblems. For instance, when calculating the factorial of a number, you can define it in terms of the factorial of the previous number: `n! = n * (n-1)!`. The key to recursion is having a base case that stops the recursion and prevents infinite loops. If you're having trouble with it, try tracing through the function calls with simple examples to see how the stack unwinds.
    ```

  * Compare this to a non-role-playing prompt like "Explain recursion" and discuss how role-playing helps provide a more targeted response by considering the peer's familiarity with the subject.

* Explain to students that role-playing prompts are particularly useful for tailoring explanations to different audiences, whether they are beginners, non-technical stakeholders, or peers with specific knowledge gaps.

* Role-playing prompts are beneficial in a variety of contexts, such as preparing for meetings, conducting code reviews, or teaching complex concepts to different audiences.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How can role-playing prompts help developers improve their ability to explain technical concepts to different audiences?

  * 🙋 Role-playing prompts allow developers to practice adjusting their explanations based on the audience’s level of understanding, making them more effective communicators and collaborators in diverse settings.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
