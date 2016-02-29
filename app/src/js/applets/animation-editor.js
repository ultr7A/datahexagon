module.exports = function () {
	return {
		name: "Animation Editor",
		icon: "/app/data/192/circle.png",
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
		init: function (p) {},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
