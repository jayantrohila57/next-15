'use client';
import { ReactLenis } from 'lenis/react';
const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
export default SmoothScrollProvider;
