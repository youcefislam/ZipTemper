# Temperature Calculator

A simple web application that returns the temperature 🌡️ by united states ZIP code.
I used [zipcodes](https://github.com/davglass/zipcodes) for coordinates lookup. then pass them to [IQAir](https://www.iqair.com/air-pollution-data-api) API to retrieve weather information.

tags: javascript, node, express, API, axios, ejs, AJAX, HTML, CSS, JQuery, purecss.

## Getting started

(Make sure node is installed on your machine)

- After cloning the repository open terminal and run :
  > npm install
- Create a new file .env and write your IQAir API key there:
  > AQ_KEY = < Your_API_KEY >
- Run the app from terminal:
  > npm start
- Open [localhost](http://localhost:3000) to interact with the app.
