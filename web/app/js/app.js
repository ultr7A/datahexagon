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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
			if (confirm("App not implemented.\nFurthermore, development of all but the core Datahexagon desktop has diverted to project Pylon.\nFeel like trying something new?")) {
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
                makeDirectory;
                showEntry = true;
                showTitleEntry = true;
                container.setAttribute("class", "DataPane touch");
                titleEntry.setAttribute("style", "background-image: url(/app/data/touch.png)");
                titleEntry.setAttribute("class", "titleEntry icon");
                titleEntry.addEventListener("keypress", function (evt) {
                    if (evt.which == 13) {
                        done.click();
                    }
                }, true);
                break;
            case "mkdir":
                showTitleEntry = true;
                container.setAttribute("class", "DataPane mkdir");
                titleEntry.setAttribute("style", "background-image: url(/app/data/mkdir.png);");
                titleEntry.setAttribute("class", "titleEntry icon");
                titleEntry.addEventListener("keypress", function (evt) {
                    if (evt.which == 13) {
                        done.click();
                    }
                }, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvYXBwLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvM2QtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvYWxhcm0tY2xvY2suanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvaW1hZ2UtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvbWVzc2FnaW5nLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvbWlkaS1lZGl0b3IuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvYXBwbGV0cy9zZWFyY2guanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvYXBwbGV0cy9zZXR0aW5ncy5qcyIsIkQ6L2RldmVsb3BtZW50cy9vbGQvZGF0YWhleGFnb24uY29tL3NyYy9qcy9hcHBsZXRzL3NoYXJpbmcuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvYXBwbGV0cy90ZXJtaW5hbC5qcyIsIkQ6L2RldmVsb3BtZW50cy9vbGQvZGF0YWhleGFnb24uY29tL3NyYy9qcy9hcHBsZXRzL3RleHQtZWRpdG9yLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL2FwcGxldHMvdXNhZ2UtdmlzdWFsaXplci5qcyIsIkQ6L2RldmVsb3BtZW50cy9vbGQvZGF0YWhleGFnb24uY29tL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL3VpL2NhcmQuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvdWkvY29udGV4dG1lbnUuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvdWkvZnJhbWUuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvdWkvbWVudS5qcyIsIkQ6L2RldmVsb3BtZW50cy9vbGQvZGF0YWhleGFnb24uY29tL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkQ6L2RldmVsb3BtZW50cy9vbGQvZGF0YWhleGFnb24uY29tL3NyYy9qcy91aS9zaWRlYmFyLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL3VpL3NpZGViYXJpdGVtLmpzIiwiRDovZGV2ZWxvcG1lbnRzL29sZC9kYXRhaGV4YWdvbi5jb20vc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJEOi9kZXZlbG9wbWVudHMvb2xkL2RhdGFoZXhhZ29uLmNvbS9zcmMvanMvdWkvdmVjdG9yZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RD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dGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIG1haW4uanMgKi9cclxuXHJcbiB3aW5kb3cuQ2FyZCA9IHJlcXVpcmUoXCIuL3VpL2NhcmQuanNcIik7XHJcbiB3aW5kb3cuTWVudSA9IHJlcXVpcmUoXCIuL3VpL21lbnUuanNcIik7XHJcbiB3aW5kb3cuRGF0YVBhbmUgPSByZXF1aXJlKFwiLi91aS9kYXRhcGFuZS5qc1wiKTtcclxuIHdpbmRvdy5Db250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL3VpL2NvbnRleHRtZW51LmpzXCIpO1xyXG4gd2luZG93LkFwcEljb24gPSByZXF1aXJlKFwiLi91aS9hcHBpY29uLmpzXCIpO1xyXG4gd2luZG93LkZyYW1lID0gcmVxdWlyZShcIi4vdWkvZnJhbWUuanNcIik7XHJcbiB3aW5kb3cuU2lkZWJhciA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXIuanNcIik7XHJcbiB3aW5kb3cuU2lkZWJhckl0ZW0gPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyaXRlbS5qc1wiKTtcclxuIHdpbmRvdy5Nb2RhbFdpbmRvdyA9IHJlcXVpcmUoXCIuL3VpL21vZGFsd2luZG93LmpzXCIpO1xyXG4gd2luZG93LlRvb2xiYXIgPSByZXF1aXJlKFwiLi91aS90b29sYmFyLmpzXCIpO1xyXG4gd2luZG93LlZlY3RvckVkaXRvciA9IHJlcXVpcmUoXCIuL3VpL3ZlY3RvcmVkaXRvci5qc1wiKTtcclxuXHJcbiB3aW5kb3cuYXBwbGV0cyA9IFtdO1xyXG5cclxuIGFwcGxldHNbXCJhbGFybS1jbG9ja1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYWxhcm0tY2xvY2suanNcIik7XHJcbiBhcHBsZXRzW1widGVybWluYWxcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3Rlcm1pbmFsLmpzXCIpO1xyXG4gYXBwbGV0c1tcIm1lc3NhZ2luZ1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWVzc2FnaW5nLmpzXCIpO1xyXG4gYXBwbGV0c1tcImltYWdlLXZpZXdlclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzXCIpO1xyXG4gYXBwbGV0c1tcInRleHQtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy90ZXh0LWVkaXRvci5qc1wiKTtcclxuIGFwcGxldHNbXCJpbWFnZS1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2ltYWdlLWVkaXRvci5qc1wiKTtcclxuIGFwcGxldHNbXCIzZC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzLzNkLWVkaXRvci5qc1wiKTtcclxuIGFwcGxldHNbXCJtaWRpLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWlkaS1lZGl0b3IuanNcIik7XHJcbiBhcHBsZXRzW1wiYW5pbWF0aW9uLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYW5pbWF0aW9uLWVkaXRvci5qc1wiKTtcclxuIGFwcGxldHNbXCJzZWFyY2hcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NlYXJjaC5qc1wiKTtcclxuIGFwcGxldHNbXCJzZXR0aW5nc1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2V0dGluZ3MuanNcIik7XHJcbiBhcHBsZXRzW1widXNhZ2UtdmlzdWFsaXplclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdXNhZ2UtdmlzdWFsaXplci5qc1wiKTtcclxuIGFwcGxldHNbXCJzaGFyaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zaGFyaW5nLmpzXCIpO1xyXG5cclxuLy90ZXN0IHR0ZXN0XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCIzRCBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY3ViZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0b2JqZWN0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBkZXZlbG9wbWVudCBvZiBhbGwgYnV0IHRoZSBjb3JlIERhdGFoZXhhZ29uIGRlc2t0b3AgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly92cHlsb24ubmV0XCI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQ2xvY2tcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2xvY2stMi5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIkNsb2NrXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiQWxhcm1cIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJUaW1lclwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIkFsYXJtXCIsIFwiVGltZXJcIl0sXG5cdFx0XHRcIkFsYXJtXCI6IHtcblx0XHRcdFx0XCJob3Vyc1wiOiAwLFxuXHRcdFx0XHRcIm1pbnV0ZXNcIjogMCxcblx0XHRcdFx0XCJwbVwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFwiVGltZXJcIjoge1xuXHRcdFx0XHRcImR1cmF0aW9uXCI6IDAsXG5cdFx0XHRcdFwiZGF0ZVwiOiBcIjIwMTUtMDgtMDhcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBkZXZlbG9wbWVudCBvZiBhbGwgYnV0IHRoZSBjb3JlIERhdGFoZXhhZ29uIGRlc2t0b3AgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly92cHlsb24ubmV0XCI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQW5pbWF0aW9uIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRpZihjb25maXJtKFwiQXBwIG5vdCBpbXBsZW1lbnRlZC5cXG5GdXJ0aGVybW9yZSwgZGV2ZWxvcG1lbnQgb2YgYWxsIGJ1dCB0aGUgY29yZSBEYXRhaGV4YWdvbiBkZXNrdG9wIGhhcyBkaXZlcnRlZCB0byBwcm9qZWN0IFB5bG9uLlxcbkZlZWwgbGlrZSB0cnlpbmcgc29tZXRoaW5nIG5ldz9cIikpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vdnB5bG9uLm5ldFwiO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkltYWdlIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9pbWFnZS0yLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRpZihjb25maXJtKFwiQXBwIG5vdCBpbXBsZW1lbnRlZC5cXG5GdXJ0aGVybW9yZSwgZGV2ZWxvcG1lbnQgb2YgYWxsIGJ1dCB0aGUgY29yZSBEYXRhaGV4YWdvbiBkZXNrdG9wIGhhcyBkaXZlcnRlZCB0byBwcm9qZWN0IFB5bG9uLlxcbkZlZWwgbGlrZSB0cnlpbmcgc29tZXRoaW5nIG5ldz9cIikpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vdnB5bG9uLm5ldFwiO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgVmlld2VyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV4dFwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlByZXZpb3VzXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNZXNzYWdpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2hhdC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5ldyBNZXNzYWdlXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk5ldyBDaGF0XCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJPcHRpb25zXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0Y29udGFjdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdHR3aXR0ZXI6IFwiXCIsXG5cdFx0XHRcdFx0ZmFjZWJvb2s6IFwiXCIsXG5cdFx0XHRcdFx0c291bmRjbG91ZDogXCJcIixcblx0XHRcdFx0XHRnbWFpbDogXCJcIixcblx0XHRcdFx0XHRnaXRodWI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdHRvOiBcIlwiLFxuXHRcdFx0XHRcdGZyb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0Y2hhdHM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRyb29tOiBcIlwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdC8vIGNvbm5lY3Qgc29ja2V0IHRvIGFwcCBpZiBub3QgY29ubmVjdGVkLi4uXG5cdFx0XHQvLyBzZW5kIHdlbGNvbWUgbWVzc2FnZVxuXHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYnV0dG9uXG5cdFx0XHQvLyBhZGQgc29ja2V0IGV2ZW50IGxpc3RlbmVyIGZvciBjaGF0IG1lc3NhZ2Vcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBkZXZlbG9wbWVudCBvZiBhbGwgYnV0IHRoZSBjb3JlIERhdGFoZXhhZ29uIGRlc2t0b3AgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly92cHlsb24ubmV0XCI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNSURJIEVkaXRvclwiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRhcnJhbmdtZW50OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdGRhdGE6IFwiXCIsXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNlYXJjaFwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTZWFyY2hcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHJlc3VsdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNldHRpbmdzXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0c2V0dGluZzoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKGNvbmZpcm0oXCJBcHAgbm90IGltcGxlbWVudGVkLlxcbkZ1cnRoZXJtb3JlLCBkZXZlbG9wbWVudCBvZiBhbGwgYnV0IHRoZSBjb3JlIERhdGFoZXhhZ29uIGRlc2t0b3AgaGFzIGRpdmVydGVkIHRvIHByb2plY3QgUHlsb24uXFxuRmVlbCBsaWtlIHRyeWluZyBzb21ldGhpbmcgbmV3P1wiKSkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly92cHlsb24ubmV0XCI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIi8vdmFyIEZyYW1lID0gcmVxdWlyZShcIi4uL3VpL2ZyYW1lLmpzXCIpLFxyXG4vL1x0TWVudSA9IHJlcXVpcmUoXCIuLi91aS9tZW51LmpzXCIpLFxyXG4vL1x0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi91aS9zaWRlYmFyLmpzXCIpO1xyXG4vLyB0ZXN0IDJmZ3JmXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiBcIlNoYXJpbmdcIixcclxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9zaGFyZS5wbmdcIixcclxuXHRcdHZpZXc6IG51bGwsXHJcblx0XHRtZW51OiBudWxsLFxyXG5cdFx0c2lkZWJhcjogbnVsbCxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJOZXcgU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0XHRcIk5ldyBTaG9ydGN1dFwiOiBmdW5jdGlvbiAocCkge31cclxuXHRcdH0sXHJcblx0XHRtb2RlbHM6IHtcclxuXHRcdFx0c2hhcmU6IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxyXG5cdFx0XHRcdFx0cHVibGljOiBcIjFcIixcclxuXHRcdFx0XHRcdHdoaXRlbGlzdDogXCJcIixcclxuXHRcdFx0XHRcdGRhdGE6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFsbDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcclxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xyXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG5cdFx0XHRcdG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcclxuXHRcdFx0XHRyZXNvdXJjZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxyXG5cdFx0XHRcdHB1YmxpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxyXG5cdFx0XHRcdHdoaXRlTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxyXG5cdFx0XHRcdGRhdGFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcclxuXHRcdFx0XHRuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcblx0XHRcdFx0cmVzb3VyY2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuXHRcdFx0XHRwdWJsaWNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXHJcblx0XHRcdFx0d2hpdGVMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXHJcblx0XHRcdFx0ZGF0YUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxyXG5cdFx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksXHJcblx0XHRcdFx0ZG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxyXG5cdFx0XHRcdHZpZXcgPSBudWxsLFxyXG5cdFx0XHRcdHNwYW4gPSBudWxsLFxyXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxyXG5cdFx0XHRcdHNoYXJlID0gbnVsbCxcclxuXHRcdFx0XHRzZWxmID0gdGhpcztcclxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcImN1c3RvbVwiLCB7XHJcblx0XHRcdFx0XCJlbGVtZW50XCI6IGVsZW1lbnRcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XHJcblx0XHRcdHRoaXMubWVudSA9IG1lbnU7XHJcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdFx0XHRyZXNvdXJjZUxhYmVsLmlubmVySFRNTCA9IFwiUmVzb3VyY2VcIjtcclxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlTGFiZWwpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlSW5wdXQpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRcdFx0cHVibGljTGFiZWwuaW5uZXJIVE1MID0gXCJQdWJsaWNcIjtcclxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHB1YmxpY0xhYmVsKTtcclxuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMVwiKTtcclxuXHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IFwiWWVzXCI7XHJcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjBcIik7XHJcblx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBcIk5vXCI7XHJcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocHVibGljSW5wdXQpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRcdFx0ZGF0YUxhYmVsLmlubmVySFRNTCA9IFwiRGF0YVwiO1xyXG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQoZGF0YUxhYmVsKTtcclxuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhSW5wdXQpO1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdHdoaXRlTGlzdExhYmVsLmlubmVySFRNTCA9IFwiV2hpdGUgTGlzdFwiO1xyXG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQod2hpdGVMaXN0TGFiZWwpO1xyXG5cdFx0XHR3aGl0ZUxpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsXCIpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdElucHV0KTtcclxuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKCk7XHJcbiAgICAgICAgICAgIHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF07XHJcblxyXG5cdFx0XHRpZiAoISFwLm9wZW4pIHtcclxuXHRcdFx0XHRzaGFyZS5uYW1lID0gcC5vcGVuLnJlc291cmNlO1xyXG5cdFx0XHRcdHNoYXJlLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hhcmUubmFtZSA9IHNoYXJlLnJlc291cmNlID0gYXBwLmN3ZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb3VyY2VJbnB1dC52YWx1ZSA9IHNoYXJlLnJlc291cmNlO1xyXG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlNoYXJlIEZvbGRlclwiKTtcclxuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZVwiKTtcclxuXHRcdFx0XHRkb25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuXHRcdFx0XHRcdHNlbGYuc2F2ZSgpO1xyXG5cdFx0XHRcdH0sIHRydWUpO1xyXG5cclxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRvbmVJbnB1dCk7XHJcblxyXG5cdFx0XHRhcHAuc2hhcmluZy5saXN0QWxsU2hhcmVzKGFwcC51c2VyLm5hbWUsIChmdW5jdGlvbiAoc2lkZWJhckxpc3QpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAwLFxyXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0aXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdGlmICghISByZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiaW5pdCBhcHAgZ2V0IHNoYXJlc1wiLCBzaGFyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzIDwgc2hhcmVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmVzW3NdLmRpcmVjdG9yeX0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3Qub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3QuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cyArKztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKHNpZGViYXIpKTtcclxuXHJcblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIGlucHV0cy4uLiBuZWVkIHRvIGltcGxlbWVudFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxyXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxyXG5cdFx0XHRcdHNoYXJlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLm1vZGVscy5zaGFyZS5zY2hlbWEpLFxyXG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlLm5hbWV9KTtcclxuXHRcdFx0c2hhcmUucmVzb3VyY2UgPSBzaGFyZS5uYW1lO1xyXG5cdFx0XHRzaGFyZXMuYWxsLnB1c2goc2hhcmUpO1xyXG5cdFx0XHRzaGFyZXMuY3VycmVudCA9IHNoYXJlcy5hbGwubGVuZ3RoIC0gMTtcclxuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdHNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcclxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxyXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5yZXNvdXJjZSxcclxuXHRcdFx0XHR1c2VycyA9IHNoYXJlLndoaXRlbGlzdCxcclxuXHRcdFx0XHRwdWJsaWNTaGFyZSA9IHNoYXJlLnB1YmxpYyxcclxuXHRcdFx0XHRkYXRhID0gc2hhcmUuZGF0YTtcclxuXHRcdFx0d2luZG93LmFwcC5zaGFyaW5nLnNhdmVTaGFyZShwYXRoLCBwYXRoLCB1c2VycywgcHVibGljU2hhcmUsIGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzYXZlU2hhcmUuLi4gXCIsIHJlc3ApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcclxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxyXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5wYXRoO1xyXG5cdFx0XHRhcHAuc2hhcmluZy5kZWxldGVTaGFyZShwYXRoKTtcclxuXHRcdH0sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcclxuXHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7IC8vIHN1cHBvcnQgYWxnZWJyYSBhcyB3ZWxsIGFzICpuaXggY29tbWFuZHNcblx0XHRuYW1lOiBcIlRlcm1pbmFsXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIER1bXBcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIk91dHB1dFwiXSxcblx0XHRcdFwiT3V0cHV0XCI6IHtcblx0XHRcdFx0XCJkYXRhXCI6IFwiXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0ZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gW3ZpZXcsIG1lbnVdO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgc2VsZiA9IHtcclxuXHRcdG5hbWU6IFwiVGV4dCBFZGl0b3JcIixcclxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi90ZXh0LnBuZ1wiLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cclxuXHRcdH0sXHJcblx0XHRzYXZlVGltZW91dDogMCxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRkb2N1bWVudDoge1xyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0c2NoZW1hOiB7XHJcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJOZXcgRG9jdW1lbnQudHh0XCIsXHJcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiXCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbGw6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXHJcblx0XHRcdFx0c2lkZWJhciA9IG5ldyBTaWRlYmFyKFwiY3VzdG9tXCIsIHtcclxuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IFwiXCIsXHJcblx0XHRcdFx0XHRpdGVtczogW11cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcclxuXHRcdFx0XHRzcGFuID0gbnVsbDtcclxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcInRleHRcIik7XHJcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XHJcblx0XHRcdHRoaXMubWVudSA9IG1lbnU7XHJcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdFx0XHRzZWxmLnNhdmVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYuc2F2ZSh7YXV0bzogdHJ1ZX0pOyB9LCAzMDAwMCk7XHJcblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XHJcblx0XHR9LFxyXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHR2YXIgc2lkZWJhciA9IHRoaXMuc2lkZWJhcixcclxuXHRcdFx0XHRkb2N1bWVudHMgPSB0aGlzLm1vZGVscy5kb2N1bWVudCxcclxuXHRcdFx0XHRkb2MgPSBPYmplY3QuY3JlYXRlKHRoaXMubW9kZWxzLmRvY3VtZW50LnNjaGVtYSksXHJcblx0XHRcdFx0aXRlbSA9IG51bGwsXHJcblx0XHRcdFx0ZXhpc3RzID0gZmFsc2UsXHJcblx0XHRcdFx0ZmlsZW5hbWUgPSBcIlwiLFxyXG5cdFx0XHRcdGEgPSBhcHAuZmlsZXMsXHJcblx0XHRcdFx0bCA9IGEubGVuZ3RoIC0xO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZG9jdW1lbnRcIik7XHJcblxyXG5cdFx0XHRpZiAoISFwICYmICEhcC5vcGVuICYmICEhcC5vcGVuLnJlc291cmNlKSB7XHJcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRvYy5yZXNvdXJjZSA9IGFwcC5jd2QgKyBcIi9cIiArIGRvYy5yZXNvdXJjZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmlsZW5hbWUgPSBkb2MucmVzb3VyY2Uuc3BsaXQoXCIvXCIpO1xyXG5cdFx0XHRmaWxlbmFtZSA9IGZpbGVuYW1lW2ZpbGVuYW1lLmxlbmd0aCAtMV07XHJcblxyXG5cdFx0XHR3aGlsZSAobCA+IC0xKSB7XHJcblx0XHRcdFx0aWYgKCFleGlzdHMgJiYgYVtsXS5uYW1lID09IGZpbGVuYW1lKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImV4aXN0aW5nIGZpbGUgZm91bmRcIiwgYVtsXS5uYW1lKTtcclxuXHRcdFx0XHRcdHRoaXMub3Blbih7cmVzb3VyY2U6IGRvYy5yZXNvdXJjZX0pO1xyXG5cdFx0XHRcdFx0ZXhpc3RzID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICBsIC0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghZXhpc3RzKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnRzLmFsbC5wdXNoKGRvYyk7XHJcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcImVkaXRhYmxlXCIsIHt0aXRsZTogZG9jLnJlc291cmNlfSk7XHJcblx0XHRcdFx0ZG9jdW1lbnRzLmN1cnJlbnQgPSBkb2N1bWVudHMuYWxsLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHR2YXIgZG9jdW1lbnRzID0gc2VsZi5tb2RlbHMuZG9jdW1lbnQsXHJcblx0XHRcdFx0ZG9jID0gZG9jdW1lbnRzLmFsbFtkb2N1bWVudHMuY3VycmVudF07XHJcblx0XHRcdGRvYy5jb250ZW50ID0gc2VsZi52aWV3LmVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWU7XHJcblx0XHRcdHNhdmVUZXh0KGRvYy5yZXNvdXJjZSwgZG9jLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoISFwICYmIHAuYXV0byA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zYXZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHNlbGYuc2F2ZShwKTsgfSwgNjAwMDApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9LFxyXG5cdFx0b3BlbjogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dmFyIGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxyXG5cdFx0XHRcdHRleHRhcmVhID0gdGhpcy52aWV3LmVsZW1lbnQuY2hpbGRyZW5bMF0sXHJcblx0XHRcdFx0YXBwbGV0ID0gdGhpcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IGVkaXRvciBvcGVuLi4gXCIsIHApO1xyXG5cdFx0XHRhcHAucmVxdWVzdChcImdldFwiLCBwLnJlc291cmNlK1wiP2NhY2hlPVwiK0RhdGUubm93KCksIFwiXCIsIGZ1bmN0aW9uIChyZXNwKSB7XHJcblx0XHRcdFx0dmFyIGRvYyA9IE9iamVjdC5jcmVhdGUoYXBwbGV0Lm1vZGVscy5kb2N1bWVudC5zY2hlbWEpLFxyXG5cdFx0XHRcdFx0ZG9jdW1lbnRzID0gYXBwbGV0Lm1vZGVscy5kb2N1bWVudCxcclxuXHRcdFx0XHRcdGl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdGRvYy5yZXNvdXJjZSA9IHAucmVzb3VyY2U7XHJcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcImVkaXRhYmxlXCIsIHt0aXRsZTogZG9jLnJlc291cmNlfSk7XHJcblx0XHRcdFx0ZG9jdW1lbnRzLmFsbC5wdXNoKGRvYyk7XHJcblx0XHRcdFx0ZG9jdW1lbnRzLmN1cnJlbnQgPSBkb2N1bWVudHMuYWxsLmluZGV4T2YoZG9jKTtcclxuXHRcdFx0XHRkb2MuY29udGVudCA9IHJlc3A7XHJcblx0XHRcdFx0dGV4dGFyZWEudmFsdWUgPSByZXNwO1xyXG5cdFx0XHRcdGFwcGxldC5zaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRhcHBsZXQuc2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0c2VsZi5zYXZlKCk7XHJcblx0XHRcdGNsZWFyVGltZW91dChzZWxmLnNhdmVUaW1lb3V0KTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhY3R1YWxseSBjbG9zaW5nIG5vdy4uXCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcbiAgICByZXR1cm4gc2VsZjtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJEaXNrIFVzYWdlIFZpc3VhbGl6ZXJcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHR2aXN1YWxpemF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcEljb24obmFtZSwgaW5kZXgpIHtcclxuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcblx0XHRhcHBsZXQgPSBhcHBsZXRzW25hbWVdKCksXG5cdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xyXG5cdGlmICghIWluZGV4KSB7XHJcblx0XHRpZiAoaW5kZXggPT0gMSkge1xyXG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XHJcblx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcclxuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiBkb3duXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1BcHAtSWNvblwiICsgZGlyZWN0aW9uQ2xhc3MpO1xyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBhcHBsZXQuaWNvbiArIFwiKTtcIik7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgYXBwbGV0Lm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGFwcC5vcGVuUGFuZShcImFwcFwiLCBhcHBsZXQubmFtZSwge1xyXG5cdFx0XHRhcHBsZXQ6IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sIHRydWUpO1xyXG59O1xyXG4iLCIvKiBDYXJkLmpzICovXG5cbnZhciBDb250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL2NvbnRleHRtZW51LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhcmQobmFtZSwgcmVzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGkgPSBudWxsLFxuXHRcdHVwID0gZmFsc2UsXG5cdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdGNvbnRleHRNZW51ID0gdHJ1ZSxcblx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG5cdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0Y29udGV4dE1lbnVEYXRhID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHJlc291cmNlOiByZXNvdXJjZSxcblx0XHRcdG1lbnVJdGVtczogW10sIC8vIGR1bW15IG1lbnUgaXRlbXNcblx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHR9O1xuXHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZFwiKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgbmFtZSk7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcmVzb3VyY2UpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maWd1cmVcIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdGNvbmZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2RlbGV0ZVBhdGgoYXBwLmN3ZCtcIi9cIituYW1lKTtcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlVJLUNvbnRleHQtTWVudVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LCB0cnVlKTtcblx0aXNJbWFnZSA9IC8oXFwuanBnfFxcLnBuZ3xcXC5naWZ8XFwuanBlZ3xcXC53ZWJwKS9pLnRlc3QocmVzb3VyY2UpO1xuXHRpZiAoaXNJbWFnZSkge1xuXHRcdHZhciB0aHVtYiA9IHJlc291cmNlLnJlcGxhY2UoL1xccy9nLCBcIiUyMFwiKTtcblx0XHRpZiAoIS8oXFwud2VicHxcXC5naWYpL2kudGVzdChyZXNvdXJjZSkpIHsgLy8gZG9uJ3QgdGh1bWJuYWlsIHdlYnAgb3IgZ2lmXG5cdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHR2YXIgdGh1bWIgPSByUGF0aFtyUGF0aC5sZW5ndGggLSAxXTtcblx0XHRcdHJQYXRoLnNwbGljZShyUGF0aC5sZW5ndGggLSAxLCAxKTtcblx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdGlmICgod2luZG93LmlubmVyV2lkdGggPCA2NDEgJiYgYXBwLnRodW1iU2l6ZSkgfHwgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmICFhcHAudGh1bWJTaXplKSkgeyAvLyB1c2UgaGktZHBpIHRodW1ibmFpbHMgYnkgZGVmYXVsdFxuXHRcdFx0XHRyUGF0aC5wdXNoKFwiMTAyNFwiKTtcblx0XHRcdH1cblx0XHRcdHJQYXRoLnB1c2godGh1bWIgKyBcIi5qcGdcIik7XG5cdFx0XHR0aHVtYiA9IHJQYXRoLmpvaW4oXCIvXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYiA9IHJlc291cmNlO1xuXHRcdH1cblx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgSW1hZ2VcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRpZiAoL14oLipcXC8pezAsMX1bXlxcLl0qLnsxfSQvLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRldGVjdCBmb2xkZXJzXG5cdFx0XHRjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5ID0gdHJ1ZTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRvcGVuRm9sZGVyKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEZvbGRlclwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjb250ZXh0TWVudSkge1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2UgZWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhcHAucmVxdWVzdChcIkdFVFwiLCByZXNvdXJjZSArIFwiP2NhY2hlPVwiICsgRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRhcHAub3BlblBhbmUoJ2VkaXQnLCBuYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1x0RXhwZXJpbWVudGFsLi5cblx0aWYgKGNvbnRleHRNZW51KSB7XG5cdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgc3R5bGUgPSBlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93TWVudVwiKSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdFx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGl0ZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikucmVwbGFjZShcInNob3dNZW51XCIsXCJcIikpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3R5bGUgKyBcIiBzaG93TWVudVwiKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGlmIChpc0ltYWdlKSB7XG5cdFx0XHRlLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9XG5cdH1cblx0aWYgKCEhY29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSkge1xuXHRcdGUuYXBwZW5kQ2hpbGQoY29uZmlndXJlKTtcblx0fVxuXG5cdGZvciAoaSBpbiBvcHRpb25zKSB7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uc1tpXSk7XG5cdH1cblx0cmV0dXJuIGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb250ZXh0TWVudShvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Db250ZXh0LU1lbnVcIik7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5kaXJlY3RvcnkgPT0gdHJ1ZSkge1xuXHRcdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRpcmVjdG9yeSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLmRpcmVjdG9yeU1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2Rhcmsvb3Blbi5wbmcpOycgaHJlZj0namF2YXNjcmlwdDpvcGVuRm9sZGVyKFxcXCJcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIlxcXCIpOycgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL2Rvd25sb2FkLnBuZyk7JyBocmVmPSdcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIicgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgb3B0aW9ucy5yZXNvdXJjZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIiwiIGZ1bmN0aW9uIERhdGFQYW5lICh0eXBlLCBuYW1lLCBkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICB0aXRsZVN0cmluZyA9IFwiXCIsXHJcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXHJcblx0XHR0aXRsZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxyXG4gICAgICAgIGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcblx0XHRlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcclxuXHRcdHNob3dUaXRsZSA9IGZhbHNlLFxyXG4gICAgICAgIHNob3dFbnRyeSA9IGZhbHNlLFxyXG4gICAgICAgIHNob3dUaXRsZUVudHJ5ID0gZmFsc2UsXHJcblx0XHRjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuICAgICAgICB1cGxvYWQgPSBudWxsLFxyXG4gICAgICAgIGVkaXRXaWRnZXQgPSBudWxsLFxyXG5cdFx0YXBwbGV0ID0gbnVsbDtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lXCIpO1xyXG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnlcIik7XHJcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG5cdGRvbmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xyXG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpO1xyXG5cdGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QodHJ1ZSksIHRydWUpO1xyXG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVwiKTtcclxuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlhcIik7XHJcblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QoKSwgdHJ1ZSk7XHJcbiAgICBpZiAoISFkYXRhLmFwcGxldCkge1xyXG4gICAgICAgIC8vIGxvYWQgYXBwbGV0IGZvcm0gZGF0YS5hcHBsZXRcclxuICAgICAgICBhcHBsZXQgPSBuZXcgQXBwbGV0KGRhdGEuYXBwbGV0Lm5hbWUsIHtvcGVuOiAoISEgZGF0YS5hcHBsZXQub3BlbiA/IGRhdGEuYXBwbGV0Lm9wZW4gOiBudWxsKX0pO1xyXG5cdFx0YXBwbGV0LmRhdGFQYW5lID0gdGhpczsgLy8gd29uJ3QgYmUgbmVlZGVkIG9uY2UgRGF0YVBhbmUgaXMgZGVwcmVjYXRlZFxyXG5cdFx0dGhpcy5hcHBsZXQgPSBhcHBsZXQ7XHJcblx0XHRjb250YWluZXIgPSBhcHBsZXQuZGl2O1xyXG4gICAgfSBlbHNlIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidG91Y2hcIjptYWtlRGlyZWN0b3J5XHJcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgdG91Y2hcIik7XHJcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdG91Y2gucG5nKVwiKTtcclxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVFbnRyeS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHRcdFx0Y2FzZSBcIm1rZGlyXCI6XHJcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBta2RpclwiKTtcclxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS9ta2Rpci5wbmcpO1wiKTtcclxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVFbnRyeS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgdXBsb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XHJcblx0XHRcdFx0dGl0bGVTdHJpbmcgPSAnPGltZyBzcmM9XCIvYXBwL2RhdGEvdXBsb2FkLnBuZ1wiIHRpdGxlPVwiVXBsb2FkIEZpbGVzXCI+PHNwYW4+VXBsb2FkIEZpbGVzPC9zcGFuPic7XHJcblx0XHRcdFx0c2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XHJcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9IFwiVmlldyBGaWxlXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICghISBkYXRhLmljb24pIHtcclxuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrZGF0YS5pY29uK1wiKTtcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RleHQyLnBuZyk7XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xyXG5cdFx0aWYgKHNob3dUaXRsZSkge1xyXG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZihkYXRhKT09J3VuZGVmaW5lZCcgfHwgdHlwZW9mKGRhdGEuY29udHJvbHMpID09ICd1bmRlZmluZWQnIHx8IGRhdGEuY29udHJvbHMgPT0gdHJ1ZSkge1xyXG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpO1xyXG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEgJiYgISEgZGF0YS5jbGFzcykge1xyXG5cdFx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkYXRhLmNsYXNzKTtcclxuXHRcdH1cclxuICAgICAgICBpZiAoISEgdXBsb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvd1RpdGxlRW50cnkpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRW50cnkpO1xyXG4gICAgICAgICAgICB0aXRsZUVudHJ5LnZhbHVlID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3dFbnRyeSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xyXG4gICAgICAgICAgICBpZiAoISEgZGF0YS50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS52YWx1ZSA9IGRhdGEudGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1c2VkIHRvIGFkZCBcImRvbmVcIiBidXR0b24gaGVyZVxyXG4gICAgfVxyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuZG9uZSA9IGRvbmU7XHJcblx0dGhpcy5lbnRyeSA9IGVudHJ5O1xyXG5cdHRoaXMucGFuZVRpdGxlID0gdGl0bGU7XHJcblx0dGhpcy50aXRsZUVudHJ5ID0gdGl0bGVFbnRyeTtcclxuICAgIHRoaXMudXBsb2FkSW5wdXQgPSB1cGxvYWQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxufTtcclxuXHJcbkRhdGFQYW5lLnByb3RvdHlwZS5zbmFwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG5cdHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGlyZWN0aW9uKTtcclxufTtcclxuXHJcbkRhdGFQYW5lLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcclxuICAgICAgICBwYW5lID0gdGhpcztcclxuICAgIHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xyXG4gICAgcGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xyXG5cdGlmIChwYW5lcy5sZW5ndGggPCAxKSB7XHJcblx0XHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbkRhdGFQYW5lLnByb3RvdHlwZS5nZXRDbG9zZU1ldGhvZCA9IGZ1bmN0aW9uIChzYXZlKSB7XHJcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXHJcbiAgICAgICAgcGFuZSA9IHRoaXM7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0dmFyIGxlYXZlT3BlbiA9IGZhbHNlO1xyXG5cdFx0aWYgKHNhdmUpIHtcclxuXHRcdFx0c3dpdGNoIChwYW5lLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVUZXh0KGFwcC5jd2QrXCIvXCIrcGFuZS50aXRsZUVudHJ5LnZhbHVlLCBwYW5lLmVudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1rZGlyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFrZURpcmVjdG9yeShwYW5lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZEZpbGVzKHBhbmUpO1xyXG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcclxuICAgICAgICBcdFx0XHRzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFsZWF2ZU9wZW4pIHtcclxuXHRcdFx0cGFuZS5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lLmNvbnRhaW5lcik7XHJcblx0XHRcdHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcclxuXHRcdH1cclxuXHRcdGlmIChhcHAucGFuZXMubGVuZ3RoIDwgMSkge1xyXG5cdFx0XHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xyXG5cdFx0fVxyXG4gICAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF0YVBhbmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNZW51KHR5cGUsIG9wdGlvbnMpIHtcclxuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXHJcblx0XHRnZXRUaGVtZWRJY29uID0gYXBwLmdldFRoZW1lZEljb24sXHJcblx0XHRtZW51SXRlbXMgPSBbXSxcclxuXHRcdG1lbnVJdGVtID0gbnVsbCxcclxuXHRcdG1lbnUgPSB0aGlzLFxyXG5cdFx0bSA9IDA7XHJcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xyXG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xyXG5cdHRoaXMuYXBwbGV0ID0gbnVsbDtcclxuICAgIGlmICghISBvcHRpb25zKSB7IC8vIG1ha2Ugc3VyZSBvcHRpb25zIGFyZSBkZWZpbmVkXHJcbiAgICAgICAgaWYgKCEhIG9wdGlvbnMudGl0bGVCdXR0b24pIHtcclxuXHRcdCAgbWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XHJcblx0ICAgfVxyXG4gICAgfVxyXG5cdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0Y2FzZSBcInN0YW5kYXJkXCI6XHJcblx0XHRVSS5kZWZhdWx0cy5tZW51Lm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZW51SXRlbSkge1xuXHRcdFx0dmFyIGl0ZW0gPSBPYmplY3QuY3JlYXRlKG1lbnVJdGVtKTtcblx0XHRcdGl0ZW0uaWNvbiA9IGFwcC5nZXRUaGVtZWRJY29uKGl0ZW0uaWNvbik7XG5cdFx0XHRtZW51SXRlbXMucHVzaChpdGVtKTtcblx0XHR9KTtcclxuXHRcdGJyZWFrO1xyXG5cdGNhc2UgXCJjdXN0b21cIjpcclxuXHRcdG1lbnVJdGVtcyA9IG9wdGlvbnMubWVudUl0ZW1zO1xyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG5cdHdoaWxlIChtIDwgbWVudUl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0Ly8gY3JlYXRlIG1lbnUgZm9yIGFwcFxyXG5cdFx0bWVudUl0ZW0gPSBtZW51SXRlbXNbbV07XHJcblx0XHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51LUJ1dHRvblwiKTtcclxuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiamF2YXNjcmlwdDp2b2lkKDApO1wiKTtcclxuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBtZW51SXRlbS5uYW1lKTtcclxuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgbWVudUl0ZW0uaWNvbiArIFwiKVwiKTtcclxuXHRcdChmdW5jdGlvbiAoYnV0dG9uTWVudSwgYnV0dG9uTWVudUl0ZW0pIHtcclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblx0XHRcdFx0YnV0dG9uTWVudUl0ZW0uY2xpY2soYnV0dG9uTWVudSk7XHJcblx0XHRcdH0sIHRydWUpO1xyXG5cdFx0fSkobWVudSwgbWVudUl0ZW0pO1xyXG5cdFx0YXNpZGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRcdG0gKz0gMTtcclxuXHR9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTW9kYWxXaW5kb3codHlwZSwgb3B0aW9ucykge1xuXHR2YXIgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRzZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTW9kYWxXaW5kb3dcIik7XG5cdHRoaXMuZWxlbWVudCA9IHNlY3Rpb247XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gU2lkZWJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKSxcblx0XHRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcblx0XHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0aWYgKCEhb3B0aW9ucy5pY29uKSB7XG5cdFx0aWNvbi5zcmMgPSBhcHAuZ2V0VGhlbWVkSWNvbihvcHRpb25zLmljb24pO1xuXHRcdGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGljb24pO1xuXHR9XG5cdGgyLmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdGgzLmlubmVySFRNTCA9IG9wdGlvbnMuc3VidGl0bGU7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgyKTtcblx0aWYgKG9wdGlvbnMuc3VidGl0bGUgIT0gXCJcIikge1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0fVxuXHRhc2lkZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0Ly8gc3RhbmRhcmQgZmVhdHVyZXNcblx0XHQvLyBtaWdodCB3YW50IGEgbW9kZSB3aGVyZSBpdCBlbmhhbmNlcyAvIG1lcmdlcyB3aXRoIHRoZSBtZW51XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblx0XHRvcHRpb25zLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHNpZGViYXJJdGVtKSB7XG5cdFx0XHRhc2lkZS5hcHBlbmRDaGlsZChzaWRlYmFySXRlbS5lbGVtZW50KTtcblx0XHR9KTtcblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gU2lkZWJhckl0ZW0odHlwZSwgb3B0aW9ucywgc2VsZWN0aW9uQ2FsbGJhY2spIHtcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlIFwic3RhbmRhcmRcIjpcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy50aXRsZTtcblx0XHRicmVhaztcblx0XHRjYXNlIFwiZWRpdGFibGVcIjpcblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9wdGlvbnMudGl0bGUpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRicmVhaztcblx0XHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0aWYgKCEhIHNlbGVjdGlvbkNhbGxiYWNrKSB7XG5cdFx0XHRcdHNlbGVjdGlvbkNhbGxiYWNrKGV2dCk7XG5cdFx0fVxuXHR9LCB0cnVlKTtcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJJdGVtXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb29sYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVRvb2xiYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZlY3RvckVkaXRvcihvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1WZWN0b3ItRWRpdG9yXCIpO1xuXHRpdGVtLmlubmVySFRNTCA9IFwiPGgyPlwiICsgb3B0aW9ucy5uYW1lICsgXCI8L2gyPlwiO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5tZW51SXRlbXM7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRtZW51SXRlbS5jbGljayhldnQpO1xuXHRcdH0sIGZhbHNlKTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHR9KTtcbn07XG4iXX0=
