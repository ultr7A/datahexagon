(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* main.js */

"use strict";

window.Card = require("./ui/card.js");
window.Menu = require("./ui/menu.js");
window.DataPane = require("./ui/datapane.js");
window.ContextMenu = require("./ui/contextmenu.js");
window.AppIcon = require("./ui/appicon.js");
window.Frame = require("./ui/frame.js");
window.Sidebar = require("./ui/sidebar.js");
window.SidebarItem = require("./ui/sidebaritem.js");
window.ModalWindow = require("./ui/modalwindow.js");
window.Toolbar = require("./ui/toolbar.js");
window.VectorEditor = require("./ui/vectoreditor.js");

window.applets = [];

applets["alarm-clock"] = require("./applets/alarm-clock.js");
applets.terminal = require("./applets/terminal.js");
applets.messaging = require("./applets/messaging.js");
applets["image-viewer"] = require("./applets/image-viewer.js");
applets["text-editor"] = require("./applets/text-editor.js");
applets["image-editor"] = require("./applets/image-editor.js");
applets["3d-editor"] = require("./applets/3d-editor.js");
applets["midi-editor"] = require("./applets/midi-editor.js");
applets["animation-editor"] = require("./applets/animation-editor.js");
applets.search = require("./applets/search.js");
applets.settings = require("./applets/settings.js");
applets["usage-visualizer"] = require("./applets/usage-visualizer.js");
applets.sharing = require("./applets/sharing.js");

//test ttest

},{"./applets/3d-editor.js":2,"./applets/alarm-clock.js":3,"./applets/animation-editor.js":4,"./applets/image-editor.js":5,"./applets/image-viewer.js":6,"./applets/messaging.js":7,"./applets/midi-editor.js":8,"./applets/search.js":9,"./applets/settings.js":10,"./applets/sharing.js":11,"./applets/terminal.js":12,"./applets/text-editor.js":13,"./applets/usage-visualizer.js":14,"./ui/appicon.js":15,"./ui/card.js":16,"./ui/contextmenu.js":17,"./ui/datapane.js":18,"./ui/frame.js":19,"./ui/menu.js":20,"./ui/modalwindow.js":21,"./ui/sidebar.js":22,"./ui/sidebaritem.js":23,"./ui/toolbar.js":24,"./ui/vectoreditor.js":25}],2:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "3D Editor",
		icon: "/app/data/192/cube.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],3:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Clock",
		icon: "/app/data/192/clock-2.png",
		options: {
			Clock: function Clock(p) {},
			Alarm: function Alarm(p) {},
			Timer: function Timer(p) {} },
		schema: {
			models: ["Alarm", "Timer"],
			Alarm: {
				hours: 0,
				minutes: 0,
				pm: false
			},
			Timer: {
				duration: 0,
				date: "2015-08-08"
			}
		},
		init: function init(p) {
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Animation Editor",
		icon: "/app/data/192/circle.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],5:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Image Editor",
		icon: "/app/data/192/image-2.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],6:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Image Viewer",
		icon: "/app/data/192/",
		options: {
			Next: function Next(p) {},
			Previous: function Previous(p) {},
			Share: function Share(p) {}
		},
		models: {
			image: {
				current: 0,
				schema: {
					resource: "",
					username: "" },
				all: []
			}
		},
		init: function init(p) {},
		close: function close(p) {}
	};
};

},{}],7:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Messaging",
		icon: "/app/data/192/chat.png",
		options: {
			"New Message": function NewMessage(p) {},
			"New Chat": function NewChat(p) {},
			Search: function Search(p) {},
			Options: function Options(p) {}
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
		init: function init(p) {
			// connect socket to app if not connected...
			// send welcome message
			// add event listener to send button
			// add socket event listener for chat message
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],8:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "MIDI Editor",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],9:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Search",
		icon: "/app/data/192/circle.png",
		options: {
			Search: function Search(p) {}
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
		init: function init(p) {},
		close: function close(p) {}
	};
};

},{}],10:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Settings",
		icon: "/app/data/192/circle.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {
			if (confirm("App not implemented.\nFurthermore, all future development of the Datahexagon desktop environment has diverted to project Pylon.\nFeel like trying something new?")) {
				window.location.href = "https://vpylon.net";
			}
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],11:[function(require,module,exports){
//var Frame = require("../ui/frame.js"),
//	Menu = require("../ui/menu.js"),
//	Sidebar = require("../ui/sidebar.js");
// test 2fgrf
"use strict";

module.exports = function () {
	return {
		name: "Sharing",
		icon: "/app/data/192/share.png",
		view: null,
		menu: null,
		sidebar: null,
		options: {
			"New Share": function NewShare(p) {},
			"New Shortcut": function NewShortcut(p) {}
		},
		models: {
			share: {
				current: 0,
				schema: {
					name: "",
					resource: "",
					"public": "1",
					whitelist: "",
					data: ""
				},
				all: []
			}
		},
		init: function init(p) {
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
				element: element
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
			element.appendChild(span);
			whiteListLabel.innerHTML = "White List";
			span = document.createElement("span");
			span.appendChild(whiteListLabel);
			whiteListInput.setAttribute("class", "small");
			span.appendChild(whiteListInput);
			element.appendChild(span);

			if (!!p.open) {
				this.add();
				share = shares.all[shares.current];
				share.name = p.open.resource;
				share.resource = p.open.resource;
				resourceInput.value = share.resource;
				doneInput.setAttribute("type", "button");
				doneInput.setAttribute("value", "Share Folder");
				doneInput.setAttribute("class", "complete");
				doneInput.addEventListener("click", function (evt) {
					self.save();
				}, true);
			}
			span = document.createElement("span");
			element.appendChild(span);
			span.appendChild(doneInput);

			app.sharing.listAllShares(app.user.name, (function (sidebarList) {
				return function (response) {
					var s = 0,
					    shares = null,
					    item = null;
					if (!!response) {
						shares = JSON.parse(response);
						console.log("init app get shares", shares);
						while (s < shares.length) {
							item = new SidebarItem("standard", { title: shares[s].directory });
							sidebarList.options.items.push(item);
							sidebarList.element.appendChild(item.element);
							s++;
						}
					}
				};
			})(sidebar));

			return [menu, sidebar, view];
		},
		update: function update(p) {
			console.log("update inputs... need to implement");
			console.log(this.sidebar);
			console.log(this.sidebar.element.querySelectorAll("input"));
		},
		add: function add(p) {
			var sidebar = this.sidebar,
			    shares = this.models.share,
			    share = Object.create(this.models.share.schema),
			    item = new SidebarItem("standard", { title: share.name });
			share.resource = share.name;
			shares.all.push(share);
			shares.current = shares.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
			this.update();
		},
		save: function save(p) {
			var shares = this.models.share,
			    share = shares.all[shares.current],
			    path = share.resource,
			    users = share.whitelist,
			    publicShare = share["public"],
			    data = share.data;
			window.app.sharing.saveShare(path, path, users, publicShare, data, function (resp) {
				console.log("saveShare... ", resp);
			});
		},
		"delete": function _delete(p) {
			var shares = this.models.share,
			    share = shares.all[shares.current],
			    path = share.path;
			app.sharing.deleteShare(path);
		},
		close: function close(p) {}
	};
};

},{}],12:[function(require,module,exports){
"use strict";

module.exports = function () {
	return { // support algebra as well as *nix commands
		name: "Terminal",
		icon: "/app/data/192/text.png",
		options: {
			"Save Dump": function SaveDump(p) {}
		},
		schema: {
			models: ["Output"],
			Output: {
				data: ""
			}
		},
		init: function init(p) {
			var menu = new Menu("standard"),
			    view = new Frame("custom", {
				element: document.createElement("div")
			});
			return [view, menu];
		},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],13:[function(require,module,exports){
"use strict";

module.exports = function () {
	var self = {
		name: "Text Editor",
		icon: "/app/data/192/text.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
		},
		saveTimeout: 0,
		models: {
			document: {
				current: 0,
				schema: {
					resource: "New Document.txt",
					username: "",
					type: "",
					content: ""
				},
				all: []
			}
		},
		init: function init(p) {
			var menu = new Menu("standard"),
			    sidebar = new Sidebar("custom", {
				title: this.name,
				icon: this.icon,
				subtitle: "",
				items: []
			}),
			    element = document.createElement("div"),
			    view = null,
			    span = null;
			view = new Frame("text");
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			self.saveTimeout = setTimeout(function () {
				self.save({ auto: true });
			}, 30000);
			return [menu, sidebar, view];
		},
		add: function add(p) {
			var sidebar = this.sidebar,
			    documents = this.models.document,
			    doc = Object.create(this.models.document.schema),
			    item = null,
			    exists = false,
			    filename = "",
			    a = app.files,
			    l = a.length - 1;

			console.log("add document");

			if (!!p && !!p.open && !!p.open.resource) {
				doc.resource = p.open.resource;
			} else {
				doc.resource = app.cwd + "/" + doc.resource;
			}

			filename = doc.resource.split("/");
			filename = filename[filename.length - 1];

			while (l > -1) {
				if (!exists && a[l].name == filename) {
					console.log("existing file found", a[l].name);
					this.open({ resource: doc.resource });
					exists = true;
				}
				l--;
			}
			if (!exists) {
				documents.all.push(doc);
				item = new SidebarItem("editable", { title: doc.resource });
				documents.current = documents.all.length - 1;
				sidebar.options.items.push(item);
				sidebar.element.appendChild(item.element);
			}
		},
		save: function save(p) {
			var documents = self.models.document,
			    doc = documents.all[documents.current];
			doc.content = self.view.element.children[0].value;
			saveText(doc.resource, doc.content, true);
			if (!!p && p.auto === true) {
				self.saveTimeout = setTimeout(function () {
					self.save(p);
				}, 60000);
			}
		},
		open: function open(p) {
			var documents = this.models.document,
			    textarea = this.view.element.children[0],
			    applet = this;
			console.log("text editor open.. ", p);
			app.request("get", p.resource + "?cache=" + Date.now(), "", function (resp) {
				var doc = Object.create(applet.models.document.schema),
				    documents = applet.models.document,
				    item = null;
				doc.resource = p.resource;
				item = new SidebarItem("editable", { title: doc.resource });
				documents.all.push(doc);
				documents.current = documents.all.indexOf(doc);
				doc.content = resp;
				textarea.value = resp;
				applet.sidebar.options.items.push(item);
				applet.sidebar.element.appendChild(item.element);
			});
		},
		close: function close(p) {
			self.save();
			clearTimeout(self.saveTimeout);
			console.log("actually closing now..");
		}
	};
	return self;
};

},{}],14:[function(require,module,exports){
"use strict";

module.exports = function () {
	return {
		name: "Disk Usage Visualizer",
		icon: "/app/data/192/circle.png",
		options: {
			"Save Changes": function SaveChanges(p) {}
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
		init: function init(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

},{}],15:[function(require,module,exports){
"use strict";

module.exports = function AppIcon(name, index) {
	var element = document.createElement("div"),
	    applet = applets[name](),
	    directionClass = "";
	if (!!index) {
		if (index == 1) {
			directionClass = " up";
		} else if (index == 4) {
			directionClass = " down";
		}
	}
	element.setAttribute("class", "UI-App-Icon" + directionClass);
	element.setAttribute("style", "background-image: url(" + applet.icon + ");");
	element.innerHTML = "<span>" + applet.name + "</span>";
	this.element = element;
	element.addEventListener("click", function () {
		app.openPane("app", applet.name, {
			applet: {
				name: name
			}
		});
	}, true);
};

},{}],16:[function(require,module,exports){
/* Card.js */

"use strict";

var ContextMenu = require("./contextmenu.js");

module.exports = function Card(name, resource, options) {
	var e = document.createElement("div"),
	    i = null,
	    up = false,
	    isImage = false,
	    contextMenu = true,
	    link = document.createElement("span"),
	    configure = document.createElement("input"),
	    edit = document.createElement("input"),
	    contextMenuData = {
		name: name,
		resource: resource,
		menuItems: [], // dummy menu items
		directory: false
	};
	e.setAttribute("class", "Card");
	e.setAttribute("data-resource", resource);
	e.setAttribute("data-name", name);
	//link.setAttribute("target", "_blank");
	link.innerHTML = name;
	//link.setAttribute("href", resource);
	configure.setAttribute("class", "configure");
	configure.setAttribute("type", "button");
	configure.setAttribute("value", "");
	configure.addEventListener("click", function (event) {
		event.preventDefault();
		//deletePath(app.cwd+"/"+name);
		event.target.parentNode.querySelector(".UI-Context-Menu").setAttribute("class", "active UI-Context-Menu");
		return false;
	}, true);
	isImage = /(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(resource);
	if (isImage) {
		var thumb = resource.replace(/\s/g, "%20");
		if (!/(\.webp|\.gif)/i.test(resource)) {
			// don't thumbnail webp or gif
			var rPath = thumb.split("/");
			var thumb = rPath[rPath.length - 1];
			rPath.splice(rPath.length - 1, 1);
			rPath.push("DHThumbs");
			if (window.innerWidth < 641 && app.thumbSize || window.innerWidth > 640 && !app.thumbSize) {
				// use hi-dpi thumbnails by default
				rPath.push("1024");
			}
			rPath.push(thumb + ".jpg");
			thumb = rPath.join("/");
		} else {
			thumb = resource;
		}
		e.setAttribute("style", "background-image: url('" + thumb + "');"); //resource+"');");
		e.setAttribute("class", "Card Image");
	} else {
		e.appendChild(link);
		if (/^(.*\/){0,1}[^\.]*.{1}$/.test(resource)) {
			// detect folders
			contextMenuData.directory = true;
			link.setAttribute("href", "#");
			link.addEventListener("click", function (event) {
				event.preventDefault();
				if (event.target.nodeName != "LI") {
					openFolder(resource);
				}
				return false;
			}, true);
			e.setAttribute("class", "Card Folder");
		} else {
			if (!contextMenu) {
				edit.setAttribute("class", "close edit");
				edit.setAttribute("type", "button");
				edit.setAttribute("value", "Edit");
				edit.addEventListener("click", function (event) {
					event.preventDefault();
					app.request("GET", resource + "?cache=" + Date.now(), "", function (response) {
						app.openPane("edit", name, {
							resource: app.cwd + "/" + name,
							text: response
						});
					});
					return false;
				}, true);
				e.appendChild(edit);
			}
		}
	}
	//	Experimental..
	if (contextMenu) {
		var menu = new ContextMenu(contextMenuData);
		e.addEventListener("click", function (evt) {
			var style = e.getAttribute("class");
			if (style.search("showMenu") < 0) {
				setTimeout(function () {
					[].forEach.call(document.querySelectorAll(".showMenu"), function (item, index) {
						item.setAttribute("class", item.getAttribute("class").replace("showMenu", ""));
					});
					e.setAttribute("class", style + " showMenu");
				}, 100);
			}
		}, false);

		if (isImage) {
			e.appendChild(menu.element);
		} else {
			link.appendChild(menu.element);
		}
	}
	if (!!contextMenuData.directory) {
		e.appendChild(configure);
	}

	for (i in options) {
		e.setAttribute(i, options[i]);
	}
	return e;
};

},{"./contextmenu.js":17}],17:[function(require,module,exports){
"use strict";

module.exports = function ContextMenu(options) {
	var div = document.createElement("div"),
	    list = document.createElement("ul"),
	    item = document.createElement("li");
	this.element = div;
	div.setAttribute("class", "UI-Context-Menu");

	div.appendChild(list);
	list.appendChild(item);
	if (options.directory == true) {
		div.setAttribute("class", "Directory UI-Context-Menu");
		options.menuItems = UI.defaults.contextMenu.options.directoryMenuItems;
		item.innerHTML = "<a class='icon' style='background-image:url(/app/data/192/dark/open.png);' href='javascript:openFolder(\"" + options.resource + "\");' title='Open'>Open</a>";
	}
	if (options.menuItems.length == 0) {
		options.menuItems = UI.defaults.contextMenu.options.menuItems;
		item.innerHTML = "<a target='_blank' class='icon' style='background-image:url(/app/data/192/dark/download.png);' href='" + options.resource + "' title='Open'>Open</a>";
	}
	options.menuItems.forEach(function (menuItem) {
		item = document.createElement("li");
		item.innerHTML = menuItem.name;
		item.setAttribute("data-resource", options.resource);
		item.setAttribute("data-name", options.name);
		item.setAttribute("class", "icon");
		item.setAttribute("style", "background-image:url(" + menuItem.icon + ")");
		item.addEventListener("click", function (evt) {
			menuItem.click(evt);
		}, true);
		list.appendChild(item);
	});
};

},{}],18:[function(require,module,exports){
"use strict";

function DataPane(type, name, data) {
    console.log(data);
    var container = document.createElement("div"),
        titleString = "",
        title = document.createElement("h2"),
        titleEntry = document.createElement("input"),
        done = document.createElement("input"),
        entry = document.createElement("textarea"),
        showTitle = false,
        showEntry = false,
        showTitleEntry = false,
        close = document.createElement("input"),
        upload = null,
        editWidget = null,
        applet = null;
    container.setAttribute("class", "DataPane");
    titleEntry.setAttribute("type", "text");
    titleEntry.setAttribute("class", "titleEntry");
    done.setAttribute("type", "button");
    done.setAttribute("class", "done");
    done.setAttribute("value", "Done");
    done.addEventListener("click", this.getCloseMethod(true), true);
    close.setAttribute("type", "button");
    close.setAttribute("class", "close");
    close.setAttribute("value", "X");
    close.addEventListener("click", this.getCloseMethod(), true);
    if (!!data.applet) {
        // load applet form data.applet
        applet = new Applet(data.applet.name, { open: !!data.applet.open ? data.applet.open : null });
        applet.dataPane = this; // won't be needed once DataPane is deprecated
        this.applet = applet;
        container = applet.div;
    } else {
        switch (type) {
            case "touch":
                showEntry = true;
                showTitleEntry = true;
                container.setAttribute("class", "DataPane touch");
                titleEntry.setAttribute("style", "background-image: url(/app/data/touch.png)");
                titleEntry.setAttribute("class", "titleEntry icon");
                break;
            case "mkdir":
                showTitleEntry = true;
                container.setAttribute("class", "DataPane mkdir");
                titleEntry.setAttribute("style", "background-image: url(/app/data/mkdir.png);");
                titleEntry.setAttribute("class", "titleEntry icon");
                break;
            case "upload":
                upload = document.createElement("input");
                upload.setAttribute("type", "file");
                upload.setAttribute("multiple", "multiple");
                titleString = "<img src=\"/app/data/upload.png\" title=\"Upload Files\"><span>Upload Files</span>";
                showTitle = true;
                break;
            case "view":
                titleString = "View File";
                showEntry = true;
                break;
            case "edit":
                titleString = "";
                showEntry = true;
                showTitleEntry = true;
                if (!!data.icon) {
                    titleEntry.setAttribute("style", "background-image: url(" + data.icon + ");");
                } else {
                    titleEntry.setAttribute("style", "background-image: url(/app/data/text2.png);");
                }
                titleEntry.setAttribute("class", "titleEntry icon");

                break;
        }
        title.innerHTML = titleString;
        if (showTitle) {
            container.appendChild(title);
        }
        if (typeof data == "undefined" || typeof data.controls == "undefined" || data.controls == true) {
            container.appendChild(done);
            container.appendChild(close);
        }
        if (!!data && !!data["class"]) {
            container.setAttribute("class", "DataPane " + data["class"]);
        }
        if (!!upload) {
            container.appendChild(upload);
        }
        if (showTitleEntry) {
            container.appendChild(titleEntry);
            titleEntry.value = name;
        }
        if (showEntry) {
            container.appendChild(entry);
            if (!!data.text) {
                entry.value = data.text;
            }
        }
        // used to add "done" button here
    }
    this.type = type;
    this.name = name;
    this.data = data;
    this.done = done;
    this.entry = entry;
    this.paneTitle = title;
    this.titleEntry = titleEntry;
    this.uploadInput = upload;
    this.container = container;
};

DataPane.prototype.snap = function (direction) {
    this.container.setAttribute("class", "DataPane " + direction);
};

DataPane.prototype.close = function () {
    var panes = app.panes,
        pane = this;
    pane.container.parentNode.removeChild(pane.container);
    panes.splice(panes.indexOf(pane));
    if (panes.length < 1) {
        app.showMenu("none");
    }
};

DataPane.prototype.getCloseMethod = function (save) {
    var panes = app.panes,
        pane = this;
    return function (evt) {
        var leaveOpen = false;
        if (save) {
            switch (pane.type) {
                case "touch":
                    saveText(app.cwd + "/" + pane.titleEntry.value, pane.entry.value);
                    break;
                case "mkdir":
                    makeDirectory(pane);
                    break;
                case "upload":
                    uploadFiles(pane);
                    leaveOpen = true;
                    break;
                case "edit":
                    saveText(app.cwd + "/" + pane.titleEntry.value, pane.entry.value);
                    break;
            }
        }
        if (!leaveOpen) {
            pane.container.parentNode.removeChild(pane.container);
            panes.splice(panes.indexOf(pane));
        }
        if (app.panes.length < 1) {
            app.showMenu("none");
        }
    };
};

module.exports = DataPane;

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function Frame(type, options) {
	var main = document.createElement("main"),
	    view = null;
	main.setAttribute("class", "UI-Frame");
	this.element = main;
	if (!!options && !!options.element) {
		view = options.element;
	} else {
		switch (type) {
			case "text":
				view = document.createElement("textarea");
				if (window.innerWidth > 960) {
					view.setAttribute("style", "height:735px;");
				}
				break;
			case "codemirror":
				view = document.createElement("textarea");
				break;
			case "canvas":
				view = document.createElement("canvas");
				break;
			case "webgl":
				view = document.createElement("canvas");
				break;
		}
	}
	main.appendChild(view);
	this.animate = function () {};
	this.resize = function () {};
};

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function Menu(type, options) {
	var aside = document.createElement("aside"),
	    getThemedIcon = app.getThemedIcon,
	    menuItems = [],
	    menuItem = null,
	    menu = this,
	    m = 0;
	aside.setAttribute("class", "UI-Menu");
	this.element = aside;
	this.applet = null;
	if (!!options) {
		// make sure options are defined
		if (!!options.titleButton) {
			menuItems.push(options.titleButton);
		}
	}
	type = !!type ? type : "standard";
	switch (type) {
		case "standard":
			UI.defaults.menu.options.forEach(function (menuItem) {
				var item = Object.create(menuItem);
				item.icon = app.getThemedIcon(item.icon);
				menuItems.push(item);
			});
			break;
		case "custom":
			menuItems = options.menuItems;
			break;
	}
	while (m < menuItems.length) {
		// create menu for app
		menuItem = menuItems[m];
		var button = document.createElement("a");
		button.setAttribute("class", "UI-Menu-Button");
		button.setAttribute("href", "javascript:void(0);");
		button.setAttribute("title", menuItem.name);
		button.setAttribute("style", "background-image:url(" + menuItem.icon + ")");
		(function (buttonMenu, buttonMenuItem) {
			button.addEventListener("click", function (evt) {
				buttonMenuItem.click(buttonMenu);
			}, true);
		})(menu, menuItem);
		aside.appendChild(button);
		m += 1;
	}
};

},{}],21:[function(require,module,exports){
"use strict";

module.exports = function ModalWindow(type, options) {
	var section = document.createElement("section");
	section.setAttribute("class", "UI-ModalWindow");
	this.element = section;
	switch (type) {
		case "standard":

			break;
		case "custom":

			break;
	}
};

},{}],22:[function(require,module,exports){
"use strict";

module.exports = function Sidebar(type, options) {
	var aside = document.createElement("aside"),
	    icon = document.createElement("img"),
	    h2 = document.createElement("h2"),
	    h3 = document.createElement("h3");
	aside.setAttribute("class", "UI-Sidebar");
	this.element = aside;
	this.options = options;
	if (!!options.icon) {
		icon.src = app.getThemedIcon(options.icon);
		icon.setAttribute("class", "icon");
		aside.appendChild(icon);
	}
	h2.innerHTML = options.title;
	h3.innerHTML = options.subtitle;
	aside.appendChild(h2);
	if (options.subtitle != "") {
		aside.appendChild(h3);
	}
	aside.appendChild(document.createElement("br"));
	switch (type) {
		case "standard":
			// standard features
			// might want a mode where it enhances / merges with the menu
			break;
		case "custom":
			options.items.forEach(function (sidebarItem) {
				aside.appendChild(sidebarItem.element);
			});
			break;
	}
};

},{}],23:[function(require,module,exports){
"use strict";

module.exports = function SidebarItem(type, options, selectionCallback) {
	var element = document.createElement("div");
	switch (type) {
		case "standard":
			element.innerHTML = options.title;
			break;
		case "editable":
			element = document.createElement("input");
			element.setAttribute("value", options.title);
			element.setAttribute("type", "text");
			break;
		case "custom":

			break;
	}
	element.addEventListener("click", function (evt) {
		if (!!selectionCallback) {
			selectionCallback(evt);
		}
	}, true);
	element.setAttribute("class", "UI-SidebarItem");
	this.element = element;
};

},{}],24:[function(require,module,exports){
"use strict";

module.exports = function Toolbar(type, options) {
	var aside = document.createElement("aside");
	aside.setAttribute("class", "UI-Toolbar");
	this.element = aside;
	switch (type) {
		case "standard":

			break;
		case "custom":

			break;
	}
};

},{}],25:[function(require,module,exports){
"use strict";

module.exports = function VectorEditor(options) {
	var div = document.createElement("div"),
	    list = document.createElement("ul"),
	    item = document.createElement("li");
	this.element = div;
	div.setAttribute("class", "UI-Vector-Editor");
	item.innerHTML = "<h2>" + options.name + "</h2>";
	div.appendChild(list);
	list.appendChild(item);
	if (options.menuItems.length == 0) {
		options.menuItems = UI.defaults.contextMenu.options.menuItems;
	}
	options.menuItems.forEach(function (menuItem) {
		item = document.createElement("li");
		item.innerHTML = menuItem.name;
		item.addEventListener("click", function (evt) {
			menuItem.click(evt);
		}, false);
		list.appendChild(item);
	});
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvM2QtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvYWxhcm0tY2xvY2suanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvaW1hZ2UtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvbWVzc2FnaW5nLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvbWlkaS1lZGl0b3IuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZWFyY2guanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZXR0aW5ncy5qcyIsIkQ6L2RldmVsb3BtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NoYXJpbmcuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy90ZXJtaW5hbC5qcyIsIkQ6L2RldmVsb3BtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3RleHQtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvdXNhZ2UtdmlzdWFsaXplci5qcyIsIkQ6L2RldmVsb3BtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NhcmQuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY29udGV4dG1lbnUuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZnJhbWUuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvbWVudS5qcyIsIkQ6L2RldmVsb3BtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkQ6L2RldmVsb3BtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXJpdGVtLmpzIiwiRDovZGV2ZWxvcG1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJEOi9kZXZlbG9wbWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdmVjdG9yZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RD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QyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFDOUQ7QUFDRCxRQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVEsRUFBRTtBQUM3QyxNQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxNQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDL0IsTUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUM3QyxXQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3BCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDVixNQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztDQUNILENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogbWFpbi5qcyAqL1xyXG5cclxuIHdpbmRvdy5DYXJkID0gcmVxdWlyZShcIi4vdWkvY2FyZC5qc1wiKTtcclxuIHdpbmRvdy5NZW51ID0gcmVxdWlyZShcIi4vdWkvbWVudS5qc1wiKTtcclxuIHdpbmRvdy5EYXRhUGFuZSA9IHJlcXVpcmUoXCIuL3VpL2RhdGFwYW5lLmpzXCIpO1xyXG4gd2luZG93LkNvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vdWkvY29udGV4dG1lbnUuanNcIik7XHJcbiB3aW5kb3cuQXBwSWNvbiA9IHJlcXVpcmUoXCIuL3VpL2FwcGljb24uanNcIik7XHJcbiB3aW5kb3cuRnJhbWUgPSByZXF1aXJlKFwiLi91aS9mcmFtZS5qc1wiKTtcclxuIHdpbmRvdy5TaWRlYmFyID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhci5qc1wiKTtcclxuIHdpbmRvdy5TaWRlYmFySXRlbSA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXJpdGVtLmpzXCIpO1xyXG4gd2luZG93Lk1vZGFsV2luZG93ID0gcmVxdWlyZShcIi4vdWkvbW9kYWx3aW5kb3cuanNcIik7XHJcbiB3aW5kb3cuVG9vbGJhciA9IHJlcXVpcmUoXCIuL3VpL3Rvb2xiYXIuanNcIik7XHJcbiB3aW5kb3cuVmVjdG9yRWRpdG9yID0gcmVxdWlyZShcIi4vdWkvdmVjdG9yZWRpdG9yLmpzXCIpO1xyXG5cclxuIHdpbmRvdy5hcHBsZXRzID0gW107XHJcblxyXG4gYXBwbGV0c1tcImFsYXJtLWNsb2NrXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbGFybS1jbG9jay5qc1wiKTtcclxuIGFwcGxldHNbXCJ0ZXJtaW5hbFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdGVybWluYWwuanNcIik7XHJcbiBhcHBsZXRzW1wibWVzc2FnaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9tZXNzYWdpbmcuanNcIik7XHJcbiBhcHBsZXRzW1wiaW1hZ2Utdmlld2VyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9pbWFnZS12aWV3ZXIuanNcIik7XHJcbiBhcHBsZXRzW1widGV4dC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3RleHQtZWRpdG9yLmpzXCIpO1xyXG4gYXBwbGV0c1tcImltYWdlLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2UtZWRpdG9yLmpzXCIpO1xyXG4gYXBwbGV0c1tcIjNkLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvM2QtZWRpdG9yLmpzXCIpO1xyXG4gYXBwbGV0c1tcIm1pZGktZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9taWRpLWVkaXRvci5qc1wiKTtcclxuIGFwcGxldHNbXCJhbmltYXRpb24tZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzXCIpO1xyXG4gYXBwbGV0c1tcInNlYXJjaFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2VhcmNoLmpzXCIpO1xyXG4gYXBwbGV0c1tcInNldHRpbmdzXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zZXR0aW5ncy5qc1wiKTtcclxuIGFwcGxldHNbXCJ1c2FnZS12aXN1YWxpemVyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy91c2FnZS12aXN1YWxpemVyLmpzXCIpO1xyXG4gYXBwbGV0c1tcInNoYXJpbmdcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NoYXJpbmcuanNcIik7XHJcblxyXG4vL3Rlc3QgdHRlc3RcclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIjNEIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jdWJlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRvYmplY3Q6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0aWYoY29uZmlybShcIkFwcCBub3QgaW1wbGVtZW50ZWQuXFxuRnVydGhlcm1vcmUsIGFsbCBmdXR1cmUgZGV2ZWxvcG1lbnQgb2YgdGhlIERhdGFoZXhhZ29uIGRlc2t0b3AgZW52aXJvbm1lbnQgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkgeyBcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vdnB5bG9uLm5ldFwiOyBcblx0XHRcdH0gXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQ2xvY2tcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2xvY2stMi5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIkNsb2NrXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiQWxhcm1cIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJUaW1lclwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIkFsYXJtXCIsIFwiVGltZXJcIl0sXG5cdFx0XHRcIkFsYXJtXCI6IHtcblx0XHRcdFx0XCJob3Vyc1wiOiAwLFxuXHRcdFx0XHRcIm1pbnV0ZXNcIjogMCxcblx0XHRcdFx0XCJwbVwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFwiVGltZXJcIjoge1xuXHRcdFx0XHRcImR1cmF0aW9uXCI6IDAsXG5cdFx0XHRcdFwiZGF0ZVwiOiBcIjIwMTUtMDgtMDhcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBhbGwgZnV0dXJlIGRldmVsb3BtZW50IG9mIHRoZSBEYXRhaGV4YWdvbiBkZXNrdG9wIGVudmlyb25tZW50IGhhcyBkaXZlcnRlZCB0byBwcm9qZWN0IFB5bG9uLlxcbkZlZWwgbGlrZSB0cnlpbmcgc29tZXRoaW5nIG5ldz9cIikpIHsgXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3ZweWxvbi5uZXRcIjsgXG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkFuaW1hdGlvbiBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0aWYoY29uZmlybShcIkFwcCBub3QgaW1wbGVtZW50ZWQuXFxuRnVydGhlcm1vcmUsIGFsbCBmdXR1cmUgZGV2ZWxvcG1lbnQgb2YgdGhlIERhdGFoZXhhZ29uIGRlc2t0b3AgZW52aXJvbm1lbnQgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkgeyBcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vdnB5bG9uLm5ldFwiOyBcblx0XHRcdH0gXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2ltYWdlLTIucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBhbGwgZnV0dXJlIGRldmVsb3BtZW50IG9mIHRoZSBEYXRhaGV4YWdvbiBkZXNrdG9wIGVudmlyb25tZW50IGhhcyBkaXZlcnRlZCB0byBwcm9qZWN0IFB5bG9uLlxcbkZlZWwgbGlrZSB0cnlpbmcgc29tZXRoaW5nIG5ldz9cIikpIHsgXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3ZweWxvbi5uZXRcIjsgXG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgVmlld2VyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV4dFwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlByZXZpb3VzXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNZXNzYWdpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2hhdC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5ldyBNZXNzYWdlXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk5ldyBDaGF0XCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJPcHRpb25zXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0Y29udGFjdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdHR3aXR0ZXI6IFwiXCIsXG5cdFx0XHRcdFx0ZmFjZWJvb2s6IFwiXCIsXG5cdFx0XHRcdFx0c291bmRjbG91ZDogXCJcIixcblx0XHRcdFx0XHRnbWFpbDogXCJcIixcblx0XHRcdFx0XHRnaXRodWI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdHRvOiBcIlwiLFxuXHRcdFx0XHRcdGZyb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0Y2hhdHM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRyb29tOiBcIlwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdC8vIGNvbm5lY3Qgc29ja2V0IHRvIGFwcCBpZiBub3QgY29ubmVjdGVkLi4uXG5cdFx0XHQvLyBzZW5kIHdlbGNvbWUgbWVzc2FnZVxuXHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYnV0dG9uXG5cdFx0XHQvLyBhZGQgc29ja2V0IGV2ZW50IGxpc3RlbmVyIGZvciBjaGF0IG1lc3NhZ2Vcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBhbGwgZnV0dXJlIGRldmVsb3BtZW50IG9mIHRoZSBEYXRhaGV4YWdvbiBkZXNrdG9wIGVudmlyb25tZW50IGhhcyBkaXZlcnRlZCB0byBwcm9qZWN0IFB5bG9uLlxcbkZlZWwgbGlrZSB0cnlpbmcgc29tZXRoaW5nIG5ldz9cIikpIHsgXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3ZweWxvbi5uZXRcIjsgXG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiTUlESSBFZGl0b3JcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0YXJyYW5nbWVudDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRkYXRhOiBcIlwiLFxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZWFyY2hcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRyZXN1bHQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZXR0aW5nc1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNldHRpbmc6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7IFxuXHRcdFx0aWYoY29uZmlybShcIkFwcCBub3QgaW1wbGVtZW50ZWQuXFxuRnVydGhlcm1vcmUsIGFsbCBmdXR1cmUgZGV2ZWxvcG1lbnQgb2YgdGhlIERhdGFoZXhhZ29uIGRlc2t0b3AgZW52aXJvbm1lbnQgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkgeyBcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vdnB5bG9uLm5ldFwiOyBcblx0XHRcdH0gXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIi8vdmFyIEZyYW1lID0gcmVxdWlyZShcIi4uL3VpL2ZyYW1lLmpzXCIpLFxuLy9cdE1lbnUgPSByZXF1aXJlKFwiLi4vdWkvbWVudS5qc1wiKSxcbi8vXHRTaWRlYmFyID0gcmVxdWlyZShcIi4uL3VpL3NpZGViYXIuanNcIik7XG4vLyB0ZXN0IDJmZ3JmXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNoYXJpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvc2hhcmUucG5nXCIsXG5cdFx0dmlldzogbnVsbCxcblx0XHRtZW51OiBudWxsLFxuXHRcdHNpZGViYXI6IG51bGwsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXcgU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJOZXcgU2hvcnRjdXRcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNoYXJlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0cHVibGljOiBcIjFcIixcblx0XHRcdFx0XHR3aGl0ZWxpc3Q6IFwiXCIsXG5cdFx0XHRcdFx0ZGF0YTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHRuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHJlc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHB1YmxpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHR3aGl0ZUxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0ZGF0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHJlc291cmNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHB1YmxpY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcblx0XHRcdFx0d2hpdGVMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0XHRcdGRhdGFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxcblx0XHRcdFx0ZG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGwsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IG51bGwsXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFwiZWxlbWVudFwiOiBlbGVtZW50XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XG5cdFx0XHR0aGlzLm1lbnUgPSBtZW51O1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdFx0cmVzb3VyY2VMYWJlbC5pbm5lckhUTUwgPSBcIlJlc291cmNlXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlTGFiZWwpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChyZXNvdXJjZUlucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0XHRcdHB1YmxpY0xhYmVsLmlubmVySFRNTCA9IFwiUHVibGljXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHB1YmxpY0xhYmVsKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJZZXNcIjtcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdFx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcblx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBcIk5vXCI7XG5cdFx0XHRwdWJsaWNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdFx0XHRkYXRhTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRhXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFMYWJlbCk7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0d2hpdGVMaXN0TGFiZWwuaW5uZXJIVE1MID0gXCJXaGl0ZSBMaXN0XCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdExhYmVsKTtcblx0XHRcdHdoaXRlTGlzdElucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGxcIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdElucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblxuXHRcdFx0aWYgKCEhcC5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYWRkKCk7XG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF07XG5cdFx0XHRcdHNoYXJlLm5hbWUgPSBwLm9wZW4ucmVzb3VyY2U7XG5cdFx0XHRcdHNoYXJlLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0XHRyZXNvdXJjZUlucHV0LnZhbHVlID0gc2hhcmUucmVzb3VyY2U7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTaGFyZSBGb2xkZXJcIik7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0XHRzZWxmLnNhdmUoKTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkb25lSW5wdXQpO1xuXG5cdFx0XHRhcHAuc2hhcmluZy5saXN0QWxsU2hhcmVzKGFwcC51c2VyLm5hbWUsIChmdW5jdGlvbiAoc2lkZWJhckxpc3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHR2YXIgcyA9IDAsXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IG51bGwsXG5cdFx0XHRcdFx0XHRcdGl0ZW0gPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKCEhIHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImluaXQgYXBwIGdldCBzaGFyZXNcIiwgc2hhcmVzKTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKHMgPCBzaGFyZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmVzW3NdLmRpcmVjdG9yeX0pO1xuXHRcdFx0XHRcdFx0XHRcdHNpZGViYXJMaXN0Lm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0XHRcdFx0XHRzaWRlYmFyTGlzdC5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0cyArKztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHR9KShzaWRlYmFyKSk7XG5cblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIGlucHV0cy4uLiBuZWVkIHRvIGltcGxlbWVudFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2lkZWJhcik7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNpZGViYXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuc2hhcmUuc2NoZW1hKSxcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmUubmFtZX0pO1xuXHRcdFx0c2hhcmUucmVzb3VyY2UgPSBzaGFyZS5uYW1lO1xuXHRcdFx0c2hhcmVzLmFsbC5wdXNoKHNoYXJlKTtcblx0XHRcdHNoYXJlcy5jdXJyZW50ID0gc2hhcmVzLmFsbC5sZW5ndGggLSAxO1xuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRzaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxuXHRcdFx0XHRwYXRoID0gc2hhcmUucmVzb3VyY2UsXG5cdFx0XHRcdHVzZXJzID0gc2hhcmUud2hpdGVsaXN0LFxuXHRcdFx0XHRwdWJsaWNTaGFyZSA9IHNoYXJlLnB1YmxpYyxcblx0XHRcdFx0ZGF0YSA9IHNoYXJlLmRhdGE7XG5cdFx0XHR3aW5kb3cuYXBwLnNoYXJpbmcuc2F2ZVNoYXJlKHBhdGgsIHBhdGgsIHVzZXJzLCBwdWJsaWNTaGFyZSwgZGF0YSwgZnVuY3Rpb24gKHJlc3ApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzYXZlU2hhcmUuLi4gXCIsIHJlc3ApO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF0sXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5wYXRoO1xuXHRcdFx0YXBwLnNoYXJpbmcuZGVsZXRlU2hhcmUocGF0aCk7XG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcblxuXHRcdH1cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHsgLy8gc3VwcG9ydCBhbGdlYnJhIGFzIHdlbGwgYXMgKm5peCBjb21tYW5kc1xuXHRcdG5hbWU6IFwiVGVybWluYWxcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgRHVtcFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdHNjaGVtYToge1xuXHRcdFx0XCJtb2RlbHNcIjogW1wiT3V0cHV0XCJdLFxuXHRcdFx0XCJPdXRwdXRcIjoge1xuXHRcdFx0XHRcImRhdGFcIjogXCJcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRlbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBbdmlldywgbWVudV07XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBzZWxmID0ge1xyXG5cdFx0bmFtZTogXCJUZXh0IEVkaXRvclwiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdHNhdmVUaW1lb3V0OiAwLFxyXG5cdFx0bW9kZWxzOiB7XHJcblx0XHRcdGRvY3VtZW50OiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdHJlc291cmNlOiBcIk5ldyBEb2N1bWVudC50eHRcIixcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFsbDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcclxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xyXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG5cdFx0XHRcdHZpZXcgPSBudWxsLFxyXG5cdFx0XHRcdHNwYW4gPSBudWxsO1xyXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwidGV4dFwiKTtcclxuXHRcdFx0dGhpcy5zaWRlYmFyID0gc2lkZWJhcjtcclxuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcclxuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0XHRcdHNlbGYuc2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5zYXZlKHthdXRvOiB0cnVlfSk7IH0sIDMwMDAwKTtcclxuXHRcdFx0cmV0dXJuIFttZW51LCBzaWRlYmFyLCB2aWV3XTtcclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxyXG5cdFx0XHRcdGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxyXG5cdFx0XHRcdGRvYyA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuZG9jdW1lbnQuc2NoZW1hKSxcclxuXHRcdFx0XHRpdGVtID0gbnVsbCxcclxuXHRcdFx0XHRleGlzdHMgPSBmYWxzZSxcclxuXHRcdFx0XHRmaWxlbmFtZSA9IFwiXCIsXHJcblx0XHRcdFx0YSA9IGFwcC5maWxlcyxcclxuXHRcdFx0XHRsID0gYS5sZW5ndGggLTE7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBkb2N1bWVudFwiKTtcclxuXHJcblx0XHRcdGlmICghIXAgJiYgISFwLm9wZW4gJiYgISFwLm9wZW4ucmVzb3VyY2UpIHtcclxuXHRcdFx0XHRkb2MucmVzb3VyY2UgPSBwLm9wZW4ucmVzb3VyY2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gYXBwLmN3ZCArIFwiL1wiICsgZG9jLnJlc291cmNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmaWxlbmFtZSA9IGRvYy5yZXNvdXJjZS5zcGxpdChcIi9cIik7XHJcblx0XHRcdGZpbGVuYW1lID0gZmlsZW5hbWVbZmlsZW5hbWUubGVuZ3RoIC0xXTtcclxuXHJcblx0XHRcdHdoaWxlIChsID4gLTEpIHtcclxuXHRcdFx0XHRpZiAoIWV4aXN0cyAmJiBhW2xdLm5hbWUgPT0gZmlsZW5hbWUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZXhpc3RpbmcgZmlsZSBmb3VuZFwiLCBhW2xdLm5hbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5vcGVuKHtyZXNvdXJjZTogZG9jLnJlc291cmNlfSk7XHJcblx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGwgLS07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFleGlzdHMpIHtcclxuXHRcdFx0XHRkb2N1bWVudHMuYWxsLnB1c2goZG9jKTtcclxuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwiZWRpdGFibGVcIiwge3RpdGxlOiBkb2MucmVzb3VyY2V9KTtcclxuXHRcdFx0XHRkb2N1bWVudHMuY3VycmVudCA9IGRvY3VtZW50cy5hbGwubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRzaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRzaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBkb2N1bWVudHMgPSBzZWxmLm1vZGVscy5kb2N1bWVudCxcclxuXHRcdFx0XHRkb2MgPSBkb2N1bWVudHMuYWxsW2RvY3VtZW50cy5jdXJyZW50XTtcclxuXHRcdFx0ZG9jLmNvbnRlbnQgPSBzZWxmLnZpZXcuZWxlbWVudC5jaGlsZHJlblswXS52YWx1ZTtcclxuXHRcdFx0c2F2ZVRleHQoZG9jLnJlc291cmNlLCBkb2MuY29udGVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghIXAgJiYgcC5hdXRvID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNhdmVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgc2VsZi5zYXZlKHApOyB9LCA2MDAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0sXHJcblx0XHRvcGVuOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHR2YXIgZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXHJcblx0XHRcdFx0dGV4dGFyZWEgPSB0aGlzLnZpZXcuZWxlbWVudC5jaGlsZHJlblswXSxcclxuXHRcdFx0XHRhcHBsZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRleHQgZWRpdG9yIG9wZW4uLiBcIiwgcCk7XHJcblx0XHRcdGFwcC5yZXF1ZXN0KFwiZ2V0XCIsIHAucmVzb3VyY2UrXCI/Y2FjaGU9XCIrRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3ApIHtcclxuXHRcdFx0XHR2YXIgZG9jID0gT2JqZWN0LmNyZWF0ZShhcHBsZXQubW9kZWxzLmRvY3VtZW50LnNjaGVtYSksXHJcblx0XHRcdFx0XHRkb2N1bWVudHMgPSBhcHBsZXQubW9kZWxzLmRvY3VtZW50LFxyXG5cdFx0XHRcdFx0aXRlbSA9IG51bGw7XHJcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gcC5yZXNvdXJjZTtcclxuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwiZWRpdGFibGVcIiwge3RpdGxlOiBkb2MucmVzb3VyY2V9KTtcclxuXHRcdFx0XHRkb2N1bWVudHMuYWxsLnB1c2goZG9jKTtcclxuXHRcdFx0XHRkb2N1bWVudHMuY3VycmVudCA9IGRvY3VtZW50cy5hbGwuaW5kZXhPZihkb2MpO1xyXG5cdFx0XHRcdGRvYy5jb250ZW50ID0gcmVzcDtcclxuXHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHJlc3A7XHJcblx0XHRcdFx0YXBwbGV0LnNpZGViYXIub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdGFwcGxldC5zaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHRzZWxmLnNhdmUoKTtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHNlbGYuc2F2ZVRpbWVvdXQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImFjdHVhbGx5IGNsb3Npbmcgbm93Li5cIik7XHJcblx0XHR9XHJcblx0fTtcclxuICAgIHJldHVybiBzZWxmO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkRpc2sgVXNhZ2UgVmlzdWFsaXplclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHZpc3VhbGl6YXRpb246IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQXBwSWNvbihuYW1lLCBpbmRleCkge1xyXG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuXHRcdGFwcGxldCA9IGFwcGxldHNbbmFtZV0oKSxcblx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiXCI7XHJcblx0aWYgKCEhaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdGRpcmVjdGlvbkNsYXNzID0gXCIgdXBcIjtcclxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIGRvd25cIjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUFwcC1JY29uXCIgKyBkaXJlY3Rpb25DbGFzcyk7XHJcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGFwcGxldC5pY29uICsgXCIpO1wiKTtcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IFwiPHNwYW4+XCIgKyBhcHBsZXQubmFtZSArIFwiPC9zcGFuPlwiO1xyXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0YXBwLm9wZW5QYW5lKFwiYXBwXCIsIGFwcGxldC5uYW1lLCB7XHJcblx0XHRcdGFwcGxldDoge1xyXG5cdFx0XHRcdG5hbWU6IG5hbWVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSwgdHJ1ZSk7XHJcbn07XHJcbiIsIi8qIENhcmQuanMgKi9cblxudmFyIENvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vY29udGV4dG1lbnUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FyZChuYW1lLCByZXNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aSA9IG51bGwsXG5cdFx0dXAgPSBmYWxzZSxcblx0XHRpc0ltYWdlID0gZmFsc2UsXG5cdFx0Y29udGV4dE1lbnUgPSB0cnVlLFxuXHRcdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcblx0XHRjb25maWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRjb250ZXh0TWVudURhdGEgPSB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0cmVzb3VyY2U6IHJlc291cmNlLFxuXHRcdFx0bWVudUl0ZW1zOiBbXSwgLy8gZHVtbXkgbWVudSBpdGVtc1xuXHRcdFx0ZGlyZWN0b3J5OiBmYWxzZVxuXHRcdH07XG5cdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkXCIpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgcmVzb3VyY2UpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBuYW1lKTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblx0bGluay5pbm5lckhUTUwgPSBuYW1lO1xuXHQvL2xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCByZXNvdXJjZSk7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbmZpZ3VyZVwiKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0Y29uZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vZGVsZXRlUGF0aChhcHAuY3dkK1wiL1wiK25hbWUpO1xuXHRcdGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuVUktQ29udGV4dC1NZW51XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlIFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sIHRydWUpO1xuXHRpc0ltYWdlID0gLyhcXC5qcGd8XFwucG5nfFxcLmdpZnxcXC5qcGVnfFxcLndlYnApL2kudGVzdChyZXNvdXJjZSk7XG5cdGlmIChpc0ltYWdlKSB7XG5cdFx0dmFyIHRodW1iID0gcmVzb3VyY2UucmVwbGFjZSgvXFxzL2csIFwiJTIwXCIpO1xuXHRcdGlmICghLyhcXC53ZWJwfFxcLmdpZikvaS50ZXN0KHJlc291cmNlKSkgeyAvLyBkb24ndCB0aHVtYm5haWwgd2VicCBvciBnaWZcblx0XHRcdHZhciByUGF0aCA9IHRodW1iLnNwbGl0KFwiL1wiKTtcblx0XHRcdHZhciB0aHVtYiA9IHJQYXRoW3JQYXRoLmxlbmd0aCAtIDFdO1xuXHRcdFx0clBhdGguc3BsaWNlKHJQYXRoLmxlbmd0aCAtIDEsIDEpO1xuXHRcdFx0clBhdGgucHVzaChcIkRIVGh1bWJzXCIpO1xuXHRcdFx0aWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MSAmJiBhcHAudGh1bWJTaXplKSB8fCAod2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgIWFwcC50aHVtYlNpemUpKSB7IC8vIHVzZSBoaS1kcGkgdGh1bWJuYWlscyBieSBkZWZhdWx0XG5cdFx0XHRcdHJQYXRoLnB1c2goXCIxMDI0XCIpO1xuXHRcdFx0fVxuXHRcdFx0clBhdGgucHVzaCh0aHVtYiArIFwiLmpwZ1wiKTtcblx0XHRcdHRodW1iID0gclBhdGguam9pbihcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iID0gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1wiICsgdGh1bWIgKyBcIicpO1wiKTsgLy9yZXNvdXJjZStcIicpO1wiKTtcblx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBJbWFnZVwiKTtcblx0fSBlbHNlIHtcblx0XHRlLmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdGlmICgvXiguKlxcLyl7MCwxfVteXFwuXSouezF9JC8udGVzdChyZXNvdXJjZSkpIHsgLy8gZGV0ZWN0IGZvbGRlcnNcblx0XHRcdGNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkgPSB0cnVlO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9IFwiTElcIikge1xuXHRcdFx0XHRcdG9wZW5Gb2xkZXIocmVzb3VyY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgRm9sZGVyXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWNvbnRleHRNZW51KSB7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZSBlZGl0XCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFZGl0XCIpO1xuXHRcdFx0XHRlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGFwcC5yZXF1ZXN0KFwiR0VUXCIsIHJlc291cmNlICsgXCI/Y2FjaGU9XCIgKyBEYXRlLm5vdygpLCBcIlwiLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdGFwcC5vcGVuUGFuZSgnZWRpdCcsIG5hbWUsIHtcblx0XHRcdFx0XHRcdFx0XCJyZXNvdXJjZVwiOiBhcHAuY3dkICsgXCIvXCIgKyBuYW1lLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogcmVzcG9uc2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHRcdGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vXHRFeHBlcmltZW50YWwuLlxuXHRpZiAoY29udGV4dE1lbnUpIHtcblx0XHR2YXIgbWVudSA9IG5ldyBDb250ZXh0TWVudShjb250ZXh0TWVudURhdGEpO1xuXHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBzdHlsZSA9IGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG5cdFx0XHRpZiAoc3R5bGUuc2VhcmNoKFwic2hvd01lbnVcIikgPCAwKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dNZW51XCIpLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaXRlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5yZXBsYWNlKFwic2hvd01lbnVcIixcIlwiKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHlsZSArIFwiIHNob3dNZW51XCIpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0aWYgKGlzSW1hZ2UpIHtcblx0XHRcdGUuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGluay5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH1cblx0fVxuXHRpZiAoISFjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5KSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChjb25maWd1cmUpO1xuXHR9XG5cblx0Zm9yIChpIGluIG9wdGlvbnMpIHtcblx0XHRlLnNldEF0dHJpYnV0ZShpLCBvcHRpb25zW2ldKTtcblx0fVxuXHRyZXR1cm4gZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvbnRleHRNZW51KG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUNvbnRleHQtTWVudVwiKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLmRpcmVjdG9yeSA9PSB0cnVlKSB7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGlyZWN0b3J5IFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMuZGlyZWN0b3J5TWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9vcGVuLnBuZyk7JyBocmVmPSdqYXZhc2NyaXB0Om9wZW5Gb2xkZXIoXFxcIlwiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiXFxcIik7JyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2RhcmsvZG93bmxvYWQucG5nKTsnIGhyZWY9J1wiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiJyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1yZXNvdXJjZVwiLCBvcHRpb25zLnJlc291cmNlKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBvcHRpb25zLm5hbWUpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCB0cnVlKTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHR9KTtcbn07XG4iLCIgZnVuY3Rpb24gRGF0YVBhbmUgKHR5cGUsIG5hbWUsIGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRpdGxlU3RyaW5nID0gXCJcIixcclxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcclxuXHRcdHRpdGxlRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcbiAgICAgICAgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuXHRcdGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxyXG5cdFx0c2hvd1RpdGxlID0gZmFsc2UsXHJcbiAgICAgICAgc2hvd0VudHJ5ID0gZmFsc2UsXHJcbiAgICAgICAgc2hvd1RpdGxlRW50cnkgPSBmYWxzZSxcclxuXHRcdGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxyXG4gICAgICAgIHVwbG9hZCA9IG51bGwsXHJcbiAgICAgICAgZWRpdFdpZGdldCA9IG51bGwsXHJcblx0XHRhcHBsZXQgPSBudWxsO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmVcIik7XHJcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeVwiKTtcclxuXHRkb25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRvbmVcIik7XHJcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkRvbmVcIik7XHJcblx0ZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCh0cnVlKSwgdHJ1ZSk7XHJcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlXCIpO1xyXG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiWFwiKTtcclxuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCgpLCB0cnVlKTtcclxuICAgIGlmICghIWRhdGEuYXBwbGV0KSB7XHJcbiAgICAgICAgLy8gbG9hZCBhcHBsZXQgZm9ybSBkYXRhLmFwcGxldFxyXG4gICAgICAgIGFwcGxldCA9IG5ldyBBcHBsZXQoZGF0YS5hcHBsZXQubmFtZSwge29wZW46ICghISBkYXRhLmFwcGxldC5vcGVuID8gZGF0YS5hcHBsZXQub3BlbiA6IG51bGwpfSk7XHJcblx0XHRhcHBsZXQuZGF0YVBhbmUgPSB0aGlzOyAvLyB3b24ndCBiZSBuZWVkZWQgb25jZSBEYXRhUGFuZSBpcyBkZXByZWNhdGVkXHJcblx0XHR0aGlzLmFwcGxldCA9IGFwcGxldDtcclxuXHRcdGNvbnRhaW5lciA9IGFwcGxldC5kaXY7XHJcbiAgICB9IGVsc2Uge1xyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxyXG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIHRvdWNoXCIpO1xyXG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RvdWNoLnBuZylcIik7XHJcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblx0XHRcdGNhc2UgXCJta2RpclwiOlxyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgbWtkaXJcIik7XHJcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvbWtkaXIucG5nKTtcIik7XHJcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcclxuICAgICAgICAgICAgICAgIHVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xyXG5cdFx0XHRcdHRpdGxlU3RyaW5nID0gJzxpbWcgc3JjPVwiL2FwcC9kYXRhL3VwbG9hZC5wbmdcIiB0aXRsZT1cIlVwbG9hZCBGaWxlc1wiPjxzcGFuPlVwbG9hZCBGaWxlczwvc3Bhbj4nO1xyXG5cdFx0XHRcdHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmlld1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlZpZXcgRmlsZVwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XHJcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoISEgZGF0YS5pY29uKSB7XHJcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK2RhdGEuaWNvbitcIik7XCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90ZXh0Mi5wbmcpO1wiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZztcclxuXHRcdGlmIChzaG93VGl0bGUpIHtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YoZGF0YSk9PSd1bmRlZmluZWQnIHx8IHR5cGVvZihkYXRhLmNvbnRyb2xzKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhLmNvbnRyb2xzID09IHRydWUpIHtcclxuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKTtcclxuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhICYmICEhIGRhdGEuY2xhc3MpIHtcclxuXHRcdFx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGF0YS5jbGFzcyk7XHJcblx0XHR9XHJcbiAgICAgICAgaWYgKCEhIHVwbG9hZCkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXBsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3dUaXRsZUVudHJ5KSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVudHJ5KTtcclxuICAgICAgICAgICAgdGl0bGVFbnRyeS52YWx1ZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG93RW50cnkpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcclxuICAgICAgICAgICAgaWYgKCEhIGRhdGEudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZW50cnkudmFsdWUgPSBkYXRhLnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlZCB0byBhZGQgXCJkb25lXCIgYnV0dG9uIGhlcmVcclxuICAgIH1cclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuXHR0aGlzLmRvbmUgPSBkb25lO1xyXG5cdHRoaXMuZW50cnkgPSBlbnRyeTtcclxuXHR0aGlzLnBhbmVUaXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMudGl0bGVFbnRyeSA9IHRpdGxlRW50cnk7XHJcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gdXBsb2FkO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbn07XHJcblxyXG5EYXRhUGFuZS5wcm90b3R5cGUuc25hcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuXHR0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RpcmVjdGlvbik7XHJcbn07XHJcblxyXG5EYXRhUGFuZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXHJcbiAgICAgICAgcGFuZSA9IHRoaXM7XHJcbiAgICBwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcclxuICAgIHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcclxuXHRpZiAocGFuZXMubGVuZ3RoIDwgMSkge1xyXG5cdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5EYXRhUGFuZS5wcm90b3R5cGUuZ2V0Q2xvc2VNZXRob2QgPSBmdW5jdGlvbiAoc2F2ZSkge1xyXG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxyXG4gICAgICAgIHBhbmUgPSB0aGlzO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcclxuXHRcdHZhciBsZWF2ZU9wZW4gPSBmYWxzZTtcclxuXHRcdGlmIChzYXZlKSB7XHJcblx0XHRcdHN3aXRjaCAocGFuZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcclxuICAgICAgICAgICAgICAgICAgICBzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG1ha2VEaXJlY3RvcnkocGFuZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRGaWxlcyhwYW5lKTtcclxuXHRcdFx0XHRcdGxlYXZlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XHJcbiAgICAgICAgXHRcdFx0c2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlmICghbGVhdmVPcGVuKSB7XHJcblx0XHRcdHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xyXG5cdFx0XHRwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYXBwLnBhbmVzLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcclxuXHRcdH1cclxuICAgIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFQYW5lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZyYW1lKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSxcblx0XHR2aWV3ID0gbnVsbDtcblx0bWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUZyYW1lXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBtYWluO1xuXHRpZiAoISFvcHRpb25zICYmICEhb3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0dmlldyA9IG9wdGlvbnMuZWxlbWVudDtcblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlIFwidGV4dFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk2MCkge1xuXHRcdFx0XHR2aWV3LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjczNXB4O1wiKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjb2RlbWlycm9yXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNhbnZhc1wiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwid2ViZ2xcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdG1haW4uYXBwZW5kQ2hpbGQodmlldyk7XG5cdHRoaXMuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTWVudSh0eXBlLCBvcHRpb25zKSB7XHJcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxyXG5cdFx0Z2V0VGhlbWVkSWNvbiA9IGFwcC5nZXRUaGVtZWRJY29uLFxyXG5cdFx0bWVudUl0ZW1zID0gW10sXHJcblx0XHRtZW51SXRlbSA9IG51bGwsXHJcblx0XHRtZW51ID0gdGhpcyxcclxuXHRcdG0gPSAwO1xyXG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudVwiKTtcclxuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcclxuXHR0aGlzLmFwcGxldCA9IG51bGw7XHJcbiAgICBpZiAoISEgb3B0aW9ucykgeyAvLyBtYWtlIHN1cmUgb3B0aW9ucyBhcmUgZGVmaW5lZFxyXG4gICAgICAgIGlmICghISBvcHRpb25zLnRpdGxlQnV0dG9uKSB7XHJcblx0XHQgIG1lbnVJdGVtcy5wdXNoKG9wdGlvbnMudGl0bGVCdXR0b24pO1xyXG5cdCAgIH1cclxuICAgIH1cclxuXHR0eXBlID0gKCEhdHlwZSA/IHR5cGUgOiBcInN0YW5kYXJkXCIpO1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxyXG5cdFx0VUkuZGVmYXVsdHMubWVudS5vcHRpb25zLmZvckVhY2goZnVuY3Rpb24obWVudUl0ZW0pIHtcblx0XHRcdHZhciBpdGVtID0gT2JqZWN0LmNyZWF0ZShtZW51SXRlbSk7XG5cdFx0XHRpdGVtLmljb24gPSBhcHAuZ2V0VGhlbWVkSWNvbihpdGVtLmljb24pO1xuXHRcdFx0bWVudUl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0fSk7XHJcblx0XHRicmVhaztcclxuXHRjYXNlIFwiY3VzdG9tXCI6XHJcblx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcclxuXHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcclxuXHRcdG1lbnVJdGVtID0gbWVudUl0ZW1zW21dO1xyXG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XHJcblx0XHQoZnVuY3Rpb24gKGJ1dHRvbk1lbnUsIGJ1dHRvbk1lbnVJdGVtKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xyXG5cdFx0XHR9LCB0cnVlKTtcclxuXHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcclxuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0XHRtICs9IDE7XHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1vZGFsV2luZG93KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0c2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1vZGFsV2luZG93XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBzZWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXG5cdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGlmICghIW9wdGlvbnMuaWNvbikge1xuXHRcdGljb24uc3JjID0gYXBwLmdldFRoZW1lZEljb24ob3B0aW9ucy5pY29uKTtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGlmIChvcHRpb25zLnN1YnRpdGxlICE9IFwiXCIpIHtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChoMyk7XG5cdH1cblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHR5cGUsIG9wdGlvbnMsIHNlbGVjdGlvbkNhbGxiYWNrKSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImVkaXRhYmxlXCI6XG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb25zLnRpdGxlKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdGlmICghISBzZWxlY3Rpb25DYWxsYmFjaykge1xuXHRcdFx0XHRzZWxlY3Rpb25DYWxsYmFjayhldnQpO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWZWN0b3JFZGl0b3Iob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0aXRlbS5pbm5lckhUTUwgPSBcIjxoMj5cIiArIG9wdGlvbnMubmFtZSArIFwiPC9oMj5cIjtcblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIl19
