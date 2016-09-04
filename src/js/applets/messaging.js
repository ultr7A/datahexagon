module.exports = function () {
	return {
		name: "Messaging",
		icon: "/app/data/192/chat.png",
		options: {
			"New Message": function (p) {

			},
			"New Chat": function (p) {

			},
			"Search": function (p) {

			},
			"Options": function (p) {

			}
		},
		models: {
			contact: {
				current: 0,
				schema: {
					name: "",
					username: "",
					email: "",
					twitter: "",
					facebook: "",
					soundcloud: "",
					gmail: "",
					github: ""
				},
				all: []
			},
			messages: {
				current: 0,
				schema: {
					title: "",
					to: "",
					from: "",
					message: "",
					type: "text"
				},
				all: []
			},
			chats: {
				current: 0,
				schema: {
					to: "",
					from: "",
					room: "",
					message: "",
					type: "text"
				},
				all: []
			}
		},
		init: function (p) {
			// connect socket to app if not connected...
			// send welcome message
			// add event listener to send button
			// add socket event listener for chat message
			if(confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function (p) {

		},
		save: function (p) {},
		close: function (p) {}
	};
};
