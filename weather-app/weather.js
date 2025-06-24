const apiKey = '05f5579f91a0a4f0a32c6d7c54e5cfe3'; // Replace with your actual key

function getWeather() {
  const city = document.getElementById('city').value.trim();
  const resultDiv = document.getElementById('weather-result');
  resultDiv.innerHTML = ""; // Clear previous results

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found!");
      }
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    });
}
