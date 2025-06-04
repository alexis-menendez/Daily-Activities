"""This script demonstrates the use of dictionaries in Python"""

# Define an empty dictionary.
my_dictionary = {}
my_dictionary = dict()

# Define a dictionary with key-value pairs and strings as keys.
planets_dict = {
    "Mercury": 2440,
    "Venus": 6052,
    "Earth": 6371,
    "Mars": 3390,
    "Jupiter": 69911,
    "Saturn": 58232,
    "Uranus": 25362,
    "Neptune": 24622
}
print(planets_dict)

# Define a dictionary with key-value pairs and integers as keys.
louisiana_cities = {
    70032: "New Orleans",
    70043: "New Orleans",
    70122: "New Orleans",
    70820: "Baton Rouge",
    70808: "Baton Rouge"
}
print(louisiana_cities)

# Pause the script to review the output.
input("\nPress enter to continue:")

# Use the dict() constructor to create a dictionary with a list of key-value
# pairs stored as tuples.
electronics = dict([("computer", "MacBook Pro"), ("camera", "Sony DSLR")])
print("electronics dictionary:", electronics)

# Use the dict() constructor to create a dictionary with keyword arguments.
meal = dict(Meat="Beef", Fruit="Apple", Vegetable="Carrot")
print("meal dictionary:", meal)

# Pause the script to review the output.
input("\nPress enter to continue:")

# Create a dictionary from separate lists or tuples of keys and values.
planets = ("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus",
           "Neptune")
planet_sizes = 2440, 6052, 6371, 3390, 69911, 58232, 25362, 24622

# Use the dict() function with zip() to create a dictionary from two lists
# or tuples.
planets_dict = dict(zip(planets, planet_sizes))
print(planets_dict)

# Pause the script to review the output.
input("\nPress enter to continue:")

# Print a dictionary's keys.
print("Keys:", planets_dict.keys())

# Print a dictionary's values.
print("Values:", planets_dict.values())

# Print a dictionary's key-value pairs.
print("Key-value pairs:", planets_dict.items())

# Print the length of a dictionary.
print(len(planets_dict))

# Pause the script to review the output.
input("\nPress enter to continue:")

#######################################################
# Accessing and modifying dictionary items and values
#######################################################

print("\nAccessing and modifying dictionary items and values:")

film = {
    "title": "Howl's Moving Castle"
}

# Access a dictionary value by key.
print('film["title"]', film["title"])

# Access a dictionary value by key using the get() method.
print('film.get("title")', film.get("title"))

# Pause the script to review the output.
input("\nPress enter to continue:")

# Add new key-value pairs to a dictionary.
film["director"] = "Hayao Miyazaki"
film["year"] = 2004
film["runtime"] = 129

# Keys can contain spaces, but it's not recommended.
film["production company"] = "Studio Ghibli"

# Print the updated dictionary.
print(film)

# Pause the script to review the output.
input("\nPress enter to continue:")

# Using the dictionary[key] syntax to access a key that does not exist will
# raise a KeyError.
# print(film["rating"])  # Raises KeyError

# Use the get() method to access a key that may not exist.
# Print the value of a key that may not exist.
print('film.get("rating")', film.get("rating"))

# Note that an integer key will raise a KeyError if you try to access it
# as a string.
# print(louisiana_cities["70032"])  # Raises KeyError
print('get("70032")', louisiana_cities.get("70032"))  # Does not raise an error

# Pause the script to review the output.
input("\nPress enter to continue:")

# When printing dictionary values in an f-string, be conscious of the
# quotation marks around the key names. They need to be different from the
# quotation marks around the f-string.
print(f"{film['title']} was directed by {film['director']} and released in "
      f"{film['year']}.")

# Pause the script to review the output.
input("\nPress enter to continue:")

# Update a dictionary value.
film["title"] = "Spirited Away"
print(film)

# Pause the script to review the output.
input("\nPress enter to continue:")

# Remove a key-value pair from a dictionary using the del statement.
del film["production company"]
print(film)

# Use the pop() method to remove a key-value pair from a dictionary.
removed_value = film.pop("runtime")
print("film dictionary:", film)
print("removed_value:", removed_value)

# The del statement can also be used to delete the entire dictionary.
del film
