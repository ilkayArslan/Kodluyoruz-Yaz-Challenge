//Easy
let findfactoriel = document.querySelector("#findfactoriel")
let calfac = document.querySelector("#calfac")
let sonucfac = document.querySelector("#sonucfac")

calfac.addEventListener("click",()=>{
    if(findfactoriel.value.length>0){
        let num = +findfactoriel.value;
        let sum =1;
        for (let index = 1; index <= num; index++) {
            sum *= index;
        }
       sonucfac.innerHTML = sum;
    }
})
//Medium & hard
let dizi = [1,45,85,45,45,45,756,258,759,12];
let sum = 0;
let hedef = 45;
let hedeftekrar=0;
for (let index = 0; index < dizi.length; index++) {
     sum += dizi[index];
     if(dizi[index]==hedef){
        hedeftekrar++;
     }
}
console.log("Dizideki sayıların aritmetik ortalaması : "+sum/dizi.length);
console.log(hedef+" sayısı "+hedeftekrar + " defa tekrar etmiştir")





