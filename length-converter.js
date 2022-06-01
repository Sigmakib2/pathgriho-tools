// Length Converter script- By Bruce Zhang
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com
// Please keep this notice intact (A message from Toolkib)
var answer;
var factors1 = new Array(1, 0.01, 0.00001, 0.00000621, 0.3937, 0.0328, 0.01094);
var factors2 = new Array(100, 1, 0.001, 0.000621, 39.37, 3.28,  1.094);
var factors3 = new Array(100000, 1000, 1, 0.621, 39370, 3280, 1094);
var factors4 = new Array(160934, 1609.34, 1.60934, 1, 63360, 5280,1760);
var factors5 = new Array(2.54, 0.0254, 0.0000254, 0.0000158, 1, 0.08333, 0.02778);
var factors6 = new Array(30.48, 0.3048, 0.0003048, 0.0001896, 12, 1, 0.3333);
var factors7 = new Array(91.44, 0.9144, 0.0009144, 0.0005688, 36, 3, 1);
var factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6,factors7);
function convert_unit()
{
	from_index = document.length_converter.from_unit.selectedIndex;
	to_index = document.length_converter.to_unit.selectedIndex;
	factor = factors[from_index][to_index];
	document.getElementById("formula").innerHTML = "1 "+document.length_converter.from_unit.options[document.length_converter.from_unit.selectedIndex].text + " = " + factor + " " + document.length_converter.to_unit.options[document.length_converter.to_unit.selectedIndex].text;
	if(isNaN(document.length_converter.from_value.value))
		document.getElementById("to_value").innerHTML = "Please enter a valid number 🙂";
	else
	answer=factor * document.length_converter.from_value.value;
		document.getElementById("to_value").innerHTML = document.length_converter.from_value.value+"&nbsp;"+document.length_converter.from_unit.options[document.length_converter.from_unit.selectedIndex].text+" = "+answer+ "&nbsp;" +document.length_converter.to_unit.options[document.length_converter.to_unit.selectedIndex].text ;
}