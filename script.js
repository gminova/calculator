let txt = document.getElementById('result');
let result = document.getElementById('display');
let clear = document.getElementById("clear");
let negate = document.getElementById("negate");
let decimal = document.getElementById("decimal");

let stored = undefined;
let lastOp = undefined;

for (let id = 0; id <= 9; id++) {
    let num = document.getElementById(id.toString());
    num.onclick = function () {
        txt.value += id.toString();
        if (stored == undefined) {
                result.value = "";
        }
    }
}

let apply = function (value) {
    if (value != undefined) {
        if (lastOp == "add") {
            stored = parseFloat(stored + value);
        } else if (lastOp == "subtract") {
            stored = parseFloat(stored - value);
        } else if (lastOp == "multiply") {
            stored = parseFloat(stored * value);
        } else if (lastOp == "divide") {
            stored = parseFloat(stored / value);
        }
        result.value = stored.toString();
    }

};

let operations = ["add", "subtract", "multiply", "divide"];

operations.forEach(op => {
    let element = document.getElementById(op);
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

decimal.onclick = function () {
    if (txt.value.indexOf('.') == -1) {
        txt.value += ".";
    }
}

let equals = document.getElementById("equals");
equals.onclick = function () {
    apply(Number(txt.value));
    txt.value = "";
    lastOp = undefined;
}

clear.onclick = function () {
    txt.value = "";
    stored = undefined;
    lastOp = undefined;
    result.value = "0";
}

negate.onclick = function () {
    txt.value = -Number(txt.value);
}