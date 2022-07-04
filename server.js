const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./models/blogs')

// const uri =
//   "mongodb+srv://bascher:1234@cluster0.5xdtsg4.mongodb.net/?retryWrites=true&w=majority";

// async function connect(){
//     try {
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error(err);
//     }
// }

// connect();

// app.listen(8000, ()=>{
//     console.log("Server started on port")
// })

const dbURL =
  "mongodb+srv://bascher:<password>@cluster0.5xdtsg4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology : true })
  .then((result) => app.listen(3000))
  .catch((err)=> console.log(err))


app.get("/add", (req,res)=>{
  const blog = new Blog({
    title : " title ",
    short : " short content", 
    long : " long content",
  }) 
 //  I don't need to create timestamp, it will be created automatically.
  blog.save()
    .then((result)=>{
      res.send(result);
    })
    .catch((error)=>{
      console.log(error);
    })
})

app.get("/all", (req,res) => {
  Blog.find()
  .then((result)=> {
    res.send(result)
  }).catch((err) => console.log(err)
  )
}
)