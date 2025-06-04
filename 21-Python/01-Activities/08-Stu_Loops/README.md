# 🐛 Loops Not Breaking or Continuing as Expected

Work with a partner to resolve the following issue(s):

* When I enter user input in the message game, the program should perform the action indicated by the message presented to me, but right now it does not.

## Expected Behavior

When a user is asked if they are happy with their choice of number and they select 'n', the user input number is reset to a string and the loop begins again.

When a user is asked if they are happy with their choice of number and they select 'y', the loop is exited and the game continues.

When the user input number is greater than 20, the range loop is exited.

When the user is asked if they would like to play again and they type anything other than 'y' or 'Y', the loop is exited.

## Actual Behavior

When a user is asked if they are happy with their choice of number and they select 'n', the loop is exited and the game continues.

When a user is asked if they are happy with their choice of number and they select 'y', the user input number is reset to 0 and doesn't enter the range loop.

When the user input number is greater than 20, the range loop continues until the user input number is met.

When the user is asked if they would like to play again and they type anything other than 'y' or 'Y', the game starts again.

---

## 💡 Hints

What is the difference between the `continue` and `break` keywords?

Are the conditional statements performing the correct matches?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Can you edit the code so that continuous while loop (i.e., the `while True:` loop) uses a membership operator conditional in conjunction with the `play_again` variable, so you can remove the conditional check at the end of the program?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
