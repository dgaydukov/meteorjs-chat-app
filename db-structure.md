# Database Structure

Every mid to large backend project starts from db design. Before you start you should answer following questions
* What kind of database to use: Relational(Mysql, Postgres) or Document(Mongo)
* What will be your database structure
* What entities will it have and so on.

## The db question

Because of Mongo is already inside meteor, we will use default database.

## Entities

We have the following list of entities
* Users (all users who use chat app)
* Chats (history of all chats)
* History (message list)
* Invites (users can send invites to other users, and to new ones)

## Db Schema
We need 4 tables for out project

1) users
```
user_id
fullName
nickName
password
```
2) chats
```
chat_id
created_datetime
type (public/private)
name
```
3) history
```
history_id
datetime
message
reply_to_id
chat_id
user_id
```
4)invites
```
invite_id
code
status (new/completed)
user_id_from
user_id_to
email_to
```

Chats and Users related by many-to-many relation, through the history table.