import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors select-none ${
        isDark
          ? 'bg-white/10 text-white/90 border border-white/15 backdrop-blur-sm'
          : 'bg-[#f0f0f0] text-zinc-800 border border-zinc-200/60'
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/80' : 'bg-zinc-800'}`} />
      <span>{children}</span>
    </div>
  );
};
