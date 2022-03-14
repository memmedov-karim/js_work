let a = prompt("Xahis olunur qiymeti daxil edin");
let change = a.split(".");
console.log(change[0],"manat",change[1],"qəpik");
let labor = Number(prompt("Xahis olunur emek haqqini daxil edin"));
let clean = labor - (labor*13)/100;
console.log(clean)
let fullname = prompt("Zehmet olmasa soyad,ad ve ata adinizi daxil edin");
let fullname_sep = fullname.split(" ");
let surname = fullname_sep[0];
let name_letter = fullname_sep[1][0];
let father = fullname_sep[2][0];
console.log(surname,name_letter+"."+father+".")
let mebleg=Number(prompt('meblegi daxil edin'));
let aysayi=Number(prompt('ayi daxil edin'));
let faiz=Number(prompt('faizi daxil edin'));
let menfeet=mebleg*aysayi*faiz/100;
window.alert(aysayi + ' aydan sonra emanetden qazanciniz ' + menfeet + ' olacaq');
var value=10;
console.log(value>5);
console.log(value == "10");
var value= 20;
console.log(value<10);
console.log(value === "20");
console.log(value == 11);
let age = Number(prompt("Zehmet olmasa yasinizi daxil edin"));
if (age<18){
    console.log("Access denied");
}
else{
    console.log("Access granted");
}
let nums = prompt("Zehmet olmasa ededleri daxil edin");
let list = nums.split(" ");
list.sort()
if (list[0]==list[1] || list[0]==list[2]){
    console.warn("Xeta");
}
else{
    console.log(Number(list[1]));
}
let il = Number(prompt("Zehmet olmasa ili daxil edin"));
if (il %4 == 0){
    if (il%100 == 0 && il%400!=0){
        console.log("Bu il uzun ildir");
    }
}
else{
    console.log("Bu il qisa ildir");
}