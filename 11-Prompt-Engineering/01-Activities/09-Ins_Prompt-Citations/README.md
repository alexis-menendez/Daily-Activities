# Prompt Citations

When working with AI tools, it is always important to validate the accuracy of responses.

* One technique we can use to reduce hallucinations and help us validate the accuracy of responses is to request citations in our prompts.

* Open ChatGPT in your browser and enter the following prompt:

  ```text
  What are the benefits of a Mediterranean diet?
  ```

  * ChatGPT will provide a response that may be similar to the following example:

    ```text
    The Mediterranean diet is known for its numerous health benefits, including improved heart health, weight loss, and reduced risk of chronic diseases. It emphasizes the consumption of fruits, whole grains, and healthy fats such as olive oil.
    ```

  * This response may seem reasonable but we can ask ChatGPT to include citations to make it more credible.

  * Enter the following prompt:

    ```text
    What are the benefits of a Mediterranean diet? Please provide citations.
    ```

  * ChatGPT will respond with more information, including sources it used to provide this information.

    ```text
    The Mediterranean diet is known for its numerous health benefits, including improved heart health, weight loss, and reduced risk of chronic diseases. A study published by the New England Journal of Medicine found that a Mediterranean diet supplemented with extra-virgin olive oil or nuts reduced the incidence of major cardiovascular events. Additionally, a review by the Mayo Clinic highlights that this diet can help with weight loss and prevent type 2 diabetes.
    ```

  * Asking for citations in our prompts has two benefits:
  
    * Citations provide a way for us to check the sources and the validity of the information.

    * Asking for citations in the prompt actually affects the way that the model generates the response and can reduce hallucinations, since it must include sources for the response.

  * We can increase the benefits of citations by specifically asking for detailed citations:

    ```text
    What are the benefits of regular exercise? Provide detailed citations.
    ```

  * Now, ChatGPT will include citations in a detailed format, which can make them much easier to verify, as shown in the following example:

    ```text
    Regular exercise offers numerous health benefits, including improved cardiovascular health, better mental health, and weight management. According to a study by the American Heart Association, regular physical activity can reduce the risk of heart disease and stroke . Furthermore, the Mayo Clinic reports that exercise can improve mood and reduce symptoms of depression and anxiety.

    For detailed citations:

    1. American Heart Association. (2021). Physical Activity Improves Quality of Life. Retrieved from American Heart Association.
    2. Mayo Clinic. (2022). Exercise: 7 benefits of regular physical activity. Retrieved from Mayo Clinic.
    ```

* We can further refine the previous prompt by filtering the sources that it uses and asking for citations in a particular format. We can either ask the model to use specific sources, or take a more general approach, such as asking it to “use only reliable sources.”

* Enter the following prompt:

    ```text
    What are the benefits of regular exercise? Answer using only reliable sources and cite those sources using APA in-text citation.
    ```

  * Now, ChatGPT will filter the sources included and include citations in a specific format, as shown in the following example:

    ```text
    Regular exercise offers numerous benefits that significantly enhance overall health and well-being. Engaging in consistent physical activity has been shown to reduce the risk of developing chronic conditions such as heart disease, type 2 diabetes, stroke, and certain cancers. It also aids in managing weight, lowering blood pressure, and improving cardiovascular health by enhancing the efficiency of the heart and lungs (Mayo Clinic, 2023; NHS, 2021).

    Additionally, regular exercise can boost mental health by reducing symptoms of depression and anxiety, improving mood, and enhancing cognitive function. Physical activity promotes better sleep quality and increases energy levels, which can contribute to improved productivity and daily functioning (NHLBI, 2023; WHO, 2020).

    Moreover, exercise plays a crucial role in maintaining muscle strength, bone density, and joint health, thereby reducing the risk of osteoporosis and falls, especially in older adults. It also fosters better self-esteem and confidence by helping individuals feel more in control of their health and appearance (WHO, 2020; NHS, 2021).

    In summary, the benefits of regular exercise encompass physical, mental, and emotional health improvements, making it an essential component of a healthy lifestyle (Mayo Clinic, 2023; NHS, 2021; WHO, 2020; NHLBI, 2023).

    References:
    - Mayo Clinic. (2023). Exercise: 7 benefits of regular physical activity.
    - NHS. (2021). Benefits of exercise.
    - World Health Organization (WHO). (2020). Physical activity.
    - National Heart, Lung, and Blood Institute (NHLBI). (2023). Physical activity and your heart.
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What are the benefits of prompting citations?

  * 🙋 Asking the model to provide sources in its response will have two benefits: it will guide the model toward a more accurate response, and it will also provide us with a method for verifying the response from the model.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
