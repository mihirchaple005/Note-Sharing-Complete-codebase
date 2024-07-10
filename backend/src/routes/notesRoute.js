import express from "express";
import { DeleteNotes, NotesFilter, NotesSearch, createNotesController, getNoteCover, getSingleUserNotes, getallNotes, updateNotes } from "./noteController.js";
import ExpressFormidable from "express-formidable";;

const route = express.Router()
route.post('/createnote/:pid',ExpressFormidable(),createNotesController)

route.get('/getallnotes',getallNotes);

route.get('/getSingleUserNotes/:pid',getSingleUserNotes)

route.get('/getnoteimage/:pid',getNoteCover)

route.put('/updatenotes/:pid',ExpressFormidable(),updateNotes)

route.delete('/deletenotes/:pid',DeleteNotes)

route.post('/filternotes',NotesFilter)

route.post('/searchnotes/:keyword',NotesSearch)

export default route;