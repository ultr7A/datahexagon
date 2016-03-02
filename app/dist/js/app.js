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

			return [menu, sidebar, view];
		},
		add: function add(p) {
			var sidebar = this.sidebar,
			    documents = this.models.document,
			    document = Object.create(this.models.document.schema),
			    item = null;
			if (!!p && !!p.resource) {
				document.resource = p.resource;
			} else {
				document.resource = app.cwd + "/" + document.resource;
			}
			item = new SidebarItem("editable", { title: document.resource });
			documents.all.push(document);
			documents.current = documents.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
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
				var doc = null;
				applet.add({ resource: p });
				doc = documents.all[documents.current];
				doc.content = resp;
				textarea.value = resp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzLzNkLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvYWxhcm0tY2xvY2suanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2FuaW1hdGlvbi1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL2ltYWdlLWVkaXRvci5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9tZXNzYWdpbmcuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL21pZGktZWRpdG9yLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zZWFyY2guanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3NldHRpbmdzLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy9zaGFyaW5nLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvYXBwbGV0cy90ZXJtaW5hbC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL2FwcGxldHMvdGV4dC1lZGl0b3IuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHBsZXRzL3VzYWdlLXZpc3VhbGl6ZXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksR0FBRyxP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QUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNuQixJQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ2pELElBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixLQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUNsQyxTQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFDOUQ7QUFDRCxRQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVEsRUFBRTtBQUM3QyxNQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxNQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDL0IsTUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUM3QyxXQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3BCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDVixNQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztDQUNILENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogbWFpbi5qcyAqL1xuXG4gd2luZG93LkNhcmQgPSByZXF1aXJlKFwiLi91aS9jYXJkLmpzXCIpO1xuIHdpbmRvdy5NZW51ID0gcmVxdWlyZShcIi4vdWkvbWVudS5qc1wiKTtcbiB3aW5kb3cuRGF0YVBhbmUgPSByZXF1aXJlKFwiLi91aS9kYXRhcGFuZS5qc1wiKTtcbiB3aW5kb3cuQ29udGV4dE1lbnUgPSByZXF1aXJlKFwiLi91aS9jb250ZXh0bWVudS5qc1wiKTtcbiB3aW5kb3cuQXBwSWNvbiA9IHJlcXVpcmUoXCIuL3VpL2FwcGljb24uanNcIik7XG4gd2luZG93LkZyYW1lID0gcmVxdWlyZShcIi4vdWkvZnJhbWUuanNcIik7XG4gd2luZG93LlNpZGViYXIgPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyLmpzXCIpO1xuIHdpbmRvdy5TaWRlYmFySXRlbSA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXJpdGVtLmpzXCIpO1xuIHdpbmRvdy5Nb2RhbFdpbmRvdyA9IHJlcXVpcmUoXCIuL3VpL21vZGFsd2luZG93LmpzXCIpO1xuIHdpbmRvdy5Ub29sYmFyID0gcmVxdWlyZShcIi4vdWkvdG9vbGJhci5qc1wiKTtcbiB3aW5kb3cuVmVjdG9yRWRpdG9yID0gcmVxdWlyZShcIi4vdWkvdmVjdG9yZWRpdG9yLmpzXCIpO1xuXG4gd2luZG93LmFwcGxldHMgPSBbXTtcblxuIGFwcGxldHNbXCJhbGFybS1jbG9ja1wiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvYWxhcm0tY2xvY2suanNcIik7XG4gYXBwbGV0c1tcInRlcm1pbmFsXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy90ZXJtaW5hbC5qc1wiKTtcbiBhcHBsZXRzW1wibWVzc2FnaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9tZXNzYWdpbmcuanNcIik7XG4gYXBwbGV0c1tcImltYWdlLXZpZXdlclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2Utdmlld2VyLmpzXCIpO1xuIGFwcGxldHNbXCJ0ZXh0LWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvdGV4dC1lZGl0b3IuanNcIik7XG4gYXBwbGV0c1tcImltYWdlLWVkaXRvclwiXSA9IHJlcXVpcmUoXCIuL2FwcGxldHMvaW1hZ2UtZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCIzZC1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzLzNkLWVkaXRvci5qc1wiKTtcbiBhcHBsZXRzW1wibWlkaS1lZGl0b3JcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL21pZGktZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJhbmltYXRpb24tZWRpdG9yXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9hbmltYXRpb24tZWRpdG9yLmpzXCIpO1xuIGFwcGxldHNbXCJzZWFyY2hcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NlYXJjaC5qc1wiKTtcbiBhcHBsZXRzW1wic2V0dGluZ3NcIl0gPSByZXF1aXJlKFwiLi9hcHBsZXRzL3NldHRpbmdzLmpzXCIpO1xuIGFwcGxldHNbXCJ1c2FnZS12aXN1YWxpemVyXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy91c2FnZS12aXN1YWxpemVyLmpzXCIpO1xuIGFwcGxldHNbXCJzaGFyaW5nXCJdID0gcmVxdWlyZShcIi4vYXBwbGV0cy9zaGFyaW5nLmpzXCIpO1xuXG4vL3Rlc3QgdHRlc3RcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIjNEIEVkaXRvclwiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jdWJlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2F2ZSBDaGFuZ2VzXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRvYmplY3Q6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge30sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge30sXG5cdFx0c2F2ZTogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIkNsb2NrXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2Nsb2NrLTIucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJDbG9ja1wiOiBmdW5jdGlvbiAocCkge30sXG5cdFx0XHRcIkFsYXJtXCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiVGltZXJcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdH0sXG5cdFx0c2NoZW1hOiB7XG5cdFx0XHRcIm1vZGVsc1wiOiBbXCJBbGFybVwiLCBcIlRpbWVyXCJdLFxuXHRcdFx0XCJBbGFybVwiOiB7XG5cdFx0XHRcdFwiaG91cnNcIjogMCxcblx0XHRcdFx0XCJtaW51dGVzXCI6IDAsXG5cdFx0XHRcdFwicG1cIjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRcIlRpbWVyXCI6IHtcblx0XHRcdFx0XCJkdXJhdGlvblwiOiAwLFxuXHRcdFx0XHRcImRhdGVcIjogXCIyMDE1LTA4LTA4XCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJBbmltYXRpb24gRWRpdG9yXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJJbWFnZSBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvaW1hZ2UtMi5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJJbWFnZSBWaWV3ZXJcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXh0XCI6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRcdFwiUHJldmlvdXNcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJTaGFyZVwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHR9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge31cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIk1lc3NhZ2luZ1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaGF0LnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiTmV3IE1lc3NhZ2VcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fSxcblx0XHRcdFwiTmV3IENoYXRcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fSxcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7XG5cblx0XHRcdH0sXG5cdFx0XHRcIk9wdGlvbnNcIjogZnVuY3Rpb24gKHApIHtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRjb250YWN0OiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRcdFx0dHdpdHRlcjogXCJcIixcblx0XHRcdFx0XHRmYWNlYm9vazogXCJcIixcblx0XHRcdFx0XHRzb3VuZGNsb3VkOiBcIlwiLFxuXHRcdFx0XHRcdGdtYWlsOiBcIlwiLFxuXHRcdFx0XHRcdGdpdGh1YjogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9LFxuXHRcdFx0bWVzc2FnZXM6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0dGl0bGU6IFwiXCIsXG5cdFx0XHRcdFx0dG86IFwiXCIsXG5cdFx0XHRcdFx0ZnJvbTogXCJcIixcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH0sXG5cdFx0XHRjaGF0czoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHR0bzogXCJcIixcblx0XHRcdFx0XHRmcm9tOiBcIlwiLFxuXHRcdFx0XHRcdHJvb206IFwiXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcInRleHRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0Ly8gY29ubmVjdCBzb2NrZXQgdG8gYXBwIGlmIG5vdCBjb25uZWN0ZWQuLi5cblx0XHRcdC8vIHNlbmQgd2VsY29tZSBtZXNzYWdlXG5cdFx0XHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc2VuZCBidXR0b25cblx0XHRcdC8vIGFkZCBzb2NrZXQgZXZlbnQgbGlzdGVuZXIgZm9yIGNoYXQgbWVzc2FnZVxuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiTUlESSBFZGl0b3JcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0YXJyYW5nbWVudDoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRkYXRhOiBcIlwiLFxuXHRcdFx0XHRcdHJlc291cmNlOiBcIlwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdGFkZDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZWFyY2hcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvY2lyY2xlLnBuZ1wiLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdFwiU2VhcmNoXCI6IGZ1bmN0aW9uIChwKSB7fVxuXHRcdH0sXG5cdFx0bW9kZWxzOiB7XG5cdFx0XHRyZXN1bHQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cblx0XHRcdFx0XHRyZXNvdXJjZTogXCJcIixcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogXCJTZXR0aW5nc1wiLFxuXHRcdGljb246IFwiL2FwcC9kYXRhLzE5Mi9jaXJjbGUucG5nXCIsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJTYXZlIENoYW5nZXNcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNldHRpbmc6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsbDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIi8vdmFyIEZyYW1lID0gcmVxdWlyZShcIi4uL3VpL2ZyYW1lLmpzXCIpLFxuLy9cdE1lbnUgPSByZXF1aXJlKFwiLi4vdWkvbWVudS5qc1wiKSxcbi8vXHRTaWRlYmFyID0gcmVxdWlyZShcIi4uL3VpL3NpZGViYXIuanNcIik7XG4vLyB0ZXN0IDJmZ3JmXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBcIlNoYXJpbmdcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvc2hhcmUucG5nXCIsXG5cdFx0dmlldzogbnVsbCxcblx0XHRtZW51OiBudWxsLFxuXHRcdHNpZGViYXI6IG51bGwsXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0XCJOZXcgU2hhcmVcIjogZnVuY3Rpb24gKHApIHt9LFxuXHRcdFx0XCJOZXcgU2hvcnRjdXRcIjogZnVuY3Rpb24gKHApIHt9XG5cdFx0fSxcblx0XHRtb2RlbHM6IHtcblx0XHRcdHNoYXJlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRcdHNjaGVtYToge1xuXHRcdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiXCIsXG5cdFx0XHRcdFx0cHVibGljOiBcIjFcIixcblx0XHRcdFx0XHR3aGl0ZWxpc3Q6IFwiXCIsXG5cdFx0XHRcdFx0ZGF0YTogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHRuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHJlc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG5cdFx0XHRcdHB1YmxpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHR3aGl0ZUxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcblx0XHRcdFx0ZGF0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuXHRcdFx0XHRuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHJlc291cmNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0XHRcdHB1YmxpY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcblx0XHRcdFx0d2hpdGVMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksXG5cdFx0XHRcdGRhdGFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxcblx0XHRcdFx0ZG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGwsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IG51bGwsXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcImN1c3RvbVwiLCB7XG5cdFx0XHRcdFwiZWxlbWVudFwiOiBlbGVtZW50XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2lkZWJhciA9IHNpZGViYXI7XG5cdFx0XHR0aGlzLm1lbnUgPSBtZW51O1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdFx0cmVzb3VyY2VMYWJlbC5pbm5lckhUTUwgPSBcIlJlc291cmNlXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHJlc291cmNlTGFiZWwpO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChyZXNvdXJjZUlucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0XHRcdHB1YmxpY0xhYmVsLmlubmVySFRNTCA9IFwiUHVibGljXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHB1YmxpY0xhYmVsKTtcblx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG5cdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gXCJZZXNcIjtcblx0XHRcdHB1YmxpY0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdFx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcblx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBcIk5vXCI7XG5cdFx0XHRwdWJsaWNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChwdWJsaWNJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdFx0XHRkYXRhTGFiZWwuaW5uZXJIVE1MID0gXCJEYXRhXCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFMYWJlbCk7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKGRhdGFJbnB1dCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0d2hpdGVMaXN0TGFiZWwuaW5uZXJIVE1MID0gXCJXaGl0ZSBMaXN0XCI7XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdExhYmVsKTtcblx0XHRcdHdoaXRlTGlzdElucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGxcIik7XG5cdFx0XHRzcGFuLmFwcGVuZENoaWxkKHdoaXRlTGlzdElucHV0KTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblxuXHRcdFx0aWYgKCEhcC5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYWRkKCk7XG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF07XG5cdFx0XHRcdHNoYXJlLm5hbWUgPSBwLm9wZW4ucmVzb3VyY2U7XG5cdFx0XHRcdHNoYXJlLnJlc291cmNlID0gcC5vcGVuLnJlc291cmNlO1xuXHRcdFx0XHRyZXNvdXJjZUlucHV0LnZhbHVlID0gc2hhcmUucmVzb3VyY2U7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTaGFyZSBGb2xkZXJcIik7XG5cdFx0XHRcdGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlXCIpO1xuXHRcdFx0XHRkb25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0XHRzZWxmLnNhdmUoKTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0c3Bhbi5hcHBlbmRDaGlsZChkb25lSW5wdXQpO1xuXG5cdFx0XHRhcHAuc2hhcmluZy5saXN0QWxsU2hhcmVzKGFwcC51c2VyLm5hbWUsIChmdW5jdGlvbiAoc2lkZWJhckxpc3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHR2YXIgcyA9IDAsXG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IG51bGwsXG5cdFx0XHRcdFx0XHRcdGl0ZW0gPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKCEhIHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdHNoYXJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImluaXQgYXBwIGdldCBzaGFyZXNcIiwgc2hhcmVzKTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKHMgPCBzaGFyZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmVzW3NdLmRpcmVjdG9yeX0pO1xuXHRcdFx0XHRcdFx0XHRcdHNpZGViYXJMaXN0Lm9wdGlvbnMuaXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0XHRcdFx0XHRzaWRlYmFyTGlzdC5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0cyArKztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHR9KShzaWRlYmFyKSk7XG5cblx0XHRcdHJldHVybiBbbWVudSwgc2lkZWJhciwgdmlld107XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIGlucHV0cy4uLiBuZWVkIHRvIGltcGxlbWVudFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2lkZWJhcik7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNpZGViYXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuc2hhcmUuc2NoZW1hKSxcblx0XHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcInN0YW5kYXJkXCIsIHt0aXRsZTogc2hhcmUubmFtZX0pO1xuXHRcdFx0c2hhcmUucmVzb3VyY2UgPSBzaGFyZS5uYW1lO1xuXHRcdFx0c2hhcmVzLmFsbC5wdXNoKHNoYXJlKTtcblx0XHRcdHNoYXJlcy5jdXJyZW50ID0gc2hhcmVzLmFsbC5sZW5ndGggLSAxO1xuXHRcdFx0c2lkZWJhci5vcHRpb25zLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRzaWRlYmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNoYXJlcyA9IHRoaXMubW9kZWxzLnNoYXJlLFxuXHRcdFx0XHRzaGFyZSA9IHNoYXJlcy5hbGxbc2hhcmVzLmN1cnJlbnRdLFxuXHRcdFx0XHRwYXRoID0gc2hhcmUucmVzb3VyY2UsXG5cdFx0XHRcdHVzZXJzID0gc2hhcmUud2hpdGVsaXN0LFxuXHRcdFx0XHRwdWJsaWNTaGFyZSA9IHNoYXJlLnB1YmxpYyxcblx0XHRcdFx0ZGF0YSA9IHNoYXJlLmRhdGE7XG5cdFx0XHR3aW5kb3cuYXBwLnNoYXJpbmcuc2F2ZVNoYXJlKHBhdGgsIHBhdGgsIHVzZXJzLCBwdWJsaWNTaGFyZSwgZGF0YSwgZnVuY3Rpb24gKHJlc3ApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzYXZlU2hhcmUuLi4gXCIsIHJlc3ApO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChwKSB7XG5cdFx0XHR2YXIgc2hhcmVzID0gdGhpcy5tb2RlbHMuc2hhcmUsXG5cdFx0XHRcdHNoYXJlID0gc2hhcmVzLmFsbFtzaGFyZXMuY3VycmVudF0sXG5cdFx0XHRcdHBhdGggPSBzaGFyZS5wYXRoO1xuXHRcdFx0YXBwLnNoYXJpbmcuZGVsZXRlU2hhcmUocGF0aCk7XG5cdFx0fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHtcblxuXHRcdH1cblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHsgLy8gc3VwcG9ydCBhbGdlYnJhIGFzIHdlbGwgYXMgKm5peCBjb21tYW5kc1xuXHRcdG5hbWU6IFwiVGVybWluYWxcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgRHVtcFwiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdHNjaGVtYToge1xuXHRcdFx0XCJtb2RlbHNcIjogW1wiT3V0cHV0XCJdLFxuXHRcdFx0XCJPdXRwdXRcIjoge1xuXHRcdFx0XHRcImRhdGFcIjogXCJcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBtZW51ID0gbmV3IE1lbnUoXCJzdGFuZGFyZFwiKSxcblx0XHRcdHZpZXcgPSBuZXcgRnJhbWUoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRlbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBbdmlldywgbWVudV07XG5cdFx0fSxcblx0XHRhZGQ6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge30sXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uIChwKSB7fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiVGV4dCBFZGl0b3JcIixcblx0XHRpY29uOiBcIi9hcHAvZGF0YS8xOTIvdGV4dC5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdHNhdmVUaW1lb3V0OiAwLFxuXHRcdG1vZGVsczoge1xuXHRcdFx0ZG9jdW1lbnQ6IHtcblx0XHRcdFx0Y3VycmVudDogMCxcblx0XHRcdFx0c2NoZW1hOiB7XG5cdFx0XHRcdFx0cmVzb3VyY2U6IFwiTmV3IERvY3VtZW50LnR4dFwiLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCIsXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGw6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgTWVudShcInN0YW5kYXJkXCIpLFxuXHRcdFx0XHRzaWRlYmFyID0gbmV3IFNpZGViYXIoXCJjdXN0b21cIiwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcblx0XHRcdFx0XHRzdWJ0aXRsZTogXCJcIixcblx0XHRcdFx0XHRpdGVtczogW11cblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0XHQvL3RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdFx0XHR2aWV3ID0gbnVsbCxcblx0XHRcdFx0c3BhbiA9IG51bGw7XG5cdFx0XHQvL2VsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpbDtcblxuXHRcdFx0dmlldyA9IG5ldyBGcmFtZShcInRleHRcIik7XG5cdFx0XHR0aGlzLnNpZGViYXIgPSBzaWRlYmFyO1xuXHRcdFx0dGhpcy5tZW51ID0gbWVudTtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cblx0XHRcdGlmICghIXAgJiYgcC5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYWRkKHtyZXNvdXJjZTogcC5vcGVufSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFkZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW21lbnUsIHNpZGViYXIsIHZpZXddO1xuXHRcdH0sXG5cdFx0YWRkOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG5cdFx0XHRcdGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRkb2N1bWVudCA9IE9iamVjdC5jcmVhdGUodGhpcy5tb2RlbHMuZG9jdW1lbnQuc2NoZW1hKSxcblx0XHRcdFx0aXRlbSA9IG51bGw7XG5cdFx0XHRpZiAoISFwICYmICEhcC5yZXNvdXJjZSkge1xuXHRcdFx0XHRkb2N1bWVudC5yZXNvdXJjZSA9IHAucmVzb3VyY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5yZXNvdXJjZSA9IGFwcC5jd2QgKyBcIi9cIiArIGRvY3VtZW50LnJlc291cmNlO1xuXHRcdFx0fVxuXHRcdFx0aXRlbSA9IG5ldyBTaWRlYmFySXRlbShcImVkaXRhYmxlXCIsIHt0aXRsZTogZG9jdW1lbnQucmVzb3VyY2V9KTtcblx0XHRcdGRvY3VtZW50cy5hbGwucHVzaChkb2N1bWVudCk7XG5cdFx0XHRkb2N1bWVudHMuY3VycmVudCA9IGRvY3VtZW50cy5hbGwubGVuZ3RoIC0gMTtcblx0XHRcdHNpZGViYXIub3B0aW9ucy5pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0c2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0uZWxlbWVudCk7XG5cdFx0fSxcblx0XHRzYXZlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dmFyIGRvY3VtZW50cyA9IHRoaXMubW9kZWxzLmRvY3VtZW50LFxuXHRcdFx0XHRkb2MgPSBkb2N1bWVudHMuYWxsW2RvY3VtZW50cy5jdXJyZW50XTtcblx0XHRcdGRvYy5jb250ZW50ID0gdGhpcy52aWV3LmVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWU7XG5cdFx0XHRzYXZlVGV4dChkb2MucmVzb3VyY2UsIGRvYy5jb250ZW50KTtcblx0XHRcdHRoaXMuc2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuc2F2ZSwgNjAwMDApO1xuXHRcdH0sXG5cdFx0b3BlbjogZnVuY3Rpb24gKHApIHtcblx0XHRcdHZhciBkb2N1bWVudHMgPSB0aGlzLm1vZGVscy5kb2N1bWVudCxcblx0XHRcdFx0dGV4dGFyZWEgPSB0aGlzLnZpZXcuZWxlbWVudC5jaGlsZHJlblswXSxcblx0XHRcdFx0YXBwbGV0ID0gdGhpcztcblx0XHRcdGFwcC5yZXF1ZXN0KFwiZ2V0XCIsIHAsIFwiXCIsIGZ1bmN0aW9uIChyZXNwKSB7XG5cdFx0XHRcdHZhciBkb2MgPSBudWxsO1xuXHRcdFx0XHRhcHBsZXQuYWRkKHtyZXNvdXJjZTogcH0pO1xuXHRcdFx0XHRkb2MgPSBkb2N1bWVudHMuYWxsW2RvY3VtZW50cy5jdXJyZW50XTtcblx0XHRcdFx0ZG9jLmNvbnRlbnQgPSByZXNwO1xuXHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHJlc3A7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGNsb3NlOiBmdW5jdGlvbiAocCkge1xuXHRcdFx0dGhpcy5zYXZlKCk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5zYXZlVGltZW91dCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImFjdHVhbGx5IGNsb3Npbmcgbm93Li5cIik7XG5cdFx0fVxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IFwiRGlzayBVc2FnZSBWaXN1YWxpemVyXCIsXG5cdFx0aWNvbjogXCIvYXBwL2RhdGEvMTkyL2NpcmNsZS5wbmdcIixcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRcIlNhdmUgQ2hhbmdlc1wiOiBmdW5jdGlvbiAocCkge31cblx0XHR9LFxuXHRcdG1vZGVsczoge1xuXHRcdFx0dmlzdWFsaXphdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxsOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24gKHApIHt9LFxuXHRcdHNhdmU6IGZ1bmN0aW9uIChwKSB7fSxcblx0XHRjbG9zZTogZnVuY3Rpb24gKHApIHt9XG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBBcHBJY29uKG5hbWUsIGluZGV4KSB7XHJcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG5cdFx0YXBwbGV0ID0gYXBwbGV0c1tuYW1lXSgpLFxuXHRcdGRpcmVjdGlvbkNsYXNzID0gXCJcIjtcclxuXHRpZiAoISFpbmRleCkge1xyXG5cdFx0aWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiB1cFwiO1xyXG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XHJcblx0XHRcdGRpcmVjdGlvbkNsYXNzID0gXCIgZG93blwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQXBwLUljb25cIiArIGRpcmVjdGlvbkNsYXNzKTtcclxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgYXBwbGV0Lmljb24gKyBcIik7XCIpO1xyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3Bhbj5cIiArIGFwcGxldC5uYW1lICsgXCI8L3NwYW4+XCI7XHJcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRhcHAub3BlblBhbmUoXCJhcHBcIiwgYXBwbGV0Lm5hbWUsIHtcclxuXHRcdFx0YXBwbGV0OiB7XHJcblx0XHRcdFx0bmFtZTogbmFtZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LCB0cnVlKTtcclxufTtcclxuIiwiLyogQ2FyZC5qcyAqL1xuXG52YXIgQ29udGV4dE1lbnUgPSByZXF1aXJlKFwiLi9jb250ZXh0bWVudS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDYXJkKG5hbWUsIHJlc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRpID0gbnVsbCxcblx0XHR1cCA9IGZhbHNlLFxuXHRcdGlzSW1hZ2UgPSBmYWxzZSxcblx0XHRjb250ZXh0TWVudSA9IHRydWUsXG5cdFx0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxuXHRcdGNvbmZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGNvbnRleHRNZW51RGF0YSA9IHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRyZXNvdXJjZTogcmVzb3VyY2UsXG5cdFx0XHRtZW51SXRlbXM6IFtdLCAvLyBkdW1teSBtZW51IGl0ZW1zXG5cdFx0XHRkaXJlY3Rvcnk6IGZhbHNlXG5cdFx0fTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmRcIik7XG5cdGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXNvdXJjZVwiLCByZXNvdXJjZSk7XG5cdGUuc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIG5hbWUpO1xuXHQvL2xpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRsaW5rLmlubmVySFRNTCA9IG5hbWU7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHJlc291cmNlKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29uZmlndXJlXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuXHRjb25maWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9kZWxldGVQYXRoKGFwcC5jd2QrXCIvXCIrbmFtZSk7XG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5VSS1Db250ZXh0LU1lbnVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmUgVUktQ29udGV4dC1NZW51XCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSwgdHJ1ZSk7XG5cdGlzSW1hZ2UgPSAvKFxcLmpwZ3xcXC5wbmd8XFwuZ2lmfFxcLmpwZWd8XFwud2VicCkvaS50ZXN0KHJlc291cmNlKTtcblx0aWYgKGlzSW1hZ2UpIHtcblx0XHR2YXIgdGh1bWIgPSByZXNvdXJjZS5yZXBsYWNlKC9cXHMvZywgXCIlMjBcIik7XG5cdFx0aWYgKCEvKFxcLndlYnB8XFwuZ2lmKS9pLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRvbid0IHRodW1ibmFpbCB3ZWJwIG9yIGdpZlxuXHRcdFx0dmFyIHJQYXRoID0gdGh1bWIuc3BsaXQoXCIvXCIpO1xuXHRcdFx0dmFyIHRodW1iID0gclBhdGhbclBhdGgubGVuZ3RoIC0gMV07XG5cdFx0XHRyUGF0aC5zcGxpY2UoclBhdGgubGVuZ3RoIC0gMSwgMSk7XG5cdFx0XHRyUGF0aC5wdXNoKFwiREhUaHVtYnNcIik7XG5cdFx0XHRpZiAoKHdpbmRvdy5pbm5lcldpZHRoIDwgNjQxICYmIGFwcC50aHVtYlNpemUpIHx8ICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY0MCAmJiAhYXBwLnRodW1iU2l6ZSkpIHsgLy8gdXNlIGhpLWRwaSB0aHVtYm5haWxzIGJ5IGRlZmF1bHRcblx0XHRcdFx0clBhdGgucHVzaChcIjEwMjRcIik7XG5cdFx0XHR9XG5cdFx0XHRyUGF0aC5wdXNoKHRodW1iICsgXCIuanBnXCIpO1xuXHRcdFx0dGh1bWIgPSByUGF0aC5qb2luKFwiL1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGh1bWIgPSByZXNvdXJjZTtcblx0XHR9XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgKyB0aHVtYiArIFwiJyk7XCIpOyAvL3Jlc291cmNlK1wiJyk7XCIpO1xuXHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEltYWdlXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGUuYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0aWYgKC9eKC4qXFwvKXswLDF9W15cXC5dKi57MX0kLy50ZXN0KHJlc291cmNlKSkgeyAvLyBkZXRlY3QgZm9sZGVyc1xuXHRcdFx0Y29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSA9IHRydWU7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgIT0gXCJMSVwiKSB7XG5cdFx0XHRcdFx0b3BlbkZvbGRlcihyZXNvdXJjZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBGb2xkZXJcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghY29udGV4dE1lbnUpIHtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlIGVkaXRcIik7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkVkaXRcIik7XG5cdFx0XHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YXBwLnJlcXVlc3QoXCJHRVRcIiwgcmVzb3VyY2UgKyBcIj9jYWNoZT1cIiArIERhdGUubm93KCksIFwiXCIsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0YXBwLm9wZW5QYW5lKCdlZGl0JywgbmFtZSwge1xuXHRcdFx0XHRcdFx0XHRcInJlc291cmNlXCI6IGFwcC5jd2QgKyBcIi9cIiArIG5hbWUsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiByZXNwb25zZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdFx0ZS5hcHBlbmRDaGlsZChlZGl0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9cdEV4cGVyaW1lbnRhbC4uXG5cdGlmIChjb250ZXh0TWVudSkge1xuXHRcdHZhciBtZW51ID0gbmV3IENvbnRleHRNZW51KGNvbnRleHRNZW51RGF0YSk7XG5cdFx0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIHN0eWxlID0gZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcblx0XHRcdGlmIChzdHlsZS5zZWFyY2goXCJzaG93TWVudVwiKSA8IDApIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0W10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd01lbnVcIiksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpdGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnJlcGxhY2UoXCJzaG93TWVudVwiLFwiXCIpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0eWxlICsgXCIgc2hvd01lbnVcIik7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRpZiAoaXNJbWFnZSkge1xuXHRcdFx0ZS5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsaW5rLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cdGlmICghIWNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkpIHtcblx0XHRlLmFwcGVuZENoaWxkKGNvbmZpZ3VyZSk7XG5cdH1cblxuXHRmb3IgKGkgaW4gb3B0aW9ucykge1xuXHRcdGUuc2V0QXR0cmlidXRlKGksIG9wdGlvbnNbaV0pO1xuXHR9XG5cdHJldHVybiBlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ29udGV4dE1lbnUob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQ29udGV4dC1NZW51XCIpO1xuXG5cdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0aWYgKG9wdGlvbnMuZGlyZWN0b3J5ID09IHRydWUpIHtcblx0XHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEaXJlY3RvcnkgVUktQ29udGV4dC1NZW51XCIpO1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5kaXJlY3RvcnlNZW51SXRlbXM7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBcIjxhIGNsYXNzPSdpY29uJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTp1cmwoL2FwcC9kYXRhLzE5Mi9kYXJrL29wZW4ucG5nKTsnIGhyZWY9J2phdmFzY3JpcHQ6b3BlbkZvbGRlcihcXFwiXCIgKyBvcHRpb25zLnJlc291cmNlICsgXCJcXFwiKTsnIHRpdGxlPSdPcGVuJz5PcGVuPC9hPlwiO1xuXHR9XG5cdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5tZW51SXRlbXM7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBcIjxhIHRhcmdldD0nX2JsYW5rJyBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9kb3dubG9hZC5wbmcpOycgaHJlZj0nXCIgKyBvcHRpb25zLnJlc291cmNlICsgXCInIHRpdGxlPSdPcGVuJz5PcGVuPC9hPlwiO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIG9wdGlvbnMucmVzb3VyY2UpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIG9wdGlvbnMubmFtZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImljb25cIik7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgbWVudUl0ZW0uaWNvbiArIFwiKVwiKTtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRtZW51SXRlbS5jbGljayhldnQpO1xuXHRcdH0sIHRydWUpO1xuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdH0pO1xufTtcbiIsIiBmdW5jdGlvbiBEYXRhUGFuZSAodHlwZSwgbmFtZSwgZGF0YSkge1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlwiLFxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHR0aXRsZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdHNob3dUaXRsZSA9IGZhbHNlLFxuICAgICAgICBzaG93RW50cnkgPSBmYWxzZSxcbiAgICAgICAgc2hvd1RpdGxlRW50cnkgPSBmYWxzZSxcblx0XHRjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgdXBsb2FkID0gbnVsbCxcbiAgICAgICAgZWRpdFdpZGdldCA9IG51bGwsXG5cdFx0YXBwbGV0ID0gbnVsbDtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZVwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnlcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRvbmVcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpO1xuXHRkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKHRydWUpLCB0cnVlKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJYXCIpO1xuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCgpLCB0cnVlKTtcbiAgICBpZiAoISFkYXRhLmFwcGxldCkge1xuICAgICAgICAvLyBsb2FkIGFwcGxldCBmb3JtIGRhdGEuYXBwbGV0XG4gICAgICAgIGFwcGxldCA9IG5ldyBBcHBsZXQoZGF0YS5hcHBsZXQubmFtZSwge29wZW46ICghISBkYXRhLmFwcGxldC5vcGVuID8gZGF0YS5hcHBsZXQub3BlbiA6IG51bGwpfSk7XG5cdFx0YXBwbGV0LmRhdGFQYW5lID0gdGhpczsgLy8gd29uJ3QgYmUgbmVlZGVkIG9uY2UgRGF0YVBhbmUgaXMgZGVwcmVjYXRlZFxuXHRcdHRoaXMuYXBwbGV0ID0gYXBwbGV0O1xuXHRcdGNvbnRhaW5lciA9IGFwcGxldC5kaXY7XG4gICAgfSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90b3VjaC5wbmcpXCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cdFx0XHRjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL21rZGlyLnBuZyk7XCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgdXBsb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJtdWx0aXBsZVwiKTtcblx0XHRcdFx0dGl0bGVTdHJpbmcgPSAnPGltZyBzcmM9XCIvYXBwL2RhdGEvdXBsb2FkLnBuZ1wiIHRpdGxlPVwiVXBsb2FkIEZpbGVzXCI+PHNwYW4+VXBsb2FkIEZpbGVzPC9zcGFuPic7XG5cdFx0XHRcdHNob3dUaXRsZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlZpZXcgRmlsZVwiO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCEhIGRhdGEuaWNvbikge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrZGF0YS5pY29uK1wiKTtcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdGV4dDIucG5nKTtcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVTdHJpbmc7XG5cdFx0aWYgKHNob3dUaXRsZSkge1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZihkYXRhKT09J3VuZGVmaW5lZCcgfHwgdHlwZW9mKGRhdGEuY29udHJvbHMpID09ICd1bmRlZmluZWQnIHx8IGRhdGEuY29udHJvbHMgPT0gdHJ1ZSkge1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKTtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXHRcdH1cblx0XHRpZiAoISFkYXRhICYmICEhIGRhdGEuY2xhc3MpIHtcblx0XHRcdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RhdGEuY2xhc3MpO1xuXHRcdH1cbiAgICAgICAgaWYgKCEhIHVwbG9hZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVwbG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dUaXRsZUVudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbnRyeSk7XG4gICAgICAgICAgICB0aXRsZUVudHJ5LnZhbHVlID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0VudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgaWYgKCEhIGRhdGEudGV4dCkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnZhbHVlID0gZGF0YS50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZWQgdG8gYWRkIFwiZG9uZVwiIGJ1dHRvbiBoZXJlXG4gICAgfVxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXHR0aGlzLmRvbmUgPSBkb25lO1xuXHR0aGlzLmVudHJ5ID0gZW50cnk7XG5cdHRoaXMucGFuZVRpdGxlID0gdGl0bGU7XG5cdHRoaXMudGl0bGVFbnRyeSA9IHRpdGxlRW50cnk7XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IHVwbG9hZDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5zbmFwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuXHR0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RpcmVjdGlvbik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICBwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcbiAgICBwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuZ2V0Q2xvc2VNZXRob2QgPSBmdW5jdGlvbiAoc2F2ZSkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHR2YXIgbGVhdmVPcGVuID0gZmFsc2U7XG5cdFx0aWYgKHNhdmUpIHtcblx0XHRcdHN3aXRjaCAocGFuZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNhdmVUZXh0KGFwcC5jd2QrXCIvXCIrcGFuZS50aXRsZUVudHJ5LnZhbHVlLCBwYW5lLmVudHJ5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICAgICAgbWFrZURpcmVjdG9yeShwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZEZpbGVzKHBhbmUpO1xuXHRcdFx0XHRcdGxlYXZlT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgXHRcdFx0c2F2ZVRleHQoYXBwLmN3ZCtcIi9cIitwYW5lLnRpdGxlRW50cnkudmFsdWUsIHBhbmUuZW50cnkudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0XHRpZiAoIWxlYXZlT3Blbikge1xuXHRcdFx0cGFuZS5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lLmNvbnRhaW5lcik7XG5cdFx0XHRwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdFx0fVxuXHRcdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVBhbmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZyYW1lKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSxcblx0XHR2aWV3ID0gbnVsbDtcblx0bWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUZyYW1lXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBtYWluO1xuXHRpZiAoISFvcHRpb25zICYmICEhb3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0dmlldyA9IG9wdGlvbnMuZWxlbWVudDtcblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlIFwidGV4dFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk2MCkge1xuXHRcdFx0XHR2aWV3LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjczNXB4O1wiKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjb2RlbWlycm9yXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNhbnZhc1wiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwid2ViZ2xcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdG1haW4uYXBwZW5kQ2hpbGQodmlldyk7XG5cdHRoaXMuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTWVudSh0eXBlLCBvcHRpb25zKSB7XHJcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxyXG5cdFx0bWVudUl0ZW1zID0gW10sXHJcblx0XHRtZW51SXRlbSA9IG51bGwsXHJcblx0XHRtZW51ID0gdGhpcyxcclxuXHRcdG0gPSAwO1xyXG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudVwiKTtcclxuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcclxuXHR0aGlzLmFwcGxldCA9IG51bGw7XHJcbiAgICBpZiAoISEgb3B0aW9ucykgeyAvLyBtYWtlIHN1cmUgb3B0aW9ucyBhcmUgZGVmaW5lZFxyXG4gICAgICAgIGlmICghISBvcHRpb25zLnRpdGxlQnV0dG9uKSB7XHJcblx0XHQgIG1lbnVJdGVtcy5wdXNoKG9wdGlvbnMudGl0bGVCdXR0b24pO1xyXG5cdCAgIH1cclxuICAgIH1cclxuXHR0eXBlID0gKCEhdHlwZSA/IHR5cGUgOiBcInN0YW5kYXJkXCIpO1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxyXG5cdFx0bWVudUl0ZW1zID0gbWVudUl0ZW1zLmNvbmNhdChVSS5kZWZhdWx0cy5tZW51Lm9wdGlvbnMpO1xyXG5cdFx0YnJlYWs7XHJcblx0Y2FzZSBcImN1c3RvbVwiOlxyXG5cdFx0bWVudUl0ZW1zID0gb3B0aW9ucy5tZW51SXRlbXM7XHJcblx0XHRicmVhaztcclxuXHR9XHJcblx0d2hpbGUgKG0gPCBtZW51SXRlbXMubGVuZ3RoKSB7XHJcblx0XHQvLyBjcmVhdGUgbWVudSBmb3IgYXBwXHJcblx0XHRtZW51SXRlbSA9IG1lbnVJdGVtc1ttXTtcclxuXHRcdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1lbnUtQnV0dG9uXCIpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIG1lbnVJdGVtLm5hbWUpO1xyXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xyXG5cdFx0KGZ1bmN0aW9uIChidXR0b25NZW51LCBidXR0b25NZW51SXRlbSkge1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuXHRcdFx0XHRidXR0b25NZW51SXRlbS5jbGljayhidXR0b25NZW51KTtcclxuXHRcdFx0fSwgdHJ1ZSk7XHJcblx0XHR9KShtZW51LCBtZW51SXRlbSk7XHJcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdFx0bSArPSAxO1xyXG5cdH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNb2RhbFdpbmRvdyh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Nb2RhbFdpbmRvd1wiKTtcblx0dGhpcy5lbGVtZW50ID0gc2VjdGlvbjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuXHRcdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRpZiAoISFvcHRpb25zLmljb24pIHtcblx0XHRpY29uLnNyYyA9IG9wdGlvbnMuaWNvbjtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHR5cGUsIG9wdGlvbnMsIHNlbGVjdGlvbkNhbGxiYWNrKSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImVkaXRhYmxlXCI6XG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb25zLnRpdGxlKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdGlmICghISBzZWxlY3Rpb25DYWxsYmFjaykge1xuXHRcdFx0XHRzZWxlY3Rpb25DYWxsYmFjayhldnQpO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWZWN0b3JFZGl0b3Iob3B0aW9ucykge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0aXRlbS5pbm5lckhUTUwgPSBcIjxoMj5cIiArIG9wdGlvbnMubmFtZSArIFwiPC9oMj5cIjtcblx0ZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHR9XG5cdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59O1xuIl19
