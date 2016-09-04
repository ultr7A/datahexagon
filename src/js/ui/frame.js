module.exports = function Frame(type, options) {
	var main = document.createElement("main"),
		view = null;
	main.setAttribute("class", "UI-Frame");
	this.element = main;
	if (!!options && !!options.element) {
		view = options.element;
	} else {
		switch (type) {
		case "text":
			view = document.createElement("textarea");
			if (window.innerWidth > 960) {
				view.setAttribute("style", "height:735px;");
			}
			break;
		case "codemirror":
			view = document.createElement("textarea");
			break;
		case "canvas":
			view = document.createElement("canvas");
			break;
		case "webgl":
			view = document.createElement("canvas");
			break;
		}
	}
	main.appendChild(view);
	this.animate = function () {

	};
	this.resize = function () {

	};
};
