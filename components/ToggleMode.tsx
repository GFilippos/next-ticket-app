'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme(`${dark ? 'light' : 'dark'}`)} disabled></Button>
    );
  }

  const dark = theme === 'dark';
  const themeIconClasses = 'hover:cursor-pointer hover:text-primary';

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(`${dark ? 'light' : 'dark'}`)}>
      {dark ? <Sun className={themeIconClasses} /> : <Moon className={themeIconClasses} />}
    </Button>
  );
};

export default ToggleMode;
