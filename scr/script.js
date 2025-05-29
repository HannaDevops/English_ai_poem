
function createPoem(event){
    event.preventDefault();
   
    new Typewriter('#poem', {
        strings: "space for poem",
        autoStart: true,
});
}


let poemElement =document.querySelector("#create-poem");
poemElement.addEventListener("submit",createPoem);
