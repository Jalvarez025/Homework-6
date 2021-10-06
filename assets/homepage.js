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

}

var displayWeather = function (data, city){
    if(data.length == 0){
        infoSecEl.textContent = "No city found.";
        return;
    }

    console.log(data.name);

    var momentEl = moment().format("(MM/DD/YYYY)");  
    console.log(momentEl);

    var titleEl = document.createElement('strong');
    titleEl.textContent = data.name + " " + momentEl;

    infoSecEl.appendChild(titleEl);



    //infoSecEl.appendChild()

    //citySearchTerm.textContent = searchTerm;

    //for(var i = 0; i <)


}


userFormEl.addEventListener('submit', formSubmitHandler);