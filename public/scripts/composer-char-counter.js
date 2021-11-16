$(document).ready( () => {
    const tweetText = $("#tweet-text");
    
    tweetText.on("input", () => {
        const val = tweetText.val();
        const numOfChar = val.length;
        const charLeft = 140 - numOfChar;
        $("#counter").text(charLeft);

        const tooManyChar = charLeft < 0;
        $("#counter").toggleClass( "red-text", tooManyChar);  
    });
});