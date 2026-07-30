import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "+" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let frame = 0;
        const totalFrames = 120;

        const tick = () => {
          frame += 1;
          setValue(Math.min(target, Math.floor((target * frame) / totalFrames)));
          if (frame < totalFrames) requestAnimationFrame(tick);
        };

        tick();
        observer.unobserve(node);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="font-display-lg text-4xl lg:text-5xl font-bold">
      {value.toLocaleString("id-ID")}
      {suffix}
    </p>
  );
}
