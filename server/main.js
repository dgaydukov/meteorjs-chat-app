import { Meteor } from 'meteor/meteor';
import {History} from '../imports/collections';

Meteor.startup(() => {
    Meteor.publish('history', function () {
        return History.find();
    });
});
