# Final Project: Web App Collection

## Project Type
Solo project

## Description
This repository contains four solo web application projects: Calculator, Quotable, Stopwatch, and Weather App. Each project demonstrates core front-end development skills using HTML, CSS, and JavaScript. All apps feature a clean, minimal, and responsive user interface.

---

## Project Overview
This collection showcases a variety of web applications built for learning and demonstration purposes. Each app is self-contained and can be run independently. The projects are:
- **Calculator:** Perform basic arithmetic operations.
- **Quotable:** Display random inspirational quotes from a public API.
- **Stopwatch:** Track elapsed time with start, stop, and reset functionality.
- **Weather App:** Search for any city and view current weather and a 5-day forecast using the OpenWeather API.

---

## Main Features
- Calculator: Addition, subtraction, multiplication, division, clear/reset, error handling
- Quotable: Fetch/display random quotes, new quote button, API error handling
- Stopwatch: Start, stop, reset timer, display hours/minutes/seconds/milliseconds
- Weather App: Search by city, display temperature/description/country, 5-day forecast, error handling

---

## APIs Used
### Weather App
- **API Name:** OpenWeather API
  - **Base URL:** `https://api.openweathermap.org/data/2.5/`
  - **Endpoints:**
    - `/weather` (current weather)
    - `/forecast` (5-day forecast)
  - **Parameters:**
    - `q` (city name)
    - `appid` (API key)
    - `units` (metric/imperial)
  - **Authentication:** API key required (passed as `appid` parameter)

### Quotable App
- **API Name:** Quotable API
  - **Base URL:** `https://api.quotable.io/`
  - **Endpoints:**
    - `/random` (get a random quote)
  - **Parameters:** None required
  - **Authentication:** None

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

### 2. Run a Project Locally
1. Open the desired project folder (e.g., `calculator`, `quotable`, `stopwatch`, or `weather-api`).
2. Open `index.html` in your web browser.
3. For the Weather App, enter your OpenWeather API key in the JavaScript file as instructed.

---

## Credits / API Attribution
- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Quotes provided by [Quotable](https://api.quotable.io/)

---

