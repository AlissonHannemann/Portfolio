const contatar = document.getElementById('Contatar');
const instagram = document.getElementById('instagram');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const github2 = document.getElementById('github2');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const florescence = document.getElementById('acessarFlorescence');
const cookiesDev = document.getElementById('acessarCookiesDev');
const linkedin2 = document.getElementById('linkedin2');


contatar.addEventListener('click', () => {
    window.location.href = 'https://wa.me/5551997212484';
})

instagram.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/_alissonjh/';
})

github.addEventListener('click', () => {
    window.location.href = 'https://github.com/AlissonHannemann';
})

github2.addEventListener('click', () => {
    window.location.href = 'https://github.com/AlissonHannemann';
})

email.addEventListener('click', () => {
    window.location.href = 'mailto:alissondeveloperr@gmail.com';
})

telefone.addEventListener('click', () => {
    window.location.href = 'https://wa.me/5551997212484';
})



linkedin.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/alissonhannemann/';
})

linkedin2.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/alissonhannemann/';
})


document.getElementById('inicio').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('.caixa1');
    window.scrollTo({
      top: target.offsetTop - 60, // Ajuste o valor para o seu cabeçalho fixo
      behavior: 'smooth' // Rolagem suave
    });

    const buttonMenu = document.getElementById('menuToggle');
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
});

document.getElementById('sobreMim').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('.sobreMim');
    window.scrollTo({
      top: target.offsetTop - 60, // Ajuste o valor para o seu cabeçalho fixo
      behavior: 'smooth' // Rolagem suave
    });

    const buttonMenu = document.getElementById('menuToggle');
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
});

document.getElementById('habilidades').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('.habilidades');
    window.scrollTo({
      top: target.offsetTop - 60, // Ajuste o valor para o seu cabeçalho fixo
      behavior: 'smooth' // Rolagem suave
    });

    const buttonMenu = document.getElementById('menuToggle');
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
});

document.getElementById('projetos').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('.projetos');
    window.scrollTo({
      top: target.offsetTop - 60, // Ajuste o valor para o seu cabeçalho fixo
      behavior: 'smooth' // Rolagem suave
    });

    const buttonMenu = document.getElementById('menuToggle');
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
});

document.getElementById('contatos').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('.contato');
    window.scrollTo({
      top: target.offsetTop - 60, // Ajuste o valor para o seu cabeçalho fixo
      behavior: 'smooth' // Rolagem suave
    });

    const buttonMenu = document.getElementById('menuToggle');
    menu.removeAttribute('id', 'menuOn');
    fundo.removeAttribute('id', 'fundoOn');
    buttonMenu.click();
});
