const express = require("express");
const userRouter = new express.Router();
const User = require("../models/user");
const auth =  require("../middleware/auth")

//-------------Creating Endpoints-------------------
userRouter.post("/users", async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save();
    const token = await user.generateAuthToken()
    res.status(201).send({user,token});
  } catch (error) {
    res.status(400).send(error);
  }
});

//---------Logging in Users----------------
userRouter.post("/users/login",async(req,res)=>{
  try{
      const user = await User.findByCredentials(req.body.email,req.body.password)
      const token = await user.generateAuthToken()
      res.send({user,token})
  }
  catch(error){
    res.status(400).send()
  }
})
//---------Logout Users----------------
userRouter.post("/users/logout",auth,async(req,res)=>{
  try{
     req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token !== req.token
     }) 
     await req.user.save()
     res.send()
  }
  catch(error){
    res.status(500).send()
  }
})

//-----------------LogoutAll users----------------------------------------
userRouter.post("/users/logoutAll",auth,async(req,res)=>{
  try{
     req.user.tokens = []
     await req.user.save()
     res.send()
     }
     catch(error){
       res.status(500).send()
      }
    })

//------------------Reading Profile-----------------------------
userRouter.get("/users/me",auth, async (req, res) => {    
      res.send(req.user)
    });

//------------------Reading Endpoints-----------------------------
userRouter.get("/users", async (req, res) => {
  const user = new User(req.body)
  try {
      const user = await User.find({});
      res.send(user);
    } catch (error) {
        res.status(500).send();
      }   
    });
   
    
userRouter.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//------Update endpoints--------------------------------
userRouter.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const user = await User.findById(req.params.id)
    updates.forEach((update)=>{
      user[update] = req.body[update]
    })
    await user.save()
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-------------Delete Enpoints--------------------------
userRouter.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = userRouter;
