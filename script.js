//1)Prompt alert()with example?//
alert("Assalamualikum")

var greetings=prompt("Enter your message")
alert(greetings)

//2Variable of Numbers//
var Num1=20;
var Num2=5;
var result=(Num1+Num2)
document.write(result)
document.write("<br>");

//3variables of String//
var fName="Waqas";
var lName="Alam";
var fullName=(fName+lName)
document.write(fullName)
document.write("<br>");


//4)Perform example of familiar operators?
//Familiar operator with addition
document.write(20+5)
document.write("<br>")

//Familiar operator with subtraction
document.write(20-5)
document.write("<br>")

//Familiar operator with multiplication
document.write(20*5)
document.write("<br>")

//Familiar operator with diviaion
document.write(20%5)
document.write("<br>")


//5)Perform example of unfimiliar operators?//

//Unfimiliar Operators without bodmas//
var num1=5;
var num2=6;
var num3=7;
var num4=8;
var res= (++num1 + num2++ + num1++ + num4++ + num3)
document.write(res)
document.write("<br>")
/*
solution
(++5 + 6++ +5++ + 8++ +7)
(6+6+6+8+7)
Ans=33
*/
//Unfimiliar Operator with bodmas//
var num1=5;
var num2=6;
var num3=7;
var num4=8;
var res= (++num1*num2++ + num1++ + num4++ % num3 + --num3)
document.write(res)
/*
solution
(++5*6++) +5++ + (8++  /7+ --7)
6*6+6+8/7+--7
(8/7+6*6+6+6)
Ans=49

*/
