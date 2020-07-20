//Akan name function
function day(){
  var cc=document.getElementById("year"))
  var yy=document.getElementById("year-2"))
  var mm=document.getElementById("month"))
  var dd=document.getElementById("date"))
}
var akanName=function(cc, yy, mm, dd){
return (((cc/4) -2*cc-1)  + ((5*yy/4))  +((26*(mm+1)/10)) +dd) % 7;
};
alert(var AkanName)
