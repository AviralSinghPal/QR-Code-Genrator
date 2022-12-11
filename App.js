const qrCode = document.getElementById("img")
const qrInput = document.getElementById("input")
const btn = document.getElementById("submitbtn")


btn.addEventListener("click",()=>{
    qrCode.style.display = "block";
    qrCode.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
})

console.log(qrCode);
console.log(qrInput);
console.log(btn);
