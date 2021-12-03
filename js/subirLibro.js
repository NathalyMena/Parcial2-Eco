const input = document.querySelector(".bookName");
const btn = document.querySelector(".subir")
const db = firebase.database();




btn.addEventListener("click",()=>{

    let reference = db.ref("book").push()

    let libro = {

        nombre: input.value,
        id : reference.key
    }

    reference.set(libro)


    //window.location="index.html";


})