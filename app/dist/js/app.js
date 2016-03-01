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
					resource: "New Document",
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

			this.add();

			return [menu, sidebar, view];
		},
		add: function add(p) {
			var sidebar = this.sidebar,
			    documents = this.models.document,
			    document = Object.create(this.models.document.schema),
			    item = new SidebarItem("standard", { title: document.resource });
			documents.all.push(document);
			documents.current = documents.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
		},
		save: function save(p) {
			var documents = this.models.document,
			    doc = documents.all[documents.current];
			saveText(doc.resource, doc.content);
			this.saveTimeout = setTimeout(function () {
				this.save();
			}, 60000);
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

module.exports = function SidebarItem(type, options) {
	var div = document.createElement("div");
	div.setAttribute("class", "UI-SidebarItem");
	this.element = div;
	switch (type) {
		case "standard":
			div.innerHTML = options.title;
			break;
		case "custom":

			break;
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbGFybS1jbG9jay5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9pbWFnZS12aWV3ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvbWVzc2FnaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NlYXJjaC5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZXR0aW5ncy5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3Rlcm1pbmFsLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3RleHQtZWRpdG9yLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2FwcGljb24uanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NhcmQuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9kYXRhcGFuZS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZnJhbWUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCIvaG9tZS92ZXJ0ZXgvRG9jdW1lbnRzL2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21vZGFsd2luZG93LmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyLmpzIiwiL2hvbWUvdmVydGV4L0RvY3VtZW50cy9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdG9vbGJhci5qcyIsIi9ob21lL3ZlcnRleC9Eb2N1bWVudHMvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvdmVjdG9yZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFdEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRXBCLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxPQUFPLFNBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2RCxPQUFPLFVBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN6RCxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzdELE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvRCxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDekQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzdELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ3ZFLE9BQU8sT0FBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELE9BQU8sU0FBWSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3ZELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ3ZFLE9BQU8sUUFBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzs7Ozs7O0FDNUJ0RCxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDNUIsUUFBTztBQUNOLE1BQUksRUFBRSxXQUFXO0FBQ2pCLE1BQUksRUFBRSx3QkFBd0I7QUFDOUIsU0FBTyxFQUFFO0FBQ1IsaUJBQWMsRUFBRSxxQkFBVSxDQUFDLEVBQUUsRUFBRTtHQUMvQjtBQUNELFFBQU0sRUFBRTtBQUNQLFNBQU0sRUFBRTtBQUNQLFdBQU8sRUFBRSxDQUFDO0FBQ1YsVUFBTSxFQUFFO0FBQ1AsYUFBUSxFQUFFLEVBQUU7QUFDWixhQUFRLEVBQUUsRUFBRTtBQUNaLFNBQUksRUFBRSxFQUFFO0tBQ1I7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUUsRUFBRTtBQUNwQixNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixPQUFLLEVBQUUsZUFBVSxDQUFDLEVBQUUsRUFBRTtFQUN0QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7QUN2QkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzVCLFFBQU87QUFDTixNQUFJLEVBQUUsT0FBTztBQUNiLE1BQUksRUFBRSwyQkFBMkI7QUFDakMsU0FBTyxFQUFFO0FBQ1IsVUFBUyxlQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3hCLFVBQVMsZUFBVSxDQUFDLEVBQUUsRUFBRTtBQUN4QixVQUFTLGVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFDeEI7QUFDRCxRQUFNLEVBQUU7QUFDUCxXQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM1QixVQUFTO0FBQ1IsV0FBUyxDQUFDO0FBQ1YsYUFBVyxDQUFDO0FBQ1osUUFBTSxLQUFLO0lBQ1g7QUFDRCxVQUFTO0FBQ1IsY0FBWSxDQUFDO0FBQ2IsVUFBUSxZQUFZO0lBQ3BCO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFFbEI7QUFDRCxLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUUsRUFBRTtBQUNwQixNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixPQUFLLEVBQUUsZUFBVSxDQUFDLEVBQUUsRUFBRTtFQUN0QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7QUM1QkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzVCLFFBQU87QUFDTixNQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLE1BQUksRUFBRSwwQkFBMEI7QUFDaEMsU0FBTyxFQUFFO0FBQ1IsaUJBQWMsRUFBRSxxQkFBVSxDQUFDLEVBQUUsRUFBRTtHQUMvQjtBQUNELFFBQU0sRUFBRTtBQUNQLFlBQVMsRUFBRTtBQUNWLFdBQU8sRUFBRSxDQUFDO0FBQ1YsVUFBTSxFQUFFO0FBQ1AsYUFBUSxFQUFFLEVBQUU7QUFDWixhQUFRLEVBQUUsRUFBRTtBQUNaLFNBQUksRUFBRSxFQUFFO0tBQ1I7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUUsRUFBRTtBQUNwQixNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixPQUFLLEVBQUUsZUFBVSxDQUFDLEVBQUUsRUFBRTtFQUN0QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7QUN2QkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzVCLFFBQU87QUFDTixNQUFJLEVBQUUsY0FBYztBQUNwQixNQUFJLEVBQUUsMkJBQTJCO0FBQ2pDLFNBQU8sRUFBRTtBQUNSLGlCQUFjLEVBQUUscUJBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDL0I7QUFDRCxRQUFNLEVBQUU7QUFDUCxRQUFLLEVBQUU7QUFDTixXQUFPLEVBQUUsQ0FBQztBQUNWLFVBQU0sRUFBRTtBQUNQLGFBQVEsRUFBRSxFQUFFO0FBQ1osYUFBUSxFQUFFLEVBQUU7QUFDWixTQUFJLEVBQUUsRUFBRTtLQUNSO0FBQ0QsT0FBRyxFQUFFLEVBQUU7SUFDUDtHQUNEO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFLEVBRWxCO0FBQ0QsS0FBRyxFQUFFLGFBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDcEIsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDckIsT0FBSyxFQUFFLGVBQVUsQ0FBQyxFQUFFLEVBQUU7RUFDdEIsQ0FBQTtDQUNELENBQUM7Ozs7O0FDekJGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM1QixRQUFPO0FBQ04sTUFBSSxFQUFFLGNBQWM7QUFDcEIsTUFBSSxFQUFFLGdCQUFnQjtBQUN0QixTQUFPLEVBQUU7QUFDUixTQUFRLGNBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDdkIsYUFBWSxrQkFBVSxDQUFDLEVBQUUsRUFBRTtBQUMzQixVQUFTLGVBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDeEI7QUFDRCxRQUFNLEVBQUU7QUFDUCxRQUFLLEVBQUU7QUFDTixXQUFPLEVBQUUsQ0FBQztBQUNWLFVBQU0sRUFBRTtBQUNQLGFBQVEsRUFBRSxFQUFFO0FBQ1osYUFBUSxFQUFFLEVBQUUsRUFDWjtBQUNELE9BQUcsRUFBRSxFQUFFO0lBQ1A7R0FDRDtBQUNELE1BQUksRUFBRSxjQUFVLENBQUMsRUFBRSxFQUVsQjtBQUNELE9BQUssRUFBRSxlQUFVLENBQUMsRUFBRSxFQUFFO0VBQ3RCLENBQUM7Q0FDRixDQUFDOzs7OztBQ3hCRixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDNUIsUUFBTztBQUNOLE1BQUksRUFBRSxXQUFXO0FBQ2pCLE1BQUksRUFBRSx3QkFBd0I7QUFDOUIsU0FBTyxFQUFFO0FBQ1IsZ0JBQWEsRUFBRSxvQkFBVSxDQUFDLEVBQUUsRUFFM0I7QUFDRCxhQUFVLEVBQUUsaUJBQVUsQ0FBQyxFQUFFLEVBRXhCO0FBQ0QsV0FBVSxnQkFBVSxDQUFDLEVBQUUsRUFFdEI7QUFDRCxZQUFXLGlCQUFVLENBQUMsRUFBRSxFQUV2QjtHQUNEO0FBQ0QsUUFBTSxFQUFFO0FBQ1AsVUFBTyxFQUFFO0FBQ1IsV0FBTyxFQUFFLENBQUM7QUFDVixVQUFNLEVBQUU7QUFDUCxTQUFJLEVBQUUsRUFBRTtBQUNSLGFBQVEsRUFBRSxFQUFFO0FBQ1osVUFBSyxFQUFFLEVBQUU7QUFDVCxZQUFPLEVBQUUsRUFBRTtBQUNYLGFBQVEsRUFBRSxFQUFFO0FBQ1osZUFBVSxFQUFFLEVBQUU7QUFDZCxVQUFLLEVBQUUsRUFBRTtBQUNULFdBQU0sRUFBRSxFQUFFO0tBQ1Y7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0FBQ0QsV0FBUSxFQUFFO0FBQ1QsV0FBTyxFQUFFLENBQUM7QUFDVixVQUFNLEVBQUU7QUFDUCxVQUFLLEVBQUUsRUFBRTtBQUNULE9BQUUsRUFBRSxFQUFFO0FBQ04sU0FBSSxFQUFFLEVBQUU7QUFDUixZQUFPLEVBQUUsRUFBRTtBQUNYLFNBQUksRUFBRSxNQUFNO0tBQ1o7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0FBQ0QsUUFBSyxFQUFFO0FBQ04sV0FBTyxFQUFFLENBQUM7QUFDVixVQUFNLEVBQUU7QUFDUCxPQUFFLEVBQUUsRUFBRTtBQUNOLFNBQUksRUFBRSxFQUFFO0FBQ1IsU0FBSSxFQUFFLEVBQUU7QUFDUixZQUFPLEVBQUUsRUFBRTtBQUNYLFNBQUksRUFBRSxNQUFNO0tBQ1o7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFLbEI7QUFDRCxLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUUsRUFFakI7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixPQUFLLEVBQUUsZUFBVSxDQUFDLEVBQUUsRUFBRTtFQUN0QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7Ozs7OztBQ3BFRixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDNUIsUUFBTztBQUNOLE1BQUksRUFBRSxhQUFhO0FBQ25CLFNBQU8sRUFBRTtBQUNSLGlCQUFjLEVBQUUscUJBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDL0I7QUFDRCxRQUFNLEVBQUU7QUFDUCxhQUFVLEVBQUU7QUFDWCxXQUFPLEVBQUUsQ0FBQztBQUNWLFVBQU0sRUFBRTtBQUNQLFNBQUksRUFBRSxFQUFFO0FBQ1IsYUFBUSxFQUFFLEVBQUU7QUFDWixhQUFRLEVBQUUsRUFBRTtBQUNaLFNBQUksRUFBRSxFQUFFO0tBQ1I7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUUsRUFBRTtBQUNwQixNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUUsRUFBRTtBQUNyQixPQUFLLEVBQUUsZUFBVSxDQUFDLEVBQUUsRUFBRTtFQUN0QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7QUN2QkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzVCLFFBQU87QUFDTixNQUFJLEVBQUUsUUFBUTtBQUNkLE1BQUksRUFBRSwwQkFBMEI7QUFDaEMsU0FBTyxFQUFFO0FBQ1IsV0FBVSxnQkFBVSxDQUFDLEVBQUUsRUFBRTtHQUN6QjtBQUNELFFBQU0sRUFBRTtBQUNQLFNBQU0sRUFBRTtBQUNQLFdBQU8sRUFBRSxDQUFDO0FBQ1YsVUFBTSxFQUFFOztBQUVQLGFBQVEsRUFBRSxFQUFFO0FBQ1osYUFBUSxFQUFFLEVBQUU7QUFDWixTQUFJLEVBQUUsRUFBRTtLQUNSO0FBQ0QsT0FBRyxFQUFFLEVBQUU7SUFDUDtHQUNEO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDckIsT0FBSyxFQUFFLGVBQVUsQ0FBQyxFQUFFLEVBQUU7RUFDdEIsQ0FBQztDQUNGLENBQUM7Ozs7O0FDdEJGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM1QixRQUFPO0FBQ04sTUFBSSxFQUFFLFVBQVU7QUFDaEIsTUFBSSxFQUFFLDBCQUEwQjtBQUNoQyxTQUFPLEVBQUU7QUFDUixpQkFBYyxFQUFFLHFCQUFVLENBQUMsRUFBRSxFQUFFO0dBQy9CO0FBQ0QsUUFBTSxFQUFFO0FBQ1AsVUFBTyxFQUFFO0FBQ1IsV0FBTyxFQUFFLENBQUM7QUFDVixVQUFNLEVBQUU7QUFDUCxTQUFJLEVBQUUsRUFBRTtBQUNSLFVBQUssRUFBRSxFQUFFO0FBQ1QsU0FBSSxFQUFFLEVBQUU7S0FDUjtBQUNELE9BQUcsRUFBRSxFQUFFO0lBQ1A7R0FDRDtBQUNELE1BQUksRUFBRSxjQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3JCLE1BQUksRUFBRSxjQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3JCLE9BQUssRUFBRSxlQUFVLENBQUMsRUFBRSxFQUFFO0VBQ3RCLENBQUM7Q0FDRixDQUFDOzs7Ozs7Ozs7QUNsQkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzVCLFFBQU87QUFDTixNQUFJLEVBQUUsU0FBUztBQUNmLE1BQUksRUFBRSx5QkFBeUI7QUFDL0IsTUFBSSxFQUFFLElBQUk7QUFDVixNQUFJLEVBQUUsSUFBSTtBQUNWLFNBQU8sRUFBRSxJQUFJO0FBQ2IsU0FBTyxFQUFFO0FBQ1IsY0FBVyxFQUFFLGtCQUFVLENBQUMsRUFBRSxFQUFFO0FBQzVCLGlCQUFjLEVBQUUscUJBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDL0I7QUFDRCxRQUFNLEVBQUU7QUFDUCxRQUFLLEVBQUU7QUFDTixXQUFPLEVBQUUsQ0FBQztBQUNWLFVBQU0sRUFBRTtBQUNQLFNBQUksRUFBRSxFQUFFO0FBQ1IsYUFBUSxFQUFFLEVBQUU7QUFDWixlQUFRLEdBQUc7QUFDWCxjQUFTLEVBQUUsRUFBRTtBQUNiLFNBQUksRUFBRSxFQUFFO0tBQ1I7QUFDRCxPQUFHLEVBQUUsRUFBRTtJQUNQO0dBQ0Q7QUFDRCxNQUFJLEVBQUUsY0FBVSxDQUFDLEVBQUU7QUFDbEIsT0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO09BQzlCLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDL0IsU0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQ0QsUUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQzlCLFlBQVEsRUFBRSxFQUFFO0FBQ1osU0FBSyxFQUFFLEVBQUU7SUFDVCxDQUFDO09BQ0YsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO09BQ3ZDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztPQUMzQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7T0FDL0MsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO09BQzdDLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztPQUNoRCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7T0FDM0MsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO09BQzNDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztPQUMvQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7T0FDOUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO09BQ25ELFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztPQUMzQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7T0FDekMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO09BQzNDLElBQUksR0FBRyxJQUFJO09BQ1gsSUFBSSxHQUFHLElBQUk7T0FDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO09BQzFCLEtBQUssR0FBRyxJQUFJO09BQ1osSUFBSSxHQUFHLElBQUksQ0FBQztBQUNiLE9BQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDMUIsYUFBVyxPQUFPO0lBQ2xCLENBQUMsQ0FBQztBQUNILE9BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE9BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE9BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixnQkFBYSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDckMsT0FBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsT0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoQyxPQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2hDLFVBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTFCLGNBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLE9BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLE9BQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUIsU0FBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEMsU0FBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDekIsY0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxTQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxTQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQyxTQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN4QixjQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLE9BQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUIsVUFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFMUIsWUFBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDN0IsT0FBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsT0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixPQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLFVBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsaUJBQWMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQ3hDLE9BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLE9BQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakMsaUJBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLE9BQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakMsVUFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFHMUIsT0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNiLFFBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLFNBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxTQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzdCLFNBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDakMsaUJBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNyQyxhQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN6QyxhQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1QyxhQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQ2xELFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVDtBQUNELE9BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLFVBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsT0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFNUIsTUFBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLFdBQVcsRUFBRTtBQUMvRCxXQUFPLFVBQVUsUUFBUSxFQUFFO0FBQzFCLFNBQUksQ0FBQyxHQUFHLENBQUM7U0FDUixNQUFNLEdBQUcsSUFBSTtTQUNiLElBQUksR0FBRyxJQUFJLENBQUM7QUFDYixTQUFJLENBQUMsQ0FBRSxRQUFRLEVBQUU7QUFDaEIsWUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQyxhQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3pCLFdBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7QUFDakUsa0JBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxrQkFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLFFBQUMsRUFBRyxDQUFDO09BQ0w7TUFDRDtLQUNELENBQUM7SUFDSCxDQUFBLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFYixVQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM3QjtBQUNELFFBQU0sRUFBRSxnQkFBVSxDQUFDLEVBQUU7QUFDbkIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ25ELFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFCLFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUM1RDtBQUNELEtBQUcsRUFBRSxhQUFVLENBQUMsRUFBRTtBQUNqQixPQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztPQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO09BQzFCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztPQUMvQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3pELFFBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUM1QixTQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixTQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2QyxVQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsVUFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLE9BQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNkO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFO0FBQ2xCLE9BQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztPQUM3QixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO09BQ2xDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUTtPQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7T0FDdkIsV0FBVyxHQUFHLEtBQUssVUFBTztPQUMxQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUNuQixTQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLElBQUksRUFBRTtBQUNsRixXQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7R0FDSDtBQUNELFlBQVEsaUJBQVUsQ0FBQyxFQUFFO0FBQ3BCLE9BQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztPQUM3QixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO09BQ2xDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ25CLE1BQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzlCO0FBQ0QsT0FBSyxFQUFFLGVBQVUsQ0FBQyxFQUFFLEVBRW5CO0VBQ0QsQ0FBQztDQUNGLENBQUM7Ozs7O0FDeEtGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM1QixRQUFPO0FBQ04sTUFBSSxFQUFFLFVBQVU7QUFDaEIsTUFBSSxFQUFFLHdCQUF3QjtBQUM5QixTQUFPLEVBQUU7QUFDUixjQUFXLEVBQUUsa0JBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDNUI7QUFDRCxRQUFNLEVBQUU7QUFDUCxXQUFVLENBQUMsUUFBUSxDQUFDO0FBQ3BCLFdBQVU7QUFDVCxVQUFRLEVBQUU7SUFDVjtHQUNEO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFO0FBQ2xCLE9BQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUMvQixJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzFCLFdBQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDLENBQUM7QUFDSCxVQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BCO0FBQ0QsS0FBRyxFQUFFLGFBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDcEIsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDckIsT0FBSyxFQUFFLGVBQVUsQ0FBQyxFQUFFLEVBQUU7RUFDdEIsQ0FBQztDQUNGLENBQUM7Ozs7O0FDeEJGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM1QixRQUFPO0FBQ04sTUFBSSxFQUFFLGFBQWE7QUFDbkIsTUFBSSxFQUFFLHdCQUF3QjtBQUM5QixTQUFPLEVBQUU7QUFDUixpQkFBYyxFQUFFLHFCQUFVLENBQUMsRUFBRSxFQUFFO0dBQy9CO0FBQ0QsYUFBVyxFQUFFLENBQUM7QUFDZCxRQUFNLEVBQUU7QUFDUCxXQUFRLEVBQUU7QUFDVCxXQUFPLEVBQUUsQ0FBQztBQUNWLFVBQU0sRUFBRTtBQUNQLGFBQVEsRUFBRSxjQUFjO0FBQ3hCLGFBQVEsRUFBRSxFQUFFO0FBQ1osU0FBSSxFQUFFLEVBQUU7QUFDUixZQUFPLEVBQUUsRUFBRTtLQUNYO0FBQ0QsT0FBRyxFQUFFLEVBQUU7SUFDUDtHQUNEO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFO0FBQ2xCLE9BQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUM5QixPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQy9CLFNBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNELFFBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtBQUM5QixZQUFRLEVBQUUsRUFBRTtBQUNaLFNBQUssRUFBRSxFQUFFO0lBQ1QsQ0FBQztPQUNGLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7O0FBRXZDLE9BQUksR0FBRyxJQUFJO09BQ1gsSUFBSSxHQUFHLElBQUksQ0FBQzs7O0FBR2IsT0FBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLE9BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE9BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE9BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixPQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0FBRVgsVUFBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDN0I7QUFDRCxLQUFHLEVBQUUsYUFBVSxDQUFDLEVBQUU7QUFDakIsT0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87T0FDekIsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtPQUNoQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7T0FDckQsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztBQUNoRSxZQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixZQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM3QyxVQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsVUFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQzFDO0FBQ0QsTUFBSSxFQUFFLGNBQVUsQ0FBQyxFQUFFO0FBQ2xCLE9BQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtPQUNuQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsV0FBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLE9BQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFlBQVU7QUFBRSxRQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ2pFO0FBQ0QsT0FBSyxFQUFFLGVBQVUsQ0FBQyxFQUFFO0FBQ25CLE9BQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLGVBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsVUFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0dBQ3RDO0VBQ0QsQ0FBQztDQUNGLENBQUM7Ozs7O0FDakVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM1QixRQUFPO0FBQ04sTUFBSSxFQUFFLHVCQUF1QjtBQUM3QixNQUFJLEVBQUUsMEJBQTBCO0FBQ2hDLFNBQU8sRUFBRTtBQUNSLGlCQUFjLEVBQUUscUJBQVUsQ0FBQyxFQUFFLEVBQUU7R0FDL0I7QUFDRCxRQUFNLEVBQUU7QUFDUCxnQkFBYSxFQUFFO0FBQ2QsV0FBTyxFQUFFLENBQUM7QUFDVixVQUFNLEVBQUU7QUFDUCxTQUFJLEVBQUUsRUFBRTtBQUNSLFVBQUssRUFBRSxFQUFFO0FBQ1QsU0FBSSxFQUFFLEVBQUU7S0FDUjtBQUNELE9BQUcsRUFBRSxFQUFFO0lBQ1A7R0FDRDtBQUNELE1BQUksRUFBRSxjQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3JCLE1BQUksRUFBRSxjQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3JCLE9BQUssRUFBRSxlQUFVLENBQUMsRUFBRSxFQUFFO0VBQ3RCLENBQUM7Q0FDRixDQUFDOzs7OztBQ3RCRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDOUMsS0FBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDMUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtLQUN4QixjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEtBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNaLE1BQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNmLGlCQUFjLEdBQUcsS0FBSyxDQUFDO0dBQ3ZCLE1BQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ3RCLGlCQUFjLEdBQUcsT0FBTyxDQUFDO0dBQ3pCO0VBQ0Q7QUFDRCxRQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDOUQsUUFBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3RSxRQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN2RCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7QUFDN0MsS0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNoQyxTQUFNLEVBQUU7QUFDUCxRQUFJLEVBQUUsSUFBSTtJQUNWO0dBQ0QsQ0FBQyxDQUFDO0VBQ0gsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNULENBQUM7Ozs7Ozs7QUNwQkYsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRTlDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdkQsS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDcEMsQ0FBQyxHQUFHLElBQUk7S0FDUixFQUFFLEdBQUcsS0FBSztLQUNWLE9BQU8sR0FBRyxLQUFLO0tBQ2YsV0FBVyxHQUFHLElBQUk7S0FDbEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3JDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztLQUMzQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7S0FDdEMsZUFBZSxHQUFHO0FBQ2pCLE1BQUksRUFBRSxJQUFJO0FBQ1YsVUFBUSxFQUFFLFFBQVE7QUFDbEIsV0FBUyxFQUFFLEVBQUU7QUFDYixXQUFTLEVBQUUsS0FBSztFQUNoQixDQUFDO0FBQ0gsRUFBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEMsRUFBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsRUFBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRWxDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUV0QixVQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM3QyxVQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN6QyxVQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwQyxVQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ3BELE9BQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7QUFFdkIsT0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFHLFNBQU8sS0FBSyxDQUFDO0VBQ2IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFFBQU8sR0FBRyxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUQsS0FBSSxPQUFPLEVBQUU7QUFDWixNQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxNQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztBQUN0QyxPQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE9BQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsUUFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2QixPQUFJLEFBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBTSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEFBQUMsRUFBRTs7QUFDOUYsU0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQjtBQUNELFFBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLFFBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3hCLE1BQU07QUFDTixRQUFLLEdBQUcsUUFBUSxDQUFDO0dBQ2pCO0FBQ0QsR0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25FLEdBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0VBQ3RDLE1BQU07QUFDTixHQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLE1BQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztBQUM3QyxrQkFBZSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDakMsT0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsT0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUMvQyxTQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDbEMsZUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JCO0FBQ0QsV0FBTyxLQUFLLENBQUM7SUFDYixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1QsSUFBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7R0FDdkMsTUFBTTtBQUNOLE9BQUksQ0FBQyxXQUFXLEVBQUU7QUFDakIsUUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekMsUUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsUUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkMsUUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUMvQyxVQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsUUFBUSxFQUFFO0FBQzdFLFNBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUMxQixpQkFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQ2hDLGFBQVEsUUFBUTtPQUNoQixDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7QUFDSCxZQUFPLEtBQUssQ0FBQztLQUNiLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxLQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCO0dBQ0Q7RUFDRDs7QUFFRCxLQUFJLFdBQVcsRUFBRTtBQUNoQixNQUFJLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxHQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzFDLE9BQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsT0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNqQyxjQUFVLENBQUMsWUFBWTtBQUN0QixPQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQzlFLFVBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzlFLENBQUMsQ0FBQztBQUNILE1BQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQztLQUM3QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1I7R0FFRCxFQUFFLEtBQUssQ0FBQyxDQUFDOztBQUVWLE1BQUksT0FBTyxFQUFFO0FBQ1osSUFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDNUIsTUFBTTtBQUNOLE9BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQy9CO0VBQ0Q7QUFDRCxLQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO0FBQ2hDLEdBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDekI7O0FBRUQsTUFBSyxDQUFDLElBQUksT0FBTyxFQUFFO0FBQ2xCLEdBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCO0FBQ0QsUUFBTyxDQUFDLENBQUM7Q0FDVCxDQUFDOzs7OztBQ2xIRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRTtBQUM5QyxLQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztLQUN0QyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7S0FDbkMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDbkIsSUFBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7QUFFN0MsSUFBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLEtBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7QUFDOUIsS0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUN2RCxTQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUN2RSxNQUFJLENBQUMsU0FBUyxHQUFHLDJHQUEyRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsNkJBQTZCLENBQUM7RUFDaEw7QUFDRCxLQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUNsQyxTQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDOUQsTUFBSSxDQUFDLFNBQVMsR0FBRyx1R0FBdUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO0VBQ3hLO0FBQ0QsUUFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxRQUFRLEVBQUU7QUFDN0MsTUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsTUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxNQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsTUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkMsTUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMxRSxNQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzdDLFdBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDcEIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULE1BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0NBQ0gsQ0FBQzs7Ozs7QUM5QkQsU0FBUyxRQUFRLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDckMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNmLFFBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDLFdBQVcsR0FBRyxFQUFFO1FBQ2hCLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMxQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzVDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxTQUFTLEdBQUcsS0FBSztRQUNYLFNBQVMsR0FBRyxLQUFLO1FBQ2pCLGNBQWMsR0FBRyxLQUFLO1FBQzVCLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxNQUFNLEdBQUcsSUFBSTtRQUNiLFVBQVUsR0FBRyxJQUFJO1FBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDWixhQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxjQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxjQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxRQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwQyxRQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuQyxRQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuQyxRQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsU0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDckMsU0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckMsU0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsU0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsUUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7QUFFZixjQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQUFBQyxFQUFDLENBQUMsQ0FBQztBQUNyRyxjQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixpQkFBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDcEIsTUFBTTtBQUNULGdCQUFRLElBQUk7QUFDRixpQkFBSyxPQUFPO0FBQ1IseUJBQVMsR0FBRyxJQUFJLENBQUM7QUFDakIsOEJBQWMsR0FBRyxJQUFJLENBQUM7QUFDbEMsMEJBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDRDQUE0QyxDQUFDLENBQUM7QUFDL0UsMEJBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsc0JBQU07QUFBQSxBQUNmLGlCQUFLLE9BQU87QUFDQyw4QkFBYyxHQUFHLElBQUksQ0FBQztBQUNsQywwQkFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztBQUNoRiwwQkFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM1QyxzQkFBTTtBQUFBLEFBQ04saUJBQUssUUFBUTtBQUNULHNCQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxzQkFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsc0JBQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3hELDJCQUFXLEdBQUcsb0ZBQWdGLENBQUM7QUFDL0YseUJBQVMsR0FBRyxJQUFJLENBQUM7QUFDVCxzQkFBTTtBQUFBLEFBQ04saUJBQUssTUFBTTtBQUNQLDJCQUFXLEdBQUcsV0FBVyxDQUFDO0FBQzFCLHlCQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHNCQUFNO0FBQUEsQUFDTixpQkFBSyxNQUFNO0FBQ1AsMkJBQVcsR0FBRyxFQUFFLENBQUM7QUFDakIseUJBQVMsR0FBRyxJQUFJLENBQUM7QUFDakIsOEJBQWMsR0FBRyxJQUFJLENBQUM7QUFDbEMsb0JBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDakIsOEJBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHdCQUF3QixHQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFFLE1BQU07QUFDTiw4QkFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztpQkFDaEY7QUFDRCwwQkFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7QUFFNUMsc0JBQU07QUFBQSxTQUNUO0FBQ0QsYUFBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDcEMsWUFBSSxTQUFTLEVBQUU7QUFDZCxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtBQUNELFlBQUksT0FBTyxJQUFJLEFBQUMsSUFBRSxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxBQUFDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO0FBQ3pGLHFCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLHFCQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0FBQ0QsWUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBRSxJQUFJLFNBQU0sRUFBRTtBQUM1QixxQkFBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxHQUFDLElBQUksU0FBTSxDQUFDLENBQUM7U0FDeEQ7QUFDSyxZQUFJLENBQUMsQ0FBRSxNQUFNLEVBQUU7QUFDWCxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztBQUNELFlBQUksY0FBYyxFQUFFO0FBQ2hCLHFCQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLHNCQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUMzQjtBQUNELFlBQUksU0FBUyxFQUFFO0FBQ1gscUJBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDZCxxQkFBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNCO1NBQ0o7O0FBQUEsS0FFSjtBQUNELFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzFCLFFBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzFCLFFBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQzlCLENBQUM7O0FBRUYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUU7QUFDOUMsUUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsR0FBQyxTQUFTLENBQUMsQ0FBQztDQUM1RCxDQUFDOztBQUVGLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFlBQVk7QUFDbkMsUUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUs7UUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixRQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELFNBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLE9BQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDckIsQ0FBQzs7QUFFRixRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLElBQUksRUFBRTtBQUNoRCxRQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSztRQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFdBQU8sVUFBVSxHQUFHLEVBQUU7QUFDeEIsWUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFlBQUksSUFBSSxFQUFFO0FBQ1Qsb0JBQVEsSUFBSSxDQUFDLElBQUk7QUFDSixxQkFBSyxPQUFPO0FBQ1IsNEJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xFLDBCQUFNO0FBQUEsQUFDTixxQkFBSyxPQUFPO0FBQ1IsaUNBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QiwwQkFBTTtBQUFBLEFBQ04scUJBQUssUUFBUTtBQUNULCtCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsNkJBQVMsR0FBRyxJQUFJLENBQUM7QUFDTiwwQkFBTTtBQUFBLEFBQ04scUJBQUssTUFBTTtBQUNoQiw0QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekQsMEJBQU07QUFBQSxhQUNUO1NBQ1Y7QUFDRCxZQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2YsZ0JBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEQsaUJBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0FBQ0QsV0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQixDQUFDO0NBQ0wsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQzs7Ozs7QUNwSjFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUM5QyxLQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUN4QyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsS0FBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ25DLE1BQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3ZCLE1BQU07QUFDTixVQUFRLElBQUk7QUFDWixRQUFLLE1BQU07QUFDVixRQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQyxRQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO0FBQzVCLFNBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQzVDO0FBQ0QsVUFBTTtBQUFBLEFBQ1AsUUFBSyxZQUFZO0FBQ2hCLFFBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLFVBQU07QUFBQSxBQUNQLFFBQUssUUFBUTtBQUNaLFFBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLFVBQU07QUFBQSxBQUNQLFFBQUssT0FBTztBQUNYLFFBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLFVBQU07QUFBQSxHQUNOO0VBQ0Q7QUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUUxQixDQUFDO0FBQ0YsS0FBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBRXpCLENBQUM7Q0FDRixDQUFDOzs7OztBQ2pDRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDN0MsS0FBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7S0FDMUMsU0FBUyxHQUFHLEVBQUU7S0FDZCxRQUFRLEdBQUcsSUFBSTtLQUNmLElBQUksR0FBRyxJQUFJO0tBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNQLE1BQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLEtBQUksQ0FBQyxDQUFFLE9BQU8sRUFBRTs7QUFDWixNQUFJLENBQUMsQ0FBRSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ2hDLFlBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQ25DO0VBQ0E7QUFDSixLQUFJLEdBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsVUFBVSxBQUFDLENBQUM7QUFDcEMsU0FBUSxJQUFJO0FBQ1osT0FBSyxVQUFVO0FBQ2QsWUFBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkQsU0FBTTtBQUFBLEFBQ1AsT0FBSyxRQUFRO0FBQ1osWUFBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDOUIsU0FBTTtBQUFBLEVBQ047QUFDRCxRQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFOztBQUU1QixVQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLE1BQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxRQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELFFBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxRQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzVFLEdBQUMsVUFBVSxVQUFVLEVBQUUsY0FBYyxFQUFFO0FBQ3RDLFNBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDL0Msa0JBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNULENBQUEsQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkIsT0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQixHQUFDLElBQUksQ0FBQyxDQUFDO0VBQ1A7Q0FDRCxDQUFDOzs7OztBQ3ZDRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDcEQsS0FBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRCxRQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFNBQVEsSUFBSTtBQUNaLE9BQUssVUFBVTs7QUFFZCxTQUFNO0FBQUEsQUFDUCxPQUFLLFFBQVE7O0FBRVosU0FBTTtBQUFBLEVBQ047Q0FDRCxDQUFDOzs7OztBQ1pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNoRCxLQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztLQUMxQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDcEMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQ2pDLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLE1BQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDbkIsTUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLE1BQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLE9BQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDeEI7QUFDRCxHQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDN0IsR0FBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ2hDLE1BQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsTUFBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixNQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRCxTQUFRLElBQUk7QUFDWixPQUFLLFVBQVU7OztBQUdkLFNBQU07QUFBQSxBQUNQLE9BQUssUUFBUTtBQUNaLFVBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsV0FBVyxFQUFFO0FBQzVDLFNBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztBQUNILFNBQU07QUFBQSxFQUNOO0NBQ0QsQ0FBQzs7Ozs7QUM3QkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3BELEtBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsSUFBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM1QyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNuQixTQUFRLElBQUk7QUFDWixPQUFLLFVBQVU7QUFDZCxNQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDOUIsU0FBTTtBQUFBLEFBQ1AsT0FBSyxRQUFROztBQUVaLFNBQU07QUFBQSxFQUNOO0NBQ0QsQ0FBQzs7Ozs7QUNaRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDaEQsS0FBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxNQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQixTQUFRLElBQUk7QUFDWixPQUFLLFVBQVU7O0FBRWQsU0FBTTtBQUFBLEFBQ1AsT0FBSyxRQUFROztBQUVaLFNBQU07QUFBQSxFQUNOO0NBQ0QsQ0FBQzs7Ozs7QUNaRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUMvQyxLQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztLQUN0QyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7S0FDbkMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDbkIsSUFBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUM5QyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNqRCxJQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsS0FBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDbEMsU0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0VBQzlEO0FBQ0QsUUFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxRQUFRLEVBQUU7QUFDN0MsTUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsTUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDN0MsV0FBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1YsTUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7Q0FDSCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIG1haW4uanMgKi9cblxuIHdpbmRvdy5DYXJkID0gcmVxdWlyZShcIi4vdWkvY2FyZC5qc1wiKTtcbiB3aW5kb3cuTWVudSA9IHJlcXVpcmUoXCIuL3VpL21lbnUuanNcIik7XG4gd2luZG93LkRhdGFQYW5lID0gcmVxdWlyZShcIi4vdWkvZGF0YXBhbmUuanNcIik7XG4gd2luZG93LkNvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vdWkvY29udGV4dG1lbnUuanNcIik7XG4gd2luZG93LkFwcEljb24gPSByZXF1aXJlKFwiLi91aS9hcHBpY29uLmpzXCIpO1xuIHdpbmRvdy5GcmFtZSA9IHJlcXVpcmUoXCIuL3VpL2ZyYW1lLmpzXCIpO1xuIHdpbmRvdy5TaWRlYmFyID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhci5qc1wiKTtcbiB3aW5kb3cuU2lkZWJhckl0ZW0gPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyaXRlbS5qc1wiKTtcbiB3aW5kb3cuTW9kYWxXaW5kb3cgPSByZXF1aXJlKFwiLi91aS9tb2RhbHdpbmRvdy5qc1wiKTtcbiB3aW5kb3cuVG9vbGJhciA9IHJlcXVpcmUoXCIuL3VpL3Rvb2xiYXIuanNcIik7XG4gd2luZG93LlZlY3RvckVkaXRvciA9IHJlcXVpcmUoXCIuL3VpL3ZlY3RvcmVkaXRvci5qc1wiKTtcblxuIHdpbmRvdy5hcHBsZXRzID0gW107XG5cbiBhcHBsZXRzW1wiYWxhcm0tY2xvY2tcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2FsYXJtLWNsb2NrLmpzXCIpO1xuIGFwcGxldHNbXCJ0ZXJtaW5hbFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdGVybWluYWwuanNcIik7XG4gYXBwbGV0c1tcIm1lc3NhZ2luZ1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWVzc2FnaW5nLmpzXCIpO1xuIGFwcGxldHNbXCJpbWFnZS12aWV3ZXJcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2ltYWdlLXZpZXdlci5qc1wiKTtcbiBhcHBsZXRzW1widGV4dC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3RleHQtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJpbWFnZS1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2ltYWdlLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiM2QtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy8zZC1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcIm1pZGktZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9taWRpLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiYW5pbWF0aW9uLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYW5pbWF0aW9uLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wic2VhcmNoXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zZWFyY2guanNcIik7XG4gYXBwbGV0c1tcInNldHRpbmdzXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zZXR0aW5ncy5qc1wiKTtcbiBhcHBsZXRzW1widXNhZ2UtdmlzdWFsaXplclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdXNhZ2UtdmlzdWFsaXplci5qc1wiKTtcbiBhcHBsZXRzW1wic2hhcmluZ1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2hhcmluZy5qc1wiKTtcblxuLy90ZXN0IHR0ZXN0XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCIzRCBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY3ViZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0b2JqZWN0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJDbG9ja1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jbG9jay0yLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiQ2xvY2tcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJBbGFybVwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlRpbWVyXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHR9LFxuXHRcdHNjaGVtYToge1xuXHRcdFx0XCJtb2RlbHNcIjogW1wiQWxhcm1cIiwgXCJUaW1lclwiXSxcblx0XHRcdFwiQWxhcm1cIjoge1xuXHRcdFx0XHRcImhvdXJzXCI6IDAsXG5cdFx0XHRcdFwibWludXRlc1wiOiAwLFxuXHRcdFx0XHRcInBtXCI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XCJUaW1lclwiOiB7XG5cdFx0XHRcdFwiZHVyYXRpb25cIjogMCxcblx0XHRcdFx0XCJkYXRlXCI6IFwiMjAxNS0wOC0wOFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiQW5pbWF0aW9uIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2ltYWdlLTIucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiSW1hZ2UgVmlld2VyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV4dFwiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIlByZXZpb3VzXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJNZXNzYWdpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2hhdC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIk5ldyBNZXNzYWdlXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk5ldyBDaGF0XCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0XHR9LFxuXHRcdFx0XCJPcHRpb25zXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0Y29udGFjdDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdHR3aXR0ZXI6IFwiXCIsXG5cdFx0XHRcdFx0ZmFjZWJvb2s6IFwiXCIsXG5cdFx0XHRcdFx0c291bmRjbG91ZDogXCJcIixcblx0XHRcdFx0XHRnbWFpbDogXCJcIixcblx0XHRcdFx0XHRnaXRodWI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHRpdGxlOiBcIlwiLFxuXHRcdFx0XHRcdHRvOiBcIlwiLFxuXHRcdFx0XHRcdGZyb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0Y2hhdHM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRyb29tOiBcIlwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdC8vIGNvbm5lY3Qgc29ja2V0IHRvIGFwcCBpZiBub3QgY29ubmVjdGVkLi4uXG5cdFx0XHQvLyBzZW5kIHdlbGNvbWUgbWVzc2FnZVxuXHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYnV0dG9uXG5cdFx0XHQvLyBhZGQgc29ja2V0IGV2ZW50IGxpc3RlbmVyIGZvciBjaGF0IG1lc3NhZ2Vcblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHtcblxuXHRcdH0sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIk1JREkgRWRpdG9yXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGFycmFuZ21lbnQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0ZGF0YTogXCJcIixcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiU2VhcmNoXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNlYXJjaFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0cmVzdWx0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiU2V0dGluZ3NcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRzZXR0aW5nOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCIvL3ZhciBGcmFtZSA9IHJlcXVpcmUoXCIuLi91aS9mcmFtZS5qc1wiKSxcbi8vXHRNZW51ID0gcmVxdWlyZShcIi4uL3VpL21lbnUuanNcIiksXG4vL1x0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi91aS9zaWRlYmFyLmpzXCIpO1xuLy8gdGVzdCAyZmdyZlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTaGFyaW5nXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3NoYXJlLnBuZ1wiLFxuXHRcdHZpZXc6IG51bGwsXG5cdFx0bWVudTogbnVsbCxcblx0XHRzaWRlYmFyOiBudWxsLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV3IFNoYXJlXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiTmV3IFNob3J0Y3V0XCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRzaGFyZToge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHB1YmxpYzogXCIxXCIsXG5cdFx0XHRcdFx0d2hpdGVsaXN0OiBcIlwiLFxuXHRcdFx0XHRcdGRhdGE6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcblx0XHRcdFx0c2lkZWJhciA9IG5ldyBTaWRlYmFyKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG5cdFx0XHRcdFx0c3VidGl0bGU6IFwiXCIsXG5cdFx0XHRcdFx0aXRlbXM6IFtdXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdFx0bmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRyZXNvdXJjZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRwdWJsaWNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0d2hpdGVMaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdGRhdGFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0bmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHRyZXNvdXJjZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHRwdWJsaWNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG5cdFx0XHRcdHdoaXRlTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdFx0XHRkYXRhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksXG5cdFx0XHRcdGRvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0dmlldyA9IG51bGwsXG5cdFx0XHRcdHNwYW4gPSBudWxsLFxuXHRcdFx0XHRzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBudWxsLFxuXHRcdFx0XHRzZWxmID0gdGhpcztcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcImVsZW1lbnRcIjogZWxlbWVudFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNpZGViYXIgPSBzaWRlYmFyO1xuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cblx0XHRcdHJlc291cmNlTGFiZWwuaW5uZXJIVE1MID0gXCJSZXNvdXJjZVwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChyZXNvdXJjZUxhYmVsKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocmVzb3VyY2VJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdFx0XHRwdWJsaWNMYWJlbC5pbm5lckhUTUwgPSBcIlB1YmxpY1wiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNMYWJlbCk7XG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIxXCIpO1xuXHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IFwiWWVzXCI7XG5cdFx0XHRwdWJsaWNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjBcIik7XG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJOb1wiO1xuXHRcdFx0cHVibGljSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocHVibGljSW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuXHRcdFx0ZGF0YUxhYmVsLmlubmVySFRNTCA9IFwiRGF0YVwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhTGFiZWwpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhSW5wdXQpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdHdoaXRlTGlzdExhYmVsLmlubmVySFRNTCA9IFwiV2hpdGUgTGlzdFwiO1xuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZCh3aGl0ZUxpc3RMYWJlbCk7XG5cdFx0XHR3aGl0ZUxpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsXCIpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZCh3aGl0ZUxpc3RJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cblx0XHRcdGlmICghIXAub3Blbikge1xuXHRcdFx0XHR0aGlzLmFkZCgpO1xuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdO1xuXHRcdFx0XHRzaGFyZS5uYW1lID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0XHRzaGFyZS5yZXNvdXJjZSA9IHAub3Blbi5yZXNvdXJjZTtcblx0XHRcdFx0cmVzb3VyY2VJbnB1dC52YWx1ZSA9IHNoYXJlLnJlc291cmNlO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU2hhcmUgRm9sZGVyXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZVwiKTtcblx0XHRcdFx0ZG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0c2VsZi5zYXZlKCk7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQoZG9uZUlucHV0KTtcblxuXHRcdFx0YXBwLnNoYXJpbmcubGlzdEFsbFNoYXJlcyhhcHAudXNlci5uYW1lLCAoZnVuY3Rpb24gKHNpZGViYXJMaXN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0dmFyIHMgPSAwLFxuXHRcdFx0XHRcdFx0XHRzaGFyZXMgPSBudWxsLFxuXHRcdFx0XHRcdFx0XHRpdGVtID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICghISByZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRzaGFyZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJpbml0IGFwcCBnZXQgc2hhcmVzXCIsIHNoYXJlcyk7XG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzIDwgc2hhcmVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlc1tzXS5kaXJlY3Rvcnl9KTtcblx0XHRcdFx0XHRcdFx0XHRzaWRlYmFyTGlzdC5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3QuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdHMgKys7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0fSkoc2lkZWJhcikpO1xuXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZSBpbnB1dHMuLi4gbmVlZCB0byBpbXBsZW1lbnRcIik7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNpZGViYXIpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxuXHRcdFx0XHRzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBPYmplY3QuY3JlYXRlKHRoaXMubW9kZWxzLnNoYXJlLnNjaGVtYSksXG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlLm5hbWV9KTtcblx0XHRcdHNoYXJlLnJlc291cmNlID0gc2hhcmUubmFtZTtcblx0XHRcdHNoYXJlcy5hbGwucHVzaChzaGFyZSk7XG5cdFx0XHRzaGFyZXMuY3VycmVudCA9IHNoYXJlcy5hbGwubGVuZ3RoIC0gMTtcblx0XHRcdHNpZGViYXIub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcblx0XHRcdFx0c2hhcmUgPSBzaGFyZXMuYWxsW3NoYXJlcy5jdXJyZW50XSxcblx0XHRcdFx0cGF0aCA9IHNoYXJlLnJlc291cmNlLFxuXHRcdFx0XHR1c2VycyA9IHNoYXJlLndoaXRlbGlzdCxcblx0XHRcdFx0cHVibGljU2hhcmUgPSBzaGFyZS5wdWJsaWMsXG5cdFx0XHRcdGRhdGEgPSBzaGFyZS5kYXRhO1xuXHRcdFx0d2luZG93LmFwcC5zaGFyaW5nLnNhdmVTaGFyZShwYXRoLCBwYXRoLCB1c2VycywgcHVibGljU2hhcmUsIGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic2F2ZVNoYXJlLi4uIFwiLCByZXNwKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZGVsZXRlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxuXHRcdFx0XHRwYXRoID0gc2hhcmUucGF0aDtcblx0XHRcdGFwcC5zaGFyaW5nLmRlbGV0ZVNoYXJlKHBhdGgpO1xuXHRcdH0sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7IC8vIHN1cHBvcnQgYWxnZWJyYSBhcyB3ZWxsIGFzICpuaXggY29tbWFuZHNcblx0XHRuYW1lOiBcIlRlcm1pbmFsXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIER1bXBcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRzY2hlbWE6IHtcblx0XHRcdFwibW9kZWxzXCI6IFtcIk91dHB1dFwiXSxcblx0XHRcdFwiT3V0cHV0XCI6IHtcblx0XHRcdFx0XCJkYXRhXCI6IFwiXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwiY3VzdG9tXCIsIHtcblx0XHRcdFx0ZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gW3ZpZXcsIG1lbnVdO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlRleHQgRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRzYXZlVGltZW91dDogMCxcblx0XHRtb2RlbHM6IHtcblx0XHRcdGRvY3VtZW50OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIk5ldyBEb2N1bWVudFwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHQvL3RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGw7XG5cdFx0XHQvL2VsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpbDtcblxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcInRleHRcIik7XG5cdFx0XHR0aGlzLnNpZGViYXIgPSBzaWRlYmFyO1xuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cblx0XHRcdHRoaXMuYWRkKCk7XG5cblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2lkZWJhciA9IHRoaXMuc2lkZWJhcixcblx0XHRcdFx0ZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdGRvY3VtZW50ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLm1vZGVscy5kb2N1bWVudC5zY2hlbWEpLFxuXHRcdFx0XHRpdGVtID0gbmV3IFNpZGViYXJJdGVtKFwic3RhbmRhcmRcIiwge3RpdGxlOiBkb2N1bWVudC5yZXNvdXJjZX0pO1xuXHRcdFx0ZG9jdW1lbnRzLmFsbC5wdXNoKGRvY3VtZW50KTtcblx0XHRcdGRvY3VtZW50cy5jdXJyZW50ID0gZG9jdW1lbnRzLmFsbC5sZW5ndGggLSAxO1xuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRzaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0XHR9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXG5cdFx0XHRcdGRvYyA9IGRvY3VtZW50cy5hbGxbZG9jdW1lbnRzLmN1cnJlbnRdO1xuXHRcdFx0c2F2ZVRleHQoZG9jLnJlc291cmNlLCBkb2MuY29udGVudCk7XG5cdFx0XHR0aGlzLnNhdmVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpeyB0aGlzLnNhdmUoKTsgfSwgNjAwMDApO1xuXHRcdH0sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR0aGlzLnNhdmUoKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNhdmVUaW1lb3V0KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYWN0dWFsbHkgY2xvc2luZyBub3cuLlwiKTtcblx0XHR9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJEaXNrIFVzYWdlIFZpc3VhbGl6ZXJcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHR2aXN1YWxpemF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcEljb24obmFtZSwgaW5kZXgpIHtcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGFwcGxldCA9IGFwcGxldHNbbmFtZV0oKSxcblx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiXCI7XG5cdGlmICghIWluZGV4KSB7XG5cdFx0aWYgKGluZGV4ID09IDEpIHtcblx0XHRcdGRpcmVjdGlvbkNsYXNzID0gXCIgdXBcIjtcblx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcblx0XHRcdGRpcmVjdGlvbkNsYXNzID0gXCIgZG93blwiO1xuXHRcdH1cblx0fVxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQXBwLUljb25cIiArIGRpcmVjdGlvbkNsYXNzKTtcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGFwcGxldC5pY29uICsgXCIpO1wiKTtcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgYXBwbGV0Lm5hbWUgKyBcIjwvc3Bhbj5cIjtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5vcGVuUGFuZShcImFwcFwiLCBhcHBsZXQubmFtZSwge1xuXHRcdFx0YXBwbGV0OiB7XG5cdFx0XHRcdG5hbWU6IG5hbWVcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgdHJ1ZSk7XG59O1xuIiwiLyogQ2FyZC5qcyAqL1xuXG52YXIgQ29udGV4dE1lbnUgPSByZXF1aXJlKFwiLi9jb250ZXh0bWVudS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDYXJkKG5hbWUsIHJlc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRpID0gbnVsbCxcblx0XHR1cCA9IGZhbHNlLFxuXHRcdGlzSW1hZ2UgPSBmYWxzZSxcblx0XHRjb250ZXh0TWVudSA9IHRydWUsXG5cdFx0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxuXHRcdGNvbmZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGNvbnRleHRNZW51RGF0YSA9IHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRyZXNvdXJjZTogcmVzb3VyY2UsXG5cdFx0XHRtZW51SXRlbXM6IFtdLCAvLyBkdW1teSBtZW51IGl0ZW1zXG5cdFx0XHRkaXJlY3Rvcnk6IGZhbHNlXG5cdFx0fTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmRcIik7XG5cdGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXNvdXJjZVwiLCByZXNvdXJjZSk7XG5cdGUuc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIG5hbWUpO1xuXHQvL2xpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRsaW5rLmlubmVySFRNTCA9IG5hbWU7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHJlc291cmNlKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29uZmlndXJlXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuXHRjb25maWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9kZWxldGVQYXRoKGFwcC5jd2QrXCIvXCIrbmFtZSk7XG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5VSS1Db250ZXh0LU1lbnVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmUgVUktQ29udGV4dC1NZW51XCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSwgdHJ1ZSk7XG5cdGlzSW1hZ2UgPSAvKFxcLmpwZ3xcXC5wbmd8XFwuZ2lmfFxcLmpwZWd8XFwud2VicCkvaS50ZXN0KHJlc291cmNlKTtcblx0aWYgKGlzSW1hZ2UpIHtcblx0XHR2YXIgdGh1bWIgPSByZXNvdXJjZS5yZXBsYWNlKC9cXHMvZywgXCIlMjBcIik7XG5cdFx0aWYgKCEvKFxcLndlYnB8XFwuZ2lmKS9pLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRvbid0IHRodW1ibmFpbCB3ZWJwIG9yIGdpZlxuXHRcdFx0dmFyIHJQYXRoID0gdGh1bWIuc3BsaXQoXCIvXCIpO1xuXHRcdFx0dmFyIHRodW1iID0gclBhdGhbclBhdGgubGVuZ3RoIC0gMV07XG5cdFx0XHRyUGF0aC5zcGxpY2UoclBhdGgubGVuZ3RoIC0gMSwgMSk7XG5cdFx0XHRyUGF0aC5wdXNoKFwiREhUaHVtYnNcIik7XG5cdFx0XHRpZiAoKHdpbmRvdy5pbm5lcldpZHRoIDwgNjQxICYmIGFwcC50aHVtYlNpemUpIHx8ICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY0MCAmJiAhYXBwLnRodW1iU2l6ZSkpIHsgLy8gdXNlIGhpLWRwaSB0aHVtYm5haWxzIGJ5IGRlZmF1bHRcblx0XHRcdFx0clBhdGgucHVzaChcIjEwMjRcIik7XG5cdFx0XHR9XG5cdFx0XHRyUGF0aC5wdXNoKHRodW1iICsgXCIuanBnXCIpO1xuXHRcdFx0dGh1bWIgPSByUGF0aC5qb2luKFwiL1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGh1bWIgPSByZXNvdXJjZTtcblx0XHR9XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgKyB0aHVtYiArIFwiJyk7XCIpOyAvL3Jlc291cmNlK1wiJyk7XCIpO1xuXHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEltYWdlXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGUuYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0aWYgKC9eKC4qXFwvKXswLDF9W15cXC5dKi57MX0kLy50ZXN0KHJlc291cmNlKSkgeyAvLyBkZXRlY3QgZm9sZGVyc1xuXHRcdFx0Y29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSA9IHRydWU7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgIT0gXCJMSVwiKSB7XG5cdFx0XHRcdFx0b3BlbkZvbGRlcihyZXNvdXJjZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBGb2xkZXJcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghY29udGV4dE1lbnUpIHtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlIGVkaXRcIik7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkVkaXRcIik7XG5cdFx0XHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YXBwLnJlcXVlc3QoXCJHRVRcIiwgcmVzb3VyY2UgKyBcIj9jYWNoZT1cIiArIERhdGUubm93KCksIFwiXCIsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0YXBwLm9wZW5QYW5lKCdlZGl0JywgbmFtZSwge1xuXHRcdFx0XHRcdFx0XHRcInJlc291cmNlXCI6IGFwcC5jd2QgKyBcIi9cIiArIG5hbWUsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiByZXNwb25zZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdFx0ZS5hcHBlbmRDaGlsZChlZGl0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9cdEV4cGVyaW1lbnRhbC4uXG5cdGlmIChjb250ZXh0TWVudSkge1xuXHRcdHZhciBtZW51ID0gbmV3IENvbnRleHRNZW51KGNvbnRleHRNZW51RGF0YSk7XG5cdFx0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIHN0eWxlID0gZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcblx0XHRcdGlmIChzdHlsZS5zZWFyY2goXCJzaG93TWVudVwiKSA8IDApIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0W10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd01lbnVcIiksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpdGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnJlcGxhY2UoXCJzaG93TWVudVwiLFwiXCIpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0eWxlICsgXCIgc2hvd01lbnVcIik7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRpZiAoaXNJbWFnZSkge1xuXHRcdFx0ZS5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsaW5rLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cdGlmICghIWNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkpIHtcblx0XHRlLmFwcGVuZENoaWxkKGNvbmZpZ3VyZSk7XG5cdH1cblxuXHRmb3IgKGkgaW4gb3B0aW9ucykge1xuXHRcdGUuc2V0QXR0cmlidXRlKGksIG9wdGlvbnNbaV0pO1xuXHR9XG5cdHJldHVybiBlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ29udGV4dE1lbnUob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQ29udGV4dC1NZW51XCIpO1xuXG5cdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0aWYgKG9wdGlvbnMuZGlyZWN0b3J5ID09IHRydWUpIHtcblx0XHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEaXJlY3RvcnkgVUktQ29udGV4dC1NZW51XCIpO1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5kaXJlY3RvcnlNZW51SXRlbXM7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBcIjxhIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL29wZW4ucG5nKTsnIGhyZWY9J2phdmFzY3JpcHQ6b3BlbkZvbGRlcihcXFwiXCIgKyBvcHRpb25zLnJlc291cmNlICsgXCJcXFwiKTsnIHRpdGxlPSdPcGVuJz5PcGVuPC9hPlwiO1xuXHR9XG5cdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5tZW51SXRlbXM7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBcIjxhIHRhcmdldD0nX2JsYW5rJyBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9kb3dubG9hZC5wbmcpOycgaHJlZj0nXCIgKyBvcHRpb25zLnJlc291cmNlICsgXCInIHRpdGxlPSdPcGVuJz5PcGVuPC9hPlwiO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIG9wdGlvbnMucmVzb3VyY2UpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIG9wdGlvbnMubmFtZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImljb25cIik7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgbWVudUl0ZW0uaWNvbiArIFwiKVwiKTtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRtZW51SXRlbS5jbGljayhldnQpO1xuXHRcdH0sIHRydWUpO1xuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdH0pO1xufTtcbiIsIiBmdW5jdGlvbiBEYXRhUGFuZSAodHlwZSwgbmFtZSwgZGF0YSkge1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlwiLFxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHR0aXRsZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdHNob3dUaXRsZSA9IGZhbHNlLFxuICAgICAgICBzaG93RW50cnkgPSBmYWxzZSxcbiAgICAgICAgc2hvd1RpdGxlRW50cnkgPSBmYWxzZSxcblx0XHRjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgdXBsb2FkID0gbnVsbCxcbiAgICAgICAgZWRpdFdpZGdldCA9IG51bGwsXG5cdFx0YXBwbGV0ID0gbnVsbDtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZVwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnlcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRvbmVcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpO1xuXHRkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKHRydWUpLCB0cnVlKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJYXCIpO1xuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCgpLCB0cnVlKTtcbiAgICBpZiAoISFkYXRhLmFwcGxldCkge1xuICAgICAgICAvLyBsb2FkIGFwcGxldCBmb3JtIGRhdGEuYXBwbGV0XG4gICAgICAgIGFwcGxldCA9IG5ldyBBcHBsZXQoZGF0YS5hcHBsZXQubmFtZSwge29wZW46ICghISBkYXRhLmFwcGxldC5vcGVuID8gZGF0YS5hcHBsZXQub3BlbiA6IG51bGwpfSk7XG5cdFx0YXBwbGV0LmRhdGFQYW5lID0gdGhpczsgLy8gd29uJ3QgYmUgbmVlZGVkIG9uY2UgRGF0YVBhbmUgaXMgZGVwcmVjYXRlZFxuXHRcdHRoaXMuYXBwbGV0ID0gYXBwbGV0O1xuXHRcdGNvbnRhaW5lciA9IGFwcGxldC5kaXY7XG4gICAgfSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90b3VjaC5wbmcpXCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cdFx0XHRjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL21rZGlyLnBuZyk7XCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgdXBsb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJtdWx0aXBsZVwiKTtcblx0XHRcdFx0dGl0bGVTdHJpbmcgPSAnPGltZyBzcmM9XCIvYXBwL2RhdGEvdXBsb2FkLnBuZ1wiIHRpdGxlPVwiVXBsb2FkIEZpbGVzXCI+PHNwYW4+VXBsb2FkIEZpbGVzPC9zcGFuPic7XG5cdFx0XHRcdHNob3dUaXRsZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlZpZXcgRmlsZVwiO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCEhIGRhdGEuaWNvbikge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrZGF0YS5pY29uK1wiKTtcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdGV4dDIucG5nKTtcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVTdHJpbmc7XG5cdFx0aWYgKHNob3dUaXRsZSkge1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZihkYXRhKT09J3VuZGVmaW5lZCcgfHwgdHlwZW9mKGRhdGEuY29udHJvbHMpID09ICd1bmRlZmluZWQnIHx8IGRhdGEuY29udHJvbHMgPT0gdHJ1ZSkge1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKTtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXHRcdH1cblx0XHRpZiAoISFkYXRhICYmICEhIGRhdGEuY2xhc3MpIHtcblx0XHRcdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RhdGEuY2xhc3MpO1xuXHRcdH1cbiAgICAgICAgaWYgKCEhIHVwbG9hZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVwbG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dUaXRsZUVudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbnRyeSk7XG4gICAgICAgICAgICB0aXRsZUVudHJ5LnZhbHVlID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0VudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgaWYgKCEhIGRhdGEudGV4dCkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnZhbHVlID0gZGF0YS50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZWQgdG8gYWRkIFwiZG9uZVwiIGJ1dHRvbiBoZXJlXG4gICAgfVxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXHR0aGlzLmRvbmUgPSBkb25lO1xuXHR0aGlzLmVudHJ5ID0gZW50cnk7XG5cdHRoaXMucGFuZVRpdGxlID0gdGl0bGU7XG5cdHRoaXMudGl0bGVFbnRyeSA9IHRpdGxlRW50cnk7XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IHVwbG9hZDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5zbmFwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuXHR0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RpcmVjdGlvbik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICBwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcbiAgICBwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuZ2V0Q2xvc2VNZXRob2QgPSBmdW5jdGlvbiAoc2F2ZSkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHR2YXIgbGVhdmVPcGVuID0gZmFsc2U7XG5cdFx0aWYgKHNhdmUpIHtcblx0XHRcdHN3aXRjaCAocGFuZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNhdmVUZXh0KGFwcC5jd2QrXCIvXCIrcGFuZS50aXRsZUVudHJ5LnZhbHVlLCBwYW5lLmVudHJ5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICAgICAgbWFrZURpcmVjdG9yeShwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZEZpbGVzKHBhbmUpO1xuXHRcdFx0XHRcdGxlYXZlT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgXHRcdFx0c2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0XHRpZiAoIWxlYXZlT3Blbikge1xuXHRcdFx0cGFuZS5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lLmNvbnRhaW5lcik7XG5cdFx0XHRwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdFx0fVxuXHRcdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVBhbmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZyYW1lKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSxcblx0XHR2aWV3ID0gbnVsbDtcblx0bWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUZyYW1lXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBtYWluO1xuXHRpZiAoISFvcHRpb25zICYmICEhb3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0dmlldyA9IG9wdGlvbnMuZWxlbWVudDtcblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlIFwidGV4dFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk2MCkge1xuXHRcdFx0XHR2aWV3LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjczNXB4O1wiKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjb2RlbWlycm9yXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNhbnZhc1wiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwid2ViZ2xcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdG1haW4uYXBwZW5kQ2hpbGQodmlldyk7XG5cdHRoaXMuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTWVudSh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKSxcblx0XHRtZW51SXRlbXMgPSBbXSxcblx0XHRtZW51SXRlbSA9IG51bGwsXG5cdFx0bWVudSA9IHRoaXMsXG5cdFx0bSA9IDA7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudVwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMuYXBwbGV0ID0gbnVsbDtcbiAgICBpZiAoISEgb3B0aW9ucykgeyAvLyBtYWtlIHN1cmUgb3B0aW9ucyBhcmUgZGVmaW5lZFxuICAgICAgICBpZiAoISEgb3B0aW9ucy50aXRsZUJ1dHRvbikge1xuXHRcdCAgbWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XG5cdCAgIH1cbiAgICB9XG5cdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblx0XHRtZW51SXRlbXMgPSBtZW51SXRlbXMuY29uY2F0KFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucyk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcblx0XHRicmVhaztcblx0fVxuXHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcblx0XHQvLyBjcmVhdGUgbWVudSBmb3IgYXBwXG5cdFx0bWVudUl0ZW0gPSBtZW51SXRlbXNbbV07XG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1lbnUtQnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiamF2YXNjcmlwdDp2b2lkKDApO1wiKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdChmdW5jdGlvbiAoYnV0dG9uTWVudSwgYnV0dG9uTWVudUl0ZW0pIHtcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRidXR0b25NZW51SXRlbS5jbGljayhidXR0b25NZW51KTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChidXR0b24pO1xuXHRcdG0gKz0gMTtcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTW9kYWxXaW5kb3codHlwZSwgb3B0aW9ucykge1xuXHR2YXIgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRzZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTW9kYWxXaW5kb3dcIik7XG5cdHRoaXMuZWxlbWVudCA9IHNlY3Rpb247XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gU2lkZWJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKSxcblx0XHRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcblx0XHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0aWYgKCEhb3B0aW9ucy5pY29uKSB7XG5cdFx0aWNvbi5zcmMgPSBvcHRpb25zLmljb247XG5cdFx0aWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImljb25cIik7XG5cdFx0YXNpZGUuYXBwZW5kQ2hpbGQoaWNvbik7XG5cdH1cblx0aDIuaW5uZXJIVE1MID0gb3B0aW9ucy50aXRsZTtcblx0aDMuaW5uZXJIVE1MID0gb3B0aW9ucy5zdWJ0aXRsZTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoaDIpO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMyk7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblx0XHQvLyBzdGFuZGFyZCBmZWF0dXJlc1xuXHRcdC8vIG1pZ2h0IHdhbnQgYSBtb2RlIHdoZXJlIGl0IGVuaGFuY2VzIC8gbWVyZ2VzIHdpdGggdGhlIG1lbnVcblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXHRcdG9wdGlvbnMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoc2lkZWJhckl0ZW0pIHtcblx0XHRcdGFzaWRlLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtLmVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFySXRlbSh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0ZGl2LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb29sYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVRvb2xiYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZlY3RvckVkaXRvcihvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1WZWN0b3ItRWRpdG9yXCIpO1xuXHRpdGVtLmlubmVySFRNTCA9IFwiPGgyPlwiICsgb3B0aW9ucy5uYW1lICsgXCI8L2gyPlwiO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5tZW51SXRlbXM7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRtZW51SXRlbS5jbGljayhldnQpO1xuXHRcdH0sIGZhbHNlKTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHR9KTtcbn07XG4iXX0=
