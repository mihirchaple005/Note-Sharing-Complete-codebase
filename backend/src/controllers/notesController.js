import { Notes } from "../models/noteModels";

import fs from 'fs'
// create-notes 
export const createNotesController=async(req,res)=>{
    try {
        const {username}=req.user._id
        const {title,description,branch,cloud_link}=req.fields
        const {image}=req.files
        if(!title){
             return res.status(404).send({message:"Notes Title is required"});
        }
        if(!description){
             return res.status(404).send({message:"Notes Description is required"});
        }
        if(!cloud_link){
             return res.status(404).send({message:"Cloudinary link is required"});
        }
        if(image && image.size>10485760){
            return  res.status(404).send({message:"Image with min. size is required"});
        }
        if(!branch){
            return  res.status(404).send({message:"Notes Title is required"});
        }
        const notes=new Notes({...req.fields})
        if(image){
            notes.image.data=fs.readFileSync(image.path)
            notes.image.contentType=image.type
        }
            await notes.save()
            return res.status(200).send({
                success:true,
                message:'notes created Successfully',
                notes
            })
    } catch (error) {
        return res.status(404).send({
            success:false,
            message:"Error while creating notes",
            error
        })
    }
}

//get-all-notes
export const getallNotes=async(req,res)=>{
    try {
        const notes=await Notes.find({}).populate('username').select('-image').sort({createdAt:-1})
        return res.status(200).send({
            success:true,
            message:"Getting All Notes",
            notes
        })
    } catch (error) {
        return res.status(404).send({
            message:"Error in Fetching Notes",
            success:false,
            error
        })
    }
}

//get-SingleUser-Notes
export const getSingleUserNotes=async(req,res)=>{
    try {
        const notes=Notes.find({username:req.user._id}).populate('username').select('-image')
        return res.status(200).send({
            success:true,
            message:"getting the notes",
            notes
        })
    } catch (error) {
        return res.status(404).send({
            message:"Error in Fetching Note",
            success:false,
            error
        })
    }
}

//Notes-Image
export const getNoteCover=async(req,res)=>{
    try {
        const notes=await Notes.findById(req.params.pid).select('image')
        if(notes.image.data){
            res.set('Content-type',notes.image.contentType)
        res.status(200).send(
            notes.image.data
        )
    }
        
    } catch (error) {
        return res.status(404).send({
            message:"Error in Fetching Note-Cover photo",
            success:false,
            error
        })
    }
}

export const updateNotes=async(req,res)=>{
    try {
        const {username}=req.user._id
        const {title,description,branch,cloud_link}=req.fields
        const {image}=req.files
        if(!title){
             return res.status(404).send({message:"Notes Title is required"});
        }
        if(!description){
             return res.status(404).send({message:"Notes Description is required"});
        }
        if(!cloud_link){
             return res.status(404).send({message:"Cloudinary link is required"});
        }
        if(image && image.size>10485760){
            return  res.status(404).send({message:"Image with min. size is required"});
        }
        if(!branch){
            return  res.status(404).send({message:"Notes Title is required"});
        }
        const notes = await Notes.findByIdAndUpdate(req.params.pid,{...req.fields},{new:true})
        if(image){
            notes.image.data=fs.readFileSync(image.path)
            notes.image.contentType=image.type
        }
            await notes.save()
            res.status(200).send({
                message:"Notes updated Successfully",
                success:true,
                notes
            })
    }
     catch (error) {
        return res.status(404).send({
            success:false,
            message:"Error while Updating Product",
            error
        })  
    }
}
//Notes-search-by-branch-radio
export const NotesFilter=async(req,res)=>{
    try {
        const {radio}=req.body
        let parameter={}
        if(radio.length) parameter.branch=radio
        const note=await Notes.find(parameter)
        res.status(200).send({
            success:true,
            message:"Applying Filter Successfully",
            note
        })
    } catch (error) {
        res.status(404).send({
            success:false,
            message:"Filter not applied",  
            error
        })
    }
}
// Notes-search-by-title
export const NotesSearch=async(req,res)=>{
    try {
        const {keyword}=req.params
        const results=await Notes.find({
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}}
            ]
        }).select("-image");
        res.status(200).send({
            success:true,
            results
        })
    } catch (error) {
        res.status(404).send({
            success:false,
            message:"Search not applied",  
            error
        })
    }
}


//Delete-Notes
export const DeleteNotes=async(req,res)=>{
    try {
        await Notes.findByIdAndDelete(req.params.pid)
        res.status(200).send({
            success:true,
            message:"Notes Deleted Successfully"
        })
    } 
    catch (error) {
        res.status(404).send({
            success:false,
            message:"Unable to delete notes",
            error
        })
    }
}
//cloud feature space