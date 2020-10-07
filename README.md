# DEV-TEAM
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents
* [Overview](#Overview)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Test](#Test)
* [Contributing](#Contributing)
* [Demo](#Demo)
* [Questions](#Questions)


## Overview
This project use **classes** and **objects** approach to generate a polished `HTML template` of a team of developers. This app generates a webpage that displays a team's basic information. So that managers/leads have quick access to team members contacts and github repositories.

## Installation
This app runs in the `command line` and uses `nodejs`, to start using it, make sure you have **nodejs installed** in your computer. To install this project locally you might have to *clone this repository* in your local machine and `cd` inside the cloned repository directory and open your terminal. In your terminal run the command `npm install` to install all the dev dependencies *(This is require only the first time you run the app)* then inside the terminal run the command `node app.js`. Thats it, you are setup!.

## Usage
This is a CLI app, it runs in the terminal. Users create their team by running the app and following the prompts. Make sure you are providing correct information to create your team members. 

## License
This project is using **MIT License** to find out more about what you can do with this repository check out the documentation of this type of [license](https://api.github.com/licenses/mit).

## Test
This readme section was made to help you run the unit test of this project and understand better the code base. This project uses `jest` and include a directory name `test`, inside you can find the unit tests of each of the classes used in the project. To run a test: go in your terminal `cd` in the project directory and run the command `npm run test`  If you want to run the test isolated for each class structure you must have to modify the `scripts` configuration in the `package.json` as follow: `"scripts": { "test": "jest --verbose test/CLASS" },` where **CLASS** can be replaced by the specific module/class that you want to test. The classes implemented in this project are: (`Employee`, `Manager`, `Engineer`, `Intern`).

## Contributing
Feel free to contribute, any contribution will be check and verify before to add it to the productive app. you can `fork` and `clone` this repository make your changes `push to your branch` and make a `pull request` to put your changes/additions/corrections on this project.

## Demo
![Demo of the HTML output](/assets/demo-html-output.gif)
![Demo of the CLI app usage](/assets/demo-cli-tool.gif)

## Questions
Any further question about this project email direct to <jlcalderonfuentes@gmail.com> feel free to reach out on [Github](https://github.com/jlcalderon)