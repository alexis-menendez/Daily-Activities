"""This script demonstrates the use of list methods and functions"""

# Define the hobbies and feb_temperatures lists
hobbies = ["windsurfing", "bowling", "mini golf", "stand-up comedy",
           "knitting", "acrobatics", "cross-stitch"]

feb_temperatures = [28, 32, 27, 34, 35, 33, 28, 28, 27, 25, 29, 30, 30, 27, 27,
                    30, 27, 26, 27, 30, 26, 25, 22, 26, 28, 24, 25, 22]

# Insert comments to explain what each statement does
# Also include the output that will be printed for each statement

# List methods

#
hobbies.append("bowling")
print(hobbies)

#
hobbies.remove("bowling")
print(hobbies)

#
popped_element = hobbies.pop(6)
print(hobbies)
print(f"{popped_element} was removed from the hobbies list")

# Built-in functions

#
print(len(feb_temperatures))

#
print(max(feb_temperatures))

#
print(max(hobbies))

#
print(min(feb_temperatures))

#
print(min(hobbies))

#
print(sum(feb_temperatures))

#
print(sum(feb_temperatures) / len(feb_temperatures))

#
print(round(sum(feb_temperatures) / len(feb_temperatures), 3))

#
del hobbies[1:3]
print(hobbies)
