export const animationScroll = ( evento: any ) => {
    
    const element = evento.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.addEventListener('scroll', () => {
        console.log(to);
    });
}