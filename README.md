# Lulu Software Solutions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Check out the link above for to learn more about react app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npx json-server --watch data/db.json --port 8000`. This will run your backend on port `8000`.
3. In a new terminal, run `npm start`. This will run your React app on port `5000`.

Make sure to open [http://localhost:8000/users](http://localhost:8000/users) in
the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8000`

## What You Already Have
Your Components include `Button`, `Footer`, HomeBackground`, Navbar`,`ServiceList`, and `Services`.
You Also have a folder under components called `pages` that are links to the client-side routes.

All of the code to style the page has been written for you, meaning that you can explore all the
aspects of the project. But if you want to make your own adjustments, clone the respository from
[https://github.com/doreenlulu/lulu-software-solutions] and make your own adjustments.

#### Sample data in the db.json file

```json
 [
	{
	    "users": [{
		"id": 1,
		"email": "Sat@mail.com",
		"password": "sat"
	    }, {
		"id": 2,
		"email": "john@mail.com",
		"password": "john"
	    }, {
		"id": 3,
		"email": "robert@mail.com",
		"password": "robert"
	    }, {
		"id": 4,
		"email": "mani@mail.com",
		"password": "mani"
	    }]
	},
 ]
