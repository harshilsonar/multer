const mongoose = require('mongoose');

async function connecttodb() {
    await mongoose.connect("mongodb://127.0.0.1:27017/multer")
    console.log("Connected to MongoDB")
}
const fileSchema = mongoose.Schema({
    filename:{
        type:String,
        required:true
    }
})
const File = mongoose.model("File",fileSchema)
module.exports = {connecttodb,File}