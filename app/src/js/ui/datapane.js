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
        applet = new Applet(data.applet.name, {open: (!! data.applet.open ? data.applet.open : null)});
		applet.dataPane = this; // won't be needed once DataPane is deprecated
		this.applet = applet;
		container = applet.div;
    } else {
		switch (type) {
            case "touch":
                showEntry = true;
                showTitleEntry = true;
                container.setAttribute("class", "DataPane touch");
				titleEntry.setAttribute("style", "background-image: url(/app/data/touch.png)");
				titleEntry.setAttribute("class", "titleEntry icon");
            break;
			case "mkdir":
                showTitleEntry = true;
                container.setAttribute("class", "DataPane mkdir");
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
};

DataPane.prototype.snap = function (direction) {
	this.container.setAttribute("class", "DataPane "+direction);
};

DataPane.prototype.close = function () {
    var panes = app.panes,
        pane = this;
    pane.container.parentNode.removeChild(pane.container);
    panes.splice(panes.indexOf(pane));
	if (panes.length < 1) {
		app.showMenu("none");
	}
};

DataPane.prototype.getCloseMethod = function (save) {
    var panes = app.panes,
        pane = this;
    return function (evt) {
		var leaveOpen = false;
		if (save) {
			switch (pane.type) {
                case "touch":
                    saveText(app.cwd+"/"+pane.titleEntry.value, pane.entry.value);
                break;
                case "mkdir":
                    makeDirectory(pane);
                break;
                case "upload":
                    uploadFiles(pane);
					leaveOpen = true;
                break;
                case "edit":
        			saveText(app.cwd+"/"+pane.titleEntry.value, pane.entry.value);
                break;
            }
		}
		if (!leaveOpen) {
			pane.container.parentNode.removeChild(pane.container);
			panes.splice(panes.indexOf(pane));
		}
		if (app.panes.length < 1) {
			app.showMenu("none");
		}
    };
};

module.exports = DataPane;
