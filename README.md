# modern-news-app

## Project Name and Description
### Modern News App
- This app provides articles from news vendors all around the world with a modern user interface in many different categories. Technology, Sports, Finances, etc. 

#### Features
Easy to read news app layout, with a modern aesthetic look and feel. 
The home page shows Top news, with the most popular headlines, along with today news, featuring most recent news stories.

## Project Requirements
- Node version v.14.17.5

## Project Setup / Build Instructions
- Install required packages

## How-to Run the Project
What you need
1. Computer terminal
2. Internet
3. Node updated to version 14.17.5
4. Npm updated to version 6.13.4

- To run this app locally, open a terminal and run
- `git clone https://github.com/JorgeLVilla/modern-news-app.git`
- to clone the repo on a local machine.

- Then
- `cd news-app`
- and then
- `cd modern-news-app`
- and after that
- `npm install`
- and finally, after all those installs are done
- `npm start`

## Development Process
- When starting work on a new release version, increment `minor` version(example: 1.2.0 to 1.3.0)
## Deployment Instructions
- Install Firebase CLI by running `npm install -g firebase-tools`
- Create project on Firebase console
- In project's root directory, login via `firebase login` command
- Initialize Firebase project via `firebase init`
- Create `build` by runing `npm run build`
- Run `firebase deploy`
- For more info about hosting with Firebase, check out the [official Firebase documentation](https://firebase.google.com/docs/hosting/quickstart)