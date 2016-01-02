
function Applet (name, params) {
    var data = app.applets[name],
        div = document.createElement("div");
    div.setAttribute("class", "UI-Applet");
    this.div = div;
    this.data = data;
    this.components = [];
    this.init(data);
}

Applet.prototype.init = function (params) {
    console.log("Applet init... ", params);
    var components = this.data.init(params);
    if (typeof components == 'array') {
        this.components = components;
        this.components.forEach(function (component) {
            this.div.appendChild(component);
        });
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

app.applets["chat"] = {
    name: "Nexus Chat",
	icon: "/app/data/192/chat.png",
    options: {
        "Save Dump": function (p) {

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
