module.exports = function () {
	return {
		name: "Clock",
		icon: "/app/data/192/clock-2.png",
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
			if(confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};
