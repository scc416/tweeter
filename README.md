# Tweeter Project

Tweeter is a simple, single-page Twitter clone.  
This project is Built on [the tweeter template](https://github.com/lighthouse-labs/tweeter) by [@lighthouse-labs](https://github.com/lighthouse-labs).

&nbsp;

## Table of Content

- [Final Product](#final-product)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Features](#features)
- [File Structure](#file-structure)

&nbsp;

## Final Product

![write-tweet.gif](./docs/write-tweet.gif)
View the functionalities (with animated GIF) in [Features](#features) section.

&nbsp;

## Dependencies

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [body-parser](https://github.com/expressjs/body-parser)
- [chance](https://chancejs.com/)
- [nodemon](https://github.com/remy/nodemon) (for development)
- [sass](https://sass-lang.com/) (for development)

&nbsp;

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. (For developtment) another option to start the web server is using the `npm run local` command. [Nodemon](https://github.com/remy/nodemon) will monitors for any changes in the source code and automatically restart the server.
6. (For developtment) the `npm run sass-watch` command enable the sass application to look in the sass directory for any scss files that are created or updated. If there is a change, the corresponding css file in the public/styles directory will be created or updated.

&nbsp;

## Features

### 1. Submit new tweet with form

![write-tweet.gif](./docs/write-tweet.gif)
When a user submits a valid tweet, the new tweet is displayed.

&nbsp;

### 2. Toggle form & Go to top of the page

![buttons.gif](./docs/buttons.gif)

**Compose button in the navigation bar**

When a user clicks this button:

- if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
- if the Compose Tweet box is currently showing, then it is hidden

&nbsp;

**Back to top botton in the lower right hand corner**

When a user scrolls, a "back to top" button appears
When the user clicks this button, they are brought back up to the top of the page, and:

- if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
- if the Compose Tweet box is currently showing, then the textarea inside it is auto-focused

&nbsp;

### 3. Display error message

![error_message.gif](./docs/error_message.gif)
When a user submits an invalid tweet (empty or contains more than 140 characters), an error message is displayed.

&nbsp;

### 4. Responsive Design

![responsive.gif](./docs/responsive.gif)
The web page has two layouts on different screen sizes (Breakpoint: 1024px).

&nbsp;

## File Structure

<pre>
📦tweeter
 ┣ 📂docs
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜profile-hex.png
 ┃ ┣ 📂scripts
 ┃ ┃ ┣ 📜buttons.js
 ┃ ┃ ┗ 📜load-tweets-submit-tweet.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜header.css
 ┃ ┃ ┣ 📜layout.css
 ┃ ┃ ┣ 📜nav.css
 ┃ ┃ ┣ 📜new-tweet-form.css
 ┃ ┃ ┣ 📜scroll-to-top.css
 ┃ ┃ ┗ 📜tweets.css
 ┃ ┗ 📜index.html
 ┣ 📂sass
 ┃ ┣ 📜_mixins.scss
 ┃ ┣ 📜_variables.scss
 ┃ ┣ 📜header.scss
 ┃ ┣ 📜layout.scss
 ┃ ┣ 📜nav.scss
 ┃ ┣ 📜new-tweet-form.scss
 ┃ ┣ 📜scroll-to-top.scss
 ┃ ┗ 📜tweets.scss
 ┣ 📂server
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
</pre>

### 📂docs

Store image and animated GIF that are displayed in this README document. These files are not included in the diagram above.

### 📂public

#### 📂images

Contain `profile-hex.png` for the profile picture in page header.

#### 📂scripts

Contain `buttons.js` and `load-tweets-submit-tweet.js`, which responsible for listening on events and then manipulate the html document.

#### 📂styles

Contains the compiled `CSS` files by `Sass`. Partials Sass files are not compiled into a separated CSS file.

#### 📜index.html

The `html` file that is rendered by the server.

### 📂sass

Contains all the sass file. sass watches the files in this folder when command `npm run sass-watch` is used in terminal.

#### 📜_mixins.scss

Contains all the mixins for other `Scss` files.

#### 📜_variables.scss

Contains all the variables for other `Scss` files.

#### 📜Other Scss files

`header.scss`, `layout.scss`, `nav.scss`, `new-tweet-form.scss`, `scroll-to-top.scss`, `tweets.scss` manage the style of the corresponding section

### 📂server

Contain the `Javascript` and `JSON` file for the server and database.
&nbsp;

### 📜.gitignore

This file is to ignore the `node_modules` folder and `.DS_store`.

### 📜README.md

This document that you are reading.

### 📜package.json

This file contains:

- the list of dependencies (node libraries that the executable code (and development code) needs)
- dev-dependencies: node libraries only needed by development tools</li>
- scripts: Define the in-project shortcut commands, therefore using `npm start`, `npm run local`, `npm run sass-watch` is equivalent to calling script value
