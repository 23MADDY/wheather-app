//const NewApi ='ebdeb6e2f96448af00886a1f95c65b5f'
//const url =  (location) => `https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=${NewApi}`

//async function getWeeatherByLoc(location) {
//const resp = await fetch(url(location), {origin: "cors"});
//const respData = await resp.json();

//console.log(respData);
//}

//getWeeatherByLoc("Nepal")
const btn = document.querySelector(".btn")
const input = document.querySelector("#input")
const temp = document.querySelector(".temp");
function getData(city){
    NewApi ='ebdeb6e2f96448af00886a1f95c65b5f'

 url =  `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${NewApi}`

 fetch(url).then((response) => {
     return response.json();
 }).then((data)  => {
     console.log(data);
     const tempOflocation = kToC(data.main.temp)
     const minTempOfLocation = kToC(data.main.temp_min)
     console.log(minTempOfLocation)
        console.log(tempOflocation);
        temp.innerText = `${tempOflocation} .C`

 })
  
}

getData("nepal")

function kToC(K){
    return (K - 273.15).toFixed(2);
}


btn.addEventListener("click", function(e) {
    e.preventDefault();
const city = input.value
if(city){
    getData(city)
    
}
input.value = "";
})



