const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("./config/multer");
const {connecttodb, File} = require("./config/db");
app.use(cors());
app.use(express.json());
app.use(express.static("./uploads"))

app.get("/", (req, res) => {
  res.send("api is runing");
});

//multer-->package(sometimes-->configuration-->middleware for file upload)
app.post("/api/file/upload",upload.single("file"),async (req, res) => {
 try {
  
await File.create({ filename: req.file.filename });
 } catch (error) {
  console.log(error);
  
 }
  res.send("file upload successfully");
});

app.get("/api/file/get",async(req,res)=>{
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.log(error);
  }
})
app.listen(8080, async() => {
  await connecttodb()
  console.log("server is running on port 8080");
});
