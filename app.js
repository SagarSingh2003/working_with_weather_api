//import node fetch
const axios = require('axios');

//set lattitude and longitude
lat =  22.999512;
lon = 87.245958;

//set url as constant 
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b2fb3b07c760a1923cf9f40f3bc0dd74`;


//fetch data into the console
axios
    .get(URL)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    });