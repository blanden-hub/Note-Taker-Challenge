const generateUniqueId = require('generate-unique-id');
const fs = require('fs');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        const note = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        return res.json(note);

    });
    

    app.post("/api/notes", function (req, res) {

        const note = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        req.body.id = generateUniqueId();
        let newNotes = req.body;
        note.push(newNotes);
        fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf8");
        res.json(newNotes);

    });
 
    app.delete("/api/notes/:id", function (req, res) {

        const note = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let filteredNotes = note.filter(note => note.id !== req.params.id);
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), "utf8");
        res.json(filteredNotes);


    })
}