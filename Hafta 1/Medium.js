let yazi = document.querySelector("#yazialani");
let butonh = document.querySelector("#harf");

function findLetter() {
    let arr = yazi.value.trim().split("")
    let arrset = new Set();
    let letlermap = [];
    if (yazi.value < 1) {
        alert("Lütfen yazi giriniz")
    } else {
        for (let l of arr) {
            arrset.add(l)
        }
        for (let a of arrset) {
            let numofletter = arr.filter(leta => leta == a).length;
            letlermap.push({ letter: a, numb: numofletter })
        }
        letlermap.sort((a, b) => b.numb - a.numb)

        alert(`En çok tekrar eden harf ${letlermap[0].letter} ve ${letlermap[0].numb} kere tekrar etmiştir`)
    }

}
butonh.addEventListener("click", findLetter)