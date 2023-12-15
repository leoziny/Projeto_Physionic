
export default function removerClasseCel(){
    const tamanhoCel = window.matchMedia('(max-width: 720px)')

    if(tamanhoCel.matches)
    document.documentElement.classList.remove('js');
    else
    document.documentElement.classList.add('js');

}

removerClasseCel();

