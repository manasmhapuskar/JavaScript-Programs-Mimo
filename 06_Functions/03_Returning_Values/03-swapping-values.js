/*
Problem:
Let's use return values to help fix some mixed up arrays.
*/


function swappedValues(array) {
    var first = array[0];
    var second = array[1];

    var swapped = [second, first];
    return swapped;
}

var user = ["Doe", "John"];
console.log(swappedValues(user));