function calculateAC() {
    var radius = document.circle.radius.value;
    var piii = 3.1416;
    var unit = " Square Unit"
   
    var finalAC = piii*radius*radius;
    
    document.circle.acc.value = (finalAC.toFixed(2)+unit);

    }
function calculateACC() {
        var diameter = document.dia.diameter.value;
        var piii = 3.1416;
        var unit = " Square Unit"
        var ra = diameter/2;
        var finalACC = piii*ra*ra;
        
        document.dia.ac.value = (finalACC.toFixed(2)+unit);
    
     }
    
function calculateCR() {
        var dj = document.po.dj.value;
        var piii=3.1416;
        var unit = " Square Unit";
        var sq = dj*dj;
        var fp = 4*piii;
        var finalACCC = sq/fp;
        
        document.po.abc.value = (finalACCC.toFixed(2)+unit);
    
     }