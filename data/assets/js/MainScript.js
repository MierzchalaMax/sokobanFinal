// import {Game} from 'engine/Game.js';
// import '/Level.js';

// var game = new Game();
let lvl = levelMaker(3);
console.table(lvl);
let game = new Game(lvl);
console.table(game);

