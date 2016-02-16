module.exports = {
	VectorEditor: function VectorEditor(options) {
		var div = document.createElement("div"),
			list = document.createElement("ul"),
			item = document.createElement("li");
		this.element = div;
		div.setAttribute("class", "UI-Vector-Editor");
		item.innerHTML = "<h2>" + options.name + "</h2>";
		div.appendChild(list);
		list.appendChild(item);
		if (options.menuItems.length == 0) {
			options.menuItems = UI.defaults.contextMenu.options.menuItems;
		}
		options.menuItems.forEach(function (menuItem) {
			item = document.createElement("li");
			item.innerHTML = menuItem.name;
			item.addEventListener("click", function (evt) {
				menuItem.click(evt);
			}, false);
			list.appendChild(item);
		});
	}
};
