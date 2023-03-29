import React from 'react';
import ReactDOM from 'react-dom/client';


import food from './food';
import {choice, remove} from './helpers'




const randFruit = choice(food)
let foodArray = food;
//console.log(foodArray);
console.log(`I'd like  one ${randFruit}, please`);                    
console.log(`Here you go: ${randFruit}`);                    
console.log(`Delicious! May I have another?`);   
foodArray = remove(foodArray, randFruit);
console.log(`I'm sorry, we're all out. We have ${foodArray.length} left`);                    


