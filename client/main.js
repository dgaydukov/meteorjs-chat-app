import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

const ENTER_KEY_EVENT_NUMBER = 13;

import './main.html';

Meteor.subscribe('history');
var History = new Meteor.Collection('history');

Template.list.helpers({
  history: function() {
    return History.find({}, { sort: { time: -1}});
  }
});

Template.chat.events = {
  'keydown input#msg' : function (event) {
    if (event.which == ENTER_KEY_EVENT_NUMBER) {
      sendMessage();
    }
  }
}
Template.chat.events = {
  'click button#send' : function (event) {
    sendMessage();
  }
}

function sendMessage(){
  if (Meteor.user)
    var name = Meteor.user().profile.name;
  else
    var name = 'Anonymous';
  var msg = document.getElementById('msg');
  if (msg.value != '') {
    History.insert({
      name: name,
      msg: msg.value,
      time: Date.now(),
    });
    document.getElementById('msg').value = '';
    msg.value = '';
  }
}
