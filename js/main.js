

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
console.log(menuBtn);
console.log(menuList);

menuBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu__open');

});