function escrevendoletra() {
    function ativarletra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativarletra(titulo);
}

const ativamenu = document.querySelector('.fa-bars');
const navmenu = document.querySelector('header .navegação-primaria');

ativamenu.addEventListener('click', () => {
    ativamenu.classList.toggle('fa-x');
    navmenu.classList.toggle('ativado');
});