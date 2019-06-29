let output = document.getElementById('result');
let result = document.getElementById('display');
let clear = document.getElementById("clear");
let negate = document.getElementById("negate");

let stored = undefined;
let lastOp = undefined;

for (let id = 0; id <= 9; id++) {
    let num = document.getElementById(id.toString());
    num.onclick = function () {
        if (id == 0 && output.value == '') {
            num.disabled = true;
        }
        output.value += id.toString();
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
    if (output.value.indexOf(decimal.value) == -1) {
        output.value += decimal.value;
        let zero = document.getElementById('0');
        zero.disabled = false;
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
    result.value = "";
}

negate.onclick = function () {
    output.value = -Number(output.value);
}