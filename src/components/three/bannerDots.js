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
        this.container.appendChild(this.renderer.domElement);

        // Listen to the screen: if the user resizes it
        // we have to update the camera and the renderer size
        window.addEventListener('resize', this.handleWindowResize.bind(this), false);
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
        let time = Date.now() * 0.00006;

        this.camera.position.x += (this.mousePos.x - this.camera.position.x) * 0.5;
        this.camera.position.y += (this.mousePos.y - this.camera.position.y) * 0.5;

        this.camera.lookAt(this.scene.position);

        let h = (360 * (0.1 + time) % 360) / 360;
        // this.material.color.setHSL(h, 0.8, 0.3);
        this.material.color.setHSL(h, 0.5, 0.5);
        //render tge scene
        this.renderer.render(this.scene, this.camera);

    }

    createSprites() {
        let geometry = new THREE.Geometry();
        // let sprite = new THREE.TextureLoader().load(require('../../assets/textures/sprites/disc.png'));
        let sprite = new THREE.TextureLoader().load(require('../../assets/textures/sprites/6.png'));
        for (let i = 0; i < 5000; i++) {
            const vertex = new THREE.Vector3();
            vertex.x = 2000 * Math.random() - 1000;
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
        this.material.color.setHSL(1.0, 0.4, 0.7);

        let particles = new THREE.Points(geometry, this.material);
        this.scene.add(particles);
    }

    init() {
        this.createScene();
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
        this.mousePos.x = event.clientX - this.WIDTH / 2;
        this.mousePos.y = event.clientY - this.HEIGHT / 2;
    }
}

export default BannerDots;