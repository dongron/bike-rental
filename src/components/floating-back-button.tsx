import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

import { getLandingPath } from '@/routes';

interface FloatingBackButtonProps {}

const FloatingBackButton: FC<FloatingBackButtonProps> = () => {
  const router = useRouter();

  const onBackClick = () => {
    if (globalThis.window.history.length > 1) router.back();
    else router.push(getLandingPath());
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.code === 'Enter') {
      onBackClick();
    }
  };

  return (
    <button
      className="mt-2 block cursor-pointer rounded-full bg-gray-100/20 backdrop-blur-sm hover:bg-gray-100/40"
      style={{
        width: '42px',
        height: '42px',
      }}
      onClick={onBackClick}
      onKeyDown={onKeyDown}
      type="button"
    >
      <BsChevronLeft
        className="mx-auto -ml-0.5 inline text-stone-700/80"
        size={35}
      />
    </button>
  );
};

export { FloatingBackButton };
