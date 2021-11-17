$(document).ready(() => {
  const $toNewTweet = $("to-new-tweet");
  const $newTweet = $("#new-tweet");
  const $tweetText = $("#tweet-text");
  const $scrollToTopButton = $("#scroll-to-top");

  $scrollToTopButton.on("click", () => {
    $(document).scrollTop(0);

    const formIsDisplayed = !$newTweet.is(":hidden");
    if (!formIsDisplayed) {
      $newTweet.slideDown(600, () => {
        $tweetText.focus();
      });
    }
  });

  $(document).on("scroll", () => {
    const positionFromTop = $(document).scrollTop();
    const hideScrollToTopButton = positionFromTop < 100;
    if (hideScrollToTopButton) {
      $toNewTweet.show();
      $scrollToTopButton.hide();
    }
    if (!hideScrollToTopButton) {
      $toNewTweet.hide();
      $scrollToTopButton.show();
    }
  });

});