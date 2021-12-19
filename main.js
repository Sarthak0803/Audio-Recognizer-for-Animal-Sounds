function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xZ0E1CAWu/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var Cat = 0;
var Dog = 0;
var Cow = 0;
var Tiger = 0;

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+Dog+ ' Detected Cat - '+Cat+ 'Detected Cow'+Cow+ 'Detected Tiger'+Tiger;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('Cat');

        if (results[0].label == "Meow") {
          img.src = 'Cat.jpeg';
          Cat = Cat+1
        } else if (results[0].label == "Bark") {
          img.src = 'Dog.jpeg';
          Dog = Dog+1
        } else if (results[0].label == "Mooing") {
          img.src = 'Cow.jpeg';
          Cow = Cow+1
        }else if (results[0].label == "A tiger's roar"){
          img3.src = 'Tiger.jpeg';
          Tiger = Tiger+1;
}   
}
}

