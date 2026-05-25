import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

// Asset Imports
import artBeau from "../assets/art-gallery/Pets - Beau.png";
import artCat from "../assets/art-gallery/Pets - Cat.png";
import artLeo from "../assets/art-gallery/Pets - Leo.png";
import artSophie from "../assets/art-gallery/Pets - Sophie.png";
import artPirateExc from "../assets/art-gallery/Pirate Excercise.png";
import artPirateSticker from "../assets/art-gallery/Pirate Night - Sticker.png";
import artAbstractCats from "../assets/art-gallery/Abstract Cats.png";
import artFloatingIslands from "../assets/art-gallery/Floating Islands In Space.png";
import artBeach from "../assets/art-gallery/Sitting At the Beach.png";
import artTeaTime from "../assets/art-gallery/Tea Time.png";
import artDigitalGallery from "../assets/art-gallery/tessa-newbacher-digital-gallery.png";


// SCSS imports (handled globally or via page)
import "../styles/artGallery.scss";

gsap.registerPlugin(ScrollTrigger);

// Categories
const CATEGORIES = {
  PETS: "PETS - Beloved Companions",
  PIRATE: "COMMISSIONED - Pirate Night",
  OTHERS: "DIGITAL.EXE - Experimental Systems",
};

// Artwork Data
const ARTWORK = [
  // Hero Cover Image (Not in main category flow)
  {
    id: "hero-cover",
    title: "Tessa's Digital Gallery",
    filename: "tessa-newbacher-digital-gallery.png",
    category: "HERO",
    src: artDigitalGallery,
    themeColor: "#57E2EC", // Light Blue/Cyan
    description: "Digital gallery cover banner.",
    resolution: "2048x2048",
  },
  // 1. Pets (First)
  {
    id: "pets-beau",
    title: "Beau",
    filename: "Beau.png",
    category: CATEGORIES.PETS,
    src: artBeau,
    themeColor: "#AAEA01", // Neon Green
    description: "A digital portrait of Beau enjoying the beach, his favorite place for eternity across the rainbow bridge.",
    resolution: "2752x2064",
  },
  {
    id: "pets-cat",
    title: "Grassy Cat",
    filename: "Grassy_Cat.png",
    category: CATEGORIES.PETS,
    src: artCat,
    themeColor: "#FA0AED", // Neon Pink
    description: "A cat hiding in the grass, getting ready to pounce.",
    resolution: "2752x2064",
  },
  {
    id: "pets-leo",
    title: "Leo",
    filename: "Leo.png",
    category: CATEGORIES.PETS,
    src: artLeo,
    themeColor: "#5515FE", // Electric Indigo
    description: "A portrait of Leo, dressed in a Hufflepuff themed cloak, stalking his prey in a dark forest cemetery, leaving behind the chaos he has caused because he's orange.",
    resolution: "2064x2752",
  },
  {
    id: "pets-sophie",
    title: "Sophie",
    filename: "Sophie.png",
    category: CATEGORIES.PETS,
    src: artSophie,
    themeColor: "#57E2EC", // Light Blue/Cyan
    description: "In loving memory of my dog Sophie, the sweetest pitbull I've ever met. She always stayed within the boundaries of the yard, even without a fence and loved wearing a fresh bandana.",
    resolution: "6000x6000",
  },
  // 2. Pirate Night (Second)
  {
    id: "pirate-sticker",
    title: "Pirate Sticker",
    filename: "Pirate_Sticker.png",
    category: CATEGORIES.PIRATE,
    src: artPirateSticker,
    themeColor: "#FA0AED", // Neon Pink
    description: "A custom sticker design for Pirate Night - an historical theme night at Market Garden Brewing hosted by Yorecraft Productions. The sticker features the night's musical performer with parrot on his shoulder playing a mandolin, classic Cleveland landmarks (Lorain Bridge), the skyline, a mermaid playing a harp with waves splashing around her, and psychedelic theme background.",
    resolution: "1452x1122",
  },
  {
    id: "pirate-exercise",
    title: "Pirate Exercise",
    filename: "Pirate_Exercise.png",
    category: CATEGORIES.PIRATE,
    src: artPirateExc,
    themeColor: "#AAEA01", // Neon Green
    description: "A practice draft of a pirate with a parrot on his shoulder.",
    resolution: "1452x1122",
  },
  // 3. Others (Third)
  {
    id: "abstract-cats",
    title: "Abstract Cats",
    filename: "Abstract_Cats.png",
    category: CATEGORIES.OTHERS,
    src: artAbstractCats,
    themeColor: "#5515FE", // Electric Indigo
    description: "Black and white simple line drawings of cats in various positions - sitting, stretching and laying down to sleep.",
    resolution: "2064x2752",
  },
  {
    id: "floating-islands",
    title: "Floating Islands",
    filename: "Floating_Islands.png",
    category: CATEGORIES.OTHERS,
    src: artFloatingIslands,
    themeColor: "#FA0AED", // Neon Pink
    description: "A space scene with floating islands, the floating island in the focal point has a tall tree and roots covering it. Heavily inspirated by video games - from Final Fantasy to Zelda to Genshin Impact.",
    resolution: "2064x2752",
  },
  {
    id: "beach",
    title: "Sunset Beach",
    filename: "Sunset_Beach.png",
    category: CATEGORIES.OTHERS,
    src: artBeach,
    themeColor: "#5515FE", // Electric Indigo
    description: "A tranquil illustration of a woman sitting on the beach at night - only lit up by a moon you can barely see in frame.",
    resolution: "4000x3000",
  },
  {
    id: "tea-time",
    title: "Tea Time",
    filename: "Tea_Time.png",
    category: CATEGORIES.OTHERS,
    src: artTeaTime,
    themeColor: "#57E2EC", // Light Blue/Cyan
    description: "Inspired by Studio Ghibli, a bear and an otter sit at a table with warm drinks in a forest setting.",
    resolution: "2752x2064",
  },
];

// GLSL Shaders
const vertexShader = `
  varying vec2 vUv;
  void main() { 
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform float uProgress;
  uniform vec3 uColor;

  uniform vec2 uContainerRes;
  uniform float uGridSize;

  float random (vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  vec2 squaresGrid(vec2 uvCoord) {
      float imageAspectX = 1.0;
      float imageAspectY = 1.0;

      float containerAspectX = uResolution.x / uResolution.y;
      float containerAspectY = uResolution.y / uResolution.x;

      vec2 ratio = vec2(
          min(containerAspectX / imageAspectX, 1.0),
          min(containerAspectY / imageAspectY, 1.0)
      );

      vec2 squareUvs = vec2(
          uvCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,
          uvCoord.y * ratio.y + (1.0 - ratio.y) * 0.5
      );

      return squareUvs;
  }

  void main() {
      float imageAspectX = uResolution.x / uResolution.y;
      float imageAspectY = uResolution.y / uResolution.x;
      
      float containerAspectX = uContainerRes.x / uContainerRes.y;
      float containerAspectY = uContainerRes.y / uContainerRes.x;

      vec2 ratio = vec2(
          min(containerAspectX / imageAspectX, 1.0),
          min(containerAspectY / imageAspectY, 1.0)
      );

      vec2 coverUvs = vec2(
          vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
      );

      // Generate grid
      vec2 squareUvs = squaresGrid(coverUvs);
      float gridSize = floor(uGridSize);
      vec2 grid = vec2(floor(squareUvs.x * gridSize) / gridSize, floor(squareUvs.y * gridSize) / gridSize);
      vec4 gridTexture = vec4(uColor, 0.0);
      
      // Image texture    
      vec4 texture = texture2D(uTexture, coverUvs);
      float height = 0.2;

      // Animates from 1+height down to -height
      float progress = (1.0 + height) - (uProgress * (1.0 + height + height));

      float dist = 1.0 - distance(grid.y, progress);
      float clampedDist = smoothstep(height, 0.0, distance(grid.y, progress));

      float randDist = step(1.0 - height * random(grid), dist);
      dist = step(1.0 - height, dist);
      
      float rand = random(grid); 

      float alpha = dist * (clampedDist + rand - 0.5 * (1.0 - randDist));
      alpha = max(0.0, alpha);
      gridTexture.a = alpha;

      texture.rgba *= step(progress, grid.y);
      
      gl_FragColor = vec4(mix(texture, gridTexture, gridTexture.a));
  }
`;

export default function ArtGallery() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRefs = useRef([]);
  const [webglReady, setWebglReady] = useState(false);
  const [webglSupported, setWebGLSupported] = useState(true);

  // Keep track of ThreeJS objects for cleanup
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshObjectsRef = useRef([]);

  // Group artwork by categories
  const groupedArtwork = {
    [CATEGORIES.PETS]: ARTWORK.filter((art) => art.category === CATEGORIES.PETS),
    [CATEGORIES.PIRATE]: ARTWORK.filter((art) => art.category === CATEGORIES.PIRATE),
    [CATEGORIES.OTHERS]: ARTWORK.filter((art) => art.category === CATEGORIES.OTHERS),
  };

  const heroIndex = ARTWORK.findIndex((a) => a.id === "hero-cover");

  useEffect(() => {
    // Setup Three.js scene
    if (!canvasRef.current) return;

    let scene, camera, renderer;
    const meshObjects = [];
    let animationFrameId;

    try {
      scene = new THREE.Scene();
      sceneRef.current = scene;

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 10;
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      THREE.ColorManagement.legacyMode = false;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      rendererRef.current = renderer;
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to CSS layouts:", e);
      setWebGLSupported(false);
      return;
    }

    // Viewport bounds calculations
    const fovRad = camera.fov * (Math.PI / 180);
    let viewportHeight = camera.position.z * Math.tan(fovRad / 2) * 2;
    let viewportWidth = viewportHeight * camera.aspect;

    // Load textures and create meshes
    let loadedCount = 0;
    const textureLoader = new THREE.TextureLoader();
    const triggers = [];

    ARTWORK.forEach((item, index) => {
      const imgEl = imageRefs.current[index];
      if (!imgEl) return;

      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
          uTexture: { value: new THREE.Texture() },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uContainerRes: { value: new THREE.Vector2(1, 1) },
          uProgress: { value: 0.0 },
          uGridSize: { value: 30.0 }, // grid size of 30 columns for blocky pixel look
          uColor: { value: new THREE.Color(item.themeColor) },
        },
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Keep mesh record
      const meshObj = {
        id: item.id,
        mesh,
        domEl: imgEl,
        documentY: 0,
        documentX: 0,
      };
      meshObjects.push(meshObj);

      // Create ScrollTrigger animation immediately on mount bound to the stable parent window frame
      const anim = gsap.to(material.uniforms.uProgress, {
        value: 1.0,
        scrollTrigger: {
          trigger: imgEl.closest(".y2k-window") || imgEl,
          start: "top bottom-=100", // Start pixelation reveal when element is 100px inside viewport
          end: "bottom top+=100",   // Reset when it leaves
          toggleActions: "play reset restart reset",
        },
        duration: 1.6,
        ease: "linear",
      });
      triggers.push(anim);

      // Async load texture
      textureLoader.load(
        item.src,
        (texture) => {
          texture.colorSpace = THREE.LinearSRGBColorSpace;
          texture.needsUpdate = true;
          material.uniforms.uTexture.value = texture;
          material.uniforms.uResolution.value.set(
            texture.image.naturalWidth,
            texture.image.naturalHeight
          );

          // Force bounds calculation for this mesh
          const rect = imgEl.getBoundingClientRect();
          material.uniforms.uContainerRes.value.set(rect.width, rect.height);

          loadedCount++;
          if (loadedCount === ARTWORK.length) {
            setWebglReady(true);
            // Trigger recalculation for all
            setTimeout(() => {
              handleResize();
              ScrollTrigger.refresh();
            }, 100);
          }
        },
        undefined,
        (err) => {
          console.error("Error loading texture:", item.src, err);
          loadedCount++;
          if (loadedCount === ARTWORK.length) {
            setWebglReady(true);
            setTimeout(() => {
              handleResize();
              ScrollTrigger.refresh();
            }, 100);
          }
        }
      );
    });

    meshObjectsRef.current = meshObjects;

    // Sizing and positioning logic
    const handleResize = () => {
      if (!renderer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      viewportHeight = camera.position.z * Math.tan(fovRad / 2) * 2;
      viewportWidth = viewportHeight * camera.aspect;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      meshObjects.forEach((obj) => {
        const rect = obj.domEl.getBoundingClientRect();
        const scaleX = (rect.width * viewportWidth) / width;
        const scaleY = (rect.height * viewportHeight) / height;

        obj.mesh.scale.set(scaleX, scaleY, 1);

        // Document relative position (will not change unless window is resized)
        obj.documentY =
          -((rect.top + window.scrollY) * viewportHeight) / height +
          viewportHeight / 2 -
          scaleY / 2;
        obj.documentX =
          (rect.left * viewportWidth) / width - viewportWidth / 2 + scaleX / 2;

        obj.mesh.material.uniforms.uContainerRes.value.set(rect.width, rect.height);
      });
    };

    // Calculate initial layout scaling
    handleResize();

    window.addEventListener("resize", handleResize);

    // Animation Tick loop
    const tick = () => {
      const scrollY = window.scrollY;

      meshObjects.forEach((obj) => {
        // Scroll coordinate conversion
        obj.mesh.position.y =
          obj.documentY + (scrollY * viewportHeight) / window.innerHeight;
        obj.mesh.position.x = obj.documentX;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      triggers.forEach((anim) => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
      meshObjects.forEach((obj) => {
        obj.mesh.geometry.dispose();
        obj.mesh.material.dispose();
        scene.remove(obj.mesh);
      });
      renderer.dispose();
    };
  }, [webglSupported]);

  // Refresh ScrollTrigger when WebGL layout status updates
  useEffect(() => {
    if (webglReady) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  }, [webglReady]);

  return (
    <div
      ref={containerRef}
      className={`art-gallery-page ${webglReady && webglSupported ? "webgl-active" : ""}`}
    >
      {/* ThreeJS Overlay Canvas */}
      {webglSupported && (
        <canvas ref={canvasRef} id="gallery-webgl" className="gallery-webgl" />
      )}

      {/* Retro Floating Scanlines/Stars Background Decoration */}
      <div className="gallery-scanlines" />
      <div className="gallery-grid-bg" />

      {/* Gallery Header */}
      <section className="gallery-hero">
        <div className="y2k-window hero-window">
          <div className="y2k-window-header">
            <div className="y2k-window-title">
              <span className="y2k-window-icon">🎨</span>
              <span className="y2k-window-title-text">GALLERY_BROWSER.EXE</span>
            </div>
            <div className="y2k-window-controls">
              <button className="y2k-btn-min">_</button>
              <button className="y2k-btn-max">[]</button>
              <button className="y2k-btn-close">X</button>
            </div>
          </div>

          <div className="y2k-window-body text-center hero-body">
            <div className="hero-image-wrapper">
              <div className="y2k-image-wrapper">
                <img
                  ref={(el) => (imageRefs.current[heroIndex] = el)}
                  src={artDigitalGallery}
                  alt="Tessa's Digital Gallery"
                  className="gallery-image"
                />
                {!webglReady && webglSupported && (
                  <div className="y2k-image-loader font-pixel">
                    <span className="loader-spinner" />
                    SHADERS_INIT...
                  </div>
                )}
              </div>
            </div>
            <div className="hero-content-wrapper">
              <h1 className="neon-marquee font-pixel">TESSA'S DIGITAL ART GALLERY</h1>
              <p className="hero-subtitle">
                COPYRIGHT &copy; 2026 TESSA NEWBACHER
              </p>
              <p className="hero-subtitle">
                ALL WORK CREATED IN PROCREATE
              </p>
              <div className="system-status font-pixel">
                <span className="status-indicator-dot blinking" />
                <span>SYSTEM VERSION: 2026.05</span>
                <span className="divider">|</span>
                <span>IMAGES: {ARTWORK.filter(a => a.category !== "HERO").length}</span>
                <span className="divider">|</span>
                <span>THEME: NEON_Y2K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Flow */}
      <main className="gallery-content" id="main">
        {Object.entries(groupedArtwork).map(([categoryTitle, items]) => (
          <section key={categoryTitle} className="category-section">
            {/* Category Foldout Label */}
            <div className="category-header font-pixel">
              <span className="category-icon">📁</span>
              <h2>{categoryTitle}</h2>
              <div className="category-line" />
            </div>
            <div className="artwork-grid">
              {items.map((item) => {
                // Find global index to map correct imageRef
                const globalIndex = ARTWORK.findIndex((a) => a.id === item.id);
                // Calculate dynamic aspect ratio from resolution string
                const [w, h] = item.resolution.split("x").map(Number);
                const aspect = w / h;

                return (
                  <div
                    key={item.id}
                    className="y2k-window artwork-window"
                    style={{ "--neon-color": item.themeColor }}
                  >
                    {/* Retro window title bar */}
                    <div className="y2k-window-header">
                      <div className="y2k-window-title">
                        <span className="y2k-window-icon">🖼️</span>
                        <span className="y2k-window-title-text">{item.filename}</span>
                      </div>
                      <div className="y2k-window-controls">
                        <button className="y2k-btn-min">_</button>
                        <button className="y2k-btn-max">[]</button>
                        <button className="y2k-btn-close">X</button>
                      </div>
                    </div>

                    {/* Window Content */}
                    <div className="y2k-window-body">
                      <div className="y2k-image-wrapper" style={{ aspectRatio: aspect }}>
                        <img
                          ref={(el) => (imageRefs.current[globalIndex] = el)}
                          src={item.src}
                          alt={item.title}
                          className="gallery-image"
                        />
                        {/* Fallback loading indicator when webgl is loading */}
                        {!webglReady && webglSupported && (
                          <div className="y2k-image-loader font-pixel">
                            <span className="loader-spinner" />
                            SHADERS_INIT...
                          </div>
                        )}
                      </div>

                      {/* Descriptive Card Section */}
                      <div className="y2k-description-container">
                        <div className="y2k-meta-info font-pixel">
                          <span className="y2k-category-badge">{item.title}</span>
                          <span className="y2k-res-badge">RES: {item.resolution}</span>
                        </div>
                        <p className="y2k-description-text">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
