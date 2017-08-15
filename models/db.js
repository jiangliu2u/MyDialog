var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/dialog';
mongoose.Promise = global.Promise;
/**
 * 连接
 */
var userSchema = require('./User');
var dialogSchema = require('./Dialog');
var db = mongoose.connect(DB_URL);

var obj = {};

obj.user = mongoose.model("User", userSchema);
obj.dialog = mongoose.model("Dialog", dialogSchema);
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: hhhh' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;