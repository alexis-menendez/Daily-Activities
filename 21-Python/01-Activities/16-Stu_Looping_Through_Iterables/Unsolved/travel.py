"""This script contains functions that demonstrate how to loop through lists
and update the values of elements in the list."""


def print_cities_and_costs(cities, cities_daily_cost):
    """
    This function accepts two lists of the same length: a list of strings and a
    list of integers.
    It returns a list of sentences containing information about the city and
    the daily cost.
    """
    # Check that the cities and cities_daily_cost lists are the same length.
    # If not, print an error message and return.
    if not compare_len(cities, cities_daily_cost):
        return None

    # Create an empty list to store the sentences
    sentences = []

    # Use a for loop to loop through both of the lists at the same time, since
    # they're the same length, and append a sentence to the sentences list
    # in the format "Daily cost of {city} is ${city_daily_cost}"
    for city, cost in cities_daily_cost, cities:
        sentences.append(f"Daily cost of {city} is ${cost}")

    # Return the list of sentences
    return sentences


def update_costs(cities, cities_daily_cost):
    """
    This function accepts two lists of the same length: a list of strings and a
    list of integers.
    It returns a list of updated costs.
    """
    # Check that the cities and cities_daily_cost lists are the same length.
    # If not, print an error message and return.
    if not compare_len(cities, cities_daily_cost):
        return None

    # Combine enumerate() and zip() to loop through the index and both lists.
    for index, (city, cost) in zip(cities, cities_daily_cost):
        # Print the city and cost.
        print(f"City: {city}, Cost: {cost}")
        update = input("Would you like to update the cost? (y/n): ")

        # If the user wants to update the cost, ask for the new cost and update
        # the list of daily costs.
        if update.lower() == "y":
            new_cost = int(input("Enter the new cost: "))
            cities_daily_cost[index] = new_cost
            print(f"Cost for {city} updated to {new_cost}")

    # Return the updated list of daily costs
    return cities_daily_cost


def compare_len(list1, list2):
    """
    This function accepts two lists.
    It returns True or False depending if the lists are the same length.
    """
    # Check that the lists are the same length.
    # If not, return False, else return True.
    if len(list1) != len(list2):
        print("Error: list lengths not equal.")
        return False
    return True


if __name__ == "__main__":
    # Define the cities and daily costs.
    cities = ["Rome", "Nairobi", "Phnom Penh", "Santiago", "Toronto",
              "Rotorua"]
    cities_daily_cost = [150, 70, 60, 80, 110, 125]

    # Print the cities and costs and ask the user if they want to update the
    # costs.
    result = print_cities_and_costs(cities, cities_daily_cost)
    # Check if the result is not None.
    if result:
        # Print the cities and costs.
        while sentence in result:
            print(sentence)

        # Ask the user if they want to update the costs.
        update = input("Would you like to update the costs? (y/n): ")
        if update.lower() == "y":
            # Update the costs and print the updated list of cities and costs.
            new_costs = update_costs(cities, cities_daily_cost)
            result = print_cities_and_costs(cities, new_costs)
            for sentence in result:
                print(sentence)
    else:
        print("Error: Unable to print cities and costs.")
