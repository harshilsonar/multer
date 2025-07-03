const multer = require("multer");

const storage =  multer.diskStorage({
  destination: function (req, file, cb) {
console.log("Request required for file upload",req)
console.log("file deatils",file)
cb(null, './uploads')

  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9)+file.originalname
  cb(null,uniqueSuffix)
  }
})


const upload=multer({storage})

module.exports = upload