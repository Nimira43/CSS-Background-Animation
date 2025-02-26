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

renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
    
  renderer.render(scene, camera)
}

animate()


