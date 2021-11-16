$(document).ready(() => {
  const $tweetText = $("#tweet-text");
  const $count = $("#counter");

  $tweetText.on("input", () => {
    const val = $tweetText.val();
    const numOfChar = val.length;
    const charLeft = 140 - numOfChar;
    $count.text(charLeft);

    const tooManyChar = charLeft < 0;
    $count.toggleClass("red-text", tooManyChar);
  });
});