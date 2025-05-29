function showPoem(response){
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
});
}


function createPoem(event){
    event.preventDefault();
    
    let userPrompt =document.querySelector("#user-prompt");

    let keyApi = "35af20a51228d76bt18bb4ac458c490o";   
    let promptApi = `Create 4 line english poem about ${userPrompt.value}`;
    let contextApi = "Make sure to provide a clear and precise answer  separate each line with a <br />";  
    let urlApi = `https://api.shecodes.io/ai/v1/generate?prompt=${promptApi}&context=${contextApi}&key=${keyApi}`;
    
    
    axios.get(urlApi).then(showPoem);

    
}


let poemElement =document.querySelector("#create-poem");
poemElement.addEventListener("submit",createPoem);
