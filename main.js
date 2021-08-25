function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JoDJz4729/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}
    
    function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    }
