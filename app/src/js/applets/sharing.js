//var Frame = require("../ui/frame.js"),
//	Menu = require("../ui/menu.js"),
//	Sidebar = require("../ui/sidebar.js");
// test 2fgrf
module.exports = function () {
	return {
		name: "Sharing",
		icon: "/app/data/192/share.png",
		view: null,
		menu: null,
		sidebar: null,
		options: {
			"New Share": function (p) {},
			"New Shortcut": function (p) {}
		},
		models: {
			share: {
				current: 0,
				schema: {
					name: "",
					resource: "",
					public: "1",
					whitelist: "",
					data: ""
				},
				all: []
			}
		},
		init: function (p) {
			var menu = new Menu("standard"),
				sidebar = new Sidebar("custom", {
					title: this.name,
                    icon: this.icon,
					subtitle: "",
					items: []
				}),
				element = document.createElement("div"),
				nameLabel = document.createElement("label"),
				resourceLabel = document.createElement("label"),
				publicLabel = document.createElement("label"),
				whiteListLabel = document.createElement("label"),
				dataLabel = document.createElement("label"),
				nameInput = document.createElement("input"),
				resourceInput = document.createElement("input"),
				publicInput = document.createElement("select"),
				whiteListInput = document.createElement("textarea"),
				dataInput = document.createElement("input"),
				option = document.createElement("option"),
				doneInput = document.createElement("input"),
				view = null,
				span = null,
				shares = this.models.share,
				share = null,
				self = this;
			view = new Frame("custom", {
				"element": element
			});
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			resourceLabel.innerHTML = "Resource";
			span = document.createElement("span");
			span.appendChild(resourceLabel);
			span.appendChild(resourceInput);
			element.appendChild(span);

			publicLabel.innerHTML = "Public";
			span = document.createElement("span");
			span.appendChild(publicLabel);
			option.setAttribute("value", "1");
			option.innerHTML = "Yes";
			publicInput.appendChild(option);
			option = document.createElement("option");
			option.setAttribute("value", "0");
			option.innerHTML = "No";
			publicInput.appendChild(option);
			span.appendChild(publicInput);
			element.appendChild(span);

			dataLabel.innerHTML = "Data";
			span = document.createElement("span");
			span.appendChild(dataLabel);
			span.appendChild(dataInput);
            span.setAttribute("style", "display: none;");
			element.appendChild(span);
			whiteListLabel.innerHTML = "White List";
			span = document.createElement("span");
			span.appendChild(whiteListLabel);
			whiteListInput.setAttribute("class", "small");
			span.appendChild(whiteListInput);
			element.appendChild(span);

            this.add();
            share = shares.all[shares.current];

			if (!!p.open) {
				share.name = p.open.resource;
				share.resource = p.open.resource;
			} else {
                share.name = share.resource = app.cwd;
            }

            resourceInput.value = share.resource;
				doneInput.setAttribute("type", "button");
				doneInput.setAttribute("value", "Share Folder");
				doneInput.setAttribute("class", "complete");
				doneInput.addEventListener("click", function (evt) {
					self.save();
				}, true);

			span = document.createElement("span");
			element.appendChild(span);
			span.appendChild(doneInput);

			app.sharing.listAllShares(app.user.name, (function (sidebarList) {
					return function (response) {
						var s = 0,
							shares = null,
							item = null;
						if (!! response) {
							shares = JSON.parse(response);
							console.log("init app get shares", shares);
							while (s < shares.length) {
								item = new SidebarItem("standard", {title: shares[s].directory});
								sidebarList.options.items.push(item);
								sidebarList.element.appendChild(item.element);
								s ++;
							}
						}
					};
			})(sidebar));

			return [menu, sidebar, view];
		},
		update: function (p) {
				console.log("update inputs... need to implement");
			console.log(this.sidebar);
			console.log(this.sidebar.element.querySelectorAll("input"));
		},
		add: function (p) {
			var sidebar = this.sidebar,
				shares = this.models.share,
				share = Object.create(this.models.share.schema),
				item = new SidebarItem("standard", {title: share.name});
			share.resource = share.name;
			shares.all.push(share);
			shares.current = shares.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
			this.update();
		},
		save: function (p) {
			var shares = this.models.share,
				share = shares.all[shares.current],
				path = share.resource,
				users = share.whitelist,
				publicShare = share.public,
				data = share.data;
			window.app.sharing.saveShare(path, path, users, publicShare, data, function (resp) {
				console.log("saveShare... ", resp);
			});
		},
		delete: function (p) {
			var shares = this.models.share,
				share = shares.all[shares.current],
				path = share.path;
			app.sharing.deleteShare(path);
		},
		close: function (p) {

		}
	};
};
