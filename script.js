var txt = document.getElementById("txt");
var result = document.getElementById("result");
var reset = document.getElementById("reset");
var negate = document.getElementById("negate");

var stored = undefined;
var lastOp = undefined;

var one = document.getElementById("one");
one.onclick = function () {
    txt.value += "1";
    if (stored == undefined) {
        result.value = "";
    }
}

var two = document.getElementById("two");
two.onclick = function () {
    txt.value += "2";
    if (stored == undefined) {
        result.value = "";
    }
}

var three = document.getElementById("three");
three.onclick = function () {
    txt.value += "3";
    if (stored == undefined) {
        result.value = "";
    }
}

var four = document.getElementById("four");
four.onclick = function () {
    txt.value += "4";
    if (stored == undefined) {
        result.value = "";
    }
}

var five = document.getElementById("five");
five.onclick = function () {
    txt.value += "5";
    if (stored == undefined) {
        result.value = "";
    }
}

var six = document.getElementById("six");
six.onclick = function () {
    txt.value += "6";
    if (stored == undefined) {
        result.value = "";
    }
}

var seven = document.getElementById("seven");
seven.onclick = function () {
    txt.value += "7";
    if (stored == undefined) {
        result.value = "";
    }
}

var eight = document.getElementById("eight");
eight.onclick = function () {
    txt.value += "8";
    if (stored == undefined) {
        result.value = "";
    }
}

var nine = document.getElementById("nine");
nine.onclick = function () {
    txt.value += "9";
    if (stored == undefined) {
        result.value = "";
    }
}

var zero = document.getElementById("zero");
zero.onclick = function () {
    txt.value += "0";
    if (stored == undefined) {
        result.value = "";
    }
}

var apply = function(value) {
    if (value != undefined) {
        if (lastOp == "plus") {
            stored += value;
        }
        else if (lastOp == "minus") {
            stored -= value;
        }
        else if (lastOp == "multiply") {
            stored *= value;
        }
        else if (lastOp == "divide") {
            stored /= value;
        }
        result.value = stored.toString(); 
    }

};

var plus = document.getElementById("plus");
plus.onclick = function () {
    if (stored == undefined) {
        stored = Number(txt.value);
        result.value = stored.toString(); 
    } else {
        apply(Number(txt.value));
    }

    txt.value = "";
    lastOp = "plus";
}

var minus = document.getElementById("minus");
minus.onclick = function () {
    if (stored == undefined) {
        stored = Number(txt.value);
        result.value = stored.toString(); 
    } else {
        apply(Number(txt.value));
    }

    txt.value = "";
    lastOp = "minus";
}

var divide = document.getElementById("divide");
divide.onclick = function () {
    if (stored == undefined) {
        stored = Number(txt.value);
        result.value = stored.toString(); 
    } else {
        apply(Number(txt.value));
    }

    txt.value = "";
    lastOp = "divide";
}

var multiply = document.getElementById("multiply");
multiply.onclick = function () {
    if (stored == undefined) {
        stored = Number(txt.value);
        result.value = stored.toString(); 
    } else {
        apply(Number(txt.value));
    }

    txt.value = "";
    lastOp = "multiply";
}

var dot = document.getElementById("dot");
dot.onclick = function () {
    if (txt.value.indexOf('.') == -1) {
        txt.value += ".";
    }
}

var equals = document.getElementById("equals");
equals.onclick = function () {
    apply(Number(txt.value)); 
    txt.value = "";
    stored = undefined;
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
