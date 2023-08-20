//easy and medium
let dizi =[12,5,785,79,9956,12,43,85,62,75,96,256,3,1,10,12558]
let maxvalue = Math.max(...dizi);
let minvalue = Math.min(...dizi)
console.log(maxvalue + " en büyük değerdir")
console.log(minvalue + " en küçük değerdir")

//Hard

let findbolen = document.querySelector("#findbolen")
let hesapla = document.querySelector("#hesapla")
let array=[];

hesapla.addEventListener("click",()=>{
    array =[]
    if(findbolen.value>1){
        let num = findbolen.value;
        for (let index = 1; index <= num; index++) {
            if(num%index==0){
                array.push(index)  
            }
        }
        console.log(array + " Bölenlerin listesi ");
        console.log(array.reduce((a,b)=>a+=b,0) + " bölenlerin toplamı ")
    }
})

