var express = require('express');
var bodyparser = require('body-parser');
var config = require('./config');
var index = require('./routes/index');

var app = express();
app.use(bodyparser.json());

app.use('/', index);

//catch 404 and forward to error handler

app.use(function (req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

//error handler
app.use(function (err, req, res, next) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render error page

    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
        });

});

if (!module.parent) {
    app.listen(config.port, function () {
        console.log(`app listening at http://localhost:${config.port}`);
    });
}

module.exports = app;