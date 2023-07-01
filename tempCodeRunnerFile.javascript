console.log("Hello World");
var a = 5 ;
var b  = 10 ; 
var c = "I am " ;
a = a +10;
b = b + 20; 
//compound assignment with augmented addition and same with subtraction, multiplication and division
c += "mohamed";
console.log(a); 
console.log(b);     
console.log(c);
var difference = 45 - 56;
console.log(difference);
// increment a number           
var myVar = 87; 
myVar++;
console.log(myVar); 
//remainder 
var remainder;  
remainder = 11 % 3;
console.log(remainder);
//douple quotes inside a string 
var myName = "mohamed \"not mo\" ";
console.log(myName);
//and also single quotes is a solution  
var myNameHe = 'mohamed "not mo" ';   
console.log(myNameHe);
//concatenating strings with plus and equal operator    
var ourStr = "I come first."   
ourStr += "I come second. ";    
console.log(ourStr);
//constructing strings with variables
var ourName = "mohamed";
var ourStr = "my name is "+ourName+",go fuk ur self";   
console.log(ourStr);
//appending variables to strings
var easyStr = " mohamed";    
var hard = "mya name is";
hard += easyStr;    
console.log(hard);
//finding the length of a string    
var ochihai = "mohamed";
var length = ochihai.length;
console.log(length);
//bracket notation to find the first character in a string      

 firstLetter = ochihai[0];
console.log(firstLetter);
//bracket notation to find the last character in a string
var lastLetter = ochihai[ochihai.length - 1];
console.log(lastLetter);
    //word blanks   
    function sts(a,b,c,d){
        var result = "";
        result += "the "+b+" "+a+" "+c+" us "+d;
        return result;          
    }   
    console.log(sts("college","black","make","criminal"));
    console.log(sts("monkey","stupied","look at","clearly"))

