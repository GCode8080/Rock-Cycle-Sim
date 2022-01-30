//---------------------variables-------------------------
let heat = 0;
let pressure = 0;
let rockType = "Stone";
let time = 0;

//---------------------Stuff-------------------------
document.getElementById("heatOutput").value = "0 °C";
document.getElementById("pressureOutput").value = "0 MPa";
document.getElementById("rockOutput").value = " ";
document.getElementById("timeOutput").value = "0 Years";

//---------------------Functions-------------------------

function makeRock() {


    if (heat >= 1000) {
        rockType = "Lava";
        
    } else if (heat >= 200 && pressure >= 300 && heat <= 900) {
        rockType = "Metamorphic Rock"

    } else if (heat >= 200 && heat <= 900 && document.getElementById("rockOutput").value == "Lava") {
        rockType = "Igneous Rock"

    } else if (time >= 200) {
        rockType = "Sedimentary Rock"

    }

    


    document.getElementById("rockOutput").value = rockType;
}


function addHeat() {
    heat = heat + 100;
    document.getElementById("heatOutput").value = heat + " °C";
    makeRock();
}

function subtractHeat() {
    heat = heat - 100;
    document.getElementById("heatOutput").value = heat + " °C";
    makeRock();
}

function addPressure() {
    pressure = pressure + 100;
    document.getElementById("pressureOutput").value = pressure + " MPa";
    makeRock();
}

function subtractPressure() {
    pressure = pressure - 100;
    document.getElementById("pressureOutput").value = pressure + " MPa";
    makeRock();
}

function addTime() {
    time = time + 100;
    document.getElementById("timeOutput").value = time + " Years";
    makeRock();
}

function subtractTime() {
    time = time - 100;
    document.getElementById("timeOutput").value = time + " Years";
    makeRock();
}