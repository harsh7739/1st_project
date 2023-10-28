const express = require("express")
const { NoteModel } = require("../model/note.model")
const { auth } = require("../middleware/auth.middleware")

const noteRouter = express.Router()
noteRouter.use(auth)

noteRouter.get("/",async(req,res)=>{
try {
    const notes =await NoteModel.find({username:req.body.username})
res.status(200).send(notes)
} catch (error) {
    res.status(400).send({"error":error})
}
})

noteRouter.post("/create",async(req,res)=>{
    try {
        const note =new NoteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"A new note has been added","new note":req.body})
    } catch (error) {
        res.send({"error":error})
    }
})

noteRouter.patch("/update/:noteID",async(req,res)=>{
const {noteID} = req.params
const notes = await NoteModel.findOne({_id:noteID})

try {
    if(req.body.username==notes.username){
        await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
        res.status(200).send({"msg":"Notes has been updated"})
    }else{
        res.status(200).send({"error":"you are not authorised"})
    }
} catch (error) {
    res.status(400).send({"error":error})
}
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const {noteID} = req.params
    const notes = await NoteModel.findOne({_id:noteID})
    
    try {
        if(req.body.username==notes.username){
            await NoteModel.findByIdAndDelete({_id:noteID},req.body)
            res.status(200).send({"msg":"Notes has been deleted"})
        }else{
            res.status(200).send({"error":"you are not authorised"})
        }
    } catch (error) {
        res.status(400).send({"error":error})
    }
    })
module.exports = {noteRouter}