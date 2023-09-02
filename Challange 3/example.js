let ucluk = 3;
let ikilik = 2;


let toplam = (ucluk*5)+(ikilik*10);
console.log(toplam)

//Medium

let kitap = 80;
let defter =  20;
let kalem =5;

let kirtasiyetoplam = (kitap*2)+(defter*3)+(kalem*4);

console.log(kirtasiyetoplam)

//hard

let topogr = 30;
let kaclik = 4;

function gerileme(n){
    let tum=1;
    while(n>1){
        tum*=n;
        n--;
    }
    return tum;
}

let hesaplama = gerileme(topogr)/(gerileme(topogr-kaclik)*gerileme(kaclik));
console.log(hesaplama)