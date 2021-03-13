const userCtrl = {};
const User = require('../models/users');
const nodemailer = require('nodemailer')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    // console.log(user);
    res.json({
        'status': 'User saved'
    });

    const {name, lastName, number, email, location, question } = req.body;
    contentHTML = `
        <h1>Informacion del usuario</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Apellido: ${lastName}</li>
            <li>Email: ${email}</li>
            <li>Numero de telefono: ${number}</li>
            <li>Localidad: ${location}</li>
            <li>Mensaje: ${question}</li>
        </ul>
    `
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure: true,
        auth: {
            user: 'dalmiro2h@gmail.com',
            pass: 'nxvoyekqbjjxvwtr'
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    const info = await transporter.sendMail({
        from: 'dalmiro2h@gmail.com',
        to: 'milit2300@gmail.com',
        subject: "Formulario de contacto",
        text: contentHTML
    });
    console.log('Message sent', info.messageId)
    
}


userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.deleteUser = async (req, res) => {
    const id = (req.params.id);
    await User.findByIdAndRemove(id);
    res.json({
        "status":"User deleted" 
    })
}

module.exports = userCtrl;