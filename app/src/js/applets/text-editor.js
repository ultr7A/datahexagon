module.exports = function () {
	var self = {
		name: "Text Editor",
		icon: "/app/data/192/text.png",
		options: {
			"Save Changes": function (p) {}
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
		init: function (p) {
			var menu = new Menu("standard"),
				sidebar = new Sidebar("custom", {
					title: this.name,
                    icon: this.icon,
					subtitle: "",
					items: []
				}),
				element = document.createElement("div"),
				view = null,
				span = null;
			view = new Frame("text");
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			if (!!p && p.open) {
				this.add({resource: p.open});
			} else {
				this.add();
			}

			self.saveTimeout = setTimeout(function () { self.save({auto: true}); }, 30000);

			return [menu, sidebar, view];
		},
		add: function (p) {
			var sidebar = this.sidebar,
				documents = this.models.document,
				doc = Object.create(this.models.document.schema),
				item = null,
				exists = false,
				filename = "",
				a = app.files,
				l = a.length;

			if (!!p && !!p.open && !!p.open.resource) {
				doc.resource = p.open.resource;
			} else {
				doc.resource = app.cwd + "/" + doc.resource;
			}

			filename = doc.resource.split("/");
			filename = filename[filename.length -1];

			while ( --l > -1) {
				if (!exists && a[l].name == filename) {
					console.log(a[l].name);
					this.open({resource: doc.resource});
					exists = true;
				}
			}
//			if (!exists) {
//				documents.all.push(doc);
//				item = new SidebarItem("editable", {title: doc.resource});
//				documents.current = documents.all.length - 1;
//				sidebar.options.items.push(item);
//				sidebar.element.appendChild(item.element);
//			}
		},
		save: function (p) {
			var documents = self.models.document,
				doc = documents.all[documents.current];
			doc.content = self.view.element.children[0].value;
			saveText(doc.resource, doc.content, true);
            if (!!p && p.auto === true) {
                self.saveTimeout = setTimeout(function() { self.save(p); }, 60000);
            }
		},
		open: function (p) {
			var documents = this.models.document,
				textarea = this.view.element.children[0],
				applet = this;
			app.request("get", p.resource, "?cache="+Date.now(), function (resp) {
				var doc = Object.create(applet.models.document.schema),
					documents = applet.models.document,
					item = null;
				doc.resource = p.resource;
				item = new SidebarItem("editable", {title: doc.resource});
				documents.all.push(doc);
				documents.current = documents.all.indexOf(doc);
				doc.content = resp;
				textarea.value = resp;
				applet.sidebar.options.items.push(item);
				applet.sidebar.element.appendChild(item.element);

			});
		},
		close: function (p) {
			self.save();
			clearTimeout(self.saveTimeout);
			console.log("actually closing now..");
		}
	};
    return self;
};









