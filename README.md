#  Assignment 1 Game Design Report

 

## **1. Introduction**

### <u>*History*</u>

The original of this kind of game is developed by a nineteen-year-old boy, Gabriele Cirulli, in a single weekend as a test to see if his program knowledge support him to do more on his interest. He described it as being “conceptually similar” to the recently released IOS game *Threes*, and a clone of another game *1024*. And as time went on, he surprisingly found that his new game received thousands of likes and even over 4 million visitors in less than a week. The game is free to play and Cirulli said he was not willing to make money based on a concept that was not invented by him. And nowadays, it has become one of the most well-known puzzle games on no matter Android, iOS or PC (see figure1).

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

### <u>*My Design and Implementation*</u>

According to the game prototype of *2048* developed by Gabriele Cirulli, I was inspired and redesigned some original elements to establish my own version. From the game interface perspective, I put the main game content on the center of the whole web page and designed the interface to be long and thin so that the game can also fit the smartphone screen when it run on mobile devices. From the basic element perspective, I changed the color of background and the basic blocks. For example, I applied iridescent gradient colors and levels to basic blocks like “2”, “4” and larger number blocks. From multiple media perspective, I added a background music and a screen recording function for users. Also, switching interfaces before and after the game improves the enjoyment and interactivity.

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image004.png)

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image006.png)                                              ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image008.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image010.png)

 

 

## **2.Gameplay**

### <u>*Purpose*</u>

The purpose of 2048 is very simple: eventually make a “2048” number block on the plain 4*4 grid board. By using four arrow keys, user can slide all the numbered blocks towards a special direction. Every turn, a new number block randomly appears in an empty spot on the board with a value of either 2 or 4. If two number blocks of the same value collide with each other whiling moving, they will merge in to one number block with the value of their summation. Therefore, user can finally get a very large 2048 by accumulating this operation.

 

### <u>*Logic*</u>

Based on the purpose of this game, the logic of judging game success and game over are developed not too complex. If the movement results in creating a “2048” number block, then the game is won. If the board is full of new-created number blocks and user is not able to move or merge the number blocks anymore, the game is failed. And on the upper right of the board, the score is calculated and shown to users each time after operation.

 

Furthermore, when users play the game, they may encounter some situations that are ambiguous, so here I describe them clearly. If three number blocks with same value are adjacent in a row and user hopes to merge them along the sequenced direction, only the two number blocks farthest long the direction of motion will combine. If all four spaces in a row or a column are filled with number blocks with same value, a move parallel to that row/column will combine the first two and the last two. Another thing to emphasize is that score of the game is independent for each single round. The score is calculated based on how many number blocks user has merged, but not how many turns he/she has made.

 

## **3.Design Issues and Related work**

In this part, I’ll talk about the design issues applied in this project. Some of design concepts are come from the internet and others are from what I learnt from the course to elevate the original prototype. 

### ·    *Color and Tone*

Color often plays an important role in visual design, affecting visual hierarchy and the meaning of each element. In this project, the colors of main number block elements are based on the rainbow. The best advantage is that these colors are continuous so that users will feel the colors become more and more bright, which can improve enjoyment and inspiration. At the same time, two number blocks at lower color level merge to a new number block at high color level is rigorous and reasonable. 

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image013.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image015.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image017.png)

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image019.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image021.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image023.png)

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image025.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image027.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image029.png)

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image031.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image033.png)



In addition, not only the game provides many colorful blocks, but also the design fully take persona with visual impairment into consideration. For instance, when I low down the contrast of the game, the identification degree of each game element is still in an acceptable level. Therefore, the game can be played by almost all players, including visually impaired people and elderly people with color weakness.

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image036.png)

### ·    *Gestalt Principles*

During the development of the game, I closely followed the rules of Gestalt Principles.

*Low of Symmetry:* the overall interface is in the middle of the webpage, and the BGM control button, score record box is placed as symmetrical distribution with the central axis of the board.

*Low of Common Fate*: Each of the number blocks has the same size can be easily perceived as a unit.

### ·    *Layout Grids*

A layout grid is a geometrical division of the page that can be used to structure the placement of text blocks and images. In this game, I divide the page into mainly 3 grids: header, main body and footer. The BGM controller, game title and score summation are put in header. The game operation board are listed at the visual center of the page. The restart button, record button together with a developer if are composed the footer. These three parts stay in harmony to consist the overall game interface.

![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image041.png) ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image043.png) ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image045.png)

### ·    *Semiotics*

Semiotics is the study of systems of signs and the relationship between signifier and signified within them. In this game, instead of directly using text to represent the corresponding function, I apply several icons to represent each of its meaning. Foe example, when player hover on these button icons, the color will change and the text also explain its real function even though player does not know the meaning just from the icon. Red color of [Reset] warns player to do this operation carefully, and green color to metaphor the current operation is safe.

![Text Box:   hover](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image046.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image047.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image049.jpg)     ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image051.jpg)

![Text Box:   hover](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image052.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image053.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image055.jpg)      ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image057.jpg)

 

What’s more, a music icon is provided at the top left to let player control the BGM playing. By default, the BGM is paused. If player feel like to listen to BGM, click on the image and the BGM will b played. And clicking again leads the BGM to paused.

![Text Box: click](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image058.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image059.png)![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image060.png)       ![img](file:///C:/Users/HUIMCH~1/AppData/Local/Temp/msohtmlclip1/01/clip_image062.png)

 

## **4.Usage Guideline**

Here I only support one way to run the game.

1. Download the .zip file and decompress.

2. Run [start_game.html] on your own browser.

## **5.Assets Origin**

Icons: https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css

Pallet: [在线调色板-BeJSON.com](https://www.bejson.com/ui/getcolor/)

Concept prototype: [2048 (play2048.co)](https://play2048.co/)

 
