const express = require ('express');
const morgan = require('morgan');
const {mongoose} = require('./database')
const app = express();


// Settings
app.set('port', process.env.PORT || 3000 );


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(cors({origin: 'https://localhost:4200'}));



// Routes
app.use('/api/users',require('./routes/users.routes'));


// Start the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})