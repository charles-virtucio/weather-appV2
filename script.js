function getWeather() {
    var locationInput = document.getElementById("location-input").value;
  
    // Replace YOUR_API_KEY with your actual API key
    var apiKey = "1fc26524af2fe08118e01c3f3fe52f16";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Extract the desired weather information from the API response
        var temperature = data.main.temp;
        var weatherDescription = data.weather[0].description;
        var humidity = data.main.humidity;
        var wind = data.wind.speed;
  
        // Update the weather container with the retrieved information
        var weatherContainer = document.getElementById("weather-container");
        weatherContainer.innerHTML = ` <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" /><p id="temperature">${temperature}°C</p><p id="descrirption">${weatherDescription}</p><p>${humidity}% Humidity</p><p> Wind speed ${wind} km/h</p`;
      })
      .catch(error => {
        console.log(error);
      });
  }
