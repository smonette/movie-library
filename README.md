# My Movie Library

This is a simple app that stores short reviews of movies you've seen!

## Table of Contents
* [Goals](#goals)
* [Tech Overview](#tech-overview)
* [Getting Started](#getting-started)
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
As this project is built on Node.js, the first thing you should do it make sure you have Node ready to go on your machine. You can visit the [Node.js download page](https://nodejs.org/en/download/), and select the version of Node for your particular operating system. Follow the instructions of the installer. When installation is complete you can run `node -v` in your command line to confirm that everything is ready to go!

Once you're all setup with Node, clone this repo to your machine. Now setup is in the hands of `package.json`. This file lists all the project's dependencies so you can run `npm install` to install them all at once! Confirm that there are no errors with package installs.

To compile the Sass run `grunt compile` in your command line. Then `grunt watch` to tell Grunt to automatically recompile anytime you change your Sass files.

To view this project, start by opening a new tab in command line, and entering `nodemon`. If the server goes up correctly, there will be a message that reads: `"Success! View this page on localhost:4000"` Now all navigate to that url to view your own local build of this project!


## Helpful Links
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [EJS](http://www.embeddedjs.com/)
* [Grunt](http://gruntjs.com/)


