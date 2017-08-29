import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {History, Chats} from '../imports/collections';
import './main.html';

const ANONYMOUS_USER = "ANONYMOUS_USER";
const ANONYMOUS_USERNAME = "ANONYMOUS_USERNAME";

/*
imitate React state
 */
const state = {
  chatId: false,
}

/*
if user is not logged, make him anonymous
 */
if(!Meteor.userId() && !localStorage.getItem(ANONYMOUS_USER)){
  localStorage.setItem(ANONYMOUS_USER, true);
  localStorage.setItem(ANONYMOUS_USERNAME, "Anonymous-"+new Date().getUTCMilliseconds());
}



Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.subscribe('history');
Meteor.subscribe('chats');


Template.chatWindow.helpers({
  history: function() {
    return History.find();
  }
});


Template.chatList.onRendered(function() {
  if(Meteor.userId()){
    document.getElementById("radioBtnPrivateChat").removeAttribute("disabled");
  }
});

Template.chatList.helpers({
  chats: function() {
    return Chats.find();
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
      //document.getElementById("chatWindow").innerHTML = "";
      Meteor.subscribe('history', chat.name);
      state.chatId = _id;
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
        chatId: state.chatId ? state.chatId : Chats.find({name: "Main"}).fetch()[0]._id,
      });
      msg.value = '';
      document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight;
    }
  }
}