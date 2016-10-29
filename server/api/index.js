import express from 'express';

const apiRouter = express.Router();
apiRouter.use('/admin', require('./admin'));

module.exports = apiRouter; 
