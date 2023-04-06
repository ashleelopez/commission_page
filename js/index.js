const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0

let int = setInterval(loading, 40)




function loading(){
    load++
    loadText.innerText = `${load}%`
    bg.style.filter = `blur(${30 - 0.3*load}px)`
    loadText.style.opacity = `${1 - load/100}`
    if (load == 100){
        clearInterval(int)
    }
}

const menubar = document.getElementById('menubar')
const sidenav = document.getElementById('sidenav')
sidenav.style.right = "-250px";

menubar.onclick = function() {
    if(sidenav.style.right == "-250px") {
        sidenav.style.right = "0"
    }
    else {
        sidenav.style.right = "-250px";
    }
}

