# Insert comments to explain which output will be printed for each conditional

# 1.
x = 5
if 2 * x > 10:
    print("Question 1 works!")
else:
    print("oooo needs some work")

# 2.
x = 5
if len("Dog") < x:
    print("Question 2 works!")
else:
    print("Still missing out")

# 3.
x = 2
y = 5
if x ** 3 >= y:
    print("GOT QUESTION 3!")
else:
    print("This one didn't work")

# 4.
country = "Madagascar"
if country == "Madagascar":
    print(f"{country} is in Africa")
else:
    print(f"{country} is not in Africa")

# 5.
going_places = True
if going_places:
    print("You're going places!")
else:
    print("You prefer to stay at home.")

# 6.
altitude = "66,000"
if altitude.isdigit():
    print(f"The plane flew at {altitude} feet")
else:
    print(f"{altitude} cannot be converted to a number")

# 7.
destination = "Australia"
sea_countries = ["Thailand", "Philippines", "Cambodia", "Malaysia",
                 "Singapore", "Laos", "Myanmar", "Vietnam", "Brunei",
                 "East Timor", "Indonesia"]

if destination in sea_countries:
    print(f"{destination} is in Southeast Asia.")
else:
    print(f"{destination} is not in Southeast Asia.")

# 8.
tax_rate = 10.75
if isinstance(tax_rate, int):
    print("The tax rate is an integer.")
elif isinstance(tax_rate, float):
    print("The tax rate is a float.")
else:
    print("The tax rate is not a number.")

# 9. HINT: What does the isinstance method do?
price = 5.99
if price > 4 and isinstance(price, int):
    print("The price is greater than 4 and is an integer.")
elif price < 4 or isinstance(price, float):
    print("The price is less than 4 or is a float.")
elif price >= 5 and not isinstance(price, int):
    print("The price is greater than or equal to 5 and is not an integer.")
else:
    print("None of the conditions were met.")

# 10.
choice = "r"

if choice.lower() == "q":
    print("Thanks for playing!")
elif choice.lower() == "r":
    print("You chose rock!")
elif choice.lower() == "p":
    print("You chose paper!")
elif choice.lower() == "s":
    print("You chose scissors!")
else:
    print("I don't understand your choice.")
