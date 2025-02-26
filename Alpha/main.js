import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 0, 10)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry(4, 7, 8)
// const geometry = new THREE.SphereGeometry(7, 9, 38)
// const geometry = new THREE.PlaneGeometry(12, 5, 21, 17)
// const geometry = new THREE.CylinderGeometry(2, 7, 9, 17, 9, 8)
// const geometry = new THREE.CircleGeometry(7, 17, 36, 5)

const geometry = new THREE.PlaneGeometry(4, 2, 6, 6)
const material = new THREE.MeshBasicMaterial({
  color: 0xff4500,
  wireframe: true
})

const plane = new THREE.Mesh(geometry, material)



scene.add(plane)



renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
  plane.rotation.x += 0.01
  plane.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()


