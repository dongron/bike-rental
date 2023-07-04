import type { FC, ReactNode } from 'react';

interface NavbarProps {
  className?: string;
  children: ReactNode;
  link: string;
}

const NavbarLink: FC<NavbarProps> = ({ className, children, link }) => {
  return (
    <li className={`list-none leading-5 ${className}`}>
      <a
        className="group font-bold text-stone-100 decoration-0 transition duration-300"
        href={link}
      >
        {children}
        <span className="block h-0.5 max-w-0 bg-stone-100 transition-all duration-300 group-hover:max-w-full" />
      </a>
    </li>
  );
};

export { NavbarLink };
