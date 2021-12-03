const db = firebase.database();

const bookContainer = document.querySelector('.bookContainer');

db.ref('book').on('value',function(data){

   
    bookContainer.innerHTML = '';
    data.forEach(
        book =>{
            let value = book.val();
            let line = new BooksElements(value);
            console.log(line);
            bookContainer.appendChild(line.render());
            
        }
    );
});