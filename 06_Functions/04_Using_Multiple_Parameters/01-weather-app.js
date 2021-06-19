/*
Problem:
Let's use our new knowledge on functions with multiple parameters
to write code for a weather app.

By using a function, we'll take advantage of multiple parameters 
to display a summary of the temperatures for today.


Task:
We'll use a parameter called 'high' to display the highest
temperature and a parameter called 'low' to display the lowest.
*/


function showWeather(low, high) {
    console.log("Display Weather: ");
    console.log("High: " + high);
    console.log("Low: " + low);
}

showWeather(-1, 10);