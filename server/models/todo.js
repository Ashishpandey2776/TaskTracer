const mongoose=require('mongoose');

const MyTodo=new mongoose.Schema({
  task:String,
})

const Todomodel=mongoose.model("todos",MyTodo);
module.exports=Todomodel;