const key = '';
if(key=='') {
  alert('Make sure to add your API Key from your account on openweathermap otherwise it will not work!');
}

function myFunction() {

  var zip = document.getElementById("zipcode").value;
  var country = document.getElementById("countrycode").value;

  if (zip=='' || country=='') {
    alert("Please enter all codes required!");
  }
  else{
    jQuery('#loader').prepend('<div id="preloader">Loading Weather Details...</div>');
    weatherData( zip, country );
  }
  
}

function weatherData( zipCode, countryCode) {

    fetch('https://samples.openweathermap.org/data/2.5/weather?zip=' + zipCode+','+countryCode+'&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        findWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}
function findWeather(d) {
 

  var description = d.weather[0].description; 
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = d.main.temp;
    document.getElementById('location').innerHTML = d.name;

    jQuery("#loader").remove();
  
}
