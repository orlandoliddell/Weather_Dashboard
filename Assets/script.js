function getWeather(cityName) {
    console.log(cityName)
    event.preventDefault()
    var searchCity = $(".location").val()

    if(!cityName.type){
        searchCity = cityName
    }
    
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=405c285f0daf35f752cf4ac81e876d43 "
    }).then(function (response) {
//        var newDiv = $("<div class='h2'>" + response.name + "</div>" );
        $("#weatherInfo").empty()
        var newDiv = $("<div>").text(response.name);
        var date = $("<div>").text(response.dt_txt)
        newDiv.addClass("h2")
        $("#weatherInfo").append(newDiv);
        $("#weatherInfo").append(date)

        
        
        
        
        
        
        
        
        console.log(response);
        console.log(response.name);
        console.log(response.weather[0].description)
    })
    fiveDay(cityName)
}

function fiveDay(cityName) {
    event.preventDefault()
    var searchCity = $(".location").val()
    if(!cityName.type){
        searchCity =cityName
    }
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=405c285f0daf35f752cf4ac81e876d43"
    }).then(function (response) {
//        var newDiv = $("<div class='h2'>" + response.name + "</div>" );
       /// var newDiv = $("<div>").text(response.name) 
       // newDiv.addClass("h2")
       // $("#weatherInfo").append(newDiv);
        
        $("#day1").text("Temp: " + Math.floor(response.list[8].main.temp - 223));
  //      $("#day1").text("Humidity: " + response.list[8].main.humidity)

        $("#day2").text("Temp: " + Math.floor(response.list[16].main.temp - 223))

        $("#day3").text("Temp: " + Math.floor(response.list[24].main.temp - 223))

        $("#day4").text("Temp: " + Math.floor(response.list[32].main.temp - 223))

        $("#day5").text("Temp: " + Math.floor(response.list[39].main.temp - 223))


        
        
        
        
        
        
        console.log(response);
  //      console.log(response.name);
    //    console.log(response.weather[0].description)
    })
}


$(".searchBtn").on("click", getWeather)
$(".recent").on("click", "li", function(){
    var cityName = $(this).attr("data-cityname")
    getWeather(cityName)
})