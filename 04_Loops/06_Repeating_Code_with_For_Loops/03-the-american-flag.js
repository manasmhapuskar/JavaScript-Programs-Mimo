/*
Problem:
A junior developer wrote a program to display The American Flag,
but it didn't come out as planned.


Task:
Let's fix the code to display the missing stripes 
and make the while loop more readable.

JS Code ->
var i = 0;

while (i < 3) {
    i++;
    console.log("***********----------------");
}

for () {
    console.log("---------------------------");
}
*/


for (var i = 0; i < 3; i++) {
    console.log("***********----------------");
}

for (i = 0; i < 3; i++) {
    console.log("---------------------------");
}