const express = require ('express');
const morgan = require('morgan');
const {mongoose} = require('./database')
const cors = require('cors')
const app = express();


// Settings
app.set('port', process.env.PORT || 3000 );
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('./public/uploads', express.static(__dirname + '/uploads'))
app.use(cors({
    origin:'http://localhost:4200'
}));




// Routes
app.use('/api/users',require('./routes/users.routes'));
app.use('/api/promotions',require('./routes/promotions.routes'));
app.use('/api/images', require('./routes/image.routes'));


// Start the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})