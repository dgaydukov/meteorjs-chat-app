import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

History = new Meteor.Collection('history');

Template.list.helpers({
  History: function() {
    return History.find({}, { sort: { time: -1}});
  }
});

Template.chat.events = {
  'keydown input#msg' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
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
  }
}
