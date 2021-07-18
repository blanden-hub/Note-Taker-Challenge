const path = require("path");

module.exports = function (route) {

    route.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    route.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    route.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}