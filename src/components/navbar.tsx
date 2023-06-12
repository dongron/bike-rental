import type { FC } from 'react';

import { FloatingBackButton } from '@/components/floating-back-button';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={`fixed inset-x-0 top-2 z-10 mx-auto max-w-screen-lg px-5 ${className}`}
    >
      <FloatingBackButton />
    </nav>
  );
};

export { Navbar };
