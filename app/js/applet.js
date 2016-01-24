
function Applet (name, params) {
    var data = app.applets[name],
        div = document.createElement("div"),
        c = 0;
    div.setAttribute("class", "DataPane UI-Applet");
    this.div = div;
    this.data = data;
    this.components = [];
	this.init(params);
}

Applet.prototype.init = function (params) {
	var c = 0;
    console.log("Applet init... ", params);
	this.components = this.data.init(params);
		if (typeof this.components != 'object') {
			var menu = new UI.Menu(),
			sidebar = new UI.Sidebar("standard", {icon: this.data.icon, title:this.data.name, subtitle: ""}),
			view = new UI.Frame("custom", {element: document.createElement("div")});
			this.components = [sidebar, view, menu];
		}
		while (c < this.components.length) {
			this.components[c].applet = this;
			this.div.appendChild(this.components[c].element);
			c ++;
		}
};

Applet.prototype.add = function (params) {
    console.log("Applet add... ", params);
    this.data.add(params);
};

Applet.prototype.save = function (params) {
    console.log("Applet save... ", params);
    this.data.save(params);
};

Applet.prototype.close = function (params) {
    console.log("Applet close... ", params);
    this.data.close(params);
};
app.applets["alarm-clock"] = {
    name: "Clock",
	icon: "/app/data/192/clock-2.png",
    options: {
        "Clock": function (p) {},
        "Alarm": function (p) {},
        "Timer": function (p) {},
    },
    schema: {
        "models": ["Alarm", "Timer"],
        "Alarm": {
            "hours": 0,
            "minutes": 0,
            "pm": false
        },
        "Timer": {
            "duration": 0,
            "date": "2015-08-08"
        }
    },
    init: function (p) {

    },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["terminal"] = { // support algebra as well as *nix commands
    name: "Terminal",
	icon: "/app/data/192/text.png",
    options: {
        "Save Dump": function (p) {}
    },
    schema: {
        "models": ["Output"],
        "Output": {
            "data": ""
        }
    },
    init: function (p) {
		//add event listener to button to submit command
		// code function to parse command,
		// call app function,
		// display result...
	},
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["messaging"] = {
    name: "Messaging",
	icon: "/app/data/192/chat.png",
    options: {
		"New Message": function (p) {

		},
		"New Chat": function (p) {

		},
		"Search": function (p) {

		},
		"Options": function (p) {

		}
    },
    schema: {
        "models": ["Output"],
        "Output": {
            "data": ""
        }
    },
    init: function (p) {
		// connect socket to app if not connected...
		// send welcome message
		// add event listener to send button
		// add socket event listener for chat message
	},
    add: function (p) {

	},
    save: function (p) { },
    close: function (p) { }
};

app.applets["image-viewer"] = {
    name: "Image Viewer",
	icon: "/app/data/192/",
    options: {
        "Next": function (p) {},
		"Previous": function (p) {},
		"Share": function (p) {}
    },
    schema: {

    },
    init: function (p) {

    },
    close: function (p) { }
};

app.applets["text-editor"] = {
    name: "Text Editor",
	icon: "/app/data/192/text.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) {

    },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["image-editor"] = {
    name: "Image Editor",
	icon: "/app/data/192/image.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) {

    },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["3d-editor"] = {
    name: "3D Editor",
	icon: "/app/data/192/cube.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["midi-editor"] = {
    name: "MIDI Editor",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["animation-editor"] = {
    name: "Animation Editor",
	icon: "/app/data/192/circle.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    add: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["search"] = {
    name: "Search",
	icon: "/app/data/192/circle.png",
    options: {
        "Search": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    close: function (p) { }
};

app.applets["settings"] = {
    name: "Settings",
	icon: "/app/data/192/circle.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    save: function (p) { },
    close: function (p) { }
};

app.applets["usage-visualizer"] = {
    name: "Disk Usage Visualizer",
	icon: "/app/data/192/circle.png",
    options: {
        "Save Changes": function (p) {}
    },
    schema: {

    },
    init: function (p) { },
    save: function (p) { },
    close: function (p) { }
};


app.applets["sharing"] = {
    name: "Sharing",
	icon: "/app/data/192/circle.png",
    options: {
        "New Share": function (p) {},
		"New Shortcut": function (p) {}
    },
    schema: {

    },
    init: function (p) {
		var menu = new UI.Menu(),
			sidebar = new UI.Sidebar("standard", {icon: this.icon, title:this.name, subtitle: ""}),
			element = document.createElement("div"),
			nameLabel = document.createElement("label"),
			resourceLabel = document.createElement("label"),
			publicLabel = document.createElement("label"),
			whiteListLabel = document.createElement("label"),
			dataLabel = document.createElement("label"),
			nameInput = document.createElement("input"),
			resourceInput = document.createElement("input"),
			publicInput = document.createElement("input"),
			whiteListInput = document.createElement("textarea"),
			dataInput = document.createElement("input"),
			view = null,
			span = null;
			span = document.createElement("span");
			nameLabel.innerHTML = "Name";
			span.appendChild(nameLabel);
			span.appendChild(nameInput);
			element.appendChild(span);
			resourceLabel.innerHTML = "Resource";
			span = document.createElement("span");
			span.appendChild(resourceLabel);
			span.appendChild(resourceInput);
			element.appendChild(span);
			publicLabel.innerHTML = "Public";
			span = document.createElement("span");
			span.appendChild(publicLabel);
			span.appendChild(publicInput);
			element.appendChild(span);
			whiteListLabel.innerHTML = "White List";
			span = document.createElement("span");
			span.appendChild(whiteListLabel);
			span.appendChild(whiteListInput);
			element.appendChild(span);
			dataLabel.innerHTML = "Data";
			span = document.createElement("span");
			span.appendChild(dataLabel);
			span.appendChild(dataInput);
			element.appendChild(span);
			view = new UI.Frame("custom", {"element":element});
			return [sidebar, view, menu];
	},
    save: function (p) { },
    close: function (p) { }
};
