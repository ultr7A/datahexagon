module.exports = function () {
	return {
		name: "Image Viewer",
		icon: "/app/data/192/",
		options: {
			"Next": function (p) {},
			"Previous": function (p) {},
			"Share": function (p) {}
		},
		models: {
			image: {
				current: 0,
				schema: {
					resource: "",
					username: "",
				},
				all: []
			}
		},
		init: function (p) {

		},
		close: function (p) {}
	};
};
