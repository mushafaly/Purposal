const container = document.getElementById("container")
const imageone = document.querySelector(".image-1")
const imagetwo = document.querySelector(".image-2")
const btnyes = document.querySelector(".btn-yes")
const btnno = document.querySelector(".btn-no")

function getRandomNumber(min, max){
    const randomnumber = Math.floor(Math.random() *(max - min + 1)) + min;
    return randomnumber;
}


btnno.addEventListener("mouseover", (e) => {
    const containerheight = container.getBoundingClientRect().height
    const containerwidth = container.getBoundingClientRect().width
    const btnheight = btnno.getBoundingClientRect().height
    const btnwidth = btnno.getBoundingClientRect().width
    const btntop = btnno.getBoundingClientRect().top
    const btnleft = btnno.getBoundingClientRect().left

    let newtop = btntop;
    let newleft = btnleft

    while(Math.abs(newtop - btntop) < containerheight / 3){
        newtop = getRandomNumber(0, containerheight - btnheight)
    }

    while(Math.abs(newleft - btnleft) < containerwidth / 3){
        newleft = getRandomNumber(0, containerwidth - btnwidth)
    }

    btnno.style.top = Math.floor(newtop) + "px";
    btnno.style.left = Math.floor(newleft) + "px";
})

btnyes.addEventListener("click", (e) => {
    btnno.classList.add("hide");
    imageone.classList.add("hide");
    imagetwo.classList.remove("hide");
})