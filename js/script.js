//Details of what the user should enter//
var CC=parseInt( prompt("Which year were you born?:"));
var YY=parseInt( prompt("Enter the last 2 digits of the year you were born:"));
var MM=parseInt( prompt("Enter the month you were born:"));
var DD=parseInt( prompt("Enter the day of the month you were born:"));




var dow=function(cc, yy, mm, dd){
return (((cc/4) -2*cc-1)  + ((5*yy/4))  +((26*(mm+1)/10)) +dd) % 7;
};


//Formula to compute the day of birth//
