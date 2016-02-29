module.exports = function () {
	return {
		name: "Image Editor",
		icon: "/app/data/192/image-2.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			image: {
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

		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	}
};
