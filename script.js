let weather = {
    "apiKey": "e1e665850557c078c2708952d16655b5",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
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

document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Hobro");