const imageCtrl = {};
const Image = require('../models/images');
const path = require('path');
const fs = require('fs-extra')



imageCtrl.createImage = async (req, res) => {
    const newImage = {
        path: req.file.path
    }
    const image = new Image(newImage)
    console.log(image)
    await image.save();
    res.json({
        message: 'Photo Upload!'
    })
};

imageCtrl.getImages = async (req, res) => {
    console.log(req.body)
     const images = await Image.find();
     res.send(images)
};

imageCtrl.deleteImage = async (req, res) =>{
    const id = (req.params.id);
    const photo = await Image.findByIdAndRemove(id);
    console.log(photo)
    if(photo){
        await fs.unlink(path.resolve(photo.path))
    }
    res.json({
        "Status":"Image Deleted",
        photo
    })
}

module.exports = imageCtrl;