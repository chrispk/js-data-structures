var Node = function(data) {
	this.next = null;
	this.data = data;

	this.append = function(data) {
		var end = new Node(data);
		var n = this;
		while(n.next != null) {
			n = n.next;
		}
		n.next = end;
	}
}

function deleteNode(head, d) {
	var n = head;

	while (n.next != null) {
		if (n.next.data == d) {
			n.next = n.next.next;
			return head;
		}
		n = n.next;
	}
	return head;
}

function printNodes(head) {
	var n = head;
	
	while(n.next != null) {
		console.log(n.data);
		n = n.next;
	}
	console.log(n.data);
	return head;
}