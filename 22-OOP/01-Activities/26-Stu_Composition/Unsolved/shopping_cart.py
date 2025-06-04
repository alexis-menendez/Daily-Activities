class PriceCalculator:
    """
    A class responsible for calculating the price of an item.
    """

    def __init__(self, base_price, shipping_fee=0, discount=0):
        """
        Initialize the price calculator with a base price,
        shipping fee, and discount.

        :param base_price: The base price of the item.
        :param shipping_fee: The shipping fee for the item, default is 0.
        :param discount: The discount applied to the item, default is 0.
        """
        self.base_price = base_price
        self.shipping_fee = shipping_fee
        self.discount = discount

    def calculate_total_price(self):
        """
        Calculate the total price of the item after applying the shipping
        fee and discount.

        :return: The total price of the item.
        """
        return self.base_price + self.shipping_fee - self.discount


# TODO: Create a PhysicalItem class that contains a PriceCalculator instance.


# TODO: Create a DigitalItem class that contains a PriceCalculator instance.


# TODO: Create a GiftCard class that contains a PriceCalculator instance.


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

    # Add a physical item with a shipping fee
    laptop_price_calculator = PriceCalculator(1000, 50)
    # TODO: Create a PhysicalItem instance and add it to the cart.

    # Add a digital item with no shipping fee
    ebook_price_calculator = PriceCalculator(20)
    # TODO: Create a DigitalItem instance and add it to the cart.

    # Add a gift card with a discount
    gift_card_price_calculator = PriceCalculator(100, discount=10)
    # TODO: Create a GiftCard instance and add it to the cart.

    # Calculate and print the total cost of the cart
    total = cart.calculate_total()
    print(f"Total cost of the cart: ${total}")
