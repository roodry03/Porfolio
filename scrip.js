//funcion que me aplica el estil a la opcion seleccionado en el menu y quita la previamente seleccionado
const seleccionar = (link) =>{
    var opciones = document.querySelectorAll("#links a")
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";

}


//funcion que muestra el menu responsive
const responsiveMenu = () => {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive"
    }else{
        x.className = ""
    }
}

//detecto el scrolling para aplicar la animacion de las barra de skills
window.onscroll = function(){
    efectoSkills()
};

//funcion que aplica la animacion de la barra de skills
const efectoSkills = () => {
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distacia_skills >= 300){
        document.getElementById("react").classList.add("barra-progreso1");
        document.getElementById("redux").classList.add("barra-progreso2");
        document.getElementById("html").classList.add("barra-progreso3");
        document.getElementById("js").classList.add("barra-progreso4");
    }
};

//emailjs
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7vafnwg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});