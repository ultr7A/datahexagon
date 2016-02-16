(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* main.js */

"use strict";

var Card = require("./ui/card.js").Card;
var Menu = require("./ui/menu.js").Menu;
var DataPane = require("./ui/datapane.js").DataPane;
var ContextMenu = require("./ui/contextmenu.js").ContextMenu;
var AppIcon = require("./ui/appicon.js").AppIcon;
var Frame = require("./ui/frame.js").Frame;
var Sidebar = require("./ui/sidebar.js").Sidebar;
var SidebarItem = require("./ui/sidebaritem.js").SidebarItem;
var ModalWindow = require("./ui/modalwindow.js").ModalWindow;
var Toolbar = require("./ui/toolbar.js").Toolbar;
var VectorEditor = require("./ui/vectoreditor.js").VectorEditor;

},{"./ui/appicon.js":2,"./ui/card.js":3,"./ui/contextmenu.js":4,"./ui/datapane.js":5,"./ui/frame.js":6,"./ui/menu.js":7,"./ui/modalwindow.js":8,"./ui/sidebar.js":9,"./ui/sidebaritem.js":10,"./ui/toolbar.js":11,"./ui/vectoreditor.js":12}],2:[function(require,module,exports){
"use strict";

module.exports = {
	AppIcon: function AppIcon(name, index) {
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
	}
};

},{}],3:[function(require,module,exports){
"use strict";

module.exports = {
	Card: function Card(name, resource, options) {
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

			//		e.addEventListener("mouseout", function (evt) {
			//			var style = e.getAttribute("class");
			//			if (style.search("showMenu") > -1) {
			//				e.setAttribute("class", style.replace("showMenu", ""));
			//			}
			//
			//		}, true);
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
	}
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = {
	ContextMenu: function ContextMenu(options) {
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
	}
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
}

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

module.exports = {
    DataPane: DataPane
};

},{}],6:[function(require,module,exports){
"use strict";

module.exports = {
	Frame: function Frame(type, options) {
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
	}
};

},{}],7:[function(require,module,exports){
"use strict";

module.exports = {
	Menu: function Menu(type, options) {
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
	}
};

},{}],8:[function(require,module,exports){
"use strict";

module.exports = {
	ModalWindow: function ModalWindow(type, options) {
		var section = document.createElement("section");
		section.setAttribute("class", "UI-ModalWindow");
		this.element = section;
		switch (type) {
			case "standard":

				break;
			case "custom":

				break;
		}
	}
};

},{}],9:[function(require,module,exports){
"use strict";

module.exports = {
	Sidebar: function Sidebar(type, options) {
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
				break;
			case "custom":
				options.items.forEach(function (sidebarItem) {
					aside.appendChild(sidebarItem.element);
				});
				break;
		}
	}
};

},{}],10:[function(require,module,exports){
"use strict";

module.exports = {
	SidebarItem: function SidebarItem(type, options) {
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
	}
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = {
	Toolbar: function Toolbar(type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Toolbar");
		this.element = aside;
		switch (type) {
			case "standard":

				break;
			case "custom":

				break;
		}
	}
};

},{}],12:[function(require,module,exports){
"use strict";

module.exports = {
	VectorEditor: function VectorEditor(options) {
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
	}
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL0plcmVteS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy9hcHAuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9hcHBpY29uLmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvY2FyZC5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL2NvbnRleHRtZW51LmpzIiwiQzovZGV2ZWxvcG1lbnQvZGF0YWhleGFnb24uY29tL2FwcC9zcmMvanMvdWkvZGF0YXBhbmUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9mcmFtZS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL21lbnUuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9tb2RhbHdpbmRvdy5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3NpZGViYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS9zaWRlYmFyaXRlbS5qcyIsIkM6L2RldmVsb3BtZW50L2RhdGFoZXhhZ29uLmNvbS9hcHAvc3JjL2pzL3VpL3Rvb2xiYXIuanMiLCJDOi9kZXZlbG9wbWVudC9kYXRhaGV4YWdvbi5jb20vYXBwL3NyYy9qcy91aS92ZWN0b3JlZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxD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RyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDakQsS0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixNQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ2xDLFVBQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztHQUM5RDtBQUNELFNBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsUUFBUSxFQUFFO0FBQzdDLE9BQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLE9BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMvQixPQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzdDLFlBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNWLE9BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0VBQ0g7Q0FDRCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIG1haW4uanMgKi9cblxudmFyIENhcmQgPSByZXF1aXJlKFwiLi91aS9jYXJkLmpzXCIpLkNhcmQ7XG52YXIgTWVudSA9IHJlcXVpcmUoXCIuL3VpL21lbnUuanNcIikuTWVudTtcbnZhciBEYXRhUGFuZSA9IHJlcXVpcmUoXCIuL3VpL2RhdGFwYW5lLmpzXCIpLkRhdGFQYW5lO1xudmFyIENvbnRleHRNZW51ID0gcmVxdWlyZShcIi4vdWkvY29udGV4dG1lbnUuanNcIikuQ29udGV4dE1lbnU7XG52YXIgQXBwSWNvbiA9IHJlcXVpcmUoXCIuL3VpL2FwcGljb24uanNcIikuQXBwSWNvbjtcbnZhciBGcmFtZSA9IHJlcXVpcmUoXCIuL3VpL2ZyYW1lLmpzXCIpLkZyYW1lO1xudmFyIFNpZGViYXIgPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyLmpzXCIpLlNpZGViYXI7XG52YXIgU2lkZWJhckl0ZW0gPSByZXF1aXJlKFwiLi91aS9zaWRlYmFyaXRlbS5qc1wiKS5TaWRlYmFySXRlbTtcbnZhciBNb2RhbFdpbmRvdyA9IHJlcXVpcmUoXCIuL3VpL21vZGFsd2luZG93LmpzXCIpLk1vZGFsV2luZG93O1xudmFyIFRvb2xiYXIgPSByZXF1aXJlKFwiLi91aS90b29sYmFyLmpzXCIpLlRvb2xiYXI7XG52YXIgVmVjdG9yRWRpdG9yID0gcmVxdWlyZShcIi4vdWkvdmVjdG9yZWRpdG9yLmpzXCIpLlZlY3RvckVkaXRvcjtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFwcEljb246IGZ1bmN0aW9uIEFwcEljb24obmFtZSwgaW5kZXgpIHtcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRhcHBsZXQgPSBhcHAuYXBwbGV0c1tuYW1lXSgpLFxuXHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIlwiO1xuXHRcdGlmICghIWluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT0gMSkge1xuXHRcdFx0XHRkaXJlY3Rpb25DbGFzcyA9IFwiIHVwXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcblx0XHRcdFx0ZGlyZWN0aW9uQ2xhc3MgPSBcIiBkb3duXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwibmFtZVwiLCBuYW1lKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktQXBwLUljb25cIiArIGRpcmVjdGlvbkNsYXNzKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgYXBwbGV0Lmljb24gKyBcIik7XCIpO1xuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3Bhbj5cIiArIGFwcGxldC5uYW1lICsgXCI8L3NwYW4+XCI7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRhcHAub3BlblBhbmUoXCJhcHBcIiwgYXBwbGV0Lm5hbWUsIHtcblx0XHRcdFx0YXBwbGV0OiB7XG5cdFx0XHRcdFx0bmFtZTogbmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LCB0cnVlKTtcblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRDYXJkOiBmdW5jdGlvbiBDYXJkKG5hbWUsIHJlc291cmNlLCBvcHRpb25zKSB7XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0aSA9IG51bGwsXG5cdFx0XHR1cCA9IGZhbHNlLFxuXHRcdFx0aXNJbWFnZSA9IGZhbHNlLFxuXHRcdFx0Y29udGV4dE1lbnUgPSB0cnVlLFxuXHRcdFx0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxuXHRcdFx0Y29uZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuXHRcdFx0ZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRcdGNvbnRleHRNZW51RGF0YSA9IHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0cmVzb3VyY2U6IHJlc291cmNlLFxuXHRcdFx0XHRtZW51SXRlbXM6IFtdLCAvLyBkdW1teSBtZW51IGl0ZW1zXG5cdFx0XHRcdGRpcmVjdG9yeTogZmFsc2Vcblx0XHRcdH07XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkNhcmRcIik7XG5cdFx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIHJlc291cmNlKTtcblx0XHRlLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBuYW1lKTtcblx0XHQvL2xpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRcdGxpbmsuaW5uZXJIVE1MID0gbmFtZTtcblx0XHQvL2xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCByZXNvdXJjZSk7XG5cdFx0Y29uZmlndXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29uZmlndXJlXCIpO1xuXHRcdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdGNvbmZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0XHRjb25maWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vZGVsZXRlUGF0aChhcHAuY3dkK1wiL1wiK25hbWUpO1xuXHRcdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5VSS1Db250ZXh0LU1lbnVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmUgVUktQ29udGV4dC1NZW51XCIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sIHRydWUpO1xuXHRcdGlzSW1hZ2UgPSAvKFxcLmpwZ3xcXC5wbmd8XFwuZ2lmfFxcLmpwZWd8XFwud2VicCkvaS50ZXN0KHJlc291cmNlKTtcblx0XHRpZiAoaXNJbWFnZSkge1xuXHRcdFx0dmFyIHRodW1iID0gcmVzb3VyY2UucmVwbGFjZSgvXFxzL2csIFwiJTIwXCIpO1xuXHRcdFx0aWYgKCEvKFxcLndlYnB8XFwuZ2lmKS9pLnRlc3QocmVzb3VyY2UpKSB7IC8vIGRvbid0IHRodW1ibmFpbCB3ZWJwIG9yIGdpZlxuXHRcdFx0XHR2YXIgclBhdGggPSB0aHVtYi5zcGxpdChcIi9cIik7XG5cdFx0XHRcdHZhciB0aHVtYiA9IHJQYXRoW3JQYXRoLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRyUGF0aC5zcGxpY2UoclBhdGgubGVuZ3RoIC0gMSwgMSk7XG5cdFx0XHRcdHJQYXRoLnB1c2goXCJESFRodW1ic1wiKTtcblx0XHRcdFx0aWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MSAmJiBhcHAudGh1bWJTaXplKSB8fCAod2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgIWFwcC50aHVtYlNpemUpKSB7IC8vIHVzZSBoaS1kcGkgdGh1bWJuYWlscyBieSBkZWZhdWx0XG5cdFx0XHRcdFx0clBhdGgucHVzaChcIjEwMjRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0clBhdGgucHVzaCh0aHVtYiArIFwiLmpwZ1wiKTtcblx0XHRcdFx0dGh1bWIgPSByUGF0aC5qb2luKFwiL1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRodW1iID0gcmVzb3VyY2U7XG5cdFx0XHR9XG5cdFx0XHRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHRodW1iICsgXCInKTtcIik7IC8vcmVzb3VyY2UrXCInKTtcIik7XG5cdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBJbWFnZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRcdGlmICgvXiguKlxcLyl7MCwxfVteXFwuXSouezF9JC8udGVzdChyZXNvdXJjZSkpIHsgLy8gZGV0ZWN0IGZvbGRlcnNcblx0XHRcdFx0Y29udGV4dE1lbnVEYXRhLmRpcmVjdG9yeSA9IHRydWU7XG5cdFx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSBcIkxJXCIpIHtcblx0XHRcdFx0XHRcdG9wZW5Gb2xkZXIocmVzb3VyY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQ2FyZCBGb2xkZXJcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIWNvbnRleHRNZW51KSB7XG5cdFx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlIGVkaXRcIik7XG5cdFx0XHRcdFx0ZWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdGVkaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFZGl0XCIpO1xuXHRcdFx0XHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGFwcC5yZXF1ZXN0KFwiR0VUXCIsIHJlc291cmNlICsgXCI/Y2FjaGU9XCIgKyBEYXRlLm5vdygpLCBcIlwiLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0YXBwLm9wZW5QYW5lKCdlZGl0JywgbmFtZSwge1xuXHRcdFx0XHRcdFx0XHRcdFwicmVzb3VyY2VcIjogYXBwLmN3ZCArIFwiL1wiICsgbmFtZSxcblx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogcmVzcG9uc2Vcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdFx0XHRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vXHRFeHBlcmltZW50YWwuLlxuXHRcdGlmIChjb250ZXh0TWVudSkge1xuXHRcdFx0dmFyIG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoY29udGV4dE1lbnVEYXRhKTtcblx0XHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0dmFyIHN0eWxlID0gZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcblx0XHRcdFx0aWYgKHN0eWxlLnNlYXJjaChcInNob3dNZW51XCIpIDwgMCkge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHlsZSArIFwiIHNob3dNZW51XCIpO1xuXHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSwgZmFsc2UpO1xuXG5cdFx0XHQvL1x0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHQvL1x0XHRcdHZhciBzdHlsZSA9IGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG5cdFx0XHQvL1x0XHRcdGlmIChzdHlsZS5zZWFyY2goXCJzaG93TWVudVwiKSA+IC0xKSB7XG5cdFx0XHQvL1x0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHlsZS5yZXBsYWNlKFwic2hvd01lbnVcIiwgXCJcIikpO1xuXHRcdFx0Ly9cdFx0XHR9XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0fSwgdHJ1ZSk7XG5cdFx0XHRpZiAoaXNJbWFnZSkge1xuXHRcdFx0XHRlLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaW5rLmFwcGVuZENoaWxkKG1lbnUuZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghIWNvbnRleHRNZW51RGF0YS5kaXJlY3RvcnkpIHtcblx0XHRcdGUuYXBwZW5kQ2hpbGQoY29uZmlndXJlKTtcblx0XHR9XG5cblx0XHRmb3IgKGkgaW4gb3B0aW9ucykge1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uc1tpXSk7XG5cdFx0fVxuXHRcdHJldHVybiBlO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0Q29udGV4dE1lbnU6IGZ1bmN0aW9uIENvbnRleHRNZW51KG9wdGlvbnMpIHtcblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG5cdFx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdHRoaXMuZWxlbWVudCA9IGRpdjtcblx0XHRkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Db250ZXh0LU1lbnVcIik7XG5cblx0XHRkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHRpZiAob3B0aW9ucy5kaXJlY3RvcnkgPT0gdHJ1ZSkge1xuXHRcdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGlyZWN0b3J5IFVJLUNvbnRleHQtTWVudVwiKTtcblx0XHRcdG9wdGlvbnMubWVudUl0ZW1zID0gVUkuZGVmYXVsdHMuY29udGV4dE1lbnUub3B0aW9ucy5kaXJlY3RvcnlNZW51SXRlbXM7XG5cdFx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGEgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2Rhcmsvb3Blbi5wbmcpOycgaHJlZj0namF2YXNjcmlwdDpvcGVuRm9sZGVyKFxcXCJcIiArIG9wdGlvbnMucmVzb3VyY2UgKyBcIlxcXCIpOycgdGl0bGU9J09wZW4nPk9wZW48L2E+XCI7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHRcdGl0ZW0uaW5uZXJIVE1MID0gXCI8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3M9J2ljb24nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXBwL2RhdGEvMTkyL2RhcmsvZG93bmxvYWQucG5nKTsnIGhyZWY9J1wiICsgb3B0aW9ucy5yZXNvdXJjZSArIFwiJyA+RG93bmxvYWQ8L2E+XCI7XG5cdFx0fVxuXHRcdG9wdGlvbnMubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0aXRlbS5pbm5lckhUTUwgPSBtZW51SXRlbS5uYW1lO1xuXHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc291cmNlXCIsIG9wdGlvbnMucmVzb3VyY2UpO1xuXHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgb3B0aW9ucy5uYW1lKTtcblx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uXCIpO1xuXHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgbWVudUl0ZW0uaWNvbiArIFwiKVwiKTtcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0bWVudUl0ZW0uY2xpY2soZXZ0KTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHR9KTtcblx0fVxufVxuIiwiZnVuY3Rpb24gRGF0YVBhbmUgKHR5cGUsIG5hbWUsIGRhdGEpIHtcblx0Y29uc29sZS5sb2coZGF0YSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIHRpdGxlU3RyaW5nID0gXCJcIixcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksXG5cdFx0dGl0bGVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcblx0XHRlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxcblx0XHRzaG93VGl0bGUgPSBmYWxzZSxcbiAgICAgICAgc2hvd0VudHJ5ID0gZmFsc2UsXG4gICAgICAgIHNob3dUaXRsZUVudHJ5ID0gZmFsc2UsXG5cdFx0Y2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIHVwbG9hZCA9IG51bGwsXG4gICAgICAgIGVkaXRXaWRnZXQgPSBudWxsLFxuXHRcdGFwcGxldCA9IG51bGw7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiRGF0YVBhbmVcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5XCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGRvbmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lXCIpO1xuXHRkb25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRG9uZVwiKTtcblx0ZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5nZXRDbG9zZU1ldGhvZCh0cnVlKSwgdHJ1ZSk7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VcIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiWFwiKTtcblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0Q2xvc2VNZXRob2QoKSwgdHJ1ZSk7XG4gICAgaWYgKCEhZGF0YS5hcHBsZXQpIHtcbiAgICAgICAgLy8gbG9hZCBhcHBsZXQgZm9ybSBkYXRhLmFwcGxldFxuICAgICAgICBhcHBsZXQgPSBuZXcgQXBwbGV0KGRhdGEuYXBwbGV0Lm5hbWUsIHtvcGVuOiAoISEgZGF0YS5hcHBsZXQub3BlbiA/IGRhdGEuYXBwbGV0Lm9wZW4gOiBudWxsKX0pO1xuXHRcdGFwcGxldC5kYXRhUGFuZSA9IHRoaXM7IC8vIHdvbid0IGJlIG5lZWRlZCBvbmNlIERhdGFQYW5lIGlzIGRlcHJlY2F0ZWRcblx0XHR0aGlzLmFwcGxldCA9IGFwcGxldDtcblx0XHRjb250YWluZXIgPSBhcHBsZXQuZGl2O1xuICAgIH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidG91Y2hcIjpcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNob3dUaXRsZUVudHJ5ID0gdHJ1ZTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXBwL2RhdGEvdG91Y2gucG5nKVwiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1rZGlyXCI6XG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlRW50cnkgPSB0cnVlO1xuXHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hcHAvZGF0YS9ta2Rpci5wbmcpO1wiKTtcblx0XHRcdFx0dGl0bGVFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRW50cnkgaWNvblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwbG9hZFwiOlxuICAgICAgICAgICAgICAgIHVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XG5cdFx0XHRcdHRpdGxlU3RyaW5nID0gJzxpbWcgc3JjPVwiL2FwcC9kYXRhL3VwbG9hZC5wbmdcIiB0aXRsZT1cIlVwbG9hZCBGaWxlc1wiPjxzcGFuPlVwbG9hZCBGaWxlczwvc3Bhbj4nO1xuXHRcdFx0XHRzaG93VGl0bGUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmlld1wiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gXCJWaWV3IEZpbGVcIjtcbiAgICAgICAgICAgICAgICBzaG93RW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgICAgICAgIHRpdGxlU3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgc2hvd0VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaG93VGl0bGVFbnRyeSA9IHRydWU7XG5cdFx0XHRcdGlmICghISBkYXRhLmljb24pIHtcblx0XHRcdFx0XHR0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK2RhdGEuaWNvbitcIik7XCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FwcC9kYXRhL3RleHQyLnBuZyk7XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUVudHJ5IGljb25cIik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xuXHRcdGlmIChzaG93VGl0bGUpIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YoZGF0YSk9PSd1bmRlZmluZWQnIHx8IHR5cGVvZihkYXRhLmNvbnRyb2xzKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhLmNvbnRyb2xzID09IHRydWUpIHtcbiAgICAgICAgXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgICAgIFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlKTtcblx0XHR9XG5cdFx0aWYgKCEhZGF0YSAmJiAhISBkYXRhLmNsYXNzKSB7XG5cdFx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJEYXRhUGFuZSBcIitkYXRhLmNsYXNzKTtcblx0XHR9XG4gICAgICAgIGlmICghISB1cGxvYWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93VGl0bGVFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRW50cnkpO1xuICAgICAgICAgICAgdGl0bGVFbnRyeS52YWx1ZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dFbnRyeSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgIGlmICghISBkYXRhLnRleHQpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS52YWx1ZSA9IGRhdGEudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VkIHRvIGFkZCBcImRvbmVcIiBidXR0b24gaGVyZVxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy5kb25lID0gZG9uZTtcblx0dGhpcy5lbnRyeSA9IGVudHJ5O1xuXHR0aGlzLnBhbmVUaXRsZSA9IHRpdGxlO1xuXHR0aGlzLnRpdGxlRW50cnkgPSB0aXRsZUVudHJ5O1xuICAgIHRoaXMudXBsb2FkSW5wdXQgPSB1cGxvYWQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG59XG5cbkRhdGFQYW5lLnByb3RvdHlwZS5zbmFwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuXHR0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkRhdGFQYW5lIFwiK2RpcmVjdGlvbik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhbmVzID0gYXBwLnBhbmVzLFxuICAgICAgICBwYW5lID0gdGhpcztcbiAgICBwYW5lLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmUuY29udGFpbmVyKTtcbiAgICBwYW5lcy5zcGxpY2UocGFuZXMuaW5kZXhPZihwYW5lKSk7XG5cdGFwcC5zaG93TWVudShcIm5vbmVcIik7XG59O1xuXG5EYXRhUGFuZS5wcm90b3R5cGUuZ2V0Q2xvc2VNZXRob2QgPSBmdW5jdGlvbiAoc2F2ZSkge1xuICAgIHZhciBwYW5lcyA9IGFwcC5wYW5lcyxcbiAgICAgICAgcGFuZSA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHR2YXIgbGVhdmVPcGVuID0gZmFsc2U7XG5cdFx0aWYgKHNhdmUpIHtcblx0XHRcdHN3aXRjaCAocGFuZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNhdmVUZXh0KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJta2RpclwiOlxuICAgICAgICAgICAgICAgICAgICBtYWtlRGlyZWN0b3J5KHBhbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZXMocGFuZSk7XG5cdFx0XHRcdFx0bGVhdmVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICBcdFx0XHRzYXZlVGV4dChwYW5lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0aWYgKCFsZWF2ZU9wZW4pIHtcblx0XHRcdHBhbmUuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZS5jb250YWluZXIpO1xuXHRcdFx0cGFuZXMuc3BsaWNlKHBhbmVzLmluZGV4T2YocGFuZSkpO1xuXHRcdH1cblx0XHRhcHAuc2hvd01lbnUoXCJub25lXCIpO1xuICAgIH07XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHREYXRhUGFuZTogRGF0YVBhbmVcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0RnJhbWU6IGZ1bmN0aW9uIEZyYW1lKHR5cGUsIG9wdGlvbnMpIHtcblx0XHR2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLFxuXHRcdFx0dmlldyA9IG51bGw7XG5cdFx0bWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlVJLUZyYW1lXCIpO1xuXHRcdHRoaXMuZWxlbWVudCA9IG1haW47XG5cdFx0aWYgKCEhb3B0aW9ucyAmJiAhIW9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0dmlldyA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFwidGV4dFwiOlxuXHRcdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiA5NjApIHtcblx0XHRcdFx0XHR2aWV3LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjczNXB4O1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJjb2RlbWlycm9yXCI6XG5cdFx0XHRcdHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNhbnZhc1wiOlxuXHRcdFx0XHR2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwid2ViZ2xcIjpcblx0XHRcdFx0dmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYWluLmFwcGVuZENoaWxkKHZpZXcpO1xuXHRcdHRoaXMuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdH07XG5cdFx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHR9O1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0TWVudTogZnVuY3Rpb24gTWVudSh0eXBlLCBvcHRpb25zKSB7XG5cdFx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdFx0bWVudUl0ZW1zID0gW10sXG5cdFx0XHRtZW51SXRlbSA9IG51bGwsXG5cdFx0XHRtZW51ID0gdGhpcyxcblx0XHRcdG0gPSAwO1xuXHRcdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudVwiKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0XHR0aGlzLmFwcGxldCA9IG51bGw7XG5cdFx0aWYgKCEhb3B0aW9ucy50aXRsZUJ1dHRvbikge1xuXHRcdFx0bWVudUl0ZW1zLnB1c2gob3B0aW9ucy50aXRsZUJ1dHRvbik7XG5cdFx0fVxuXHRcdHR5cGUgPSAoISF0eXBlID8gdHlwZSA6IFwic3RhbmRhcmRcIik7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInN0YW5kYXJkXCI6XG5cdFx0XHRtZW51SXRlbXMgPSBtZW51SXRlbXMuY29uY2F0KFVJLmRlZmF1bHRzLm1lbnUub3B0aW9ucyk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0XHRtZW51SXRlbXMgPSBvcHRpb25zLm1lbnVJdGVtcztcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR3aGlsZSAobSA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcblx0XHRcdC8vIGNyZWF0ZSBtZW51IGZvciBhcHBcblx0XHRcdG1lbnVJdGVtID0gbWVudUl0ZW1zW21dO1xuXHRcdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTWVudS1CdXR0b25cIik7XG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIik7XG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgbWVudUl0ZW0ubmFtZSk7XG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIG1lbnVJdGVtLmljb24gKyBcIilcIik7XG5cdFx0XHQoZnVuY3Rpb24gKGJ1dHRvbk1lbnUsIGJ1dHRvbk1lbnVJdGVtKSB7XG5cdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRcdGJ1dHRvbk1lbnVJdGVtLmNsaWNrKGJ1dHRvbk1lbnUpO1xuXHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdH0pKG1lbnUsIG1lbnVJdGVtKTtcblx0XHRcdGFzaWRlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdFx0XHRtICs9IDE7XG5cdFx0fVxuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdE1vZGFsV2luZG93OiBmdW5jdGlvbiBNb2RhbFdpbmRvdyh0eXBlLCBvcHRpb25zKSB7XG5cdFx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRzZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktTW9kYWxXaW5kb3dcIik7XG5cdFx0dGhpcy5lbGVtZW50ID0gc2VjdGlvbjtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlIFwic3RhbmRhcmRcIjpcblxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImN1c3RvbVwiOlxuXG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0U2lkZWJhcjogZnVuY3Rpb24gU2lkZWJhcih0eXBlLCBvcHRpb25zKSB7XG5cdFx0dmFyIGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpLFxuXHRcdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0XHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcblx0XHRcdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdGFzaWRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhclwiKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBhc2lkZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdGlmICghIW9wdGlvbnMuaWNvbikge1xuXHRcdFx0aWNvbi5zcmMgPSBvcHRpb25zLmljb247XG5cdFx0XHRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcblx0XHRcdGFzaWRlLmFwcGVuZENoaWxkKGljb24pO1xuXHRcdH1cblx0XHRoMi5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xuXHRcdGgzLmlubmVySFRNTCA9IG9wdGlvbnMuc3VidGl0bGU7XG5cdFx0YXNpZGUuYXBwZW5kQ2hpbGQoaDIpO1xuXHRcdGFzaWRlLmFwcGVuZENoaWxkKGgzKTtcblx0XHRhc2lkZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdFx0Ly8gc3RhbmRhcmQgZmVhdHVyZXNcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjdXN0b21cIjpcblx0XHRcdG9wdGlvbnMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoc2lkZWJhckl0ZW0pIHtcblx0XHRcdFx0YXNpZGUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0uZWxlbWVudCk7XG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFNpZGViYXJJdGVtOiBmdW5jdGlvbiBTaWRlYmFySXRlbSh0eXBlLCBvcHRpb25zKSB7XG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktU2lkZWJhckl0ZW1cIik7XG5cdFx0dGhpcy5lbGVtZW50ID0gZGl2O1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJzdGFuZGFyZFwiOlxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRUb29sYmFyOiBmdW5jdGlvbiBUb29sYmFyKHR5cGUsIG9wdGlvbnMpIHtcblx0XHR2YXIgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG5cdFx0YXNpZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJVSS1Ub29sYmFyXCIpO1xuXHRcdHRoaXMuZWxlbWVudCA9IGFzaWRlO1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgXCJzdGFuZGFyZFwiOlxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY3VzdG9tXCI6XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRWZWN0b3JFZGl0b3I6IGZ1bmN0aW9uIFZlY3RvckVkaXRvcihvcHRpb25zKSB7XG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuXHRcdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBkaXY7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiVUktVmVjdG9yLUVkaXRvclwiKTtcblx0XHRpdGVtLmlubmVySFRNTCA9IFwiPGgyPlwiICsgb3B0aW9ucy5uYW1lICsgXCI8L2gyPlwiO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdGlmIChvcHRpb25zLm1lbnVJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0b3B0aW9ucy5tZW51SXRlbXMgPSBVSS5kZWZhdWx0cy5jb250ZXh0TWVudS5vcHRpb25zLm1lbnVJdGVtcztcblx0XHR9XG5cdFx0b3B0aW9ucy5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRpdGVtLmlubmVySFRNTCA9IG1lbnVJdGVtLm5hbWU7XG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdG1lbnVJdGVtLmNsaWNrKGV2dCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdH0pO1xuXHR9XG59O1xuIl19
