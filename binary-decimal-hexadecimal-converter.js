var from,
    to,
    input,
    submit,
    cnvtres,
    i,
    cnvtresult = null,
    cnvtToDes = null,
    inputbreak = null,
    yresult = null,
    cnvtAry = null,
    outputInt = null;
(from = document.getElementById("from")),
    (to = document.getElementById("to")),
    (input = document.getElementById("inputnumber")),
    (submit = document.getElementById("inputsubmit")),
    (cnvtres = document.getElementById("convert")),
    submit.addEventListener("click", function () {
        function t() {
            return input.value.split(".")[0].split("");
        }
        function e(t) {
            switch (t) {
                case "A":
                    return 10;
                case "B":
                    return 11;
                case "C":
                    return 12;
                case "D":
                    return 13;
                case "E":
                    return 14;
                case "F":
                    return 15;
                default:
                    return t;
            }
        }
        function n(t) {
            switch (t) {
                case 10:
                    return "A";
                case 11:
                    return "B";
                case 12:
                    return "C";
                case 13:
                    return "D";
                case 14:
                    return "E";
                case 15:
                    return "F";
                default:
                    return t;
            }
        }
        if ("" !== input.value) {
            switch (from.value) {
                case "Binary":
                    for (cnvtAry = t(input.value).reverse(), i = 0; i < cnvtAry.length; i++) (cnvtToDes += cnvtAry[i] * Math.pow(2, i)), (cnvtAry[i] > 1 || /A|B|C|D|E|F/.test(input.value.toUpperCase())) && (inputbreak = !0);
                    break;
                case "Octal":
                    for (cnvtAry = t(input.value).reverse(), i = 0; i < cnvtAry.length; i++) (cnvtToDes += cnvtAry[i] * Math.pow(8, i)), (cnvtAry[i] > 7 || /A|B|C|D|E|F/.test(input.value.toUpperCase())) && (inputbreak = !0);
                    break;
                case "Decimal":
                    (cnvtToDes = Math.trunc(input.value)), /A|B|C|D|E|F/.test(input.value.toUpperCase()) && (inputbreak = !0);
                    break;
                case "Hexadecimal":
                    for (input.value = input.value.toUpperCase(), cnvtAry = t(input.value).reverse(), i = 0; i < cnvtAry.length; i++)
                        (cnvtAry[i] = e(cnvtAry[i])), (cnvtToDes += cnvtAry[i] * Math.pow(16, i)), cnvtAry[i] > 15 && (inputbreak = !0);
            }
            switch (to.value) {
                case "Binary":
                    if (((outputInt = []), 0 !== cnvtToDes)) {
                        for (; cnvtToDes > 1; ) outputInt.push(cnvtToDes % 2), (cnvtToDes = Math.trunc(cnvtToDes / 2));
                        1 == cnvtToDes && outputInt.push(1), (cnvtresult = outputInt.reverse());
                    } else cnvtresult = input.value;
                    break;
                case "Octal":
                    for (outputInt = []; cnvtToDes > 7; ) outputInt.push(cnvtToDes % 8), (cnvtToDes = Math.trunc(cnvtToDes / 8));
                    cnvtToDes < 8 && outputInt.push(cnvtToDes), (cnvtresult = outputInt.reverse());
                    break;
                case "Decimal":
                    (outputInt = []).push(cnvtToDes), (cnvtresult = outputInt);
                    break;
                case "Hexadecimal":
                    for (outputInt = []; cnvtToDes > 15; ) outputInt.push(n(cnvtToDes % 16)), (cnvtToDes = Math.trunc(cnvtToDes / 16));
                    cnvtToDes < 16 && outputInt.push(n(cnvtToDes % 16)), (cnvtresult = outputInt.reverse());
            }
        } else cnvtresult = input.value;
        null !== cnvtresult && null === inputbreak && (input.value > 0 || /A|B|C|D|E|F/.test(input.value.toUpperCase()))
            ? ((yresult = from.value+" number "+input.value+" in "+to.value+" is"+" = &nbsp;"),
              cnvtresult.forEach(function (t) {
                  yresult += t;
                //   from.value+"number"+input.value+"in"+to.value+"is"+"= &nbsp;" 
                
              }))
            : (yresult = "Please select and enter right number"),
            (cnvtres.innerHTML = yresult),
            (cnvtresult = null),
            (cnvtToDes = null),
            (inputbreak = null),
            (yresult = null),
            (cnvtAry = null),
            (outputInt = null);
    });