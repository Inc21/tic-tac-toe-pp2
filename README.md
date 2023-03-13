# Tic Tac Toe

Tic-tac-toe in its purest form is well known and loved game. There is not too many people in the world who have not played this game at any point in their past.  
 Usually played with paper and pencil between two players. Game is played on three by three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players. You can play this game on any network connected device, mobile phones to large desktop, this game is fully responsive. Also has option to play against  the computer if no friend is available at the time. 

Good luck!


The link to the live website can be found [here.](https://inc21.github.io/tic-tac-toe-pp2/)


![Image to show page responsiveness on smaller screens.](/assets/images/readme_images/responsivness_mockup.png)


# User Stories

###  User who is not familiar with Tic-Tac-Toe game. 

- I want to play a game that is fun and easy to master within seconds.
- I want to see clear rules and/or instructions for the game.
- I want to be able to play this game regardless of my device screen size, power or network speed.
- I want the site to visually pleasing and have good color contrast.


### Returning user who is familiar with Tic-Tac-Toe game.

- As a returning user, I would like to find a classic game that I have played many times before.
- As a returning user, I expect all game controls to be familiar to me.
- As a returning user, I would like to see external links in case I want to learn more about Tic-Tac-Toe.

### Site owner objectives

- As a site owner, I want to provide users with well loved and fun game.
- As a site owner, I would like to tell users about the history of the game and all the different variants .
- As a site owner, I want to make it very easy for a user to pass away time, sitting on train or a bus or waiting for something etc.

# Design 


## Look and feel
  - Main background images for this game were chosen to give game very familiar to most people chalk and blackboard feel. Although white text on green background was not most visible, added just a slight text shadow. This make text pop of the screen, adds more contrast and is now very easily readable.  


## Colour
Colour's for this game are are picked very close to background images and are really fallback in case pictures fail to load. Slightly off-white #F5F5F5 is used for all the text and game symbols to give game blackboard and and chalk feel.


|![](/assets/images/readme_images/wild_sand.png)|![](/assets/images/readme_images/smalt_blue.png)|![](/assets/images/readme_images/calio.png)|


## Font

Selected Caveat Brush font style from [Google Fonts](https://fonts.google.com/specimen/Caveat+Brush/tester?preview.text=TIC%20TAC%20TOE.%20X%20O&preview.text_type=custom&query=cavea). Playful and close to handwriting style of this font suits this game very well. Font is used both in text and in game symbols.

![](/assets/images/readme_images/font_big.png)


- Fall back font is cursive, sans-serif.


## Wireframe
### Wireframe for larger screens.

Created original wireframe very early on in development process. Later on and after talking and getting advice from my mentor I changed design slightly from what was originally planned. I have decided to show and hide certain elements as needed. This makes look and feel of the game not as distracting, much cleaner and more responsive what ever the screen size. 

__Main Game Page__


![Home page wireframe](/assets/images/readme_images/desktop.png)


### Wireframe for smaller mobile screens.
![Home page wireframe](/assets/images/readme_images/mobile.png)

# Tools and technologies used
## Languages
<ul>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS</li>
</ul> 

## Other tools and programs.
<ul>
  <li><a href="https://balsamiq.com/" target="_blank">Balsamiq</a> was used for wireframing.</li>
  <li><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code.</a> Did all of my coding and synchronizing with GitHub on VS Code.</li>
  <li><a href="https://git-scm.com/" target="_blank">Git</a> for version control.</li>
  <li><a href="https://github.com/" target="_blank">GitHub</a> for hosting and deploying repositories.</li>
  <li><a href="https://fontawesome.com/" target="_blank">Font Awsome</a> for icon images.</li>
  <li><a href="https://imagecolorpicker.com/" target="_blank">imagecolorpicker.com</a> free online tool to pick the colors from the background images.</li>
  <li><a href="https://fonts.google.com/" target="_blank">Google Fonts</a> was used to import the fonts</li>
  <li><a href="https://www.grammarly.com/" target="_blank"> Grammarly</a> was used to double-check spelling mistakes.</li>
  <li><a href="https://www.createmockup.com/" target="_blank"> Createmockups.com</a> Responsive website mockup screenshot generator.</li>



## Features 

### Existing Features

__Header of the page__

![](/assets/images/readme_images/header.png)

  - Displayed throughout all the game modes. Header text is also a "home" link to navigate back to main game page.


__Options Area__

![](/assets/images/readme_images/options_area.png)
  - This screen is loaded first when the user loads up the page first. 
  - The user has to decide who they want to play against and with what symbol.
  - Once selection is made, user presses "play" to start the game.  

 __Game Board__

![](/assets/images/readme_images/game_play.png)
  - Game board consists of nine clickable squares that are filled in by JavaScript when user or computer makes it's move.
  

   __Game end and result confirmation__

![](/assets/images/readme_images/winner_x.png)
![](/assets/images/readme_images/winner_o.png)
![](/assets/images/readme_images/draw.png)
  - Displayed after all squares are filled or when there is a winner. 
  - "Play Again" button at the bottom of the the screen re-loads the game.

  __Rules__ 

![](/assets/images/readme_images/show_rules.png)
![](/assets/images/readme_images/rules.png)

  - In case that one person who knows nothing about Tic Tac Toe happens to visit this site, there is big and clearly visible rules button after the option area and before the footer. 
  - Once "Show Rules" button is clicked, it opens dark but transparent full screen window with game rules. Button it self remains in the same place but button label changes to "Hide Rules".


__The Footer__ 

![](/assets/images/readme_images/footer.png)

  - The footer is featured on both pages. Includes three links that open in a new window. 
  - Links are to Wikipedia, GitHub game repository and my Linked In page.


__The Error 404 Page__

![](/assets/images/readme_images/404_page.png)


  Read more about it, [GitHub custom 404 page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
  - This page will be displayed if any user manages to navigate to a page that does not exist.
  - Mistakes happen, this page is very valuable for the user as it shows their error whilst still keeping them on the page with easy navigation back to the home page. 


### Features Left to Implement

- While developing this game I discovered many interesting history and facts about tic tac toe. It would be great to have some of it displayed on the site.
- Add more levels of difficulty. At the moment computer is very smart, best possible outcome is draw. It would be nice to dumb it down a little. 
- Given enough time and knowhow, would like to add more game modes. Tic tac toe is quite easy game to master but there is many more challenging variations out there. For example [Misère](https://en.wikipedia.org/wiki/Mis%C3%A8re), [Wild tic-tac-toe](https://en.wikipedia.org/wiki/Wild_tic-tac-toe), [Number Scrabble](https://en.wikipedia.org/wiki/Number_Scrabble) and many more. 


## Testing 

This website was tested on as many different devices as I was able to find. Including a Dell Windows 10 laptop and desktop pc. Using Google Chrome, Microsoft Edge and Mozilla Firefox browsers. Also iPads 6th and 10th generation, iPhone SE, iPhone 12 and iPhone 13. Also used a program called [Grammarly](https://www.grammarly.com/) to check for any spelling or typing errors. Detailed actions are listed below. Additionally conducted Google lighthouse, jsHint and W3C validator testing, results for them are below.
Made sure that the website is clear and clean looking and easy to use and valuable for the user.


### User Stories Testing


| __Expectation__ | __Result__ | __Images__ |
|----|----|----|
| I want to play a game that is fun and easy to master within seconds. | Not many games easier to master than tic-tac-toe. Although can't really test the fun element but I have tested it on my teenage daughter and she got hang of it within game or two  |  |
| I want to see clear rules and/or instructions for the game. | Clear "show Rules" button always displayed on the screen | ![](/assets/images/readme_images/show_rules_small.png) |
| I want to be able to play this game regardless of my device screen size, power or network speed. | Game tested with Google inspect tool. Using iPhone SE and throttled down to lowest available setting. Some minor delay in click responses as expected but still very playable. | ![](/assets/images/readme_images/google_low_mobile_small.png) |
| I want the site to visually pleasing and have good color contrast. | Adding black text shadow to on screen text makes very easy on users eyes as been tested my friends and classmates on Slack |  |
| As a returning user, I would like to find a classic game that I have played many times before. | Tic-Tac-Toe is as classic as they get and this version has only original rules and game modes.  |  |
| As a returning user, I expect all game controls to be familiar to me. | Game is played mouse and single mouse button click. As an option game can be navigated and played with using keyboard Tab and Enter.  |  |
| As a returning user, I would like to see external links in case I want to learn more about Tic-Tac-Toe. | Game has a footer at the bottom with links that will open in a new window. One of them is Wikipedia where everything about the game can be learned. | ![](/assets/images/readme_images/footer_small.png) |
| As a site owner, I want to provide users with well loved and fun game. |  | ![](/assets/images/readme_images/game_play_small.png) |
| As a site owner, I would like to tell users about the history of the game and all the different variants. | All the history and game variants are well documented on tic-tac-toe Wikipedia page. | ![](/assets/images/readme_images/wikipedia_small.png) |
| As a site owner, I want to make it very easy for a user to pass away time, sitting on train or a bus or waiting for something etc. | Game has no large images or complicated content, perfect for areas with lower network speeds. |  |




### Link testing


| __Action__ | __Expected Result__ | __Actual Result__ |
|---|---|---|
| Click on website url: [https://inc21.github.io/tic-tac-toe-pp2/](https://inc21.github.io/tic-tac-toe-pp2/) | Open 'Home Page' of the website | Working as expected |


### Header text link testing.


| __Action__ | __Expected Result__ | __Actual Result__ |
|---|---|---|
| Click on the header text "Tic-Tac-Toe". | Reload page or move to 'Home Page' | Working as expected |


### Options area testing.
| __Action__ | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| User clicks on "play" button without selecting any option | Required opponent options turn red and message "PLEASE CHOOSE YOUR OPPONENT" with red background is displayed. | Working as expected | ![](/assets/images/readme_images/options_area_no_opponent_260px.png) |
| User selects opponent | Red message disappears and flashing arrow is displayed. | Working as expected | ![](/assets/images/readme_images/options_area_computer.png) |
| User has opponent selected but no symbol then clicks on "play" button | Required symbol options turn red and message "PLEASE CHOOSE YOUR SYMBOL" with red background is displayed. | Working as expected | ![](/assets/images/readme_images/options_area_no_symbol_260px.png) | 
| User selects symbol | Red message disappears and flashing arrow is displayed. | Working as expected | ![](/assets/images/readme_images/options_area_all.png) |
| Once user has made both selections and clicks play "button" | Main game board is loaded. | Working as expected. | ![](/assets/images/readme_images/game_board_small.png) |


### Game area testing.
| __Action (Opponent: Computer, Symbol: X__) | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| Blank game board loads and the user always has to make the first move. |  | Working as expected | ![](/assets/images/readme_images/game_board_small.png) |
| The user clicks on any of the nine game squares | Square is marked with chosen symbol and computer makes it's move | Working as expected | ![](/assets/images/readme_images/box0_comp4.png) |
| The user tries to click on the square that is already played | Nothing happens, box un-clickable. | Working as expected | ![](/assets/images/readme_images/box0_comp4.png) |
| When all nine squares are filled and the user or computer did not get three in a row | Display game over window with "It's a Draw" text and "Play Again" button | Working as expected | ![](/assets/images/readme_images/draw_small.png) |
| The user clicks on "Play Again" button | Page reloads and opens back to the options area | Working as expected | ![](/assets/images/readme_images/options_area_260px.png) |
| When computer manages to get three of it's symbols in a row. | Display game over window with "The Winner Is" text and computer's current symbol. | Working as expected | ![](/assets/images/readme_images/winner_o_small.png) |
| __NB: It's not possible to win a game with computer__ | | Computer is too smart. | |


| __Action (Opponent: Friend, Symbol: X__) | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| Blank game board loads and the user always has to make the first move. |  | Working as expected | ![](/assets/images/readme_images/game_board_small.png) |
| The user clicks on any of the nine game squares | Square is marked with chosen symbol and when friend clicks on one of the other remaining square, it's marked with other symbol  | Working as expected | ![](/assets/images/readme_images/box6_comp5.png) |
| When all nine squares are filled and the user or a friend did not get three in a row | Display game over window with "It's a Draw" text and "Play Again" button | Working as expected | ![](/assets/images/readme_images/draw_small.png) |
| The user clicks on "Play Again" button | Page reloads and opens back to the options area | Working as expected | ![](/assets/images/readme_images/options_area_260px.png) |
| The user or a friend manage to get three of their symbols in a row |  Display game over window with "The Winner Is" text and current players symbol and "Play Again" button | Working as expected | ![](/assets/images/readme_images/winner_x_small.png) |


### Rules area testing.
| __Action__ | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| In any stage of the game, when the user clicks on "Show Rules" button | Open game rules full screen window. | Working as expected | ![](/assets/images/readme_images/show_rules_small.png) ![](/assets/images/readme_images/rules_small.png)|
| Once game rules are open button label text changes to "Hide Rules" | Button text changes but position does not and it is only button available for the user | Working as expected | ![](/assets/images/readme_images/hide_rules_small.png) |
| The user clicks on "Hide Rules" button | Rules window closes revealing game in a previous state | Working as expected | ![](/assets/images/readme_images/box0_comp4.png) |


### Footer at the bottom of the page and social media links.
| __Action__ | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| Click on Wikipedia icon (first from left) | Open Tic-Tac-Toe Wikipedia page. Page opens in a new window | Working as expected | ![](/assets/images/readme_images/wikipedia_small.png)
| Click on GitHub icon (second from left) | Open game authors GitHub page. Page opens in a new window | Working as expected | ![](/assets/images/readme_images/github_small.png) |
| Click on linkedIn icon (Third from left) | Open creators linkedInd page. Page opens in a new window | Working as expected | ![](/assets/images/readme_images/linkedin_small.png) |


### 404-page testing.
| __Action__ | __Expected Result__ | __Actual Result__ | __Image__ |
|---|---|---|---|
| on 404.html Page click anywhere on the text "Click here to go back to the home page" | Main game page or "Home" page reloads | Working as expected | ![](/assets/images/readme_images/404_page_small.png) |


### jsHint Testing


Testing with [jsHint](https://jshint.com/)

Very new to JavaScript and jsHint and could not figure out a way to test multiple javaScript files connected to the same website. Having JavaScript in three separate files made it for manageable for me and also makes it clearer for a future maintainer.


- rules.js
- jsHint reporting that there is one unused variable. showHide() is a function that is called when user clicks on "show rules" button


![](/assets/images/readme_images/jshint_rules.png)


- options.js
- Missing '()' invoking a constructor - adding () will brake the game. Init is game initializing function that is called in main.js. gameOverElement is called in main.js after game is completed


![](/assets/images/readme_images/jshint_options.png)


- main.js
- Had trouble with jsHint loading this file. It would only load when I delete first line of the code making fallowing warnings somewhat questionable.


![](/assets/images/readme_images/jshint_main.png)


### Validator Testing 

- HTML
  - Some errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html). Thirteen occurrence's of Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values. All errors were immediately fixed. 

  ![](/assets/images/readme_images/w3c_html_validator.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css).


  ![](/assets/images/readme_images/w3c_css_validator.png)
  <p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>


__Google Lighthouse testing__ 
- Testing was performed in private browsing mode.


Desktop


![](/assets/images/readme_images/lighthouse_desktop.png)
- Reason for slightly lower performance score on desktop mode is mostly due to background image rendering.


Mobile


![](/assets/images/readme_images/lighthouse_mobile.png)


## Interesting bug or problems.
  - This whole project has been one interesting learning curve.
  - Was suggested by my mentor to display some error message when the user did not make a selection. It took many many hours to figure out how to do this. There is two sections to the options and two buttons each. My challenge was to figure out how to display correct message when any of the button is selected or not selected.
  - As recommended by one of my class mates on slack. Computer made it's move too quick. After bit of research and a lot of trial and error managed to add small random delay to computers responses. Using math.random function computer now has 0 - 1 second delay. It makes the game look like computer thinks for a moment before move is made.
  - Wanted to make this game more accessible. Decided to make the game so that the user can navigate and play with keyboard only. After spending more hours at this I'm very happy with the final outcome. Now everything, including all individual boxes are selectable and clickable using keyboard only and have very clear focus around them.

## Unfixed Bugs

After rigorous testing with various online tools and my own limited testing with different devices and browsers, all known warnings and errors returned were rectified.

## Deployment

### Deploy with GitHub Pages.

 The steps to deploy are as follows: 
  - On my [GitHub](https://github.com/Inc21) profile page, top centre of the screen click on repositories.
  - Click on tic-tac-toe-pp2
  - In the tic-tac-toe-pp2 repository, navigate to the Settings tab.
  - Menu list on the left of the screen, navigate to the pages tab. 
  - From the GitHub pages, branch section drop-down menu, select the main Branch and hit the save button.
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://inc21.github.io/tic-tac-toe-pp2/

### Local Deployment
The steps to deploy are as follows:
  - On my [GitHub](https://github.com/Inc21) profile page, top centre of the screen click on repositories.
  - Click on
  - In the tic-tac-toe-pp2 repository, click on the 'Code' button.
  - Menu that opens make sure you are in "local" tab, copy the link in "HTTPS". 
  - on a Windows machine, open the command prompt (press windows+R to open the "Run" box. Type "cmd" on then click ok).
  - In cmd type "git clone" and paste the link you copied earlier (ctrl+V). Example: git clone 

### Fork repository
  - To fork a repository that is not yours
  - Click on the 'Fork' button on the top right of the screen
  - On the 'Create a new fork' page you are given the option to rename that repository and then click on the green 'Create fork' button at the bottom of the form.


## Content 

- Game rules and other content can be found on [Tic-Tac-Toe Wikipedia page](https://en.wikipedia.org/wiki/Tic-tac-toe)

## Media


Royalty free images were taken from [Pexels](https://www.pexels.com/)
- Background image (green board) - [green board](https://www.pexels.com/photo/person-holding-white-chalk-625219/)
- footer background (wood) -  [wood](https://www.pexels.com/photo/brown-wooden-surface-139306/)


# Credits 
Would like to say thanks to all for the support throughout the project.
- [Code Institute](https://codeinstitute.net/ie/) for pointing me to this interesting direction.
- [Slack community](https://slack.com/intl/en-ie/) and my classmates for tips and trick and entertainment.
- YouTube user [Code Explained](https://www.youtube.com/@CodeExplained) who's explanations really suited me and he made things much clearer for me.
- My mentor who is continuously very supportive and knowledgeable.
