# Project Architecture

In This document we will discuss technology used and solutions

## Client-Server Communication Channel

Basically there are 2 ways of communication
* WebSockets (constant connections)
* ShortPolling (execute ajax requests every sec.)
Both have pros and cons, but for chat system sockets are more better solution, because you need server pushing.
Yet there are many options, and one of them is imitate websotckets by using SSE (server-sent events) + ShortPolling


## Move to React

First we will write a fullStack app, completely on meteor.js. Then we will compare meteor.js frontend solution with react.
Then i will show how to move part of your frontend to React.

