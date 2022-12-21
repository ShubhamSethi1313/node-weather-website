// CRUD create read update delete

// const mongodb = require("mongodb");
// MongoClient is used for connect it to the database so we can perform CRUD....
// const MongoClient = mongodb.MongoClient;


const {MongoClient,ObjectID} = require ('mongodb');
// The ObjectID
// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    // console.log("Connected correctly!")

    const db = client.db(databaseName);
    //-----------------Inserting only one document--------------------------------
    // db.collection('users').insertOne({
    //   name:"Mead",
    //   age:24,
    // })

    
    //----------------Inserting Many document inside an array and ops is an array in the result-------------------------
//     db.collection('tasks').insertMany(
//       [
//         {
//           description: "Clean the house",
//           completed: true,
//         },
//         {
//           description: "Renew inspection",
//           completed: false,
//         },{
//           description:"Pot plants",
//           completed:false
//         }
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert documents!");
//         }
//         console.log(result.ops);
//       }
//     );


//---------------------- Read the document form the database---------------------------------

// findOne to find a single document by its ID.
// db.collection('tasks').findOne({ _id: new
//   ObjectID("6385a73b46347d3796500181") }, (error, task) => {
//     if(error){
//       return console.log("Unable to fetch")
//     }
//    console.log(task)
//   })

// Find to search for documents in the tasks collection
// db.collection('users').find({ age: 24}).toArray((error, users) => {
//   if(error){
//     return console.log("Unable to fetch")
//   }
//   console.log(users)
//  })
  

//------------Updating documents-------------------------------
// const p = db.collection('users').updateOne({_id:ObjectId('6385ad2a3a85a6832fc4081c')},{
//   $set:{
//     name:'Mead'
//   },
//   $inc:{
//     age:-1
//   }
// })
// p.then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error)
// })
//---------------Challenge for updateMany------------------------------

// db.collection('tasks').updateMany({completed:true},{
//   $set:{
//     completed:false
//   }
// }).then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error)
// })



//---------------Deleting Documents--------------------
// db.collection('users').deleteOne({
//   name:"Mead"
// }).then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error)
// })

//-----------------Deleting Many-------------------------------------
db.collection('users').deleteMany({
  age: 2
 }).then((result) => {
  console.log(result)
 }).catch((error) => {
  console.log(error)
 })
  });
