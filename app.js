
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


