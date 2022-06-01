function calculateFI() {
    var feet = document.hei.feet.value;
    var inch = document.hei.inch.value;
    var feetToM = feet/3.2808;
    var inchToM = inch/39.379;
    var finalFI = feetToM + inchToM;
    
    document.hei.hhh.value = (finalFI.toFixed(3))+" m";
}
function calculateFII() {
    var feet = document.mcm.feet.value;
    var finalFI= feet*100;


    
    document.mcm.hhhh.value = (finalFI.toFixed(2))+" cm";
}