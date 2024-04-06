const mongoose = require('mongoose');

const uri = "mongodb+srv://anhntkph42900:1234566@cluster0.tfolv4x.mongodb.net/asm?retryWrites=true&w=majority&appName=Cluster0"


const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connect success')
    }catch(err){
        console.log(err);
        console.log('connect fail')
    }
}

module.exports = {connect}