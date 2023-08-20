let gelensayi = document.querySelector("#gelensayi")
let kare = document.querySelector("#kare")
let bos = document.querySelector("#bos")
kare.addEventListener("click",()=>{
    if(gelensayi.value.length>0){
        bos.innerHTML = Math.pow(gelensayi.value,2)
    }
})
//Medium
let array = [2,5,78,98,1,22,35,75,10,12,1,5,8]
array.sort((a,b)=>a-b);
console.log(array)
if(array.length%2==0){
    console.log("medyanlar  :" + array[array.length/2]+ " ve "+ array[array.length/2-1])
}else{
    console.log("medyan : " + array[Math.floor(array.length/2)])
}
//Hard
let gelenarm = document.querySelector("#gelenarm")
let arm = document.querySelector("#arm")
let armarea = document.querySelector("#armarea")
let mainnum ;
let numbers=[];
let armnum ;
arm.addEventListener("click",()=>{
    numbers =[]
    if(gelenarm.value.length>0){
        mainnum = gelenarm.value;
        numbers = mainnum.split("")
        armnum = numbers.reduce((a,b)=>a+=Math.pow(+b,3),0);
        if(mainnum == armnum){
            armarea.innerHTML = `${armnum }  armstrongun ta kendisidir`
        }else{
            armarea.innerHTML = "Armstrong değildir"
        }
    }
    
})