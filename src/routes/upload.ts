import express, { Request, Response } from "express";
import uploadController from "../controller/uploadController";
import multer from "multer";
import { Book } from "../entity/Book";

const storage = multer.diskStorage({
    destination : function( req: Request, file:any, cb:any) {
        cb(null, './uploads/');
    }, 
    filename:function(req:Request, file:any, cb:any) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage,})

const router = express.Router();

router.post('/', upload.single('graphic'),  uploadController.handleUpload);

export = router;