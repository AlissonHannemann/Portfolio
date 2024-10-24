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
const projetos = document.querySelector('.projetos .conteinerOn');
const projetosTitulo = document.querySelector('.conteinerOn h2');
const projetosP = document.querySelector('.conteinerOn p');
const contato = document.querySelector('.contato');
const contatoP = document.querySelectorAll('.caixas p');


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
        projetos.removeAttribute('id', 'projetosLight');
        projetosTitulo.removeAttribute('id', 'projetoTituloLight');
        projetosP.removeAttribute('id', 'projetosP');
        contato.removeAttribute('id', 'contatoLight');
        hab_p.forEach((el) => {
            el.removeAttribute('id', 'hab_pLight');
        })
        contatoP.forEach((el) => {
            el.removeAttribute('id', 'contatoP');
        })


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
        projetos.setAttribute('id', 'projetosLight');
        projetosTitulo.setAttribute('id', 'projetoTituloLight');
        projetosP.setAttribute('id', 'projetosP');
        contato.setAttribute('id', 'contatoLight');
        contatoP.forEach((el) => {
            el.setAttribute('id', 'contatoP');
        })

        hab_p.forEach((el) => {
            el.setAttribute('id', 'hab_pLight');
        })


    }
})