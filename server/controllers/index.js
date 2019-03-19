const portfolio = require(`${__dirname}/../../hosted/portfolio.js`);
const handlebars = require('express-handlebars');

// function to handle a request to any non-real resources (404)
// controller functions in Express receive the full HTTP request
// and get a pre-filled out response object to send
const notFound = (req, res) => {
  // res.render takes a name of a page to render.
  // These must be in the folder you specified as views in your main app.js file
  // Additionally, you don't need .handlebars because you registered the file
  // type in the app.js as handlebars. Calling res.render('index')
  // actually calls index.handlebars. A second parameter of JSON can be passed
  // into the handlebars to be used as variables with #{varName}
  res.status(404).render('notFound', {
    page: req.url,
  });
};

const getPortfolio = (req, res) => {
    res.render('portfolio');
};

const getContact = (req, res) => {
    res.render('contact');
};

const getSkills = (req, res) => {
    res.render('skills');
};
const getPrograms = (req, res) => {
    res.render('programs');  
};
const getNotes = (req, res) => {
    res.render('notes');  
};
const getProjects = (req, res) => {
    res.render('projects');  
};
const getAnimalStackers = (req, res) => {
    res.render('projectPage', {
        projectName: "Animal Stackers",
        content: `Animal Stackers is a 3D family friendly geometric animal stacking game built in Unity. It was coded in C# for the 2016 Microsoft Imagine Cup Game Jam @ RIT, it was completed in
        a 36 hour time frame. The goal of the game is to stack as many animals as you can onto the platform without them falling off. The more animals stacked on the platform the more
          points a player gets. If an animal falls off the platform the player loses a life. <br> <br>
        
        The game won Best 3D gameplay at the game jam and went to the Microsoft Imagine Cup Semi-Finals. I was the lead programmer for this project and my groupmates were
        Beau Marwaha, UI/General Programmer, and Emily Haldeman, 3D Modeller. Link to GitHub repository <a class ="normal" href = "https://github.com/BeauMarwaha/AnimalStackers" target = "_blank"> here</a>.`,
        image: "assets/images/as1.png",
        id: "as",
    });
};

const getFragments = (req, res) =>{
    res.render('projectPage', {
        projectName: "Fragments",
        content: `Fragments is a 2D side scrolling rpg styled similarily to old school final fantasy games.
        It was coded in C# using the monogame framework in visual studio and completed over the course of 15 weeks as
        a group project. I worked as a game view programmer, getting everything drawn to the screen and loading in all necessary data from an external file.<br /> <br />
        My teammates were Justin Levine, Benjamin Pylko, and Nick Boyle; the full game repo can be found <a class = "normal" href = "https://github.com/RPGCCIS/Game" target = "_blank">here</a>`,
        image: "assets/images/fragments1.png",
        id: "fragments",
    });
};

const getMaze = (req, res) =>{
    res.render('projectPage', {
        projectName: "The Maze",
        content: `A very simple game involving finding your way through a maze. Built in Unity using the unity asset packages for environment and particle systems.
        A small amount of coding was done in C# to include a timer and trigger events.`,
        image: "assets/images/maze1.png",
        id: "maze",
    });
};
const getAsteroids = (req, res) => {
    res.render('projectPage', {
       projectName: "Asteroids",
       content: `Asteroids is a simple recreation of the 1979 classic. This was completed within a week and
        I created all of the assets used in the game other than the theme song being played. It was programmed in C# and built
        in the Unity engine.`,
       image: "assets/images/asteroids1.png",
       id: "asteroids",
    });
};
// export the relevant public controller functions
module.exports = {
  notFound,
  getPortfolio,
  getContact,
  getSkills,
  getPrograms,
  getNotes,
  getProjects,
  getAnimalStackers,
  getFragments,
  getMaze,
  getAsteroids,
};
