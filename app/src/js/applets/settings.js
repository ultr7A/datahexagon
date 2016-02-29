module.exports = function () {
	return {
		name: "Settings",
		icon: "/app/data/192/circle.png",
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
		init: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
