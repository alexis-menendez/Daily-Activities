export default class Validate {

  isValidUsername(username: string) {
    // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
  
    // TODO: Write code the checks if the username contains all lowercase characters.
    // It should return true if it does, and false if not.

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
  }

  isValidPassword(password: string) {
    // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  
    // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
    // It should return true if it does, and false if not.
  
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  };
}
