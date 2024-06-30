const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Todomodel=require("./models/todo")
mongoose.connect('mongodb://localhost:27017/todos');



const app=express();
app.use(cors());
app.use(express.json());

app.listen(9090,()=>{
    console.log("server is running..")
})

app.get("/",async(req,res)=>{
    res.send("everything looks good")
})

app.get("/get",async(req,res)=>{
    await Todomodel.find()
      .then(result=>(res.json(result)))
      .catch(err=>console.log(err))
  })

app.post("/add",async(req,res)=>{ 
    const newtask=Todomodel.create({
        task:req.body.task
    });
    (await newtask).save()
    console.log(newtask);
})

app.delete("/delete/:id",async(req,res)=>{
   let id=req.params.id
   const complete = await Todomodel.findByIdAndDelete(id);
   console.log(complete)
})

