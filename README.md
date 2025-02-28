# **Implementing Currency Conversion API**

Changes that should be made for using .env to keep API key only on local machine:
To use dotenv in backend, install it being in /backend folder:
npm install dotenv
Add .env to .gitignore, in the main folder, to avoid getting the API key to github.
Add this code to be able to use .env in backend/server.js:
require("dotenv").config({ path: "../.env" });

_Adding currency router to backend:_
In the folder routes add a new file currency.js and put the corresponding code inside. We are not checking auth in this case since this is a public information;
In index.js add a path to currency.js;

Restart the backend server to be able to use .env.

And voilà! Now you can use the Postman and hit this GET request for example:
http://localhost:5000/api/currency/convert?from=CAD&to=USD&amount=100

_Next we add a new component to a frontend_
Add a file nyxConverter.jsx with currency converter code in /frontend/src/components/views/nyxConverter.jsx. This file gets data from Currency Conversion API
Add the NyxConverter in home.jsx (/frontend/src/components/pages/home.jsx)

Now we can use the Currency Conversion API. And it looks like this:
