import express from 'express';
const adminRouter = express.Router();

adminRouter.use(require('./auth'));

module.exports = adminRouter;
