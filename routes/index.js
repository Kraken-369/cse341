const routes = require('express').Router();
const controller = require('../controllers/').default;

routes.get('/', controller.actionDefault);
routes.get('/one', controller.actionOne)
routes.get('/two', controller.actionTwo);
routes.get('/specialist', controller.actionSpecial);

module.exports = routes;