export default function initMenu(){
    document.addEventListener('DOMContentLoaded', function abrirMenu() {
        const botaoMenu = document.querySelector("[data-menu=botao]");
        const menu = document.querySelector('[data-menu= menu-mobile]');
        const fecharMenu = document.querySelector("[data-menu=botaoFechar]");
        const tiposEventos = ['click', 'touchstart'];
        tiposEventos.forEach((evento) =>{
            botaoMenu.addEventListener(evento, function() {
                menu.classList.add('ativo');
            });
        })
        tiposEventos.forEach((evento) => { 
        fecharMenu.addEventListener(evento, function() {
            menu.classList.remove('ativo');
        });
        })
    });
    
}