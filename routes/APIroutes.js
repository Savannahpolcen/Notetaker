const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const store = require("../db/store.js");


router.get('/notes', (req, res) => {
    store.getNotes() .then ((notes) => {
        return res.json(notes);
    })

    .catch((error) => res.status(500).json(error));
});

router.post('/notes', (req,res) => {
    store.addNotes(req.body).then((note) => {
        res.json(note);
    })

    .catch((error) => res.status(500).json(error));

});

module.exports = router;