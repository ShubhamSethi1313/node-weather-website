const path = require ('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')


const app = express()
// console.log(path.join(__dirname,"../public"))
const pathDir = path.join(__dirname,"../public")

app.use(express.static(pathDir))

//--------- Set Dynamic Pages with Templating--------------
app.set('view engine','hbs')
app.get("",(req,res)=>{
   res.render("index",{
    title:'Weather',
    name:"Mead",
    year:"2022"
   })
})

//--------customizing the view directory
const viewPath = path.join(__dirname,"../templates/views")
app.set('views',viewPath)

const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath);


app.get("/about",(req,res)=>{
  res.render("about",{
    title:"About Me",
    name:"Mead"
  })
})

app.get("/help",(req,res)=>{
   res.render("help",{
       title:"Help",
       msg:"This is some helpful text.",
       name:"Mead",
   })
})
// app.get("",(req,res)=>{
//    res.send("<h1>Weather</h1>")
// })

// app.get("/about",(req,res)=>{
//   res.send([{
//     name:"Andrew",
//     age:24,
//     forecast:"25 deg",
//     location:"NewYork"
//   }])
// })



//--------------The Query String Challenge---------------------------
app.get("/weather",(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:"You must provide an address!"
    })
  }
  // res.send({
  //   forecast:"It is snowing",
  //   temp:"45deg",
  // })
  geocode(req.query.address,(error,geodata)=>{
    if(error){
      return res.send({
        error:error
      })   
    }
    forecast(-75.7088, 44.1545,(error,forecastdata)=>{
             if(error){
              return res.send({error:error})
            }
             res.send({
               forecast:forecastdata,
               location:geodata,
               address:req.query.address,
              })
          })
  })
})



//--------------The Query String---------------------------
app.get("/products",(req,res)=>{
  if(!req.query.search){
   return res.send({
      error:"You must provide a search term"
    })
  }
     console.log(req.query.search);
     res.send({
      products:[]
     })
})


app.get("/help/*",(req,res)=>{
    res.render("404",{
        title:'404',
        errorMessage:'Help article not found',
       })
})
app.get("*",(req,res)=>{
   res.render("404",{
    title:'404',
    errorMessage:'Page not found',
   })
})

app.listen(3000,()=>{
    console.log("Server is up on port 3000.")
})