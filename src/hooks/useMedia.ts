import { useState, useEffect } from "react";

const useScreenWidth = (px: number) => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > px);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth > px);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [px]);

  return isLarge;
};

export default useScreenWidth;
