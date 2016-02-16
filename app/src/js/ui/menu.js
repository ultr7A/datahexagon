module.exports = {
	Menu: function Menu(type, options) {
		var aside = document.createElement("aside"),
			menuItems = [],
			menuItem = null,
			menu = this,
			m = 0;
		aside.setAttribute("class", "UI-Menu");
		this.element = aside;
		this.applet = null;
		if (!!options.titleButton) {
			menuItems.push(options.titleButton);
		}
		type = (!!type ? type : "standard");
		switch (type) {
		case "standard":
			menuItems = menuItems.concat(UI.defaults.menu.options);
			break;
		case "custom":
			menuItems = options.menuItems;
			break;
		}
		while (m < menuItems.length) {
			// create menu for app
			menuItem = menuItems[m];
			var button = document.createElement("a");
			button.setAttribute("class", "UI-Menu-Button");
			button.setAttribute("href", "javascript:void(0);");
			button.setAttribute("title", menuItem.name);
			button.setAttribute("style", "background-image:url(" + menuItem.icon + ")");
			(function (buttonMenu, buttonMenuItem) {
				button.addEventListener("click", function (evt) {
					buttonMenuItem.click(buttonMenu);
				}, true);
			})(menu, menuItem);
			aside.appendChild(button);
			m += 1;
		}
	}
};
