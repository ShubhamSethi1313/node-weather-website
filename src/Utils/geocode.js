const request = require('request');
const geocode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2h1YmhhbXNldGhpMTMxMyIsImEiOiJjbGF0dmk5ZHcwMGNwM3ZvZ3BvdGFxc3ZoIn0.90m6sfMmAEVE9pmzuEKnpg'
    request({url:url,json:true},(error,response)=>{
       if(error){
        callback('Unable to connect to location services!',undefined)
       }
       // For error in url
       else if(response.body.features.length === 0){
          callback("Unable to find locations. Try another search.", undefined)
       }
       else{
        callback(undefined,{
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location:response.body.features[0].place_name
        })
       }
    })
    }
    module.exports=geocode;