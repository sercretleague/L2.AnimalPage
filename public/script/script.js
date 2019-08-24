function squaring(a) { 
    console.log(a * a);
}
squaring(13.4);
//END of squaring

function areaCalc(object) { 
    console.log(object.width*object.height);
}
let block = { 
    width: 250,
    height: 1250,
}
areaCalc(block);

//END of areaCalc math

function showMessage(name) {
    console.log("Hello, " + name + "!");
}

showMessage("Igor");
//End of showMessage