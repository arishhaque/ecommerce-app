import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize);
    return () => { // called on unmounting of component - remove the resize eent listener when cart compnent is not removed from DOM (not being rendered)
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return windowSize;
}

export default useWindowSize;
