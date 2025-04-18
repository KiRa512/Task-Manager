const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');


const DB = process.env.DB_URI.replace('<db_password>',process.env.DB_PASSWORD);
const connectToDB = async () => {
    try {
        await mongoose.connect(DB)
        console.log('Connection Successful')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectToDB;