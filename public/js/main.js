var socket = io.connect('http://localhost:3000');

socket.on('add user', function (data) {
   test.users.push(data);
});

var test = new Vue({
	el: '#test',

	data: {
		username: null,
		users: []
	},

	methods: {
		sureSend: function() {
			socket.emit('add user', this.username);
		}
	}
});

