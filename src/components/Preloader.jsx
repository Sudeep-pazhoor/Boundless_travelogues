import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Environment,
  useTexture,
  Text,
  MeshTransmissionMaterial,
  ContactShadows,
  Html,
  useProgress,
  Sparkles
} from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

// --- Loading Spinner Component ---
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: '#00D4FF', fontFamily: 'sans-serif', fontSize: '1.2rem', textAlign: 'center' }}>
        <div className="spinner" style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(0, 212, 255, 0.3)',
          borderTop: '4px solid #00D4FF',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '10px',
          margin: '0 auto'
        }}></div>
        {progress.toFixed(0)}%
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Html>
  );
};

// --- 3D Compass Components ---

const Compass = ({ onSequenceComplete, deviceType = 'desktop' }) => {
  const groupRef = useRef();
  const compassElementsRef = useRef();
  const needleRef = useRef();
  const glassRef = useRef();
  const screwsRef = useRef([]);
  const logoPlaneRef = useRef();
  const { camera } = useThree();

  // Load Logo Texture
  const logoTexture = useTexture('/logo.webp');

  // Get responsive compass settings
  const getCompassSettings = () => {
    switch (deviceType) {
      case 'small-mobile':
        return {
          compassSize: 2.5,
          sparkleCount: 25,
          sparkleScale: 4,
          needleLength: 1.0,
          fontSize: { cardinal: 0.5, secondary: 0.35 },
          animationDuration: { intro: 2, needle: 2.5, orbit: 3, destruction: 0.8 }
        };
      case 'mobile':
        return {
          compassSize: 3.0,
          sparkleCount: 35,
          sparkleScale: 5,
          needleLength: 1.2,
          fontSize: { cardinal: 0.6, secondary: 0.4 },
          animationDuration: { intro: 2.2, needle: 2.8, orbit: 3.2, destruction: 0.9 }
        };
      case 'tablet':
        return {
          compassSize: 3.2,
          sparkleCount: 40,
          sparkleScale: 5.5,
          needleLength: 1.3,
          fontSize: { cardinal: 0.65, secondary: 0.45 },
          animationDuration: { intro: 2.3, needle: 2.9, orbit: 3.3, destruction: 0.95 }
        };
      default: // desktop
        return {
          compassSize: 3.5,
          sparkleCount: 50,
          sparkleScale: 6,
          needleLength: 1.4,
          fontSize: { cardinal: 0.7, secondary: 0.5 },
          animationDuration: { intro: 2.5, needle: 3, orbit: 3.5, destruction: 1 }
        };
    }
  };

  const settings = getCompassSettings();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onSequenceComplete) onSequenceComplete();
      }
    });

    // Initial Camera Position - Responsive
    const initialY = deviceType === 'small-mobile' ? 12 : 14;
    const midY = deviceType === 'small-mobile' ? 6 : 7;
    const midZ = deviceType === 'small-mobile' ? 6 : 7;
    const orbitX = deviceType === 'small-mobile' ? 6 : 7;
    const orbitY = deviceType === 'small-mobile' ? 4 : 5;
    const orbitZ = deviceType === 'small-mobile' ? -6 : -7;

    camera.position.set(0, initialY, 0);
    camera.lookAt(0, 0, 0);

    // 1. Intro: Zoom in and tilt - Responsive timing
    tl.to(camera.position, {
      x: 0,
      y: midY,
      z: midZ,
      duration: settings.animationDuration.intro,
      ease: "power3.inOut",
      onUpdate: () => camera.lookAt(0, 0, 0)
    });

    // 2. Needle Spin & Settle - Responsive timing
    tl.to(needleRef.current.rotation, {
      y: Math.PI * 10 + 0.5,
      duration: settings.animationDuration.needle,
      ease: "elastic.out(1, 0.3)",
    }, "-=2");

    // 3. Orbit around - Responsive timing
    tl.to(camera.position, {
      x: orbitX,
      y: orbitY,
      z: orbitZ,
      duration: settings.animationDuration.orbit,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(0, 0, 0)
    });

    // 4. Destruction Sequence - Responsive timing
    tl.to(glassRef.current.position, { y: 5, duration: settings.animationDuration.destruction, ease: "power2.in" }, "break");
    tl.to(glassRef.current.rotation, { x: Math.random(), z: Math.random(), duration: settings.animationDuration.destruction }, "break");
    tl.to(glassRef.current.material, { opacity: 0, duration: 0.5, delay: 0.5 }, "break");

    screwsRef.current.forEach((screw, i) => {
      tl.to(screw.position, { y: 2, duration: 0.5, delay: i * 0.1 }, "break");
      tl.to(screw.rotation, { y: Math.PI * 4, duration: 0.5, delay: i * 0.1 }, "break");
      tl.to(screw.position, { y: -10, duration: 1, ease: "power2.in", delay: i * 0.1 + 0.5 }, "break+=0.5");
    });

    // 5. Reveal Logo - Responsive positioning
    const finalY = deviceType === 'small-mobile' ? 3.5 : 4;
    const finalZ = deviceType === 'small-mobile' ? 0.08 : 0.1;

    tl.to(camera.position, {
      x: 0,
      y: finalY,
      z: finalZ,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(0, 0, 0)
    }, "reveal");

    tl.to(needleRef.current.scale, { x: 0, y: 0, z: 0, duration: 1 }, "reveal");

    // Hide the compass elements (wheel) when logo appears
    tl.to(compassElementsRef.current.scale, { x: 0, y: 0, z: 0, duration: 1 }, "reveal");

    tl.fromTo(logoPlaneRef.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 1.5, ease: "back.out(1.7)" },
      "reveal+=0.5"
    );

  }, [camera, onSequenceComplete, deviceType, settings]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1 - 0.5;
    }
  });

  // Custom Needle Geometry (Diamond Shape) - Responsive size
  const needleGeo = new THREE.BufferGeometry();
  const needleScale = settings.needleLength / 1.4; // Scale based on settings
  const needleVertices = new Float32Array([
    // North Half (Red)
    0, 0.1, 0, -0.15 * needleScale, 0, 0, 0, 0, -1.4 * needleScale,
    0, 0.1, 0, 0, 0, -1.4 * needleScale, 0.15 * needleScale, 0, 0,
    0, -0.1, 0, 0, 0, -1.4 * needleScale, -0.15 * needleScale, 0, 0,
    0, -0.1, 0, 0.15 * needleScale, 0, 0, 0, 0, -1.4 * needleScale,

    // South Half (Silver)
    0, 0.1, 0, 0, 0, 1.4 * needleScale, -0.15 * needleScale, 0, 0,
    0, 0.1, 0, 0.15 * needleScale, 0, 0, 0, 0, 1.4 * needleScale,
    0, -0.1, 0, -0.15 * needleScale, 0, 0, 0, 0, 1.4 * needleScale,
    0, -0.1, 0, 0, 0, 1.4 * needleScale, 0.15 * needleScale, 0, 0
  ]);
  needleGeo.setAttribute('position', new THREE.BufferAttribute(needleVertices, 3));
  needleGeo.computeVertexNormals();

  return (
    <group ref={groupRef}>
      {/* Compass Elements Group (everything except logo) */}
      <group ref={compassElementsRef}>
        {/* Glittering Sparkles - Responsive count and scale */}
        <Sparkles
          count={settings.sparkleCount}
          scale={settings.sparkleScale}
          size={4}
          speed={0.4}
          opacity={0.5}
          color="#00D4FF"
        />

        {/* --- Compass Case --- Responsive size */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[settings.compassSize, settings.compassSize, 0.6, 64]} />
          <meshPhysicalMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={0.2}
            metalness={1}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={3}
          />
        </mesh>
        {/* Inner Rim - Responsive size */}
        <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[settings.compassSize - 0.02, settings.compassSize - 0.02, 0.2, 64, 1, true]} />
          <meshStandardMaterial color="#0099cc" side={THREE.DoubleSide} metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Bottom Plate - Responsive size */}
        <mesh position={[0, -0.31, 0]} receiveShadow>
          <cylinderGeometry args={[settings.compassSize - 0.02, settings.compassSize - 0.02, 0.1, 64]} />
          <meshStandardMaterial color="#000" />
        </mesh>

        {/* --- Dial Face --- Responsive size */}
        <mesh position={[0, 0.31, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[settings.compassSize - 0.4, 64]} />
          <meshStandardMaterial color="#050505" roughness={0.3} metalness={0.4} />
        </mesh>

        {/* Markings - Responsive font sizes and positioning */}
        <group position={[0, 0.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          {/* Cardinal Directions - Responsive font sizes */}
          <Text position={[0, (settings.compassSize - 1), 0]} fontSize={settings.fontSize.cardinal} color="#00D4FF" anchorX="center" anchorY="middle" fontWeight="bold">N</Text>
          <Text position={[(settings.compassSize - 1), 0, 0]} fontSize={settings.fontSize.secondary} color="#FFFFFF" rotation={[0, 0, -Math.PI / 2]} anchorX="center" anchorY="middle">E</Text>
          <Text position={[0, -(settings.compassSize - 1), 0]} fontSize={settings.fontSize.secondary} color="#FFFFFF" rotation={[0, 0, Math.PI]} anchorX="center" anchorY="middle">S</Text>
          <Text position={[-(settings.compassSize - 1), 0, 0]} fontSize={settings.fontSize.secondary} color="#FFFFFF" rotation={[0, 0, Math.PI / 2]} anchorX="center" anchorY="middle">W</Text>

          {/* Decorative Rings - Responsive sizing */}
          <mesh position={[0, 0, -0.01]}>
            <ringGeometry args={[(settings.compassSize - 1.4), (settings.compassSize - 1.35), 64]} />
            <meshBasicMaterial color="#00D4FF" toneMapped={false} />
          </mesh>
          <mesh position={[0, 0, -0.01]}>
            <ringGeometry args={[(settings.compassSize - 0.7), (settings.compassSize - 0.68), 64]} />
            <meshBasicMaterial color="#333" />
          </mesh>

          {/* Ticks - Responsive sizing */}
          {Array.from({ length: 60 }).map((_, i) => {
            const isMajor = i % 5 === 0;
            const length = isMajor ? 0.35 * (settings.compassSize / 3.5) : 0.15 * (settings.compassSize / 3.5);
            const width = isMajor ? 0.06 * (settings.compassSize / 3.5) : 0.02 * (settings.compassSize / 3.5);
            const color = isMajor ? "#00D4FF" : "#555";
            const tickRadius = (settings.compassSize - 0.7);
            return (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 30]} position={[0, 0, 0]}>
                <planeGeometry args={[width, length]} />
                <meshBasicMaterial color={color} toneMapped={false} />
                <group position={[0, tickRadius, 0]} />
              </mesh>
            );
          })}
        </group>

        {/* --- Needle --- Responsive sizing */}
        <group ref={needleRef} position={[0, 0.5, 0]}>
          {/* Center Cap - Responsive size */}
          <mesh position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.3 * (settings.compassSize / 3.5), 0.3 * (settings.compassSize / 3.5), 0.15, 32]} />
            <meshPhysicalMaterial color="#00D4FF" metalness={1} roughness={0.1} clearcoat={1} />
          </mesh>
          <mesh position={[0, 0.13, 0]}>
            <sphereGeometry args={[0.15 * (settings.compassSize / 3.5), 16, 16]} />
            <meshPhysicalMaterial color="#00D4FF" metalness={1} roughness={0.1} clearcoat={1} />
          </mesh>

          {/* North (Red Diamond) - Responsive size */}
          <mesh position={[0, 0, -1.0 * needleScale]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.02 * needleScale, 0.2 * needleScale, 2.0 * needleScale, 4]} />
            <meshStandardMaterial color="#D00000" roughness={0.2} metalness={0.3} />
          </mesh>
          {/* South (Silver Diamond) - Responsive size */}
          <mesh position={[0, 0, 1.0 * needleScale]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.02 * needleScale, 0.2 * needleScale, 2.0 * needleScale, 4]} />
            <meshStandardMaterial color="#E0E0E0" roughness={0.2} metalness={0.6} />
          </mesh>
        </group>

        {/* --- Glass Cover --- Responsive size */}
        <mesh ref={glassRef} position={[0, 0.7, 0]}>
          <cylinderGeometry args={[settings.compassSize - 0.2, settings.compassSize - 0.2, 0.15, 64]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            roughness={0.02}
            transmission={0.95}
            ior={1.52}
            chromaticAberration={0.02}
            anisotropy={0.1}
          />
        </mesh>

        {/* --- Screws --- Responsive positioning */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            ref={el => screwsRef.current[i] = el}
            position={[
              Math.sin(i * Math.PI / 2 + Math.PI / 4) * (settings.compassSize - 0.2),
              0.6,
              Math.cos(i * Math.PI / 2 + Math.PI / 4) * (settings.compassSize - 0.2)
            ]}
          >
            <cylinderGeometry args={[0.15 * (settings.compassSize / 3.5), 0.15 * (settings.compassSize / 3.5), 0.2, 16]} />
            <meshStandardMaterial color="#A9A9A9" metalness={1} roughness={0.1} />
            <mesh position={[0, 0.11, 0]}>
              <boxGeometry args={[0.2 * (settings.compassSize / 3.5), 0.05, 0.05]} />
              <meshStandardMaterial color="#111" />
            </mesh>
          </mesh>
        ))}
      </group>

      {/* --- Logo Reveal Plane --- Responsive size */}
      <mesh
        ref={logoPlaneRef}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0, 0, 0]}
      >
        <planeGeometry args={[1.5 * (settings.compassSize / 3.5), 1.5 * (settings.compassSize / 3.5)]} />
        <meshStandardMaterial
          map={logoTexture}
          transparent
          alphaTest={0.1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');

  // Detect device type and screen size
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      const isSmallMobile = width <= 480;

      if (isSmallMobile) {
        setDeviceType('small-mobile');
      } else if (isMobile) {
        setDeviceType('mobile');
      } else if (isTablet) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Remove static placeholder when React component mounts
  useEffect(() => {
    const placeholder = document.getElementById('preloader-placeholder');
    if (placeholder) {
      placeholder.style.opacity = '0';
      setTimeout(() => {
        placeholder.remove();
      }, 500);
    }
  }, []);

  const handleSequenceComplete = () => {
    setShowText(true);
    setTimeout(() => {
      gsap.to("#preloader-container", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }
      });
    }, 2000);
  };

  // Get responsive values based on device type
  const getResponsiveValues = () => {
    switch (deviceType) {
      case 'small-mobile':
        return {
          canvasFov: 50,
          cameraDistance: 8,
          textWidth: 'clamp(180px, 80vw, 280px)',
          textMaxWidth: '80%',
          canvasDpr: [0.8, 1.5]
        };
      case 'mobile':
        return {
          canvasFov: 45,
          cameraDistance: 9,
          textWidth: 'clamp(200px, 70vw, 320px)',
          textMaxWidth: '70%',
          canvasDpr: [1, 1.8]
        };
      case 'tablet':
        return {
          canvasFov: 42,
          cameraDistance: 10,
          textWidth: 'clamp(250px, 50vw, 380px)',
          textMaxWidth: '50%',
          canvasDpr: [1, 2]
        };
      default: // desktop
        return {
          canvasFov: 40,
          cameraDistance: 10,
          textWidth: 'clamp(250px, 35vw, 400px)',
          textMaxWidth: '35%',
          canvasDpr: [1, 2]
        };
    }
  };

  const responsiveValues = getResponsiveValues();

  if (!isVisible) return null;

  return (
    <div
      id="preloader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#050505',
        zIndex: 2147483647, // Max safe integer Z-Index
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <style>{`
        #preloader-container {
          /* Ensure full coverage on all devices */
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          
          /* Handle different device orientations */
          min-height: 100vh;
          min-width: 100vw;
          
          /* Prevent scrolling and zooming on mobile */
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          
          /* Ensure proper rendering on high DPI displays */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Handle landscape orientation on mobile */
        @media screen and (orientation: landscape) and (max-height: 500px) {
          #preloader-container canvas {
            height: 100vh !important;
          }
        }
        
        /* Handle very small screens */
        @media screen and (max-width: 320px) {
          #preloader-container {
            font-size: 14px;
          }
        }
        
        /* Handle high DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          #preloader-container {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Prevent body scroll during preloader */
        body:has(#preloader-container) {
          overflow: hidden !important;
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>

      <Canvas
        shadows
        dpr={responsiveValues.canvasDpr}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
          powerPreference: deviceType === 'small-mobile' ? 'low-power' : 'high-performance'
        }}
        style={{
          width: '100%',
          height: '100%',
          touchAction: 'none', // Prevent touch scrolling on mobile
          display: 'block'
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, responsiveValues.cameraDistance, 0]}
          fov={responsiveValues.canvasFov}
        />

        {/* Enhanced Lighting for Glitter - Adjusted for mobile performance */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.4}
          penumbra={1}
          intensity={deviceType === 'small-mobile' ? 3 : 4}
          castShadow={deviceType !== 'small-mobile'}
          shadow-mapSize={deviceType === 'small-mobile' ? [1024, 1024] : [2048, 2048]}
          color="#ffffff"
        />
        <pointLight position={[-5, 5, -5]} intensity={2} color="#00D4FF" distance={20} />
        <pointLight position={[5, 2, 5]} intensity={1} color="#FFB800" distance={20} />

        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Compass onSequenceComplete={handleSequenceComplete} deviceType={deviceType} />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.6}
            scale={20}
            blur={2}
            far={4}
          />
        </Suspense>
      </Canvas>

      {/* HTML Overlay for Text - Fully Responsive */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
        opacity: showText ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        zIndex: 2147483648,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        <img
          src="/Boundless_text.webp"
          alt="Boundless Travelogues"
          style={{
            maxWidth: responsiveValues.textMaxWidth,
            width: responsiveValues.textWidth,
            height: 'auto',
            filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))',
            imageRendering: 'crisp-edges',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
