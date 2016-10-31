import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');
mongoose.connect(require('../config').mongodb);
