# Windham Retreats

-- Story behind the name:  My friend wanted me to create a project to promote her business, Windham Yoga--which is actually in existence; so check it out!  Her priorities changed, after I had already started and named the directory Windham-Yoga.  I have changed the git repo name to Windham Retreats, but the Windham Yoga directory name remains.

## New Purpose

-- The goal of the project for me than became to learn to incorporate Stripe Payments.
   ### Stripe Version: 13.5.0
   ### MongoDB Atlas
   ### Vite 4.4.5
   ### Redux Toolkit
   ### Express 4.18.2
   ### Mongoose 7.4.3

#### No User Authentication or Authorization -- not a mistake

-- Though I set up the backend functionality for user authentication, such functionality was not desired by my friend.  After the project became, essentially, a vehicle for me to experiment with Stripe, I continued without authentication, because it posed an interesting challenge: how to clear the cart, if the current user--still retrieved from the MongoDB database--decided they wanted to end the session.  I achieved this, to some degree, via Redux, Redux Persist.

##### Github repository

-- [Windham Retreats Repo](https://github.com/mmaustin/windham-retreats)

###### Demo

-- [Windham Retreats Demo](https://watch.screencastify.com/v/Suxd8AynSUCAH74p51FK)