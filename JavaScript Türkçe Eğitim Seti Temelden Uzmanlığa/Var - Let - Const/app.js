//? Var - Let - Const

//? Var: Var ile tanımlanan her şey 'Function Scope' olur. Birden fazla aynı isimde değişken oluşturulABİLİR.
//? Let/Const: Let ve Const 'Block Scope' özeliğine sahiptir. Birden fazla aynı isimde değişken oluşturulAMAZ.


//? Let ve Const arasında ki fark.

//? Const (Constant) : Sabit ve değişmez. Kelime anlamıda aynı şekildedir.

//! Bu hatalı bir koddur Const değişkenleri değiştirilemezdir.
//! const a = 10;
//! a = 15;
//! console.log(a)

//* Let değişkenlerinde ise bu durum mümkündür.
//* let a = 10;
//* a = 15;
//* console.log(a)


//? User değeri değiştirilemez ancak içindeki username ve password değerli değiştirilebilir.
//Örnek:
//! const user = {
//!     username : "test",
//!     password : "test"
//! }

//! const user = {age : 15}
//! Bu işlem mümkün değildir.


//* Bu işlem mümkündür.
//*   const user = {
//*      username : "test1",
//*      password : "test1"
//*  }

//*  user.username="test2"

//*  console.log(user)