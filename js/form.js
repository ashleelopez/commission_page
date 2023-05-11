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

