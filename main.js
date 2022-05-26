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

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }

my_classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vGdRZAw4R/model.json",my_model_loaded);

function my_model_loaded(){
 console.log("Model is loaded");
}

function check_snapshot(){
    img = document.getElementById("umum");
   my_classifier.classify(img, show_results);
}


function show_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);    
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;

        document.getElementById("result_emotion_hand1").innerHTML = prediction_1;
        document.getElementById("result_emotion_hand2").innerHTML = prediction_2;

        if(prediction_1 == "hand"){
            document.getElementById("update_hand1").innerHTML = "&#9995";
            
        }

        if(prediction_1 == "fist"){
            document.getElementById("update_hand1").innerHTML = "&#9994";
            
        }

        if(prediction_1 == "handthing"){
            document.getElementById("update_hand1").innerHTML = "&#128076";
            
        }

        if(prediction_1 == "peace"){
            document.getElementById("update_hand1").innerHTML = "9996";
            
        }

        if(prediction_1 == "clap"){
            document.getElementById("update_hand1").innerHTML = "&#128079";
            
        }

        if(prediction_1 == "rock and roll"){
            document.getElementById("update_hand1").innerHTML = "&#129304";
            
        }

        
        if(prediction_2 == "hand"){
            document.getElementById("update_hand2").innerHTML = "&#9995";
            
        }

        if(prediction_2 == "fist"){
            document.getElementById("update_hand2").innerHTML = "&#9994";
            
        }

        if(prediction_2 == "handthing"){
            document.getElementById("update_hand2").innerHTML = "&#128076";
            
        }

        if(prediction_2 == "peace"){
            document.getElementById("update_hand2").innerHTML = "9996";
            
        }

        if(prediction_2 == "clap"){
            document.getElementById("update_hand2").innerHTML = "&#128079";
            
        }

        if(prediction_2 == "rock and roll"){
            document.getElementById("update_hand2").innerHTML = "&#129304";
            
        }


        speak();
        
        
    }
    
}