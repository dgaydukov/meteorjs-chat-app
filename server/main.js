import { Meteor } from 'meteor/meteor';
import {History, Chats} from '../imports/collections';


const DEFAULT_CHAT_NAME = "Main";

Meteor.startup(() => {

    /*
    create default chat if doesn't exists
     */
    if(!getChatByName(DEFAULT_CHAT_NAME)){
        Chats.insert({
            name: DEFAULT_CHAT_NAME,
            type: "public",
            date: new Date(),
        });
    }
    //Chats.remove({});

    Meteor.publish('history', function (chatName) {
        const chat = getChatByName(chatName) || getChatByName(DEFAULT_CHAT_NAME);
        return History.find({chatId: chat._id});
    });
    Meteor.publish('chats', function () {
        if(Meteor.userId()){
            return Chats.find();
        }
        return Chats.find({type: "public"});
    });
});


function getChatByName(name) {
    return Chats.find({name: name}).fetch()[0];
}