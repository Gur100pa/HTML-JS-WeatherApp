const apiKey = "c35227838b0e36fde75b6aa73313cbf3";

const getData = () => {
    let txtField = document.getElementById("txtField").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + txtField + '&appid=' + apiKey)
        .then(response => response.json())
        .then(data => {
            const code = data["cod"];
            if(code >= 200 && code <= 299) {
                document.getElementById("invalidCity").innerHTML="";
                document.getElementById("textCity").innerHTML="City";
                document.getElementById("textTemp").innerHTML="Temperature";
                document.getElementById("textInfo").innerHTML="Info";
                document.getElementById("city").innerHTML=txtField;
                document.getElementById("temp").innerHTML=data["main"]["temp"];
                document.getElementById("info").innerHTML=data["weather"]["0"]["main"];
            } else {
                document.getElementById("invalidCity").innerHTML="City " + txtField + " not found";
                document.getElementById("textCity").innerHTML="";
                document.getElementById("textTemp").innerHTML="";
                document.getElementById("textInfo").innerHTML="";
                document.getElementById("city").innerHTML="";
                document.getElementById("temp").innerHTML="";
                document.getElementById("info").innerHTML="";
            }
        })

};