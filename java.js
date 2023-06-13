



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
    escrevendoletra();

    function menuMobile(){
        const activeMenu = document.querySelector('.fa-bars');
        const navMenu = document.querySelector('header .navegacao-primaria');
        
        
        activeMenu.addEventListener('click',()=>{
            activeMenu.classList.toggle('fa-x');
            navMenu.classList.toggle('ativado');
        });
    
    }
    menuMobile();

    
        const divExperience = document.querySelectorAll('.experience_content div'); 
        const liExperience = document.querySelectorAll('.experience_content ul li'); 
        const divEducation = document.querySelectorAll('.education_content div'); 
        const liEducation = document.querySelectorAll('.education_content ul li'); 

        divEducation[0].classList.add('active');
        liEducation[0].classList.add('active');
        divExperience[0].classList.add('active');
        liExperience[0].classList.add('active');

        function aboutme(){

            function slideShow(index){
            divExperience.forEach((div)=>{
                div.classList.remove('active')
            });
            liExperience.forEach((buttom)=>{
                buttom.classList.remove('active');
            })
            divExperience[index].classList.add('active');
            liExperience[index].classList.add('active');
        }

        function slideShow2(index){
            divEducation.forEach((div)=>{
                div.classList.remove('active')
            });
            liEducation.forEach((buttom)=>{
                buttom.classList.remove('active');
            })
            divEducation[index].classList.add('active');
            liEducation[index].classList.add('active');
        }


        liExperience.forEach((event, index) => {
            event.addEventListener('click', () =>{
                slideShow(index);
            })
        });
        
        liEducation.forEach((event, index) => {
            event.addEventListener('click', () =>{
                slideShow2(index);
            })
        });
        }

        aboutme();
    