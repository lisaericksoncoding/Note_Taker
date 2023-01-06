const express = require('express');
const api = express.Router();
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('../helpers/uuid');

api.post('/notes', (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    const { title, text } = req.body;

    const newNote = {
        title, 
        text,
        id: uuid(),
    }
existingNotes.push(newNote);
fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(existingNotes));
res.json(existingNotes);
}) 

api.get('/notes',  (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    res.json(existingNotes);
})

api.delete('/notes/:id', (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    let noteList = existingNotes.filter(note => {
        return note.id !== req.params.id
    })
    
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteList), function (err){
        if (err) {
            return console.log(err);
        } else {
            console.log("Your note has been successfully deleted.")
        }
    });
    res.json(noteList);
})
module.exports = api;