import axios from 'axios';
import type { FC, JSXElementConstructor, ReactElement } from 'react';
import { cloneElement, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ContactForm } from '@/components/contact/contact-form';
import { SimpleDialog } from '@/components/simple-dialog';
import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

const dialogId = 'contactDialog';
type RequestType = {
  status: RequestStatusType;
};

type ContactProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  source?: string;
};

const Contact: FC<ContactProps> = ({ source, children }) => {
  const [request, setRequest] = useState<RequestType>({ status: null });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resetForm, setResetForm] = useState<number | undefined>();

  const onSubmit = async (data: any) => {
    setRequest({ status: RequestStatus.status.FETCHING });
    await axios({
      url: `/api/contact/`,
      method: 'POST',
      data: { ...data, source },
    })
      .then((response: any) => {
        setRequest({ status: RequestStatus.status.DONE });
        setIsDialogOpen(false);
        toast.success(response.data?.message);
      })
      .catch(() => {
        setRequest({ status: RequestStatus.status.ERROR });
      });
  };

  useEffect(() => {
    if (!isDialogOpen) setResetForm(new Date().getTime());
  }, [isDialogOpen]);

  return (
    <>
      <SimpleDialog
        dialogId={dialogId}
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        requestStatus={request.status}
      >
        <>
          <h2 className="my-0 pt-1 font-semibold">Connect with Our Team</h2>
          <ContactForm
            onSubmit={onSubmit}
            requestStatus={request.status}
            triggerReset={resetForm}
          />
        </>
      </SimpleDialog>
      {cloneElement(children, { onClick: () => setIsDialogOpen(true) })}
    </>
  );
};

export default Contact;
