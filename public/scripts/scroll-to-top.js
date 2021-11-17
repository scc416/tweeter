$(document).ready(() => {
  const $toNewTweet = $("#to-new-tweet");
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

  const showAndHideButtons = (elm1, elm2) => {
    elm1.show();
    elm2.hide();
  };

  $(document).on("scroll", () => {
    const positionFromTop = $(document).scrollTop();
    const hideScrollToTopButton = positionFromTop < 100;
    if (hideScrollToTopButton) {
      showAndHideButtons($toNewTweet, $scrollToTopButton);
    }
    if (!hideScrollToTopButton) {
      showAndHideButtons($scrollToTopButton, $toNewTweet);
    }
  });
});