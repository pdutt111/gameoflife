/**
 * Created by pariskshitdutt on 08/03/15.
 */
var a=[[".",".",".",".",".",".",".","."],
       [".",".",".","*","*","*",".","."],
       [".",".",".",".",".",".",".","."],
       [".",".",".",".","*",".",".","."]];
var game=require('./gameoflife.js');
    a=game.nextGen(a);
console.log(a);