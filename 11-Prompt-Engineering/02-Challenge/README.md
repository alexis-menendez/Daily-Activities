# 11 Prompt Engineering: Weather Forecast

## Your Task

Your Challenge this week is to complete a Weather Forecast API that calls the OpenAI API to retrieve a five-day weather forecast for a given city, in the style of a sports announcer, and return a JSON response.

**Important**: This Challenge is optional. To complete this optional Challenge, you'll need an OpenAI API key. Note that there is a cost associated with making requests using an OpenAI API key.

Starter code for the Weather Forecast API has already been created. It's your job to complete the code and integrate the OpenAI API to provide the response.

* For more information on how to get your OpenAI API key, refer to the [Full-Stack Blog post on OpenAI Account Setup](https://coding-boot-camp.github.io/full-stack/ai/openai-account-setup-guide).

* For more information on how to work with the OpenAI API, refer to the [OpenAI API documentation](https://platform.openai.com/docs/overview).

> **important** Make sure to download and unzip the starter code files and make your own repository with the starter code.

Before you start, download the [starter code](https://static.bc-edx.com/coding/software-dev/11-Prompt-Engineering/Develop.zip).

## User Story

```md
AS A traveler
I WANT to see the five-day weather forecast for a city in the style of a sports announcer
SO THAT I can plan a trip
```

## Acceptance Criteria

```md
GIVEN a weather forecast API
WHEN I search for a city
THEN I am presented with the five-day weather forecast for that city in the style of a sports announcer
```

## Sample Input and Output

To meet the acceptance criteria for this application, you might provide the following input:

```json
{
  "location": "Sacramento CA"
}
```

This would then return the following output:

```json
{
  "result": {
    "day1": "And here we go, folks! Day one in Sacramento is looking like a scorcher with a high of 95 degrees and clear skies. It's going to be a hot one out there!",
    "day2": "Moving on to day two, we've got a slight cool down with a high of 90 degrees and a chance of some afternoon showers. It's going to be a nail-biter to see if the rain holds off for the big game!",
    "day3": "Day three is shaping up to be a beautiful day in Sacramento with a high of 85 degrees and sunny skies. Perfect weather for a day out on the golf course or a picnic in the park!",
    "day4": "As we head into day four, temperatures are on the rise again with a high of 92 degrees and mostly sunny conditions. It's going to be a real sizzler out there on the field!",
    "day5": "And finally, on day five, we're looking at a high of 88 degrees with a mix of sun and clouds. It's going to be a thrilling end to the week as we see if the weather holds up for the big championship game!"
  }
}
```

## Getting Started

* You'll need to write code in the `server.ts` file to complete the Weather Forecast API.

  * Follow the `TODO` comments to complete the missing portions of the code.

* You'll also need to provide your OpenAI API key in an .env file.

  * An example .env file is provided named `.env.EXAMPLE`.

* Use Insomnia to test the Weather Forecast API.

* `POST /forecast` should accept a request body with a location, call the OpenAI API to get a five-day weather forecast in the style of a sports announcer, and then return the forecast as JSON data in the response.

**Note**: This Challenge is optional, so feel free to add your own touches to it. Instead of using a sports announcer style, would you prefer to receive the five-day weather forecast in the style of a cartoon character or a famous artist? Be creative!

## Grading Requirements

**Important**: This Challenge is _optional_ and is **not graded**.

Because this Challenge is optional and ungraded, you won't submit your code repository or a deployed application. However, you may want to compare your code to one potential solution for this Challenge.

**Near the end of Module 12, you may ask your instructor to provide the solution for the Challenge**. Remember that this solution is just one potential way to create this application, and that your code may not match the solution completely.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
