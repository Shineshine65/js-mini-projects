const statusText = document.getElementById("status");
const weatherBox = document.getElementById("weatherBox");

const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

// Pangasinan coordinates
const LAT = 15.97;
const LON = 120.33;

// Open-Meteo URL (no API key needed)
const URL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&hourly=relativehumidity_2m`;

async function loadWeather() {
    statusText.textContent = "Loading weather...";

    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error("Network error");
        }

        const data = await res.json();
        console.log(data); // for debugging in the console

        // Current temperature and wind
        const current = data.current_weather;
        const temperature = current.temperature; // °C
        const windspeed = current.windspeed;     // km/h

        // Humidity: take the first value from hourly relative humidity
        let humidityValue = "N/A";
        if (data.hourly && data.hourly.relativehumidity_2m && data.hourly.relativehumidity_2m.length > 0) {
            humidityValue = data.hourly.relativehumidity_2m[0] + "%";
        }

        tempEl.textContent = Math.round(temperature) + "°C";
        humidityEl.textContent = humidityValue;
        windEl.textContent = windspeed + " km/h";

        weatherBox.style.display = "block";
        statusText.textContent = "";

    } catch (error) {
        console.error(error);
        statusText.textContent = "Unable to fetch weather data.";
        weatherBox.style.display = "none";
    }
}

loadWeather();
