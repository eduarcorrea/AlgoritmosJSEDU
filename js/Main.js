function  saludo(){

    alert("Bienvenido Usuario");
    alert("Acontinuacion encontraras unos Botones que ejecutan Algoritmos realizados con JS puro");

}

function suma(){
let A=0;
let B=0;
let C=0;
let suma=0;

A= parseInt(prompt("Ingrese el Primer valor a sumar"));
B= parseInt(prompt("Ingrese el segundo valor a sumar"));

suma= A+B;
alert("El resultado de la suma es :"+suma);

}

function operacionesbasi(){
    let A=0;
    let B=0;
    let suma=0;
    let resta=0;
    let multiplicacion=0;
    let division=0;


    A= parseInt(prompt("Ingrese el primer numero"));
    B= parseInt(prompt("Ingrese el segundo numero"));
// visualiza   las operaciones resta ,multi, división  etc.
  suma= A+B;
  resta= A-B;
  multiplicacion= A*B;
  division= A/B;
  alert("El resultado de la Suma es :"+suma);
  alert("El resultado de la Resta es :"+resta);
  alert("El resultado de la División es :"+division);
  alert("El resultado de la Multiplicación es :"+multiplicacion);
  // visualiza   las operaciones resta ,multi, división  etc.
 

//alert("La Multiplicación es:"+multiplicacion);


}

function areatrian(){

let Altura=0;
let Base=0;
let C=2;

Altura= parseInt(prompt("Ingrese la Altura"));
Base= parseInt(prompt("Ingresar la Base"));
 area=(Altura*Base)/C;
alert(" El Area del triangulo es: "+area);
}

function promed(){
//let Nombre=0;
const text = new String("H");
let n1=0;
let n2=0;
let n3=0;
//Nombre= parseInt(prompt("Ingrese el Nobre del estudiante"));

H= prompt("Ingrese Nombre");
n1= parseInt(prompt("Ingrese la Nota Uno"));
n2= parseInt(prompt("Ingrese la Nota Dos"));
n3= parseInt(prompt("Ingrese Nota Tres"));
 prome=(n1+n2+n3)/3;
 alert(" El promedio de la Nota es:"+" " +prome+" "+"Del Estudiante "+H +" Nombr  ");

}

function cuadrado(){

    let n=0;

    n= parseInt(prompt("Ingresa el Numero para calcular su cuadrado"));
     cuadrad=(n*n);

     alert("El cuadrado del Numero es:" +" "+cuadrad);

}

function mayor(){
// definir la variable
let n1=0;
let n2=0;
let n3=0;

n1= parseInt(prompt(" Ingresar el Número Uno"));
n2= parseInt(prompt(" Ingresar El Número Dos "));
n3= parseInt(prompt(" Ingresar el Número Tres"));


// condicionales el numero mayor es segun la condicion

if (n1>n2) {if (n2>n3) {
    alert("El numero dos es Mayor que numero tres es :"+n2);
}
alert("El numero uno es Mayor es :"+n1);
}
if (n2>n1) { if (n1>n3) {
    alert("El numero uno mayor que  numero tres  es:" +n1);
}
    alert("El Número Dos es Mayor que Número Uno  es" +n2 );
}

if (n3>n2) { if (n2>n1) {
    alert("El numero Dos Mayor que Numero uno  es:"+n2);
}
    alert("El Numero Tres es el Mayor"+n3)

    if (n1=n2=n3) {
        alert("los Numeros son iguales  N1=N2=N3"+n1+" "+"="+n2+" "+n3);
}

}
}

function descuento(){
// definir variable
let nombre= "";
let n1=0;
let nk=0;
nombre= prompt("   ");

nK= parseInt(prompt(" Ingresar el Número de Kilos"));

alert("El Número de Kilos Ingresado es : " + nK);
}

function mayordosnumero(){
// definir las variables de n1 y n2
let n1=0;
let n2=0;
// ingresar los n1 y n2
n1=parseInt(prompt(" Ingresar el Número Uno"));
n2=parseInt(prompt("Ingresar el Número Dos"));

// el condicional if ()

if (n1==n2){

    alert(" Los Números Ingresados son iguales :"+" N1"+" ="+n1+" "+ " N2"+" ="+n2);
}
else if (n1>n2){

    alert("El Numero Uno es el Mayor :"+ n1);
}
else {
    alert("El Número Dos es el Mayor :" +n2);
}
}

function descuento1(){

// definir variables
let producto= "";
//let comp=0;
let nk=0;
let precio=0;
let descu=0;
let pag=0;
let comp=0;

// ingre datos
//comp = nk*precio;
//descu =comp*0.1;
//pag = comp;
  


producto = prompt(" Ingre Pro");
alert("El producto es:"+producto);
nk = parseInt(prompt("Ingre n"));

   precio = parseInt(prompt("Ingre Pre"));
   alert("El precio es: "+precio);
   //nk = parseInt(prompt("Ingre n"));
  // alert("El Número es:"+ nK);
//comp = parseInt(prompt());
comp= nk*precio;
   alert("la Compra es:" +comp);

   descu =comp*0.1;
   alert("El des es:" +descu);
//pag = comp;
pag = (comp-descu);
  alert("El tot del Pago es:" +" "+pag)

}

function inversioncapi(){
// defino variables
let capital=0;
let na=0;
let nusua=0;
let ganancia=0;
let inter=0.204;
let pago=0;


// ingresar datos

nusua= prompt("Ingresar Nombre de Usuario");
alert ("El nombre del Inversionita es :"+""+nusua);

capital= parseInt(prompt("Ingresar el Capital en pesos"));
alert("El Valor del Capital es:"+" "+capital);
na= parseInt(prompt("Ingresar Número de Años"));
alert("El Número de años es:"+" "+na);
 ganancia= (capital*0.204*na);
 alert("El Nombre del Usuario es:"+" " +nusua+" "+"La Ganacia es: "+" "+ganancia+" "+"en Años "+""+na);
pago=(capital+ganancia)
//valor de pago en pesos moneda de colombia
alert("Total apagar al Usuario "+" "+nusua+" "+" El Valor de :"+pago+" "+" En Pesos");

}