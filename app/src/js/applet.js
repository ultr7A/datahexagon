function Applet(name, params) {
	var data = app.applets[name](),
		div = document.createElement("div"),
		c = 0;
	div.setAttribute("class", "DataPane UI-Applet");
	this.div = div;
	this.data = data;
	this.components = [];
	this.init(params);
}

Applet.prototype.init = function (params) {
	var c = 0,
		components = this.data.init(params);
	if (typeof components != 'object') {
		var menu = new Menu("standard", {
				"titleButton": {
					icon: this.data.icon,
					title: this.data.name
				}
			}),
			sidebar = new Sidebar("standard", {
				title: this.data.name,
				subtitle: ""
			}),
			view = new Frame("custom", {
				element: document.createElement("div")
			});
		this.components = [menu, sidebar, view];
	} else {
		this.components = components;
	}
	while (c < this.components.length) {
		this.components[c].applet = this;
		this.div.appendChild(this.components[c].element);
		c++;
	}
	if (!!params && !!params.open) {
		this.open(params.open);
	}
};

Applet.prototype.add = function (params) {
	console.log("Applet adds... ", params);
	this.data.add(params);
};

Applet.prototype.save = function (params) {
	console.log("Applet saves... ", params);
	this.data.save(params);
};

Applet.prototype.close = function (params) {
	console.log("Applet closes... ", params);
	this.data.close(params);
};


Applet.prototype.open = function (params) {
	console.log("Applet opens file... ", params);
	console.log(params);
	if (!!this.data.open) {
		this.data.open(params);
	}
};

Applet.prototype.update = function (params) {
	if (!!this.data.update) {
		this.data.update(params);
	}
};


app.applets["alarm-clock"] = function () {
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

		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};

app.applets["terminal"] = function () {
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
			//add event listener to button to submit command
			// code function to parse command,
			// call app function,
			// display result...
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};

app.applets["messaging"] = function () {
	return {
		name: "Messaging",
		icon: "/app/data/192/chat.png",
		options: {
			"New Message": function (p) {

			},
			"New Chat": function (p) {

			},
			"Search": function (p) {

			},
			"Options": function (p) {

			}
		},
		models: {
			contact: {
				current: 0,
				schema: {
					name: "",
					username: "",
					email: "",
					twitter: "",
					facebook: "",
					soundcloud: "",
					gmail: "",
					github: ""
				},
				all: []
			},
			messages: {
				current: 0,
				schema: {
					title: "",
					to: "",
					from: "",
					message: "",
					type: "text"
				},
				all: []
			},
			chats: {
				current: 0,
				schema: {
					to: "",
					from: "",
					room: "",
					message: "",
					type: "text"
				},
				all: []
			}
		},
		init: function (p) {
			// connect socket to app if not connected...
			// send welcome message
			// add event listener to send button
			// add socket event listener for chat message
		},
		add: function (p) {

		},
		save: function (p) {},
		close: function (p) {}
	};
};

app.applets["image-viewer"] = function () {
	return {
		name: "Image Viewer",
		icon: "/app/data/192/",
		options: {
			"Next": function (p) {},
			"Previous": function (p) {},
			"Share": function (p) {}
		},
		models: {
			image: {
				current: 0,
				schema: {
					resource: "",
					username: "",
				},
				all: []
			}
		},
		init: function (p) {

		},
		close: function (p) {}
	};
};

app.applets["text-editor"] = function () {
	return {
		name: "Text Editor",
		icon: "/app/data/192/text.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			document: {
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
			var menu = new Menu("standard", {
					"titleButton": {
						icon: this.icon,
						title: this.name
					}
				}),
				sidebar = new Sidebar("custom", {
					title: this.name,
					subtitle: "",
					items: []
				}),
				element = document.createElement("div"),
				//textarea = document.createElement("textarea"),
				view = null,
				span = null;
			//element.appendChild(textarea)l;

			view = new Frame("text");

			return [menu, sidebar, view];
		},
		add: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};

app.applets["image-editor"] = function () {
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
	};
};

app.applets["3d-editor"] = function () {
	return {
		name: "3D Editor",
		icon: "/app/data/192/cube.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			object: {
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

app.applets["midi-editor"] = function () {
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

app.applets["animation-editor"] = function () {
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

app.applets["search"] = function () {
	return {
		name: "Search",
		icon: "/app/data/192/circle.png",
		options: {
			"Search": function (p) {}
		},
		models: {
			result: {
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
		close: function (p) {}
	};
};

app.applets["settings"] = function () {
	return {
		name: "Settings",
		icon: "/app/data/192/circle.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			setting: {
				current: 0,
				schema: {
					name: "",
					value: "",
					type: ""
				},
				all: []
			}
		},
		init: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};

app.applets["usage-visualizer"] = function () {
	return {
		name: "Disk Usage Visualizer",
		icon: "/app/data/192/circle.png",
		options: {
			"Save Changes": function (p) {}
		},
		models: {
			visualization: {
				current: 0,
				schema: {
					name: "",
					value: "",
					type: ""
				},
				all: []
			}
		},
		init: function (p) {},
		save: function (p) {},
		close: function (p) {}
	};
};


app.applets["sharing"] = function () {
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
			var menu = new Menu("standard", {
					"titleButton": {
						icon: this.icon,
						title: this.name
					}
				}),
				sidebar = new Sidebar("custom", {
					title: this.name,
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
				view = null,
				span = null,
				shares = this.models.share,
				share = null;
			view = new Frame("custom", {
				"element": element
			});
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			resourceLabel.innerHTML = "Resource";
			span = document.createElement("span");
			span.appendChild(resourceLabel);
			if (!!p.open) {
				this.add();
				share = shares.all[shares.current];
				share.name = p.open.resource;
				share.resource = p.open.resource;
				resourceInput.value = share.resource;
			}
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
			element.appendChild(span);
			whiteListLabel.innerHTML = "White List";
			span = document.createElement("span");
			span.appendChild(whiteListLabel);
			whiteListInput.setAttribute("style", "margin-top: 0px; margin-bottom: 0px; height: 485px;");
			span.appendChild(whiteListInput);
			element.appendChild(span);

			app.sharing.listAllShares(app.user.name, (function (sidebarList) {
					return function (share) {
						console.log("init app get shares", share);
						if (!! share) {
							var item = new SidebarItem("standard", {title: share.name});
							sidebarList.options.items.push(item);
							sidebarList.element.appendChild(item.element);
						}
					};
			})(sidebar))

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
			shares.all.push(share);
			shares.current = shares.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
			this.update();
		},
		save: function (p) {
			var shares = this.models.share,
				share = shares.all[shares.current],
				path = share.path,
				users = share.whitelist,
				public = share.public,
				data = share.data;
			app.sharing.saveShare(path, path, users, public, data, function (resp) {
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





































