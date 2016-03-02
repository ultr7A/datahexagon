module.exports = function () {
	return {
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
				//textarea = document.createElement("textarea"),
				view = null,
				span = null;
			//element.appendChild(textarea)l;

			view = new Frame("text");
			this.sidebar = sidebar;
			this.menu = menu;
			this.view = view;

			if (!!p && p.open) {
				this.add({resource: p.open});
			} else {
				this.add();
			}

			return [menu, sidebar, view];
		},
		add: function (p) {
			var sidebar = this.sidebar,
				documents = this.models.document,
				document = Object.create(this.models.document.schema),
				item = null;
			if (!!p && !!p.resource) {
				document.resource = p.resource;
			} else {
				document.resource = app.cwd + "/" + document.resource;
			}
			item = new SidebarItem("editable", {title: document.resource});
			documents.all.push(document);
			documents.current = documents.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
		},
		save: function (p) {
			var documents = this.models.document,
				doc = documents.all[documents.current];
			doc.content = this.view.element.children[0].value;
			saveText(doc.resource, doc.content);
			this.saveTimeout = setTimeout(this.save, 60000);
		},
		open: function (p) {
			var documents = this.models.document,
				textarea = this.view.element.children[0],
				applet = this;
			app.request("get", p, "", function (resp) {
				var doc = null;
				applet.add({resource: p});
				doc = documents.all[documents.current];
				doc.content = resp;
				textarea.value = resp;
			});
		},
		close: function (p) {
			this.save();
			clearTimeout(this.saveTimeout);
			console.log("actually closing now..");
		}
	};
};
