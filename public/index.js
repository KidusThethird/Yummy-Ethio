const menu = document.querySelector('#menu');
const menu_icon = document.querySelector('#menu_icon');

menu_icon.addEventListener('click',() => {

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})