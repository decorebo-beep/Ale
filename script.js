const boton = document.getElementById("botonComenzar");
const sobre = document.getElementById("sobre");
const abrirSobre = document.getElementById("abrirSobre");
const carta = document.getElementById("carta");


boton.addEventListener("click", function(){

    sobre.classList.remove("oculto");

});


abrirSobre.addEventListener("click", function(){

    carta.classList.remove("oculto");

});
const fechaInicio = new Date("2026-05-12T14:00:00");


function actualizarTiempo(){

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;


    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);


    const segundosRestantes = segundos % 60;
    const minutosRestantes = minutos % 60;
    const horasRestantes = horas % 24;


    document.getElementById("tiempo").innerHTML =
    dias + " días ❤️<br>" +
    horasRestantes + " horas<br>" +
    minutosRestantes + " minutos<br>" +
    segundosRestantes + " segundos";

}


setInterval(actualizarTiempo,1000);

actualizarTiempo();
const botonAmor = document.getElementById("botonAmor");
const escenaFinal = document.getElementById("escenaFinal");

const escena1 = document.getElementById("escena1");
const escena2 = document.getElementById("escena2");

const explosion = document.getElementById("explosion");
const fuegos = document.getElementById("fuegosArtificiales");

botonAmor.addEventListener("click", () => {

    escenaFinal.classList.remove("oculto");

});

// Explosión de corazones
setTimeout(() => {

    crearExplosion();

},1500);

// Después de la explosión aparecen los fuegos y el mensaje
setTimeout(() => {

    escena1.classList.remove("activa");
    escena2.classList.add("activa");

    crearFuegosArtificiales();

},4000);


function crearExplosion(){

    for(let i=0;i<40;i++){

        let corazon=document.createElement("div");

        corazon.classList.add("corazoncito");

        corazon.style.left=Math.random()*100+"vw";
        corazon.style.top=Math.random()*100+"vh";

        corazon.style.setProperty("--x",(Math.random()-0.5)*20+"vw");
        corazon.style.setProperty("--y",(Math.random()-0.5)*20+"vh");

        corazon.style.animationDelay=Math.random()*1+"s";

        explosion.appendChild(corazon);

    }

}


function crearFuegosArtificiales(){

    for(let i=0;i<6;i++){

        let fuego=document.createElement("div");

        fuego.classList.add("fuego");

        fuego.style.left=Math.random()*100+"vw";
        fuego.style.top=Math.random()*100+"vh";

        fuego.style.animationDelay=Math.random()*2+"s";

        fuegos.appendChild(fuego);

    }

}