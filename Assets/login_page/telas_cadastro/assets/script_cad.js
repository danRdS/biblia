const end_email = document.getElementById('end_email');

const next = () => {
    localStorage.setItem('email', end_email.value)
}

function back(){
    setTimeout(()=> {
        window.location.assign('../loginPage.html')
    }, 700)
}

