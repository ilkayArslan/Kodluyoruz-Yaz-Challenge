let sumt = document.querySelector("#sumt");
let buttontop = document.querySelector("#toplam")
let arrofnumb = [];
for (let index = 0; index < 100; index++) {
    arrofnumb.push(index)
}

function ToplamBul() {
    let kullanici = sumt.value;
    let newArr = [];
    let sumofnumbers = 0;
    while (sumofnumbers != kullanici) {
        let rand = Math.floor(Math.random() * 100)
        if (sumofnumbers > kullanici) {
            newArr = [];
            sumofnumbers = 0;
        } else {
            sumofnumbers += rand;
            newArr.push(rand);
        }

    }
    console.log(newArr)
    console.log(sumofnumbers)

}


buttontop.addEventListener("click", ToplamBul)