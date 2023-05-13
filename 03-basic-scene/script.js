
//Scene
const scene = new THREE.Scene()

// Create a mesh for a visible object
// mesh is a combination of geometry (shape) and material (color of the shape)
// Box Geometry for Cube (RED CUBE)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera serves as a point of view (renders only from one camera regardless of how many, can move between cameras)
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer will do a render of the scene done through your camera
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)