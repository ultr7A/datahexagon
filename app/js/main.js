var app = {
		cwd: "",
		user: {
			name: "",
			pass: "",
			id: -1
		},
		pass: "",
        files: [],
		panes: [],
        applets: [],
		accessories: ["text-edit", "alarm-clock", "image-editor", "chat", "settings", "3d-editor"],
		bgImage: "",
		sortMode: "type",
		viewMode: "grid",
        lightbox: null,
		logo: null,
    	light: null,
		largeThumbs: false,
		layoutTimeout: 0,
        scrollDepth: 0,
    	gravityZone: [180, 180],
    	actors: [],
		request: function (method, path, query, callback) {
			var xhr = new XMLHttpRequest(),
				prefix = window.location.href.split(".com")[1] == "/home?" ? ".." : "";
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
			xhr.open(method, prefix+path, true);
			if (method == "POST" || method == "PUT") {
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(query);
			} else {
				xhr.send();
			}
		},
        openPane: function (type, name, data) {
            var p = app.panes.length,
                pane = null,
				paneview = document.querySelector("#paneview");
            while (--p > 0) {
                pane = app.panes[p];
                if (type == pane.type && name == pane.name) {
                    return false;
                }
                console.log(p, app.panes[p]);
            }
            pane = new DataPane(type, name, data);
			if (paneview.children.length > 1) {
				paneview.insertBefore(pane.container, paneview.children[1]);
			} else {
				paneview.appendChild(pane.container);
			}
            app.panes.push(pane);
			app.showMenu("none");
			window.scrollTo(0, 0);
			return pane;
        },
		showMenu: function (menu) {
			var menus = document.querySelectorAll("aside.view, aside.sort, aside.file, aside.creation, section.launcher"),
				lightbox = document.querySelector(".lightbox");
			[].forEach.call(menus, function (togglingMenu, index) {
				togglingMenu.setAttribute("style", "display: " + (togglingMenu.getAttribute("class") == menu ? "block" : "none") + ";");
			});
			lightbox.setAttribute("style", "display: " + (menu == "none" ? "none" : "block")+ ";");
			lightbox.setAttribute("class", "lightbox" + (menu == "launcher" ? " light" : ""));
		},
		changeSortMode: function (mode) {
			var sort = document.querySelector("aside.sort"),
				lightbox = document.querySelector(".lightbox");
			sort.setAttribute("style", "display: none;");
			//lightbox.setAttribute("style", "display: none;");
			app.showMenu("none");
			this.sortMode = mode;
			openFolder(this.cwd);
			// implement
		},
		switchView: function (mode) {
			var lightbox = document.querySelector(".lightbox");
			app.viewMode = mode;
			//lightbox.setAttribute("style", "display: none;");
			app.showMenu("none");
			if (mode == "hexagon") {
				document.querySelector("#fileview").setAttribute("class", "content hexagon");
				[].forEach.call(document.querySelectorAll("section.content .Card, section.content .DataPane"), function (card, index) {
					var row = Math.floor(index / 6),
						angle = ((Math.PI * 2) * ((index % 6)  / 6)), // + (row % 2 == 1 ? Math.PI / 12 : 0)
						translate = [Math.sin(angle)*window.innerWidth / 4,
									 (Math.cos(angle))*window.innerWidth / 4,
									 - row * 200],
						transform = "transform: perspective(200px) translateX("+translate[0] +"px) translateY("+translate[1]+"px) translateZ("+translate[2]+"px) ",
						image = card.getAttribute("class").search("Image") > -1 ? "background-image: url("+
								card.getAttribute("data-resource").replace(/(\s)/g,"%20")+"); " : "";
					if (angle == Math.PI) {
						angle = 0;
					}
					transform += "rotateY(0deg) rotateZ("+((angle / Math.PI) * 180)+"deg)";
					card.setAttribute("style", "-webkit-"+transform+"; "+"-moz-"+transform+"; "+transform+"; "+image+" z-index: "+(99999999-row)+";");
				});

			} else {
				document.querySelector("#fileview").setAttribute("class", "content");
				[].forEach.call(document.querySelectorAll("section.content .Card.Image"), function (card, index) {
					card.setAttribute("style", "background-image: url("+card.getAttribute("data-resource")+");");
				});
			}
		},
		toggleTheme: function () {
			app.showMenu("none");
			localStorage.setItem("theme", localStorage.getItem("theme") == "dark" ? "light" : "dark");
			document.body.setAttribute("class", (app.bgImage != "" ? "bg " : "") + localStorage.getItem("theme"));
		},
		toggleThumbSize: function () {
			this.largeThumbs = ! this.largeThumbs;
			app.showMenu("none");
			app.container.setAttribute("class", "content" + (this.largeThumbs ? " doubleSurface" : ""));
		},
		startUpload: function (input, files) {
			var pane = {

			};
			app.showMenu('none');
			//pane = app.openPane('edit', "Uploading", {"controls": false, "class":"upload", "resource":"uploading", "icon":"/app/data/upload.png", "text": ""});
			if (!! input) {
				pane.uploadInput = input;
			}
			if (!! files) {
				pane.uploadInput = {
					files: files
				};
			}
			uploadFiles(pane);
		},
	initLauncher: function () {
		var launcher = document.querySelector("section.launcher");
		this.accessories.forEach(function (accessory) {
			var appIcon = new AppIcon(accessory)
			console.log("accessory", accessory);
			launcher.appendChild(appIcon);
		});
	}
};

function openFolder (dir) {
	var path = [],
        cwd = app.cwd.split("/"),
		heading = null,
		container = document.querySelector("#fileview");
	if (dir == "..") {
        if (cwd.length < 3) {
            return;
        }
		path = cwd;
		path.splice(path.length-1, 1);
		dir = path.join("/");
	}
    app.cwd = dir;
	path = dir.split("/");
	path.splice(0, 1);
	console.log(cwd);
	document.title = dir.split("/").pop() + " | DataHexagon";

	container.innerHTML = "";

	if (!!document.querySelector("#fileview h1")) {
		heading = document.querySelector("#fileview h1");
		heading.innerHTML = "";
	} else {
		heading =  document.createElement("h1");
		heading.setAttribute("class", "browse");
		container.appendChild(heading);
	}

	if (dir == "/"+app.user.name) {
		heading.innerHTML = "Home";
	} else {
		path.forEach(function (link, i) {
			var el = document.createElement("a"),
				nodes = path.length,
				directory = "",
				n = 0;
			console.log(n, i, path)
			el.innerHTML = "/" + link + " ";
			el.setAttribute("href", "#");

			while (n <= i) { // load all path nodes < index
				directory += "/" + path[n];
				n ++;
			}
			el.setAttribute("data-resource", directory);
			el.addEventListener("click", function (event) {
				event.preventDefault();
				console.log("open folder ", event.target.getAttribute("data-resource"));
				openFolder(event.target.getAttribute("data-resource"));
				return false;
			}, true);
			heading.appendChild(el);
		});
	}
//	if (app.cwd.split("/").length < 3) {
//		document.querySelector("nav a.sh").setAttribute("class", "sh home");
//	} else {
//		document.querySelector("nav a.sh").setAttribute("class", "sh");
//	}
    readDirectory(function (response) {
		app.files = JSON.parse(response);
        initFileView(app.files, app.cwd);
    });
}

function initFileView (files, userDir) {
    var container = document.querySelector("#fileview"),
		cols = Math.floor((window.innerWidth - 87) / 290),
		row = 0,
		col = 0,
		images = 0;
	if (app.sortMode == "type") {
		files.sort(function (a, b) {
			var shift = 0;
			if (/(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(a.name)) {
				shift ++;
			}
			if (/^(.*\/){0,1}[^\.]*.{1}$/.test(a.name)) {
				shift --;
			}
			if (/(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(b.name)) {
				shift --;
			}
			if (/^(.*\/){0,1}[^\.]*.{1}$/.test(b.name)) {
				shift ++
			}
			return shift;
		});
	} else if (app.sortMode == "date") {
		files.sort(function (a, b) {
			var shift = 0;
			if ((a.date < b.date)) {
				shift ++;
			}  else {
				shift --;
			}
			return shift;
		});
	} else {
		files = files.sort();
	}
    files.forEach(function (f, i) {
		if (f.name != ".." && f.name != "DHThumbs") {
        	container.appendChild( Card(f.name, userDir+"/"+f.name) );
		}
    });
	adjustLayout();
}

function adjustLayout () {
	var container = document.querySelector("#fileview"),
		cols = Math.floor((window.innerWidth - 87) / 290),
		files = document.querySelectorAll(".Card"),
		tidiedImages = false,
		images = 0,
		breaks = 0;
	[].forEach.call(document.querySelectorAll(".content br"), function (br) {
		br.parentNode.removeChild(br);
	});
	console.log("cols", cols);
	if (app.sortMode == "type") {
		[].forEach.call(files, function (f, i) {
			var col = i % cols,
				halfColumns = Math.floor(cols / 2),
				row = Math.floor(i / (files.length / cols));
			if (tidiedImages == false) {
				if (col == 0) {
					images = 0;
					breaks = 0;
				}
				if (/(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(f.getAttribute("data-resource"))) {
					images ++;
	//				for (var a = i; a < i+cols; a++) {
	//					if (/(\.jpg|\.png|\.gif|\.jpeg|\.webp)/i.test(files[a].getAttribute("data-resource"))) {
	//						images ++;
	//					}
	//				}
				}
				if (breaks == 0 && col <= (halfColumns) && images > 0 && images <= halfColumns) {
					breaks ++;
					tidiedImages = true;
					container.insertBefore(document.createElement("br"), f); //files[i-1]);
				}
			}

    	});
	}
}


function showWidget (selector) {
	var uploadWidget = document.querySelector(selector), // "form.mkdir", "form.upload"
		state = uploadWidget.style.display == 'block' ? true : false;
	state = !state;
	if (selector == "#delete-form") {
		app.deleteMode = state;
		if (state == false) {
			[].forEach.call(
				document.querySelectorAll("[data-selected=yes]"),
				function (card) {
					deletePath(card.parentNode.getAttribute("data-resource"));
					console.log("trying to delete");
				}
			);
			document.querySelector("a.rm").setAttribute("style", "");
		} else {
			document.querySelector("a.rm").setAttribute("style", "color: #ff8000;");
		}
	}
	uploadWidget.style.display = state ? 'block' : 'none';
}


function initForm (formData, mode, directory) {
	formData.append("dataOperation", mode);
	formData.append("path", directory);
	formData.append("username", document.querySelector(".fileManagement [name=username]").value);
	formData.append("password", document.querySelector(".fileManagement [name=password]").value);
}

function readDirectory (callback) {
	var widget = document.querySelector("form.ls");
	var xhr = new XMLHttpRequest(),
		formData = new FormData(),
		directory = app.cwd;
	initForm(formData, "ls", directory);
	xhr.onload = function () {
		if (xhr.status == 200) {
			callback(xhr.responseText);
		}
	};
	xhr.open("POST", "../app/data.php", true);
	xhr.send(formData);
	return false;
}

function makeDirectory (pane) {
    var widget = document.querySelector("form.mkdir");
	var xhr = new XMLHttpRequest(),
		formData = new FormData(),
		directory = app.cwd+"/"+pane.titleEntry.value;
	initForm(formData, "mkdir", directory);
	xhr.onload = function () {
		if (xhr.status == 200) {
			openFolder(app.cwd);
			pane.close();
		}
	};
	xhr.open("POST", "../app/data.php", true);
	xhr.send(formData);
	return false;
}

function deletePath (directory) {
    var widget = document.querySelector("form.rm");
	var xhr = new XMLHttpRequest(),
		formData = new FormData();
	initForm(formData, "rm", directory);
	xhr.onload = function () {
		if (xhr.status == 200) {
			openFolder(app.cwd);
		}
	};
	xhr.open("POST", "../app/data.php", true);
	xhr.send(formData);
	return false;
}

function uploadFiles (pane) {
	var xhr = new XMLHttpRequest(),
		formData = new FormData(),
		files = !!pane ? pane.uploadInput.files : document.querySelector(".upload [type=file]").files,
		ins = files.length;
	app.lightbox.setAttribute("class", "lightbox hover");
	app.lightbox.setAttribute("title", "Uploading...");
	app.lightbox.setAttribute("style", "pointer-events: all;");
	app.lightbox.innerHTML = "Uploading...";
	initForm(formData, "upload", app.cwd);
	for (var x = 0; x < ins; x++) {
       formData.append("fileUpload"+x, files[x]);
    }
	xhr.onload = function () {
		if (xhr.status == 200) {
			//!! pane.close && pane.close();
			app.lightbox.setAttribute("class", "lightbox");
			app.lightbox.setAttribute("title", "Close");
			app.lightbox.setAttribute("style", "display: none;");
			app.lightbox.innerHTML = "";
			openFolder(app.cwd);
			app.panes = [];
		}
	};
	xhr.open("POST", "../app/data.php", true);
	xhr.send(formData);
	if (!! document.querySelector(".upload [type=file]")) {
        document.querySelector(".upload [type=file]").files = [];
    }
	if (!! pane && !!pane.done) {
		pane.done.setAttribute("disabled", "disabled");
		pane.done.setAttribute("value", "Uploading...");
	}
//    if ("upload" in new XMLHttpRequest) {
//        if (!! document.querySelector(".uploadProgress")) {
//            xhr.upload.onprogress = function (event) {
//            if (event.lengthComputable) {
//                var complete = (event.loaded / event.total * 100 | 0);
//                   document.querySelector(".uploadProgress").innerHTML = complete + " Complete";
//                }
//            }
//        }
//    }
	return false;
}

function saveText (pane) {
	var xhr = new XMLHttpRequest(),
		formData = new FormData(),
        directory = app.cwd+"/"+pane.titleEntry.value, // this will be a problem if widgets get their own working directories
        text = pane.entry.value;
	initForm(formData, "touch", directory);
	formData.append("text", text);
	xhr.onload = function () {
		if (xhr.status == 200) {
			openFolder(app.cwd);
		}
	};
	xhr.open("POST", "../app/data.php", true);
	xhr.send(formData);
	return false;
}

var three = {
    renderer: null,
    camera: null,
    scene: null,
    light: null
};

var appData = [{"image":"data/Overworld.png", "url":"http://overworld.spacehexagon.com"},
               {"image":"data/particlecloud.png", "url":"http://particlecloud.net"},
               {"image":"data/nexus.png", "url":"http://nexus.spacehexagon.com"}];

var mobileMenu = {
    enabled: false,
    toggle: function () {
        this.enabled = !this.enabled;
        document.querySelector("nav").setAttribute("class",this.enabled ? "enabled" : "");
    }
};

function init () {
    var page = window.location.href.split(".com")[1],
        scene,
        camera,
        renderer,
        light,
        sky, ground, logo,
        geometry,
        material;

    console.log("Data Hexagon (C) "+(new Date().getFullYear()) + " jeremy@spacehexagon.com");
	console.log("https://github.com/SpaceHexagon/datahexagon");

	function toggleInitialForms (login) {
        var signInForm = document.querySelector("#signin-form"),
            registerForm = document.querySelector("#register-form");
        signInForm.setAttribute("class", login ? "" : "hidden");
        registerForm.setAttribute("class", login ? "hidden" : "");
    }
    app.lightbox = document.querySelector(".lightbox");
    app.container = document.querySelector("#fileview");
    document.querySelector("#show-signin") &&
	document.querySelector("#show-signin").addEventListener("click", function(evt) {
        toggleInitialForms(true);
    }, true);
    document.querySelector("#show-register") &&
	document.querySelector("#show-register").addEventListener("click", function(evt) {
        toggleInitialForms(false);
    }, true);

	if (page.length > 2) {
		if (localStorage.getItem("theme") == null) {
			localStorage.setItem("theme", "light");
		} else {
			document.body.setAttribute("class", localStorage.getItem("theme"));
		}
	}

	function handleMouseWheel (e) {
        	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		console.log(e);
        app.scrollDepth += delta;
    }

    if (!! document.querySelector(".content")) {
    	document.querySelector(".content").addEventListener("mousewheel", handleMouseWheel, false);
		document.querySelector(".content").addEventListener("DOMMouseScroll", handleMouseWheel, false);
	}

	window.onresize = function () {
		if (app.cwd != "" && app.viewMode !="grid") {
			app.switchView(app.viewMode);
		}
		clearTimeout(app.layoutTimeout);
		app.layoutTimeout = setTimeout(function () { adjustLayout(); /*initFileView(app.files, app.cwd);*/ }, 125);
		if (!!THREE) {
			if (!! three.renderer) {
				three.renderer.setSize(innerWidth, innerHeight);
				three.camera.aspect = innerWidth / innerHeight;
				three.camera.updateProjectionMatrix();
			}
		}
	};
	console.log(page);
	if (page == "/home/?") {
        app.container.ondragover = function () { app.lightbox.setAttribute("class", "lightbox hover"); return false; };
        app.container.ondragend = function () { app.lightbox.setAttribute("class", "lightbox"); return false; };
//        window.onblur = function () {
//            app.lightbox.setAttribute("class", "lightbox");
//        };
        app.container.ondrop = function (e) {
            app.lightbox.setAttribute("class", "lightbox");
            e.preventDefault();
            app.startUpload(null, e.dataTransfer.files);
        };
	} else {
        scene = three.scene =  new THREE.Scene();
		camera = three.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10000 );
		renderer = three.renderer = new THREE.WebGLRenderer({alpha: true, antialias: (window.innerWidth <= 1440)});
		renderer.setClearColor( 0x000000, 0 );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.setAttribute("class", "viewport");
		document.body.appendChild( renderer.domElement );
		material = new THREE.MeshLambertMaterial( { color: 0xFD005F, wireframe: true } ); // 0xDE002B
		geometry = new THREE.TorusGeometry( 10, 6, 6, 6 );
		logo = app.logo = new THREE.Mesh( geometry, material );
		scene.add( logo );
		logo.position.set(-16, -16, -10);
		camera.position.z = 10;
		camera.position.x = -5;
		light = app.light = new THREE.PointLight(0xffffff, 1.1, 120);
		scene.add(light);
		light.position.z = 0;
		light.position.y = -16;
		light.position.x = -16;
		for (var p = 0; p < appData.length; p++) {
        	app.actors.push(new ProjectionBot(appData[p].image, appData[p].url));
		}
		animate();
    }
}

document.addEventListener("DOMContentLoaded", init, false);

function animate () {
    requestAnimationFrame(animate);
    three.camera.position.set(-16, -16.5, 10-0.5 * Math.sin(Date.now()/1600));
    var gravZone = app.gravityZone,
        pbs = app.actors,
        p = pbs.length,
        pb = null,
        pbpos = null,
        gravity = [],
        pbv = new THREE.Vector3(0, 0, 0),
		mod = 5;
	if (window.location.href.split("/").length == 4) { // home page
		mod = 5;
	} else {
		mod = 10;
	}
    while (p-- > 0) {
        pb = pbs[p];
        pbpos = pb.mesh.position;
        pb.velocity[0] -= Math.random() * 0.1 + Math.sin(pbpos.x / gravZone[0]) / mod;
        pb.velocity[1] -= Math.random() * 0.1 + Math.sin(pbpos.y / gravZone[1]) / mod;
        pb.velocity[2] -= Math.random() * 0.1 + Math.sin(pbpos.z / 180) / 5;

        pbv.set(pb.velocity[0], pb.velocity[1], pb.velocity[2]);

        pbpos.add(pbv);
        pb.mesh.lookAt(new THREE.Vector3(pb.velocity[0]*10000, pb.velocity[1]*10000, pb.velocity[2]*10000));
        pb.mesh.updateMatrix();
    }
    //three.camera.lookAt(pbs[0].mesh.position);
    render();
}

function render () {
    three.renderer.render(three.scene, three.camera);
}


function ProjectionBot (image, url) {
    this.image = image;
    this.url = url;
    //this.velocity = [-0.125+Math.random()*0.25, -0.125+Math.random()*0.25, -0.125+Math.random()*0.25];
	if (window.location.href.search("/data") > -1) {
		var mat  = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } );
	} else {
		var mat  = new THREE.MeshLambertMaterial( { color: 0xff8000, wireframe: true } );
	}
    var geom = new THREE.OctahedronGeometry(1.66,0);
    var limb, limbGeom = new THREE.BoxGeometry(0.5, 0.25, 2);
    var mesh = new THREE.Mesh(geom, mat);
    for (var l = 0; l < 3; l++) {
        limb = new THREE.Mesh(limbGeom, mat);
        limb.matrixAutoUpdate = false;
        mesh.add(limb);
        limb.position.set(Math.sin(l*(2/3*Math.PI)), Math.cos(l*(2/3*Math.PI)), -1.66);
        limb.rotateZ(l == 0 ? Math.PI/2 : l*(2/3*Math.PI));
        limb.updateMatrix();
    }
    mesh.position.set(-8 + Math.random() * 16, Math.random() * 10, -8 + Math.random()*16);
    mesh.rotateX(Math.PI / 2);
    mesh.matrixAutoUpdate = false;
    three.scene.add(mesh);
    this.mesh = mesh;
    this.velocity = [mesh.position.x / 80, mesh.position.y / 80, mesh.position.z / 80];
    mesh.updateMatrix();
}
