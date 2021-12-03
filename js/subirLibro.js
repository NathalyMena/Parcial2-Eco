const input = document.querySelector(".bookName");
const btn = document.querySelector(".subir")
const db = firebase.database();




btn.addEventListener("click",()=>{

    let reference = db.ref("movies").push()

    let pelicula = {

        nombre: input.value,
        id : reference.key
    }

    reference.set(pelicula)


    //window.location="index.html";


})