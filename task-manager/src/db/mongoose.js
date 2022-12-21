//---------------------- Mongoose database----------------------------------------------------
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const validator = require('validator')

// const User = mongoose.model("User",{
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase :true,
//         validate(value){
//       if(!validator.isEmail(value)){
//         throw new Error("Email is invalid")
//       }
//     }
//     },
//     age:{
//         type:Number,
//         default: 0,
//         validate(value){
//            if(value < 0){
//             throw new Error("Age must be a positive number")
//            }
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,

//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('password cannot contain "password"')
//             }
//         }
//     }
// })

// const me = new User({
//     name:"    Shubha   ",
//     age: 1,
//     email:"    SHUBHAM@GAMIL.COM   ",
//     password : "phone@123"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })


// const tasks = mongoose.model('tasks',{
//     description:{
//         type:String,
//         required:true,
//         trim:true,

//     },
//     completed:{
//         type:Boolean,
//         default:false,
//     }
// })

// const detail = new tasks({
//     description:"          This api is build using mongooes           ",
    // completed:true
// })

// detail.save().then(()=>{
//     console.log(detail)
// }).catch((error)=>{
//     console.log("Error!",error)
// })

