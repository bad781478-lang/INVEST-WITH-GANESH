import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'ghost';
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  to,
  href,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 text-[14px] font-medium transition-all duration-200 rounded-full cursor-pointer select-none active:scale-[0.98]';

  const variants = {
    primary:
      'bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_1px_3px_rgba(0,0,0,0.1)] px-6 py-3 border border-transparent',
    outline:
      'bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/10 px-6 py-3 backdrop-blur-sm',
    dark:
      'bg-zinc-950 text-white hover:bg-zinc-800 px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-zinc-800',
    ghost:
      'bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-black/5 px-4 py-2',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    if (to.startsWith('#')) {
      return (
        <a href={to} className={combinedClasses}>
          <span>{children}</span>
          {icon}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
};
