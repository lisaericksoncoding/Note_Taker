const express = require('express');
const api = express.Router();
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('uuid');

api.post('/notes', (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    const { title, text } = req.body;

    const newNote = {
        title, 
        text,
        id: uuid()
    }
existingNotes.push(newNote);
fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(existingNotes));
res.json(existingNotes);
}) 

api.get('/notes', (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    res.json(existingNotes);
})

api.delete('/notes', (req, res) => {
    let existingNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    for (let i = 0; i < existingNotes.length; i++) {
        if (existingNotes[i].id == req.params.id) {
            existingNotes.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(existingNotes), function (err){
        if (err) {
            return console.log(err);
        } else {
            console.log("Your note has been successfully deleted.")
        }
    });
    res.json(existingNotes);
})
module.exports = api;