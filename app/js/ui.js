var UI = {
	Menu: function Menu (type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Menu");
		this.element = aside;
		switch (type) {
			case "standard":
				UI.defaults.menu.options.forEach(function (menuItem) {
					// create menu for app
				});
			break;
			case "custom":
				options.menuItems.forEach(function (menuItem) {
					// create menu for app
				});
			break;
		}

	},
	Sidebar: function Sidebar (type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Sidebar");
		this.element = aside;
		switch (type) {
			case "standard":

			break;
			case "custom":

			break;
		}
	},
	Frame: function Frame (type, options) {
		var main = document.createElement("main");
		main.setAttribute("class", "UI-Frame");
		this.element = main;
		switch (type) {
			case "text":

			break;
			case "codemirror":

			break;
			case: "canvas";

			break;
			case "webgl":

			break;

		}
		this.animate = function () {

		};
		this.resize = function () {

		};
	},
	defaults: {
		menu: {
			options:[
				{"name": "App Icon", "icon":"/app/data/text.png", "click": function (e) {

				}},
				{"name": "New", "icon":"/app/data/plus.png", "click": function (e) {

				}},
				{"name": "Open", "icon":"/app/data/hidpi-box.png", "click": function (e) {

				}},
				{"name": "Save As", "icon":"/app/data/plus.png", "click": function (e) {

				}},
				{"name": "Options", "icon":"/app/data/circle-192.png", "click": function (e) {

				}},
			]
		},
		sidebar: {
			loadFiles: function () {

			}
		}
	}


}

