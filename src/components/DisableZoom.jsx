import { useEffect } from "react";

function DisableZoom() {
  useEffect(() => {
    const disableZoom = (event) => {
      if (
        (event.ctrlKey || event.metaKey) && 
        (event.deltaY || event.key === "+" || event.key === "-" || event.key === "0")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", disableZoom, { passive: false });
    window.addEventListener("keydown", disableZoom);

    return () => {
      window.removeEventListener("wheel", disableZoom);
      window.removeEventListener("keydown", disableZoom);
    };
  }, []);

  return null; 
}

export default DisableZoom;
