# Tic Tac Toe by Lucía Domínguez

Who didn't play Tic Tac Toe as a kid? 
Tic Tac Toe is a two player game (X and O) that consists in filling the grid until one player is able to win by filling three continues rows (vertically, horizontally or diagonally). 

This project is based primarily on **JavaScript**, using **React** for the client-side. For styling I implemented **Bootstrap** and **CSS**. This game was developed with a matrix structure to position each component of the grid and to do the winner comprobation. 


### View
You can view this project in the following  link (https://lucydoja.github.io/Tictactoe-Gato/) and explore for yourself. 

If you want to run the project on Gitpod or your CI your will have to run the following on your command line:
```
$ npm install
```
```
$ npm run start
```

### Features:
* Choose the name of the players
* Play tic tac toe until the game ends
* Restart the game
* Reset player's names 
* Written description of whose turn is it and who is the winner

### Fun fact:
In spanish (at least in Costa Rica) we call this game "gato" wich means cat in english.

### Architecture: 
This product is based on the ReactJS framework. In the file src/js/component/inicio.js you will be able to find the logic behind the tic tac toe. 
It is based on a matrix, checking horizontaly, verticaly and diagonaly for a winner each time you make a move. If no one wins it and there are no more moves to make, it is a tie!!
It was thought out as a matrix with the intention to maybe later make quantity of columns/rows configurable, the game would still work if you have 4 or more columns. 
In the file  src/js/component/home.js you can find the basic layout where the other file (inicio.js) is rendered. 
In the file src/styles/index.scss you will find the CSS file with the relevant styles for the game. 



