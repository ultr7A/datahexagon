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

},{"./ui/appicon.js":2,"./ui/card.js":3,"./ui/contextmenu.js":4,"./ui/datapane.js":5,"./ui/frame.js":6,"./ui/menu.js":7,"./ui/modalwindow.js":8,"./ui/sidebar.js":9,"./ui/sidebaritem.js":10,"./ui/toolbar.js":11,"./ui/vectoreditor.js":12}],2:[function(require,module,exports){
"use strict";

module.exports = function AppIcon(name, index) {
	var element = document.createElement("div"),
	    applet = app.applets[name](),
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

},{}],3:[function(require,module,exports){
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

},{"./contextmenu.js":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
                    saveText(pane);
                    break;
                case "mkdir":
                    makeDirectory(pane);
                    break;
                case "upload":
                    uploadFiles(pane);
                    leaveOpen = true;
                    break;
                case "edit":
                    saveText(pane);
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
	if (!!options.titleButton) {
		menuItems.push(options.titleButton);
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxD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QUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixLQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUNsQyxTQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFDOUQ7QUFDRCxRQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVEsRUFBRTtBQUM3QyxNQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxNQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDL0IsTUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUM3QyxXQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3BCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDVixNQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztDQUNILENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogbWFpbi5qcyAqL1xuXG4gd2luZG93LkNhcmQgPSByZXF1aXJlKFwiLi91aS9jYXJkLmpzXCIpO1xuIHdpbmRvdy5NZW51ID0gcmVxdWlyZShcIi4vdWkvbWVudS5qc1wiKTtcbiB3aW5kb3cuRGF0YVBhbmUgPSByZXF1aXJlKFwiLi91aS9kYXRhcGFuZS5qc1wiKTtcbiB3aW5kb3cuQ29udGV4dE1lbnUgPSByZXF1aXJlKFwiLi91aS9jb250ZXh0bWVudS5qc1wiKTtcbiB3aW5kb3cuQXBwSWNvbiA9IHJlcXVpcmUoXCIuL3VpL2FwcGljb24uanNcIik7XG4gd2luZG93LkZyYW1lID0gcmVxdWlyZShcIi4vdWkvZnJhbWUuanNcIik7XG4gd2luZG93LlNpZGViYXIgPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyLmpzXCIpO1xuIHdpbmRvdy5TaWRlYmFySXRlbSA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXJpdGVtLmpzXCIpO1xuIHdpbmRvdy5Nb2RhbFdpbmRvdyA9IHJlcXVpcmUoXCIuL3VpL21vZGFsd2luZG93LmpzXCIpO1xuIHdpbmRvdy5Ub29sYmFyID0gcmVxdWlyZShcIi4vdWkvdG9vbGJhci5qc1wiKTtcbiB3aW5kb3cuVmVjdG9yRWRpdG9yID0gcmVxdWlyZShcIi4vdWkvdmVjdG9yZWRpdG9yLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQXBwSWNvbihuYW1lLCBpbmRleCkge1xyXG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuXHRcdGFwcGxldCA9IGFwcC5hcHBsZXRzW25hbWVdKCksXHJcblx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiXCI7XHJcblx0aWYgKCEhaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdGRpcmVjdGlvbkNsYXNzID0gXCIgdXBcIjtcclxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIGRvd25cIjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUFwcC1JY29uXCIgKyBkaXJlY3Rpb25DbGFzcyk7XHJcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGFwcGxldC5pY29uICsgXCIpO1wiKTtcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IFwiPHNwYW4+XCIgKyBhcHBsZXQubmFtZSArIFwiPC9zcGFuPlwiO1xyXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0YXBwLm9wZW5QYW5lKFwiYXBwXCIsIGFwcGxldC5uYW1lLCB7XHJcblx0XHRcdGFwcGxldDoge1xyXG5cdFx0XHRcdG5hbWU6IG5hbWVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSwgdHJ1ZSk7XHJcbn07XHJcbiIsIi8qIENhcmQuanMgKi9cblxudmFyIENvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vY29udGV4dG1lbnUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FyZChuYW1lLCByZXNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0aSA9IG51bGwsXG5cdFx0dXAgPSBmYWxzZSxcblx0XHRpc0ltYWdlID0gZmFsc2UsXG5cdFx0Y29udGV4dE1lbnUgPSB0cnVlLFxuXHRcdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcblx0XHRjb25maWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRjb250ZXh0TWVudURhdGEgPSB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0cmVzb3VyY2U6IHJlc291cmNlLFxuXHRcdFx0bWVudUl0ZW1zOiBbXSwgLy8gZHVtbXkgbWVudSBpdGVtc1xuXHRcdFx0ZGlyZWN0b3J5OiBmYWxzZVxuXHRcdH07XG5cdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkXCIpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgcmVzb3VyY2UpO1xuXHRlLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBuYW1lKTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblx0bGluay5pbm5lckhUTUwgPSBuYW1lO1xuXHQvL2xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCByZXNvdXJjZSk7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbmZpZ3VyZVwiKTtcblx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0Y29uZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vZGVsZXRlUGF0aChhcHAuY3dkK1wiL1wiK25hbWUpO1xuXHRcdGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuVUktQ29udGV4dC1NZW51XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlIFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sIHRydWUpO1xuXHRpc0ltYWdlID0gLyhcXC5qcGd8XFwucG5nfFxcLmdpZnxcXC5qcGVnfFxcLndlYnApL2kudGVzdChyZXNvdXJjZSk7XG5cdGlmIChpc0ltYWdlKSB7XG5cdFx0dmFyIHRodW1iID0gcmVzb3VyY2UucmVwbGFjZSgvXFxzL2csIFwiJTIwXCIpO1xuXHRcdGlmICghLyhcXC53ZWJwfFxcLmdpZikvaS50ZXN0KHJlc291cmNlKSkgeyAvLyBkb24ndCB0aHVtYm5haWwgd2VicCBvciBnaWZcblx0XHRcdHZhciByUGF0aCA9IHRodW1iLnNwbGl0KFwiL1wiKTtcblx0XHRcdHZhciB0aHVtYiA9IHJQYXRoW3JQYXRoLmxlbmd0aCAtIDFdO1xuXHRcdFx0clBhdGguc3BsaWNlKHJQYXRoLmxlbmd0aCAtIDEsIDEpO1xuXHRcdFx0clBhdGgucHVzaChcIkRIVGh1bWJzXCIpO1xuXHRcdFx0aWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MSAmJiBhcHAudGh1bWJTaXplKSB8fCAod2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgIWFwcC50aHVtYlNpemUpKSB7IC8vIHVzZSBoaS1kcGkgdGh1bWJuYWlscyBieSBkZWZhdWx0XG5cdFx0XHRcdHJQYXRoLnB1c2goXCIxMDI0XCIpO1xuXHRcdFx0fVxuXHRcdFx0clBhdGgucHVzaCh0aHVtYiArIFwiLmpwZ1wiKTtcblx0XHRcdHRodW1iID0gclBhdGguam9pbihcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iID0gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1wiICsgdGh1bWIgKyBcIicpO1wiKTsgLy9yZXNvdXJjZStcIicpO1wiKTtcblx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBJbWFnZVwiKTtcblx0fSBlbHNlIHtcblx0XHRlLmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdGlmICgvXiguKlxcLyl7MCwxfVteXFwuXSouezF9JC8udGVzdChyZXNvdXJjZSkpIHsgLy8gZGV0ZWN0IGZvbGRlcnNcblx0XHRcdGNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkgPSB0cnVlO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9IFwiTElcIikge1xuXHRcdFx0XHRcdG9wZW5Gb2xkZXIocmVzb3VyY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgRm9sZGVyXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWNvbnRleHRNZW51KSB7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZSBlZGl0XCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFZGl0XCIpO1xuXHRcdFx0XHRlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGFwcC5yZXF1ZXN0KFwiR0VUXCIsIHJlc291cmNlICsgXCI/Y2FjaGU9XCIgKyBEYXRlLm5vdygpLCBcIlwiLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdGFwcC5vcGVuUGFuZSgnZWRpdCcsIG5hbWUsIHtcblx0XHRcdFx0XHRcdFx0XCJyZXNvdXJjZVwiOiBhcHAuY3dkICsgXCIvXCIgKyBuYW1lLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogcmVzcG9uc2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cdFx0XHRcdGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vXHRFeHBlcmltZW50YWwuLlxuXHRpZiAoY29udGV4dE1lbnUpIHtcblx0XHR2YXIgbWVudSA9IG5ldyBDb250ZXh0TWVudShjb250ZXh0TWVudURhdGEpO1xuXHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBzdHlsZSA9IGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG5cdFx0XHRpZiAoc3R5bGUuc2VhcmNoKFwic2hvd01lbnVcIikgPCAwKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dNZW51XCIpLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaXRlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5yZXBsYWNlKFwic2hvd01lbnVcIixcIlwiKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHlsZSArIFwiIHNob3dNZW51XCIpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0aWYgKGlzSW1hZ2UpIHtcblx0XHRcdGUuYXBwZW5kQ2hpbGQobWVudS5lbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGluay5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH1cblx0fVxuXHRpZiAoISFjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5KSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChjb25maWd1cmUpO1xuXHR9XG5cblx0Zm9yIChpIGluIG9wdGlvbnMpIHtcblx0XHRlLnNldEF0dHJpYnV0ZShpLCBvcHRpb25zW2ldKTtcblx0fVxuXHRyZXR1cm4gZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvbnRleHRNZW51KG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUNvbnRleHQtTWVudVwiKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLmRpcmVjdG9yeSA9PSB0cnVlKSB7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGlyZWN0b3J5IFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMuZGlyZWN0b3J5TWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9vcGVuLnBuZyk7JyBocmVmPSdqYXZhc2NyaXB0Om9wZW5Gb2xkZXIoXFxcIlwiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiXFxcIik7JyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2RhcmsvZG93bmxvYWQucG5nKTsnIGhyZWY9J1wiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiJyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1yZXNvdXJjZVwiLCBvcHRpb25zLnJlc291cmNlKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBvcHRpb25zLm5hbWUpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHR9LCB0cnVlKTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHR9KTtcbn07XG4iLCIgZnVuY3Rpb24gRGF0YVBhbmUgKHR5cGUsIG5hbWUsIGRhdGEpIHtcblx0Y29uc29sZS5sb2coZGF0YSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIHRpdGxlU3RyaW5nID0gXCJcIixcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0dGl0bGVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcblx0XHRzaG93VGl0bGUgPSBmYWxzZSxcbiAgICAgICAgc2hvd0VudHJ5ID0gZmFsc2UsXG4gICAgICAgIHNob3dUaXRsZUVudHJ5ID0gZmFsc2UsXG5cdFx0Y2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIHVwbG9hZCA9IG51bGwsXG4gICAgICAgIGVkaXRXaWRnZXQgPSBudWxsLFxuXHRcdGFwcGxldCA9IG51bGw7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmVcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5XCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRG9uZVwiKTtcblx0ZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCh0cnVlKSwgdHJ1ZSk7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VcIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiWFwiKTtcblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QoKSwgdHJ1ZSk7XG4gICAgaWYgKCEhZGF0YS5hcHBsZXQpIHtcbiAgICAgICAgLy8gbG9hZCBhcHBsZXQgZm9ybSBkYXRhLmFwcGxldFxuICAgICAgICBhcHBsZXQgPSBuZXcgQXBwbGV0KGRhdGEuYXBwbGV0Lm5hbWUsIHtvcGVuOiAoISEgZGF0YS5hcHBsZXQub3BlbiA/IGRhdGEuYXBwbGV0Lm9wZW4gOiBudWxsKX0pO1xuXHRcdGFwcGxldC5kYXRhUGFuZSA9IHRoaXM7IC8vIHdvbid0IGJlIG5lZWRlZCBvbmNlIERhdGFQYW5lIGlzIGRlcHJlY2F0ZWRcblx0XHR0aGlzLmFwcGxldCA9IGFwcGxldDtcblx0XHRjb250YWluZXIgPSBhcHBsZXQuZGl2O1xuICAgIH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdG91Y2gucG5nKVwiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1rZGlyXCI6XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS9ta2Rpci5wbmcpO1wiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxuICAgICAgICAgICAgICAgIHVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XG5cdFx0XHRcdHRpdGxlU3RyaW5nID0gJzxpbWcgc3JjPVwiL2FwcC9kYXRhL3VwbG9hZC5wbmdcIiB0aXRsZT1cIlVwbG9hZCBGaWxlc1wiPjxzcGFuPlVwbG9hZCBGaWxlczwvc3Bhbj4nO1xuXHRcdFx0XHRzaG93VGl0bGUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmlld1wiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gXCJWaWV3IEZpbGVcIjtcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdGlmICghISBkYXRhLmljb24pIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK2RhdGEuaWNvbitcIik7XCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RleHQyLnBuZyk7XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xuXHRcdGlmIChzaG93VGl0bGUpIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YoZGF0YSk9PSd1bmRlZmluZWQnIHx8IHR5cGVvZihkYXRhLmNvbnRyb2xzKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhLmNvbnRyb2xzID09IHRydWUpIHtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlKTtcblx0XHR9XG5cdFx0aWYgKCEhZGF0YSAmJiAhISBkYXRhLmNsYXNzKSB7XG5cdFx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkYXRhLmNsYXNzKTtcblx0XHR9XG4gICAgICAgIGlmICghISB1cGxvYWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93VGl0bGVFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRW50cnkpO1xuICAgICAgICAgICAgdGl0bGVFbnRyeS52YWx1ZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgIGlmICghISBkYXRhLnRleHQpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS52YWx1ZSA9IGRhdGEudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VkIHRvIGFkZCBcImRvbmVcIiBidXR0b24gaGVyZVxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy5kb25lID0gZG9uZTtcblx0dGhpcy5lbnRyeSA9IGVudHJ5O1xuXHR0aGlzLnBhbmVUaXRsZSA9IHRpdGxlO1xuXHR0aGlzLnRpdGxlRW50cnkgPSB0aXRsZUVudHJ5O1xuICAgIHRoaXMudXBsb2FkSW5wdXQgPSB1cGxvYWQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuc25hcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcblx0dGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkaXJlY3Rpb24pO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcGFuZS5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lLmNvbnRhaW5lcik7XG4gICAgcGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xuXHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xufTtcblxuRGF0YVBhbmUucHJvdG90eXBlLmdldENsb3NlTWV0aG9kID0gZnVuY3Rpb24gKHNhdmUpIHtcbiAgICB2YXIgcGFuZXMgPSBhcHAucGFuZXMsXG4gICAgICAgIHBhbmUgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0dmFyIGxlYXZlT3BlbiA9IGZhbHNlO1xuXHRcdGlmIChzYXZlKSB7XG5cdFx0XHRzd2l0Y2ggKHBhbmUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxuICAgICAgICAgICAgICAgICAgICBzYXZlVGV4dChwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICAgICAgbWFrZURpcmVjdG9yeShwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZEZpbGVzKHBhbmUpO1xuXHRcdFx0XHRcdGxlYXZlT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgXHRcdFx0c2F2ZVRleHQocGFuZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdGlmICghbGVhdmVPcGVuKSB7XG5cdFx0XHRwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcblx0XHRcdHBhbmVzLnNwbGljZShwYW5lcy5pbmRleE9mKHBhbmUpKTtcblx0XHR9XG5cdFx0YXBwLnNob3dNZW51KFwibm9uZVwiKTtcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhUGFuZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNZW51KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdG1lbnVJdGVtcyA9IFtdLFxuXHRcdG1lbnVJdGVtID0gbnVsbCxcblx0XHRtZW51ID0gdGhpcyxcblx0XHRtID0gMDtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1NZW51XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0dGhpcy5hcHBsZXQgPSBudWxsO1xuXHRpZiAoISFvcHRpb25zLnRpdGxlQnV0dG9uKSB7XG5cdFx0bWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XG5cdH1cblx0dHlwZSA9ICghIXR5cGUgPyB0eXBlIDogXCJzdGFuZGFyZFwiKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdG1lbnVJdGVtcyA9IG1lbnVJdGVtcy5jb25jYXQoVUkuZGVmYXVsdHMubWVudS5vcHRpb25zKTtcblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXHRcdG1lbnVJdGVtcyA9IG9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGJyZWFrO1xuXHR9XG5cdHdoaWxlIChtIDwgbWVudUl0ZW1zLmxlbmd0aCkge1xuXHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcblx0XHRtZW51SXRlbSA9IG1lbnVJdGVtc1ttXTtcblx0XHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBtZW51SXRlbS5uYW1lKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0KGZ1bmN0aW9uIChidXR0b25NZW51LCBidXR0b25NZW51SXRlbSkge1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSkobWVudSwgbWVudUl0ZW0pO1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdFx0bSArPSAxO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBNb2RhbFdpbmRvdyh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Nb2RhbFdpbmRvd1wiKTtcblx0dGhpcy5lbGVtZW50ID0gc2VjdGlvbjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuXHRcdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRpZiAoISFvcHRpb25zLmljb24pIHtcblx0XHRpY29uLnNyYyA9IG9wdGlvbnMuaWNvbjtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJJdGVtXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblx0XHRkaXYuaW5uZXJIVE1MID0gb3B0aW9ucy50aXRsZTtcblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvb2xiYXIodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVG9vbGJhclwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRicmVhaztcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVmVjdG9yRWRpdG9yKG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVZlY3Rvci1FZGl0b3JcIik7XG5cdGl0ZW0uaW5uZXJIVE1MID0gXCI8aDI+XCIgKyBvcHRpb25zLm5hbWUgKyBcIjwvaDI+XCI7XG5cdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgZmFsc2UpO1xuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdH0pO1xufTtcbiJdfQ==
