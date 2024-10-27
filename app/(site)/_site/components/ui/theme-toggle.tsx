'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from './button';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className=""
      variant="outline"
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      size="icon">
      <SunIcon className="transition-all duration-300 h-[1.2rem] w-[1.2rem] rotate-0 scale-100  dark:-rotate-90 dark:scale-0" />
      <MoonIcon className=" transition-all duration-300 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
