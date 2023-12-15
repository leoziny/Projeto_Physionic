
export default function InitanimaScroll(){
    const sectionsScroll = document.querySelectorAll("[data-anima=scroll]");
    if(sectionsScroll.length){

        const metadeTela = window.innerHeight * 0.8;
        function animaScroll(){
            sectionsScroll.forEach((secao) =>{
                const sectionRectTop = secao.getBoundingClientRect().top;
                const  eVisivel = (sectionRectTop - metadeTela) < 0;
                if(eVisivel)
                secao.classList.add('ativado');
            
            
        });
        window.addEventListener('scroll', animaScroll);
    }
    animaScroll();
}
}
InitanimaScroll();