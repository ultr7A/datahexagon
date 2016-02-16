module.exports = {
	Sidebar: function Sidebar(type, options) {
		var aside = document.createElement("aside"),
			icon = document.createElement("img"),
			h2 = document.createElement("h2"),
			h3 = document.createElement("h3");
		aside.setAttribute("class", "UI-Sidebar");
		this.element = aside;
		this.options = options;
		if (!!options.icon) {
			icon.src = options.icon;
			icon.setAttribute("class", "icon");
			aside.appendChild(icon);
		}
		h2.innerHTML = options.title;
		h3.innerHTML = options.subtitle;
		aside.appendChild(h2);
		aside.appendChild(h3);
		aside.appendChild(document.createElement("br"));
		switch (type) {
		case "standard":
			// standard features
			// might want a mode where it enhances / merges with the menu
			break;
		case "custom":
			options.items.forEach(function (sidebarItem) {
				aside.appendChild(sidebarItem.element);
			});
			break;
		}
	}
}
