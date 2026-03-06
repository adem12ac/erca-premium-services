import { useState, useRef, useCallback, TouchEvent, MouseEvent } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bathBefore from "@/assets/before-after/bath-before.jpeg";
import bathAfter from "@/assets/before-after/bath-after.jpeg";
import roomBefore from "@/assets/before-after/room-before.jpeg";
import roomAfter from "@/assets/before-after/room-after.jpeg";
import hallwayBefore from "@/assets/before-after/hallway-before.jpeg";
import hallwayAfter from "@/assets/before-after/hallway-after.jpeg";
import bath2Before from "@/assets/before-after/bath2-before.jpeg";
import bath2After from "@/assets/before-after/bath2-after.jpeg";
import hallway2Before from "@/assets/before-after/hallway2-before.jpeg";
import hallway2After from "@/assets/before-after/hallway2-after.jpeg";

const projects = [
  { before: bathBefore, after: bathAfter, title: "Badsanierung", location: "Essen" },
  { before: roomBefore, after: roomAfter, title: "Komplettsanierung Wohnraum", location: "Essen" },
  { before: hallwayBefore, after: hallwayAfter, title: "Flurrenovierung", location: "Essen" },
  { before: bath2Before, after: bath2After, title: "Badsanierung II", location: "Essen" },
  { before: hallway2Before, after: hallway2After, title: "Flursanierung II", location: "Essen" },
];

const SingleSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchStart = (e: TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  };
  const handleTouchEnd = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-full cursor-col-resize select-none overflow-hidden rounded-2xl border border-border shadow-card sm:aspect-[4/3]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="slider"
      aria-label={`Vorher-Nachher-Vergleich: ${title}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After (full background) */}
      <img src={after} alt={`${title} – Nachher`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      
      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={before} alt={`${title} – Vorher`} className="h-full w-full object-cover" loading="lazy" />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-elevated">
          <ChevronLeft className="h-4 w-4 text-foreground -mr-0.5" />
          <ChevronRight className="h-4 w-4 text-foreground -ml-0.5" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 z-10 rounded-lg bg-foreground/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
        Vorher
      </span>
      <span className="absolute top-4 right-4 z-10 rounded-lg bg-accent/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground backdrop-blur-sm">
        Nachher
      </span>
    </div>
  );
};

export const BeforeAfterSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32" aria-labelledby="ba-heading">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Unsere Arbeit</p>
          <h2 id="ba-heading" className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Vorher – Nachher
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Überzeugen Sie sich selbst von der Qualität unserer Sanierungsarbeiten. Wischen Sie über die Bilder, um den Unterschied zu sehen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-14">
          {/* Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  i === active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="mx-auto max-w-3xl">
            <SingleSlider
              key={active}
              before={projects[active].before}
              after={projects[active].after}
              title={projects[active].title}
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {projects[active].title} · {projects[active].location}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
