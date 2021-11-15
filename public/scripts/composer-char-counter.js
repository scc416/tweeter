$(document).ready( () => {
    
    $("#tweet-text").on("input", (event) => {
        const val = $("#tweet-text").val();
        const numOfChar = val.length;
        const charLeft = 140 - numOfChar;
        $("#counter").text(charLeft);

        const tooManyChar = charLeft < 0;
        $("#counter").toggleClass( "red-text", tooManyChar);  
    });
});