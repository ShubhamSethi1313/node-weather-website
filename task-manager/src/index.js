// const express = require('express')
// // require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
// const app = express()

// const port = process.env.PORT || 3000

// app.use(express.json())
// //-------------Creating Endpoints-------------------
// app.post('/users',(req,res)=>{
//     // console.log(req.body)
// //  res.send('testing!')
// const user = new User(req.body)
// user.save().then(()=>{
//     res.status(201).send(user)
// }).catch((error)=>{
//     res.status(400).send(error)
//     // res.send(error)
// })
// })
// app.post('/tasks',(req,res)=>{
//     const task = new Task(req.body)
//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })
// })


// //------------------Reading Endpoints-----------------------------
// app.get('/users',(req,res)=>{
//     User.find({}).then((user)=>{
//         res.send(user)
//     }).catch((error)=>{
//         res.status(500).send()
//     })
// })

// app.get('/users/:id',(req,res)=>{
//   const _id = req.params.id
//   User.findById(_id).then((user)=>{
//     if(!user){
//         return res.status(404).send()
//     }
//     res.send(user)
//   }).catch((error)=>{
//     res.status(500).send(error)
//   })
// })

// //---------Challenge for Reading task Endpoints
// app.get('/tasks',(req,res)=>{
//   Task.find({}).then((task)=>{
//     res.send(task)
//   }).catch((error)=>{
//     res.status(500).send()
//   })  
// })


// app.get('/tasks/:id',(req,res)=>{
//  const _id = req.params.id
//  Task.findById(_id).then((task)=>{
//     if(!task){
//         return res.status(404).send()
//     }
//     res.send(task)
//  }).catch((error)=>{
//     res.status(500).send()
//  })
// })
// app.listen(port,()=>{
//    console.log("Server is up on port " + port)
// })


//-------USING ASYNC AWAIT METHOD-----------------------------------

const express = require('express')
// const User = require('./models/user')
// const Task = require('./models/task')
const app = express()
const userRouter = require('./router/user-Router')
const taskRouter = require("./router/task-Router")

const port = process.env.PORT || 3000

//------Without middleware: new request --> run route handler
//------With middleware: new request --> do something --> run route handler

// app.use((req,res,next)=>{
//    if(req.method === 'GET'){
//     res.send("GET requests are disable")
//    }
//    else{
//     next()
//    }
// })


// app.use((req,res,next)=>{
//    res.status(503).send("Site is currently down. Check back soon")
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
   console.log("Server is up on port " + port)
})

// const bcrypt = require('bcryptjs')
// const myfunction = async()=>{
//    const password = "Shubham@123"
//    const hashPassword = await bcrypt.hash(password,8)
//    console.log(password)
//    console.log(hashPassword)
//    const isMatch = await bcrypt.compare("shubham@123",hashPassword)
//    console.log(isMatch)
// }

// myfunction()


// const jwt = require('jsonwebtoken')
// const Myverification = async ()=>{
//    const token = jwt.sign({_id:'abc123'},"This is my verification",{expiresIn:"1 seconds"})
//    console.log(token)
//    const data = jwt.verify(token,"This is my verification")
//    console.log(data)
// }
// Myverification()