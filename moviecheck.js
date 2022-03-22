function checkmovie(){
    var request = new XMLHttpRequest()
    // var city = document.getElementById("city").value;
    var url = `https://imdb-api.com/API/AdvancedSearch/k_p0m12sqg?genres=sci_fi&companies=fox,columbia,warner`
    request.open('GET', url)
    request.onload=function(){
        var result = JSON.parse(this.response)
        console.log(result.results)
        for(var ele of  result.results){
            console.log(ele)
        }
        // console.log(result.results)
    }
    request.send()
}