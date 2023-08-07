//var degiskenIsmi = 10
//console.log(degiskenIsmi)



//? Global Scope: Her yerden erişebilirsin.
//? Herhangi bir süslü parantez içinde bulunmamalı.

//? Function Scope: Sadece değişkenin atandığı function içerisinden erişebilirsin
//? Süslü parantezin içinde olmalı.

//? Block Scope: if, while ya da for'da yani function dışında ki bir süslü parantezde tanımlanır. Ve sadece tanımlandığı yerde erişilebilir.
//? Function harici bir süslü parantezin içerisinde bulunmalı.
//? Bir Block Scope, if else veya else if fonksiyonları içinde tanımlandıysa, bu bütün if, else veya else if fonksiyonlarında çalışır. 
//? Yani sadece tanımlandığı yerde kalmaz.


//? Function Scope
//! function method1(){
//!     var sayi = 10;
//! }
//! console.log(sayi);

//! method1();

//! Bu kod hatalıdır. konsola "sayi" değişkenini yazamaz, sadece method1 functionu içinden erişilebilir.

//*Doğrusu bu şekilde olmalıdır.

//* function method1(){
//*    var sayi = 10;
//* console.log(sayi);
//* }

//* method1();


//? Block Scope
//! function method1(){
//!     console.log(a)
//!     if(true){
//!         var a = 10;
//!     }
//!     while(true){

//!     }
//!     for(let i = 0 ; i <=10; i++){

//!     }
//! } 
//!Bu kod yanlıştır çünkü, "a" değişkeni sadece tanımlandığı döngünün içerisinde kullanılabilir. Bu bir Block Scope'tur.


//? Doğrusu bu şekilde olmalıdır.

//* function method1(){
//*     if(true){
//*         var a = 10;
//*         console.log(a)
//*     }
//*     while(true){

//*     }
//*     for(let i = 0 ; i <=10; i++){

//*     }
//* } 


 
//  function deneme(){
//     var b = 11;
//     if(true){
//         console.log(b);
//      }
//  }
// deneme()