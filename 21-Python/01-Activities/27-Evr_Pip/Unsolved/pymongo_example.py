# Import PyMongo
from pymongo import MongoClient

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the MongoClient.
client = MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.toy_store

# Declare the collection
stock = db.toys


def add_toy_to_collection(toy, category, retail_price, sale_price=0.0,
                          in_stock=0):
    """Add a toy to the stock collection"""

    if sale_price == 0.0:
        sale_price = retail_price

    # A dictionary that represents the document to be inserted
    document = {
        'toy': toy,
        'category': category,
        'in_stock': in_stock,
        'retail_price': retail_price,
        'sale_price': sale_price
    }

    # Pass the dictionary into `insert_one` to insert the document into the
    # database.
    # The database and collection, if they don't already exist, will be
    # created at this point.
    stock.insert_one(document)

    print(f"Added {toy} to the toy store collection.")


def print_collection():
    """Print the toy store collection"""

    # Retrieve the documents from the collection
    toys = stock.find()

    # Iterate through each document and print the document
    for toy in toys:
        print(toy)


if __name__ == "__main__":
    # A dictionary that represents the document to be inserted
    post = {
        'toy': 'Forbidden Island',
        'category': 'board game',
        'in_stock': 20,
        'retail_price': 20.99,
        'sale_price': 19.99
    }

    # Insert the document into the database using the add_toy_to_collection
    # function
    add_toy_to_collection(**post)

    # Print the collection
    print_collection()
