# issuesum-chrome-ext-js
The project `issuesum-chrome-ext-js` is a plugin project for realizes a Google Chrome extension (plugin) for Chrome browsers.


## Introduction
This project implements a Google Chrome Extension which adds a summarization feature while the user is visiting an issue page.
At the moment only GitHub issue tracker is supported. 

## Quick start info
Install this extension in your Google Chrome browser by going to chrome://extensions and choose the `Load unpacked` button.
You will be asked for the directory where the manifest.json file is located, that is this project root directory.
Check out the installation instructions for Chrome Extensions on the site of Google Chrome.

## Development
All development is done on the `dev` branch. Please, switch (checkout) to `dev` branch before checking in your changes.
All commit messages should be provided with an issue number (#number) acquired by the issuetracker/project whiteboard.
The `main` branch contains stable code.

*Mind You:*

If you are experimenting with new technologies and frameworks/libraries which have a significant impact on the project structure and code, then it is wise to create a personal branch from `dev` branch so that you are free to experiment and make rigorous changes without impacting other team members. 
