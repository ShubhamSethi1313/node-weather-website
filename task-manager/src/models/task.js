const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required :true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,

        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain "password"')
            }
        }
    }
})

taskSchema.pre("save", async function(kuch){
    const task = this
    // console.log("Just before saving data")
    if(task.isModified('password')){
        task.password = await bcrypt.hash(task.password, 8)
    }
    kuch()
})
const Task = mongoose.model('Task',taskSchema) 
module.exports= Task;