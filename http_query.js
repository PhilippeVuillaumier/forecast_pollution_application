const req = new XMLHttpRequest();

function getNo2(obj) {
    if (obj.data.iaqi.no2) {
        return obj.data.iaqi.no2.v;
    }
    return "n.c";
}

function getO3(obj) {
    if (obj.data.iaqi.o3) {
        return obj.data.iaqi.o3.v;
    }
    return "n.c";
}

function getPm10(obj) {
    if (obj.data.iaqi.pm10) {
        return obj.data.iaqi.pm10.v;
    }
    return "n.c";
}

function getPm25(obj) {
    if (obj.data.iaqi.pm25) {
        return obj.data.iaqi.pm25.v;
    }
    return "n.c";
}

function getSo2(obj) {
    if (obj.data.iaqi.so2) {
        return obj.data.iaqi.so2.v;
    }
    return "n.c";
}

req.onreadystatechange = function (event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {

            obj = JSON.parse(this.responseText);
            city = obj.data.city.name;
            aqi = obj.data.aqi;

            document.getElementById("city").innerHTML = "Votre pollution à " + city;
            document.getElementById("aqi").innerHTML = "Air quality index : " + aqi;
            document.getElementById("no2").innerHTML = "Dioxyde d'azote : " + getNo2(obj);
            document.getElementById("o3").innerHTML = "Ozone : " + getO3(obj);
            document.getElementById("pm10").innerHTML = "Particules pm10 : " + getPm10(obj);
            document.getElementById("pm25").innerHTML = "Particules pm2.5 : " + getPm25(obj);
            document.getElementById("so2").innerHTML = "Dioxyde de soufre : " + getSo2(obj);

            window.console.log("Réponse reçue: %s", obj);
        } else {
            window.console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};
// alert(req.open("GET", "http://api.waqi.info/feed/shanghai/?token=demo", true));
req.open("GET", "https://api.waqi.info/feed/geo:45.75;4.85/?token=1a842a4d1c059b7015ebdf80ecb9446c64e711ff", true);
req.send(null);