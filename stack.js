function Stack() {
	this.top = null;
	this._size = 0;
}

function Node(data) {
	this.data = data;
	this.next = null;
}

Stack.prototype.push = function(data) {
	var node = new Node(data);

	node.next = this.top;
	this.top = node;
	this._size++;
	return;
}

Stack.prototype.pop = function() {
	if(this._size > 0) {
		var temp = this.top;
		this.top = this.top.next;
		this._size--;
		return temp.data;
	}
	
	return false;
}

Stack.prototype.peek = function() {
	if(this._size > 0) {
		return this.top.data;
	}
	return false;
}

Stack.prototype.isEmpty = function() {
	if(this._size === 0) {
		return true;
	}
	return false;
}
var stack = new Stack();
var count = 0;
stack.push(count);
count++;
stack.push(count);
count++;
stack.push(count);
count++;

/*
var Stack = function(){
  this.top = null;
  this.size = 0;
};

var Node = function(data){
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};*/