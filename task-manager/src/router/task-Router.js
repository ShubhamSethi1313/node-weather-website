const express = require('express')
const taskRouter = new express.Router()
const Task = require("../models/task")


//------------Creating Endpoint--------------
taskRouter.post('/tasks',async(req,res)=>{
    const task = new Task(req.body)
try{
   await task.save()
   res.status(201).send(task)
}
catch(error){
   res.status(400).send(error)
}
})


//---------Challenge for Reading task Endpoints
taskRouter.get('/tasks',async(req,res)=>{
  // const task = new Task(req.body)
  try{
    const task = await Task.find({})
    res.send(task)
  }
  catch(error){
    res.status(500).send(error)
  }  
})


taskRouter.get('/tasks/:id',async(req,res)=>{
  const _id = req.params.id
  try{
    const task =  await Task.findById(_id)
    if(!task){
     return  res.status(404).send()
    }
    res.send(task)
  }
  catch(error){
  res.status(500).send(error)
  }
 
})

//-----------Updating Endpoints--------------------
taskRouter.patch("/tasks/:id",async(req,res)=>{
  const updates = Object.keys(req.body)
  const allowedUpdates =['description','completed','password']
  const isValidOperation = updates.every((value) =>
   allowedUpdates.includes(value))
   if (!isValidOperation) {
 return res.status(400).send({ error: 'Invalid updates!' })
}
  try{
    const task  =  await Task.findById(req.params.id)
    updates.forEach((value)=>{
      task[value] = req.body[value]
    })
    await task.save() 
    //  const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
     if(!task){
      res.status(404).send()
     }
     res.send(task)
  }
  catch(error){
    res.status(400).send(error)
  }
})

//------------Delete Endpoints--------------------------------
taskRouter.delete("/tasks/:id",async(req,res)=>{
  try{
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
      res.status(404).send()
    }
    res.send(task)
  }
  catch(error){
    res.status(400).send(error)
  }
})



module.exports=taskRouter