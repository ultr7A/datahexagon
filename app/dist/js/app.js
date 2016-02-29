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
					resource: "",
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
			    item = new SidebarItem("standard", { title: document.name });
			document.resource = document.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvYWxhcm0tY2xvY2suanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2FuaW1hdGlvbi1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9tZXNzYWdpbmcuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZWFyY2guanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NldHRpbmdzLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy90ZXJtaW5hbC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvdGV4dC1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksR0FBRyxP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QVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztFQUM5RDtBQUNELFFBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsUUFBUSxFQUFFO0FBQzdDLE1BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLE1BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMvQixNQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzdDLFdBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDcEIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNWLE1BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBtYWluLmpzICovXG5cbiB3aW5kb3cuQ2FyZCA9IHJlcXVpcmUoXCIuL3VpL2NhcmQuanNcIik7XG4gd2luZG93Lk1lbnUgPSByZXF1aXJlKFwiLi91aS9tZW51LmpzXCIpO1xuIHdpbmRvdy5EYXRhUGFuZSA9IHJlcXVpcmUoXCIuL3VpL2RhdGFwYW5lLmpzXCIpO1xuIHdpbmRvdy5Db250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL3VpL2NvbnRleHRtZW51LmpzXCIpO1xuIHdpbmRvdy5BcHBJY29uID0gcmVxdWlyZShcIi4vdWkvYXBwaWNvbi5qc1wiKTtcbiB3aW5kb3cuRnJhbWUgPSByZXF1aXJlKFwiLi91aS9mcmFtZS5qc1wiKTtcbiB3aW5kb3cuU2lkZWJhciA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXIuanNcIik7XG4gd2luZG93LlNpZGViYXJJdGVtID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhcml0ZW0uanNcIik7XG4gd2luZG93Lk1vZGFsV2luZG93ID0gcmVxdWlyZShcIi4vdWkvbW9kYWx3aW5kb3cuanNcIik7XG4gd2luZG93LlRvb2xiYXIgPSByZXF1aXJlKFwiLi91aS90b29sYmFyLmpzXCIpO1xuIHdpbmRvdy5WZWN0b3JFZGl0b3IgPSByZXF1aXJlKFwiLi91aS92ZWN0b3JlZGl0b3IuanNcIik7XG5cbiB3aW5kb3cuYXBwbGV0cyA9IFtdO1xuXG4gYXBwbGV0c1tcImFsYXJtLWNsb2NrXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbGFybS1jbG9jay5qc1wiKTtcbiBhcHBsZXRzW1widGVybWluYWxcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3Rlcm1pbmFsLmpzXCIpO1xuIGFwcGxldHNbXCJtZXNzYWdpbmdcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL21lc3NhZ2luZy5qc1wiKTtcbiBhcHBsZXRzW1wiaW1hZ2Utdmlld2VyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9pbWFnZS12aWV3ZXIuanNcIik7XG4gYXBwbGV0c1tcInRleHQtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy90ZXh0LWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wiaW1hZ2UtZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9pbWFnZS1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcIjNkLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvM2QtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJtaWRpLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvbWlkaS1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcImFuaW1hdGlvbi1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL2FuaW1hdGlvbi1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcInNlYXJjaFwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2VhcmNoLmpzXCIpO1xuIGFwcGxldHNbXCJzZXR0aW5nc1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvc2V0dGluZ3MuanNcIik7XG4gYXBwbGV0c1tcInVzYWdlLXZpc3VhbGl6ZXJcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanNcIik7XG4gYXBwbGV0c1tcInNoYXJpbmdcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NoYXJpbmcuanNcIik7XG5cbi8vdGVzdCB0dGVzdFxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiBcIjNEIEVkaXRvclwiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2N1YmUucG5nXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRvYmplY3Q6IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXHJcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFsbDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IFwiQ2xvY2tcIixcclxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jbG9jay0yLnBuZ1wiLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcIkNsb2NrXCI6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdFx0XCJBbGFybVwiOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRcdFwiVGltZXJcIjogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0fSxcclxuXHRcdHNjaGVtYToge1xyXG5cdFx0XHRcIm1vZGVsc1wiOiBbXCJBbGFybVwiLCBcIlRpbWVyXCJdLFxyXG5cdFx0XHRcIkFsYXJtXCI6IHtcclxuXHRcdFx0XHRcImhvdXJzXCI6IDAsXHJcblx0XHRcdFx0XCJtaW51dGVzXCI6IDAsXHJcblx0XHRcdFx0XCJwbVwiOiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIlRpbWVyXCI6IHtcclxuXHRcdFx0XHRcImR1cmF0aW9uXCI6IDAsXHJcblx0XHRcdFx0XCJkYXRlXCI6IFwiMjAxNS0wOC0wOFwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cclxuXHR9O1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiBcIkFuaW1hdGlvbiBFZGl0b3JcIixcclxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRhbmltYXRpb246IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXHJcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFsbDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IFwiSW1hZ2UgRWRpdG9yXCIsXHJcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvaW1hZ2UtMi5wbmdcIixcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XHJcblx0XHR9LFxyXG5cdFx0bW9kZWxzOiB7XHJcblx0XHRcdGltYWdlOiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbGw6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IFwiSW1hZ2UgVmlld2VyXCIsXHJcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiTmV4dFwiOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRcdFwiUHJldmlvdXNcIjogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0XHRcIlNoYXJlXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRpbWFnZToge1xyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0c2NoZW1hOiB7XHJcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IFwiTWVzc2FnaW5nXCIsXHJcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2hhdC5wbmdcIixcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJOZXcgTWVzc2FnZVwiOiBmdW5jdGlvbiAocCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJOZXcgQ2hhdFwiOiBmdW5jdGlvbiAocCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJTZWFyY2hcIjogZnVuY3Rpb24gKHApIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiT3B0aW9uc1wiOiBmdW5jdGlvbiAocCkge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRjb250YWN0OiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXHJcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcclxuXHRcdFx0XHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHdpdHRlcjogXCJcIixcclxuXHRcdFx0XHRcdGZhY2Vib29rOiBcIlwiLFxyXG5cdFx0XHRcdFx0c291bmRjbG91ZDogXCJcIixcclxuXHRcdFx0XHRcdGdtYWlsOiBcIlwiLFxyXG5cdFx0XHRcdFx0Z2l0aHViOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbGw6IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dG86IFwiXCIsXHJcblx0XHRcdFx0XHRmcm9tOiBcIlwiLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbGw6IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYXRzOiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdHRvOiBcIlwiLFxyXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcclxuXHRcdFx0XHRcdHJvb206IFwiXCIsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFsbDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdC8vIGNvbm5lY3Qgc29ja2V0IHRvIGFwcCBpZiBub3QgY29ubmVjdGVkLi4uXHJcblx0XHRcdC8vIHNlbmQgd2VsY29tZSBtZXNzYWdlXHJcblx0XHRcdC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBzZW5kIGJ1dHRvblxyXG5cdFx0XHQvLyBhZGQgc29ja2V0IGV2ZW50IGxpc3RlbmVyIGZvciBjaGF0IG1lc3NhZ2VcclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcclxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cclxuXHR9O1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiBcIk1JREkgRWRpdG9yXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRhcnJhbmdtZW50OiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdGRhdGE6IFwiXCIsXHJcblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XHJcblx0fTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogXCJTZWFyY2hcIixcclxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRyZXN1bHQ6IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cclxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbGw6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XHJcblx0fTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogXCJTZXR0aW5nc1wiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XHJcblx0XHR9LFxyXG5cdFx0bW9kZWxzOiB7XHJcblx0XHRcdHNldHRpbmc6IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdH07XHJcbn07IiwiLy92YXIgRnJhbWUgPSByZXF1aXJlKFwiLi4vdWkvZnJhbWUuanNcIiksXHJcbi8vXHRNZW51ID0gcmVxdWlyZShcIi4uL3VpL21lbnUuanNcIiksXHJcbi8vXHRTaWRlYmFyID0gcmVxdWlyZShcIi4uL3VpL3NpZGViYXIuanNcIik7XHJcbi8vIHRlc3QgMmZncmZcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IFwiU2hhcmluZ1wiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3NoYXJlLnBuZ1wiLFxyXG5cdFx0dmlldzogbnVsbCxcclxuXHRcdG1lbnU6IG51bGwsXHJcblx0XHRzaWRlYmFyOiBudWxsLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcIk5ldyBTaGFyZVwiOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRcdFwiTmV3IFNob3J0Y3V0XCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdG1vZGVsczoge1xyXG5cdFx0XHRzaGFyZToge1xyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0c2NoZW1hOiB7XHJcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXHJcblx0XHRcdFx0XHRwdWJsaWM6IFwiMVwiLFxyXG5cdFx0XHRcdFx0d2hpdGVsaXN0OiBcIlwiLFxyXG5cdFx0XHRcdFx0ZGF0YTogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxyXG5cdFx0XHRcdHNpZGViYXIgPSBuZXcgU2lkZWJhcihcImN1c3RvbVwiLCB7XHJcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcclxuXHRcdFx0XHRcdHN1YnRpdGxlOiBcIlwiLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtdXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcblx0XHRcdFx0bmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxyXG5cdFx0XHRcdHJlc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXHJcblx0XHRcdFx0cHVibGljTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXHJcblx0XHRcdFx0d2hpdGVMaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXHJcblx0XHRcdFx0ZGF0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxyXG5cdFx0XHRcdG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuXHRcdFx0XHRyZXNvdXJjZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxyXG5cdFx0XHRcdHB1YmxpY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcclxuXHRcdFx0XHR3aGl0ZUxpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcclxuXHRcdFx0XHRkYXRhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcblx0XHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxcclxuXHRcdFx0XHRkb25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcblx0XHRcdFx0dmlldyA9IG51bGwsXHJcblx0XHRcdFx0c3BhbiA9IG51bGwsXHJcblx0XHRcdFx0c2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXHJcblx0XHRcdFx0c2hhcmUgPSBudWxsLFxyXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwiY3VzdG9tXCIsIHtcclxuXHRcdFx0XHRcImVsZW1lbnRcIjogZWxlbWVudFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zaWRlYmFyID0gc2lkZWJhcjtcclxuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcclxuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0XHRcdHJlc291cmNlTGFiZWwuaW5uZXJIVE1MID0gXCJSZXNvdXJjZVwiO1xyXG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocmVzb3VyY2VMYWJlbCk7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocmVzb3VyY2VJbnB1dCk7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdFx0XHRwdWJsaWNMYWJlbC5pbm5lckhUTUwgPSBcIlB1YmxpY1wiO1xyXG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQocHVibGljTGFiZWwpO1xyXG5cdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIxXCIpO1xyXG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJZZXNcIjtcclxuXHRcdFx0cHVibGljSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcclxuXHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IFwiTm9cIjtcclxuXHRcdFx0cHVibGljSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNJbnB1dCk7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdFx0XHRkYXRhTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRhXCI7XHJcblx0XHRcdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkYXRhTGFiZWwpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFJbnB1dCk7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdHdoaXRlTGlzdExhYmVsLmlubmVySFRNTCA9IFwiV2hpdGUgTGlzdFwiO1xyXG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kQ2hpbGQod2hpdGVMaXN0TGFiZWwpO1xyXG5cdFx0XHR3aGl0ZUxpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsXCIpO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdElucHV0KTtcclxuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcblxyXG5cdFx0XHRpZiAoISFwLm9wZW4pIHtcclxuXHRcdFx0XHR0aGlzLmFkZCgpO1xyXG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF07XHJcblx0XHRcdFx0c2hhcmUubmFtZSA9IHAub3Blbi5yZXNvdXJjZTtcclxuXHRcdFx0XHRzaGFyZS5yZXNvdXJjZSA9IHAub3Blbi5yZXNvdXJjZTtcclxuXHRcdFx0XHRyZXNvdXJjZUlucHV0LnZhbHVlID0gc2hhcmUucmVzb3VyY2U7XHJcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcblx0XHRcdFx0ZG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU2hhcmUgRm9sZGVyXCIpO1xyXG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlXCIpO1xyXG5cdFx0XHRcdGRvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0XHRcdFx0c2VsZi5zYXZlKCk7XHJcblx0XHRcdFx0fSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRvbmVJbnB1dCk7XHJcblxyXG5cdFx0XHRhcHAuc2hhcmluZy5saXN0QWxsU2hhcmVzKGFwcC51c2VyLm5hbWUsIChmdW5jdGlvbiAoc2lkZWJhckxpc3QpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAwLFxyXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0aXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdGlmICghISByZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiaW5pdCBhcHAgZ2V0IHNoYXJlc1wiLCBzaGFyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzIDwgc2hhcmVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmVzW3NdLmRpcmVjdG9yeX0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3Qub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2lkZWJhckxpc3QuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cyArKztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKHNpZGViYXIpKTtcclxuXHJcblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIGlucHV0cy4uLiBuZWVkIHRvIGltcGxlbWVudFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWRlYmFyLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcclxuXHRcdH0sXHJcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxyXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxyXG5cdFx0XHRcdHNoYXJlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLm1vZGVscy5zaGFyZS5zY2hlbWEpLFxyXG5cdFx0XHRcdGl0ZW0gPSBuZXcgU2lkZWJhckl0ZW0oXCJzdGFuZGFyZFwiLCB7dGl0bGU6IHNoYXJlLm5hbWV9KTtcclxuXHRcdFx0c2hhcmUucmVzb3VyY2UgPSBzaGFyZS5uYW1lO1xyXG5cdFx0XHRzaGFyZXMuYWxsLnB1c2goc2hhcmUpO1xyXG5cdFx0XHRzaGFyZXMuY3VycmVudCA9IHNoYXJlcy5hbGwubGVuZ3RoIC0gMTtcclxuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdHNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0fSxcclxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcclxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxyXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5yZXNvdXJjZSxcclxuXHRcdFx0XHR1c2VycyA9IHNoYXJlLndoaXRlbGlzdCxcclxuXHRcdFx0XHRwdWJsaWNTaGFyZSA9IHNoYXJlLnB1YmxpYyxcclxuXHRcdFx0XHRkYXRhID0gc2hhcmUuZGF0YTtcclxuXHRcdFx0d2luZG93LmFwcC5zaGFyaW5nLnNhdmVTaGFyZShwYXRoLCBwYXRoLCB1c2VycywgcHVibGljU2hhcmUsIGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzYXZlU2hhcmUuLi4gXCIsIHJlc3ApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdHZhciBzaGFyZXMgPSB0aGlzLm1vZGVscy5zaGFyZSxcclxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxyXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5wYXRoO1xyXG5cdFx0XHRhcHAuc2hhcmluZy5kZWxldGVTaGFyZShwYXRoKTtcclxuXHRcdH0sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcclxuXHJcblx0XHR9XHJcblx0fTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4geyAvLyBzdXBwb3J0IGFsZ2VicmEgYXMgd2VsbCBhcyAqbml4IGNvbW1hbmRzXHJcblx0XHRuYW1lOiBcIlRlcm1pbmFsXCIsXHJcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJTYXZlIER1bXBcIjogZnVuY3Rpb24gKHApIHt9XHJcblx0XHR9LFxyXG5cdFx0c2NoZW1hOiB7XHJcblx0XHRcdFwibW9kZWxzXCI6IFtcIk91dHB1dFwiXSxcclxuXHRcdFx0XCJPdXRwdXRcIjoge1xyXG5cdFx0XHRcdFwiZGF0YVwiOiBcIlwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHR2YXIgbWVudSA9IG5ldyBNZW51KFwic3RhbmRhcmRcIiksXHJcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xyXG5cdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBbdmlldywgbWVudV07XHJcblx0XHR9LFxyXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XHJcblx0fTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogXCJUZXh0IEVkaXRvclwiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL3RleHQucG5nXCIsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdFx0fSxcclxuXHRcdHNhdmVUaW1lb3V0OiAwLFxyXG5cdFx0bW9kZWxzOiB7XHJcblx0XHRcdGRvY3VtZW50OiB7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHRzY2hlbWE6IHtcclxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIlwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxyXG5cdFx0XHRcdHNpZGViYXIgPSBuZXcgU2lkZWJhcihcImN1c3RvbVwiLCB7XHJcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcclxuXHRcdFx0XHRcdHN1YnRpdGxlOiBcIlwiLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtdXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcblx0XHRcdFx0Ly90ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcclxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcclxuXHRcdFx0XHRzcGFuID0gbnVsbDtcclxuXHRcdFx0Ly9lbGVtZW50LmFwcGVuZENoaWxkKHRleHRhcmVhKWw7XHJcblxyXG5cdFx0XHR2aWV3ID0gbmV3IEZyYW1lKFwidGV4dFwiKTtcclxuXHRcdFx0dGhpcy5zaWRlYmFyID0gc2lkZWJhcjtcclxuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcclxuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0XHRcdHRoaXMuYWRkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xyXG5cdFx0fSxcclxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXHJcblx0XHRcdFx0ZG9jdW1lbnRzID0gdGhpcy5tb2RlbHMuZG9jdW1lbnQsXHJcblx0XHRcdFx0ZG9jdW1lbnQgPSBPYmplY3QuY3JlYXRlKHRoaXMubW9kZWxzLmRvY3VtZW50LnNjaGVtYSksXHJcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogZG9jdW1lbnQubmFtZX0pO1xyXG5cdFx0XHRkb2N1bWVudC5yZXNvdXJjZSA9IGRvY3VtZW50Lm5hbWU7XHJcblx0XHRcdGRvY3VtZW50cy5hbGwucHVzaChkb2N1bWVudCk7XHJcblx0XHRcdGRvY3VtZW50cy5jdXJyZW50ID0gZG9jdW1lbnRzLmFsbC5sZW5ndGggLSAxO1xyXG5cdFx0XHRzaWRlYmFyLm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XHJcblx0XHR9LFxyXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dmFyIGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxyXG5cdFx0XHRcdGRvYyA9IGRvY3VtZW50cy5hbGxbZG9jdW1lbnRzLmN1cnJlbnRdO1xyXG5cdFx0XHRzYXZlVGV4dChkb2MucmVzb3VyY2UsIGRvYy5jb250ZW50KTtcclxuXHRcdFx0dGhpcy5zYXZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdGhpcy5zYXZlKCk7IH0sIDYwMDAwKTtcclxuXHRcdH0sXHJcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0dGhpcy5zYXZlKCk7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNhdmVUaW1lb3V0KTtcclxuXHRcdH1cclxuXHR9O1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiBcIkRpc2sgVXNhZ2UgVmlzdWFsaXplclwiLFxyXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XHJcblx0XHR9LFxyXG5cdFx0bW9kZWxzOiB7XHJcblx0XHRcdHZpc3VhbGl6YXRpb246IHtcclxuXHRcdFx0XHRjdXJyZW50OiAwLFxyXG5cdFx0XHRcdHNjaGVtYToge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWxsOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxyXG5cdH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBBcHBJY29uKG5hbWUsIGluZGV4KSB7XHJcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG5cdFx0YXBwbGV0ID0gYXBwbGV0c1tuYW1lXSgpLFxyXG5cdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xyXG5cdGlmICghIWluZGV4KSB7XHJcblx0XHRpZiAoaW5kZXggPT0gMSkge1xyXG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XHJcblx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcclxuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiBkb3duXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1BcHAtSWNvblwiICsgZGlyZWN0aW9uQ2xhc3MpO1xyXG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBhcHBsZXQuaWNvbiArIFwiKTtcIik7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgYXBwbGV0Lm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGFwcC5vcGVuUGFuZShcImFwcFwiLCBhcHBsZXQubmFtZSwge1xyXG5cdFx0XHRhcHBsZXQ6IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sIHRydWUpO1xyXG59O1xyXG4iLCIvKiBDYXJkLmpzICovXG5cbnZhciBDb250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL2NvbnRleHRtZW51LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhcmQobmFtZSwgcmVzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGkgPSBudWxsLFxuXHRcdHVwID0gZmFsc2UsXG5cdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdGNvbnRleHRNZW51ID0gdHJ1ZSxcblx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG5cdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0Y29udGV4dE1lbnVEYXRhID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHJlc291cmNlOiByZXNvdXJjZSxcblx0XHRcdG1lbnVJdGVtczogW10sIC8vIGR1bW15IG1lbnUgaXRlbXNcblx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHR9O1xuXHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZFwiKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgbmFtZSk7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcmVzb3VyY2UpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maWd1cmVcIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdGNvbmZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2RlbGV0ZVBhdGgoYXBwLmN3ZCtcIi9cIituYW1lKTtcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlVJLUNvbnRleHQtTWVudVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LCB0cnVlKTtcblx0aXNJbWFnZSA9IC8oXFwuanBnfFxcLnBuZ3xcXC5naWZ8XFwuanBlZ3xcXC53ZWJwKS9pLnRlc3QocmVzb3VyY2UpO1xuXHRpZiAoaXNJbWFnZSkge1xuXHRcdHZhciB0aHVtYiA9IHJlc291cmNlLnJlcGxhY2UoL1xccy9nLCBcIiUyMFwiKTtcblx0XHRpZiAoIS8oXFwud2VicHxcXC5naWYpL2kudGVzdChyZXNvdXJjZSkpIHsgLy8gZG9uJ3QgdGh1bWJuYWlsIHdlYnAgb3IgZ2lmXG5cdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHR2YXIgdGh1bWIgPSByUGF0aFtyUGF0aC5sZW5ndGggLSAxXTtcblx0XHRcdHJQYXRoLnNwbGljZShyUGF0aC5sZW5ndGggLSAxLCAxKTtcblx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdGlmICgod2luZG93LmlubmVyV2lkdGggPCA2NDEgJiYgYXBwLnRodW1iU2l6ZSkgfHwgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmICFhcHAudGh1bWJTaXplKSkgeyAvLyB1c2UgaGktZHBpIHRodW1ibmFpbHMgYnkgZGVmYXVsdFxuXHRcdFx0XHRyUGF0aC5wdXNoKFwiMTAyNFwiKTtcblx0XHRcdH1cblx0XHRcdHJQYXRoLnB1c2godGh1bWIgKyBcIi5qcGdcIik7XG5cdFx0XHR0aHVtYiA9IHJQYXRoLmpvaW4oXCIvXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYiA9IHJlc291cmNlO1xuXHRcdH1cblx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgSW1hZ2VcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRpZiAoL14oLipcXC8pezAsMX1bXlxcLl0qLnsxfSQvLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRldGVjdCBmb2xkZXJzXG5cdFx0XHRjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5ID0gdHJ1ZTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRvcGVuRm9sZGVyKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEZvbGRlclwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjb250ZXh0TWVudSkge1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2UgZWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhcHAucmVxdWVzdChcIkdFVFwiLCByZXNvdXJjZSArIFwiP2NhY2hlPVwiICsgRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRhcHAub3BlblBhbmUoJ2VkaXQnLCBuYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1x0RXhwZXJpbWVudGFsLi5cblx0aWYgKGNvbnRleHRNZW51KSB7XG5cdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgc3R5bGUgPSBlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93TWVudVwiKSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdFx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGl0ZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikucmVwbGFjZShcInNob3dNZW51XCIsXCJcIikpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3R5bGUgKyBcIiBzaG93TWVudVwiKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGlmIChpc0ltYWdlKSB7XG5cdFx0XHRlLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9XG5cdH1cblx0aWYgKCEhY29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSkge1xuXHRcdGUuYXBwZW5kQ2hpbGQoY29uZmlndXJlKTtcblx0fVxuXG5cdGZvciAoaSBpbiBvcHRpb25zKSB7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uc1tpXSk7XG5cdH1cblx0cmV0dXJuIGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb250ZXh0TWVudShvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Db250ZXh0LU1lbnVcIik7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5kaXJlY3RvcnkgPT0gdHJ1ZSkge1xuXHRcdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRpcmVjdG9yeSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLmRpcmVjdG9yeU1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2Rhcmsvb3Blbi5wbmcpOycgaHJlZj0namF2YXNjcmlwdDpvcGVuRm9sZGVyKFxcXCJcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIlxcXCIpOycgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL2Rvd25sb2FkLnBuZyk7JyBocmVmPSdcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIicgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgb3B0aW9ucy5yZXNvdXJjZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIiwiIGZ1bmN0aW9uIERhdGFQYW5lICh0eXBlLCBuYW1lLCBkYXRhKSB7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICB0aXRsZVN0cmluZyA9IFwiXCIsXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdHRpdGxlRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0c2hvd1RpdGxlID0gZmFsc2UsXG4gICAgICAgIHNob3dFbnRyeSA9IGZhbHNlLFxuICAgICAgICBzaG93VGl0bGVFbnRyeSA9IGZhbHNlLFxuXHRcdGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICB1cGxvYWQgPSBudWxsLFxuICAgICAgICBlZGl0V2lkZ2V0ID0gbnVsbCxcblx0XHRhcHBsZXQgPSBudWxsO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lXCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG9uZVwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkRvbmVcIik7XG5cdGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QodHJ1ZSksIHRydWUpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlXCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlhcIik7XG5cdGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKCksIHRydWUpO1xuICAgIGlmICghIWRhdGEuYXBwbGV0KSB7XG4gICAgICAgIC8vIGxvYWQgYXBwbGV0IGZvcm0gZGF0YS5hcHBsZXRcbiAgICAgICAgYXBwbGV0ID0gbmV3IEFwcGxldChkYXRhLmFwcGxldC5uYW1lLCB7b3BlbjogKCEhIGRhdGEuYXBwbGV0Lm9wZW4gPyBkYXRhLmFwcGxldC5vcGVuIDogbnVsbCl9KTtcblx0XHRhcHBsZXQuZGF0YVBhbmUgPSB0aGlzOyAvLyB3b24ndCBiZSBuZWVkZWQgb25jZSBEYXRhUGFuZSBpcyBkZXByZWNhdGVkXG5cdFx0dGhpcy5hcHBsZXQgPSBhcHBsZXQ7XG5cdFx0Y29udGFpbmVyID0gYXBwbGV0LmRpdjtcbiAgICB9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RvdWNoLnBuZylcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcblx0XHRcdGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvbWtkaXIucG5nKTtcIik7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICB1cGxvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuXHRcdFx0XHR0aXRsZVN0cmluZyA9ICc8aW1nIHNyYz1cIi9hcHAvZGF0YS91cGxvYWQucG5nXCIgdGl0bGU9XCJVcGxvYWQgRmlsZXNcIj48c3Bhbj5VcGxvYWQgRmlsZXM8L3NwYW4+Jztcblx0XHRcdFx0c2hvd1RpdGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZpZXdcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9IFwiVmlldyBGaWxlXCI7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgICAgICAgICB0aXRsZVN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHRpZiAoISEgZGF0YS5pY29uKSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIitkYXRhLmljb24rXCIpO1wiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90ZXh0Mi5wbmcpO1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZztcblx0XHRpZiAoc2hvd1RpdGxlKSB7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mKGRhdGEpPT0ndW5kZWZpbmVkJyB8fCB0eXBlb2YoZGF0YS5jb250cm9scykgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YS5jb250cm9scyA9PSB0cnVlKSB7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpO1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSk7XG5cdFx0fVxuXHRcdGlmICghIWRhdGEgJiYgISEgZGF0YS5jbGFzcykge1xuXHRcdFx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGF0YS5jbGFzcyk7XG5cdFx0fVxuICAgICAgICBpZiAoISEgdXBsb2FkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXBsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd1RpdGxlRW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVudHJ5KTtcbiAgICAgICAgICAgIHRpdGxlRW50cnkudmFsdWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93RW50cnkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICBpZiAoISEgZGF0YS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudmFsdWUgPSBkYXRhLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlZCB0byBhZGQgXCJkb25lXCIgYnV0dG9uIGhlcmVcbiAgICB9XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cdHRoaXMuZG9uZSA9IGRvbmU7XG5cdHRoaXMuZW50cnkgPSBlbnRyeTtcblx0dGhpcy5wYW5lVGl0bGUgPSB0aXRsZTtcblx0dGhpcy50aXRsZUVudHJ5ID0gdGl0bGVFbnRyeTtcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gdXBsb2FkO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLnNuYXAgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG5cdHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmUgXCIrZGlyZWN0aW9uKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXG4gICAgICAgIHBhbmUgPSB0aGlzO1xuICAgIHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuICAgIHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5nZXRDbG9zZU1ldGhvZCA9IGZ1bmN0aW9uIChzYXZlKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuXHRcdHZhciBsZWF2ZU9wZW4gPSBmYWxzZTtcblx0XHRpZiAoc2F2ZSkge1xuXHRcdFx0c3dpdGNoIChwYW5lLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgICAgICBtYWtlRGlyZWN0b3J5KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZXMocGFuZSk7XG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICBcdFx0XHRzYXZlVGV4dChhcHAuY3dkK1wiL1wiK3BhbmUudGl0bGVFbnRyeS52YWx1ZSwgcGFuZS5lbnRyeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdGlmICghbGVhdmVPcGVuKSB7XG5cdFx0XHRwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcblx0XHRcdHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0XHR9XG5cdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhUGFuZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNZW51KHR5cGUsIG9wdGlvbnMpIHtcclxuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXHJcblx0XHRtZW51SXRlbXMgPSBbXSxcclxuXHRcdG1lbnVJdGVtID0gbnVsbCxcclxuXHRcdG1lbnUgPSB0aGlzLFxyXG5cdFx0bSA9IDA7XHJcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xyXG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xyXG5cdHRoaXMuYXBwbGV0ID0gbnVsbDtcclxuICAgIGlmICghISBvcHRpb25zKSB7IC8vIG1ha2Ugc3VyZSBvcHRpb25zIGFyZSBkZWZpbmVkXHJcbiAgICAgICAgaWYgKCEhIG9wdGlvbnMudGl0bGVCdXR0b24pIHtcclxuXHRcdCAgbWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XHJcblx0ICAgfVxyXG4gICAgfVxyXG5cdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0Y2FzZSBcInN0YW5kYXJkXCI6XHJcblx0XHRtZW51SXRlbXMgPSBtZW51SXRlbXMuY29uY2F0KFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucyk7XHJcblx0XHRicmVhaztcclxuXHRjYXNlIFwiY3VzdG9tXCI6XHJcblx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcclxuXHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcclxuXHRcdG1lbnVJdGVtID0gbWVudUl0ZW1zW21dO1xyXG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIik7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XHJcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XHJcblx0XHQoZnVuY3Rpb24gKGJ1dHRvbk1lbnUsIGJ1dHRvbk1lbnVJdGVtKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xyXG5cdFx0XHR9LCB0cnVlKTtcclxuXHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcclxuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0XHRtICs9IDE7XHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1vZGFsV2luZG93KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0c2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1vZGFsV2luZG93XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBzZWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiksXG5cdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGlmICghIW9wdGlvbnMuaWNvbikge1xuXHRcdGljb24uc3JjID0gb3B0aW9ucy5pY29uO1xuXHRcdGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGljb24pO1xuXHR9XG5cdGgyLmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdGgzLmlubmVySFRNTCA9IG9wdGlvbnMuc3VidGl0bGU7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgyKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoaDMpO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0Ly8gc3RhbmRhcmQgZmVhdHVyZXNcblx0XHQvLyBtaWdodCB3YW50IGEgbW9kZSB3aGVyZSBpdCBlbmhhbmNlcyAvIG1lcmdlcyB3aXRoIHRoZSBtZW51XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblx0XHRvcHRpb25zLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHNpZGViYXJJdGVtKSB7XG5cdFx0XHRhc2lkZS5hcHBlbmRDaGlsZChzaWRlYmFySXRlbS5lbGVtZW50KTtcblx0XHR9KTtcblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gU2lkZWJhckl0ZW0odHlwZSwgb3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhckl0ZW1cIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdGRpdi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWZWN0b3JFZGl0b3Iob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0aXRlbS5pbm5lckhUTUwgPSBcIjxoMj5cIiArIG9wdGlvbnMubmFtZSArIFwiPC9oMj5cIjtcblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIl19
