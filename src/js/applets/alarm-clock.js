module.exports = function () {
	return {
		name: "Clock",
		icon: "/data/192/clock-2.png",
		options: {
			"Clock": function (p) {},
			"Alarm": function (p) {},
			"Timer": function (p) {},
		},
		schema: {
			"models": ["Alarm", "Timer"],
			"Alarm": {
				"hours": 0,
				"minutes": 0,
				"pm": false
			},
			"Timer": {
				"duration": 0,
				"date": "2015-08-08"
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
