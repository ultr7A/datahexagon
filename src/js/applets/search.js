module.exports = function () {
	return {
		name: "Search",
		icon: "/data/192/circle.png",
		options: {
			"Search": function (p) {}
		},
		models: {
			result: {
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
		close: function (p) {}
	};
};
