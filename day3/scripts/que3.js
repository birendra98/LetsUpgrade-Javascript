var a=prompt("Enter yours marks");
let marks = (a>=50)? `Marks are ${a} and grade is B`:
            (a>=35)? `Marks are ${a} and grade is C`:
            'You are fail try next time';
console.log(marks);
switch (true){
    case a>=50:
        console.log(`Marks are ${a} and grade is B `);
        break;
    case a>=35:
        console.log(`Marks are ${a} and grade is C`);
        break;
    default:
        console.log("You are fail try next time");
}