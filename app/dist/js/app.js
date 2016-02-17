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

console.log(Card, Menu, DataPane);
console.log("test2");
//test

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
	console.log("name", name);
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
		item.innerHTML = "<a target='_blank' class='icon' style='background-image:url(/app/data/192/dark/download.png);' href='" + options.resource + "' >Download</a>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxD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LEtBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ2xDLFNBQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztFQUM5RDtBQUNELFFBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsUUFBUSxFQUFFO0FBQzdDLE1BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLE1BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMvQixNQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzdDLFdBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDcEIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNWLE1BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBtYWluLmpzICovXG5cbiB3aW5kb3cuQ2FyZCA9IHJlcXVpcmUoXCIuL3VpL2NhcmQuanNcIik7XG4gd2luZG93Lk1lbnUgPSByZXF1aXJlKFwiLi91aS9tZW51LmpzXCIpO1xuIHdpbmRvdy5EYXRhUGFuZSA9IHJlcXVpcmUoXCIuL3VpL2RhdGFwYW5lLmpzXCIpO1xuIHdpbmRvdy5Db250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL3VpL2NvbnRleHRtZW51LmpzXCIpO1xuIHdpbmRvdy5BcHBJY29uID0gcmVxdWlyZShcIi4vdWkvYXBwaWNvbi5qc1wiKTtcbiB3aW5kb3cuRnJhbWUgPSByZXF1aXJlKFwiLi91aS9mcmFtZS5qc1wiKTtcbiB3aW5kb3cuU2lkZWJhciA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXIuanNcIik7XG4gd2luZG93LlNpZGViYXJJdGVtID0gcmVxdWlyZShcIi4vdWkvc2lkZWJhcml0ZW0uanNcIik7XG4gd2luZG93Lk1vZGFsV2luZG93ID0gcmVxdWlyZShcIi4vdWkvbW9kYWx3aW5kb3cuanNcIik7XG4gd2luZG93LlRvb2xiYXIgPSByZXF1aXJlKFwiLi91aS90b29sYmFyLmpzXCIpO1xuIHdpbmRvdy5WZWN0b3JFZGl0b3IgPSByZXF1aXJlKFwiLi91aS92ZWN0b3JlZGl0b3IuanNcIik7XG5cbmNvbnNvbGUubG9nKENhcmQsIE1lbnUsIERhdGFQYW5lKTtcbmNvbnNvbGUubG9nKFwidGVzdDJcIik7XG4vL3Rlc3QiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcEljb24obmFtZSwgaW5kZXgpIHtcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGFwcGxldCA9IGFwcC5hcHBsZXRzW25hbWVdKCksXG5cdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xuXHRpZiAoISFpbmRleCkge1xuXHRcdGlmIChpbmRleCA9PSAxKSB7XG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XG5cdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIGRvd25cIjtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpO1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQXBwLUljb25cIiArIGRpcmVjdGlvbkNsYXNzKTtcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGFwcGxldC5pY29uICsgXCIpO1wiKTtcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgYXBwbGV0Lm5hbWUgKyBcIjwvc3Bhbj5cIjtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5vcGVuUGFuZShcImFwcFwiLCBhcHBsZXQubmFtZSwge1xuXHRcdFx0YXBwbGV0OiB7XG5cdFx0XHRcdG5hbWU6IG5hbWVcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgdHJ1ZSk7XG59OyIsIi8qIENhcmQuanMgKi9cbnZhciBDb250ZXh0TWVudSA9IHJlcXVpcmUoXCIuL2NvbnRleHRtZW51LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhcmQobmFtZSwgcmVzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdGkgPSBudWxsLFxuXHRcdHVwID0gZmFsc2UsXG5cdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdGNvbnRleHRNZW51ID0gdHJ1ZSxcblx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG5cdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0Y29udGV4dE1lbnVEYXRhID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHJlc291cmNlOiByZXNvdXJjZSxcblx0XHRcdG1lbnVJdGVtczogW10sIC8vIGR1bW15IG1lbnUgaXRlbXNcblx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHR9O1xuXHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZFwiKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgbmFtZSk7XG5cdC8vbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0Ly9saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcmVzb3VyY2UpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maWd1cmVcIik7XG5cdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRjb25maWd1cmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdGNvbmZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2RlbGV0ZVBhdGgoYXBwLmN3ZCtcIi9cIituYW1lKTtcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlVJLUNvbnRleHQtTWVudVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZSBVSS1Db250ZXh0LU1lbnVcIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LCB0cnVlKTtcblx0aXNJbWFnZSA9IC8oXFwuanBnfFxcLnBuZ3xcXC5naWZ8XFwuanBlZ3xcXC53ZWJwKS9pLnRlc3QocmVzb3VyY2UpO1xuXHRpZiAoaXNJbWFnZSkge1xuXHRcdHZhciB0aHVtYiA9IHJlc291cmNlLnJlcGxhY2UoL1xccy9nLCBcIiUyMFwiKTtcblx0XHRpZiAoIS8oXFwud2VicHxcXC5naWYpL2kudGVzdChyZXNvdXJjZSkpIHsgLy8gZG9uJ3QgdGh1bWJuYWlsIHdlYnAgb3IgZ2lmXG5cdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHR2YXIgdGh1bWIgPSByUGF0aFtyUGF0aC5sZW5ndGggLSAxXTtcblx0XHRcdHJQYXRoLnNwbGljZShyUGF0aC5sZW5ndGggLSAxLCAxKTtcblx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdGlmICgod2luZG93LmlubmVyV2lkdGggPCA2NDEgJiYgYXBwLnRodW1iU2l6ZSkgfHwgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmICFhcHAudGh1bWJTaXplKSkgeyAvLyB1c2UgaGktZHBpIHRodW1ibmFpbHMgYnkgZGVmYXVsdFxuXHRcdFx0XHRyUGF0aC5wdXNoKFwiMTAyNFwiKTtcblx0XHRcdH1cblx0XHRcdHJQYXRoLnB1c2godGh1bWIgKyBcIi5qcGdcIik7XG5cdFx0XHR0aHVtYiA9IHJQYXRoLmpvaW4oXCIvXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYiA9IHJlc291cmNlO1xuXHRcdH1cblx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmQgSW1hZ2VcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRpZiAoL14oLipcXC8pezAsMX1bXlxcLl0qLnsxfSQvLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRldGVjdCBmb2xkZXJzXG5cdFx0XHRjb250ZXh0TWVudURhdGEuZGlyZWN0b3J5ID0gdHJ1ZTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRvcGVuRm9sZGVyKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJDYXJkIEZvbGRlclwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjb250ZXh0TWVudSkge1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2UgZWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRWRpdFwiKTtcblx0XHRcdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhcHAucmVxdWVzdChcIkdFVFwiLCByZXNvdXJjZSArIFwiP2NhY2hlPVwiICsgRGF0ZS5ub3coKSwgXCJcIiwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRhcHAub3BlblBhbmUoJ2VkaXQnLCBuYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1x0RXhwZXJpbWVudGFsLi5cblx0aWYgKGNvbnRleHRNZW51KSB7XG5cdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgc3R5bGUgPSBlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0eWxlICsgXCIgc2hvd01lbnVcIik7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRpZiAoaXNJbWFnZSkge1xuXHRcdFx0ZS5hcHBlbmRDaGlsZChtZW51LmVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsaW5rLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cdGlmICghIWNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkpIHtcblx0XHRlLmFwcGVuZENoaWxkKGNvbmZpZ3VyZSk7XG5cdH1cblxuXHRmb3IgKGkgaW4gb3B0aW9ucykge1xuXHRcdGUuc2V0QXR0cmlidXRlKGksIG9wdGlvbnNbaV0pO1xuXHR9XG5cdHJldHVybiBlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvbnRleHRNZW51KG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUNvbnRleHQtTWVudVwiKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdGlmIChvcHRpb25zLmRpcmVjdG9yeSA9PSB0cnVlKSB7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGlyZWN0b3J5IFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMuZGlyZWN0b3J5TWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSBjbGFzcz0naWNvbicgc3R5bGU9J2JhY2tncm91bmQtaW1hZ2U6dXJsKC9hcHAvZGF0YS8xOTIvZGFyay9vcGVuLnBuZyk7JyBocmVmPSdqYXZhc2NyaXB0Om9wZW5Gb2xkZXIoXFxcIlwiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiXFxcIik7JyB0aXRsZT0nT3Blbic+T3BlbjwvYT5cIjtcblx0fVxuXHRpZiAob3B0aW9ucy5tZW51SXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRvcHRpb25zLm1lbnVJdGVtcyA9IFVJLmRlZmF1bHRzLmNvbnRleHRNZW51Lm9wdGlvbnMubWVudUl0ZW1zO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2RhcmsvZG93bmxvYWQucG5nKTsnIGhyZWY9J1wiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiJyA+RG93bmxvYWQ8L2E+XCI7XG5cdH1cblx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGl0ZW0uaW5uZXJIVE1MID0gbWVudUl0ZW0ubmFtZTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcmVzb3VyY2VcIiwgb3B0aW9ucy5yZXNvdXJjZSk7XG5cdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0fSk7XG59OyIsIiBmdW5jdGlvbiBEYXRhUGFuZSAodHlwZSwgbmFtZSwgZGF0YSkge1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlwiLFxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHR0aXRsZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLFxuXHRcdHNob3dUaXRsZSA9IGZhbHNlLFxuICAgICAgICBzaG93RW50cnkgPSBmYWxzZSxcbiAgICAgICAgc2hvd1RpdGxlRW50cnkgPSBmYWxzZSxcblx0XHRjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgdXBsb2FkID0gbnVsbCxcbiAgICAgICAgZWRpdFdpZGdldCA9IG51bGwsXG5cdFx0YXBwbGV0ID0gbnVsbDtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZVwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnlcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0ZG9uZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRvbmVcIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpO1xuXHRkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldENsb3NlTWV0aG9kKHRydWUpLCB0cnVlKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVwiKTtcblx0Y2xvc2Uuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJYXCIpO1xuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCgpLCB0cnVlKTtcbiAgICBpZiAoISFkYXRhLmFwcGxldCkge1xuICAgICAgICAvLyBsb2FkIGFwcGxldCBmb3JtIGRhdGEuYXBwbGV0XG4gICAgICAgIGFwcGxldCA9IG5ldyBBcHBsZXQoZGF0YS5hcHBsZXQubmFtZSwge29wZW46ICghISBkYXRhLmFwcGxldC5vcGVuID8gZGF0YS5hcHBsZXQub3BlbiA6IG51bGwpfSk7XG5cdFx0YXBwbGV0LmRhdGFQYW5lID0gdGhpczsgLy8gd29uJ3QgYmUgbmVlZGVkIG9uY2UgRGF0YVBhbmUgaXMgZGVwcmVjYXRlZFxuXHRcdHRoaXMuYXBwbGV0ID0gYXBwbGV0O1xuXHRcdGNvbnRhaW5lciA9IGFwcGxldC5kaXY7XG4gICAgfSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaFwiOlxuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS90b3VjaC5wbmcpXCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cdFx0XHRjYXNlIFwibWtkaXJcIjpcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL21rZGlyLnBuZyk7XCIpO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVFbnRyeSBpY29uXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBsb2FkXCI6XG4gICAgICAgICAgICAgICAgdXBsb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJtdWx0aXBsZVwiKTtcblx0XHRcdFx0dGl0bGVTdHJpbmcgPSAnPGltZyBzcmM9XCIvYXBwL2RhdGEvdXBsb2FkLnBuZ1wiIHRpdGxlPVwiVXBsb2FkIEZpbGVzXCI+PHNwYW4+VXBsb2FkIEZpbGVzPC9zcGFuPic7XG5cdFx0XHRcdHNob3dUaXRsZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSBcIlZpZXcgRmlsZVwiO1xuICAgICAgICAgICAgICAgIHNob3dFbnRyeSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlZGl0XCI6XG4gICAgICAgICAgICAgICAgdGl0bGVTdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCEhIGRhdGEuaWNvbikge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrZGF0YS5pY29uK1wiKTtcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdGV4dDIucG5nKTtcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVTdHJpbmc7XG5cdFx0aWYgKHNob3dUaXRsZSkge1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZihkYXRhKT09J3VuZGVmaW5lZCcgfHwgdHlwZW9mKGRhdGEuY29udHJvbHMpID09ICd1bmRlZmluZWQnIHx8IGRhdGEuY29udHJvbHMgPT0gdHJ1ZSkge1xuICAgICAgICBcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKTtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXHRcdH1cblx0XHRpZiAoISFkYXRhICYmICEhIGRhdGEuY2xhc3MpIHtcblx0XHRcdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RhdGEuY2xhc3MpO1xuXHRcdH1cbiAgICAgICAgaWYgKCEhIHVwbG9hZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVwbG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dUaXRsZUVudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbnRyeSk7XG4gICAgICAgICAgICB0aXRsZUVudHJ5LnZhbHVlID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0VudHJ5KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgaWYgKCEhIGRhdGEudGV4dCkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnZhbHVlID0gZGF0YS50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZWQgdG8gYWRkIFwiZG9uZVwiIGJ1dHRvbiBoZXJlXG4gICAgfVxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXHR0aGlzLmRvbmUgPSBkb25lO1xuXHR0aGlzLmVudHJ5ID0gZW50cnk7XG5cdHRoaXMucGFuZVRpdGxlID0gdGl0bGU7XG5cdHRoaXMudGl0bGVFbnRyeSA9IHRpdGxlRW50cnk7XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IHVwbG9hZDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbn07XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5zbmFwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuXHR0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RpcmVjdGlvbik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICBwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcbiAgICBwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuZ2V0Q2xvc2VNZXRob2QgPSBmdW5jdGlvbiAoc2F2ZSkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHR2YXIgbGVhdmVPcGVuID0gZmFsc2U7XG5cdFx0aWYgKHNhdmUpIHtcblx0XHRcdHN3aXRjaCAocGFuZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNhdmVUZXh0KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgICAgICBtYWtlRGlyZWN0b3J5KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZXMocGFuZSk7XG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICBcdFx0XHRzYXZlVGV4dChwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0aWYgKCFsZWF2ZU9wZW4pIHtcblx0XHRcdHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuXHRcdFx0cGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xuXHRcdH1cblx0XHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFQYW5lOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRnJhbWUodHlwZSwgb3B0aW9ucykge1xuXHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdHZpZXcgPSBudWxsO1xuXHRtYWluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktRnJhbWVcIik7XG5cdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdGlmICghIW9wdGlvbnMgJiYgISFvcHRpb25zLmVsZW1lbnQpIHtcblx0XHR2aWV3ID0gb3B0aW9ucy5lbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJ0ZXh0XCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwKSB7XG5cdFx0XHRcdHZpZXcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6NzM1cHg7XCIpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvZGVtaXJyb3JcIjpcblx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY2FudmFzXCI6XG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ3ZWJnbFwiOlxuXHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bWFpbi5hcHBlbmRDaGlsZCh2aWV3KTtcblx0dGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTWVudSh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKSxcblx0XHRtZW51SXRlbXMgPSBbXSxcblx0XHRtZW51SXRlbSA9IG51bGwsXG5cdFx0bWVudSA9IHRoaXMsXG5cdFx0bSA9IDA7XG5cdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudVwiKTtcblx0dGhpcy5lbGVtZW50ID0gYXNpZGU7XG5cdHRoaXMuYXBwbGV0ID0gbnVsbDtcblx0aWYgKCEhb3B0aW9ucy50aXRsZUJ1dHRvbikge1xuXHRcdG1lbnVJdGVtcy5wdXNoKG9wdGlvbnMudGl0bGVCdXR0b24pO1xuXHR9XG5cdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRjYXNlIFwic3RhbmRhcmRcIjpcblx0XHRtZW51SXRlbXMgPSBtZW51SXRlbXMuY29uY2F0KFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucyk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcblx0XHRicmVhaztcblx0fVxuXHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcblx0XHQvLyBjcmVhdGUgbWVudSBmb3IgYXBwXG5cdFx0bWVudUl0ZW0gPSBtZW51SXRlbXNbbV07XG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1lbnUtQnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiamF2YXNjcmlwdDp2b2lkKDApO1wiKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBtZW51SXRlbS5pY29uICsgXCIpXCIpO1xuXHRcdChmdW5jdGlvbiAoYnV0dG9uTWVudSwgYnV0dG9uTWVudUl0ZW0pIHtcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRidXR0b25NZW51SXRlbS5jbGljayhidXR0b25NZW51KTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChidXR0b24pO1xuXHRcdG0gKz0gMTtcblx0fVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE1vZGFsV2luZG93KHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0c2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLU1vZGFsV2luZG93XCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBzZWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cblx0XHRicmVhaztcblx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0YnJlYWs7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuXHRcdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLFxuXHRcdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRhc2lkZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVNpZGViYXJcIik7XG5cdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRpZiAoISFvcHRpb25zLmljb24pIHtcblx0XHRpY29uLnNyYyA9IG9wdGlvbnMuaWNvbjtcblx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChpY29uKTtcblx0fVxuXHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRoMy5pbm5lckhUTUwgPSBvcHRpb25zLnN1YnRpdGxlO1xuXHRhc2lkZS5hcHBlbmRDaGlsZChoMik7XG5cdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0YXNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdC8vIHN0YW5kYXJkIGZlYXR1cmVzXG5cdFx0Ly8gbWlnaHQgd2FudCBhIG1vZGUgd2hlcmUgaXQgZW5oYW5jZXMgLyBtZXJnZXMgd2l0aCB0aGUgbWVudVxuXHRcdGJyZWFrO1xuXHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0b3B0aW9ucy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlYmFySXRlbSkge1xuXHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTaWRlYmFySXRlbSh0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1TaWRlYmFySXRlbVwiKTtcblx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0ZGl2LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9vbGJhcih0eXBlLCBvcHRpb25zKSB7XG5cdHZhciBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcblx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJjdXN0b21cIjpcblxuXHRcdGJyZWFrO1xuXHR9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVmVjdG9yRWRpdG9yKG9wdGlvbnMpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcblx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLVZlY3Rvci1FZGl0b3JcIik7XG5cdGl0ZW0uaW5uZXJIVE1MID0gXCI8aDI+XCIgKyBvcHRpb25zLm5hbWUgKyBcIjwvaDI+XCI7XG5cdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0aWYgKG9wdGlvbnMubWVudUl0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0fVxuXHRvcHRpb25zLm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0fSwgZmFsc2UpO1xuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdH0pO1xufTsiXX0=
