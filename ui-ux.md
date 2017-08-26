# User Experience

Every project start from ui-ux. Busyness sets requirements for ux, and based on that, developers create db and project architecture.
So in order to better understand db structure and project we need to start fro ux.

## User Scenarios

Basically we have 2 user scenarios
* Anonymous user
* Authenticated user

The main difference between them, is that when you are anonymous your session (chats, friends) is limited to your browser. So if you close your browser, or restart your pc, you will
lose all your history. The same goes, if you enter from another pc. You will start from scratch.
In order to avoid this you need to login/register, so the system will remember you.

## Interface

When we build interface telegram come to mind.
So basically we need 2 blocks on a page:
* Window with popular chats, with following functions
1) search public chats
2) search users
3) create new chat (both public and private)
* Chat window

If you are anonymous you will see only popular chats.
If you are authenticated you will see your public & private chats, and also your friends

### User actions

Users can do the following things
* Create new chats
* Invite new people (both existed users, and new one by the invite fucntionality)
* Search users & public chats
* Generate invite links