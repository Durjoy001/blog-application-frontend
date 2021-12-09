# Blog Application Frontend.

access my site at : https://blog-application-frontend101.herokuapp.com

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dockerization](#dockerization)
- [Deployment](#deployment)

## Introduction:

It is a blog application where users can read all the created blogs by other users, also can create their own blogs after signing up in the application and will able to update and delete his/her own blog.Also I have **dockerized** this project and **deploy** it in heroku.

This repository contain all about front end related stuff of my blog application project , for backend code please visit this repo: https://github.com/Durjoy001/blog-application-backend

## Technologies:

- **React.js** which is a frontend web application library of **Javascript**.
- **Chakra Ui** - library for building react application blocks.

## Installation:

- Step - 1  
  First clone this repo in your local machine, for this run this bellow command in your desired directory where you want to clone.

  ```
  git clone https://github.com/Durjoy001/blog-application-frontend.git
  ```

- Step - 2  
  After colonning the repo run this bellow comand in your code editor terminal to installing project related various packages and resolving their various dependencies.

  ```
  npm install
  ```

- Step - 3
  Finally start frontend by this command

  ```
  npm start
  ```

## Dockerization:

I have dockerized this project and upload the docker image in docker hub.If you want to run this project in your local machine from docker image then follow the bellow step:

- Step - 1  
   First pull the docker image from docker hub

  ```
  docker pull durjoy62/blog-application-frontend101:1.0.0
  ```

- step - 2  
  Create and run container by using this command

  ```
  docker run -it -p 5000:3000 durjoy62/blog-application-frontend101:1.0.0
  ```

Open http://localhost:5000/ and verify.

## Deployment:

I have also deploy this project in heroku. Access it here : https://blog-application-frontend101.herokuapp.com
