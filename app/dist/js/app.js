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
		init: function init(p) {},
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
		init: function init(p) {},
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
		init: function init(p) {},
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
		init: function init(p) {},
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
		init: function init(p) {},
		add: function add(p) {},
		save: function save(p) {},
		close: function close(p) {}
	};
};

// connect socket to app if not connected...
// send welcome message
// add event listener to send button
// add socket event listener for chat message

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
		init: function init(p) {},
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

			if (!!p && p.open) {
				this.add({ resource: p.open });
			} else {
				this.add();
			}

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
			    l = a.length;

			if (!!p && !!p.open && !!p.open.resource) {
				doc.resource = p.open.resource;
			} else {
				doc.resource = app.cwd + "/" + doc.resource;
			}

			filename = doc.resource.split("/");
			filename = filename[filename.length - 1];

			while (--l > -1) {
				if (!exists && a[l].name == filename) {
					console.log(a[l].name);
					this.open({ resource: doc.resource });
					exists = true;
				}
			}
			//			if (!exists) {
			//				documents.all.push(doc);
			//				item = new SidebarItem("editable", {title: doc.resource});
			//				documents.current = documents.all.length - 1;
			//				sidebar.options.items.push(item);
			//				sidebar.element.appendChild(item.element);
			//			}
		},
		save: function save(p) {
			var documents = self.models.document,
			    doc = documents.all[documents.current];
			doc.content = self.view.element.children[0].value;
			saveText(doc.resource, doc.content);
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
			app.request("get", p.resource, "?cache=" + Date.now(), function (resp) {
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
                titleEntry.setAttribute("style", "background-image: url(/app/data/touch.png)");
                titleEntry.setAttribute("class", "titleEntry icon");
                break;
            case "mkdir":
                showTitleEntry = true;
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
    app.showMenu("none");
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
        app.showMenu("none");
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
	aside.appendChild(h3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbGFybS1jbG9jay5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9pbWFnZS12aWV3ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvbWVzc2FnaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NlYXJjaC5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZXR0aW5ncy5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3Rlcm1pbmFsLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3RleHQtZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2FwcGljb24uanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NhcmQuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9kYXRhcGFuZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZnJhbWUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21vZGFsd2luZG93LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdG9vbGJhci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdmVjdG9yZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFdEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRXBCLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxPQUFPLFNBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2RCxPQUFPLFVBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN6RCxPQUFPLENBQUMsY0FBYyxD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QUFDN0MsTUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsTUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDN0MsV0FBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1YsTUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7Q0FDSCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIG1haW4uanMgKi9cblxuIHdpbmRvdy5DYXJkID0gcmVxdWlyZShcIi4vdWkvY2FyZC5qc1wiKTtcbiB3aW5kb3cuTWVudSA9IHJlcXVpcmUoXCIuL3VpL21lbnUuanNcIik7XG4gd2luZG93LkRhdGFQYW5lID0gcmVxdWlyZShcIi4vdWkvZGF0YXBhbmUuanNcIik7XG4gd2luZG93LkNvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vdWkvY29udGV4dG1lbnUuanNcIik7XG4gd2luZG93LkFwcEljb24gPSByZXF1aXJlKFwiLi91aS9hcHBpY29uLmpzXCIpO1xuIHdpbmRvdy5GcmFtZSA9IHJlcXVpcmUoXCIuL3VpL2ZyYW1lLmpzXCIpO1xuIHdpbmRvdy5TaWRlYmFyID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhci5qc1wiKTtcbiB3aW5kb3cuU2lkZWJhckl0ZW0gPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyaXRlbS5qc1wiKTtcbiB3aW5kb3cuTW9kYWxXaW5kb3cgPSByZXF1aXJlKFwiLi91aS9tb2RhbHdpbmRvdy5qc1wiKTtcbiB3aW5kb3cuVG9vbGJhciA9IHJlcXVpcmUoXCIuL3VpL3Rvb2xiYXIuanNcIik7XG4gd2luZG93LlZlY3RvckVkaXRvciA9IHJlcXVpcmUoXCIuL3VpL3ZlY3RvcmVkaXRvci5qc1wiKTtcblxuIHdpbmRvdy5hcHBsZXRzID0gW107XG5cbiBhcHBsZXRzW1wiYWxhcm0tY2xvY2tcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2FsYXJtLWNsb2NrLmpzXCIpO1xuIGFwcGxldHNbXCJ0ZXJtaW5hbFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdGVybWluYWwuanNcIik7XG4gYXBwbGV0c1tcIm1lc3NhZ2luZ1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWVzc2FnaW5nLmpzXCIpO1xuIGFwcGxldHNbXCJpbWFnZS12aWV3ZXJcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2ltYWdlLXZpZXdlci5qc1wiKTtcbiBhcHBsZXRzW1widGV4dC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3RleHQtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJpbWFnZS1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2ltYWdlLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiM2QtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy8zZC1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcIm1pZGktZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9taWRpLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiYW5pbWF0aW9uLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYW5pbWF0aW9uLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wic2VhcmNoXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zZWFyY2guanNcIik7XG4gYXBwbGV0c1tcInNldHRpbmdzXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zZXR0aW5ncy5qc1wiKTtcbiBhcHBsZXRzW1widXNhZ2UtdmlzdWFsaXplclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdXNhZ2UtdmlzdWFsaXplci5qc1wiKTtcbiBhcHBsZXRzW1wic2hhcmluZ1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2hhcmluZy5qc1wiKTtcblxuLy90ZXN0IHR0ZXN0XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCIzRCBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY3ViZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0b2JqZWN0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJDbG9ja1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jbG9jay0yLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiQ2xvY2tcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJBbGFybVwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlRpbWVyXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHR9LFxuXHRcdHNjaGVtYToge1xuXHRcdFx0XCJtb2RlbHNcIjogW1wiQWxhcm1cIiwgXCJUaW1lclwiXSxcblx0XHRcdFwiQWxhcm1cIjoge1xuXHRcdFx0XHRcImhvdXJzXCI6IDAsXG5cdFx0XHRcdFwibWludXRlc1wiOiAwLFxuXHRcdFx0XHRcInBtXCI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XCJUaW1lclwiOiB7XG5cdFx0XHRcdFwiZHVyYXRpb25cIjogMCxcblx0XHRcdFx0XCJkYXRlXCI6IFwiMjAxNS0wOC0wOFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQW5pbWF0aW9uIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2ltYWdlLTIucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgVmlld2VyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV4dFwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlByZXZpb3VzXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNZXNzYWdpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2hhdC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5ldyBNZXNzYWdlXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk5ldyBDaGF0XCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJPcHRpb25zXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0Y29udGFjdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdHR3aXR0ZXI6IFwiXCIsXG5cdFx0XHRcdFx0ZmFjZWJvb2s6IFwiXCIsXG5cdFx0XHRcdFx0c291bmRjbG91ZDogXCJcIixcblx0XHRcdFx0XHRnbWFpbDogXCJcIixcblx0XHRcdFx0XHRnaXRodWI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdHRvOiBcIlwiLFxuXHRcdFx0XHRcdGZyb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0Y2hhdHM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRyb29tOiBcIlwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdC8vIGNvbm5lY3Qgc29ja2V0IHRvIGFwcCBpZiBub3QgY29ubmVjdGVkLi4uXG5cdFx0XHQvLyBzZW5kIHdlbGNvbWUgbWVzc2FnZVxuXHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYnV0dG9uXG5cdFx0XHQvLyBhZGQgc29ja2V0IGV2ZW50IGxpc3RlbmVyIGZvciBjaGF0IG1lc3NhZ2Vcblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIk1JREkgRWRpdG9yXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGFycmFuZ21lbnQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0ZGF0YTogXCJcIixcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiU2VhcmNoXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0cmVzdWx0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiU2V0dGluZ3NcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRzZXR0aW5nOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCIvL3ZhciBGcmFtZSA9IHJlcXVpcmUoXCIuLi91aS9mcmFtZS5qc1wiKSxcbi8vXHRNZW51ID0gcmVxdWlyZShcIi4uL3VpL21lbnUuanNcIiksXG4vL1x0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi91aS9zaWRlYmFyLmpzXCIpO1xuLy8gdGVzdCAyZmdyZlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTaGFyaW5nXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3NoYXJlLnBuZ1wiLFxuXHRcdHZpZXc6IG51bGwsXG5cdFx0bWVudTogbnVsbCxcblx0XHRzaWRlYmFyOiBudWxsLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV3IFNoYXJlXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiTmV3IFNob3J0Y3V0XCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRzaGFyZToge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHB1YmxpYzogXCIxXCIsXG5cdFx0XHRcdFx0d2hpdGVsaXN0OiBcIlwiLFxuXHRcdFx0XHRcdGRhdGE6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcblx0XHRcdFx0c2lkZWJhciA9IG5ldyBTaWRlYmFyKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG5cdFx0XHRcdFx0c3VidGl0bGU6IFwiXCIsXG5cdFx0XHRcdFx0aXRlbXM6IFtdXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdFx0bmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRyZXNvdXJjZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRwdWJsaWNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0d2hpdGVMaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdGRhdGFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0bmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHRyZXNvdXJjZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHRwdWJsaWNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG5cdFx0XHRcdHdoaXRlTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdFx0XHRkYXRhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksXG5cdFx0XHRcdGRvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0dmlldyA9IG51bGwsXG5cdFx0XHRcdHNwYW4gPSBudWxsLFxuXHRcdFx0XHRzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBudWxsLFxuXHRcdFx0XHRzZWxmID0gdGhpcztcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcImVsZW1lbnRcIjogZWxlbWVudFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNpZGViYXIgPSBzaWRlYmFyO1xuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cblx0XHRcdHJlc291cmNlTGFiZWwuaW5uZXJIVE1MID0gXCJSZXNvdXJjZVwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChyZXNvdXJjZUxhYmVsKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocmVzb3VyY2VJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdFx0XHRwdWJsaWNMYWJlbC5pbm5lckhUTUwgPSBcIlB1YmxpY1wiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNMYWJlbCk7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIxXCIpO1xuXHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IFwiWWVzXCI7XG5cdFx0XHRwdWJsaWNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjBcIik7XG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJOb1wiO1xuXHRcdFx0cHVibGljSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocHVibGljSW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuXHRcdFx0ZGF0YUxhYmVsLmlubmVySFRNTCA9IFwiRGF0YVwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhTGFiZWwpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhSW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdHdoaXRlTGlzdExhYmVsLmlubmVySFRNTCA9IFwiV2hpdGUgTGlzdFwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZCh3aGl0ZUxpc3RMYWJlbCk7XG5cdFx0XHR3aGl0ZUxpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZCh3aGl0ZUxpc3RJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cblx0XHRcdGlmICghIXAub3Blbikge1xuXHRcdFx0XHR0aGlzLmFkZCgpO1xuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdO1xuXHRcdFx0XHRzaGFyZS5uYW1lID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0XHRzaGFyZS5yZXNvdXJjZSA9IHAub3Blbi5yZXNvdXJjZTtcblx0XHRcdFx0cmVzb3VyY2VJbnB1dC52YWx1ZSA9IHNoYXJlLnJlc291cmNlO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU2hhcmUgRm9sZGVyXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZVwiKTtcblx0XHRcdFx0ZG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0c2VsZi5zYXZlKCk7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQoZG9uZUlucHV0KTtcblxuXHRcdFx0YXBwLnNoYXJpbmcubGlzdEFsbFNoYXJlcyhhcHAudXNlci5uYW1lLCAoZnVuY3Rpb24gKHNpZGViYXJMaXN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0dmFyIHMgPSAwLFxuXHRcdFx0XHRcdFx0XHRzaGFyZXMgPSBudWxsLFxuXHRcdFx0XHRcdFx0XHRpdGVtID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICghISByZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRzaGFyZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJpbml0IGFwcCBnZXQgc2hhcmVzXCIsIHNoYXJlcyk7XG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzIDwgc2hhcmVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlc1tzXS5kaXJlY3Rvcnl9KTtcblx0XHRcdFx0XHRcdFx0XHRzaWRlYmFyTGlzdC5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3QuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdHMgKys7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0fSkoc2lkZWJhcikpO1xuXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZSBpbnB1dHMuLi4gbmVlZCB0byBpbXBsZW1lbnRcIik7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNpZGViYXIpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxuXHRcdFx0XHRzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBPYmplY3QuY3JlYXRlKHRoaXMubW9kZWxzLnNoYXJlLnNjaGVtYSksXG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlLm5hbWV9KTtcblx0XHRcdHNoYXJlLnJlc291cmNlID0gc2hhcmUubmFtZTtcblx0XHRcdHNoYXJlcy5hbGwucHVzaChzaGFyZSk7XG5cdFx0XHRzaGFyZXMuY3VycmVudCA9IHNoYXJlcy5hbGwubGVuZ3RoIC0gMTtcblx0XHRcdHNpZGViYXIub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBzaGFyZXMuYWxsW3NoYXJlcy5jdXJyZW50XSxcblx0XHRcdFx0cGF0aCA9IHNoYXJlLnJlc291cmNlLFxuXHRcdFx0XHR1c2VycyA9IHNoYXJlLndoaXRlbGlzdCxcblx0XHRcdFx0cHVibGljU2hhcmUgPSBzaGFyZS5wdWJsaWMsXG5cdFx0XHRcdGRhdGEgPSBzaGFyZS5kYXRhO1xuXHRcdFx0d2luZG93LmFwcC5zaGFyaW5nLnNhdmVTaGFyZShwYXRoLCBwYXRoLCB1c2VycywgcHVibGljU2hhcmUsIGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic2F2ZVNoYXJlLi4uIFwiLCByZXNwKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZGVsZXRlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxuXHRcdFx0XHRwYXRoID0gc2hhcmUucGF0aDtcblx0XHRcdGFwcC5zaGFyaW5nLmRlbGV0ZVNoYXJlKHBhdGgpO1xuXHRcdH0sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7IC8vIHN1cHBvcnQgYWxnZWJyYSBhcyB3ZWxsIGFzICpuaXggY29tbWFuZHNcblx0XHRuYW1lOiBcIlRlcm1pbmFsXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIER1bXBcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIk91dHB1dFwiXSxcblx0XHRcdFwiT3V0cHV0XCI6IHtcblx0XHRcdFx0XCJkYXRhXCI6IFwiXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0ZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gW3ZpZXcsIG1lbnVdO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNlbGYgPSB7XG5cdFx0bmFtZTogXCJUZXh0IEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi90ZXh0LnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0c2F2ZVRpbWVvdXQ6IDAsXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRkb2N1bWVudDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJOZXcgRG9jdW1lbnQudHh0XCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIixcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHRcdHNpZGViYXIgPSBuZXcgU2lkZWJhcihcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdGl0ZW1zOiBbXVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRcdHZpZXcgPSBudWxsLFxuXHRcdFx0XHRzcGFuID0gbnVsbDtcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJ0ZXh0XCIpO1xuXHRcdFx0dGhpcy5zaWRlYmFyID0gc2lkZWJhcjtcblx0XHRcdHRoaXMubWVudSA9IG1lbnU7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdFx0XHRpZiAoISFwICYmIHAub3Blbikge1xuXHRcdFx0XHR0aGlzLmFkZCh7cmVzb3VyY2U6IHAub3Blbn0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hZGQoKTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5zYXZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLnNhdmUoe2F1dG86IHRydWV9KTsgfSwgMzAwMDApO1xuXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRkb2MgPSBPYmplY3QuY3JlYXRlKHRoaXMubW9kZWxzLmRvY3VtZW50LnNjaGVtYSksXG5cdFx0XHRcdGl0ZW0gPSBudWxsLFxuXHRcdFx0XHRleGlzdHMgPSBmYWxzZSxcblx0XHRcdFx0ZmlsZW5hbWUgPSBcIlwiLFxuXHRcdFx0XHRhID0gYXBwLmZpbGVzLFxuXHRcdFx0XHRsID0gYS5sZW5ndGg7XG5cblx0XHRcdGlmICghIXAgJiYgISFwLm9wZW4gJiYgISFwLm9wZW4ucmVzb3VyY2UpIHtcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gYXBwLmN3ZCArIFwiL1wiICsgZG9jLnJlc291cmNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmaWxlbmFtZSA9IGRvYy5yZXNvdXJjZS5zcGxpdChcIi9cIik7XG5cdFx0XHRmaWxlbmFtZSA9IGZpbGVuYW1lW2ZpbGVuYW1lLmxlbmd0aCAtMV07XG5cblx0XHRcdHdoaWxlICggLS1sID4gLTEpIHtcblx0XHRcdFx0aWYgKCFleGlzdHMgJiYgYVtsXS5uYW1lID09IGZpbGVuYW1lKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYVtsXS5uYW1lKTtcblx0XHRcdFx0XHR0aGlzLm9wZW4oe3Jlc291cmNlOiBkb2MucmVzb3VyY2V9KTtcblx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4vL1x0XHRcdGlmICghZXhpc3RzKSB7XG4vL1x0XHRcdFx0ZG9jdW1lbnRzLmFsbC5wdXNoKGRvYyk7XG4vL1x0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcImVkaXRhYmxlXCIsIHt0aXRsZTogZG9jLnJlc291cmNlfSk7XG4vL1x0XHRcdFx0ZG9jdW1lbnRzLmN1cnJlbnQgPSBkb2N1bWVudHMuYWxsLmxlbmd0aCAtIDE7XG4vL1x0XHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG4vL1x0XHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG4vL1x0XHRcdH1cblx0XHR9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgZG9jdW1lbnRzID0gc2VsZi5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdGRvYyA9IGRvY3VtZW50cy5hbGxbZG9jdW1lbnRzLmN1cnJlbnRdO1xuXHRcdFx0ZG9jLmNvbnRlbnQgPSBzZWxmLnZpZXcuZWxlbWVudC5jaGlsZHJlblswXS52YWx1ZTtcblx0XHRcdHNhdmVUZXh0KGRvYy5yZXNvdXJjZSwgZG9jLmNvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKCEhcCAmJiBwLmF1dG8gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNhdmVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgc2VsZi5zYXZlKHApOyB9LCA2MDAwMCk7XG4gICAgICAgICAgICB9XG5cdFx0fSxcblx0XHRvcGVuOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHR0ZXh0YXJlYSA9IHRoaXMudmlldy5lbGVtZW50LmNoaWxkcmVuWzBdLFxuXHRcdFx0XHRhcHBsZXQgPSB0aGlzO1xuXHRcdFx0YXBwLnJlcXVlc3QoXCJnZXRcIiwgcC5yZXNvdXJjZSwgXCI/Y2FjaGU9XCIrRGF0ZS5ub3coKSwgZnVuY3Rpb24gKHJlc3ApIHtcblx0XHRcdFx0dmFyIGRvYyA9IE9iamVjdC5jcmVhdGUoYXBwbGV0Lm1vZGVscy5kb2N1bWVudC5zY2hlbWEpLFxuXHRcdFx0XHRcdGRvY3VtZW50cyA9IGFwcGxldC5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdFx0aXRlbSA9IG51bGw7XG5cdFx0XHRcdGRvYy5yZXNvdXJjZSA9IHAucmVzb3VyY2U7XG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJlZGl0YWJsZVwiLCB7dGl0bGU6IGRvYy5yZXNvdXJjZX0pO1xuXHRcdFx0XHRkb2N1bWVudHMuYWxsLnB1c2goZG9jKTtcblx0XHRcdFx0ZG9jdW1lbnRzLmN1cnJlbnQgPSBkb2N1bWVudHMuYWxsLmluZGV4T2YoZG9jKTtcblx0XHRcdFx0ZG9jLmNvbnRlbnQgPSByZXNwO1xuXHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHJlc3A7XG5cdFx0XHRcdGFwcGxldC5zaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0YXBwbGV0LnNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0c2VsZi5zYXZlKCk7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2VsZi5zYXZlVGltZW91dCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImFjdHVhbGx5IGNsb3Npbmcgbm93Li5cIik7XG5cdFx0fVxuXHR9O1xuICAgIHJldHVybiBzZWxmO1xufTtcblxuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiRGlzayBVc2FnZSBWaXN1YWxpemVyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0dmlzdWFsaXphdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBBcHBJY29uKG5hbWUsIGluZGV4KSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRhcHBsZXQgPSBhcHBsZXRzW25hbWVdKCksXG5cdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xuXHRpZiAoISFpbmRleCkge1xuXHRcdGlmIChpbmRleCA9PSAxKSB7XG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIGRvd25cIjtcblx0XHR9XG5cdH1cblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUFwcC1JY29uXCIgKyBkaXJlY3Rpb25DbGFzcyk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBhcHBsZXQuaWNvbiArIFwiKTtcIik7XG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3Bhbj5cIiArIGFwcGxldC5uYW1lICsgXCI8L3NwYW4+XCI7XG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRhcHAub3BlblBhbmUoXCJhcHBcIiwgYXBwbGV0Lm5hbWUsIHtcblx0XHRcdGFwcGxldDoge1xuXHRcdFx0XHRuYW1lOiBuYW1lXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIHRydWUpO1xufTtcbiIsIi8qIENhcmQuanMgKi9cblxudmFyIENvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vY29udGV4dG1lbnUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FyZChuYW1lLCByZXNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aSA9IG51bGwsXG5cdFx0dXAgPSBmYWxzZSxcblx0XHRpc0ltYWdlID0gZmFsc2UsXG5cdFx0Y29udGV4dE1lbnUgPSB0cnVlLFxuXHRcdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcblx0XHRjb25maWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRjb250ZXh0TWVudURhdGEgPSB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0cmVzb3VyY2U6IHJlc291cmNlLFxuXHRcdFx0bWVudUl0ZW1zOiBbXSwgLy8gZHVtbXkgbWVudSBpdGVtc1xuXHRcdFx0ZGlyZWN0b3J5OiBmYWxzZVxuXHRcdH07XG5cdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkXCIpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgcmVzb3VyY2UpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBuYW1lKTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblx0bGluay5pbm5lckhUTUwgPSBuYW1lO1xuXHQvL2xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCByZXNvdXJjZSk7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbmZpZ3VyZVwiKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0Y29uZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vZGVsZXRlUGF0aChhcHAuY3dkK1wiL1wiK25hbWUpO1xuXHRcdGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuVUktQ29udGV4dC1NZW51XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlIFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sIHRydWUpO1xuXHRpc0ltYWdlID0gLyhcXC5qcGd8XFwucG5nfFxcLmdpZnxcXC5qcGVnfFxcLndlYnApL2kudGVzdChyZXNvdXJjZSk7XG5cdGlmIChpc0ltYWdlKSB7XG5cdFx0dmFyIHRodW1iID0gcmVzb3VyY2UucmVwbGFjZSgvXFxzL2csIFwiJTIwXCIpO1xuXHRcdGlmICghLyhcXC53ZWJwfFxcLmdpZikvaS50ZXN0KHJlc291cmNlKSkgeyAvLyBkb24ndCB0aHVtYm5haWwgd2VicCBvciBnaWZcblx0XHRcdHZhciByUGF0aCA9IHRodW1iLnNwbGl0KFwiL1wiKTtcblx0XHRcdHZhciB0aHVtYiA9IHJQYXRoW3JQYXRoLmxlbmd0aCAtIDFdO1xuXHRcdFx0clBhdGguc3BsaWNlKHJQYXRoLmxlbmd0aCAtIDEsIDEpO1xuXHRcdFx0clBhdGgucHVzaChcIkRIVGh1bWJzXCIpO1xuXHRcdFx0aWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MSAmJiBhcHAudGh1bWJTaXplKSB8fCAod2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgIWFwcC50aHVtYlNpemUpKSB7IC8vIHVzZSBoaS1kcGkgdGh1bWJuYWlscyBieSBkZWZhdWx0XG5cdFx0XHRcdHJQYXRoLnB1c2goXCIxMDI0XCIpO1xuXHRcdFx0fVxuXHRcdFx0clBhdGgucHVzaCh0aHVtYiArIFwiLmpwZ1wiKTtcblx0XHRcdHRodW1iID0gclBhdGguam9pbihcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iID0gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1wiICsgdGh1bWIgKyBcIicpO1wiKTsgLy9yZXNvdXJjZStcIicpO1wiKTtcblx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBJbWFnZVwiKTtcblx0fSBlbHNlIHtcblx0XHRlLmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdGlmICgvXiguKlxcLyl7MCwxfVteXFwuXSouezF9JC8udGVzdChyZXNvdXJjZSkpIHsgLy8gZGV0ZWN0IGZvbGRlcnNcblx0XHRcdGNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkgPSB0cnVlO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9IFwiTElcIikge1xuXHRcdFx0XHRcdG9wZW5Gb2xkZXIocmVzb3VyY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgRm9sZGVyXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWNvbnRleHRNZW51KSB7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZSBlZGl0XCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFZGl0XCIpO1xuXHRcdFx0XHRlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGFwcC5yZXF1ZXN0KFwiR0VUXCIsIHJlc291cmNlICsgXCI/Y2FjaGU9XCIgKyBEYXRlLm5vdygpLCBcIlwiLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdGFwcC5vcGVuUGFuZSgnZWRpdCcsIG5hbWUsIHtcblx0XHRcdFx0XHRcdFx0XCJyZXNvdXJjZVwiOiBhcHAuY3dkICsgXCIvXCIgKyBuYW1lLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogcmVzcG9uc2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHRcdGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vXHRFeHBlcmltZW50YWwuLlxuXHRpZiAoY29udGV4dE1lbnUpIHtcblx0XHR2YXIgbWVudSA9IG5ldyBDb250ZXh0TWVudShjb250ZXh0TWVudURhdGEpO1xuXHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBzdHlsZSA9IGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG5cdFx0XHRpZiAoc3R5bGUuc2VhcmNoKFwic2hvd01lbnVcIikgPCAwKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dNZW51XCIpLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaXRlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5yZXBsYWNlKFwic2hvd01lbnVcIixcIlwiKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHlsZSArIFwiIHNob3dNZW51XCIpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0aWYgKGlzSW1hZ2UpIHtcblx0XHRcdGUuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGluay5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH1cblx0fVxuXHRpZiAoISFjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5KSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChjb25maWd1cmUpO1xuXHR9XG5cblx0Zm9yIChpIGluIG9wdGlvbnMpIHtcblx0XHRlLnNldEF0dHJpYnV0ZShpLCBvcHRpb25zW2ldKTtcblx0fVxuXHRyZXR1cm4gZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvbnRleHRNZW51KG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUNvbnRleHQtTWVudVwiKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLmRpcmVjdG9yeSA9PSB0cnVlKSB7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGlyZWN0b3J5IFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMuZGlyZWN0b3J5TWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9vcGVuLnBuZyk7JyBocmVmPSdqYXZhc2NyaXB0Om9wZW5Gb2xkZXIoXFxcIlwiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiXFxcIik7JyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2RhcmsvZG93bmxvYWQucG5nKTsnIGhyZWY9J1wiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiJyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1yZXNvdXJjZVwiLCBvcHRpb25zLnJlc291cmNlKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBvcHRpb25zLm5hbWUpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCB0cnVlKTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHR9KTtcbn07XG4iLCIgZnVuY3Rpb24gRGF0YVBhbmUgKHR5cGUsIG5hbWUsIGRhdGEpIHtcblx0Y29uc29sZS5sb2coZGF0YSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIHRpdGxlU3RyaW5nID0gXCJcIixcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0dGl0bGVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcblx0XHRzaG93VGl0bGUgPSBmYWxzZSxcbiAgICAgICAgc2hvd0VudHJ5ID0gZmFsc2UsXG4gICAgICAgIHNob3dUaXRsZUVudHJ5ID0gZmFsc2UsXG5cdFx0Y2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIHVwbG9hZCA9IG51bGwsXG4gICAgICAgIGVkaXRXaWRnZXQgPSBudWxsLFxuXHRcdGFwcGxldCA9IG51bGw7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmVcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5XCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRG9uZVwiKTtcblx0ZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCh0cnVlKSwgdHJ1ZSk7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VcIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiWFwiKTtcblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QoKSwgdHJ1ZSk7XG4gICAgaWYgKCEhZGF0YS5hcHBsZXQpIHtcbiAgICAgICAgLy8gbG9hZCBhcHBsZXQgZm9ybSBkYXRhLmFwcGxldFxuICAgICAgICBhcHBsZXQgPSBuZXcgQXBwbGV0KGRhdGEuYXBwbGV0Lm5hbWUsIHtvcGVuOiAoISEgZGF0YS5hcHBsZXQub3BlbiA/IGRhdGEuYXBwbGV0Lm9wZW4gOiBudWxsKX0pO1xuXHRcdGFwcGxldC5kYXRhUGFuZSA9IHRoaXM7IC8vIHdvbid0IGJlIG5lZWRlZCBvbmNlIERhdGFQYW5lIGlzIGRlcHJlY2F0ZWRcblx0XHR0aGlzLmFwcGxldCA9IGFwcGxldDtcblx0XHRjb250YWluZXIgPSBhcHBsZXQuZGl2O1xuICAgIH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdG91Y2gucG5nKVwiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1rZGlyXCI6XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS9ta2Rpci5wbmcpO1wiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxuICAgICAgICAgICAgICAgIHVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XG5cdFx0XHRcdHRpdGxlU3RyaW5nID0gJzxpbWcgc3JjPVwiL2FwcC9kYXRhL3VwbG9hZC5wbmdcIiB0aXRsZT1cIlVwbG9hZCBGaWxlc1wiPjxzcGFuPlVwbG9hZCBGaWxlczwvc3Bhbj4nO1xuXHRcdFx0XHRzaG93VGl0bGUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmlld1wiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gXCJWaWV3IEZpbGVcIjtcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdGlmICghISBkYXRhLmljb24pIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK2RhdGEuaWNvbitcIik7XCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RleHQyLnBuZyk7XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xuXHRcdGlmIChzaG93VGl0bGUpIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YoZGF0YSk9PSd1bmRlZmluZWQnIHx8IHR5cGVvZihkYXRhLmNvbnRyb2xzKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhLmNvbnRyb2xzID09IHRydWUpIHtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlKTtcblx0XHR9XG5cdFx0aWYgKCEhZGF0YSAmJiAhISBkYXRhLmNsYXNzKSB7XG5cdFx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkYXRhLmNsYXNzKTtcblx0XHR9XG4gICAgICAgIGlmICghISB1cGxvYWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93VGl0bGVFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRW50cnkpO1xuICAgICAgICAgICAgdGl0bGVFbnRyeS52YWx1ZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgIGlmICghISBkYXRhLnRleHQpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS52YWx1ZSA9IGRhdGEudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VkIHRvIGFkZCBcImRvbmVcIiBidXR0b24gaGVyZVxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy5kb25lID0gZG9uZTtcblx0dGhpcy5lbnRyeSA9IGVudHJ5O1xuXHR0aGlzLnBhbmVUaXRsZSA9IHRpdGxlO1xuXHR0aGlzLnRpdGxlRW50cnkgPSB0aXRsZUVudHJ5O1xuICAgIHRoaXMudXBsb2FkSW5wdXQgPSB1cGxvYWQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuc25hcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcblx0dGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkaXJlY3Rpb24pO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcGFuZS5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lLmNvbnRhaW5lcik7XG4gICAgcGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xuXHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLmdldENsb3NlTWV0aG9kID0gZnVuY3Rpb24gKHNhdmUpIHtcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXG4gICAgICAgIHBhbmUgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0dmFyIGxlYXZlT3BlbiA9IGZhbHNlO1xuXHRcdGlmIChzYXZlKSB7XG5cdFx0XHRzd2l0Y2ggKHBhbmUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxuICAgICAgICAgICAgICAgICAgICBzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1rZGlyXCI6XG4gICAgICAgICAgICAgICAgICAgIG1ha2VEaXJlY3RvcnkocGFuZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRGaWxlcyhwYW5lKTtcblx0XHRcdFx0XHRsZWF2ZU9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XG4gICAgICAgIFx0XHRcdHNhdmVUZXh0KGFwcC5jd2QrXCIvXCIrcGFuZS50aXRsZUVudHJ5LnZhbHVlLCBwYW5lLmVudHJ5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0aWYgKCFsZWF2ZU9wZW4pIHtcblx0XHRcdHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuXHRcdFx0cGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xuXHRcdH1cblx0XHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFQYW5lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBGcmFtZSh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIiksXG5cdFx0dmlldyA9IG51bGw7XG5cdG1haW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1GcmFtZVwiKTtcblx0dGhpcy5lbGVtZW50ID0gbWFpbjtcblx0aWYgKCEhb3B0aW9ucyAmJiAhIW9wdGlvbnMuZWxlbWVudCkge1xuXHRcdHZpZXcgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInRleHRcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiA5NjApIHtcblx0XHRcdFx0dmlldy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImhlaWdodDo3MzVweDtcIik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY29kZW1pcnJvclwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjYW52YXNcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIndlYmdsXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRtYWluLmFwcGVuZENoaWxkKHZpZXcpO1xuXHR0aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0fTtcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1lbnUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXG5cdFx0Z2V0VGhlbWVkSWNvbiA9IGFwcC5nZXRUaGVtZWRJY29uLFxuXHRcdG1lbnVJdGVtcyA9IFtdLFxuXHRcdG1lbnVJdGVtID0gbnVsbCxcblx0XHRtZW51ID0gdGhpcyxcblx0XHRtID0gMDtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0dGhpcy5hcHBsZXQgPSBudWxsO1xuICAgIGlmICghISBvcHRpb25zKSB7IC8vIG1ha2Ugc3VyZSBvcHRpb25zIGFyZSBkZWZpbmVkXG4gICAgICAgIGlmICghISBvcHRpb25zLnRpdGxlQnV0dG9uKSB7XG5cdFx0ICBtZW51SXRlbXMucHVzaChvcHRpb25zLnRpdGxlQnV0dG9uKTtcblx0ICAgfVxuICAgIH1cblx0dHlwZSA9ICghIXR5cGUgPyB0eXBlIDogXCJzdGFuZGFyZFwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lbnVJdGVtKSB7XG5cdFx0XHR2YXIgaXRlbSA9IE9iamVjdC5jcmVhdGUobWVudUl0ZW0pO1xuXHRcdFx0aXRlbS5pY29uID0gYXBwLmdldFRoZW1lZEljb24oaXRlbS5pY29uKTtcblx0XHRcdG1lbnVJdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0bWVudUl0ZW1zID0gb3B0aW9ucy5tZW51SXRlbXM7XG5cdFx0YnJlYWs7XG5cdH1cblx0d2hpbGUgKG0gPCBtZW51SXRlbXMubGVuZ3RoKSB7XG5cdFx0Ly8gY3JlYXRlIG1lbnUgZm9yIGFwcFxuXHRcdG1lbnVJdGVtID0gbWVudUl0ZW1zW21dO1xuXHRcdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51LUJ1dHRvblwiKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIik7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIG1lbnVJdGVtLm5hbWUpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgbWVudUl0ZW0uaWNvbiArIFwiKVwiKTtcblx0XHQoZnVuY3Rpb24gKGJ1dHRvbk1lbnUsIGJ1dHRvbk1lbnVJdGVtKSB7XG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0YnV0dG9uTWVudUl0ZW0uY2xpY2soYnV0dG9uTWVudSk7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9KShtZW51LCBtZW51SXRlbSk7XG5cdFx0YXNpZGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblx0XHRtICs9IDE7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1vZGFsV2luZG93KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0c2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1vZGFsV2luZG93XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBzZWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXG5cdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGlmICghIW9wdGlvbnMuaWNvbikge1xuXHRcdGljb24uc3JjID0gYXBwLmdldFRoZW1lZEljb24ob3B0aW9ucy5pY29uKTtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHR5cGUsIG9wdGlvbnMsIHNlbGVjdGlvbkNhbGxiYWNrKSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImVkaXRhYmxlXCI6XG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb25zLnRpdGxlKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdGlmICghISBzZWxlY3Rpb25DYWxsYmFjaykge1xuXHRcdFx0XHRzZWxlY3Rpb25DYWxsYmFjayhldnQpO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWZWN0b3JFZGl0b3Iob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0aXRlbS5pbm5lckhUTUwgPSBcIjxoMj5cIiArIG9wdGlvbnMubmFtZSArIFwiPC9oMj5cIjtcblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIl19
