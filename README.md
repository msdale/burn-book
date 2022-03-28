<h1 align="center">Squeaky Clean</h1> 

![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB) ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm) 

  
  <a href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ADeploy">
    <img src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>


## Table of Contents:  
* [Description](#Description)
* [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)    
* [NPM Packages](#npm-packages)  
* [Installation](#Installation) 
* [Usage](#Usage)          
* [Images](#Images)   
* [Tests](#Tests)  
* [License Details](#License-Details)    
* [Questions](#Questions) 
* [Collaborators](#Collaborators)

## Description:
*A full stack booking application made using the MERN stack (MongoDB, Express, React & Nodejs), for a cleaning service model. This could be altered thought to tailor to any business model that would like their clients to be able to not only read reviews on their service providers but to also request appointments.*

## Technologies used
This project was created using the following technologies.

#### Client

- React JS
- Redux (for managing and centralizing application state)
- React-router-dom (To handle routing)  
- Material UI & CSS Module; Bulma (for User Interface)

#### Server

- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)

#### Database
- MongoDB (MongoDB Atlas)

## NPM Packages
- [Express.js](https://www.npmjs.com/package/express)  
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Node.js](https://www.npmjs.com/package/node)
- [React](https://www.npmjs.com/package/react)
- [Apollo Server Express](https://www.npmjs.com/package/apollo-server-express)
- [Graphql](https://www.npmjs.com/package/graphql)
- [Heroku](https://www.heroku.com/)
- [MongoDB Atlas](https://www.mongodb.com/)

## Installation
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.
After one of the previously mentioned local installations are completed then proceed to first enter in terminal, `npm install` has to be called to create your package.json files. This will run all pacakges and libraries in each of the 3 package.json. To properly install the database you must create at cluster on Mongodb atlas. Run `npm start` for the port to start listening with mongoose. 

## Usage
To use locally, run  `npm run seed` from your terminal but in the root of the directory; followed by `npm run develop` also within your root directory, this will allow both the server and the client folders to run simultaneously; use localhost:3001 in your web browser to use application.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application.

The deployed application can be used at [Heroku]() 

You can also use `npm start` while in the client folder to run items as well as in the server folder you can use `npm run watch`. To build for production ensure you run `npm run build` so that it produces a build for deployment. 

## Images
<img src="">      
<img src="https://github.com/alexisn84/holy-grail/blob/main/client/public/dashboard.png">

## License Details 
This project is MIT licensed.

## Questions
Open a new issue under the repo at https://github.com/msdale/burn-book/issues

## Collaborators
Alexis El Amrani [GitHub Link](https://github.com/alexisn84)  
Shawna Boucher [GitHub Link](https://github.com/sboucher2011)  
Mark Dale [GitHub Link](https://github.com/msdale)  
Ivy Do [GitHub Link](https://github.com/ivydo)  
Patty Manecci [GitHub Link](https://github.com/PManecci)
