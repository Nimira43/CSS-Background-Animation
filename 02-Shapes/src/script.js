import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(drawFrame)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const aspect = window.innerWidth / window.innerHeight

const camera = new THREE.PerspectiveCamera(30, aspect)
camera.position.set(3, 3, 8)
camera.lookAt(new THREE.Vector3())

let geometry = new THREE.BoxGeometry(2, 2,)
const material = new THREE.MeshPhongMaterial()

let cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const light = new THREE.PointLight()
light.position.set(3, 4, 5)
scene.add(light)

light = new THREE.PointLight()
light.position.set(-3, 4, -5)
scene.add(light)

function drawFrame() {
  scene.rotation.y += 0.005
  renderer.render(scene, camera)
}

