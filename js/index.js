const db = firebase.database();

const bookContainer = document.querySelector('.bookContainer');

db.ref('movies').on('value',function(data){

   
    bookContainer.innerHTML = '';
    data.forEach(
        movie =>{
            let value = movie.val();
            let line = new BooksElements(value);
            console.log(line);
            bookContainer.appendChild(line.render());
            
        }
    );
});