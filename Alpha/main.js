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

renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
    
  renderer.render(scene, camera)
}

animate()


