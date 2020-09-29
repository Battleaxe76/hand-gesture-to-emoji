Webcam.set({
width:350,
height:350,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera")


function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/e9y9UoKbd/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if (error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById('result_emotion_name').innerHTML=results[0].label;
    document.getElementById('result_emotion_name2').innerHTML=results[1].label;
    if (results[0].label=="this looks amazing"){
document.getElementById("update_emoji").innerHTML="&#128076;";
    }
    if (results[0].label=="all the best"){
        document.getElementById("update_emoji").innerHTML=" &#128077;";
            }
    if (results[0].label=="that was a marvelous victory"){
    document.getElementById("update_emoji").innerHTML="&#9996;";
         } 


         if (results[1].label=="this looks amazing"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
                }
                if (results[1].label=="all the best"){
                    document.getElementById("update_emoji2").innerHTML=" &#128077;";
                        }
                if (results[1].label=="that was marvelous victory"){
                document.getElementById("update_emoji2").innerHTML="&#9996;";
                     }        
        

}
}

