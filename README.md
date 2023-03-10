# Express Note Taker App
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### Table of Contents
- [About](#about)
- [Description](#description)
- [Future-Development](#future-development)
- [Installation](#installation)
- [Usage](#usage)
- [Contributers](#contributers)
- [Contact](#contact)
- [Licence](#licence)
- [Demo](#demo)
- [Screenshot](#screenshot)
***
## About
Express Note Taker App has been created so that a user can add and delete notes to keep track of daily tasks.
***
## Description
Express Note Taker App provides a simple and effective user interface to create notes with a title, text and id number.
This application demonstrates the use of creating and maintaining API's through the use of frameworks making it easier and faster to develop web applications using JavaScript.
In this Application we use a number of different routes including;
 - GET
 - POST 
 - DELETE
 ``` javascript
 app.get('/notes', (req, res)...
 app.post('/api/notes', (req, res)...
 app.delete('/api/notes/:id', (req, res)... 
 ```
 ***

## Future Development
Future Development can be broadened to include, but not limited to;
 - Implementation of Calenders
 - Check boxes for when tasks are completed
 - Goals and expectations
 ***
## Installation
First to  begin using this application you must clone the code into your repository and open up your code editor of choice (VScode Recommended).
1. Open up a terminal from the server.js file and install dependencies using the command 'NPM install'.
2. After dependencies are installed proceed to run the command 'NPM start'
if you have following these steps correctly you should recieve the following message in the terminal:
``` shell
> note-taker@1.0.0 start
> node server.js        

Example App listening at http://localhost:3001
```
3. Hold CTRL and click http://localhost:3001, this should open a browser up with the Express Note Taker application and you are ready to start saving notes!<br>
`Note: open Application and start server to begin using Note Taker App.`
***
## Usage
Once you have completed the steps to [installation](#installation) yuo are ready to begin saving notes that are persistent using the db.json database.
simply type in a title, add a note and then click the save icon in the top right of your window. If you would like to delete a note, click the red bin icon next to your saved note to delete.
***
## Contributers
Sole Contributer:<br>
 GitHub: [Michael M (Zim40)](https://github.com/Zim40?tab=repositories)
 ***
## Contact
Contact Developer @<br>
[Contact Email](mailto:michaelm810129@gmail.com)
***
## Licence
This Project is Licenced under the MIT Licence<br>
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)<br>
[Licence Information](https://opensource.org/licenses/MIT)
***
## Links
[Live Application](https://sleepy-citadel-61909.herokuapp.com/)

***
## Screenshot
[![Screenshot](./Develop/public/assets/Images/App%20Screenschot.png)