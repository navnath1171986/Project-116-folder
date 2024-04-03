function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4i5OFRv37/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
