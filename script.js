let output = document.getElementById('result');
let result = document.getElementById('display');
let clear = document.getElementById("clear");
let negate = document.getElementById("negate");
let zero = document.getElementById("0");

let stored = undefined;
let lastOp = undefined;

function lockDigitsOneToNine() {
    for (let id = 1; id <= 9; id++) {
        let num = document.getElementById(id.toString());
        num.disabled = true;
    }
}

function unlockDigitsOneToNine() {
    for (let id = 1; id <= 9; id++) {
        let num = document.getElementById(id.toString());
        num.disabled = false;
    }
}

for (let id = 0; id <= 9; id++) {
    let num = document.getElementById(id.toString());
    num.onclick = function () {
        decimal.disabled = false;
        if (id == 0 && output.value == '') {
            num.disabled = true;
            lockDigitsOneToNine();
        }
        output.value += id.toString();
        if (stored == undefined) {
            result.value = "0";
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
            stored = Number(output.value);
            result.value = stored.toString();
        } else {
            apply(Number(output.value));
        }
        output.value = "";
        lastOp = op;
    }
});

let decimal = document.getElementById("decimal");
decimal.onclick = function () {
        unlockDigitsOneToNine();
        zero.disabled = false;
    if (output.value == '') {
        output.value += '0.';
    }
    if (output.value == '0') {
        output.value += '.';
    }
}

let equals = document.getElementById("equals");
equals.onclick = function () {
    apply(Number(output.value));
    output.value = "";
    // stored = undefined;
    lastOp = undefined;
}

clear.onclick = function () {
    output.value = "";
    stored = undefined;
    lastOp = undefined;
    result.value = "0";
    let zero = document.getElementById('0');
    zero.disabled = false;
    decimal.disabled = false;
}

negate.onclick = function () {
    output.value = -Number(output.value);
}