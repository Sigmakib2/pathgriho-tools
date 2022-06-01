function calculateBmi() {
    var weight = document.bmif.weight.value
    var height = document.bmif.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height*height)
    
    document.bmif.bmi.value = finalBmi.toFixed(3);

    if(finalBmi < 18.5){
    document.bmif.meaning.value = "BMI indicates that you are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmif.meaning.value = "BMI indicates that you are healthy enough."
    }
    if(finalBmi > 25 &&  finalBmi <30){
    document.bmif.meaning.value = "BMI indicates that you have overweight."
    }
    if(finalBmi > 30){
        document.bmif.meaning.value = "Your condition is dangerous."
        }
    }
    else{
    alert("Please enter data correctly")
    }

    }
    function calculateFI() {
        var feet = document.hei.feet.value;
        var inch = document.hei.inch.value;
        var feetToM = feet/3.2808;
        var inchToM = inch/39.379;
        var finalFI = feetToM + inchToM;
        
        document.hei.hhh.value = finalFI.toFixed(3);
    }