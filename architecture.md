# Project Architecture

In This document we will discuss technology used and solutions

## Client-Server Communication Channel

Basically there are 2 ways of communication
* WebSockets (constant connections)
* ShortPolling (execute ajax requests every sec.)
Both have pros and cons, but for chat system sockets are more better solution, because you need server pushing.
Yet there are many options, and one of them is imitate websotckets by using SSE (server-sent events) + ShortPolling.
If you are in doubt what to use, read this [answer](https://stackoverflow.com/questions/10028770/in-what-situations-would-ajax-long-short-polling-be-preferred-over-html5-websock)
on stackOverflow for more details.


## Knowledge of Meteor.js
* If you are complete new to meteor.js, please read this [article](https://www.meteor.com/tutorials/blaze/creating-an-app) for better understanding of meteor envioronment
* If you are interested about meteor internals please read [this](https://blog.meteor.com/introducing-ddp-6b40c6aff27d)
* If you are doubt should you use meteor or MEAN stack, read [this](https://forums.meteor.com/t/why-i-won-t-recommend-meteor-anymore/5285) forum entry
* Great [article](https://github.com/meteor/meteor/blob/devel/packages/ddp/DDP.md) about ddp protocol

## A room for improvement
* Server collection reactive push (so clear chat window, when select new chat)
* Search users (only for authed)
* Add users to peer-to-peer chat (only for authed)
* Invite users to private chats
* Divide clients main.js file into multiple modules based on logic

## Move to React

First we will write a fullStack app, completely on meteor.js. Then we will compare meteor.js frontend solution with react.
Then i will show how to move part of your frontend to React.

