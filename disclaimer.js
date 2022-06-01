function sayHi(){
    var webName = document.getElementById("webName");
    var webURL = document.getElementById("webURL");
    var webMail = document.getElementById("webMail");
    
    var txtOutput = document.getElementById("txtOutput");
    var txtOutput2 = document.getElementById("txtOutput2");
    var txtOutput3 = document.getElementById("txtOutput3");
    var txtOutput4 = document.getElementById("txtOutput4");
    var txtOutput5 = document.getElementById("txtOutput5");
    var txtOutput6 = document.getElementById("txtOutput6");
    var txtOutput7 = document.getElementById("txtOutput7");
    var txtOutput8 = document.getElementById("txtOutput8");
    var txtOutput9 = document.getElementById("txtOutput9");
    var txtOutput10 = document.getElementById("txtOutput10");
    var txtOutput11 = document.getElementById("txtOutput11");
    var txtOutput12 = document.getElementById("txtOutput12");
    var txtOutput13 = document.getElementById("txtOutput13");
    var txtOutput14 = document.getElementById("txtOutput14");
    var name = webName.value;
    var link = webURL.value;
    var mail = webMail.value;



    document.getElementById("output1").innerHTML =name+"'s Disclaimer made by ToolKib" ;
    document.getElementById("output2").innerHTML =name+" requests you to review the site's Disclaimer. All access to and use of this website is governed by these specific terms and conditions. Continuing to this website indicates that you have reviewed the site’s Disclaimer and you have agreed to be bound by them";
    document.getElementById("output3").innerHTML = "For further queries or if you need any more information about "+ name +", you are requested to contact us by visiting our Contact Us page. You can also mail us at:"+ mail;
    document.getElementById("output4").innerHTML = "Accuracy of Information We Provide";
    document.getElementById("output5").innerHTML = name+" have every right to change any of the information provided to this site without giving notice to users."
    document.getElementById("output6").innerHTML = "Though " +link+" tries to ensure the validity of provided information, it doesn't mean the site warranties about the completeness, reliability or accuracy of all the information."
    document.getElementById("output7").innerHTML = name+" doesn't warrant the accuracy of the information. Thus, any action you take based on the information you fine on this site, is totally at your risk. We will not be liable for any damages or losses"
    document.getElementById("output8").innerHTML = "Hypertext Links"
    document.getElementById("output9").innerHTML = name+ " ("+link+") may have many hyperlinks to such external sites. We add external links to serve you the best. And also, we always tries to give hyperlinks to authorized sites. But still, we have no control over the content we have linked and the nature or other contents of these sites. We are not responsible for any of the contents of those sites. You should also be very much aware when you click to these links to other website that they may have different disclaimer, different privacy policy and others. Please read their terms and condition as well before you continue to these sites."
    document.getElementById("output10").innerHTML = "Ads"
    document.getElementById("output11").innerHTML = "We show ads by Google AdSense, a web advertising service of Google Inc, US. Google AdSense use cookies that are stored on your computer browser and allows an analysis of the use of the site by you. We have no control over Google. We do not analyze any of your data."
    document.getElementById("output12").innerHTML = "Content Submission"
    document.getElementById("output13").innerHTML = "We do not want your personal information, and even we don’t want to submit us any of your personal text, ideas, concepts, stories, videos, audios, artwork, photographs or any other personal property. Do not give any of your password to this site. We will not be responsible for the misuse of those."
    document.getElementById("output14").innerHTML = "Note by ToolKib: If your site doesn't shows ads you should remove the part uner subheading of. If your site shows ads from other Advertising service you should mention that on that paragraph"
}
