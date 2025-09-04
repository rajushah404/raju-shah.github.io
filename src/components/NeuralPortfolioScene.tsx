import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import type { Section } from '../types'

interface NeuralPortfolioSceneProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

interface NeuralNode {
  position: THREE.Vector3
  connections: number[]
  data: any
  isActive: boolean
  pulsePhase: number
}

const NeuralPortfolioScene: React.FC<NeuralPortfolioSceneProps> = ({ currentSection, onSectionChange }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const neuralNodesRef = useRef<NeuralNode[]>([])

  // Create neural network structure
  const createNeuralNetwork = useCallback(() => {
    const nodes: NeuralNode[] = []
    
    // Create 6 main nodes for each section
    const sections: Section[] = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    const radius = 8
    
    sections.forEach((section, index) => {
      const angle = (index / sections.length) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = (Math.random() - 0.5) * 4
      
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        connections: [],
        data: { section, index },
        isActive: section === currentSection,
        pulsePhase: Math.random() * Math.PI * 2
      })
    })
    
    // Create hidden layer nodes
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 12
      const y = (Math.random() - 0.5) * 12
      const z = (Math.random() - 0.5) * 8
      
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        connections: [],
        data: { type: 'hidden', index: i },
        isActive: false,
        pulsePhase: Math.random() * Math.PI * 2
      })
    }
    
    // Create connections between nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = node.position.distanceTo(otherNode.position)
          if (distance < 6 && Math.random() > 0.7) {
            node.connections.push(j)
          }
        }
      })
    })
    
    neuralNodesRef.current = nodes
    return nodes
  }, [currentSection])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup with futuristic atmosphere
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000011)
    scene.fog = new THREE.Fog(0x000011, 10, 50)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 15)

    // Renderer setup with advanced effects
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
    renderer.toneMappingExposure = 1.5
    renderer.outputColorSpace = THREE.SRGBColorSpace
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Create neural network
    const nodes = createNeuralNetwork()

    // Create node meshes
    const nodeMeshes: THREE.Mesh[] = []
    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16)
    
    nodes.forEach((node, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: node.data.section ? 0x00ff88 : 0x0088ff,
        transparent: true,
        opacity: 0.8,
        emissive: node.data.section ? 0x004422 : 0x002244,
        emissiveIntensity: 0.3
      })
      
      const mesh = new THREE.Mesh(nodeGeometry, material)
      mesh.position.copy(node.position)
      mesh.userData = { nodeIndex: index, node }
      nodeMeshes.push(mesh)
      scene.add(mesh)
    })

    // Create connection lines
    const connectionLines: THREE.Line[] = []
    nodes.forEach((node) => {
      node.connections.forEach(connectionIndex => {
        const otherNode = nodes[connectionIndex]
        const geometry = new THREE.BufferGeometry().setFromPoints([
          node.position,
          otherNode.position
        ])
        
        const material = new THREE.LineBasicMaterial({
          color: 0x00ff88,
          transparent: true,
          opacity: 0.3
        })
        
        const line = new THREE.Line(geometry, material)
        connectionLines.push(line)
        scene.add(line)
      })
    })

    // Create data streams (matrix-style)
    const dataStreams: THREE.Mesh[] = []
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.PlaneGeometry(0.1, 2)
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      })
      
      const stream = new THREE.Mesh(geometry, material)
      stream.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      )
      stream.rotation.z = Math.random() * Math.PI
      stream.userData = { speed: Math.random() * 0.02 + 0.01 }
      dataStreams.push(stream)
      scene.add(stream)
    }

    // Create holographic particles
    const particleCount = 1000
    const particlesGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particleCount * 3)
    const colorArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 40
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 40
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 40

      const color = new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 1, 0.8)
      colorArray[i * 3] = color.r
      colorArray[i * 3 + 1] = color.g
      colorArray[i * 3 + 2] = color.b
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Advanced lighting system
    const ambientLight = new THREE.AmbientLight(0x001122, 0.3)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x00ff88, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight1 = new THREE.PointLight(0x0088ff, 1, 100)
    pointLight1.position.set(-10, 0, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff0088, 1, 100)
    pointLight2.position.set(10, 0, -10)
    scene.add(pointLight2)

    // Mouse interaction with AI prediction
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Voice control setup
    const handleVoiceCommand = (event: KeyboardEvent) => {
      if (event.key === 'v' || event.key === 'V') {
        setIsVoiceActive(!isVoiceActive)
        // Simulate voice recognition
        setTimeout(() => {
          const sections: Section[] = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
          const randomSection = sections[Math.floor(Math.random() * sections.length)]
          onSectionChange(randomSection)
          setIsVoiceActive(false)
        }, 2000)
      }
    }

    window.addEventListener('keydown', handleVoiceCommand)

    // Animation loop with AI-like behavior
    const clock = new THREE.Clock()
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Animate neural nodes with AI-like pulsing
      nodeMeshes.forEach((mesh, index) => {
        const node = neuralNodesRef.current[index]
        if (node) {
          // AI prediction simulation
          const prediction = Math.sin(elapsedTime * 2 + node.pulsePhase) * 0.1
          mesh.position.y = node.position.y + prediction
          
          // Color changes based on activity
          const material = mesh.material as THREE.MeshPhongMaterial
          if (node.isActive) {
            material.color.setHSL(0.3, 1, 0.8)
            material.emissive.setHSL(0.3, 1, 0.2)
          } else {
            material.color.setHSL(0.5 + Math.sin(elapsedTime + index) * 0.1, 1, 0.6)
            material.emissive.setHSL(0.5, 1, 0.1)
          }
          
          // Scale based on mouse proximity
          const mouseInfluence = 1 + Math.sin(elapsedTime * 3 + index) * 0.1
          mesh.scale.setScalar(mouseInfluence)
        }
      })

      // Animate data streams
      dataStreams.forEach(stream => {
        stream.position.y += stream.userData.speed
        stream.rotation.z += 0.01
        
        if (stream.position.y > 20) {
          stream.position.y = -20
        }
      })

      // Animate particles with neural network influence
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      // Camera movement with AI-like behavior
      const targetPosition = new THREE.Vector3(
        mousePosition.x * 3,
        mousePosition.y * 3,
        15 + Math.sin(elapsedTime * 0.5) * 2
      )
      camera.position.lerp(targetPosition, 0.05)
      camera.lookAt(0, 0, 0)

      // Dynamic lighting
      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 10
      pointLight1.position.z = Math.cos(elapsedTime * 0.3) * 10
      
      pointLight2.position.x = Math.cos(elapsedTime * 0.4) * 10
      pointLight2.position.z = Math.sin(elapsedTime * 0.6) * 10

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
      window.removeEventListener('keydown', handleVoiceCommand)
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [currentSection, mousePosition, isVoiceActive, onSectionChange, createNeuralNetwork])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 w-full h-full"
      style={{ 
        background: 'radial-gradient(ellipse at center, #000011 0%, #000000 100%)',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
      }}
    >
      {/* Voice Control Indicator */}
      {isVoiceActive && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-4 border border-green-500/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">AI Listening...</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-50 text-xs text-gray-400">
        <p>Press 'V' for AI Voice Control</p>
        <p>Move mouse to interact with neural network</p>
      </div>
    </div>
  )
}

export default NeuralPortfolioScene