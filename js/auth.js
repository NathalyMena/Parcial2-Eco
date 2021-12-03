import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginBtn = Document.querySelector(".loginBtn");

loginBtn.addEventListener("click", ()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("sirve");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

})