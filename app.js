
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollpos = window.pageYOffset ;
    if(prevScrollpos > currentScrollpos){
        document.getElementById('slideNav').style.top = '0';
    }
    else{
        document.getElementById('slideNav').style.top = '-100px';
    }
    prevScrollpos = currentScrollpos;
}

// document.getElementById



// var menuIcon = document.querySelector('navbarIcon');

// menuIcon.addEventListener('click', function(){
//     var menu = document.querySelector('navbar');
//     if(menu.style.display === 'none'){
//         menu.style.display = 'block'
//     }else{
//         menu.style.display = 'none'
//     }
// })

