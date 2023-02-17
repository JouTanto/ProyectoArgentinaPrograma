/*FORMULARIO*/
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
    if(user == "mdkjoel" && pass == "123456789")
    {
        window.location="index.html";
    } else {
        alert("Datos incorrectos")
    }
}
/*FIN FORMULARIO

/*RELOJ*/
const $tiempo = document.querySelector('.tiempo'),
        $fecha = document.querySelector('.fecha');

        function digitalClock(){
            let f = new Date(),
                dia = f.getDate(),
                mes = f.getMonth() + 1,
                anio = f.getFullYear(),
                diaSemana = f.getDay();

                dia = ('0' + dia).slice(-2);
                mes = ('0' + mes).slice(-2);



            let timeString = f.toLocaleTimeString();
                $tiempo.innerHTML = timeString;

            let semana = [ 'DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
            let showSemana = (semana[diaSemana]);
                $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`;
}
setInterval(() => {
    digitalClock()
}, 1000);
/*FIN RELOJ*/