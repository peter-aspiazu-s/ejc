export const scrollButtonBannerHome = ( evento: any ) => {
    
    const element = evento.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to -100,
        behavior: "smooth"
    });
}