const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('638f787cb5bab5ce42d7388d',{age:21}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:21})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//-----------Update using async await method--------------------
// const update = async(id,age)=>{
// const user = await User.findByIdAndUpdate(id,{age})
// const count = await User.countDocuments({age})
// return count
// }

// update('638f787cb5bab5ce42d7388d',44).then((user)=>{
//   console.log(user)
// }).catch((error)=>{
//   console.log(error)
// })



// Task.findByIdAndDelete("63904d90cb25e0498d53a945").then((task)=>{
  //     console.log(task)
  //     return Task.countDocuments({completed:true})
  // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
      //     console.log(error)
// })

//-----------Delete using async await method--------------------
const del = async(id)=>{
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:false})
  return count
}

del('63906b4bd8d926460db4c3d9').then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.log(error)
})



//----------------Promise Chaining-------------------------------------------
// const add=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve(a+b)
//      },2000)
//     })
//  }
 
 // add(1,2).then((sum)=>{
 //   console.log(sum)
 
 //   add(sum,5).then((sum2)=>{
 //     console.log(sum2)
 //   }).catch((error)=>{
 //     console.log(error)
 //   })
 // }).catch((error)=>{
 //   console.log(error)
 // })
 
 
//  add(1,4).then((sum)=>{
//    console.log(sum)
//    return add(sum,4).then((sum2)=>{
//      console.log(sum2)
//    })
//  }).catch((error)=>{
//    console.log(error)
//  })