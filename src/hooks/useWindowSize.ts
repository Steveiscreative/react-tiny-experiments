import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    // Clean Up
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    height: height,
    width: width,
  };
}
