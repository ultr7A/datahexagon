var UI = {
	Menu: function Menu (type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Menu");
		this.element = aside;
		switch (type) {
			case "standard":
				UI.defaults.menu.options.forEach(function (menuItem) {
					// create menu for app
				});
			break;
			case "custom":
				options.menuItems.forEach(function (menuItem) {
					// create menu for app
				});
			break;
		}

	},
	Sidebar: function Sidebar (type, options) {
		var aside = document.createElement("aside");
		aside.setAttribute("class", "UI-Sidebar");
		this.element = aside;
		switch (type) {
			case "standard":

			break;
			case "custom":

			break;
		}
	},
	Frame: function Frame (type, options) {
		var main = document.createElement("main");
		main.setAttribute("class", "UI-Frame");
		this.element = main;
		switch (type) {
			case "text":

			break;
			case "codemirror":

			break;
			case "canvas":

			break;
			case "webgl":

			break;

		}
		this.animate = function () {

		};
		this.resize = function () {

		};
	},
	ContextMenu: function (name, options) {
		var div = document.createElement("div"),
			list = document.createElement("ul"),
			item = document.createElement("li");
		this.element = div;
		div.setAttribute("class", "UI-Context-Menu");
		item.innerHTML="<h2>"+name+"</h2>";
		div.appendChild(list);
		list.appendChild(item);
		options.menuItems.forEach(function (menuItem) {
			item = document.createElement("li");
			item.innerHTML = menuItem.name;
			item.addEventListener("click", function (evt) {
				menuItem.click;
			}, true);
			list.appendChild()
		});
	},
	defaults: {
		menu: {
			options:[
				{"name": "App Icon", "icon":"/app/data/192/text.png", "click": function (e) {

				}},
				{"name": "New", "icon":"/app/data/plus.png", "click": function (e) {

				}},
				{"name": "Open", "icon":"/app/data/hidpi-box.png", "click": function (e) {

				}},
				{"name": "Save As", "icon":"/app/data/plus.png", "click": function (e) {

				}},
				{"name": "Options", "icon":"/app/data/circle-192.png", "click": function (e) {

				}},
			]
		},
		sidebar: {
			loadFiles: function () {

			}
		}
	}


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
        applet.init();
		this.applet = applet;
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

