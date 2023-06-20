const menu_email = document.querySelector('.menu_email');
function openCadGoogle(){
    menu_email.classList.toggle('open');
}

const cadForEmail = () => {
    window.location.assign('telas_cadastro/cadastro_email.html');
}

function back(){
    setTimeout(()=>{
        window.location.assign('../../index.html');
    }, 700);
}

function cadForFacebook(){
    location.href = 'telas_cadastro/facebook/cadastro_facebook.html';
}