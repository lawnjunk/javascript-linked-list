'use strict';

const Node = require('./node');

const List = module.exports = function(){
  const head = null;
};

List.prototype.addNodeWithValue = function(value){
  const node = new Node(value)

  if (!this.head){
    this.head = node;
    return;
  }

  this.head.addNode(node);
};

List.prototype.removeFistNode = function(){
  if (this.head && this.head.next){
    this.head = this.head.next;
    return;
  }
  this.head = null;
};

List.prototype.removeLastnode = function(){
  var current = this.head;
  var done = false;

  if (this.head) {
    var last = this.head;
    if (this.head.next){
      var current = this.head.next
      while(!done){
        if (!current.next) {
          done = true;
          continue;
        }
        last = current;
        current = current.next;
      }     
      last.next = null;
      return;
    }
    this.head = null;
  }
};

List.prototype.toString = function(){
  var current = this.head;
  var result = 'List < ';
  if (current){
    while (current){
      result += `${current.value} `
      current = current.next;
    }
  }
  result += '>';
  return result;
};
