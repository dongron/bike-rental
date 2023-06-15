import type { FC, ReactElement, ReactNode, ReactText } from 'react';

interface ContentWrapperProps {
  children: ReactElement | ReactText;
  className?: ReactNode;
  style?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  className,
  style = {},
}) => (
  <div className={`mx-auto max-w-screen-lg px-5 ${className}`} style={style}>
    {children}
  </div>
);

export { ContentWrapper };
