module.exports = function () {
	return {
		name: "Animation Editor",
		icon: "/data/192/circle.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			animation: {
				current: 0,
				schema: {
					resource: "",
					username: "",
					type: ""
				},
				all: []
			}
		},
		init: function (p) {
			alert("App not implemented\nContact openspacehexagon@gmail.com for more info.")
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
