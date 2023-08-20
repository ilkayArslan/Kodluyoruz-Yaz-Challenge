let gelensayi = document.querySelector("#gelensayi")
let kontrol = document.querySelector("#kontrol")
kontrol.addEventListener("click",()=>{
    if(gelensayi.value.length>0){
        if(gelensayi.value%2==0 && gelensayi.value==0){
            document.querySelector("#sayikontrol").innerHTML="Çift sayıdır"
        }else{
            document.querySelector("#sayikontrol").innerHTML="tek sayıdır"

        }
    }
})

//Medium

let dizi = [12,5,78,77,98,35,65,21,31,38,39,93]
let ciftdizi = []

for (let index = 0; index < dizi.length; index++) {
    if(dizi[index]%2==0){
        ciftdizi.push(dizi[index])
    }
    
}
console.log(ciftdizi)
console.log(ciftdizi.reduce((a,b)=>a+=b,0))

//Hard
let gelentext = document.querySelector("#gelentext")
let bak = document.querySelector("#bak")
let baktext = document.querySelector("#baktext")
let textarray = [];
let ikilem = "";
bak.addEventListener("click",()=>{
    let matext= gelentext.value;
    if(gelentext.value.length>0){
        textarray = matext.split(" ");
        for (let index = 0; index < textarray.length; index++) {
            if(textarray[index] == textarray[index+1]){
                ikilem = textarray[index]
                break;
            }else{
                ikilem = "ikileme yoktur"
            }
        }
        console.log(ikilem)
    }
})
