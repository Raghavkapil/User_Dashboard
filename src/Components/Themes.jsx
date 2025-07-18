import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Ensure theme applies on load
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-10 flex items-center gap-2">
      <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={isDark}
        onChange={toggleTheme}
      />
    </div>
  );
}
