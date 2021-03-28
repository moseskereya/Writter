var mycarrier = ["Developer", "Trainer", "YouTuber", "Gamer"];
const mycarries = document.querySelector(".text")
const navs = document.querySelector('nav')

function Show() {
    for (i = 0; i < mycarrier.length; i++) {
        var text = Math.floor(Math.random() * mycarrier.length)
        const mytext = mycarries.innerHTML = mycarrier[text];
    }
}

setInterval(Show, 2500)

window.onscroll = () => {
    if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 0)
    {
        navs.style.backgroundColor = "Transparent"
        
    } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navs.style.backgroundColor = "#18191bd5"
    } else {
        navs.style.backgroundColor = "Transparent"
    }
}