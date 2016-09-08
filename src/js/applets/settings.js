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
			alert("App not implemented\nContact openspacehexagon@gmail.com for more info.")
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
