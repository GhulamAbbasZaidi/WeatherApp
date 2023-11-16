const input = document.querySelector(".inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherImage = document.querySelector(".whetherImages");
const temperature = document.querySelector(".temperature");
const Detail = document.querySelector(".detail");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("Wind");
const weatherBody = document.getElementsByClassName("whether");

async function checkWeather(city) {
  const apiKey = "145eceffa285f5ee9972ce3be8eec5cd";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(`${url}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching weather data:", error));

  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  Detail.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  wind.innerHTML = `${weatherData.wind.speed}Km/h`;

  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherImage.src = "cloudy.png";
      break;
    case "Smoke":
      weatherImage.src = "mist.jpg";
      break;
    case "Rain":
      weatherImage.src = "raining.jpg";
      break;
    case "Clear":
      weatherImage.src = "sun.jpg";
      break;
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(input.value);
  console.log("button Clicked");
});
