import * as THREE from 'three';
import gsap from 'gsap';

function webgl() {
    const canvas = document.querySelector('canvas.webgl');
    const scene = new THREE.Scene();
    
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
    
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
    
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
    
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16), material);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 16), material);
    
    cube.position.set(0, 0, -5);
    cylinder.position.set(-6, 0, -5);
    sphere.position.set(6, 0, -5);
    scene.add(cube, cylinder, sphere);
    
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    let contactTl = gsap.timeline({ paused: true }) 
    .to(camera.position, {
        x: 6,
        duration: 3,
        ease: 'Quart.easeInOut'
    })
    
    document.querySelector('.kebab').addEventListener('click', () => { contactTl.play() })

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Animatieloop
    const animate = () => {
        requestAnimationFrame(animate);
    
        // Voeg hier eventuele animatie toe
    
        renderer.render(scene, camera);
    };
    
    animate();
    
}

export default webgl