$(document).ready(() => {
  const $form = $("#form");
  const $tweetText = $("#tweet-text");
  const $error = $("#error");
  const $count = $("#counter");
  const $tweetContainer = $("#tweets-container");

  // display the word count and update color when there is input into the text area of the form
  $tweetText.on("input", () => {
    const val = $tweetText.val();
    const numOfChar = val.length;
    const charLeft = 140 - numOfChar;
    $count.text(charLeft);

    const tooManyChar = charLeft < 0;
    $count.toggleClass("red-text", tooManyChar);
  });

  // function that return promise to slide up and empty the error message
  const clearErrorMsg = () => {
    return new Promise((resolve, reject) => {
      $error.slideUp(() => {
        $error.text("");
        resolve();
      });
    });
  };

  // helper function to display the error message with an icon
  const displayErrorMsg = (errorMsg) => {
    const errorMsgWithIcon = `
      <i class="fas fa-exclamation-circle"></i>
      ${errorMsg}
      `;
    $error.html(errorMsgWithIcon).slideDown("slow");
  };

  // show whether to display error msg or submit the tweet when submit button is clicked
  $form.on("submit", (event) => {
    event.preventDefault();

    // hide the error message first, no matter if there is any errors
    // it is a promise, so that the new error message is not displayed until the previous error (if there is any) is slided up and clear
    clearErrorMsg()
      .then(() => {
        const val = $tweetText.val();

        // character count of the value in the text area
        const numOfChar = val.length;

        const emptyTweet = numOfChar === 0;
        
        if (emptyTweet) {
          const errorMsg = "You cannot submit empty tweet.";
          displayErrorMsg(errorMsg);
        }
        
        const tweetToLong = numOfChar > 140;
        if (tweetToLong) {
          const errorMsg = "You cannot submit tweet of more than 140 characters.";
          return displayErrorMsg(errorMsg);
        }

        // convert the input into query string for the server
        // server is configured to receive form data formatted as a query string
        const data = $form.serialize();
        const url = "/tweets";

        // use jQuery library to submit a POST request
        jQuery.post(url, data).done(() => {
          // load the tweets when the new tweet is submitted
          loadTweets();
        });

        // reset the text area
        $tweetText.val("");

        // reset the count (and class)
        $count.text("140");
        $count.toggleClass("red-text", false);
      });
  });

  // helper function to prevent XSS
  const escape = (str) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // helper function to make tweet element
  const createTweetElement = (tweet) => {
    const { user, content, createdAt } = tweet;
    const { name, avatars, handle } = user;
    const { text } = content;
    const timePass = timeago.format(createdAt);

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

  // helper function to loop an array of tweet information to make element
  // then add the element right after the start tag of the container
  const renderTweets = (tweets) => {
    $tweetContainer.html("");
    for (const tweetInfo of tweets) {
      const $tweet = createTweetElement(tweetInfo);
      $tweetContainer.prepend($tweet);
    }
  };

  // get all the tweet information from the database and use the result to load the tweets
  const loadTweets = () => {
    $.ajax("/tweets", { method: "GET" }).then((tweets) => {
      renderTweets(tweets);
    });
  };

  // load tweet when the page is first loaded
  loadTweets();
});
