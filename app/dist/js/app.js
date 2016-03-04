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
			menuItems = menuItems.concat(UI.defaults.menu.options);
			menuItems.forEach(function (menuItem) {
				menuItem.icon = getThemedIcon(menuItem.icon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvYWxhcm0tY2xvY2suanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2FuaW1hdGlvbi1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9tZXNzYWdpbmcuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZWFyY2guanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NldHRpbmdzLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy90ZXJtaW5hbC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvdGV4dC1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksR0FBRyxP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V0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztDQUNILENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogbWFpbi5qcyAqL1xuXG4gd2luZG93LkNhcmQgPSByZXF1aXJlKFwiLi91aS9jYXJkLmpzXCIpO1xuIHdpbmRvdy5NZW51ID0gcmVxdWlyZShcIi4vdWkvbWVudS5qc1wiKTtcbiB3aW5kb3cuRGF0YVBhbmUgPSByZXF1aXJlKFwiLi91aS9kYXRhcGFuZS5qc1wiKTtcbiB3aW5kb3cuQ29udGV4dE1lbnUgPSByZXF1aXJlKFwiLi91aS9jb250ZXh0bWVudS5qc1wiKTtcbiB3aW5kb3cuQXBwSWNvbiA9IHJlcXVpcmUoXCIuL3VpL2FwcGljb24uanNcIik7XG4gd2luZG93LkZyYW1lID0gcmVxdWlyZShcIi4vdWkvZnJhbWUuanNcIik7XG4gd2luZG93LlNpZGViYXIgPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyLmpzXCIpO1xuIHdpbmRvdy5TaWRlYmFySXRlbSA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXJpdGVtLmpzXCIpO1xuIHdpbmRvdy5Nb2RhbFdpbmRvdyA9IHJlcXVpcmUoXCIuL3VpL21vZGFsd2luZG93LmpzXCIpO1xuIHdpbmRvdy5Ub29sYmFyID0gcmVxdWlyZShcIi4vdWkvdG9vbGJhci5qc1wiKTtcbiB3aW5kb3cuVmVjdG9yRWRpdG9yID0gcmVxdWlyZShcIi4vdWkvdmVjdG9yZWRpdG9yLmpzXCIpO1xuXG4gd2luZG93LmFwcGxldHMgPSBbXTtcblxuIGFwcGxldHNbXCJhbGFybS1jbG9ja1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYWxhcm0tY2xvY2suanNcIik7XG4gYXBwbGV0c1tcInRlcm1pbmFsXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy90ZXJtaW5hbC5qc1wiKTtcbiBhcHBsZXRzW1wibWVzc2FnaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9tZXNzYWdpbmcuanNcIik7XG4gYXBwbGV0c1tcImltYWdlLXZpZXdlclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzXCIpO1xuIGFwcGxldHNbXCJ0ZXh0LWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdGV4dC1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcImltYWdlLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2UtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCIzZC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzLzNkLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wibWlkaS1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL21pZGktZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJhbmltYXRpb24tZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJzZWFyY2hcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NlYXJjaC5qc1wiKTtcbiBhcHBsZXRzW1wic2V0dGluZ3NcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NldHRpbmdzLmpzXCIpO1xuIGFwcGxldHNbXCJ1c2FnZS12aXN1YWxpemVyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy91c2FnZS12aXN1YWxpemVyLmpzXCIpO1xuIGFwcGxldHNbXCJzaGFyaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zaGFyaW5nLmpzXCIpO1xuXG4vL3Rlc3QgdHRlc3RcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIjNEIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jdWJlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRvYmplY3Q6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkNsb2NrXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2Nsb2NrLTIucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJDbG9ja1wiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIkFsYXJtXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiVGltZXJcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdH0sXG5cdFx0c2NoZW1hOiB7XG5cdFx0XHRcIm1vZGVsc1wiOiBbXCJBbGFybVwiLCBcIlRpbWVyXCJdLFxuXHRcdFx0XCJBbGFybVwiOiB7XG5cdFx0XHRcdFwiaG91cnNcIjogMCxcblx0XHRcdFx0XCJtaW51dGVzXCI6IDAsXG5cdFx0XHRcdFwicG1cIjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRcIlRpbWVyXCI6IHtcblx0XHRcdFx0XCJkdXJhdGlvblwiOiAwLFxuXHRcdFx0XHRcImRhdGVcIjogXCIyMDE1LTA4LTA4XCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJBbmltYXRpb24gRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJJbWFnZSBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvaW1hZ2UtMi5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJJbWFnZSBWaWV3ZXJcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXh0XCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiUHJldmlvdXNcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJTaGFyZVwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIk1lc3NhZ2luZ1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaGF0LnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV3IE1lc3NhZ2VcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fSxcblx0XHRcdFwiTmV3IENoYXRcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fSxcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk9wdGlvbnNcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRjb250YWN0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRcdFx0dHdpdHRlcjogXCJcIixcblx0XHRcdFx0XHRmYWNlYm9vazogXCJcIixcblx0XHRcdFx0XHRzb3VuZGNsb3VkOiBcIlwiLFxuXHRcdFx0XHRcdGdtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdGdpdGh1YjogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0bWVzc2FnZXM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dGl0bGU6IFwiXCIsXG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH0sXG5cdFx0XHRjaGF0czoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHR0bzogXCJcIixcblx0XHRcdFx0XHRmcm9tOiBcIlwiLFxuXHRcdFx0XHRcdHJvb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0Ly8gY29ubmVjdCBzb2NrZXQgdG8gYXBwIGlmIG5vdCBjb25uZWN0ZWQuLi5cblx0XHRcdC8vIHNlbmQgd2VsY29tZSBtZXNzYWdlXG5cdFx0XHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc2VuZCBidXR0b25cblx0XHRcdC8vIGFkZCBzb2NrZXQgZXZlbnQgbGlzdGVuZXIgZm9yIGNoYXQgbWVzc2FnZVxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiTUlESSBFZGl0b3JcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0YXJyYW5nbWVudDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRkYXRhOiBcIlwiLFxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZWFyY2hcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRyZXN1bHQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZXR0aW5nc1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNldHRpbmc6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIi8vdmFyIEZyYW1lID0gcmVxdWlyZShcIi4uL3VpL2ZyYW1lLmpzXCIpLFxuLy9cdE1lbnUgPSByZXF1aXJlKFwiLi4vdWkvbWVudS5qc1wiKSxcbi8vXHRTaWRlYmFyID0gcmVxdWlyZShcIi4uL3VpL3NpZGViYXIuanNcIik7XG4vLyB0ZXN0IDJmZ3JmXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNoYXJpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvc2hhcmUucG5nXCIsXG5cdFx0dmlldzogbnVsbCxcblx0XHRtZW51OiBudWxsLFxuXHRcdHNpZGViYXI6IG51bGwsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXcgU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJOZXcgU2hvcnRjdXRcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNoYXJlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0cHVibGljOiBcIjFcIixcblx0XHRcdFx0XHR3aGl0ZWxpc3Q6IFwiXCIsXG5cdFx0XHRcdFx0ZGF0YTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHRuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHJlc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHB1YmxpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHR3aGl0ZUxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0ZGF0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHJlc291cmNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHB1YmxpY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcblx0XHRcdFx0d2hpdGVMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0XHRcdGRhdGFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxcblx0XHRcdFx0ZG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGwsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IG51bGwsXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFwiZWxlbWVudFwiOiBlbGVtZW50XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XG5cdFx0XHR0aGlzLm1lbnUgPSBtZW51O1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdFx0cmVzb3VyY2VMYWJlbC5pbm5lckhUTUwgPSBcIlJlc291cmNlXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlTGFiZWwpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChyZXNvdXJjZUlucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0XHRcdHB1YmxpY0xhYmVsLmlubmVySFRNTCA9IFwiUHVibGljXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHB1YmxpY0xhYmVsKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJZZXNcIjtcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdFx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcblx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBcIk5vXCI7XG5cdFx0XHRwdWJsaWNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdFx0XHRkYXRhTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRhXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFMYWJlbCk7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0d2hpdGVMaXN0TGFiZWwuaW5uZXJIVE1MID0gXCJXaGl0ZSBMaXN0XCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdExhYmVsKTtcblx0XHRcdHdoaXRlTGlzdElucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGxcIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdElucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblxuXHRcdFx0aWYgKCEhcC5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYWRkKCk7XG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF07XG5cdFx0XHRcdHNoYXJlLm5hbWUgPSBwLm9wZW4ucmVzb3VyY2U7XG5cdFx0XHRcdHNoYXJlLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0XHRyZXNvdXJjZUlucHV0LnZhbHVlID0gc2hhcmUucmVzb3VyY2U7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTaGFyZSBGb2xkZXJcIik7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0XHRzZWxmLnNhdmUoKTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkb25lSW5wdXQpO1xuXG5cdFx0XHRhcHAuc2hhcmluZy5saXN0QWxsU2hhcmVzKGFwcC51c2VyLm5hbWUsIChmdW5jdGlvbiAoc2lkZWJhckxpc3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHR2YXIgcyA9IDAsXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IG51bGwsXG5cdFx0XHRcdFx0XHRcdGl0ZW0gPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKCEhIHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImluaXQgYXBwIGdldCBzaGFyZXNcIiwgc2hhcmVzKTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKHMgPCBzaGFyZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmVzW3NdLmRpcmVjdG9yeX0pO1xuXHRcdFx0XHRcdFx0XHRcdHNpZGViYXJMaXN0Lm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0XHRcdFx0XHRzaWRlYmFyTGlzdC5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0cyArKztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHR9KShzaWRlYmFyKSk7XG5cblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIGlucHV0cy4uLiBuZWVkIHRvIGltcGxlbWVudFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2lkZWJhcik7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNpZGViYXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuc2hhcmUuc2NoZW1hKSxcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmUubmFtZX0pO1xuXHRcdFx0c2hhcmUucmVzb3VyY2UgPSBzaGFyZS5uYW1lO1xuXHRcdFx0c2hhcmVzLmFsbC5wdXNoKHNoYXJlKTtcblx0XHRcdHNoYXJlcy5jdXJyZW50ID0gc2hhcmVzLmFsbC5sZW5ndGggLSAxO1xuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRzaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxuXHRcdFx0XHRwYXRoID0gc2hhcmUucmVzb3VyY2UsXG5cdFx0XHRcdHVzZXJzID0gc2hhcmUud2hpdGVsaXN0LFxuXHRcdFx0XHRwdWJsaWNTaGFyZSA9IHNoYXJlLnB1YmxpYyxcblx0XHRcdFx0ZGF0YSA9IHNoYXJlLmRhdGE7XG5cdFx0XHR3aW5kb3cuYXBwLnNoYXJpbmcuc2F2ZVNoYXJlKHBhdGgsIHBhdGgsIHVzZXJzLCBwdWJsaWNTaGFyZSwgZGF0YSwgZnVuY3Rpb24gKHJlc3ApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzYXZlU2hhcmUuLi4gXCIsIHJlc3ApO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF0sXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5wYXRoO1xuXHRcdFx0YXBwLnNoYXJpbmcuZGVsZXRlU2hhcmUocGF0aCk7XG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcblxuXHRcdH1cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHsgLy8gc3VwcG9ydCBhbGdlYnJhIGFzIHdlbGwgYXMgKm5peCBjb21tYW5kc1xuXHRcdG5hbWU6IFwiVGVybWluYWxcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgRHVtcFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdHNjaGVtYToge1xuXHRcdFx0XCJtb2RlbHNcIjogW1wiT3V0cHV0XCJdLFxuXHRcdFx0XCJPdXRwdXRcIjoge1xuXHRcdFx0XHRcImRhdGFcIjogXCJcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRlbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBbdmlldywgbWVudV07XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiVGV4dCBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdHNhdmVUaW1lb3V0OiAwLFxuXHRcdG1vZGVsczoge1xuXHRcdFx0ZG9jdW1lbnQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiTmV3IERvY3VtZW50LnR4dFwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHQvL3RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGw7XG5cdFx0XHQvL2VsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpbDtcblxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcInRleHRcIik7XG5cdFx0XHR0aGlzLnNpZGViYXIgPSBzaWRlYmFyO1xuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cblx0XHRcdGlmICghIXAgJiYgcC5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYWRkKHtyZXNvdXJjZTogcC5vcGVufSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFkZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuc2F2ZSwgMzAwMDApO1xuXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRkb2N1bWVudCA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuZG9jdW1lbnQuc2NoZW1hKSxcblx0XHRcdFx0aXRlbSA9IG51bGwsXG5cdFx0XHRcdGV4aXN0cyA9IGZhbHNlLFxuXHRcdFx0XHRmaWxlbmFtZSA9IFwiXCIsXG5cdFx0XHRcdGEgPSBhcHAuZmlsZXMsXG5cdFx0XHRcdGwgPSBhLmxlbmd0aDtcblxuXHRcdFx0aWYgKCEhcCAmJiAhIXAucmVzb3VyY2UpIHtcblx0XHRcdFx0ZG9jdW1lbnQucmVzb3VyY2UgPSBwLnJlc291cmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQucmVzb3VyY2UgPSBhcHAuY3dkICsgXCIvXCIgKyBkb2N1bWVudC5yZXNvdXJjZTtcblx0XHRcdH1cblxuXHRcdFx0ZmlsZW5hbWUgPSBkb2N1bWVudC5yZXNvdXJjZS5zcGxpdChcIi9cIik7XG5cdFx0XHRmaWxlbmFtZSA9IGZpbGVuYW1lW2ZpbGVuYW1lLmxlbmd0aCAtMV07XG5cblx0XHRcdHdoaWxlICggLS1sID4gLTEpIHtcblx0XHRcdFx0aWYgKGFbbF0ubmFtZSA9PSBmaWxlbmFtZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGFbbF0ubmFtZSk7XG5cdFx0XHRcdFx0dGhpcy5vcGVuKGRvY3VtZW50LnJlc291cmNlKTtcblx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWV4aXN0cykge1xuXHRcdFx0XHRkb2N1bWVudHMuYWxsLnB1c2goZG9jdW1lbnQpO1xuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwiZWRpdGFibGVcIiwge3RpdGxlOiBkb2N1bWVudC5yZXNvdXJjZX0pO1xuXHRcdFx0XHRkb2N1bWVudHMuY3VycmVudCA9IGRvY3VtZW50cy5hbGwubGVuZ3RoIC0gMTtcblx0XHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdHNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBkb2N1bWVudHMgPSB0aGlzLm1vZGVscy5kb2N1bWVudCxcblx0XHRcdFx0ZG9jID0gZG9jdW1lbnRzLmFsbFtkb2N1bWVudHMuY3VycmVudF07XG5cdFx0XHRkb2MuY29udGVudCA9IHRoaXMudmlldy5lbGVtZW50LmNoaWxkcmVuWzBdLnZhbHVlO1xuXHRcdFx0c2F2ZVRleHQoZG9jLnJlc291cmNlLCBkb2MuY29udGVudCk7XG5cdFx0XHR0aGlzLnNhdmVUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNhdmUsIDYwMDAwKTtcblx0XHR9LFxuXHRcdG9wZW46IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdHRleHRhcmVhID0gdGhpcy52aWV3LmVsZW1lbnQuY2hpbGRyZW5bMF0sXG5cdFx0XHRcdGFwcGxldCA9IHRoaXM7XG5cdFx0XHRhcHAucmVxdWVzdChcImdldFwiLCBwLCBcIlwiLCBmdW5jdGlvbiAocmVzcCkge1xuXHRcdFx0XHR2YXIgZG9jID0gT2JqZWN0LmNyZWF0ZShhcHBsZXQubW9kZWxzLmRvY3VtZW50LnNjaGVtYSksXG5cdFx0XHRcdFx0ZG9jdW1lbnRzID0gYXBwbGV0Lm1vZGVscy5kb2N1bWVudCxcblx0XHRcdFx0XHRpdGVtID0gbnVsbDtcblx0XHRcdFx0ZG9jLnJlc291cmNlID0gcDtcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcImVkaXRhYmxlXCIsIHt0aXRsZTogZG9jLnJlc291cmNlfSk7XG5cdFx0XHRcdGRvY3VtZW50cy5hbGwucHVzaChkb2MpO1xuXHRcdFx0XHRkb2N1bWVudHMuY3VycmVudCA9IGRvY3VtZW50cy5hbGwuaW5kZXhPZihkb2MpO1xuXHRcdFx0XHRkb2MuY29udGVudCA9IHJlc3A7XG5cdFx0XHRcdHRleHRhcmVhLnZhbHVlID0gcmVzcDtcblx0XHRcdFx0YXBwbGV0LnNpZGViYXIub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRhcHBsZXQuc2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR0aGlzLnNhdmUoKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNhdmVUaW1lb3V0KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYWN0dWFsbHkgY2xvc2luZyBub3cuLlwiKTtcblx0XHR9XG5cdH07XG59O1xuXG5cblxuXG5cblxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJEaXNrIFVzYWdlIFZpc3VhbGl6ZXJcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHR2aXN1YWxpemF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcEljb24obmFtZSwgaW5kZXgpIHtcclxuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcblx0XHRhcHBsZXQgPSBhcHBsZXRzW25hbWVdKCksXG5cdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xyXG5cdGlmICghIWluZGV4KSB7XHJcblx0XHRpZiAoaW5kZXggPT0gMSkge1xyXG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XHJcblx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcclxuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiBkb3duXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1BcHAtSWNvblwiICsgZGlyZWN0aW9uQ2xhc3MpO1xyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBhcHBsZXQuaWNvbiArIFwiKTtcIik7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgYXBwbGV0Lm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGFwcC5vcGVuUGFuZShcImFwcFwiLCBhcHBsZXQubmFtZSwge1xyXG5cdFx0XHRhcHBsZXQ6IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sIHRydWUpO1xyXG59O1xyXG4iLCIvKiBDYXJkLmpzICovXG5cbnZhciBDb250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL2NvbnRleHRtZW51LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhcmQobmFtZSwgcmVzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGkgPSBudWxsLFxuXHRcdHVwID0gZmFsc2UsXG5cdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdGNvbnRleHRNZW51ID0gdHJ1ZSxcblx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG5cdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0Y29udGV4dE1lbnVEYXRhID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHJlc291cmNlOiByZXNvdXJjZSxcblx0XHRcdG1lbnVJdGVtczogW10sIC8vIGR1bW15IG1lbnUgaXRlbXNcblx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHR9O1xuXHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZFwiKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgbmFtZSk7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcmVzb3VyY2UpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maWd1cmVcIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdGNvbmZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2RlbGV0ZVBhdGgoYXBwLmN3ZCtcIi9cIituYW1lKTtcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlVJLUNvbnRleHQtTWVudVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LCB0cnVlKTtcblx0aXNJbWFnZSA9IC8oXFwuanBnfFxcLnBuZ3xcXC5naWZ8XFwuanBlZ3xcXC53ZWJwKS9pLnRlc3QocmVzb3VyY2UpO1xuXHRpZiAoaXNJbWFnZSkge1xuXHRcdHZhciB0aHVtYiA9IHJlc291cmNlLnJlcGxhY2UoL1xccy9nLCBcIiUyMFwiKTtcblx0XHRpZiAoIS8oXFwud2VicHxcXC5naWYpL2kudGVzdChyZXNvdXJjZSkpIHsgLy8gZG9uJ3QgdGh1bWJuYWlsIHdlYnAgb3IgZ2lmXG5cdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHR2YXIgdGh1bWIgPSByUGF0aFtyUGF0aC5sZW5ndGggLSAxXTtcblx0XHRcdHJQYXRoLnNwbGljZShyUGF0aC5sZW5ndGggLSAxLCAxKTtcblx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdGlmICgod2luZG93LmlubmVyV2lkdGggPCA2NDEgJiYgYXBwLnRodW1iU2l6ZSkgfHwgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmICFhcHAudGh1bWJTaXplKSkgeyAvLyB1c2UgaGktZHBpIHRodW1ibmFpbHMgYnkgZGVmYXVsdFxuXHRcdFx0XHRyUGF0aC5wdXNoKFwiMTAyNFwiKTtcblx0XHRcdH1cblx0XHRcdHJQYXRoLnB1c2godGh1bWIgKyBcIi5qcGdcIik7XG5cdFx0XHR0aHVtYiA9IHJQYXRoLmpvaW4oXCIvXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYiA9IHJlc291cmNlO1xuXHRcdH1cblx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgSW1hZ2VcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRpZiAoL14oLipcXC8pezAsMX1bXlxcLl0qLnsxfSQvLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRldGVjdCBmb2xkZXJzXG5cdFx0XHRjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5ID0gdHJ1ZTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRvcGVuRm9sZGVyKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEZvbGRlclwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjb250ZXh0TWVudSkge1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2UgZWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhcHAucmVxdWVzdChcIkdFVFwiLCByZXNvdXJjZSArIFwiP2NhY2hlPVwiICsgRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRhcHAub3BlblBhbmUoJ2VkaXQnLCBuYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1x0RXhwZXJpbWVudGFsLi5cblx0aWYgKGNvbnRleHRNZW51KSB7XG5cdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgc3R5bGUgPSBlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93TWVudVwiKSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdFx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGl0ZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikucmVwbGFjZShcInNob3dNZW51XCIsXCJcIikpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3R5bGUgKyBcIiBzaG93TWVudVwiKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGlmIChpc0ltYWdlKSB7XG5cdFx0XHRlLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9XG5cdH1cblx0aWYgKCEhY29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSkge1xuXHRcdGUuYXBwZW5kQ2hpbGQoY29uZmlndXJlKTtcblx0fVxuXG5cdGZvciAoaSBpbiBvcHRpb25zKSB7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uc1tpXSk7XG5cdH1cblx0cmV0dXJuIGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb250ZXh0TWVudShvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Db250ZXh0LU1lbnVcIik7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5kaXJlY3RvcnkgPT0gdHJ1ZSkge1xuXHRcdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRpcmVjdG9yeSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLmRpcmVjdG9yeU1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2Rhcmsvb3Blbi5wbmcpOycgaHJlZj0namF2YXNjcmlwdDpvcGVuRm9sZGVyKFxcXCJcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIlxcXCIpOycgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL2Rvd25sb2FkLnBuZyk7JyBocmVmPSdcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIicgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgb3B0aW9ucy5yZXNvdXJjZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIiwiIGZ1bmN0aW9uIERhdGFQYW5lICh0eXBlLCBuYW1lLCBkYXRhKSB7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICB0aXRsZVN0cmluZyA9IFwiXCIsXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdHRpdGxlRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0c2hvd1RpdGxlID0gZmFsc2UsXG4gICAgICAgIHNob3dFbnRyeSA9IGZhbHNlLFxuICAgICAgICBzaG93VGl0bGVFbnRyeSA9IGZhbHNlLFxuXHRcdGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICB1cGxvYWQgPSBudWxsLFxuICAgICAgICBlZGl0V2lkZ2V0ID0gbnVsbCxcblx0XHRhcHBsZXQgPSBudWxsO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lXCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG9uZVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkRvbmVcIik7XG5cdGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QodHJ1ZSksIHRydWUpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlhcIik7XG5cdGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKCksIHRydWUpO1xuICAgIGlmICghIWRhdGEuYXBwbGV0KSB7XG4gICAgICAgIC8vIGxvYWQgYXBwbGV0IGZvcm0gZGF0YS5hcHBsZXRcbiAgICAgICAgYXBwbGV0ID0gbmV3IEFwcGxldChkYXRhLmFwcGxldC5uYW1lLCB7b3BlbjogKCEhIGRhdGEuYXBwbGV0Lm9wZW4gPyBkYXRhLmFwcGxldC5vcGVuIDogbnVsbCl9KTtcblx0XHRhcHBsZXQuZGF0YVBhbmUgPSB0aGlzOyAvLyB3b24ndCBiZSBuZWVkZWQgb25jZSBEYXRhUGFuZSBpcyBkZXByZWNhdGVkXG5cdFx0dGhpcy5hcHBsZXQgPSBhcHBsZXQ7XG5cdFx0Y29udGFpbmVyID0gYXBwbGV0LmRpdjtcbiAgICB9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RvdWNoLnBuZylcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcblx0XHRcdGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvbWtkaXIucG5nKTtcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICB1cGxvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuXHRcdFx0XHR0aXRsZVN0cmluZyA9ICc8aW1nIHNyYz1cIi9hcHAvZGF0YS91cGxvYWQucG5nXCIgdGl0bGU9XCJVcGxvYWQgRmlsZXNcIj48c3Bhbj5VcGxvYWQgRmlsZXM8L3NwYW4+Jztcblx0XHRcdFx0c2hvd1RpdGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZpZXdcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9IFwiVmlldyBGaWxlXCI7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHRpZiAoISEgZGF0YS5pY29uKSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIitkYXRhLmljb24rXCIpO1wiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90ZXh0Mi5wbmcpO1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZztcblx0XHRpZiAoc2hvd1RpdGxlKSB7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mKGRhdGEpPT0ndW5kZWZpbmVkJyB8fCB0eXBlb2YoZGF0YS5jb250cm9scykgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YS5jb250cm9scyA9PSB0cnVlKSB7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpO1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSk7XG5cdFx0fVxuXHRcdGlmICghIWRhdGEgJiYgISEgZGF0YS5jbGFzcykge1xuXHRcdFx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGF0YS5jbGFzcyk7XG5cdFx0fVxuICAgICAgICBpZiAoISEgdXBsb2FkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXBsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd1RpdGxlRW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVudHJ5KTtcbiAgICAgICAgICAgIHRpdGxlRW50cnkudmFsdWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93RW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICBpZiAoISEgZGF0YS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudmFsdWUgPSBkYXRhLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlZCB0byBhZGQgXCJkb25lXCIgYnV0dG9uIGhlcmVcbiAgICB9XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cdHRoaXMuZG9uZSA9IGRvbmU7XG5cdHRoaXMuZW50cnkgPSBlbnRyeTtcblx0dGhpcy5wYW5lVGl0bGUgPSB0aXRsZTtcblx0dGhpcy50aXRsZUVudHJ5ID0gdGl0bGVFbnRyeTtcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gdXBsb2FkO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLnNuYXAgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG5cdHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGlyZWN0aW9uKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXG4gICAgICAgIHBhbmUgPSB0aGlzO1xuICAgIHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuICAgIHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5nZXRDbG9zZU1ldGhvZCA9IGZ1bmN0aW9uIChzYXZlKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuXHRcdHZhciBsZWF2ZU9wZW4gPSBmYWxzZTtcblx0XHRpZiAoc2F2ZSkge1xuXHRcdFx0c3dpdGNoIChwYW5lLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgICAgICBtYWtlRGlyZWN0b3J5KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZXMocGFuZSk7XG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICBcdFx0XHRzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdGlmICghbGVhdmVPcGVuKSB7XG5cdFx0XHRwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcblx0XHRcdHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0XHR9XG5cdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhUGFuZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNZW51KHR5cGUsIG9wdGlvbnMpIHtcclxuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXHJcblx0XHRnZXRUaGVtZWRJY29uID0gYXBwLmdldFRoZW1lZEljb24sXHJcblx0XHRtZW51SXRlbXMgPSBbXSxcclxuXHRcdG1lbnVJdGVtID0gbnVsbCxcclxuXHRcdG1lbnUgPSB0aGlzLFxyXG5cdFx0bSA9IDA7XHJcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xyXG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xyXG5cdHRoaXMuYXBwbGV0ID0gbnVsbDtcclxuICAgIGlmICghISBvcHRpb25zKSB7IC8vIG1ha2Ugc3VyZSBvcHRpb25zIGFyZSBkZWZpbmVkXHJcbiAgICAgICAgaWYgKCEhIG9wdGlvbnMudGl0bGVCdXR0b24pIHtcclxuXHRcdCAgbWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XHJcblx0ICAgfVxyXG4gICAgfVxyXG5cdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0Y2FzZSBcInN0YW5kYXJkXCI6XHJcblx0XHRtZW51SXRlbXMgPSBtZW51SXRlbXMuY29uY2F0KFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucyk7XHJcblx0XHRtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihtZW51SXRlbSl7XHJcblx0XHRcdG1lbnVJdGVtLmljb24gPSBnZXRUaGVtZWRJY29uKG1lbnVJdGVtLmljb24pO1xyXG5cdFx0fSk7XHJcblx0XHRicmVhaztcclxuXHRjYXNlIFwiY3VzdG9tXCI6XHJcblx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcclxuXHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcclxuXHRcdG1lbnVJdGVtID0gbWVudUl0ZW1zW21dO1xyXG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XHJcblx0XHQoZnVuY3Rpb24gKGJ1dHRvbk1lbnUsIGJ1dHRvbk1lbnVJdGVtKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xyXG5cdFx0XHR9LCB0cnVlKTtcclxuXHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcclxuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0XHRtICs9IDE7XHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1vZGFsV2luZG93KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0c2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1vZGFsV2luZG93XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBzZWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXG5cdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGlmICghIW9wdGlvbnMuaWNvbikge1xuXHRcdGljb24uc3JjID0gYXBwLmdldFRoZW1lZEljb24ob3B0aW9ucy5pY29uKTtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFySXRlbSh0eXBlLCBvcHRpb25zLCBzZWxlY3Rpb25DYWxsYmFjaykge1xuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJlZGl0YWJsZVwiOlxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb3B0aW9ucy50aXRsZSk7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRpZiAoISEgc2VsZWN0aW9uQ2FsbGJhY2spIHtcblx0XHRcdFx0c2VsZWN0aW9uQ2FsbGJhY2soZXZ0KTtcblx0XHR9XG5cdH0sIHRydWUpO1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhckl0ZW1cIik7XG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvb2xiYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVG9vbGJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVmVjdG9yRWRpdG9yKG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVZlY3Rvci1FZGl0b3JcIik7XG5cdGl0ZW0uaW5uZXJIVE1MID0gXCI8aDI+XCIgKyBvcHRpb25zLm5hbWUgKyBcIjwvaDI+XCI7XG5cdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgZmFsc2UpO1xuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdH0pO1xufTtcbiJdfQ==
