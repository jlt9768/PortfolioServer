// import the controllers
// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

// function to attach routes
const router = (app) => {
  // pass the express app in

  // app.VERB maps get requests to a middleware action
  // For example
  // app.get handles GET requests
  // app.post handles POST requests

  // when someone goes to the /page1 page, call controllers.page1
  // For example, www.webpage.com/page1, it will route to controllers.page1
  // app.get('/page1', controllers.page1);
  // app.get('/page2', controllers.page2);
  // app.get('/getName', controllers.getName);
  // app.get('/index', controllers.getPortfolio);
  app.get('/contact', controllers.getContact);
  app.get('/skills', controllers.getSkills);
  app.get('/programs', controllers.getPrograms);
  app.get('/notes', controllers.getNotes);
  app.get('/projects', controllers.getProjects);
  app.get('/animalstackers', controllers.getAnimalStackers);
  app.get('/fragments', controllers.getFragments);
  app.get('/maze', controllers.getMaze);
  app.get('/asteroids', controllers.getAsteroids);
  app.get('/linedrive', controllers.getLineDrive);
  app.get('/fitnesstracker', controllers.getFitness);
  // whenever someone goes to the site without a path (AKA the home page), call controllers.index
  // For example www.webpage.com
  app.get('/', controllers.getPortfolio);

  app.get('/*', controllers.notFound);

  // When someone POSTS to /setName, call controllers.setName
  // For example, a form submission to www.webpage.com/setName
  // app.post('/setName', controllers.setName);
};

// export the router function
module.exports = router;
