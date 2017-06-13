import * as THREE from 'three';

class BannerRandom {
    //THREEJS RELATED VARIABLES
    scene;
    camera;
    fieldOfView;
    aspectRatio;
    nearPlane;
    farPlane;
    HEIGHT;
    WIDTH;
    HEIGHT_HALF;
    WIDTH_HALF;
    renderer;
    container;

    mousePos = {
        x: 0,
        y: 0
    };

    parameters;
    materials = [];




    createScene() {
        // Get the width and the height of the screen,
        // use them to set up the aspect ratio of the camera 
        // and the size of the renderer.
        // this.HEIGHT = window.innerHeight;
        this.HEIGHT = 540;
        this.WIDTH = window.innerWidth;
        this.HEIGHT_HALF = this.HEIGHT / 2;
        this.WIDTH_HALF = this.WIDTH / 2;

        // Create the scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0007);

        // Create the camera
        this.aspectRatio = this.WIDTH / this.HEIGHT;
        this.fieldOfView = 75;
        this.nearPlane = 1;
        this.farPlane = 3000;
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
        let time = Date.now() * 0.00005;

        this.camera.position.x += (this.mousePos.x - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mousePos.y - this.camera.position.y) * 0.05;

        this.camera.lookAt(this.scene.position);


        for (let i = 0; i < this.scene.children.length; i++) {
            const object = this.scene.children[i];
            if (object instanceof THREE.Points) {
                object.rotation.y = time * (i < 4 ? i + 1 : - (i + 1));
            }
        }
        for (let i = 0; i < this.materials.length; i++) {
            let color = this.parameters[i][0];
            const h = (360 * (color[0] + time) % 360) / 360;
            this.materials[i].color.setHSL(h, color[1], color[2]);
        }

        //render tge scene
        this.renderer.render(this.scene, this.camera);

    }

    createSprites() {
        let geometry = new THREE.Geometry();
        let sprite = new THREE.TextureLoader().load(require('../../assets/textures/sprites/spark1.png'));
        // let sprite = new THREE.TextureLoader().load(require('../../assets/textures/sprites/6.png'));
        for (let i = 0; i < 5000; i++) {
            const vertex = new THREE.Vector3();
            vertex.x = 2000 * Math.random() - 1000;
            vertex.y = 2000 * Math.random() - 1500;
            vertex.z = 2000 * Math.random() - 100;
            geometry.vertices.push(vertex);
        }

        this.parameters = [
            [[1, 1, 0.5], 27],
            [[0.95, 1, 0.5], 25],
            [[0.90, 1, 0.5], 20],
            [[0.85, 1, 0.5], 15],
            [[0.80, 1, 0.5], 10]
        ];

        let particles;
        for (let i = 0; i < this.parameters.length; i++) {
            // this.color = this.parameters[i][0];
            let size = this.parameters[i][1];
            // this.materials[i] = new THREE.PointsMaterial({ size: size });
            this.materials[i] = new THREE.PointsMaterial({
                size: size,
                sizeAttenuation: false,
                map: sprite,
                alphaTest: 0.5,
                transparent: true
            });
            particles = new THREE.Points(geometry, this.materials[i]);
            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;
            this.scene.add(particles);
        }

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
            this.mousePos.x = event.touches[0].pageX - this.WIDTH_HALF;
            this.mousePos.y = event.touches[0].pageY - this.HEIGHT_HALF;
        }
    }
    onDocumentTouchMove(event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            this.mousePos.x = event.touches[0].pageX - this.WIDTH_HALF;
            this.mousePos.y = event.touches[0].pageY - this.HEIGHT_HALF;
        }
    }
    onDocumentMouseMove(event) {
        this.mousePos.x = event.clientX - this.WIDTH_HALF;
        this.mousePos.y = event.clientY - this.HEIGHT_HALF;
    }
}

export default BannerRandom;