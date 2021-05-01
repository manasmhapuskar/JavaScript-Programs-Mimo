function checkFileSize(fileSize) {
    var maxSize = 16;
    console.log("Upload Permitted?");
    console.log(fileSize <= maxSize);
}

var movieSizeGB = 15;
checkFileSize(movieSizeGB);