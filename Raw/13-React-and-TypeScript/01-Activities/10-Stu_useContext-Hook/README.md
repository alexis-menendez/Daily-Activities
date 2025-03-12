# 📖 Implement Weather Information via useContext Hook

Work with a partner to implement the following user stories:

* As the application user, I want to see weather information displayed throughout the application.

## Acceptance Criteria

* It's done when the application makes use of the `useContext` hook to create a `WeatherContext` component that contains the following fields with hardcoded values:

  * The string field `city` representing the location of the weather report.
  
  * The number `temperature` representing the current temperature.
  
  * The union type `temperatureUnits` with the value of either `Fahrenheit` or `Celsius`.
  
  * The string field `conditions` describing the current situation, e.g., "Windy", "Sunny" or "Heavy Snow."

* It's done when each of the `WeatherContext` fields is displayed in each instance of the `Alert` component.

* Use the "TODO" comments in the following files to guide your implementation:

  * `./Unsolved/src/components/WeatherController.tsx`

  * `./Unsolved/src/App.tsx`

  * `./Unsolved/src/components/Alert.tsx`

---

## 💡 Hints

* Investigate how to implement the `useContext` hook "provider".

## 🏆 Bonus

If you've completed the activity and want to further your knowledge, work through the following challenge with your partner:

* What are some other use cases for the `useState` hook?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
