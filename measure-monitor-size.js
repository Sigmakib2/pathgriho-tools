function do_things() {
    var A;
    var B;
    var I;
    var X;
    var Y;
    var T;
    var height;
    var length;
    var height_fixed;
    var length_fixed;
    var message1 = "The Height Of Your Monitor Is:";
    var message2 = "The Length Of Your Monitor Is:"
    var H = parseFloat(document.getElementById("h").value);
    var L = parseFloat(document.getElementById("l").value);
    var Is = parseFloat(document.getElementById("is").value);
    var akok = document.getElementById("matric").value;
    var Output1 = document.getElementById("output1");
    var Output2 = document.getElementById("output2");
    A = Math.pow(L, 2);
    B = Math.pow(H, 2);
    T = (A + B);
    I = (Is * Is);
    Y = (I / T);
    X = Math.sqrt(Y);
    height = (H * X);
    length = (L * X)
    height_fixed = height.toFixed(2);
    length_fixed = length.toFixed(2);
    Output1.textContent = message1 + " " + height_fixed +" "+akok;
    Output2.textContent = message2 + " " + length_fixed +" "+akok;
}