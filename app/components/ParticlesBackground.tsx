'use client';

import { useCallback, useEffect, useRef } from 'react';
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
      value: 150,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: '#60a5fa',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.5,
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
      distance: 140,
      color: '#93c5fd',
      opacity: 0.55,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 3,
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
  const bridgeCleanupRef = useRef<(() => void) | null>(null);

  const cleanupParticles = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    bridgeCleanupRef.current?.();
    bridgeCleanupRef.current = null;

    window.pJSDom?.forEach((instance) => {
      instance?.pJS?.fn?.vendors?.destroy?.();
    });

    if (window.pJSDom) {
      window.pJSDom.length = 0;
    }
  }, []);

  const setupInteractivityBridge = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const heroSection = document.getElementById('hero-section');
    const particlesCanvas = document.querySelector<HTMLCanvasElement>(
      '#hero-particles > canvas',
    );

    if (!heroSection || !particlesCanvas) {
      return;
    }

    const forwardEvent =
      (type: 'mousemove' | 'mouseleave' | 'click') => (event: MouseEvent) => {
        const simulatedEvent = new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          clientX: event.clientX,
          clientY: event.clientY,
          screenX: event.screenX,
          screenY: event.screenY,
        });

        particlesCanvas.dispatchEvent(simulatedEvent);
      };

    const handleMouseMove = forwardEvent('mousemove');
    const handleMouseLeave = forwardEvent('mouseleave');
    const handleClick = forwardEvent('click');

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    heroSection.addEventListener('click', handleClick);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      heroSection.removeEventListener('click', handleClick);
    };
  }, []);

  const initializeParticles = useCallback(() => {
    if (typeof window === 'undefined' || !window.particlesJS) {
      return;
    }

    cleanupParticles();
    window.particlesJS('hero-particles', particlesConfig);

    // Particle.js injects the canvas asynchronously; delay ensures it's present before wiring events.
    requestAnimationFrame(() => {
      bridgeCleanupRef.current?.();
      bridgeCleanupRef.current = setupInteractivityBridge() ?? null;
    });
  }, [cleanupParticles, setupInteractivityBridge]);

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
        className="absolute inset-0 z-0 opacity-90"
      />
    </>
  );
}
