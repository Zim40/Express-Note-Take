
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
// setup File System Require
const fs = require('fs');
const uuid = require('./uuid/uuid');




// MiddleWare
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// static middleware
app.use(express.static('public'));
app.get('/', (req, res) => res.send ('index.html'));
// API Routes NOTES
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    const noteData = fs.readFileSync('./db/db.json');
    res.send(JSON.parse(noteData));
});

// POST Routes
app.post('/api/notes', (req, res) => {
    if(req.path === '/api/notes') {
        // reads db.json file
        const noteData = fs.readFileSync('./db/db.json');
        // notes is db.json/ line 84 pushes new note into db.json file
        const notes = JSON.parse(noteData);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
        }
        console.log(newNote);
        notes.push(newNote);
        // line 86 pushes consolidated newNotes and notes(db.json) back into db.json file
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(newNote);
    } else {
        res.status(404).send('Not Found after post');
    }
});

// DELETE Route
app.delete('/api/notes/:id', (req, res) => {
    const notes = fs.readFileSync('./db/db.json')
    const Data = JSON.parse(notes);
    const noteId = req.params.id;
   
    const index = Data.findIndex(note => note.id === noteId);
    if(index >= 0) {
        Data.splice(index, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(Data));
        
        return res.status(200).send(`Successfully Deleted ${req.params.id} Note!`);
        
    }else{
    res.status(404).send(`Note with id ${req.params.id} Cannot be found!`)
    };
    
    
});





















app.listen(PORT, () => {
    console.log(`Example App listening at http://localhost:${PORT}`);
});