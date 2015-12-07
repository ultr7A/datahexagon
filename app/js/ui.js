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
	ContextMenu: function (name, options) {
		var div = document.createElement("div"),
			list = document.createElement("ul"),
			item = document.createElement("li");
		this.element = div;
		div.setAttribute("class", "UI-Context-Menu");
		item.innerHTML="<h2>"+name+"</h2>";
		list.appendChild(item);
		options.menuItems.forEach(function (menuItem) {
			item = document.createElement("li");
			item.innerHTML = menuItem.name;
			item.addEventListener("click", function (evt) {
				menuItem.click;
			}, true);
			list.appendChild()
		});
	},
	defaults: {
		menu: {
			options:[
				{"name": "App Icon", "icon":"/app/data/192/text.png", "click": function (e) {

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

