export default class Validate {

  isValidUsername(username: string) {
    if (username.length < 8) {
      return false;
    }

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
    return pattern.test(username);
  }

  isValidPassword(password: string) {
    if (password.length < 8) {
      return false;
    }
  
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return pattern.test(password);
  };
}
