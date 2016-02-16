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
