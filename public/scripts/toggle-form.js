$(document).ready(() => {

  const $makeNewTweetButton = $("#make-new-tweet");
  const $makeNewTweet = $("#new-tweet");
  const $tweetText = $("#tweet-text");

  $makeNewTweetButton.on("click", () => {
    const formIsDisplayed = !$makeNewTweet.is(":hidden");

    if (formIsDisplayed) return $makeNewTweet.slideUp(300);
    if (!formIsDisplayed) {
      $makeNewTweet.slideDown(600, () => {
        $tweetText.focus();
      });
    } 
  });

});