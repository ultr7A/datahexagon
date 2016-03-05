function Applet(name, params) {
	var data = applets[name](),
		div = document.createElement("div"),
		c = 0;
	div.setAttribute("class", "DataPane UI-Applet");
	div.addEventListener("focus", function (){
		app.showMenu("applet"); // show lightbox
	}, true);
	this.div = div;
	this.data = data;
	this.components = [];
	this.init(params);
}

Applet.prototype.init = function (params) {
	var c = 0,
		components = this.data.init(params);
	if (typeof components != 'object') {
		var menu = new Menu("standard"),
			sidebar = new Sidebar("standard", {
				title: this.data.name,
                icon: this.data.icon,
				subtitle: ""
			}),
			view = new Frame("custom", {
				element: document.createElement("div")
			});
		this.components = [menu, sidebar, view];
	} else {
		this.components = components;
	}
	while (c < this.components.length) {
		this.components[c].applet = this;
		this.div.appendChild(this.components[c].element);
		c++;
	}
	if (!!params && !!params.open) {
		this.open(params.open);
	}
};

Applet.prototype.add = function (params) {
	console.log("Applet adds... ", params);
	this.data.add(params);
};

Applet.prototype.save = function (params) {
	console.log("Applet saves... ", params);
	var resource = (!!params && !!params.resource) ? params.resource : "";
	socket.emit("datahexagon event", {user: app.user.name, dir: app.cwd, resource: resource, type: "save"});
	this.data.save(params);
};

Applet.prototype.close = function (params) {
	console.log("Applet closes... ", params);
	this.data.close(params);
};


Applet.prototype.open = function (params) {
	console.log("Applet opens file... ", params);
	console.log(params);
	if (!!this.data.open) {
		this.data.open(params);
	}
};

Applet.prototype.update = function (params) {
	if (!!this.data.update) {
		this.data.update(params);
	}
};



































