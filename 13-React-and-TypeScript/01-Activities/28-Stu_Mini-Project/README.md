# Module 13 Mini-Project: Film Tracker

In this Mini-Project, you'll work with a group to complete a film-tracking application that allows you to save films you've already seen or films you want to watch to localStorage.

To complete this Mini-Project, you'll need an OMDb API key.

## Instructions

The completed app should meet the following criteria:

* As an avid film buff, I want to be able to search for a film title and get information on that film.

* As an avid film buff, I want to be able to add films to my "Seen It" and "Watch" lists and have them stored in localStorage.

* As an avid film buff, I want to be able to remove films from my "Seen It" and "Watch" lists when I click the remove button ("x" icon).

* As an avid film buff, I want to be able to view my deployed site on Render.

## Mock-Up

The following images show the appearance and functionality of the web application:

![The film tracker Home page displays an input field with a search button that allows the user to search for a film and see the information for that film if it is returned](./Assets/13-01-film_tracker_homepage.png)

![The film-tracker Watch List page displays rows of films the user has saved to their watch list in localStorage, with the option to remove a film from the list.](./Assets/13-02-film_tracker_watchlist.png)

![The film-tracker "Seen It" list page displays rows of films the user has already seen stored in localStorage, with the option to remove a film from the list.](./Assets/13-03-film_tracker_seenit.png)

## Getting Started

You'll primarily be working in the `Develop/src` folder, where you will add to the provided pages and components, and implement a Film interface based on the data returned from OMDb API.

The OMDb API endpoint has been provided in `api/API.tsx`, but it must be properly imported and implemented.

You'll also need to provide your OMDb API key in a `.env` file. An example `.env` file is provided, named `.env.EXAMPLE`, in the `environment` folder. You can request an OMDb API key [here](https://www.omdbapi.com/apikey.aspx).

The [React icons](https://www.npmjs.com/package/react-icons) npm package has been included in the `package.json`.

Refer to the [Full-Stack Blog on deploying to Render](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide) and the [Render documentation on setting environment variables](https://docs.render.com/configure-environment-variables).

## 📝 Notes

Refer to the documentation:

* [The OMDb API](https://www.omdbapi.com/)

* [React Icons](https://react-icons.github.io/react-icons/)

## 💡 Hints

* How can the documentation give us an idea of the data we'll get back?

* How can TypeScript interfaces keep the data being returned from the API organized and less error prone?

* How can the "Seen It" and "Watch" lists be tracked separately using localStorage?

## 🏆 Bonus

If you've completed this activity, work through the following challenge with your group to further your knowledge:

* Allow the user to sort the films alphabetically by title in their "Watch" and "Seen It" lists.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
