const { connect, connection } = require('mongoose');
// setting up the connection to mongoDB
connect('mongodb://localhost:27017/socialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;