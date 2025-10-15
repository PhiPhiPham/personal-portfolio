'use client';

import { useCallback, useEffect } from 'react';
import Script from 'next/script';

declare global {
  // Extend the window type so TypeScript knows about particles.js globals.
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void;
    pJSDom?: Array<{
      pJS?: {
        fn?: {
          vendors?: {
            destroy?: () => void;
          };
        };
      };
    }>;
  }
}

const particlesConfig = {
  particles: {
    number: {
      value: 65,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: '#60a5fa',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.35,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.4,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#93c5fd',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.7,
        },
      },
      push: {
        particles_nb: 3,
      },
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground() {
  const cleanupParticles = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.pJSDom?.forEach((instance) => {
      instance?.pJS?.fn?.vendors?.destroy?.();
    });

    if (window.pJSDom) {
      window.pJSDom.length = 0;
    }
  }, []);

  const initializeParticles = useCallback(() => {
    if (typeof window === 'undefined' || !window.particlesJS) {
      return;
    }

    cleanupParticles();
    window.particlesJS('hero-particles', particlesConfig);
  }, [cleanupParticles]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.particlesJS) {
      initializeParticles();
    }

    return () => {
      cleanupParticles();
    };
  }, [cleanupParticles, initializeParticles]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={initializeParticles}
      />
      <div
        id="hero-particles"
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
      />
    </>
  );
}
