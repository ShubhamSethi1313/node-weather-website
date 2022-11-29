// --------------------------------------------------------------------------------------------------
// const request = require ('request');
// const url ="http://api.weatherstack.com/current?access_key=68d43b6f43a712cb82770bd1dd5ed2a6&query=New%20York&units=f"
// request({url:url,json:true},(error,response)=>{
//     // console.log(response.body.current)
//     if(error){
//       console.log("Unable to connect to weather services")
//     }
//     else if(response.body.error){
//       console.log("Unable to find location")
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip+" % chance of rain.");
//     }
// })

//------------------------------------------------------------------------------------------------------------------
// Geocoding
// Acess Token pk.eyJ1Ijoic2h1YmhhbXNldGhpMTMxMyIsImEiOiJjbGF0dmk5ZHcwMGNwM3ZvZ3BvdGFxc3ZoIn0.90m6sfMmAEVE9pmzuEKnpg

// const geocodeURL  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1YmhhbXNldGhpMTMxMyIsImEiOiJjbGF0dmk5ZHcwMGNwM3ZvZ3BvdGFxc3ZoIn0.90m6sfMmAEVE9pmzuEKnpg'

// request({url:geocodeURL,json:true},(error,response)=>{

//     if(error){
//         console.log("Unable to connect to location services")
//     }
//     else if (response.body.features.length === 0){
//         console.log("Unable to find locations. Try another search.")
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)

//     }
// })
//-------------------------------------------------------------------------------------------------------------------------------
const request = require("request");
const geocode = require("./Utils/geocode");
const forecast = require("./Utils/forecast");

//  geocode("Noorpur",(error,data)=>{
//     console.log("Error",error)
//     console.log('Data',data)
// })

//-----------------------------challenge-------------------------------------------------------------------------
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
// console.log('Error', error)
// console.log('Data', data)

// })

//-------------------------------------Callback Function chaining-------------------------------------
const address = process.argv[2];
if (!address) {
  console.log("please provide an address");
} 

else {
  geocode(address, (error, geodata) => {
    if (error) {
      return console.log(error);
    }
    console.log("Error", error);
    console.log("Data", geodata);
    forecast(-75.7088, 44.1545, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(geodata);
      console.log(forecastdata);
    });
  });
}
