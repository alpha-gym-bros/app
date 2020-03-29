# API for app

The API for workouts, exercises and more.

## Dependencies

##### Sequelize

Sequelize is a promise-based Node.js ORM we use with our SQLite database. It features solid transaction support, relations, eager and lazy loading, read replication and more. The API documentation can be found at https://sequelize.org/master/identifiers.

##### ExpressJS

A web framework for node that we use to set up our API server and handle requests/responses.

##### Body-parser

Middleware to enable bodies being used in POST requests.

## Dev-Dependencies

##### Nodemon

A tool to help with the development of the API server which automatically restarts the server on file changes.

##### ESLint

Linter to help fix issues and keep consistency in our Node.js files.

##### Prettier

A code formatter that helps with auto formatting of code within the ESLint rules.

##### Husky

A git hook that runs ESLint on Node.js files before pushes and commits and blocks them if there are issues.

## Structure

The server is initialized in index.js using ExpressJS. Connected to the controllers through a middleware service that uses the router for those controllers. The controllers role is to be the entry point for requests to different table entries in the SQLite database. No business logic is handled in these files.

The database lookups and manipulation is done in the model.js file with the use of sequelize functions (prevents SQL injections). This is also where the business logic is handled if needed. Every model (also table entry) in the database is imported to the model.js file. The models are created with sequelize and validate data through the specific types chosen for the entries. These models are individually linked to the database using sequalize's sync.

## Initial data and usage

There is a table called "exercises" in the database file that is only there for having initialized data. The table has two fields: 'name' and 'type'. To view the database, the best way is to install a VSCode extension called SQLite and open up the SQLite explorer and view the table there. The database was initialized using the post request in exercise.controller.js.

To test and use the API without creating a frontend to handle the requests, you could use Postman https://www.postman.com/downloads/. There is a file called postman.json in api/src that can be imported to postman. Then all you will have to do is press the send button after selecting the requests. This file will be updated with the API changes in the future to make it easy to develop and test the new features before they are implemented in the frontend.

If you want to create new requests, models and controllers, all you have to do is follow the same structure explained in section Structure. With some help of commented code at certain points to give clarity. To make new SQL queries (in api/src/model.js) you will have to use sequelize's different functions which is a bit different and can take some time to learn, but it isn't as hard as learning SQL from scratch.
