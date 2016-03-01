var UI = {
	MainMenu: {
		init: function () {
			var launcher = document.querySelector(".sh"),
				up = document.querySelector(".up"),
				settings = document.querySelector(".sort"),
				create = document.querySelector(".create");
			if (!! launcher) {
				launcher.addEventListener("click", function (event) {
					app.showMenu('launcher');
					app.vibrate();
				}, true);
				up.addEventListener("click", function (event) {
					openFolder("..");
					app.showMenu("none");
					app.vibrate();
				}, true);
				settings.addEventListener("click", function (event) {
					app.showMenu('sort');
					app.vibrate();
				}, true);
				create.addEventListener("click", function (event) {
					app.showMenu('creation');
					app.vibrate();
				}, true);
			}
		}
	},
	defaults: {
		menu: {
			options:[
				{"name": "Close", "icon":"/app/data/192/x.png", "click": function close (menu) {
					console.log("Close event handler is happening now");
					menu.applet.close();
					menu.applet.dataPane.close();
				}},
				{"name": "New", "icon":"/app/data/plus.png", "click": function create (event, menu) {

				}},
				{"name": "Options", "icon":"/app/data/192/circle.png", "click": function options (event, menu) {

				}}
			]
		},
		sidebar: {
			loadFiles: function () {

			}
		},
		contextMenu: {
			options: {
				menuItems: [
//					{"name": "Open", "icon":"/app/data/hidpi-box.png", "click": function (e) { }},
					{"name": "Edit", "icon":"/app/data/192/dark/edit.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource"),
                            name = element.getAttribute("data-name");
						e.preventDefault();
						app.request("GET", resource+"?cache="+Date.now(), "", function (response) {
							app.openPane('edit', name, {"resource":app.cwd+"/"+name, "text": response});
						});
						return false;
					}},
					{"name": "Delete", "icon":"/app/data/192/dark/x.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource");
						deletePath(resource);
						// implement...

					}}
				],
				directoryMenuItems: [
//					{"name": "Open", "icon":"/app/data/hidpi-box.png", "click": function (e) { }},
					{"name": "Sharing", "icon":"/app/data/192/dark/edit.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource"),
                            name = element.getAttribute("data-name");
						e.preventDefault();
						app.openPane("sharing", "Sharing", { "applet": {
                            "name":"sharing",
                            "open": {
                                "resource": resource,
                                "type": "share"
                            }
                        }});
						return false;
					}},
					{"name": "Delete", "icon":"/app/data/192/dark/x.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource");
						deletePath(resource);
						// implement...

					}}
				]
			}
		}
	}
};


