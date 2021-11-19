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

![final-product.png](./docs/final-product.png)
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

### Responsive Design
![responsive.gif](./docs/responsive.gif)
The web page has two layouts on different screen sizes (Breakpoint: 1024px)

&nbsp; 

### Submit new tweet with form
![write-tweet.gif](./docs/write-tweet.gif)

&nbsp; 

### Toggle form & Go to top of the page
![buttons.gif](./docs/buttons.gif)

&nbsp; 

![error_message.gif](./docs/error_message.gif)

&nbsp; 

![error-with-promise.gif](./docs/error-with-promise.gif)

&nbsp; 

![error-without-promise.gif](./docs/error-without-promise.gif)

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
 ┃ ┣ 📂vendor
 ┃ ┃ ┣ 📜jquery-2.2.3.min.js
 ┃ ┃ ┗ 📜normalize-4.1.1.css
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
Store image and animated GIF that are displayed in this README document. These files are not included on the diagram above.
&nbsp; 


### 📂public

#### 📂images
📜profile-hex.png
####  📂scripts
 ┃ ┃ ┣ 📜buttons.js
 ┃ ┃ ┗ 📜load-tweets-submit-tweet.js
####  📂styles
 ┃ ┃ ┣ 📜header.css
 ┃ ┃ ┣ 📜layout.css
 ┃ ┃ ┣ 📜nav.css
 ┃ ┃ ┣ 📜new-tweet-form.css
 ┃ ┃ ┣ 📜scroll-to-top.css
 ┃ ┃ ┗ 📜tweets.css
####  📂vendor
 ┃ ┃ ┣ 📜jquery-2.2.3.min.js
 ┃ ┃ ┗ 📜normalize-4.1.1.css
####  📜index.html

 &nbsp; 

 ### 📂sass
 #### 📜_mixins.scss
 #### 📜_variables.scss
 #### 📜header.scss
 #### 📜layout.scss
 #### 📜nav.scss
 #### 📜new-tweet-form.scss
 #### 📜scroll-to-top.scss
 #### 📜tweets.scss

 &nbsp; 

### 📂server

 &nbsp; 


### 📜.gitignore
This file is to ignore the `node_modules` folder and `.DS_store`.

 &nbsp; 

### 📜README.md

 &nbsp; 

### 📜package-lock.json

  &nbsp; 

### 📜package.json