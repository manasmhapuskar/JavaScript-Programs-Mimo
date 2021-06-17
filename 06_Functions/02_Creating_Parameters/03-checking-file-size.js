/*
Problem:
WAP that uses a function to check 
if a file's size is within the upload limits.
*/


function checkFileSize(fileSize) {
    var maxSize = 16;
    console.log("Upload Permitted?");
    console.log(fileSize <= maxSize);
}

var movieSizeGB = 15;
checkFileSize(movieSizeGB);