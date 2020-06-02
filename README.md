# The BESTimator
  ![GitHub repo size](https://img.shields.io/github/repo-size/CrainDavis/Bestimator?style=for-the-badge) ![GitHub code size](https://img.shields.io/github/languages/code-size/CrainDavis/Bestimator?color=gold&style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/CrainDavis/Bestimator?color=green&style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/CrainDavis/Bestimator?color=red&style=for-the-badge)

---

## Description:
Are you the __best__ at __estimating__? With BESTimator, test to see how good you are at guessing the exact quantity, height, weight, etc. of something based on a picture. Users can create an account with a unique username and password, play five questions daily, instantly see the rank and accuracy of their estimates, improve their scores to climb the leaderboard, and compete with others to see who is the __BESTimator__!

---

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Demonstration](#demonstration)
* [License](#license)
* [Resources](#resources)
* [Tests](#tests)
* [Contributors](#contributors)
* [Future Development](#future-development)

---

## Installation:
No installation is required.

---

## Usage:
Go to [this link](https://the-bestimator.herokuapp.com/) to use the application.

instructions for new users (see the demonstration video below as well):
* __step 1:__ Create an account by clicking the "sign up" button. Enter a unique username that is between 1 and 20 characters, as well as a password. Click "sign up" to complete.
* __step 2:__ Upon signing up or logging in, you will be brought to your Player Profile page. Here, you can view your current stats (accuracy & rank), your daily scores for the last 5 days, and click "PLAY" to start the game.
    * __note:__ _Users are only allowed to answer 5 questions a day. If you have already logged in and played that day, you will not be able to play again until after midnight (UTC-0)._
* __step 3:__ Click the "PLAY" button and answer each of the 5 questions (each asking you to estimate the quantity, height, weight, etc. of something based on an image).
* __step 4:__ Upon answering all 5 questions, you will be redirected to the _Leaderboard Page_, where to can see how well you rank against other players. You can also navigate back to the _Player Page_ by clicking the button on the top-left corner of the screen.
* __step 5:__ Please remember to logout once done playing and viewing scores.

---

## Demonstration:
Go to [this link](https://drive.google.com/file/d/1fDYxFkJNnOrkpX1yfp5RU5QwE5cD7LVF/view) to see a video demo on how to sign up and play BESTimator.

---

## License:
[MIT License](https://opensource.org/licenses/MIT)

---

## Resources:
* __Design:__
  * [Bulma CSS Framework](https://bulma.io/documentation/overview/start/)
  * [Font Awesome](https://fontawesome.com/)
* __Libraries:__
  * [jQuery](https://jquery.com/)
* __Dependencies:__
  * [bcryptjs](https://www.npmjs.com/package/bcryptjs)
  * [concurrently](https://www.npmjs.com/package/concurrently)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [express](https://www.npmjs.com/package/express)
  * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  * [express-session](https://www.npmjs.com/package/express-session)
  * [morgan](https://www.npmjs.com/package/morgan)
  * [mysql2](https://www.npmjs.com/package/mysql2)
  * [passport](https://www.npmjs.com/package/passport)
  * [passport-local](https://www.npmjs.com/package/passport-local)
  * [sequelize](https://www.npmjs.com/package/sequelize)
* __Development Dependencies:__
  * [cypress](https://www.npmjs.com/package/cypress)
  * [eslint](https://www.npmjs.com/package/eslint)
  * [prettier](https://www.npmjs.com/package/prettier)
  * [Insomnia REST Client](https://insomnia.rest/)
* __Deployment:__
  * [Heroku](https://www.heroku.com/home)
  * [JawsDB](https://www.jawsdb.com/)

---

## Tests:
The cypress tests can be viewed by cloning this repository to your local machine, installing all dependencies, and invoking the test module with `npm run cypress`. This application has tests for the following:
* __integration tests:__
  * _canary test
  * login test
  * signup test
* __page layout tests:__
  * game page
  * leaderboard page
  * player page

---

## Contributors: 
* Julian Secomb (https://github.com/jsecomb)
* Linus Schief (https://github.com/Linus41)
* Chyna Davis (https://github.com/CrainDavis)
* Veronica Torres (https://github.com/Drapeto)

---

## Future Development:
* __bug fixes & minor improvements:__
  * signup page: notify user if their username is already being used by someone else (on front-end)
  * login page: notify user if their username/password are either incorrect or do not exist (on front-end)
  * add keyup events to several pages so that user can hit 'enter' key to submit info/guess/etc, rather than clicking the button
* __larger plans:__
  * forum page
  * sponsorship (?)
