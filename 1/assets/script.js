document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const linksMenu = document.getElementById('links-menu');

    burger.addEventListener('click', function() {
        linksMenu.classList.toggle('active'); 
    });
});

