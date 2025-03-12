# Follow-Up Prompts

* As we have seen, prompt construction often involves an iterative process of fine-tuning.

* Based on the quality of the prompt result, the original prompt can be repeatedly modified and retried.

* An alternative approach is to make use of the concept of follow-up prompts.

* A **follow-up prompt** is constructed in the context of the initially issued prompt.

* This allows us to use a conversational back-and-forth approach to obtain the optimal prompt responses.

* Open ChatGPT in your browser and issue the following prompt:

  ```text
  What are some examples of sorting algorithms?
  ```
  
  * In response, ChatGPT returns a number of algorithm options, including bubble sort, selection sort, and insertion sort.

    ```text
    Sorting algorithms are fundamental in computer science and are used to arrange elements in a list or array in a particular order (typically ascending or descending). Here are some commonly used sorting algorithms, along with brief descriptions of each:

    ...
    ```

  * At this point, our initial prompt has established a context for the conversation, and subsequent prompts will be treated accordingly.
  
  * We now ask ChatGPT to more be specific with a follow-up prompt:

    ```text
    Which option do you recommend?
    ```

  * ChatGPT responds with more information, although mostly qualifying the information by explaining that it depends on the nature of the data to be sorted.

    ```text
    The choice of sorting algorithm depends on various factors, including the size of the data, the nature of the data, memory constraints, and the importance of average versus worst-case performance. Here are some guidelines to help you choose:

    ...
    ```

  * Again, with the context of the conversation remaining in place, we ask ChatGPT to refine its answer:

    ```text
    Which option do you recommend for a million element integer array?
    ```

  * With more context in place, ChatGPT narrows down its answer to a few specific sorting algorithm choices.

  * This follow-up approach is common to problem-solving and is natural to human conversations.

* Explain to students that follow-up prompts can also be used as a tool for circling back to and refining the original prompt.

* For example, if we change our initial prompt to reflect what we have learned from the follow-ups, the response we receive will be similar to the previous follow-up prompt:

  ```text
  Which sorting algorithm do you recommend for a million element integer array?
  ```

* There are many other application for follow-up prompting. Let's start with an open-ended complex question:

  ```text
  What is a neural network?
  ```

  * ChatGPT responds with a thorough and informational response, although one that many audiences might find overwhelming.

    ```text
    A neural network is a computational model designed to simulate the way the human brain processes information. It consists of interconnected nodes, or neurons, which work together to solve specific problems. These models are a key component of machine learning and artificial intelligence.

    ...
    ```

  * We ask ChatGPT to tone down the complexity by following up with a request for simplicity:

    ```text
    Please explain in much simpler terms.
    ```

  * ChatGPT returns a similar response to the previous one, but now with simpler, easier to understand language.

    ```text
    A neural network is a computer program that learns from data to make decisions or predictions, similar to how our brains learn.

    ...
    ```

  * We can also ask ChatGPT to translate the response into a language in which we are perhaps more fluent:

    ```text
    Please translate into Spanish.
    ```

  * Once again, from our experience, we can circle back to our original prompt and consolidate the follow-ups into a new initial prompt:

    ```text
    Using Spanish, please explain neural networks in simple terms.
    ```

* Follow-up prompting provides many other options, including requests for clarifications, additional examples, supporting information, and alternate formatting for the information provided.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What is the relationship between follow-up prompting and the other prompt types we have learned?

  * 🙋 One application for follow-up prompting is to use it as a tool to refine the original prompt, ultimately combining the follow-up prompts into a single consolidated prompt.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
