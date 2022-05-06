//const NewApi ='ebdeb6e2f96448af00886a1f95c65b5f'
//const url =  (location) => `https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=${NewApi}`

//async function getWeeatherByLoc(location) {
//const resp = await fetch(url(location), {origin: "cors"});
//const respData = await resp.json();

//console.log(respData);
//}

//getWeeatherByLoc("Nepal")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const I =  document.querySelector(".IN")
const DisplayTemp = document.querySelector("#DisplayTemp")
const placeName = document.querySelector("#place")
const DisplayWeatherStatus = document.querySelector(".small")
const humCal = document.querySelector("#Humidity")
const WindSpeed = document.querySelector("#WindSpeed")
const Pressure = document.querySelector("#Pressure")

function getData(city){
    NewApi ='ebdeb6e2f96448af00886a1f95c65b5f'

 url =  `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${NewApi}`

 fetch(url).then((response) => {
     return response.json();
 }).then((data)  => {

    FetchData(data)
 })
  
}


function FetchData(data){
    console.log(data);
     
    const ErrThrow = data.cod
    console.log(ErrThrow)
    const CName = data.name
    
    
    console.log(new Date(data.dt*1000-(data.timezone*1000))); 
    console.log(new Date(data.dt*1000+(data.timezone*1000)));

    if(ErrThrow == 404){
        //ErrTh.innerHTML = "No city/place Found"
        window.alert("city/location Not Found")
    }
    placeName.innerHTML = CName
    const tempOflocation = kToC(data.main.temp)
    const minTempOfLocation = kToC(data.main.temp_min)
    document.querySelector(".ImgForWeather").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    console.log(data.weather[0].icon)
       DisplayTemp.innerText = `${tempOflocation}°C`
       DisplayWeatherStatus.innerHTML = data.weather[0].description
       humCal.innerHTML = `${data.main.humidity}%`
       let convert = data.wind.speed
       const mph = +((2.23694 *convert ).toFixed(2));
       WindSpeed.innerHTML= `${mph} Mph`
       Pressure.innerHTML = `${data.main.pressure}Hpa`

}




getData("nepal")

function kToC(K){
    return (K - 273.15).toFixed(2);
}


btn.addEventListener("click", function(e) {
    e.preventDefault();
    
const city = input.value
if(input.value ){
    getData(city)
    
}
input.value = "";

})

I.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.key == "Enter"){
        getData(input.value)
        input.value = "";
    }

})



 



