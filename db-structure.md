# Database Structure

Every mid to serious backend project starts from db desing and planning. What will your database structure, what entities will it have and so on.
This document describes main entities of the project and their relation

## The db question

What kind of db we should use. Relational or Document. MongoDb vs Postgres.
For these project MongoDb will be enough.

## Entities

We have the following list of entities
* Users (all users who use chat app)
* Chats (history of all chats)
* Invites (users can send invites to other users, and to new ones)

## Db Schema

`
users
user_id
fullName
nickName
password
`

`
chats
chat_id
created_datetime
type (public/private)
name
`

`
history
history_id
datetime
message
reply_to_id
chat_id
user_id
`

`
invites
invite_id
code
status (new/completed)
user_id_from
user_id_to
email_to
`

Chats and Users related by many-to-many relation. So they need an intermediate table to store their relation data.