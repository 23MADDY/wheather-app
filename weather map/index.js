const NewApi ='ebdeb6e2f96448af00886a1f95c65b5f'
const url =  (location) => `https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=${NewApi}`

async function getWeeatherByLoc(location) {
const resp = await fetch(url(location), {origin: "cors"});
const respData = await resp.json();

console.log(respData);
}

getWeeatherByLoc("London")