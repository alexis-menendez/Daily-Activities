"""This script demonstrates polymorphism in Python"""


class Dog:
    """A class representing a dog."""

    def wag_tail(self):
        return "The dog wags its tail."

    def speak(self):
        return "Woof!"


class Cat:
    """A class representing a cat."""

    def speak(self):
        return "Meow!"

    def purr(self):
        return "The cat purrs."


def animal_sound(animal):
    """
    This function demonstrates polymorphism by accepting any
    object with a `speak` method. It calls the `speak` method
    on the passed object and prints the result.
    """
    print(animal.speak())


# Creating instances of Dog and Cat
dog = Dog()
cat = Cat()

# Demonstrating polymorphism by passing different objects to the same function
animal_sound(dog)
animal_sound(cat)
