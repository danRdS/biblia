voltar.addEventListener('click', () => {
    setTimeout(() => {
        window.location.assign('../../loginPage.html');
    }, 600)
})

const entra = document.getElementById('entra');

function enter(){
    let end_email = email.value;
    let pass = password.value;

    if(end_email.length > 0 && pass.length > 0){
        entra.setAttribute('type', 'button')
        localStorage.email = end_email;
        localStorage.fb = 'cadastro pelo facebook';
        location.href = '../../telas_cadastro/confirm_cadastro_email.html'
    } else {
        entra.setAttribute('type', 'submit');
    }
}
