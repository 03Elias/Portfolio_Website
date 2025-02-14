import { useState, useEffect } from 'react';
import './mainPage.css';
import DisableZoom from '../components/disableZoom';

function MainPage() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight);
  const [startAutoFade, setStartAutoFade] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [glowSize, setGlowSize] = useState(500); // Initial glow size

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY;
      let maxScroll = scrollHeight * 2; // Two full scrolls to complete the effect

      let newScrollAmount = Math.min(scrollY / maxScroll, 1); // Cap at 1
      setScrollAmount(newScrollAmount);

      // When logo reaches max size (50% scroll), trigger auto white fade and glow expansion
      if (newScrollAmount >= 0.5 && !startAutoFade) {
        setStartAutoFade(true);
      }
    };

    const updateScrollHeight = () => {
      setScrollHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollHeight);
    updateScrollHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollHeight);
    };
  }, [scrollHeight, startAutoFade]);

  // **Automatic White Transition & Glow Expansion**
  useEffect(() => {
    if (startAutoFade) {
      let fadeInterval = setInterval(() => {
        setOverlayOpacity((prevOpacity) => {
          if (prevOpacity >= 1) {
            clearInterval(fadeInterval);
            return 1;
          }
          return prevOpacity + 0.1;
        });

        // **Make glow expand very fast**
        setGlowSize((prevSize) => Math.min(prevSize + 500, 5000));

      }, 25);

      return () => clearInterval(fadeInterval);
    }
  }, [startAutoFade]);

  return (
    <>
      <DisableZoom />

      {/* Extended scroll space for full effect */}
      <div className="scroll-space" style={{ height: `${scrollHeight * 3}px` }}></div>

      {/* Rainbow Glow (separate from icon container for proper centering) */}
      <div className="rainbow-glow" style={{ width: `${glowSize}px`, height: `${glowSize}px` }}></div>

      {/* Icon stays centered while scaling */}
      <div className="icon-container">
        <img
          className="icon"
          src="/EG.png"
          alt="EG logo"
          style={{
            transform: `scale(${1 + Math.min(1.3, 6 * scrollAmount)})`,
          }}
        />
      </div>

      {/* Overlay for smooth full white transition */}
      <div className="white-overlay" style={{ opacity: overlayOpacity }}></div>
    </>
  );
}

export default MainPage;
