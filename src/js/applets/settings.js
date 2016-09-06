module.exports = function () {
	return {
		name: "Settings",
		icon: "/data/192/circle.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			setting: {
				current: 0,
				schema: {
					name: "",
					value: "",
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
