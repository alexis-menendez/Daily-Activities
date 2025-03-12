# Contextual Prompts

Contextual prompts involve adding specific background or situational details to a prompt to enhance the relevance and accuracy of the response.

Unlike follow-up prompts, which build on previous interactions, contextual prompts provide all necessary information upfront, setting the stage for a more targeted response.

* Open ChatGPT in your browser and enter the following prompt:

  ```text
  Explain the importance of testing in software development.
  ```

  * ChatGPT returns a general response about the significance of testing in ensuring code quality, reducing bugs, and improving user satisfaction.

    ```text
    Testing in software development is crucial for ensuring that the code works as expected, reducing bugs, and improving the overall quality of the software. It helps developers catch issues early, preventing costly fixes down the line and ensuring a better user experience.
    ```

  * Discuss the response with the class, noting that while the information is correct, it may be somewhat generic and not tailored to a specific scenario.

* Now, let's add more context to our prompt:

  ```text
  Explain the importance of testing in software development for a small startup building its first product.
  ```

  * ChatGPT now considers the context of a small startup, potentially discussing budget constraints, time pressures, or the need for rapid iteration.

    ```text
    For a small startup building its first product, testing is particularly important because it ensures that the limited resources available are used effectively. Proper testing can help avoid costly bugs that could derail a launch, and it supports faster iteration by catching issues early in the development process. Since startups often operate under tight deadlines and budget constraints, testing helps maintain product quality while allowing for quick pivots based on user feedback.
    ```

  * Discuss how this response is more aligned with the specific needs of the target audience (a small startup).

* Let’s explore another example with a technical context:

  ```text
  What are the best practices for securing an API used in a healthcare application?
  ```

  * ChatGPT responds with a detailed answer, addressing industry-specific concerns such as compliance with regulations (e.g., HIPAA) and the handling of sensitive data.

    ```text
    Securing an API in a healthcare application involves following best practices that ensure compliance with regulations like HIPAA. This includes encrypting data in transit and at rest, implementing strong authentication and authorization mechanisms, using secure coding practices to prevent common vulnerabilities such as SQL injection and cross-site scripting, regularly auditing and logging API access, and ensuring that third-party integrations also meet security standards. Since healthcare data is highly sensitive, it's crucial to protect against data breaches and unauthorized access.
    ```

  * Compare this to a generic prompt like "How do you secure an API?" and discuss the differences in the responses.

* Explain to students that adding context to a prompt helps the AI provide more specific and relevant answers, tailored to particular needs or scenarios.

* Contextual prompts are especially useful in situations where the problem is complex or involves specific requirements, such as in regulated industries, specific audiences, or unique project constraints.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What is the relationship between contextual prompting and the other prompt types we have learned?

  * 🙋 Contextual prompting provides the AI with all relevant details at once, guiding it to generate a focused and pertinent response, while other prompt types like follow-up prompts build on the information provided over multiple interactions.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
