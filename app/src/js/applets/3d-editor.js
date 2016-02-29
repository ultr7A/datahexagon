module.exports = function () {
	return {
		name: "3D Editor",
		icon: "/app/data/192/cube.png",
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
		init: function (p) {},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
