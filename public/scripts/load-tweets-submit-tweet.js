$(document).ready(() => {

  const $form = $("#form");
  const $tweetText = $("#tweet-text");
  const $error = $("#error");
  const $count = $("#counter");
  const $tweetContainer = $("#tweets-container");

  $tweetText.on("input", () => {
    const val = $tweetText.val();
    const numOfChar = val.length;
    const charLeft = 140 - numOfChar;
    $count.text(charLeft);

    const tooManyChar = charLeft < 0;
    $count.toggleClass("red-text", tooManyChar);
  });

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

    const $tweet = $(`
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

  loadTweets();
});