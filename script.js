//---------------------variables-------------------------
let heat = 0;
let pressure = 0;
let baseRock;
let rockType;

//---------------------Stuff-------------------------
document.getElementById("heatOutput").value = " ";
document.getElementById("pressureOutput").value = " ";
document.getElementById("rockOutput").value = " ";

//---------------------Functions-------------------------

function makeRock() {
    if (heat >= 1000) {
        rockType = "Lava";
        
    } else if (heat >= 200 && pressure >= 300 && heat <= 900) {
        rockType = "Metamorphic Rock"

    } else {
        rockType = "Stone";
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