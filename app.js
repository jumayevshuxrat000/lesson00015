const telEL = document.querySelector(".tell")
const btnEL = document.querySelector(".btn")
const giftEl = document.querySelector(".gift")
const audio = new Audio("./aoudio/ding.mp3");


const TEL_NUMBER = [
    "+998 99 129 62 09",
    "+998 99 115 20 99",
    "+998 99 226 45 89",
    "+998 99 189 52 09",
    "+998 99 129 62 05",
    "+998 99 178 45 06",
    "+998 99 198 78 04",
    "+998 99 112 89 80",
    "+998 99 251 25 78",
    "+998 99 163 89 15",
    "+998 99 615 78 16",
    "+998 99 154 48 18",
    "+998 99 512 45 77",
    "+998 99 515 85 85",
]

const Price__gift = [
    "Damas",
    "Tracker",
    "Gugurt",
    "Kir yuvish mashinasi",
    "70 mln",
    "90 mln"
]

function getRandomNUmber(){
    btnEL.setAttribute("disabled", true)
    
    const interval = setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * TEL_NUMBER.length)
        telEL.innerHTML = TEL_NUMBER[randomNumber]
        const randomIndex = Math.floor(Math.random() * Price__gift.length);
        const randomGift = Price__gift[randomIndex];
        giftEl.innerText = randomGift;
    },100)

    setTimeout(()=>{
        clearInterval(interval)
        btnEL.removeAttribute("disabled")
        audio.currentTime = 0;
        audio.play();
    },2500)
    setTimeout(() => {
        audio.pause();
    }, 7000); 
}












