const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://lucasprovap1:a1b2c3d4e5@prava-p1.unhlmsg.mongodb.net/test');
};

module.exports = startDB;