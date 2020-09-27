//This page contains various examples from Java Script
var a = [45, 55, 85, 12, 33];   //creates stores array to variable a
console.log(a);                  //Prints out variable
for (let i = 0; i < a.length; i++) {                //For loop implementation
    console.log(a[i])
    
}


//Function
function average(a, b){
    return (a+b)/2;
}

c1 = average(4,6);
c2 = average(14,16);

console.log(c1,c2);

//Conditionals in JavaScripta
age= 28;
if (age>18){
    console.log('You can Drive\n apply for a licence ')
}

//JS Date and time
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

//Javascript DOM