console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array(); 
backgroundImage[0] = "images/image1.png";
backgroundImage[1] = "images/image2.png";
backgroundImage[2] = "images/image3.png";
backgroundImage[3] = "images/image4.jpg";
backgroundImage[4] = "images/image5.jpg";

function displayAllImages() {
    for (i=1;i<backgroundImage.length;i++) {
        document.write("<div class='imglist'><img src=" + backgroundImage[i] + "></div>");
    };
};