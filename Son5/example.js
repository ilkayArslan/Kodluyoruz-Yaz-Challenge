//easy
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let sumbut = document.querySelector("#sum");
let sumarea = document.querySelector("#sumarea");

sumbut.addEventListener("click",()=>{
    if(num1.value.length>0&&num2.value.length>0){
        sumarea.innerHTML="";
        let sumt= +num1.value+ +num2.value;
        sumarea.innerHTML = "Toplam : " + sumt;
        num1.value="";
        num2.value=""
    }else{
        alert("lütfen sayı giriniz")
    }
})

// Medium

let mytext= document.querySelector("#mytext");
let say = document.querySelector("#textcal");
let sumlet = document.querySelector("#sumlet")

say.addEventListener("click",()=>{
    let matextwotrim = mytext.value.trim()
    if(matextwotrim.length>0){
        sumlet.innerHTML = "Toplam : " + matextwotrim.length + " kelime" 
    }else{
        alert("lütfen texti doldurunuz")
    }
})
 
//Hard
let myinput= document.querySelector("#findroot");
let mybut = document.querySelector("#kara");
let whathappened = document.querySelector("#whathappened");
mybut.addEventListener("click",()=>{
    if(myinput.value.length>0){
        let num =  Math.sqrt(+ myinput.value)
        if(String(num).includes(".")){
            whathappened.innerHTML = "Sonuc tam olarak karakoku alınamıyor"
        }else{
            whathappened.innerHTML = num;
        }
    }else{
        alert("sayı gir")
    }
})


