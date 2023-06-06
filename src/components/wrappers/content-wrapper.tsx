import type { FC, ReactElement, ReactText } from 'react';

interface ContentWrapperProps {
  children: ReactElement | ReactText;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
  <div className="mx-auto max-w-screen-lg px-5">{children}</div>
);

export { ContentWrapper };
