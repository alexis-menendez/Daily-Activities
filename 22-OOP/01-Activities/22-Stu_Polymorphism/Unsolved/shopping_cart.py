
# TODO: Create a PhysicalItem class.


# TODO: Create DigitalItem class.


# TODO: Create a GiftCard class.


class ShoppingCart:
    """
    Represents a shopping cart that holds multiple items.
    """

    def __init__(self):
        """Initialize an empty shopping cart."""
        self.items = []

    def add_item(self, item):
        """
        Add an item to the shopping cart.

        :param item: The item to be added to the cart.
        """
        self.items.append(item)

    def calculate_total(self):
        """
        Calculate the total cost of all items in the cart.

        :return: The total cost of all items.
        """
        return sum(item.calculate_total_price() for item in self.items)


# Test the ShoppingCart with different items
if __name__ == "__main__":
    cart = ShoppingCart()

    # TODO: Add a physical item with a shipping fee to the cart

    # TODO:Add a digital item with no shipping fee to the cart

    # TODO: Add a gift card with a discount to the cart

    # Calculate and print the total cost of the cart
    total = cart.calculate_total()
    print(f"Total cost of the cart: ${total}")
