import type { FC } from 'react';

import { FloatingBackButton } from '@/components/floating-back-button';
import { NavbarLink } from '@/components/navbar/navbar-link';
import { getNavbarLinks } from '@/routes';

interface NavbarProps {
  className?: string;
  isLanding?: boolean;
}

const Navbar: FC<NavbarProps> = ({ className, isLanding }) => {
  return (
    <nav
      className={`menu inset-x-0 top-2 z-10 mx-auto max-w-screen-lg px-5 ${
        isLanding ? 'absolute right-0' : 'fixed'
      } ${className}`}
    >
      {isLanding ? (
        <ul className="flex justify-end">
          {getNavbarLinks()
            .filter((item) => !item.isHidden)
            .map((item) => (
              <NavbarLink key={item.link} link={item.link}>
                {item.title}
              </NavbarLink>
            ))}
        </ul>
      ) : (
        <FloatingBackButton />
      )}
    </nav>
  );
};

export { Navbar };
