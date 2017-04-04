var Queue = function() {
	this.next = null;
	this._size = 0;

	this.first = null;
	this.last = null;
}

var Node = function(data) {
	this.data = data;
	this.next = null;
}

Queue.prototype.add = function(data) {
	var node = new Node;
	node.data = data;

	if(this.last !== null) {
		this.last.next = node;
	}
	this.last = node;
	if(this.first === null) {
		this.first = this.last;
	}
	this._size++;
	return true;
}

Queue.prototype.remove = function() {
	if(this._size < 1) {
		return false;
	}
	var temp = this.first;
	this.first = this.first.next;
	if(this.first === null) {
		last = null;
	}
	this._size--;
	return temp.data;
}

Queue.prototype.peek = function() {
	if(this._size < 1) {
		return false;
	}
	return this.first.data;
}

Queue.prototype.isEmpty = function() {
	if (this.first === null) {
		return true;
	}
	return false;
}

var queue = new Queue();
var count = 0;
queue.add(count);
count++;
queue.add(count);
count++;
queue.add(count);
count++;