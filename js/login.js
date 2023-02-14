const   $btnSignIn= document.querySelector('.sign-in-btn'),
        $btnSignUp= document.querySelector('.sign-up-btn'),
        $signUp= document.querySelector('.sign-up'),
        $signIn= document.querySelector('.sign-in');

    document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    });

function loguear()
{
    let user=document.getElementById('usuario').value;
    let pass=document.getElementById('contraseña').value;
    if(user == "mdkjoel@hotmail.com" && pass == "JouTanto39")
    {
        window.location="index.html";
    } else {
        alert("Datos incorrectos")
    }
}