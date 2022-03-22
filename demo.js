function checkwheather(){
    var request = new XMLHttpRequest()
    var city = document.getElementById("city").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5a3b109ff6b90a313001ac8b75456f8&units=metric`
    request.open('GET', url)
    request.onload=function(){
        var result = JSON.parse(this.response)
        var kall = result.main.temp
        document.getElementById("tempature").value=kall
        console.log(result)
    }
    request.send()
}