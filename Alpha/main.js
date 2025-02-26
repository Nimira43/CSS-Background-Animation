import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 0, 5)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const material = new THREE.MeshNormalMaterial()
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)

const cube1 = new THREE.Mesh(cubeGeometry, material)
const cube2 = new THREE.Mesh(cubeGeometry, material)
const cube3 = new THREE.Mesh(cubeGeometry, material)
const cube4 = new THREE.Mesh(cubeGeometry, material)
const cube5 = new THREE.Mesh(cubeGeometry, material)
cube1.position.set(-5, 0, 0)
cube2.position.set(-2.5, 0, 0)
cube3.position.set(0, 0, 0)
cube4.position.set(2.5, 0, 0)
cube5.position.set(5, 0, 0)
scene.add(cube1)
scene.add(cube2)
scene.add(cube3)
scene.add(cube4)
scene.add(cube5)

renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
    
  renderer.render(scene, camera)
}

animate()


