"""This script demonstrates composition in Python."""


class Sound:
    """A class representing the sound an animal makes."""

    def __init__(self, sound: str):
        """
        Initialize the sound with a string representing the sound.

        :param sound: The sound the animal makes.
        """
        self.sound = sound

    def make_sound(self):
        """Return the sound."""
        return self.sound


class Dog:
    """A class representing a dog."""

    def __init__(self):
        """
        Initialize a Dog with a Sound instance.
        """
        self.sound = Sound("Woof!")

    def speak(self):
        """Return the sound the dog makes."""
        return self.sound.make_sound()


class Cat:
    """A class representing a cat."""

    def __init__(self):
        """
        Initialize a Cat with a Sound instance.
        """
        self.sound = Sound("Meow!")

    def speak(self):
        """Return the sound the cat makes."""
        return self.sound.make_sound()


if __name__ == "__main__":
    # Create instances of Dog and Cat
    dog = Dog()
    cat = Cat()

    # Show the sounds of the animals
    print(dog.speak())
    print(cat.speak())
