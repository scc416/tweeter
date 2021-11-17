/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery"s document ready function
 */

$(document).ready(() => {

  const $makeNewTweetButton = $("#make-new-tweet");
  const $makeNewTweet = $("#new-tweet");
  const $form = $("#form");
  const $count = $("#counter")
  const $error = $("#error");
  const $tweetText = $("#tweet-text");

  const escape = (str) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (tweet) => {
    const { user, content, created_at } = tweet;
    const { name, avatars, handle } = user;
    const { text } = content;
    const timePass = timeago.format(created_at);

    const $tweet = (`
    <article class="tweet">
      <header>
        <div class="name">
          <img src=${avatars}>
          ${name}
        </div>
        <div class="id">
          ${handle}
        </div>
      </header>
      <div class="content">
        ${escape(text)}
      </div>
      <footer>
        <div>
          ${timePass}
        </div>
        <div>
          <span class="fas fa-flag"></span>
          <span class="fas fa-retweet"></span>
          <span class="fas fa-heart"></span>
        </div>
      </footer>
    </article>
  `);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    const $tweetContainer = $("#tweets-container");
    for (const tweetInfo of tweets) {
      const $tweet = createTweetElement(tweetInfo);
      $tweetContainer.prepend($tweet);
    }
  };

  const loadTweets = () => {
    $.ajax("/tweets", { method: 'GET' })
    .then((tweets) => {
      renderTweets(tweets);
    });
  };



  const displayErrorMsg = (errorMsg) => {

    if (!errorMsg) return $error.slideUp();

    const errorMsgWithIcon = (`
      <i class="fas fa-exclamation-circle"></i>
      ${errorMsg}
    `);

    $error.html(errorMsgWithIcon).slideDown("slow");
  };

  $form.on("submit", (event) => {
    event.preventDefault();
    displayErrorMsg(null);

    const val = $tweetText.val();
    const numOfChar = val.length;

    const emptyTweet = numOfChar === 0;
    if (emptyTweet) {
      const errorMsg = "You cannot submit empty tweet.";
      return displayErrorMsg(errorMsg);
    }

    const tooLongTweet = numOfChar > 140;
    if (tooLongTweet) {
      const errorMsg = "You cannot submit tweet of more than 140 characters.";
      return displayErrorMsg(errorMsg);
    }

    const data = $form.serialize();
    const url = "/tweets";

    jQuery.post(url, data)
    .done(() => {
      loadTweets();
    });

    $tweetText.val("");
    $count.text("140");
    $count.toggleClass("red-text", false);
  });



  $makeNewTweetButton.on("click", () => {
    const formIsDisplayed = !$makeNewTweet.is(":hidden");

    if (formIsDisplayed) return $makeNewTweet.slideUp(300);
    if (!formIsDisplayed) {
      $makeNewTweet.slideDown(600, () => {
        $tweetText.focus();
      });
    } 
  });

  loadTweets();
});