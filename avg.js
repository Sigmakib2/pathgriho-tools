function calculateBmi() {
    var runs = document.bmif.runs.value
    var outs = document.bmif.outs.value
    if(runs > 0 && outs > 0){	
    var finalAvg = runs/outs
    
    document.bmif.bmi.value = finalAvg.toFixed(2);
    }
} 