var searchCity = "London"

//        searchCity = ("#imput-id").val()

$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=405c285f0daf35f752cf4ac81e876d43 "
}).then(function (response) {
    console.log(response);
})