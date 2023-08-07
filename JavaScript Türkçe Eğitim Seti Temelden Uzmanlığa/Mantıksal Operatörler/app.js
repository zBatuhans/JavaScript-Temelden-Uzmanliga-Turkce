//? Mantıksal Operatörler

/*
?    && : Ve Operatörü.
?    || : Veya Operatörü.
?    !  : Değil Operatörü.
*/

//? Ve (&&) Operatörünün kullanımına bir örnek:
//* let yas = 10;
//* let para = 1000;

//* if (yas > 5 && para > 100){
//*     console.log("Çalışıyor!");
//* }
//* else{
//*     console.log("Üzgünüm! Bunun için uygun değilsiniz.");
//* }
//? Bu betik, "yas" değişkeninin 5'ten büyük olup olmadığını ve "para" değişkeninin, 100'den büyük olup olmadığını kontrol eder. 
//? Eğer koşullar sağlanıyorsa, "console.log()" betiğini çalıştırır.
//? Eğer koşullar sağlanmıyorsa, "else" bloğuna geçer ve "console.log()" betiğini çalıştırır.

//? Veya (||) Operatörünün kullanımına bir örnek:
//* let yas = 4;
//* let para = 5001;

//*  if (yas > 5 || para > 5000){
//*     console.log("Çalışıyor!");
//* }
//* else{
//*     console.log("Üzgünüm! Bunun için uygun değilsiniz.");
//* }
//? Bu betik, "yas" değişkeninin, 5'ten büyük olup olmadığını ve "para" değişkeninin, 5000'den büyük olup olmadığını kontrol eder.
//? Eğer "yas" değişkeni veya "para" değişkeninden biri, gerekli koşulları sağlıyorsa, 'console.log("Çalışıyor!")'  betiğini çalıştırır.
//? Eğer "yas" değişkeni veya "para" değişkeninden biri, gerekli koşulları sağlamıyorsa, 
//? else bloğuna geçer ve 'console.log("Üzgünüm! Bunun için uygun değilsiniz.")' betiğini çalıştırır

//? Değil (!) Operatörünün kullanımına bir örnek:
//*console.log(!(5>3));
//? 5>3 ifadesi doğrudur ve konsola "True" boolean ifadesini yansıtır, ancak.
//? Değil (!) operatörü ifadenin zıttını alır. "True" boolean değerinin zıttı ise "False" boolean değeridir.
//? Yani bu betik, konsola   


//? Şimdi mantıksızda olsa tüm mantıksal operatörleri bir arada kullandığımız bir ehliyet sınavı betiği yazalım:
//* let para = 5000;
//* let saglikliMi = true;
//* hakSayisi = 3;
//* let yas = 20;
//* console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi));


