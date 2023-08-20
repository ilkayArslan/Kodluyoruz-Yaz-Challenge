let gelentext = document.querySelector("#gelentext")
let uzunluk = document.querySelector("#uzunluk")
let bos = document.querySelector("#bos")

uzunluk.addEventListener("click",()=>{
    if(gelentext.value.length>0){
        bos.innerHTML = gelentext.value.trim().length
    }
})

//Medium

let gelensayi = document.querySelector("#gelensayi")
let basamak = document.querySelector("#basamak")
let koy = document.querySelector("#koy")
let sayilar = []
basamak.addEventListener("click",()=>{
    if(gelensayi.value.length>0){
        sayilar = gelensayi.value.split("")
        koy.innerHTML = sayilar.reduce((a,b)=>a+=+b,0)
        }
})

//Hard

let gelensesli = document.querySelector("#gelensesli")
let sesli = document.querySelector("#sesli")
let ses = document.querySelector("#ses")
let sesliler = ["a","e","i","o","u"]
let myses = []
sesli.addEventListener("click",()=>{
    ses.innerHTML = ""
    myses = []
    if(gelensesli.value.length>0){
        let gelsesarr = gelensesli.value.toLowerCase().split("")
        for (let index = 0; index < gelsesarr.length; index++) {
            for(let j = 0; j<sesliler.length;j++){
                if(gelsesarr[index]==sesliler[j]){
                    myses.push(gelsesarr[index])
                }
            }
            
        }

        ses.innerHTML = myses.toString();
    
    }
})