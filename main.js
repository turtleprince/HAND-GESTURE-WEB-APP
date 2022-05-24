Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
}); 

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    
    Webcam.snap(function(uri_img){
        document.getElementById("result").innerHTML = "<img id='umum' style = 'width: 350; height: 300;' src ='" + uri_img + "' >";
        
    });
    
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2g2VSdIaS/model.json",my_model_loaded);

function my_model_loaded(){
 console.log("Model is loaded");
}
