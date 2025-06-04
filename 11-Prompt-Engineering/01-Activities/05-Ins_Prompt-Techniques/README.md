# Prompt Techniques

Now that you have a better understanding of what prompt engineering is, we will explore some specific techniques that you can use to enhance your prompts.

* Open [ChatGPT](https://chatgpt.com/) in your browser.

The number of examples and level of detail of the input data included in the prompt can have a significant effect on the response. In prompt engineering there are specific terms to describe the number of data points provided.

## Zero-Shot Prompting

* **Zero-shot prompting** means that we are prompting the model without providing any examples. The AI model is relying solely on its pre-trained knowledge to generate a response.

* Demonstrate zero-shot prompting by entering the following prompt:

  ```text
  Recommend a movie about a killer shark.
  ```

* We are asking the AI model to provide a recommendation without providing any examples of movies that we like or don't like.

* Zero-shot prompting is useful when seeking a broad output. Through the use of questions and answers with the algorithm, you can then guide it toward a more specific output if you so choose. Zero-shot prompting can also be a great tool when seeking a creative, out-of-the box output from the model.

## One-Shot Prompting

* **One-shot prompting** means that we are prompting the model and providing a single example.

* Demonstrate one-shot prompting by entering the following prompt:

  ```text
  Recommend a movie about a killer shark. I like Jaws.
  ```

* One-shot prompting can be useful when you are seeking to narrow down the response, but still want to give the model room to come up with potentially unpredictable outputs.

## Few-Shot Prompting

* **Few-shot prompting** means that we are prompting the model and providing multiple examples.

* Demonstrate few-shot prompting by entering the following prompt:

  ```text
  Recommend a movie about a killer shark. I like Jaws, The Shallows, and Open Water. I don't like the Sharknado movies or The Meg.
  ```

* With few-shot prompting, we can provide multiple examples&mdash;usually between two and five. This technique allows to focus the AI model and guide it to find more a specific response.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ Why would we choose zero-shot prompting?

  * 🙋 We would choose zero-shot prompting when we want a general answer or we want the AI model to be more creative in its response.

  * ☝️ Why would we choose few-shot prompting?

  * 🙋 When we are looking for a more specific answer, few-shot prompting may give us the best results. With few-shot prompting, we can provide multiple examples to help guide the AI model into focusing on a more relevant response.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
