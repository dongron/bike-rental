import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';

type LandingProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Landing = (props: LandingProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <div className="">
      <main className="content text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Landing };
