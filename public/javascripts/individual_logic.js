function subtract() {
    var number = Number(document.getElementById("quantity_number").innerHTML);
    var newnumber = number - 1;
    if (newnumber <= 0) {
        alert("Please select a valid quantity");
    } else {
        document.getElementById("quantity_number").innerHTML = newnumber;
    } 
}

function add() {
    var number = Number(document.getElementById("quantity_number").innerHTML);
    var newnumber = number + 1;
    if (newnumber >= 11) {
        alert("The quantity is too high!");
    } else {
        document.getElementById("quantity_number").innerHTML = newnumber;
    }
}

