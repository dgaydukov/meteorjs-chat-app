import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    var History = new Meteor.Collection('history');
    Meteor.publish('history', function historyPublication() {
        return History.find();
    });
});
