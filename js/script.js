// Поиск
const icon = document.querySelector('.search__icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('seacrch__active');
}


// Бергер меню
const iconMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.header__body');
const menuItem = document.querySelectorAll('.header__link');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', event => {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
        })
    })
}


// Изменение аквтивного пункта меню
var menu = document.getElementById('menu__list');

for(let i = 0; i < menu.children.length-1; i++){
    menu.children[i].querySelector('a').classList.remove('menu__item-active');
    menu.children[i].querySelector('a').onclick = activeMenu;
}
function activeMenu(){
    for(let i = 0; i < menu.children.length-1; i++){
        menu.children[i].querySelector('a').classList.remove('menu__item-active');
    }
    this.classList.add('menu__item-active');
}


// Карусель
var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: ".next__icon",
        prevEl: ".prev__icon",
      },
      breakpoints:{
        450:{
            slidesPerView: 2,
        },
        690:{
            slidesPerView: 3,
        }
    }
});
