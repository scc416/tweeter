$(document).ready(() => {

  const $toNewTweetButton = $("#to-new-tweet");
  const $newTweet = $("#new-tweet");
  const $tweetText = $("#tweet-text");

  $toNewTweetButton.on("click", () => {
    const formIsDisplayed = !$newTweet.is(":hidden");

    if (formIsDisplayed) return $newTweet.slideUp(300);
    if (!formIsDisplayed) {
      $newTweet.slideDown(600, () => {
        $tweetText.focus();
      });
    } 
  });

});