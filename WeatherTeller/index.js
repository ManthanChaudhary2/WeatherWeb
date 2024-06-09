const apiKey = "e934146f6e6f5b158c5d244d97c18199";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Searchbox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(City) {
  const response = await fetch(apiurl + City + `&appid=${apiKey}`);
  var data = await response.json();

  
  document.querySelector(".City").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " Km/hr";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Imagepng/Cloud.jpeg";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Imagepng/Clear.jpeg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Imagepng/Rainy.jpeg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Imagepng/Rain.jpeg";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Imagepng/Mist.png";
    }
    document.querySelector(".weather").style.display = "block";
}
Searchbtn.addEventListener("click", () => {
  checkweather(Searchbox.value);
});
