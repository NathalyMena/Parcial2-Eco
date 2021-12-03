const db = firebase.database();

const movieContainer = document.querySelector('.movieContainer');

db.ref('movies').on('value',function(data){

   
    movieContainer.innerHTML = '';
    data.forEach(
        movie =>{
            let value = movie.val();
            let line = new BooksElements(value);
            console.log(line);
            movieContainer.appendChild(line.render());
            
        }
    );
});