"""This script demonstrates looping through nested data structures"""

##################################################
# List of lists
##################################################

print("List of lists:")

# Create the product table as a list of lists.
product_table = [
    ["Product ID", "Product Name", "Product Price"],
    [1, "baseball cap", 14.99],
    [2, "mug", 12.99],
    [3, "t-shirt", 24.99]
]

# Print the nested lists.
print("Product table:")
print(product_table)

# Print "mug" from product_table using list indexing.
print("Accessing a nested element: " + product_table[2][1])

# Pause the script to review the output.
input("\nPress enter to continue:")

print("\nSingle loop example:")

# Loop through the product_table to extract the data from the nested lists.
for row in product_table:
    product_id = row[0]
    product_name = row[1]
    product_price = row[2]

    # Print the product name.
    print(product_name)

# Pause the script to review the output.
input("\nPress enter to continue:")

print("\nNested loop example:")

# Use a nested loop with the product_table to print the data.
for row in product_table:
    row_as_string = ""
    for cell in row:
        row_as_string += f"| {cell} |"

    print(row_as_string)

# Pause the script to review the output.
input("\nPress enter to continue:")

##################################################
# List of Dictionaries
##################################################

print("\n\nList of dictionaries:")

# Create the product table as a list of dictionaries.
product_table = [
    {
        "Product ID": 1,
        "Product Name": "baseball cap",
        "Product Price": 14.99
    },
    {
        "Product ID": 2,
        "Product Name": "mug",
        "Product Price": 12.99
    },
    {
        "Product ID": 3,
        "Product Name": "t-shirt",
        "Product Price": 24.99
    }
]

# Print the nested dictionaries.
print("Product table:")
print(product_table)

# Print "baseball cap" from the product_table.
print("Accessing a nested element: " + product_table[0]["Product Name"])

# Loop through the product_table to extract the data from the nested
# dictionaries.
for product in product_table:
    product_id = product["Product ID"]
    name = product["Product Name"]
    price = product["Product Price"]

    print(f"{product_id}: {name} costs ${price}")

# Pause the script to review the output.
input("\nPress enter to continue:")

##################################################
# Nested Dictionaries
##################################################

print("\n\nNested dictionaries:\n")

states = {
    "California": {
        94016: "San Francisco",
        94105: "San Francisco",
        94014: "Daly City",
        94501: "Alameda"
    },
    "Louisiana": {
        70032: "New Orleans",
        70043: "New Orleans",
        70122: "New Orleans",
        70820: "Baton Rouge",
        70808: "Baton Rouge"
    }
}

# Print the nested dictionaries.
print(states)

# Print "San Francisco" from the states dictionary.
print("Accessing a nested element: " + states["California"][94016])

print("\nNested loop example:")

# Loop through the states dictionary to extract the data from the nested
# dictionaries.
for state, data in states.items():
    print(state + ":")
    # Loop through the nested dictionary to extract the data.
    for zipcode, city in data.items():
        print(f"  {city}, {zipcode}")
