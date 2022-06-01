function calculateFI() {
    var feet = document.hei.feet.value;
    var inch = document.hei.inch.value;

    var finalFI = (feet*100)/inch;
    
    document.hei.hhh.value = finalFI.toFixed(3);
}