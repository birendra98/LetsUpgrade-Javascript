function even_odd(){
    var b="odd";
    var c="even";
    if (a%2==0){
         result=a
        console.log(`The number entered is ${result} and Number is ${c}`);
    }
    else{
         result=a
        console.log(`The number entered is ${result} and Number is ${b}`);
    }
    }
var a = prompt("Enter a number for operation even or odd");
console.log(even_odd());