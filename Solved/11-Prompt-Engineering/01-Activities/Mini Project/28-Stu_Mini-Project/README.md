# Module 08 Mini-Project: Summary Generator

In this activity, you'll work with a group to build a REST API that will accept text content and then call the OpenAI API to summarize that content into bullet points.

**Important**: If you decide not to use the OpenAI API due to cost, you can still complete this activity. However, you won't receive direct responses from the AI model. Instead, you can take the formatted prompts and paste them into ChatGPT to obtain similar responses.

## Instructions

The completed REST API should meet the following criteria:

* As a user, I can post content to an endpoint and receive a summary of bullet points about that content.

## Sample Input

```json
{
    "text": "Johannes Gutenberg (1398 – 1468) was a German goldsmith and publisher who introduced printing to Europe. His introduction of mechanical movable type printing to Europe started the Printing Revolution and is widely regarded as the most important event of the modern period. It played a key role in the scientific revolution and laid the basis for the modern knowledge-based economy and the spread of learning to the masses.\nGutenberg many contributions to printing are: the invention of a process for mass-producing movable type, the use of oil-based ink for printing books, adjustable molds, and the use of a wooden printing press. His truly epochal invention was the combination of these elements into a practical system that allowed the mass production of printed books and was economically viable for printers and readers alike.\nIn Renaissance Europe, the arrival of mechanical movable type printing introduced the era of mass communication which permanently altered the structure of society. The relatively unrestricted circulation of information—including revolutionary ideas—transcended borders, and captured the masses in the Reformation. The sharp increase in literacy broke the monopoly of the literate elite on education and learning and bolstered the emerging middle class."
}
```

## Sample Output

```json
{
    "result": "- Johannes Gutenberg introduced printing to Europe, starting the Printing Revolution\n- His contributions to printing include mass-producing movable type, using oil-based ink, adjustable molds, and a wooden printing press\n- Gutenberg's invention allowed for the mass production of printed books, leading to the spread of knowledge to the masses\n- Mechanical movable type printing in Renaissance Europe altered society by allowing for mass communication and increasing literacy\n- The circulation of information led to the spread of revolutionary ideas and broke the monopoly of the literate elite on education"
}
```

## Getting Started

* You'll need to complete the code in the `src/controllers/summarizeController.ts` file to complete the Summary API.

  * Follow the `TODO` comments to complete the missing portions of the code.

* If you have an OpenAI API key make sure to include it in a .env file.

  * An example .env file is provided, named `.env.EXAMPLE`.

* Use Insomnia to test the Summary API.

* `POST /api/summarize` should accept a request body with text content, call the OpenAI API to summarize the content, and then return the summary as bullet points in the response.

---

## 🏆 Bonus

* Set this project up in your own GitHub repositories, so that you can deploy and use it for future reference!

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
