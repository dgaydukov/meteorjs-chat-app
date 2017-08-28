import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {History} from '../imports/collections';
import './main.html';

const ANONYMOUS_USER = "ANONYMOUS_USER";
const ANONYMOUS_USERNAME = "ANONYMOUS_USERNAME";

if(!Meteor.userId() && !localStorage.getItem(ANONYMOUS_USER)){
  localStorage.setItem(ANONYMOUS_USER, true);
  localStorage.setItem(ANONYMOUS_USERNAME, "Anonymous-"+new Date().getUTCMilliseconds());
}

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.subscribe('history');


Template.chatWindow.helpers({
  history: function() {
    return History.find();
  }
});
Template.userInput.events = {
  'click button#send' : function (event) {
    sendMessage();
  }
}

function sendMessage(){
  var msg = document.getElementById('msg');
  if (msg.value != '') {
    History.insert({
      name: Meteor.user() ? Meteor.user().username : localStorage.getItem(ANONYMOUS_USERNAME),
      msg: msg.value,
      time: Date.now(),
    });
    document.getElementById('msg').value = '';
    msg.value = '';
    document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight;
  }
}
