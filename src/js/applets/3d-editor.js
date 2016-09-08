module.exports = function () {
	return {
		name: "3D Editor",
		icon: "/data/192/cube.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			object: {
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
