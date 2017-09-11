'use strict';

import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {History, Chats} from '../imports/collections';
import {formatIsoDate, generateNickName} from './helpers';
import './main.html';
const ANONYMOUS_USER = "ANONYMOUS_USER";
const ANONYMOUS_USERNAME = "ANONYMOUS_USERNAME";




Session.set("chatName", "Main");

/*
if user is not logged, make him anonymous
 */
if(!Meteor.userId() && !localStorage.getItem(ANONYMOUS_USER)){
  localStorage.setItem(ANONYMOUS_USER, true);
  localStorage.setItem(ANONYMOUS_USERNAME, generateNickName());
}



Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.subscribe('chats');
Tracker.autorun(function () {
  Meteor.subscribe('history', Session.get("chatName"), function () {
    document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight
  });
})


Template.chatWindow.helpers({
  history: function() {
    return History.find();
  }
});

Template.chatList.helpers({
  disable: function () {
    return Meteor.userId()?"":"disabled";
  },
  chats: function() {
    return Chats.find();
  },
  formatIsoDate: function (date) {
    return formatIsoDate(date)
  }
});


Template.chatList.events = {
  "click #add": function (event) {
    var name = document.getElementById('name');
    if (name.value != '') {
      Chats.insert({
        name: name.value,
        type: document.querySelector('input[name="chat-type"]:checked').value,
        date: new Date(),
      });
      name.value = '';
    }
  },
  "click .chat-item": function (event) {
    var _id = event.target.getAttribute("data-id");
    var chat = Chats.find({_id: _id}).fetch()[0];
    if(chat){
      Session.set('chatName', chat.name);
    }
  }
}

Template.userInput.events = {
  'click button#send' : function (event) {
    var msg = document.getElementById('msg');
    if (msg.value != '') {
      History.insert({
        name: Meteor.user() ? Meteor.user().username : localStorage.getItem(ANONYMOUS_USERNAME),
        msg: msg.value,
        time: Date.now(),
        chatId: Chats.find({name: Session.get("chatName")}).fetch()[0]._id,
      });
      msg.value = '';
      document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight;
    }
  }
}