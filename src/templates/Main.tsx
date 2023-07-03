import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div className="">
      <Navbar />

      <main className="content text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
