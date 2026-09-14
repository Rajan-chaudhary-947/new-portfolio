"use client";

import { useRef } from "react";

type AnimatedBorderLinkProps = React.ComponentPropsWithoutRef<"a">;

export function AnimatedBorderLink({ children, onMouseEnter, onMouseLeave, ...props }: AnimatedBorderLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const setPlaybackRate = (rate: number) => {
    const animation = linkRef.current?.getAnimations().find(
      (item) => (item as CSSAnimation).animationName === "button-border-snake",
    );

    if (animation) {
      animation.playbackRate = rate;
    }
  };

  return (
    <a
      {...props}
      ref={linkRef}
      onMouseEnter={(event) => {
        setPlaybackRate(3.5);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setPlaybackRate(1);
        onMouseLeave?.(event);
      }}
    >
      {children}
    </a>
  );
}
