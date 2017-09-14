# Chat App with Meteor.js

The purpose of this project is to create a simple chat app using meteor js as frontend and backend technology.

## Getting Started

In order to start, you should clone this repo. This project needs node.js, so you have to install npm.

### Prerequisites

As I'm a linux user, this project is best works with linux, but it can work in windows evniroment too.


### Installing

```
git clone git@github.com:dgaydukov/meteorjs-chat-app.git
cd meteorjs-chat-app
meteor create .
meteor add accounts-ui accounts-password
meteor add twbs:bootstrap
meteor add session
npm start
```

## Project Structure

```
client #js that executes on frontend
server #js that execute on backend
imports #js functions shared by both backend & frontend
```

## Project Details

* Please read [User Experience](https://github.com/dgaydukov/meteorjs-chat-app/blob/master/ui-ux.md) for more details
* Please read [Database Structure](https://github.com/dgaydukov/meteorjs-chat-app/blob/master/db-structure.md) for more details
* Please read [Project Architecture](https://github.com/dgaydukov/meteorjs-chat-app/blob/master/architecture.md) for more details


## Built With

* [Meteor.js](https://www.meteor.com) - backend & frontend framework
* Meteor.js use [node.js](https://nodejs.org/en/blog/release/v7.0.0) as server, and [mongo.db](https://www.mongodb.com) as database engine




## Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)


### Some thoughts about meteor

Where to use. Meteor is really cool feature for start-ups. Whenever you need to set-up an MVP, meteor is the best choice.
Also all kinds of adminpanels also a use-case.
Where not to use it
* If you already have mongo.db database (it will be very difficult to befriend existing mongo.db to meteor )
* If you are planning to grows and build many microservices. Suppose you want a microservice in node.js that need to comunicate direct with your meteor mongo.db (it will be a headace)
The point is, that every framework has it own limits. And meteor is good when you need to build something fast. But when your project starts to grow, you start to feel this limitation, so
it's better to thought in advance.








