var path = require("path");


module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // login and signup page for app
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};