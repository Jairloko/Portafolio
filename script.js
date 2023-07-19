
let menu = document.getElementById('menu');
let menuClose = document.getElementById('close');
let menuOpen = document.getElementById('open');

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show-menu');
   
    if(menu.classList.contains('show-menu')){
        menuOpen.style.display='none';
        menuClose.style.display='block';
    }else{
        menuOpen.style.display='block';
        menuClose.style.display='none';
    }

}
