//Details of what the user should enter//


var CC= prompt(parseInt ("Which year were you born?:"));
var YY= prompt(parseInt ("Enter the last 2 digits of the year you were born:"));
var MM=prompt(parseInt("Enter the month you were born:"));
var DD=prompt(parseInt("Enter the day of the month you were born:"));


//Formula to compute the day of birth//

Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month

 mod - is the modulus function ( % )
