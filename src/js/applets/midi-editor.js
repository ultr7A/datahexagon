module.exports = function () {
	return {
		name: "MIDI Editor",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			arrangment: {
				current: 0,
				schema: {
					data: "",
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
