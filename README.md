# My Movie Library

This is a simple app that stores short reviews of movies you've seen!

## Table of Contents
* [Goals](#goals)
* [Tech Overview](#tech-overview)
* [Getting Started](#getting-started)
* [Troubleshooting](#troubleshooting)
* [Helpful Links](#helpful-links)

## Goals
* Display a list of movies 
* Show a thumbnail/image for each movie
* Display ratings for each movie
* Hide & reveal description for each movie
* Include a search bar/filter to look up movies on list 

## Tech Overview
This is built on Node.js, with a Postgres database to store your movies. The Sass is compiled with Grunt.

## Getting Started
As this project is built on Node.js, the first thing you should do it make sure you have Node ready to go on your machine. The easiest way to do that is to use [NVM](https://github.com/creationix/nvm). Run the install script:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

Once you're all setup with Node, you clone this repo, then setup is in the hands of `package.json`. This file lists all the project's dependencies so you can run `npm install` to install them all at once! Confirm that there are no errors with package installs.

To compile the Sass run `grunt compile` in your command line. Then `grunt watch` to tell Grunt to automatically recompile anytime you change your Sass files.

To view this project, start by opening a new tab in command line, and entering `nodemon`. If the server goes up correctly, there will be a message that reads: `"Success! View this page on localhost:4000"` Now all navigate to that url to view your own local build of this project!

## Troubleshooting
#### Getting set up
* Is Xcode up-to-date?

#### Viewing the site
* Are the packages installed to a `node_modules` directory in the project?

## Helpful Links
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [EJS](http://www.embeddedjs.com/)
* [Grunt](http://gruntjs.com/)


