const menubtn = document.getElementById('menu-button');

const menulist = document.getElementById('menu-list');

menubtn.addEventListener('click' , () =>{
    menulist.classList.toggle('hidden');
})