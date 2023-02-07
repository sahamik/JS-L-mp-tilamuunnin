
const asteikkoValitsin = document.getElementById("asteikkoValitsin");
const lampotilaInput = document.getElementById("lampotilaInput");
const btnMuunna = document.getElementById("btnMuunna");
const tulos = document.getElementById("vastaus");
const lampotila = document.getElementById("lampotila");
const checkBox1 =document.getElementById("checkBox1");
const checkBox2 =document.getElementById("checkBox2");
const checkBox3 =document.getElementById("checkBox3");

btnMuunna.addEventListener("click", muunna);

function muunna(event) {
    event.preventDefault();
    let asteikko = asteikkoValitsin.value;
    let lampotila = lampotilaInput.value;
    let vastaus;

    if (lampotila === "") {
        vastaus = "Lämpötilaa ei ole annettu. Anna lämpötila!";
        tulos.innerText = vastaus;
        return;
    } 
    else if (isNaN(lampotila)) {
        vastaus = "Anna lämpötila numeroina!";
        tulos.innerText = vastaus;
        return;
    }

    if (asteikko === "celcius-fahrenheit") {
        vastaus = lampotila * 1.8 + 32;
        if (lampotila < -273.15) {
            vastaus = "Lämpötila on pienempi, kuin absoluuttinen nollapiste.";
            tulos.innerText = vastaus;
            return;
        }
        if (checkBox1.checked == false) {
            tulos.innerText = vastaus.toFixed(0);
        }
        if (checkBox1.checked) {
            tulos.innerText = vastaus.toFixed(1);
        }
        if (checkBox2.checked) {
            tulos.innerText = vastaus.toFixed(2);
        }
        if (checkBox3.checked) {
            tulos.innerText = vastaus.toFixed(3);
        }
        
        
    } else {
        vastaus = (lampotila - 32) / 1.8;
        if (lampotila < -273.15) {
            vastaus = "Lämpötila on pienempi, kuin absoluuttinen nollapiste.";
            tulos.innerText = vastaus;
            return;
        }
        if (checkBox1.checked == false) {
            tulos.innerText = vastaus.toFixed(0);
        }
        if (checkBox1.checked) {
            tulos.innerText = vastaus.toFixed(1);
        }
        if (checkBox2.checked) {
            tulos.innerText = vastaus.toFixed(2);
        }
        if (checkBox3.checked) {
            tulos.innerText = vastaus.toFixed(3);
        }
        if (vastaus < -273.15) {
            vastaus = "Lämpötila on pienempi, kuin absoluuttinen nollapiste.";
            tulos.innerText = vastaus;
            return;
        }
    }
}