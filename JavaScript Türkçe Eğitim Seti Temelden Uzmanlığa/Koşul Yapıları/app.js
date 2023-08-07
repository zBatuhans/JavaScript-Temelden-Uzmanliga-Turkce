//? Koşul Yapıları
 
//? Koşul yapılarının kullanımına bir örnek

//? Ehliyet alma yeterliliği örneği:

//* let yas = Number(prompt("Yaşınızı giriniz: ")); //Number fonksiyonu, inputtan yani girdiden gelen değeri integere yani tam sayıya çevirir.
//* let butce = prompt("Bütçenizi giriniz: ");

//* if(yas >= 18 && butce >= 3000){
//*     document.write("Tebrikler, Ehliyet almak için gerekli koşulları sağlıyorsunuz!");
//* }
//* if(yas < 18 || butce < 3000){
//*     document.write("Üzgünüm ehliyet almak için gerekli koşulları sağlamıyorsunuz.");
//* }

//? Not ortalaması örneği:
let vize1 = Number(prompt("Vize 1 notunuzu giriniz: "));
let vize2 = Number(prompt("Vize2 notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

if(vize1 || vize2 || final > 100){
    document.write("Herhangi bir notunuz, 100'ün üzerinde olamaz!");
}
else{
    let ortalama = (vize1*0.4) + (vize2*0.4) + (final*0.6)
};

if(ortalama>=60){
    document.write("Tebrikler, başarıyla geçtiniz! Ortalamanız: "+ ortalama );
}
else{
    document.write("Üzgünüm, kaldınız. Ortalamanız: "+ ortalama);
};

console.log(ortalama)
//? Bu betik, önce vize1, vize2 ve final adında 3 prompt değişkeni oluşturur. 
//? Bu değişkenlerin değerini kullanıcı, prompt fonksiyonu sayesinde kendi belirler.
//? Değişkenleri oluşturduktan sonra, vize1, vize2 veya final'in 100'den büyük olup olmadığını kontrol eder.
//? Eğer hiçbir sınav notu 100'den büyük değilse vize1 ve vize2'nin %40'ını final'in ise %60'ını alır.
//? Daha sonra, ortalamanın 60'ın üzerinde olup olmadığını kontrol eder.
//? Eğer ortalama 60'ın üzerinde ise else fonksiyonunu çalıştırmaz.
//? Eğer ortalama 60'ın altında ise if fonksiyonunu atlayarak else fonksiyonunu çalıştırır.