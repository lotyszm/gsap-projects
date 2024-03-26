'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);

export function RevealText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const textElementRef = useRef<HTMLQuoteElement>(null);

  useGSAP(
    () => {
      const textElement = textElementRef.current;

      if (textElement) {
        textElement.innerHTML = textElement.innerText
          .split(' ')
          .map((word) => `<span>${word} </span>`)
          .join('');
        const words = textElement.getElementsByTagName('span');

        const tl = gsap.timeline();
        tl.from(words, {
          opacity: 0.15,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: textElement,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 1,
          },
        });
      }
    },
    { scope: textElementRef }
  );

  return (
    <blockquote
      ref={textElementRef}
      id="reveal-text"
      className={clsx(
        'my-12 text-5xl font-bold leading-tight text-gray-700',
        className
      )}
    >
      {children}
    </blockquote>
  );
}
