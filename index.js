'use strict';

const List = require('./lib/list');

const numList = new List();

numList.addNodeWithValue(3);
numList.addNodeWithValue(4);
numList.addNodeWithValue(5);
numList.addNodeWithValue(6);

console.log(numList.toString());
numList.removeFistNode();
console.log(numList.toString());
numList.removeLastnode();
console.log(numList.toString());
numList.removeLastnode();
console.log(numList.toString());
numList.removeLastnode();
console.log(numList.toString());
numList.removeLastnode();
console.log(numList.toString());
numList.addNodeWithValue(6);
console.log(numList.toString());
numList.removeFistNode();
console.log(numList.toString());
numList.removeFistNode();
console.log(numList.toString());
