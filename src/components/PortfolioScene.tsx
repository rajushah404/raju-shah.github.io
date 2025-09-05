import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import type { Section } from '../types'

interface PortfolioSceneProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

const PortfolioScene: React.FC<PortfolioSceneProps> = ({ currentSection }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0a)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 10)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = []
    const shapeCount = 20

    for (let i = 0; i < shapeCount; i++) {
      let geometry: THREE.BufferGeometry
      let material: THREE.Material

      const shapeType = Math.random()
      
      if (shapeType < 0.3) {
        geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
        material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.6),
          transparent: true,
          opacity: 0.8
        })
      } else if (shapeType < 0.6) {
        geometry = new THREE.SphereGeometry(0.3, 16, 16)
        material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color().setHSL(0.1 + Math.random() * 0.2, 0.7, 0.6),
          transparent: true,
          opacity: 0.8
        })
      } else {
        geometry = new THREE.ConeGeometry(0.3, 0.8, 8)
        material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color().setHSL(0.3 + Math.random() * 0.2, 0.7, 0.6),
          transparent: true,
          opacity: 0.8
        })
      }

      const shape = new THREE.Mesh(geometry, material)
      
      // Random positioning
      shape.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )
      
      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )

      // Store original position for floating animation
      ;(shape as any).originalY = shape.position.y
      ;(shape as any).floatSpeed = 0.5 + Math.random() * 1
      ;(shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      }

      shapes.push(shape)
      scene.add(shape)
    }

    // Create particle system
    const particleCount = 2000
    const particlesGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particleCount * 3)
    const colorArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 50
      posArray[i + 1] = (Math.random() - 0.5) * 50
      posArray[i + 2] = (Math.random() - 0.5) * 50

      const color = new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.8, 0.6)
      colorArray[i] = color.r
      colorArray[i + 1] = color.g
      colorArray[i + 2] = color.b
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x4f46e5, 1, 100)
    pointLight.position.set(0, 0, 10)
    scene.add(pointLight)

    // Mouse interaction
    const mouse = new THREE.Vector2()
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Animate shapes
      shapes.forEach((shape, index) => {
        // Floating animation
        shape.position.y = (shape as any).originalY + Math.sin(elapsedTime * (shape as any).floatSpeed + index) * 0.5
        
        // Rotation animation
        shape.rotation.x += (shape as any).rotationSpeed.x
        shape.rotation.y += (shape as any).rotationSpeed.y
        shape.rotation.z += (shape as any).rotationSpeed.z

        // Mouse interaction
        shape.position.x += (mouse.x * 0.1 - shape.position.x) * 0.05
        shape.position.z += (mouse.y * 0.1 - shape.position.z) * 0.05
      })

      // Animate particles
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      // Animate camera based on current section
      const sectionPositions: Record<Section, THREE.Vector3> = {
        home: new THREE.Vector3(0, 0, 10),
        about: new THREE.Vector3(-15, 0, 10),
        skills: new THREE.Vector3(0, -15, 10),
        projects: new THREE.Vector3(15, 0, 10),
        experience: new THREE.Vector3(0, 15, 10),
        contact: new THREE.Vector3(0, 0, 5)
      }

      const targetPosition = sectionPositions[currentSection]
      camera.position.lerp(targetPosition, 0.05)
      camera.lookAt(0, 0, 0)

      // Animate point light
      pointLight.position.x = Math.sin(elapsedTime * 0.5) * 5
      pointLight.position.y = Math.cos(elapsedTime * 0.3) * 5

      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [currentSection])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
      }}
    />
  )
}

export default PortfolioScene
