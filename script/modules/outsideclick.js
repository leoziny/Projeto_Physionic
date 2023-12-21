// outsideclick.js
export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    


    if (!element.hasAttribute(outside)) {
        setTimeout(() => {
            events.forEach((evento) => {
                html.addEventListener(evento, handleOutsideClick);
            });
            element.setAttribute(outside, '');
        }, 100);
    }


    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach((evento) => {
                html.removeEventListener(evento, handleOutsideClick);
            });
            callback();
        }
    }


}

