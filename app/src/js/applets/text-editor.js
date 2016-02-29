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
					resource: "",
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

			this.add();

			return [menu, sidebar, view];
		},
		add: function (p) {
			var sidebar = this.sidebar,
				documents = this.models.document,
				document = Object.create(this.models.document.schema),
				item = new SidebarItem("standard", {title: document.name});
			document.resource = document.name;
			documents.all.push(document);
			documents.current = documents.all.length - 1;
			sidebar.options.items.push(item);
			sidebar.element.appendChild(item.element);
		},
		save: function (p) {
			var documents = this.models.document,
				doc = documents.all[documents.current];
			saveText(doc.resource, doc.content);
			this.saveTimeout = setTimeout(function(){ this.save(); }, 60000);
		},
		close: function (p) {
			this.save();
			clearTimeout(this.saveTimeout);
		}
	};
};
