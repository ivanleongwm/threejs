import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// THREE CUBES IN A GROUP (GROUPING OBJECTS TOGETHER SO THEY CAN ROTATE TOGETHER)
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x000ff00})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x0000ff})
)
cube3.position.x = 2
group.add(cube3)


group.position.y = 1 // move the entire group
group.scale.y = 2
group.rotation.y = 1

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,3)
scene.add(camera)

// CAMERA look directly at center of object
//camera.lookAt(mesh.position)

//console.log(mesh.position.distanceTo(camera.position)) // distance to another vector3 object
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



/*

position,scale,rotation,quartenon
these 4 properties will be compiled into matrices

*/