import type { FC, MouseEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

type SimpleDialogProps = {
  dialogId?: string;
  children?: ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  requestStatus?: RequestStatusType;
};

const SimpleDialog: FC<SimpleDialogProps> = ({
  dialogId,
  children,
  open,
  setOpen,
  requestStatus,
}) => {
  const dialogRef = useRef<any>();
  const isBackdropClicked = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    return (
      rect.left > event.clientX ||
      rect.right < event.clientX ||
      rect.top > event.clientY ||
      rect.bottom < event.clientY
    );
  };

  dialogRef.current?.addEventListener('close', () => {
    setOpen(false);
  });

  const handleDialogClick = (event?: MouseEvent<HTMLElement>) => {
    if (
      event &&
      isBackdropClicked(event) &&
      !RequestStatus.isFetching(requestStatus)
    ) {
      dialogRef.current.close();
      setOpen(false);
    }
  };

  useEffect(() => {
    const isAlreadyOpen =
      typeof dialogRef.current.getAttribute('open') === 'string';

    if (open && !isAlreadyOpen) {
      dialogRef.current?.showModal?.();
    } else if (!open) dialogRef.current?.close?.();
  }, [open]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={(node) => {
        dialogRef.current = node;
      }}
      className="my-10 h-max w-[60vw] max-w-screen-md rounded-xl p-0 shadow-2xl"
      id={dialogId}
      onClick={handleDialogClick}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="p-5"
        onClick={(event: MouseEvent<HTMLElement>) => event.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  );
};

export { SimpleDialog };
