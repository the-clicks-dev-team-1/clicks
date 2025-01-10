import { useEffect, useState } from "react";

type RunnerProps = {
  activeIndex: number;
  navRef: React.MutableRefObject<HTMLDivElement | undefined>;
};

export default function Runner({ activeIndex, navRef }: RunnerProps) {
  const [lineStyles, setLineStyles] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const updateLineStyles = () => {
      if (navRef.current) {
        const activeItem = navRef.current.children[activeIndex] as HTMLElement;
        if (activeItem) {
          const circleDiameter = 12; // Size of the glowing circle
          setLineStyles({
            left:
              activeItem.offsetLeft +
              activeItem.offsetWidth / 2 -
              circleDiameter / 2,
            width: activeItem.offsetWidth,
          });
        }
      }
    };

    updateLineStyles();
    window.addEventListener("resize", updateLineStyles);
    return () => window.removeEventListener("resize", updateLineStyles);
  }, [activeIndex, navRef]);

  if (!lineStyles) return null;

  const gradientPositionStart = lineStyles.left - 50; // Adjust how far before the circle the gradient starts
  const gradientPositionEnd = lineStyles.left + 50;

  return (
    <>
      {/* Glowing Circle */}
      <div
        className="absolute bg-white light:bg-[var(--ocean-blue)] rounded-full #transition-all #duration-300"
        style={{
          top: `calc(100% + 4px)`, // Glow circle slightly below the text
          left: `${lineStyles.left}px`,
          width: "12px",
          height: "12px",
          boxShadow: "0 0 10px 4px var(--runner-shadow)",
        }}
      ></div>

      {/* Connecting Line */}
      <div
        className="dark:block light:hidden absolute h-[2px] bg-white light:bg-[var(--ocean-blue)] transition-all duration-300"
        style={{
          top: `calc(100% + 10px)`,
          left: `16px`,
          right: "16px",
          background: `linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0) 100%
            )`,
        }}
      ></div>
      <div
        className="light:block dark:hidden absolute h-[2px] bg-white light:bg-[var(--ocean-blue)] transition-all duration-300"
        style={{
          top: `calc(100% + 10px)`,
          left: `16px`,
          right: "16px",
          background: `linear-gradient(
             to right,
                rgba(0, 0, 0, 0) 0%,  /* Transparent at the start */
                rgba(46, 195, 226, 0.8) 50%, /* Your custom ocean-blue at the center */
                rgba(0, 0, 0, 0) 100% 
            )`,
        }}
      ></div>
    </>
  );
}
