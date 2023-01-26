const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
require('dotenv').config();
const connectDB = async()=>{
    try{
const conn = await mongoose.connect('mongodb+srv://mpdam:123456azerty@moncluster.0svgnk8.mongodb.net/mernapp?retryWrites=true&w=majority')
console.log(` MongoDB connected : ${conn.connection.host}`.cyan.
underline)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
