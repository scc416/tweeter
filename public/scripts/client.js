/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery"s document ready function
 */

$(document).ready(() => {

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
        ${text}
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

  const $form = $("#form");
  const $tweetText = $("#tweet-text");
  const $count = $("#counter")

  $form.on("submit", (event) => {
    event.preventDefault();

    const val = $tweetText.val();
    const numOfChar = val.length;

    const emptyTweet = numOfChar === 0;
    if (emptyTweet) return alert("You cannot submit empty tweet.");

    const tooLongTweet = numOfChar > 140;
    if (tooLongTweet) return alert("You cannot submit tweet of more than 140 characters.");

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

  loadTweets();
});