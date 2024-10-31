const input = document.getElementById('input');
const box = document.querySelector('.box');
const active = document.getElementById('active');
const body = document.getElementsByTagName('body');
const h2 = document.querySelector('.informacoes h2');
const caixa = document.querySelector('.sobreMim .caixa');
const titulo = document.querySelector('.biografia h2');
const p = document.querySelector('.biografia p');
const cont = document.querySelectorAll('.cont');
const habilidades = document.querySelector('.habilidades');
const habilidadesh2 = document.querySelector('.habilidades h2');
const cont_hab = document.querySelectorAll('.cont_hab');
const html = document.getElementById('html');
const hab_p = document.querySelectorAll('.cont_hab p');
const projetos = document.querySelectorAll('.projetos .conteinerOn');
const projetosTitulo = document.querySelectorAll('.conteinerOn h2');
const projetosP = document.querySelectorAll('.conteinerOn p');
const contato = document.querySelector('.contato');
const contatoP = document.querySelectorAll('.caixas p');
const imagemHeader = document.getElementById('imagemHeader');

input.addEventListener('click', () => {
    if(box.id) {
        box.removeAttribute('id', 'modoActive');
        document.body.id = '';
        h2.removeAttribute('id', 'tituloLight');
        caixa.removeAttribute('id', 'sobreMimLight');
        titulo.removeAttribute('id', 'sobreMim_h2Light');
        p.removeAttribute('id', 'sobreMim_pLight');
        cont.forEach((el) => {
            el.removeAttribute('id', 'contLight');
        })
        habilidades.removeAttribute('id', 'habilidadesLight');
        habilidadesh2.removeAttribute('id', 'habilidades_h2Ligth');
        cont_hab.forEach((el) => {
            el.removeAttribute('id', 'cont_habLight');
        })
        projetos.forEach((el) => {
            el.removeAttribute('id', 'projetosLight');
        })
        projetosTitulo.forEach((el) => {
            el.removeAttribute('id', 'projetoTituloLight');
        })
        projetosP.forEach((el) => {
            el.removeAttribute('id', 'projetosP');
        })
        contato.removeAttribute('id', 'contatoLight');
        hab_p.forEach((el) => {
            el.removeAttribute('id', 'hab_pLight');
        })
        contatoP.forEach((el) => {
            el.removeAttribute('id', 'contatoP');
        })
        imagemHeader.src = 'imagens/8453b4169367c52929e3c9ce1a900b4e-removebg-preview.png';

    } else {
        box.setAttribute('id', 'modoActive');
        document.body.id = 'bodyLight';
        h2.setAttribute('id', 'tituloLight');
        caixa.setAttribute('id', 'sobreMimLight');
        titulo.setAttribute('id', 'sobreMim_h2Light');
        p.setAttribute('id', 'sobreMim_pLight');
        cont.forEach((el) => {
            el.setAttribute('id', 'contLight');
        })
        habilidades.setAttribute('id', 'habilidadesLight');
        habilidadesh2.setAttribute('id', 'habilidades_h2Ligth');
        cont_hab.forEach((el) => {
            el.setAttribute('id', 'cont_habLight');
        })
        projetos.forEach((el) => {
            el.setAttribute('id', 'projetosLight');
        })
        projetosTitulo.forEach((el) => {
            el.setAttribute('id', 'projetoTituloLight');
        })
        projetosP.forEach((el) => {
            el.setAttribute('id', 'projetosP');
        })
        contato.setAttribute('id', 'contatoLight');
        contatoP.forEach((el) => {
            el.setAttribute('id', 'contatoP');
        })

        hab_p.forEach((el) => {
            el.setAttribute('id', 'hab_pLight');
        })
        imagemHeader.src = 'imagens/29eb211d08b93b8833002b448107f4b0-removebg-preview.png';
    }
})
