# Weather App

## Project Type
Solo project

## Description
A simple weather application that allows users to search for any city and view the current weather conditions and a 5-day forecast. The app uses the OpenWeather API to fetch real-time weather data and displays it in a clean, minimal user interface.

---

## Project Overview
This project demonstrates how to build a weather dashboard using HTML, CSS, and JavaScript. Users can enter a city name to get instant weather updates, including temperature, weather description, and location details. The app is designed for clarity and ease of use, making it ideal for both learning and demonstration purposes.

---

## Main Features
- Search for current weather by city name
- Display temperature, weather description, and country
- Minimal, responsive UI
- Error handling for invalid city names or API issues
- Powered by OpenWeather API

---

## APIs Used
### OpenWeather API
- **Base URL:** `https://api.openweathermap.org/data/2.5/`
- **Endpoints:**
  - `/weather` (current weather)
  - `/forecast` (5-day forecast)
- **Parameters:**
  - `q` (city name)
  - `appid` (API key)
  - `units` (metric/imperial)
- **Authentication:** API key required (passed as `appid` parameter)

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

---

## Getting Started

### 1. Clone or Download the Repository
```sh
git clone <repository-url>
```
Or download the ZIP and extract it.

### 2. Run the Project Locally
1. Open the `final-project-elec3/weather-api` folder.
2. Open `index.html` in your web browser.
3. Enter a city name and click "Search" to view the weather.

---

## Credits / API Attribution
- Weather data provided by [OpenWeather](https://openweathermap.org/)

---

## Notes
- You need a free API key from OpenWeather to use this app. Sign up at [https://openweathermap.org/appid](https://openweathermap.org/appid) and replace the placeholder in your JavaScript code.
