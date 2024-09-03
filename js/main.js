// sticky menu style start
$(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
        offset: 70,
        beginAt: 10,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });
})


let nav = document.querySelector ("#nav");

window.addEventListener("scroll", function(){
    let sticky = window.scrollY;
    if (sticky > 100) {
        nav.classList.add("sticky_menu")
    } else {
        nav.classList.remove("sticky_menu")
    }
})

// sticky menu style end