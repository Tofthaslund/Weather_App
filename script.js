let weather = {
    // API key is from Openweathermap.org
    "apiKey": "e1e665850557c078c2708952d16655b5",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            //to determ whit city you pick in search bar
            + city
            + "&units=metric&appid="
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        // variables picked what to show in app
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // querySelector to decide where to show weather information 
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = Math.trunc(temp) + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = speed.toFixed(1) + " Km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

// Gave search button click funtion to fecth weather data
document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

// user can user the Enter key to search for a city
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// This will be the default city when user opens app
weather.fetchWeather("Hobro");



//Show case time of day on the app
window.onload = displayClock();
function displayClock(){
    var display = new Date().toLocaleTimeString();
    document.querySelector(".time").innerText = "Time of day: " + display;
    setTimeout(displayClock, 1000)
}
