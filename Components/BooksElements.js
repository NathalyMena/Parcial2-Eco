class BooksElements {
    constructor(book) {
        this.book = book;
    }

    render = () => {
        

        let total;
        let score
        let result;
        let bookContainer = document.createElement("div");



        bookContainer.innerHTML = `


                    <div class="infoContainer">
                        <h2>${this.book.nombre}</h2>

                        <form class="inputContainer">
                            <label for="">1</label>
                            <input type="radio" name="radio" id="" value="1">
                            <label for="">2</label>
                            <input type="radio" name="radio" id="" value="2">
    
                            <label for="">3</label>
                            <input type="radio" name="radio" id="" value="3">
                            <label for="">4</label>
                            <input type="radio" name="radio" id="" value="4">
    
                            <label for="">5</label>
                            <input type="radio" name="radio" id="" value="5">
                        </form>

                    </div>

                    <p class="score">0</p>

           `

           bookContainer.classList.add("container");
           const puntaje = bookContainer.querySelector(".score")
           
           const inputs = bookContainer.querySelector(".inputContainer");
         db.ref("rating").orderByChild("id").equalTo(this.book.id).on("value", function (data) {

            total = data.numChildren();
            
            score = 0;
           
            data.forEach(function (dbrating) { //para calcular el promedio de puntaje por los votos
                let value = dbrating.val(); 
                console.log(value)
                score = score + value.rating;
                
                console.log(score)
                result = score / total;   
                          
                puntaje.innerHTML = Math.round(result * 100) / 100; 
            })
        })

  
        inputs.addEventListener("change", () => {

            let rating = {

                rating: parseFloat(inputs.radio.value),
                id: this.book.id
            }
            db.ref("rating").push(rating)
        })


        return bookContainer;
 

    }
}