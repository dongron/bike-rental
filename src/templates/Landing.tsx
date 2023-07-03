import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';
import animations from '@/styles/animations.module.css';

type LandingProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Landing = (props: LandingProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <div className="">
      <Navbar isLanding className={`${animations.animateNavbar}`} />
      <main className="content text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Landing };
