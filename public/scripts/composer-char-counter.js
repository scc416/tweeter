$(document).ready( () => {
    const textArea = document.getElementById("tweet-text");
    textArea.addEventListener("input", (event) => {
        console.log(document.getElementById("tweet-text").value);
    });
}

);