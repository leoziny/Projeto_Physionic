export default function aparecerAba(){
    const liBotao = document.querySelector('.lista-primaria-dois li:last-child');

    liBotao.addEventListener('mouseover', function(){
        liBotao.classList.add('ativo')
    })
    liBotao.addEventListener('mouseleave', function(){
        liBotao.classList.remove('ativo')

    })
}