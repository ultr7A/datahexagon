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
	return {
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

			//textarea = document.createElement("textarea"),
			view = null,
			    span = null;
			//element.appendChild(textarea)l;

			view = new Frame("text");
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			if (!!p && p.open) {
				this.add({ resource: p.open });
			} else {
				this.add();
			}

			setTimeout(this.save, 30000);

			return [menu, sidebar, view];
		},
		add: function add(p) {
			var sidebar = this.sidebar,
			    documents = this.models.document,
			    document = Object.create(this.models.document.schema),
			    item = null,
			    exists = false,
			    filename = "",
			    a = app.files,
			    l = a.length;

			if (!!p && !!p.resource) {
				document.resource = p.resource;
			} else {
				document.resource = app.cwd + "/" + document.resource;
			}

			filename = document.resource.split("/");
			filename = filename[filename.length - 1];

			while (--l > -1) {
				if (a[l].name == filename) {
					console.log(a[l].name);
					this.open(document.resource);
					exists = true;
				}
			}
			if (!exists) {
				documents.all.push(document);
				item = new SidebarItem("editable", { title: document.resource });
				documents.current = documents.all.length - 1;
				sidebar.options.items.push(item);
				sidebar.element.appendChild(item.element);
			}
		},
		save: function save(p) {
			var documents = this.models.document,
			    doc = documents.all[documents.current];
			doc.content = this.view.element.children[0].value;
			saveText(doc.resource, doc.content);
			this.saveTimeout = setTimeout(this.save, 60000);
		},
		open: function open(p) {
			var documents = this.models.document,
			    textarea = this.view.element.children[0],
			    applet = this;
			app.request("get", p, "", function (resp) {
				var doc = Object.create(applet.models.document.schema),
				    documents = applet.models.document,
				    item = null;
				doc.resource = p;
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
			this.save();
			clearTimeout(this.saveTimeout);
			console.log("actually closing now..");
		}
	};
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
			menuItems = menuItems.concat(UI.defaults.menu.options);
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
		icon.src = options.icon;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbGFybS1jbG9jay5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9pbWFnZS12aWV3ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvbWVzc2FnaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NlYXJjaC5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZXR0aW5ncy5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3Rlcm1pbmFsLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3RleHQtZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2FwcGljb24uanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NhcmQuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9kYXRhcGFuZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZnJhbWUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21vZGFsd2luZG93LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdG9vbGJhci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdmVjdG9yZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFdEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRXBCLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxPQUFPLFNBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2RCxPQUFPLFVBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN6RCxPQUFPLENBQUMsY0FBYyxD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QUNWLE1BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBtYWluLmpzICovXG5cbiB3aW5kb3cuQ2FyZCA9IHJlcXVpcmUoXCIuL3VpL2NhcmQuanNcIik7XG4gd2luZG93Lk1lbnUgPSByZXF1aXJlKFwiLi91aS9tZW51LmpzXCIpO1xuIHdpbmRvdy5EYXRhUGFuZSA9IHJlcXVpcmUoXCIuL3VpL2RhdGFwYW5lLmpzXCIpO1xuIHdpbmRvdy5Db250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL3VpL2NvbnRleHRtZW51LmpzXCIpO1xuIHdpbmRvdy5BcHBJY29uID0gcmVxdWlyZShcIi4vdWkvYXBwaWNvbi5qc1wiKTtcbiB3aW5kb3cuRnJhbWUgPSByZXF1aXJlKFwiLi91aS9mcmFtZS5qc1wiKTtcbiB3aW5kb3cuU2lkZWJhciA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXIuanNcIik7XG4gd2luZG93LlNpZGViYXJJdGVtID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhcml0ZW0uanNcIik7XG4gd2luZG93Lk1vZGFsV2luZG93ID0gcmVxdWlyZShcIi4vdWkvbW9kYWx3aW5kb3cuanNcIik7XG4gd2luZG93LlRvb2xiYXIgPSByZXF1aXJlKFwiLi91aS90b29sYmFyLmpzXCIpO1xuIHdpbmRvdy5WZWN0b3JFZGl0b3IgPSByZXF1aXJlKFwiLi91aS92ZWN0b3JlZGl0b3IuanNcIik7XG5cbiB3aW5kb3cuYXBwbGV0cyA9IFtdO1xuXG4gYXBwbGV0c1tcImFsYXJtLWNsb2NrXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbGFybS1jbG9jay5qc1wiKTtcbiBhcHBsZXRzW1widGVybWluYWxcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3Rlcm1pbmFsLmpzXCIpO1xuIGFwcGxldHNbXCJtZXNzYWdpbmdcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL21lc3NhZ2luZy5qc1wiKTtcbiBhcHBsZXRzW1wiaW1hZ2Utdmlld2VyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9pbWFnZS12aWV3ZXIuanNcIik7XG4gYXBwbGV0c1tcInRleHQtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy90ZXh0LWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiaW1hZ2UtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9pbWFnZS1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcIjNkLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvM2QtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJtaWRpLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWlkaS1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcImFuaW1hdGlvbi1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2FuaW1hdGlvbi1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcInNlYXJjaFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2VhcmNoLmpzXCIpO1xuIGFwcGxldHNbXCJzZXR0aW5nc1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2V0dGluZ3MuanNcIik7XG4gYXBwbGV0c1tcInVzYWdlLXZpc3VhbGl6ZXJcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanNcIik7XG4gYXBwbGV0c1tcInNoYXJpbmdcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NoYXJpbmcuanNcIik7XG5cbi8vdGVzdCB0dGVzdFxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiM0QgRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2N1YmUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdG9iamVjdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQ2xvY2tcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2xvY2stMi5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIkNsb2NrXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiQWxhcm1cIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJUaW1lclwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIkFsYXJtXCIsIFwiVGltZXJcIl0sXG5cdFx0XHRcIkFsYXJtXCI6IHtcblx0XHRcdFx0XCJob3Vyc1wiOiAwLFxuXHRcdFx0XHRcIm1pbnV0ZXNcIjogMCxcblx0XHRcdFx0XCJwbVwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFwiVGltZXJcIjoge1xuXHRcdFx0XHRcImR1cmF0aW9uXCI6IDAsXG5cdFx0XHRcdFwiZGF0ZVwiOiBcIjIwMTUtMDgtMDhcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkFuaW1hdGlvbiBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkltYWdlIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9pbWFnZS0yLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkltYWdlIFZpZXdlclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9cIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5leHRcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJQcmV2aW91c1wiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlNoYXJlXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiTWVzc2FnaW5nXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NoYXQucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXcgTWVzc2FnZVwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJOZXcgQ2hhdFwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJTZWFyY2hcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fSxcblx0XHRcdFwiT3B0aW9uc1wiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGNvbnRhY3Q6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHRlbWFpbDogXCJcIixcblx0XHRcdFx0XHR0d2l0dGVyOiBcIlwiLFxuXHRcdFx0XHRcdGZhY2Vib29rOiBcIlwiLFxuXHRcdFx0XHRcdHNvdW5kY2xvdWQ6IFwiXCIsXG5cdFx0XHRcdFx0Z21haWw6IFwiXCIsXG5cdFx0XHRcdFx0Z2l0aHViOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH0sXG5cdFx0XHRtZXNzYWdlczoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHR0aXRsZTogXCJcIixcblx0XHRcdFx0XHR0bzogXCJcIixcblx0XHRcdFx0XHRmcm9tOiBcIlwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fSxcblx0XHRcdGNoYXRzOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHRvOiBcIlwiLFxuXHRcdFx0XHRcdGZyb206IFwiXCIsXG5cdFx0XHRcdFx0cm9vbTogXCJcIixcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHQvLyBjb25uZWN0IHNvY2tldCB0byBhcHAgaWYgbm90IGNvbm5lY3RlZC4uLlxuXHRcdFx0Ly8gc2VuZCB3ZWxjb21lIG1lc3NhZ2Vcblx0XHRcdC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBzZW5kIGJ1dHRvblxuXHRcdFx0Ly8gYWRkIHNvY2tldCBldmVudCBsaXN0ZW5lciBmb3IgY2hhdCBtZXNzYWdlXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNSURJIEVkaXRvclwiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRhcnJhbmdtZW50OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdGRhdGE6IFwiXCIsXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNlYXJjaFwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTZWFyY2hcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHJlc3VsdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNldHRpbmdzXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0c2V0dGluZzoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwiLy92YXIgRnJhbWUgPSByZXF1aXJlKFwiLi4vdWkvZnJhbWUuanNcIiksXG4vL1x0TWVudSA9IHJlcXVpcmUoXCIuLi91aS9tZW51LmpzXCIpLFxuLy9cdFNpZGViYXIgPSByZXF1aXJlKFwiLi4vdWkvc2lkZWJhci5qc1wiKTtcbi8vIHRlc3QgMmZncmZcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiU2hhcmluZ1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9zaGFyZS5wbmdcIixcblx0XHR2aWV3OiBudWxsLFxuXHRcdG1lbnU6IG51bGwsXG5cdFx0c2lkZWJhcjogbnVsbCxcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5ldyBTaGFyZVwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIk5ldyBTaG9ydGN1dFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0c2hhcmU6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHRwdWJsaWM6IFwiMVwiLFxuXHRcdFx0XHRcdHdoaXRlbGlzdDogXCJcIixcblx0XHRcdFx0XHRkYXRhOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHRcdHNpZGViYXIgPSBuZXcgU2lkZWJhcihcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdGl0ZW1zOiBbXVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRcdG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0cmVzb3VyY2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0cHVibGljTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHdoaXRlTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRkYXRhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0cmVzb3VyY2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0cHVibGljSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxuXHRcdFx0XHR3aGl0ZUxpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcblx0XHRcdFx0ZGF0YUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLFxuXHRcdFx0XHRkb25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHZpZXcgPSBudWxsLFxuXHRcdFx0XHRzcGFuID0gbnVsbCxcblx0XHRcdFx0c2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gbnVsbCxcblx0XHRcdFx0c2VsZiA9IHRoaXM7XG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0XCJlbGVtZW50XCI6IGVsZW1lbnRcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zaWRlYmFyID0gc2lkZWJhcjtcblx0XHRcdHRoaXMubWVudSA9IG1lbnU7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdFx0XHRyZXNvdXJjZUxhYmVsLmlubmVySFRNTCA9IFwiUmVzb3VyY2VcIjtcblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocmVzb3VyY2VMYWJlbCk7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlSW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuXHRcdFx0cHVibGljTGFiZWwuaW5uZXJIVE1MID0gXCJQdWJsaWNcIjtcblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocHVibGljTGFiZWwpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMVwiKTtcblx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBcIlllc1wiO1xuXHRcdFx0cHVibGljSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIwXCIpO1xuXHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IFwiTm9cIjtcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHB1YmxpY0lucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0XHRcdGRhdGFMYWJlbC5pbm5lckhUTUwgPSBcIkRhdGFcIjtcblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQoZGF0YUxhYmVsKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQoZGF0YUlucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHR3aGl0ZUxpc3RMYWJlbC5pbm5lckhUTUwgPSBcIldoaXRlIExpc3RcIjtcblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQod2hpdGVMaXN0TGFiZWwpO1xuXHRcdFx0d2hpdGVMaXN0SW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbFwiKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQod2hpdGVMaXN0SW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuXG5cdFx0XHRpZiAoISFwLm9wZW4pIHtcblx0XHRcdFx0dGhpcy5hZGQoKTtcblx0XHRcdFx0c2hhcmUgPSBzaGFyZXMuYWxsW3NoYXJlcy5jdXJyZW50XTtcblx0XHRcdFx0c2hhcmUubmFtZSA9IHAub3Blbi5yZXNvdXJjZTtcblx0XHRcdFx0c2hhcmUucmVzb3VyY2UgPSBwLm9wZW4ucmVzb3VyY2U7XG5cdFx0XHRcdHJlc291cmNlSW5wdXQudmFsdWUgPSBzaGFyZS5yZXNvdXJjZTtcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlNoYXJlIEZvbGRlclwiKTtcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcGxldGVcIik7XG5cdFx0XHRcdGRvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRcdHNlbGYuc2F2ZSgpO1xuXHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRvbmVJbnB1dCk7XG5cblx0XHRcdGFwcC5zaGFyaW5nLmxpc3RBbGxTaGFyZXMoYXBwLnVzZXIubmFtZSwgKGZ1bmN0aW9uIChzaWRlYmFyTGlzdCkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdHZhciBzID0gMCxcblx0XHRcdFx0XHRcdFx0c2hhcmVzID0gbnVsbCxcblx0XHRcdFx0XHRcdFx0aXRlbSA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoISEgcmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0c2hhcmVzID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiaW5pdCBhcHAgZ2V0IHNoYXJlc1wiLCBzaGFyZXMpO1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAocyA8IHNoYXJlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwic3RhbmRhcmRcIiwge3RpdGxlOiBzaGFyZXNbc10uZGlyZWN0b3J5fSk7XG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3Qub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRcdHNpZGViYXJMaXN0LmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0XHRzICsrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdH0pKHNpZGViYXIpKTtcblxuXHRcdFx0cmV0dXJuIFttZW51LCBzaWRlYmFyLCB2aWV3XTtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ1cGRhdGUgaW5wdXRzLi4uIG5lZWQgdG8gaW1wbGVtZW50XCIpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2lkZWJhci5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2lkZWJhciA9IHRoaXMuc2lkZWJhcixcblx0XHRcdFx0c2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLm1vZGVscy5zaGFyZS5zY2hlbWEpLFxuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwic3RhbmRhcmRcIiwge3RpdGxlOiBzaGFyZS5uYW1lfSk7XG5cdFx0XHRzaGFyZS5yZXNvdXJjZSA9IHNoYXJlLm5hbWU7XG5cdFx0XHRzaGFyZXMuYWxsLnB1c2goc2hhcmUpO1xuXHRcdFx0c2hhcmVzLmN1cnJlbnQgPSBzaGFyZXMuYWxsLmxlbmd0aCAtIDE7XG5cdFx0XHRzaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdHNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF0sXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5yZXNvdXJjZSxcblx0XHRcdFx0dXNlcnMgPSBzaGFyZS53aGl0ZWxpc3QsXG5cdFx0XHRcdHB1YmxpY1NoYXJlID0gc2hhcmUucHVibGljLFxuXHRcdFx0XHRkYXRhID0gc2hhcmUuZGF0YTtcblx0XHRcdHdpbmRvdy5hcHAuc2hhcmluZy5zYXZlU2hhcmUocGF0aCwgcGF0aCwgdXNlcnMsIHB1YmxpY1NoYXJlLCBkYXRhLCBmdW5jdGlvbiAocmVzcCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInNhdmVTaGFyZS4uLiBcIiwgcmVzcCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRlbGV0ZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBzaGFyZXMuYWxsW3NoYXJlcy5jdXJyZW50XSxcblx0XHRcdFx0cGF0aCA9IHNoYXJlLnBhdGg7XG5cdFx0XHRhcHAuc2hhcmluZy5kZWxldGVTaGFyZShwYXRoKTtcblx0XHR9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4geyAvLyBzdXBwb3J0IGFsZ2VicmEgYXMgd2VsbCBhcyAqbml4IGNvbW1hbmRzXG5cdFx0bmFtZTogXCJUZXJtaW5hbFwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi90ZXh0LnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBEdW1wXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0c2NoZW1hOiB7XG5cdFx0XHRcIm1vZGVsc1wiOiBbXCJPdXRwdXRcIl0sXG5cdFx0XHRcIk91dHB1dFwiOiB7XG5cdFx0XHRcdFwiZGF0YVwiOiBcIlwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcImN1c3RvbVwiLCB7XG5cdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFt2aWV3LCBtZW51XTtcblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJUZXh0IEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi90ZXh0LnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0c2F2ZVRpbWVvdXQ6IDAsXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRkb2N1bWVudDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJOZXcgRG9jdW1lbnQudHh0XCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIixcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHRcdHNpZGViYXIgPSBuZXcgU2lkZWJhcihcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdGl0ZW1zOiBbXVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRcdC8vdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0XHRcdHZpZXcgPSBudWxsLFxuXHRcdFx0XHRzcGFuID0gbnVsbDtcblx0XHRcdC8vZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSlsO1xuXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwidGV4dFwiKTtcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XG5cdFx0XHR0aGlzLm1lbnUgPSBtZW51O1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdFx0aWYgKCEhcCAmJiBwLm9wZW4pIHtcblx0XHRcdFx0dGhpcy5hZGQoe3Jlc291cmNlOiBwLm9wZW59KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWRkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQodGhpcy5zYXZlLCAzMDAwMCk7XG5cblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2lkZWJhciA9IHRoaXMuc2lkZWJhcixcblx0XHRcdFx0ZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdGRvY3VtZW50ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLm1vZGVscy5kb2N1bWVudC5zY2hlbWEpLFxuXHRcdFx0XHRpdGVtID0gbnVsbCxcblx0XHRcdFx0ZXhpc3RzID0gZmFsc2UsXG5cdFx0XHRcdGZpbGVuYW1lID0gXCJcIixcblx0XHRcdFx0YSA9IGFwcC5maWxlcyxcblx0XHRcdFx0bCA9IGEubGVuZ3RoO1xuXG5cdFx0XHRpZiAoISFwICYmICEhcC5yZXNvdXJjZSkge1xuXHRcdFx0XHRkb2N1bWVudC5yZXNvdXJjZSA9IHAucmVzb3VyY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5yZXNvdXJjZSA9IGFwcC5jd2QgKyBcIi9cIiArIGRvY3VtZW50LnJlc291cmNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmaWxlbmFtZSA9IGRvY3VtZW50LnJlc291cmNlLnNwbGl0KFwiL1wiKTtcblx0XHRcdGZpbGVuYW1lID0gZmlsZW5hbWVbZmlsZW5hbWUubGVuZ3RoIC0xXTtcblxuXHRcdFx0d2hpbGUgKCAtLWwgPiAtMSkge1xuXHRcdFx0XHRpZiAoYVtsXS5uYW1lID09IGZpbGVuYW1lKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYVtsXS5uYW1lKTtcblx0XHRcdFx0XHR0aGlzLm9wZW4oZG9jdW1lbnQucmVzb3VyY2UpO1xuXHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghZXhpc3RzKSB7XG5cdFx0XHRcdGRvY3VtZW50cy5hbGwucHVzaChkb2N1bWVudCk7XG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJlZGl0YWJsZVwiLCB7dGl0bGU6IGRvY3VtZW50LnJlc291cmNlfSk7XG5cdFx0XHRcdGRvY3VtZW50cy5jdXJyZW50ID0gZG9jdW1lbnRzLmFsbC5sZW5ndGggLSAxO1xuXHRcdFx0XHRzaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRkb2MgPSBkb2N1bWVudHMuYWxsW2RvY3VtZW50cy5jdXJyZW50XTtcblx0XHRcdGRvYy5jb250ZW50ID0gdGhpcy52aWV3LmVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWU7XG5cdFx0XHRzYXZlVGV4dChkb2MucmVzb3VyY2UsIGRvYy5jb250ZW50KTtcblx0XHRcdHRoaXMuc2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuc2F2ZSwgNjAwMDApO1xuXHRcdH0sXG5cdFx0b3BlbjogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBkb2N1bWVudHMgPSB0aGlzLm1vZGVscy5kb2N1bWVudCxcblx0XHRcdFx0dGV4dGFyZWEgPSB0aGlzLnZpZXcuZWxlbWVudC5jaGlsZHJlblswXSxcblx0XHRcdFx0YXBwbGV0ID0gdGhpcztcblx0XHRcdGFwcC5yZXF1ZXN0KFwiZ2V0XCIsIHAsIFwiXCIsIGZ1bmN0aW9uIChyZXNwKSB7XG5cdFx0XHRcdHZhciBkb2MgPSBPYmplY3QuY3JlYXRlKGFwcGxldC5tb2RlbHMuZG9jdW1lbnQuc2NoZW1hKSxcblx0XHRcdFx0XHRkb2N1bWVudHMgPSBhcHBsZXQubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRcdGl0ZW0gPSBudWxsO1xuXHRcdFx0XHRkb2MucmVzb3VyY2UgPSBwO1xuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwiZWRpdGFibGVcIiwge3RpdGxlOiBkb2MucmVzb3VyY2V9KTtcblx0XHRcdFx0ZG9jdW1lbnRzLmFsbC5wdXNoKGRvYyk7XG5cdFx0XHRcdGRvY3VtZW50cy5jdXJyZW50ID0gZG9jdW1lbnRzLmFsbC5pbmRleE9mKGRvYyk7XG5cdFx0XHRcdGRvYy5jb250ZW50ID0gcmVzcDtcblx0XHRcdFx0dGV4dGFyZWEudmFsdWUgPSByZXNwO1xuXHRcdFx0XHRhcHBsZXQuc2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdGFwcGxldC5zaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdHRoaXMuc2F2ZSgpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2F2ZVRpbWVvdXQpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJhY3R1YWxseSBjbG9zaW5nIG5vdy4uXCIpO1xuXHRcdH1cblx0fTtcbn07XG5cblxuXG5cblxuXG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkRpc2sgVXNhZ2UgVmlzdWFsaXplclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHZpc3VhbGl6YXRpb246IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQXBwSWNvbihuYW1lLCBpbmRleCkge1xuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0YXBwbGV0ID0gYXBwbGV0c1tuYW1lXSgpLFxuXHRcdGRpcmVjdGlvbkNsYXNzID0gXCJcIjtcblx0aWYgKCEhaW5kZXgpIHtcblx0XHRpZiAoaW5kZXggPT0gMSkge1xuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiB1cFwiO1xuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiBkb3duXCI7XG5cdFx0fVxuXHR9XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1BcHAtSWNvblwiICsgZGlyZWN0aW9uQ2xhc3MpO1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgYXBwbGV0Lmljb24gKyBcIik7XCIpO1xuXHRlbGVtZW50LmlubmVySFRNTCA9IFwiPHNwYW4+XCIgKyBhcHBsZXQubmFtZSArIFwiPC9zcGFuPlwiO1xuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLm9wZW5QYW5lKFwiYXBwXCIsIGFwcGxldC5uYW1lLCB7XG5cdFx0XHRhcHBsZXQ6IHtcblx0XHRcdFx0bmFtZTogbmFtZVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LCB0cnVlKTtcbn07XG4iLCIvKiBDYXJkLmpzICovXG5cbnZhciBDb250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL2NvbnRleHRtZW51LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhcmQobmFtZSwgcmVzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGkgPSBudWxsLFxuXHRcdHVwID0gZmFsc2UsXG5cdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdGNvbnRleHRNZW51ID0gdHJ1ZSxcblx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG5cdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0Y29udGV4dE1lbnVEYXRhID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHJlc291cmNlOiByZXNvdXJjZSxcblx0XHRcdG1lbnVJdGVtczogW10sIC8vIGR1bW15IG1lbnUgaXRlbXNcblx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHR9O1xuXHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZFwiKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgbmFtZSk7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcmVzb3VyY2UpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maWd1cmVcIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdGNvbmZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2RlbGV0ZVBhdGgoYXBwLmN3ZCtcIi9cIituYW1lKTtcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlVJLUNvbnRleHQtTWVudVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LCB0cnVlKTtcblx0aXNJbWFnZSA9IC8oXFwuanBnfFxcLnBuZ3xcXC5naWZ8XFwuanBlZ3xcXC53ZWJwKS9pLnRlc3QocmVzb3VyY2UpO1xuXHRpZiAoaXNJbWFnZSkge1xuXHRcdHZhciB0aHVtYiA9IHJlc291cmNlLnJlcGxhY2UoL1xccy9nLCBcIiUyMFwiKTtcblx0XHRpZiAoIS8oXFwud2VicHxcXC5naWYpL2kudGVzdChyZXNvdXJjZSkpIHsgLy8gZG9uJ3QgdGh1bWJuYWlsIHdlYnAgb3IgZ2lmXG5cdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHR2YXIgdGh1bWIgPSByUGF0aFtyUGF0aC5sZW5ndGggLSAxXTtcblx0XHRcdHJQYXRoLnNwbGljZShyUGF0aC5sZW5ndGggLSAxLCAxKTtcblx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdGlmICgod2luZG93LmlubmVyV2lkdGggPCA2NDEgJiYgYXBwLnRodW1iU2l6ZSkgfHwgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmICFhcHAudGh1bWJTaXplKSkgeyAvLyB1c2UgaGktZHBpIHRodW1ibmFpbHMgYnkgZGVmYXVsdFxuXHRcdFx0XHRyUGF0aC5wdXNoKFwiMTAyNFwiKTtcblx0XHRcdH1cblx0XHRcdHJQYXRoLnB1c2godGh1bWIgKyBcIi5qcGdcIik7XG5cdFx0XHR0aHVtYiA9IHJQYXRoLmpvaW4oXCIvXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYiA9IHJlc291cmNlO1xuXHRcdH1cblx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgSW1hZ2VcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRpZiAoL14oLipcXC8pezAsMX1bXlxcLl0qLnsxfSQvLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRldGVjdCBmb2xkZXJzXG5cdFx0XHRjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5ID0gdHJ1ZTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRvcGVuRm9sZGVyKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEZvbGRlclwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjb250ZXh0TWVudSkge1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2UgZWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhcHAucmVxdWVzdChcIkdFVFwiLCByZXNvdXJjZSArIFwiP2NhY2hlPVwiICsgRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRhcHAub3BlblBhbmUoJ2VkaXQnLCBuYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1x0RXhwZXJpbWVudGFsLi5cblx0aWYgKGNvbnRleHRNZW51KSB7XG5cdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgc3R5bGUgPSBlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93TWVudVwiKSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdFx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGl0ZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikucmVwbGFjZShcInNob3dNZW51XCIsXCJcIikpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3R5bGUgKyBcIiBzaG93TWVudVwiKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGlmIChpc0ltYWdlKSB7XG5cdFx0XHRlLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9XG5cdH1cblx0aWYgKCEhY29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSkge1xuXHRcdGUuYXBwZW5kQ2hpbGQoY29uZmlndXJlKTtcblx0fVxuXG5cdGZvciAoaSBpbiBvcHRpb25zKSB7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uc1tpXSk7XG5cdH1cblx0cmV0dXJuIGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb250ZXh0TWVudShvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Db250ZXh0LU1lbnVcIik7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5kaXJlY3RvcnkgPT0gdHJ1ZSkge1xuXHRcdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRpcmVjdG9yeSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLmRpcmVjdG9yeU1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2Rhcmsvb3Blbi5wbmcpOycgaHJlZj0namF2YXNjcmlwdDpvcGVuRm9sZGVyKFxcXCJcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIlxcXCIpOycgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL2Rvd25sb2FkLnBuZyk7JyBocmVmPSdcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIicgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgb3B0aW9ucy5yZXNvdXJjZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIiwiIGZ1bmN0aW9uIERhdGFQYW5lICh0eXBlLCBuYW1lLCBkYXRhKSB7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICB0aXRsZVN0cmluZyA9IFwiXCIsXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdHRpdGxlRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0c2hvd1RpdGxlID0gZmFsc2UsXG4gICAgICAgIHNob3dFbnRyeSA9IGZhbHNlLFxuICAgICAgICBzaG93VGl0bGVFbnRyeSA9IGZhbHNlLFxuXHRcdGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICB1cGxvYWQgPSBudWxsLFxuICAgICAgICBlZGl0V2lkZ2V0ID0gbnVsbCxcblx0XHRhcHBsZXQgPSBudWxsO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lXCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG9uZVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkRvbmVcIik7XG5cdGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QodHJ1ZSksIHRydWUpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlhcIik7XG5cdGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKCksIHRydWUpO1xuICAgIGlmICghIWRhdGEuYXBwbGV0KSB7XG4gICAgICAgIC8vIGxvYWQgYXBwbGV0IGZvcm0gZGF0YS5hcHBsZXRcbiAgICAgICAgYXBwbGV0ID0gbmV3IEFwcGxldChkYXRhLmFwcGxldC5uYW1lLCB7b3BlbjogKCEhIGRhdGEuYXBwbGV0Lm9wZW4gPyBkYXRhLmFwcGxldC5vcGVuIDogbnVsbCl9KTtcblx0XHRhcHBsZXQuZGF0YVBhbmUgPSB0aGlzOyAvLyB3b24ndCBiZSBuZWVkZWQgb25jZSBEYXRhUGFuZSBpcyBkZXByZWNhdGVkXG5cdFx0dGhpcy5hcHBsZXQgPSBhcHBsZXQ7XG5cdFx0Y29udGFpbmVyID0gYXBwbGV0LmRpdjtcbiAgICB9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RvdWNoLnBuZylcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcblx0XHRcdGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvbWtkaXIucG5nKTtcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICB1cGxvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuXHRcdFx0XHR0aXRsZVN0cmluZyA9ICc8aW1nIHNyYz1cIi9hcHAvZGF0YS91cGxvYWQucG5nXCIgdGl0bGU9XCJVcGxvYWQgRmlsZXNcIj48c3Bhbj5VcGxvYWQgRmlsZXM8L3NwYW4+Jztcblx0XHRcdFx0c2hvd1RpdGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZpZXdcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9IFwiVmlldyBGaWxlXCI7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHRpZiAoISEgZGF0YS5pY29uKSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIitkYXRhLmljb24rXCIpO1wiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90ZXh0Mi5wbmcpO1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZztcblx0XHRpZiAoc2hvd1RpdGxlKSB7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mKGRhdGEpPT0ndW5kZWZpbmVkJyB8fCB0eXBlb2YoZGF0YS5jb250cm9scykgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YS5jb250cm9scyA9PSB0cnVlKSB7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpO1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSk7XG5cdFx0fVxuXHRcdGlmICghIWRhdGEgJiYgISEgZGF0YS5jbGFzcykge1xuXHRcdFx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGF0YS5jbGFzcyk7XG5cdFx0fVxuICAgICAgICBpZiAoISEgdXBsb2FkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXBsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd1RpdGxlRW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVudHJ5KTtcbiAgICAgICAgICAgIHRpdGxlRW50cnkudmFsdWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93RW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICBpZiAoISEgZGF0YS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudmFsdWUgPSBkYXRhLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlZCB0byBhZGQgXCJkb25lXCIgYnV0dG9uIGhlcmVcbiAgICB9XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cdHRoaXMuZG9uZSA9IGRvbmU7XG5cdHRoaXMuZW50cnkgPSBlbnRyeTtcblx0dGhpcy5wYW5lVGl0bGUgPSB0aXRsZTtcblx0dGhpcy50aXRsZUVudHJ5ID0gdGl0bGVFbnRyeTtcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gdXBsb2FkO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLnNuYXAgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG5cdHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGlyZWN0aW9uKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXG4gICAgICAgIHBhbmUgPSB0aGlzO1xuICAgIHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuICAgIHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5nZXRDbG9zZU1ldGhvZCA9IGZ1bmN0aW9uIChzYXZlKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuXHRcdHZhciBsZWF2ZU9wZW4gPSBmYWxzZTtcblx0XHRpZiAoc2F2ZSkge1xuXHRcdFx0c3dpdGNoIChwYW5lLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgICAgICBtYWtlRGlyZWN0b3J5KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZXMocGFuZSk7XG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICBcdFx0XHRzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdGlmICghbGVhdmVPcGVuKSB7XG5cdFx0XHRwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcblx0XHRcdHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0XHR9XG5cdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhUGFuZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNZW51KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdG1lbnVJdGVtcyA9IFtdLFxuXHRcdG1lbnVJdGVtID0gbnVsbCxcblx0XHRtZW51ID0gdGhpcyxcblx0XHRtID0gMDtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0dGhpcy5hcHBsZXQgPSBudWxsO1xuICAgIGlmICghISBvcHRpb25zKSB7IC8vIG1ha2Ugc3VyZSBvcHRpb25zIGFyZSBkZWZpbmVkXG4gICAgICAgIGlmICghISBvcHRpb25zLnRpdGxlQnV0dG9uKSB7XG5cdFx0ICBtZW51SXRlbXMucHVzaChvcHRpb25zLnRpdGxlQnV0dG9uKTtcblx0ICAgfVxuICAgIH1cblx0dHlwZSA9ICghIXR5cGUgPyB0eXBlIDogXCJzdGFuZGFyZFwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdG1lbnVJdGVtcyA9IG1lbnVJdGVtcy5jb25jYXQoVUkuZGVmYXVsdHMubWVudS5vcHRpb25zKTtcblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXHRcdG1lbnVJdGVtcyA9IG9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGJyZWFrO1xuXHR9XG5cdHdoaWxlIChtIDwgbWVudUl0ZW1zLmxlbmd0aCkge1xuXHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcblx0XHRtZW51SXRlbSA9IG1lbnVJdGVtc1ttXTtcblx0XHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBtZW51SXRlbS5uYW1lKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0KGZ1bmN0aW9uIChidXR0b25NZW51LCBidXR0b25NZW51SXRlbSkge1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSkobWVudSwgbWVudUl0ZW0pO1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdFx0bSArPSAxO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNb2RhbFdpbmRvdyh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Nb2RhbFdpbmRvd1wiKTtcblx0dGhpcy5lbGVtZW50ID0gc2VjdGlvbjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuXHRcdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRpZiAoISFvcHRpb25zLmljb24pIHtcblx0XHRpY29uLnNyYyA9IG9wdGlvbnMuaWNvbjtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHR5cGUsIG9wdGlvbnMsIHNlbGVjdGlvbkNhbGxiYWNrKSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImVkaXRhYmxlXCI6XG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb25zLnRpdGxlKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdGlmICghISBzZWxlY3Rpb25DYWxsYmFjaykge1xuXHRcdFx0XHRzZWxlY3Rpb25DYWxsYmFjayhldnQpO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWZWN0b3JFZGl0b3Iob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0aXRlbS5pbm5lckhUTUwgPSBcIjxoMj5cIiArIG9wdGlvbnMubmFtZSArIFwiPC9oMj5cIjtcblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIl19
