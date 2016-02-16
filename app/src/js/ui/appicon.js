module.exports = {
	AppIcon: function AppIcon(name, index) {
		var element = document.createElement("div"),
			applet = app.applets[name](),
			directionClass = "";
		if (!!index) {
			if (index == 1) {
				directionClass = " up";
			} else if (index == 4) {
				directionClass = " down";
			}
		}
		console.log("name", name);
		element.setAttribute("class", "UI-App-Icon" + directionClass);
		element.setAttribute("style", "background-image: url(" + applet.icon + ");");
		element.innerHTML = "<span>" + applet.name + "</span>";
		this.element = element;
		element.addEventListener("click", function () {
			app.openPane("app", applet.name, {
				applet: {
					name: name
				}
			});
		}, true);
	}
};
