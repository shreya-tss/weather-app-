async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'bd54923a8b492f8e145bd77b60b56448';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherResults = document.getElementById("weatherResults");

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        weatherResults.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div>Temperature: ${data.main.temp}°C</div>
            <div>Weather: ${data.weather[0].main}</div>
            <div>Description: ${data.weather[0].description}</div>
            <img src="${iconUrl}" alt="Weather Icon">
        `;
    } catch (error) {
        console.log('Error fetching weather data:', error);
        const weatherResults = document.getElementById("weatherResults");
        weatherResults.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
    }
}
