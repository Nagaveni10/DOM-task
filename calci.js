function dis(val) {
    document.getElementById("screen").value += val
}

function solve() {
    const validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '%']

    let x = document.getElementById("screen").value;
    //if (x === validkeys) {
    let y = eval(x);
    document.getElementById("screen").value = y;
    //} else {
    //    alert('Only Numbers are allowed');
    //    }
}

function clr() {
    document.getElementById("screen").value = " ";
}

//$(.eval).keydown(solve());
//document.getElementsByClassName("eval").click();