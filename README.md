# Pomodoro timer app

## Live demo:

[Pomodoro timer NEED TO DEPLOY PROJECT](https://reservations-anyamg.vercel.app/)  

## Application Summary:

A pomodoro timer application intended for users to optimize their productivity.  
The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.

This app contains the following features:

1. Set the focus duration (default to 25 minutes, no less than 5 or more than 60).
1. Set the break duration (default to 5 minutes, no less than 1 or more than 15).
1. When the user clicks the "play" button, the timer starts.
1. When the focus time expires, an alarm sound plays and then the break timer starts.
1. When the break time expires, the alarm sound plays again and then the focus timer starts.

This application uses [Bootstrap 4](https://getbootstrap.com/) for styling and [Open-Iconic icons](https://useiconic.com/open) for icons.


## Initial screen

The initial screen lets the user set the length of the focus and break and break sessions. 

![Initial Screen](./docs/pomodoro-initial-screen.png)

The "stop" button is disabled on the initial screen because the user has not yet started the timer.  

When the user clicks the "play" button, the timer will always start a new focus session.

## Active session screen

After the user clicks the "play" button, the buttons to change the focus and break duration are disabled and the session timer appears. 

![Active Session Screen](./docs/pomodoro-active-sesson.png) 

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

## Paused session screen

If the user clicks the "pause" button, "paused" appears below the time remaining. 

![Paused Session Screen](./docs/pomodoro-paused-session.png) 

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

## Stopping a session

Stopping a session returns the application to the initial screen and the user is able to change the focus and break duration. 

Clicking the "play" button will always start a new focus session.

## Tech stack:

This application was created using JavaScript, React, Node, BootStrap, HTML, and CSS.

## Installation:

To install required dependencies:

`npm install`

To launch site preview:

`npm start`


