const buttonMenu = document.getElementById('menuToggle');
const menu = document.querySelector('.menuOff');
const fundo = document.querySelector('.fundo');


buttonMenu.addEventListener('change', function () {
    if (buttonMenu.checked) {
        menu.setAttribute('id', 'menuOn');
        fundo.setAttribute('id', 'fundoOn');
    } else {
        menu.removeAttribute('id', 'menuOn');
        fundo.removeAttribute('id', 'fundoOn');
    }
});

fundo.addEventListener('click', () => {
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
})


