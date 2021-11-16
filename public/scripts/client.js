/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetObj) => {
    const { user, content, created_at } = tweetObj;
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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready( () => {
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
