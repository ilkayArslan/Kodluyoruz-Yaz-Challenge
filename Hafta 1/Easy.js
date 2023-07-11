let input = document.querySelector("#age")
let buton = document.querySelector("#hesapla")
let today = new Date().getFullYear();
function hesap() {
    if (input.value > 2023) {
        alert(`Girdiğiniz tarih ${today}'den küçük olmalıdır`)
    } else {
        let fark = today - input.value;
        alert(`Merhaba ${fark} yaşındasınız`)
    }
    input.value = ""

}

buton.addEventListener("click", hesap);
