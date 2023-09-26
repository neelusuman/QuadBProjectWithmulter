const express = require('express')
const { details, insert, deletee, update, images } = require('../controller')
const { authenticateUser, verifyToken } = require("../middleware")


const routes = express.Router()
const multer = require('multer');
const path = require('path');

const router = require('express').Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')




routes.get('/quadb/api/v1/details/:id', details)
routes.post('/quadb/api/v1/insert', upload,authenticateUser,insert)
routes.put('/quadb/api/v1/update/:id',verifyToken, update)
routes.delete('/quadb/api/v1/delete/:id', deletee)
routes.get('/quadb/api/v1/image/:id', images)


module.exports = { userRoutes: routes }