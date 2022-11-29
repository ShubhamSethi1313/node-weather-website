const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model("User",{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const me = new User({
    name:"Shubham",
    age:24,
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log(error)
})


const tasks = mongoose.model('tasks',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const detail = new tasks({
    description:"This api is build using mongooes",
    completed:true
})

detail.save().then(()=>{
    console.log(detail)
}).catch((error)=>{
    console.log("Error!",error)
})