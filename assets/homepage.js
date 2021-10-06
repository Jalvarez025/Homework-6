var infoSecEl = document.querySelector('#infoSec');
var userFormEl = document.querySelector('#user-form');
var inputCityEl = document.querySelector('#inputCity');
//var citySearchTerm = document.querySelector('#city-search-term');





var formSubmitHandler = function (event) {
    event.preventDefault();

    var searchCity = inputCityEl.value.trim();

    if(searchCity){
        getWeather(searchCity);

        infoSecEl.textContent = '';
        inputCityEl.value = '';
    }else{
        alert('Please enter a real city')
    }
};

var getWeather = function(city){
    var city;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=26c2d162e38264cb3d458c7bf8a913ec";
    
    fetch(queryURL)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    displayWeather(data, city);
                });
            }else{
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error){
            alert('Unable to connect to openweather')
        });

    // var fetchUrl = ;

    // fetch(fetchUrl)
    //     .then(function(r){
    //         if(r.ok){
    //            r.json().then(function(info){
    //             console.log(info);
    //             addUvIndex(info);
    //             //displayWeather(info, city);
    //             }); 
    //         }else{
    //             alert('Error: ' + response.statusText);
    //         }
    //     })
    //     .catch(function(error){
    //         alert('Unable to connect')
    //     });

}

var displayWeather = function (data, city){
    if(data.length == 0){
        infoSecEl.textContent = "No city found.";
        return;
    }

    console.log(data.name);

    var momentEl = moment().format("(MM/DD/YYYY)");  
    console.log(momentEl);

    
    // var iconEl = document.createElement('img');
    // iconEl.setAttribute('src', data.weather.icon)
    // console.log(iconEl)

    var titleEl = document.createElement('strong');
    titleEl.textContent = data.name + " " + momentEl; //+ " " + iconEl;

    infoSecEl.appendChild(titleEl);

    var tempEl = document.createElement('div');
    var convertTemp = (data.main.temp - 273.15)*9/5 + 32;
    var roundTemp = Math.round(convertTemp * 100)/100
    tempEl.textContent = "Temp: " + roundTemp + " *F";

    infoSecEl.appendChild(tempEl);

    var windEl = document.createElement('div');
    var convertWind = data.wind.speed*2.237;
    var roundWind = Math.round(convertWind * 100)/100
    windEl.textContent = "Wind: " + roundWind + " MPH";

    infoSecEl.appendChild(windEl);

    var humidityEl = document.createElement('div');
    var humidity = data.main.humidity;
    humidityEl.textContent = "Humidity: " + humidity + " %";

    infoSecEl.appendChild(humidityEl);

    //addUvIndex()

    //infoSecEl.appendChild(uvIndexEl);



    //infoSecEl.appendChild()

    //citySearchTerm.textContent = searchTerm;

    //for(var i = 0; i <)


}

// var addUvIndex = function(info){
//     var uvIndexEl = document.createElement('div');
//     console.log(info);
//     var uviEl = info.current.uvi;
//     uvIndexEl.textContent = "UV index: " + uviEl;
//     return uvIndexEl;

// }


userFormEl.addEventListener('submit', formSubmitHandler);