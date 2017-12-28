const mongoose = require('mongoose');

mongoose.connect('mongodb://abdul:12345@ds131697.mlab.com:31697/abdul', {
    useMongoClient: true
});