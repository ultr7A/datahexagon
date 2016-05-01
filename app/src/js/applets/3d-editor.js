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
		init: function (p) {
			if(confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
