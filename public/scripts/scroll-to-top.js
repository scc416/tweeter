$(document).ready(() => {
  const $scrollToTopButton = $("#scroll-to-top");
  const $tweetText = $("#tweet-text");
  const $newTweet = $("#new-tweet");

  $scrollToTopButton.on("click", () => {
    $(document).scrollTop(0);

    const formIsDisplayed = !$newTweet.is(":hidden");
    // if (formIsDisplayed) return $tweetText.focus();
    // if (!formIsDisplayed) {
    //   $newTweet.slideDown(600, () => {
    //     $tweetText.focus();
    //   });
    // }
  });

});