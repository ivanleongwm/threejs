import * as THREE from 'three'
import gsap from 'gsap'

/*
To move objects we need to update objects and do a render on each frame
request animation frame: to call a function provided on the next frame
create function, call it, and call request animation frame in the same function
*/

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Animations

// Clock
const clock = new THREE.Clock()

gsap.to(mesh.position,{duration: 1, delay:1, x:2})


const tick = () => {
    /*
    // Clock
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)

    // Update objects
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)
    */
    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
    
}

tick()