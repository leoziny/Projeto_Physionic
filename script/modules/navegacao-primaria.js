import outsideClick from "./outsideclick.js";

export default function initMenu() {
    document.addEventListener('DOMContentLoaded', function abrirMenu() {
        const botaoMenu = document.querySelector("[data-menu=botao]");
        const menu = document.querySelector('.menu-mobile');
        const fecharMenu = document.querySelector("[data-menu=botao-fechar]");
        const tiposEventos = ['click', 'touchstart'];


        tiposEventos.forEach((evento) =>{
            botaoMenu.addEventListener(evento, handleClick);
            fecharMenu.addEventListener(evento, botaoFechar);
        })

        function handleClick(event){
                menu.classList.add("ativo");
            outsideClick(menu, tiposEventos, () =>{
                menu.classList.remove('ativo');
            })
        }
        function botaoFechar(){
            menu.classList.remove('ativo');
        }

        

    });
}