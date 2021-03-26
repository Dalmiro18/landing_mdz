const promotionCtrl = {};
const Promotion = require('../models/promotions')
const nodemailer = require('nodemailer')
require('dotenv').config();


promotionCtrl.createPromotion = async (req, res) => {
    const promotion = new Promotion(req.body);
    console.log(promotion);
    res.json({
        'status': 'Promotion Send'
    })
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_KEY
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const info = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: req.body.users,
        subject: "Nueva Promocion",
        text: req.body.content
    });
    console.log('Message sent', info.messageId)
}

// userCtrl.promotions = async (req, res) => {


// }

module.exports = promotionCtrl;