module.exports = function () {
	return { // support algebra as well as *nix commands
		name: "Terminal",
		icon: "/app/data/192/text.png",
		options: {
			"Save Dump": function (p) {}
		},
		schema: {
			"models": ["Output"],
			"Output": {
				"data": ""
			}
		},
		init: function (p) {
			var menu = new Menu("standard"),
			view = new Frame("custom", {
				element: document.createElement("div")
			});
			return [view, menu];
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
