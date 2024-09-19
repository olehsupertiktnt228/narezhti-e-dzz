const KEY = "44698139a4c481d17cb6dbc1fc43ae58";
$("#search").click(() => {
    const city = $("#city").val();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            $('#flag').html(`<img src="https://flagsapi.com/${data.sys.country}/flat/64.png"></img>`);
            $(".weatherResult").css("display", "flex");
            $('.inputContainer').css("width", "50%");
            console.log(data);
            $("#posCity").text(data.name);
            $("#temperature").text((data.main.temp - 273).toFixed(2));
            $("#winddeg").css("display", "flex");
            $("#winddeg").css("transform", `rotate(${data.wind.deg}deg)`);
            if (parseInt((data.main.temp - 273).toFixed(2)) < 10) {
              $(".wrap").css("background", "blue");
            } else if (parseInt((data.main.temp - 273).toFixed(2)) > 10) {
                $(".wrap").css("background", "red");
            }
        })
})


