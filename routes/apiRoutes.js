const generateUniqueId = require('generate-unique-id');
const fs = require('fs');

module.exports = function (route) {

    route.get("/api/notes", function (req, res) {

        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        return res.json(notes);

    });
    
    route.post("/api/notes", function (req, res) {

        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        req.body.id = generateUniqueId();
        let newNotes = req.body;
        notes.push(newNotes);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf8");
        res.json(newNotes);

    });
 
    route.delete("/api/notes/:id", function (req, res) {

        const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let filteredNotes = notes.filter(notes => notes.id !== req.params.id);
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), "utf8");
        res.json(filteredNotes);


    })
}