function checkLetter() {
         const name = document.getElementById("nameInput").value.toLowerCase();
         const letter = document.getElementById("letterInput").value.toLowerCase();
         const result = document.getElementById("result");
         
         if (letter.length !== 1) {
             result.textContent = "Iltimos, bitta harf kiriting!";
             return;
         }
         
         if (name.includes(letter)) {
             result.textContent = `Ha, ismda "${letter}" harfi ishtirok etgan.`;
         } else {
             result.textContent = `Yo'q, ismda "${letter}" harfi ishtirok etmagan.`;
         }
     }
     