//Akan name function
function akanName(){
  var cc=parseInt(document.getElementById("cc").value);
  var yy=parseInt(document.getElementById("yy").value);
  var mm=parseInt(document.getElementById("mm").value);
  var dd=parseInt(document.getElementById("dd").value);

  if (dd>31){
      message="wrong input";
    }
  if (mm >12) {
    message = "wrong input";
  }
  if (dd<1){
    message="wrong input";
  }
  if (mm <1) {
  message = "wrong input";
  }

var dayBorn=Math.round((((cc/4) -2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7);
console.log (dayBorn)
var days=["Sun","Mon","Tue", "Wed", "Thur", "Fri", "Sat"];
var dayOfWeek=days[dayBorn-1];
console.log (dayOfWeek)
var male=document.getElementById("ml").value;
var female=document.getElementById("fm").value;
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
if (male){
var name=maleNames[dayBorn-1];
}
if (female){
var name=femaleNames[dayBorn-1];
}
console.log (name)
};
