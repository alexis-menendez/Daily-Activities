"""This script demonstrates the use of list comprehensions in Python"""

# Calculation example without list comprehension
circle_radii = [2.4, 4.5, 6.2, 7.6, 10.5]
PI = 3.14159265358979323846

# Create a circumferences list from a list of radii.
circumferences = []
for radius in circle_radii:
    circumferences.append(2 * PI * radius)
print(circumferences)

# Calculation example with list comprehension
circumferences = [2 * PI * radius for radius in circle_radii]
print(circumferences)

# Filter example without list comprehension
july_temperatures = [87, 85, 92, 79, 106, 88, 85, 92, 91, 87, 89, 90, 86, 96,
                     88, 79, 82, 87, 91, 86, 94, 100, 97, 89, 85, 89, 82, 86,
                     91, 89, 85]
hot_days = []
for temperature in july_temperatures:
    if temperature > 90:
        hot_days.append(temperature)
print(hot_days)

# Filter example with list comprehension
hot_days = [temperature for temperature in july_temperatures
            if temperature > 90]
print(hot_days)
