module.exports = function SidebarItem(type, options, selectionCallback) {
	var element = document.createElement("div");
	switch (type) {
		case "standard":
			element.innerHTML = options.title;
		break;
		case "editable":
			element = document.createElement("input");
			element.setAttribute("value", options.title);
			element.setAttribute("type", "text");
		break;
		case "custom":

		break;
	}
	element.addEventListener("click", function (evt) {
		if (!! selectionCallback) {
				selectionCallback(evt);
		}
	}, true);
	element.setAttribute("class", "UI-SidebarItem");
	this.element = element;
};

