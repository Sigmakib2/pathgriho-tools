function setfocus() {
	document.calcform.x.focus();
}
function calc() {
	x = document.calcform.x.value;
	y = convert(x);
 	y = roundresult(y);
 	document.calcform.y.value = y;
}
function calctest() {
	x = document.calcform.x.value;
	y = convert(x);
 	//y = roundresult(y);
 	y = roundresult1(y);
 	document.calcform.y.value = y;
}
function calc3() {
	x1 = document.calcform.x1.value;
	x2 = document.calcform.x2.value;
	y  = convert(x1,x2);
 	y  = roundresult(y);
 	document.calcform.y.value = y;
}
function calc4() {
	x1 = document.calcform.x1.value;
	x2 = document.calcform.x2.value;
	x3 = document.calcform.x3.value;
	y  = convert(x1,x2,x3);
 	y  = roundresult(y);
 	//yy = y.toString();
 	//if( yy.length>12 ) {
 	//	y = parseFloat(y);
 	//	y = y.toPrecision(10);
 	//}
 	document.calcform.y.value = y;
}
function calc5() {
	x = document.calcform.x.value;
	y  = convert1(x);
 	y  = roundresult(y);
 	document.calcform.y1.value = y;
	y  = convert2(x);
 	y  = roundresult(y);
 	document.calcform.y2.value = y;
}
/*
function calcbase(b1,b2) {
	x = document.calcform.x.value;
 	document.calcform.y.value = convertbase(x,b1,b2);
}
function calcbase2() {
	x = document.calcform.x.value;
	y = convert(x);
 	document.calcform.y.value = y;
}
*/

function roundresult(x) {
 	y = parseFloat(x);
 	y = roundnum(y,10);
 	return y;
}
function roundnum(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toPrecision(p+1);
	var y=String(m);
	i=y.indexOf('e');
	if( i==-1 )	i=y.length;
	j=y.indexOf('.');
	if( i>j && j!=-1 ) 
	{
		while(i>0)
		{
			if(y.charAt(--i)=='0')
				y = removeAt(y,i);
			else
				break;
		}
		if(y.charAt(i)=='.')
			y = removeAt(y,i);
	}
	return y;
}
function removeAt(s,i) {
	s = s.substring(0,i)+s.substring(i+1,s.length);
	return s;
}
function ConvertTon()
  {
    d = document.calcform.ton.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d,			6);
    document.calcform.kg.value	= roundnum(d*1e3,		6);
    document.calcform.gr.value	= roundnum(d*1e6,		6);
    document.calcform.mg.value	= roundnum(d*1e9,		6);
    document.calcform.mcg.value	= roundnum(d*1e12,		6);
    document.calcform.st.value	= roundnum(d*1e3/0.45359237/14,	6);
    document.calcform.lb.value	= roundnum(d*1e3/0.45359237,	6);
    document.calcform.oz.value	= roundnum(d*1e3/0.45359237*16,	6);
  }
  function ConvertKg()
  {
    d = document.calcform.kg.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*1e-3,		6);
    document.calcform.kg.value	= roundnum(d,			6);
    document.calcform.gr.value	= roundnum(d*1e3,		6);
    document.calcform.mg.value	= roundnum(d*1e6,		6);
    document.calcform.mcg.value	= roundnum(d*1e9,		6);
    document.calcform.st.value	= roundnum(d/0.45359237/14,	6);
    document.calcform.lb.value	= roundnum(d/0.45359237,	6);
    document.calcform.oz.value	= roundnum(d/0.45359237*16,	6);
  }
  function ConvertGr()
  {
    d = document.calcform.gr.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*1e-6,		6);
    document.calcform.kg.value	= roundnum(d*1e-3,		6);
    document.calcform.gr.value	= roundnum(d,			6);
    document.calcform.mg.value	= roundnum(d*1e3,		6);
    document.calcform.mcg.value	= roundnum(d*1e6,		6);
    document.calcform.st.value	= roundnum(d*1e-3/0.45359237/14,6);
    document.calcform.lb.value	= roundnum(d*1e-3/0.45359237,	6);
    document.calcform.oz.value	= roundnum(d*1e-3/0.45359237*16,6);
  }
  function ConvertMg()
  {
    d = document.calcform.mg.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*1e-9,		6);
    document.calcform.kg.value	= roundnum(d*1e-6,		6);
    document.calcform.gr.value	= roundnum(d*1e-3,		6);
    document.calcform.mg.value	= roundnum(d,			6);
    document.calcform.mcg.value	= roundnum(d*1e3,		6);
    document.calcform.st.value	= roundnum(d*1e-6/0.45359237/14,6);
    document.calcform.lb.value	= roundnum(d*1e-6/0.45359237,	6);
    document.calcform.oz.value	= roundnum(d*1e-6/0.45359237*16,6);
  }
  function ConvertMcg()
  {
    d = document.calcform.mcg.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*1e-12,		6);
    document.calcform.kg.value	= roundnum(d*1e-9,		6);
    document.calcform.gr.value	= roundnum(d*1e-6,		6);
    document.calcform.mg.value	= roundnum(d*1e-3,		6);
    document.calcform.mcg.value	= roundnum(d,			6);
    document.calcform.st.value	= roundnum(d*1e-9/0.45359237/14,6);
    document.calcform.lb.value	= roundnum(d*1e-9/0.45359237,	6);
    document.calcform.oz.value	= roundnum(d*1e-9/0.45359237*16,6);
  }
  function ConvertSt()
  {
    d = document.calcform.st.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*14*0.45359237*1e-3,6);
    document.calcform.kg.value	= roundnum(d*14*0.45359237,		6);
    document.calcform.gr.value	= roundnum(d*14*0.45359237*1e3,	6);
    document.calcform.mg.value	= roundnum(d*14*0.45359237*1e6,	6);
    document.calcform.mcg.value	= roundnum(d*14*0.45359237*1e9,	6);
    document.calcform.st.value	= roundnum(d,		6);
    document.calcform.lb.value	= roundnum(d*14,	6);
    document.calcform.oz.value	= roundnum(d*14*16,	6);
  }
  function ConvertLb()
  {
    d = document.calcform.lb.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d*0.45359237*1e-3,	6);
    document.calcform.kg.value	= roundnum(d*0.45359237,		6);
    document.calcform.gr.value	= roundnum(d*0.45359237*1e3,	6);
    document.calcform.mg.value	= roundnum(d*0.45359237*1e6,	6);
    document.calcform.mcg.value	= roundnum(d*0.45359237*1e9,	6);
    document.calcform.st.value	= roundnum(d/14,	6);
    document.calcform.lb.value	= roundnum(d,		6);
    document.calcform.oz.value	= roundnum(d*16,	6);
  }
  function ConvertOz()
  {
    d = document.calcform.oz.value;
    if( d=='' ) return;
    d = parseFloat(d);
    document.calcform.ton.value	= roundnum(d/16*0.45359237*1e-3,6);
    document.calcform.kg.value	= roundnum(d/16*0.45359237,		6);
    document.calcform.gr.value	= roundnum(d/16*0.45359237*1e3,	6);
    document.calcform.mg.value	= roundnum(d/16*0.45359237*1e6,	6);
    document.calcform.mcg.value	= roundnum(d/16*0.45359237*1e9,	6);
    document.calcform.st.value	= roundnum(d/16/14,	6);
    document.calcform.lb.value	= roundnum(d/16,	6);
    document.calcform.oz.value	= roundnum(d,		6);
  }
