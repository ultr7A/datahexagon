var world = {
	skybox: null,
	ground: null,
	init: function () {
		var scene,
			camera,
			renderer,
			skyMat = new THREE.MeshLambertMaterial({ color: 0xffffff }),
			sunMat = new THREE.MeshBasicMaterial({ color: 0xffffff }),
            cloudMat = (app.mobile ? new THREE.MeshLambertMaterial({ color: 0x9000ff }) : new THREE.MeshPhongMaterial({ color: 0x9000ff })),
            groundMat = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors }),
            panelMat = new THREE.MeshLambertMaterial({ color: 0xe1e1e1 }),
//                zenithGeometry = (app.mobile ? new THREE.PlaneGeometry(120000, 120000, 28, 28) : new THREE.PlaneGeometry(120000, 120000, 16, 16)),
			nadirGeometry = new THREE.PlaneGeometry(64000, 64000, 24, 24),
            cellGeometry = new THREE.CylinderGeometry(192, 192, 128, 6),
			sunGeometry = new THREE.CylinderGeometry(256, 256, 256, 6),
			sun = new THREE.Mesh(sunGeometry, sunMat),
			cell = null;


		scene = three.scene =  new THREE.Scene(),
		camera = three.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 80000 );
		renderer = three.renderer = new THREE.WebGLRenderer({alpha: true, antialias: (window.innerWidth <= 1440)});
		renderer.setClearColor( 0x000000, 0 );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.setAttribute("class", "viewport");
		document.body.appendChild( renderer.domElement );

			var skyTexture = THREE.ImageUtils.loadTexture("/app/data/data-sky-m.png", null, function () {
					var skybox = new THREE.Object3D(), // used to use larger jpeg version sunset-5.jpg
					skyboxFace = null,
					skyboxSideMat = new THREE.MeshBasicMaterial({
						map: skyTexture,
						side: 1,
						fog: false
					}),
					skyboxTopMat = new THREE.MeshBasicMaterial(),
					x = 0;
				while (x < 4) {
					skyboxFace = new THREE.Mesh(new THREE.PlaneGeometry(60000, 60000, 1, 1), skyboxSideMat);
					skyboxFace.position.set(Math.sin(x*(Math.PI / 2))*30000, 0, Math.cos(x*(Math.PI / 2))*30000 );
					skyboxFace.rotation.y = x*(Math.PI / 2);
					skybox.add(skyboxFace);
					x++;
				}
				world.skybox = skybox;
				three.scene.add(skybox);
				skybox.position.set(three.camera.position.x, 60000, three.camera.position.z);
				skyTexture.needsUpdate = true;
			});

			app.sun = sun;
			//var zenith = app.zenith = new THREE.Mesh(zenithGeometry, cloudMat);
			var nadir = app.nadir = new THREE.Mesh(nadirGeometry, groundMat);

//			scene.add(zenith);
//			zenith.position.set(0, 2000, 0);
//            zenith.rotation.x = Math.PI / 2;
//			scene.add(nadir);
//			nadir.position.set(0, -2000, 0);
//            nadir.rotation.x = -Math.PI / 2;
//
//            var nvs = nadirGeometry.vertices,
//				nvl = nvs.length,
//				nv = null,
//            	row = Math.floor(Math.sqrt(nvl)),
//				face = null,
//				faces = nadirGeometry.faces,
//				intensity = 0;
//            for (var n = 0; n < nvl; n++) {
//                if (Math.floor(n / row) % 2) {
//                    nv = nvs[n];
//                    nv.x -= 800; //Math.sin(time/2)*0.5+Math.sin(time + (e/4));
//                }
//            }
//			for (n = faces.length -1; n >= 0; n--) {
//				face = faces[n];
//				intensity = 0.2 + Math.pow(Math.random() * 0.3 + 0.3 * Math.abs((((n % 32) - 16) / 16) * (Math.floor(n / 32) - 16) / 16), 2);
//				face.color.setRGB(intensity, intensity, intensity);
//			}
//            nadirGeometry.verticesNeedUpdate = true;
//            nadirGeometry.computeFaceNormals();

			camera.position.set(0, 280, 0);
			light = app.light = new THREE.PointLight(0xffffff, 1.5, 300000);
			scene.add(light);
			light.position.z = -7000;
			light.position.y = 150;
			light.position.x = 0;
			sun.rotation.set(Math.PI/2, 0, 0);
			scene.add(sun);
			sun.position.set(0, 300, -6000);
			var x = 0,
				y = 0,
				r = 1;
			while (x < 12) {
				while (y < 12) {
					if (Math.random() < 0.25) {
						cell = new THREE.Mesh(cellGeometry, panelMat);
						three.scene.add(cell);
						cell.position.set(-6000 + (x*r*1200), -1000 + Math.floor(Math.random()*4)*256, -10000 + ((y*r)+((x%2)*0.5))*1000);
					}
					y++;
				}
				y = 0;
				x++;
			}

		animate();
	}
};
