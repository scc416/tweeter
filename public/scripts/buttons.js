$(document).ready(() => {
  const $toNewTweetButton = $("#to-new-tweet");
  const $newTweet = $("#new-tweet");
  const $tweetText = $("#tweet-text");
  const $scrollToTopButton = $("#scroll-to-top");

  // helper function to slide down the form and focus on text area
  const showForm = () => {
    $newTweet.slideDown(600, () => {
      
      // after the form is display, focus on the text area of the form
      $tweetText.focus();
    });
  };

  // to show(slide down) or hide(slide up) the tweet form when $toNewTweetButton is clicked
  $toNewTweetButton.on("click", () => {
    // check if the form is displayed in order to decide what to do (show/hide) with the form
    const formIsDisplayed = !$newTweet.is(":hidden");

    if (formIsDisplayed) return $newTweet.slideUp(300);
    if (!formIsDisplayed) return showForm();
  });

  // get back to the top and show the tweet form (if it was hidden) when $scrollToTopButton is clicked
  $scrollToTopButton.on("click", () => {
    $(document).scrollTop(0);

    showForm();
  });

  // helper function to display one button and hide another one
  const showAndHideButtons = (elm1, elm2) => {
    elm1.show();
    elm2.hide();
  };

  // show one button and hide another one based on the position from the top of the page
  $(document).on("scroll", () => {
    const positionFromTop = $(document).scrollTop();
    const hideScrollToTopButton = positionFromTop < 100;

    if (hideScrollToTopButton) {
      showAndHideButtons($toNewTweetButton, $scrollToTopButton);
    }
    if (!hideScrollToTopButton) {
      showAndHideButtons($scrollToTopButton, $toNewTweetButton);
    }
  });
});
