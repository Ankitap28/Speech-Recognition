const texts = document.querySelector(".texts");  
window.SpeechRecognition =  
 window.SpeechRecognition || window.webkitSpeechRecognition;  
const recognition = new SpeechRecognition();  
recognition.interimResults = true;  
let p = document.createElement("p");  
recognition.addEventListener("result", (e) => {  
 texts.appendChild(p);  
 const text = Array.from(e.results)  
  .map((result) => result[0])  
  .map((result) => result.transcript)  
  .join("");  
 p.innerText = text;  
 if (e.results[0].isFinal) {  
  if (text.includes("hello")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "Hello Dear!";  
   texts.appendChild(p);  
  }
  if (text.includes("how are you")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "I am fine";  
    texts.appendChild(p);  
   }  
  if (  
   text.includes("what's your name") ||  
   text.includes("what is your name")  
  ) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "My Name is Speech_Recogniser";  
   texts.appendChild(p);  
  }  
  if (text.includes("open YouTube")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "Opening Youtube";  
   texts.appendChild(p);  
   console.log("opening youtube");  
   window.open("https://www.youtube.com/");  
  } 
  if (text.includes("open Google Chrome")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "Opening Google Chrome..";  
    texts.appendChild(p);  
    console.log("Opening Google Chrome");  
    window.open("https://www.google.com/");  
   }  
  p = document.createElement("p");  
 }  
});  
recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start();