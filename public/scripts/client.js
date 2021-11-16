/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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



const renderTweets = function(tweets) {
  for (const key in tweets) {
    const info = tweets[key];
    const $tweet = createTweetElement(info);
    $('#tweets-container').append($tweet);
  }
}

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
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready( () => {
  renderTweets(data);
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
