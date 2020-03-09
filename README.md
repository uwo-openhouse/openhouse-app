
<div style="text-align: center">
<h1>WesternU Open House App</h1>
<img src="https://github.com/uwo-openhouse/openhouse-app/blob/master/src/assets/images/icon.png?raw=true" alt="WesternU Open House" width="150" />
</div>

<br/>

![Build](https://github.com/uwo-openhouse/openhouse-app/workflows/Build/badge.svg) 
![Create Release](https://github.com/uwo-openhouse/openhouse-app/workflows/Create%20Release/badge.svg)

# Description
Mobile app for Western U's Open House Event. The app focuses on displaying current events happening for the open house that is currently active. The app allows users to 'save' events to their planner and view their time, location and descriptions of the event from the app.  


# Contents
- [Description](#description)
- [Contents](#contents)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Running the Project](#running-the-project)
  - [Creating a Release](#creating-a-release)
  - [Getting to know React 101](#getting-to-know-react-101)
- [Resources](#resources)
- [Contributions](#contributions)

# Getting Started 

## Requirements
   
   * NodeJS
   * Yarn
   * Git
   * Android Studio
   * IOS simulator

## Setup 

Setup the [openhouse-backend](https://github.com/uwo-openhouse/openhouse-backend).

Setup the [openhouse-admin-ui](https://github.com/uwo-openhouse/openhouse-admin-ui).

[Create two google maps api keys](https://developers.google.com/maps/documentation/javascript/get-api-key#get-the-api-key)
with the one with the maps SDK for Android enabled and the other with the maps SDK for IOS enabled.

Replace `GOOGLE_MAPS_API_KEY_CHANGE_ME` in [the app.json](./app.json) with your keys.

### Setting Up Environment Variables

1) Create a file called '.env.development' in the root directory (same as the '.env' file)
2) Add the line `BACKEND_URL={ENDPOINT_URL}` and set the ENDPOINT_URL to the endpoint you will be testing with
3) Close expo and run `exp r -c` in the terminal to clear the cache

## Running the Project

1) Clone the project. (you will need Node.JS)
2) Install Libs: `yarn`
3) Run with: `expo start`
4) To test:

    i) Download the EXPO app and scan the QR code

    ii) If on windows download an android emulator (suggested: Android Virtual Device (AVD)) and click run on android emulator.

## Creating a Release

Make sure you increment the versions of `version`, `versionCode` and `buildNumber` in [the app.json](./app.json).

To create a release push a tag matching the format `v*` and release with automatically be created and the built IOS 
app will be uploaded to [App Store Connect](https://appstoreconnect.apple.com/).

## Getting to know React 101
Useful resource for getting to understand basic concepts within react native. (Note: this is using react native cli to get started but we are using expo.) 
http://www.reactnativeexpress.com/

Expo provides a lot of useful guides:
https://docs.expo.io/versions/latest/

# Resources
- https://docs.expo.io/versions/latest/sdk/map-view/
- https://reactnavigation.org/

# Contributions
All contributors please be sure to add yourselves to the list at [contributors.js](./src/constants/contributors.js)
