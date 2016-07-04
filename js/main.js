$(document).ready(function() {

  var fahrenheit = 0;
  var celsius = 0;
  var tempFlag = false;
  
$.ajax({
    url: "http://ip-api.com/json", 
    type: 'GET',  
    dataType: 'json',
    success: function(data) {  
       $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&units=imperial&APPID=22e9fa4ba0cc27a35d5dfaa0cb7d40e7", 
    type: 'GET', 
    data: {}, 
    dataType: 'json',

    success: function(data) {  
    console.log(data); 

    //clear sky, few clouds, scattered clouds, broken clouds, 

    if (data.weather[0].description === "scattered clouds" || "broken clouds") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/cloudy-98496_960_720.png'/>");
    } else if (data.weather[0].description === "few clouds") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/sunny-98492__180.png'/>");    
    } else if (data.weather[0].description === "clear sky") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/sunny-98493__180.png'/>");
    } else if (data.weather[0].description === "shower rain" || "rain") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/cloudy-98506__180.png'/>");
    } else if (data.weather[0].description === "thunderstorm") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/lightning-98499__180.png'/>");
    } else if (data.weather[0].description === "snow") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/snowy-98502__180.png'/>");
      } else if (data.weather[0].description === "mist") {
      $(".icon").html("<img src= 'https://pixabay.com/static/uploads/photo/2013/04/01/09/21/fog-98505__180.png'/>")
    }

    $("#data").html(Math.floor(data.main.temp) + '<span class="degrees">&deg</span>');
    $(".celOrFah").html('Celsius');
    $("#conditions").html(data.weather[0].main);
    $("#location").html(" " + data.name + "...")
      console.log(data);
    fahrenheit = Math.floor(data.main.temp);
 
    },
    error: function(err) { alert(err); },

  }); //ajax call
                         
                            },
    error: function(err) { alert(err); },

  }); //ajax call
  
  

  $(".tempBtn").on("click", 
     function() {
    if (tempFlag === false) {
    celsius = Math.floor((fahrenheit - 32) * (5/9));
    $("#data").html(celsius + '<span class="degrees">&deg</span>'); 
    $(".celOrFah").html('Fahrenheit');
      tempFlag = true;
    } else {
      $("#data").html(fahrenheit + '<span class="degrees">&deg</span>');
      $(".celOrFah").html('Celsius');
      tempFlag = false;
    }
  }); //click

var appHeight, windowHeight, appTop;

function centerApp() {
  appHeight = $(".app").height();
  windowHeight = $(window).height();
  appTop = (windowHeight - appHeight)/2;
  $(".app").css({
    "top" : appTop

  }); //css

} //resize main image

$(window).resize(function () {
  centerApp();

  }); //resize

centerApp();
  
  
}); //document ready 
