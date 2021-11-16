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

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const $form = $("#form");
  const $tweetText = $("#tweet-text");
  const $count = $("#counter")

  $form.on("submit", (event) => {
    event.preventDefault();

    const data = $form.serialize();
    const url = "/tweets";

    jQuery.post(url, data);
    $tweetText.val("");

    $count.text("140");
    $count.toggleClass("red-text", false);
    
  });

  renderTweets(data);
});