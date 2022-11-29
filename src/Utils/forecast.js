
const request = require('request');
const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=68d43b6f43a712cb82770bd1dd5ed2a6&query=40.714,-74.006' + latitude + ',' + longitude + '&units=f'
    // const url ="http://api.weatherstack.com/current?access_key=68d43b6f43a712cb82770bd1dd5ed2a6&query=New%20York"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
           }
           // For error in url
           else if(response.body.error){
              callback("Unable to find locations.", undefined)
           }
           else{
            callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature+ " degrees out. There is a " + response.body.current.precip+" % chance of rain.")
           } 
    })
}

module.exports=forecast;