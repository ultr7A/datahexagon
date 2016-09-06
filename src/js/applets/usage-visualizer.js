module.exports = function () {
	return {
		name: "Disk Usage Visualizer",
		icon: "/data/192/circle.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			visualization: {
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
