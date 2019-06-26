var txt = document.getElementById("txt");
var result = document.getElementById("result");
var reset = document.getElementById("reset");
var negate = document.getElementById("negate");

var stored = undefined;
var lastOp = undefined;

for (let id = 0; id <= 9; id++){
    var num = document.getElementById(id.toString());
    num.onclick = function () {
        txt.value += id.toString();
        if (stored == undefined) {
                result.value = "";
        }
    }
}

var apply = function(value) {
    if (value != undefined) {
        if (lastOp == "plus") {
            stored = parseFloat(stored+value);
        }
        else if (lastOp == "minus") {
            stored = parseFloat(stored-value);
        }
        else if (lastOp == "multiply") {
            stored = parseFloat(stored*value);
        }
        else if (lastOp == "divide") {
            stored = parseFloat(stored/value);
        }
        result.value = stored.toString(); 
    }

};

var operations = ["plus", "minus", "multiply", "divide"];

operations.forEach(op => {
    var element = document.getElementById(op);
    element.onclick = function () {
        if (stored == undefined) {
            stored = Number(txt.value);
            result.value = stored.toString(); 
        } else {
            apply(Number(txt.value));
        }
        txt.value = "";
        lastOp = op;
    }
});

var decimal = document.getElementById("decimal");
decimal.onclick = function () {
    if (txt.value.indexOf('.') == -1) {
        txt.value += decimal.value;
    }
}

var equals = document.getElementById("equals");
equals.onclick = function () {
    apply(Number(txt.value)); 
    txt.value = "";
    // stored = undefined;
    lastOp = undefined;
}

reset.onclick = function () {
    txt.value = "";
    stored = undefined;
    lastOp = undefined;
    result.value = "";
}

negate.onclick = function () {
    txt.value = -Number(txt.value);
}
