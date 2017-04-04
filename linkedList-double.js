var Node = function(data) {
	this.next = null;
	this.previous = null;
	this.data = data;

	this.appendToTail = function(data) {
		var end = new Node(data);
		var n = this;
		while(n.next != null) {
			n = n.next;
		}
		end.previous = n;
		n.next = end;
	}
	this.append = function(data) {
		var newNode = new Node(data);
		var n = this;

		if(n.next != null) {
			n.next.previous = newNode;
			newNode.next = n.next;
		}

		newNode.previous = n;
		n.next = newNode;
	}
}

function appendToNode(head, node, d) {
	var n = head;

	while(n.next != null) {
		if(n.next.data == node) {
			n.next.append(d);
			return n.next.next;
		}
	}
	return false;
}