let weather = {
    "apiKey": "e1e665850557c078c2708952d16655b5",
    fetchWeather: function(){
        fetch(
            "api.openweathermap.org/data/2.5/weather?q=Denver&appid=e1e665850557c078c2708952d16655b5"
            )
    }
}