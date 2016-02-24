# My Movie Library

This is a simple Node.js app that stores reviews and ratings of movies you've seen. You can view a demo [here](http://stephs-movie-library.herokuapp.com/).

# Table of Contents
* [Goals](#goals)
* [Tech Overview](#tech-overview)
* [Getting Started](#getting-started)
* [Next Steps](#next-steps)
* [Helpful Links](#helpful-links)


## Goals
* Display a list of movies 
  * Show a thumbnail/image for each movie
  * Display ratings for each movie
* Clicking a title will reveal a review for each movie
* Include a search bar/filter to look up movies on list 


## Tech Overview
This is built on Node.js, with a Postgres database to store your movies. The Sass is compiled with Grunt.


## Getting Started
### Readying your dev environment
As this project is built on Node.js with a Postgres database so the very first thing you should do it make sure you have both on your machine. You can visit the [Node.js download page](https://nodejs.org/en/download/), and select the version of Node for your particular operating system. Follow the instructions of the installer. When installation is complete you can run `node -v` in your command line to confirm that everything is ready to go!

You can download Postgres [here](http://www.postgresql.org/download/), and I'd also recommend [PG Commander](https://eggerapps.at/pgcommander/) if you're on a Mac and want a GUI to check your data.

Once you're all setup with Node and Postgres, clone this repo to your machine. I do this from Terminal, navigating to the directory I want to work from and typing `git clone https://github.com/smonette/movie-library.git` After that, navigate into the repo: `cd movie-library`

### Setting up Node
Good news: Most Node setup is left in the hands of `package.json`. This file lists all the project's dependencies so you can run `npm install` to install them all at once! Confirm that there are no errors with package installs.

### Creating your movies database
Sequelize is a Javascript ORM that makes it easier to interact with our database. Let's alias Sequelize to make it a bit easier yet. Type in the following: `alias sqlize=node_modules/.bin/sequelize`. Ahh, much nicer that typing that whole path. To set up your database do the following:
- `createdb movie_library` to create the database
- `sqlize db:migrate` to add the table and columns

Now your machine is set up with a database!

### Compiling the styles
To compile the Sass run `grunt compile` in your command line. Then `grunt watch` to tell Grunt to automatically recompile anytime you change your Sass files.

### Viewing the project
To view this project, start by opening a new tab in command line, and entering `nodemon`. If the server goes up correctly, there will be a message that reads: `"Success! View this page on localhost:4000"` Now all navigate to that url to view your own local build of this project!

### Troubleshooting
- Is Postgres running on your machine?
- Was the migration successful? 
- Look in `node_modules`. Do you see all the dependent packages installed?


## Next Steps
As I worked on this I came across some issues that need to be solved in the future:

### Search
* Search yields no results when there's a space, so `Dead Pool` won't find `Deadpool`
* If there are two movies containing a word, only the first movie is displaying



## Helpful Links
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [EJS](http://www.embeddedjs.com/)
* [Grunt](http://gruntjs.com/)
* [Sequelize](http://www.sequelizejs.com)

