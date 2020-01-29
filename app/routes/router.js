const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var fs = require('fs');
var dbController = require('../controller/upload.controller')
var mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const mongoURI = 'mongodb://localhost:27017/fileU';
// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
        });
    }
});
const upload = multer({
    storage
});
var db = mongoose.connection

router.post('/upload', upload.single('name'), (req, res) => {
    res.json({
        file: req.file
    })

});

router.get('/search',dbController.search)

router.get('/policy',dbController.findPolicy)   
    

module.exports = router;