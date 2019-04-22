//plus
//minus
//multiply
//division
//result
//clear
var txt = document.getElementById("txt");

var stored = undefined;
var lastOp = undefined;

var one = document.getElementById("one");
one.onclick = function () {
    txt.value += "1";
}

var two = document.getElementById("two");
two.onclick = function () {
    txt.value += "2";
}

var three = document.getElementById("three");
three.onclick = function () {
    txt.value += "3";
}

var four = document.getElementById("four");
four.onclick = function () {
    txt.value += "4";
}

var five = document.getElementById("five");
five.onclick = function () {
    txt.value += "5";
}

var six = document.getElementById("six");
six.onclick = function () {
    txt.value += "6";
}

var seven = document.getElementById("seven");
seven.onclick = function () {
    txt.value += "7";
}

var eight = document.getElementById("eight");
eight.onclick = function () {
    txt.value += "8";
}

var nine = document.getElementById("nine");
nine.onclick = function () {
    txt.value += "9";
}

var zero = document.getElementById("zero");
zero.onclick = function () {
    txt.value += "0";
}

var apply = function(v) {
    if (v != undefined) {
        if (lastOp == "plus") {
            stored += v;
        }
    }

};

var plus = document.getElementById("plus");
plus.onclick = function () {
    if (stored == undefined) {
        stored = Number(txt.value);
    } else {
        apply(Number(txt.value));
    }

    txt.value = "";
    lastOp = "plus";
}

var minus = document.getElementById("minus");
minus.onclick = function () {
}

var division = document.getElementById("divide");
division.onclick = function () {
}

var multiply = document.getElementById("multiply");
multiply.onclick = function () {
}

var dot = document.getElementById("dot");
dot.onclick = function () {
    if (txt.value.indexOf('.') == -1) {
        txt.value += ".";
    }
}

var equals = document.getElementById("equals");
equals.onclick = function () {
    apply();
    txt.value = stored.toString();  
}

