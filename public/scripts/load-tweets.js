$(document).ready(() => {

  const $tweetContainer = $("#tweets-container");

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