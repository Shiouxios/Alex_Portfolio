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
        document.write("<div class='col-xs-4'><img src=" + backgroundImage[i] + "></div>");
    };
};

function getFiles() {
    $.ajax(baseUrl).success(function(data) {
        pictures = [];
        $(data).find("a[href]").each(function() {
            var href = $(this).attr('href');
            if (href.indexOf('.jpg') > 0 || href.indexOf('.png') > 0 || href.indexOf('.jpeg') > 0) {
                pictures.push(href);
            }
        });
        console.log(pictures.length + " pictures loaded!");
        changePicture(0);
    });
};
