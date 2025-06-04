"""This script demonstrates abstraction in Python"""

from abc import ABC, abstractmethod


class Animal(ABC):
    """Abstract base class representing an animal."""

    @abstractmethod
    def speak(self):
        """Abstract method that must be implemented by subclasses."""
        pass


class Dog(Animal):
    """A class representing a dog."""

    def wag_tail(self):
        return "The dog wags its tail."

    def speak(self):
        return "Woof!"


class Cat(Animal):
    """A class representing a cat."""

    def speak(self):
        return "Meow!"

    def purr(self):
        return "The cat purrs."


def animal_sound(animal: Animal):
    """
    This function accepts any object that is an instance of the
    `Animal` abstract base class and calls its `speak` method.
    """
    if not isinstance(animal):
        raise TypeError('The passed object is not an instance of the Animal class')
    print(animal.speak())


# Creating instances of Dog and Cat
dog = Dog()
cat = Cat()

animal_sound(dog)
animal_sound(cat)

# # The code below will raise an error because
# # we cannot create an instance of an abstract class
# koala = Animal()
# animal_sound(koala)
