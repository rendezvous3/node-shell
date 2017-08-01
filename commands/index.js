const _ = require('lodash');

_.assign(module.exports, 
    require('./commands'),
    require('./optional'),
    require('./required')
);