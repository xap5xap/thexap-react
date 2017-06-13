import * as THREE from 'three';

class BannerDots {
    //THREEJS RELATED VARIABLES
    scene;
    camera;
    fieldOfView;
    aspectRatio;
    nearPlane;
    farPlane;
    HEIGHT;
    WIDTH;
    renderer;
    container;

    //LIGHTS
    hemisphereLight;
    shadowLight;
    ambientLight;
    material;
    sea;
    mesh;

    mousePos = {
        x: 0,
        y: 0
    };




    createScene() {
        // Get the width and the height of the screen,
        // use them to set up the aspect ratio of the camera 
        // and the size of the renderer.
        // this.HEIGHT = window.innerHeight;
        this.HEIGHT = 540;
        this.WIDTH = window.innerWidth;

        // Create the scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.001);

        // Create the camera
        this.aspectRatio = this.WIDTH / this.HEIGHT;
        this.fieldOfView = 55;
        this.nearPlane = 2;
        this.farPlane = 2000;
        this.camera = new THREE.PerspectiveCamera(
            this.fieldOfView,
            this.aspectRatio,
            this.nearPlane,
            this.farPlane
        );

        // Set the position of the camera
        this.camera.position.z = 1000;

        // Create the renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Define the size of the renderer; in this case,
        // it will fill the entire screen
        this.renderer.setSize(this.WIDTH, this.HEIGHT);


        // Add the DOM element of the renderer to the 
        // container we created in the HTML
        this.container = document.getElementById('world');
        // debugger;
        this.container.appendChild(this.renderer.domElement);

        // Listen to the screen: if the user resizes it
        // we have to update the camera and the renderer size
        window.addEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    createLights() {
        // an ambient light modifies the global color of a scene and makes the shadows softer
        this.ambientLight = new THREE.AmbientLight(0xdc8874, .5);
        this.scene.add(this.ambientLight);
        //A hemsphere light is a gradient colored light
        //the first parameter is the sky color, the second parameter is the groudn color,
        //the third parameter is the intensity of the light
        this.hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);

        //A directional light shines from a specific direction
        //It acts like the sun, that means that all the rays produced are paralel
        this.shadowLight = new THREE.DirectionalLight(0xffffff, .9);

        //set the direction of the light
        this.shadowLight.position.set(150, 350, 350);

        //Allow shadow casting
        this.shadowLight.castShadow = true;

        //Define the visible area of the projected shadow
        this.shadowLight.shadow.camera.left = -400;
        this.shadowLight.shadow.camera.right = 400;
        this.shadowLight.shadow.camera.top = 400;
        this.shadowLight.shadow.camera.bottom = -400;
        this.shadowLight.shadow.camera.near = 1;
        this.shadowLight.shadow.camera.far = 1000;

        //Define the resolution of the shadow; the higher the better
        //but also the more expensive and less performant
        this.shadowLight.shadow.mapSize.width = 2048;
        this.shadowLight.shadow.mapSize.height = 2048;

        //to activae the lights. just add them to the scene
        this.scene.add(this.hemisphereLight);
        this.scene.add(this.shadowLight);
    }
    handleWindowResize() {
        //update height and width of the renderer and the camera
        this.HEIGHT = 540;
        this.WIDTH = window.innerWidth;
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.camera.aspect = this.WIDTH / this.HEIGHT;
        this.camera.updateProjectionMatrix();
    }

    loop() {
        this.render();

        //call the loop function again
        requestAnimationFrame(this.loop.bind(this));
    }

    render() {
        let time = Date.now() * 0.00005;

        this.camera.position.x = (this.mousePos.x - this.camera.position.x) * 0.5;
        this.camera.position.y = (this.mousePos.y - this.camera.position.y) * 0.5;

        this.camera.lookAt(this.scene.position);

        let h = (360 * (0.1 + time) % 360) / 360;
        this.material.color.setHSL(h, 0.5, 0.5);
        //render tge scene
        this.renderer.render(this.scene, this.camera);

    }

    createSprites() {
        let geometry = new THREE.Geometry();
        let sprite = new THREE.TextureLoader().load(require('../../assets/textures/sprites/disc.png'));
        for (let i = 0; i < 10000; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = 3000 * Math.random() - 1000;
            vertex.y = 2000 * Math.random() - 1000;
            vertex.z = 2000 * Math.random() - 1000;
            geometry.vertices.push(vertex);
        }

        this.material = new THREE.PointsMaterial({
            size: 35,
            sizeAttenuation: false,
            map: sprite,
            alphaTest: 0.5,
            transparent: true
        });
        this.material.color.setHSL(1.0, 0.3, 0.7);

        let particles = new THREE.Points(geometry, this.material);
        this.scene.add(particles);
    }

    init() {
        this.createScene();
        // add the lights
        this.createLights();
        this.createSprites();

        document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
        document.addEventListener('touchstart', this.onDocumentTouchStart.bind(this), false);
        document.addEventListener('touchmove', this.onDocumentTouchMove.bind(this), false);


        this.loop();
    }

    onDocumentTouchStart(event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            this.mousePos.x = event.touches[0].pageX - this.WIDTH / 2;
            this.mousePos.y = event.touches[0].pageY - this.HEIGHT / 2;
        }
    }
    onDocumentTouchMove(event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            this.mousePos.x = event.touches[0].pageX - this.WIDTH / 2;
            this.mousePos.y = event.touches[0].pageY - this.HEIGHT / 2;
        }
    }
    onDocumentMouseMove(event) {
        console.log('event.clientX', event.clientX);
        console.log('event.clientY', event.clientY);
        console.log('event.clientX - this.WIDTH / 2', event.clientX - this.WIDTH / 2);
        console.log('event.clientY - this.HEIGHT / 2', event.clientY - this.HEIGHT / 2);
        this.mousePos.x = event.clientX - this.WIDTH / 2;
        this.mousePos.y = event.clientY - this.HEIGHT / 2;
        // this.mousePos.x = event.clientX;
        // this.mousePos.y = event.clientY;
    }
}

export default BannerDots;