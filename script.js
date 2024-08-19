const apiKey = "06a56f7c26e740f373b8013edd569b88";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let search =  document.querySelector(".search-btn");
let searchBar =  document.querySelector(".search-city");
let weatherBlock = document.querySelector(".weather-details");
let weatherImg = document.querySelector(".weather-img-container img");
let temperature = document.querySelector(".temperature")
let city = document.querySelector(".city")
let errorBlock = document.querySelector(".error")
let humidity = document.querySelector(".humidity-details p")
let wind = document.querySelector(".wind-details p")



async function checkWeatherStatus(cityname){

    let response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);
    errorBlock.style.display = "none"

    if(cityname == ""){
        alert("Please enter a city name first...");
        return
    }
    else if(response.status == 404){
        errorBlock.style.display = "block"
        weatherBlock.style.display = "none"
        return
    }
    
    weatherBlock.style.display = "flex";

    let data = await response.json()

    // console.log(data)

    city.innerHTML = data.name
    temperature.innerHTML = Math.round(data.main.temp) + "°C"
    humidity.innerHTML = Math.round(data.main.humidity) + "%"
    wind.innerHTML = data.wind.speed + "Km/h"

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
    }
    if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
    }
    if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png";
    }
}




search.addEventListener("click", ()=>{
    // console.log(searchBar.value)
    checkWeatherStatus(searchBar.value);
})

