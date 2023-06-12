import Link from 'next/link';
import type { FC } from 'react';

import { getAboutPath, getBlogExternalPath, getLandingPath } from '@/routes';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={`absolute inset-x-0 top-2 z-10 mx-auto max-w-screen-md ${className}`}
    >
      <ul className="flex flex-wrap text-xl">
        <li className="mr-6">
          <Link
            href={getLandingPath()}
            className="border-none text-white hover:text-gray-400"
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href={getAboutPath()}
            className="border-none text-white hover:text-gray-400"
          >
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href={getBlogExternalPath()}
            className="border-none text-white hover:text-gray-400"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
