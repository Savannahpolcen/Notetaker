const fs = require("fs");
const util = require('util');
const {v4:uuidv4} = require('uuid');

const readFileASync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
    read() {
        return readFileASync('db/db.json', 'utf-8')
    }

    write(notes) {
        return writeFileAsync('db/db.json', JSON.stringify(notes));
    }

    getNotes () {
        return this.read().then((notes) => {
            let parsedNotes
            try{
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNotes=[];
            } return parsedNotes;
        })
    }


    addNotes (notes) {
        const {title,text} = notes;
        const newNotes = {title,text, id:uuidv4()};

        return this.getNotes()
        .then((notes) => [...notes, newNotes])
        .then((newDatabaseNotes) => this.write(newDatabaseNotes))
        .then(() => newNotes)
    }
}

module.exports = new Store();