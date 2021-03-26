const multer =  require('multer');
const uuid = require('uuid').v4;
const path = require('path');



const storage = multer.diskStorage({
    destination: 'server/uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
        console.log('CB =>', cb)
    }
})
console.log(storage)
module.exports = multer({storage});
