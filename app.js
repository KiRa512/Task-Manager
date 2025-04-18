const express = require('express');
// const dotenv = require('dotenv');
//dotenv.config({ path: './config.env' });
const router = require('./routes/mainRoutes');
const connectToDB = require('./connect');
const notFound = require('./middleware/not-found');
const errHandler = require('./middleware/errorHandler');
const app = express();

app.use(express.static('public'));
app.use(express.json());


// connect to DB


app.use('/api/v1/tasks', router);
app.use(notFound);
app.use(errHandler);

// app.get('/',(req,res)=>{
//     res.send('Task Manager');
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectToDB();
});