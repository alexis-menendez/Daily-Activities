// Constructor Validate is imported.
import Validate from '../validate.js';

describe('Validate', () => {

  describe('Username Length', () => {
    it('should return false for username less than 8 characters', () => {
      const validate = new Validate();
      const result = validate.isValidUsername('user');
      expect(result).toEqual(false);
    });
  });

  describe('Username all lower case', () => {
    it('should return false for username not containing all lower case characters', () => {
      const validate = new Validate();
      const result = validate.isValidUsername('Username123');
      expect(result).toEqual(false);
    });
  });

  describe('Username valid', () => {
    it('should return true for all lower case username at least 8 characters long', () => {
      const validate = new Validate();
      const result = validate.isValidUsername('lowercaseuser');
      expect(result).toEqual(true);
    });
  });

  describe('Password Length', () => {
    it('should return false for password less than 8 characters long', () => {
      const validate = new Validate();
      const result = validate.isValidPassword('pass');
      expect(result).toEqual(false);
    });
  });

  describe('Password Uppercase', () => {
    it('should return false if the password does not contain at least 1 uppercase character', () => {
      const validate = new Validate();
      const result = validate.isValidPassword('password123');
      expect(result).toEqual(false);
    });
  });

  describe('Password Lowercase', () => {
    it('should return false if the password does not contain at least 1 lowercase character', () => {
      const validate = new Validate();
      const result = validate.isValidPassword('PASSWORD123');
      expect(result).toEqual(false);
    });
  });

  describe('Password Numbers', () => {
    it('should return false if the password does not contain at least 1 number', () => {
      const validate = new Validate();
      const result = validate.isValidPassword('password');
      expect(result).toEqual(false);
    });
  });

  describe('Password Valid', () => {
    it('should return true if password is at least 8 characters long and contains at least 1 uppercase character, lowercase character, and number', () => {
      const validate = new Validate();
      const result = validate.isValidPassword('Password123');
      expect(result).toEqual(true);
    });
  });
});
