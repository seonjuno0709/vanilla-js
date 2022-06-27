const API_KEY = "47e57327980d61d7e3128f9b2fc40a02";

function anGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const nameContainer = document.querySelector("#weather span:first-child");
      const weatherContainer = document.querySelector("#weather span:last-child");
      nameContainer.innerHTML = data.name;
      weatherContainer.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function anGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(anGeoOk, anGeoError);
