a=20

console.log("Hii i am student")
console.log(a)

    var car1 = { name : "Audi", model : "A4" }
    var car2 = { name : "Volvo", model : "XC90" }
    var car3 = { name : "Ford", model : "Fusion" }

    console.table([car1, car2, car3]);

{
    console.time();
for (i = 0; i < 100000; i++) {
}
console.timeEnd();
}
console.warn("This is a warning!");