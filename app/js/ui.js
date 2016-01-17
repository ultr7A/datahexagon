var UI = {
	Menu: function Menu (type, options) {
		var aside = document.createElement("aside"),
			menuItems = [],
			menuItem = null,
			menu = this,
			m = 0;
		aside.setAttribute("class", "UI-Menu");
		this.element = aside;
		this.applet = null;
		type = (!!type ? type : "standard");
		switch (type) {
			case "standard":
				menuItems = UI.defaults.menu.options;
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
			button.setAttribute("style", "background-image:url("+menuItem.icon+")");
			(function (buttonMenu, buttonMenuItem){
				button.addEventListener("click", function (evt) {
					buttonMenuItem.click(buttonMenu);
				}, true);
			})(menu, menuItem);
			aside.appendChild(button);
			m += 1;
		}
	},
	Sidebar: function Sidebar (type, options) {
		var aside = document.createElement("aside"),
			icon = document.createElement("img"),
			h2 = document.createElement("h2"),
			h3 = document.createElement("h3");
		aside.setAttribute("class", "UI-Sidebar");
		this.element = aside;
        this.options = options;
		switch (type) {
			case "standard":
				icon.src = options.icon;
                icon.setAttribute("class", "icon");
				h2.innerHTML = options.title;
				h3.innerHTML = options.subtitle;
				aside.appendChild(icon);
				aside.appendChild(h2);
				aside.appendChild(h3);
				aside.appendChild(document.createElement("br"));
			break;
			case "custom":

			break;
		}
	},
	Toolbar: function Toolbar (type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Toolbar");
		this.element = aside;
		switch (type) {
			case "standard":

			break;
			case "custom":

			break;
		}
	},
	Frame: function Frame (type, options) {
		var main = document.createElement("main"),
			view = null;
		main.setAttribute("class", "UI-Frame");
		this.element = main;
		switch (type) {
			case "text":
				view = document.createElement("textarea");
			break;
			case "codemirror":
				view = document.createElement("textarea");
			break;
			case "canvas":
				view = document.createElement("canvas");
			break;
			case "webgl":
				view  = document.createElement("canvas");
			break;

		}
		this.animate = function () {

		};
		this.resize = function () {

		};
	},
	ModalWindow: function ModalWindow (type, options) {
		var section = document.createElement("section");
		section.setAttribute("class", "UI-ModalWindow");
		this.element = section;
		switch (type) {
			case "standard":

			break;
			case "custom":

			break;
		}
	},
	ContextMenu: function ContextMenu (options) {
		var div = document.createElement("div"),
			list = document.createElement("ul"),
			item = document.createElement("li");
		this.element = div;
		div.setAttribute("class", "UI-Context-Menu");
		item.innerHTML="<a target='_blank' class='icon' style='background-image:url(/app/data/192/dark/download.png);' href='"+options.resource+"' >Download</a>";
		div.appendChild(list);
		list.appendChild(item);
		if (options.menuItems.length == 0) {
			options.menuItems = UI.defaults.contextMenu.options.menuItems;
		}
		options.menuItems.forEach(function (menuItem) {
			item = document.createElement("li");
			item.innerHTML = menuItem.name;
			item.setAttribute("data-resource", options.resource);
            item.setAttribute("data-name", options.name);
			item.setAttribute("class", "icon");
			item.setAttribute("style", "background-image:url("+menuItem.icon+")");
			item.addEventListener("click", function (evt) {
				menuItem.click(evt);
			}, true);
			list.appendChild(item);
		});
	},
	VectorEditor: function VectorEditor (options) {
		var div = document.createElement("div"),
			list = document.createElement("ul"),
			item = document.createElement("li");
		this.element = div;
		div.setAttribute("class", "UI-Vector-Editor");
		item.innerHTML="<h2>"+options.name+"</h2>";
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
	},
	defaults: {
		menu: {
			options:[
				{"name": "Close", "icon":"/app/data/192/x.png", "click": function close (menu) {
					console.log("Close event handler is happening now");
					menu.applet.dataPane.close();
				}},
				{"name": "New", "icon":"/app/data/plus.png", "click": function create (event, menu) {

				}},
				{"name": "Options", "icon":"/app/data/192/circle.png", "click": function options (event, menu) {

				}}
			]
		},
		sidebar: {
			loadFiles: function () {

			}
		},
		contextMenu: {
			options: {
				menuItems: [
//					{"name": "Open", "icon":"/app/data/hidpi-box.png", "click": function (e) { }},
					{"name": "Edit", "icon":"/app/data/192/dark/edit.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource"),
                            name = element.getAttribute("data-name");
						e.preventDefault();
						app.request("GET", resource+"?cache="+Date.now(), "", function (response) {
							app.openPane('edit', name, {"resource":app.cwd+"/"+name, "text": response});
						});
						return false;
					}},
					{"name": "Delete", "icon":"/app/data/192/dark/x.png", "click": function (e) {
						var element = e.target,
							resource = element.getAttribute("data-resource");
						deletePath(resource);
						// implement...

					}}
				]
			}
		}
	}


}


function AppIcon (name, index) {
	var element = document.createElement("div"),
		applet = app.applets[name],
		directionClass = "";
	if (!! index) {
		if (index == 1) {
			directionClass = " up";
		} else if (index == 4) {
			directionClass = " down";
		}
	}
    console.log("name", name);
	element.setAttribute("class", "UI-App-Icon" + directionClass);
	element.setAttribute("style", "background-image: url(" + applet.icon + ");");
	element.innerHTML = "<span>"+applet.name+"</span>";
	this.element = element;
	element.addEventListener("click", function () {
		app.openPane("app", applet.name, { applet: {name: name} });
	}, true);
}

function DataPane (type, name, data) {
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
        applet = new Applet(data.applet.name);
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
				titleString = '<img src="/app/data/upload.png" title="Upload Files"><span>Upload Files</span>';
				showTitle = true;
            break;
            case "view":
                titleString = "View File";
                showEntry = true;
            break;
            case "edit":
                titleString = '';
                showEntry = true;
                showTitleEntry = true;
				if (!! data.icon) {
					titleEntry.setAttribute("style", "background-image: url("+data.icon+");");
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
		if (typeof(data)=='undefined' || typeof(data.controls) == 'undefined' || data.controls == true) {
        	container.appendChild(done);
        	container.appendChild(close);
		}
		if (!!data && !! data.class) {
			container.setAttribute("class", "DataPane "+data.class);
		}
        if (!! upload) {
            container.appendChild(upload);
        }
        if (showTitleEntry) {
            container.appendChild(titleEntry);
            titleEntry.value = name;
        }
        if (showEntry) {
            container.appendChild(entry);
            if (!! data.text) {
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
	this.container.setAttribute("class", "DataPane "+direction);
};

DataPane.prototype.close = function () {
    var panes = app.panes,
        pane = this;
    pane.container.parentNode.removeChild(pane.container);
    panes.splice(panes.indexOf(pane));
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
    };
};

function Card (name, resource, options) {
    var e = document.createElement("div"),
        i = null,
		up = false,
		isImage = false,
		contextMenu = true,
		link = document.createElement("span"),
		close = document.createElement("input"),
		edit = document.createElement("input");
	e.setAttribute("class", "Card");
	e.setAttribute("data-resource", resource);
	e.setAttribute("data-name", name);
	link.setAttribute("target", "_blank");
	link.innerHTML = name;
	link.setAttribute("href", resource);
	close.setAttribute("class", "close");
	close.setAttribute("type", "button");
	close.setAttribute("value", "X");
	close.addEventListener("click", function (event) {
		event.preventDefault();
		deletePath(app.cwd+"/"+name);
		return false;
	}, true);
	isImage = /(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(resource);
    if (isImage) {
		var thumb = resource.replace(/\s/g, "%20");
		if (!/(\.webp|\.gif)/i.test(resource)) { // don't thumbnail webp or gif
			var rPath = thumb.split("/");
			var thumb = rPath[rPath.length-1];
			rPath.splice(rPath.length-1, 1);
			rPath.push("DHThumbs");
			if (window.innerWidth < 641) { // temporary hack to use high-dpi on mobile
				rPath.push("1024");
			}
			rPath.push(thumb+".jpg");
			thumb = rPath.join("/");
		} else {
			thumb = resource;
		}
		e.setAttribute("style", "background-image: url('"+thumb+"');"); //resource+"');");
		e.setAttribute("class", "Card Image");
    } else {
		e.appendChild(link);
		if (/^(.*\/){0,1}[^\.]*.{1}$/.test(resource)) { // detect folders
			contextMenu = false; // disable context menu for now...
            link.setAttribute("href", "#");
			link.addEventListener("click", function (event) {
				event.preventDefault();
				openFolder(resource);
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
					app.request("GET", resource+"?cache="+Date.now(), "", function (response) {
						app.openPane('edit', name, {"resource":app.cwd+"/"+name, "text": response});
					});
					return false;
				}, true);
				e.appendChild(edit);
			}
		}
    }
	//	Experimental..
	if (contextMenu) {
		var menu = new UI.ContextMenu({
			name: name,
			resource: resource,
			menuItems: [] // dummy menu items
		});
		if (isImage) {
			e.appendChild(menu.element);
		} else {
			link.appendChild(menu.element);
		}
	} else {
		e.appendChild(close);
	}

    for (i in options) {
        e.setAttribute(i, options[i]);
    }
    return e;
}

