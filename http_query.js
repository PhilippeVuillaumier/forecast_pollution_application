const req = new XMLHttpRequest();
var n02;
var o3;
var pm10;
var pm25;
var so2;

function ifExist(obj){
    if(!obj.data.iaqi.no2){no2 = "N / C"}else{ no2 = obj.data.iaqi.no2.v;}
    if(!obj.data.iaqi.o3){o3 = "N / C"}else{ o3 = obj.data.iaqi.o3.v;}
    if(!obj.data.iaqi.pm10){pm10 = "N / C"}else{ pm10 = obj.data.iaqi.pm10.v;}
    if(!obj.data.iaqi.pm25){pm25 = "N / C"}else{ pm25 = obj.data.iaqi.pm25.v;}
    if(!obj.data.iaqi.so2){so2 = "N / C"}else{ so2 = obj.data.iaqi.so2.v;}
}

req.onreadystatechange = function (event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {

            obj = JSON.parse(this.responseText);
            
            city = obj.data.city.name;
            aqi = obj.data.aqi;
         
         
            ifExist(obj);
           

            document.getElementById("city").innerHTML = "Votre pollution à " + city;
            document.getElementById("aqi").innerHTML = "Air quality index : " + aqi;
            document.getElementById("no2").innerHTML = "Dioxyde d'azote : " + no2;
            document.getElementById("o3").innerHTML = "Ozone : " + o3;
            document.getElementById("pm10").innerHTML = "Particules pm10 : " + pm10;
            document.getElementById("pm25").innerHTML = "Particules pm2.5 : " + pm25;
            document.getElementById("so2").innerHTML = "Dioxyde de soufre : " + so2;

            console.log("Réponse reçue: %s", obj);
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};
// alert(req.open('GET', 'http://api.waqi.info/feed/shanghai/?token=demo', true));
req.open('GET', 'https://api.waqi.info/feed/geo:45.75;4.85/?token=1a842a4d1c059b7015ebdf80ecb9446c64e711ff', true);
req.send(null);