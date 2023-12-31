import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { ContactForm } from '@/components/contact/contact-form';
import { SimpleDialog } from '@/components/simple-dialog';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

const dialogId = 'contactDialog';
type RequestType = {
  status: RequestStatusType;
};

const Contact = () => {
  const [request, setRequest] = useState<RequestType>({ status: null });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit = async (data: any) => {
    setRequest({ status: RequestStatus.status.FETCHING });
    await axios({
      url: `/api/contact/`,
      method: 'POST',
      data,
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

  return (
    <Main meta={<Meta title="Contact" description="Contact form" />}>
      <ContentWrapper>
        <>
          <button
            type="button"
            className="mx-auto mt-52 w-full border-2"
            onClick={() => setIsDialogOpen(true)}
          >
            Open contact
          </button>

          <SimpleDialog
            dialogId={dialogId}
            open={isDialogOpen}
            setOpen={setIsDialogOpen}
          >
            <>
              <div className="">Contact</div>
              <ContactForm onSubmit={onSubmit} requestStatus={request.status} />
            </>
          </SimpleDialog>
        </>
      </ContentWrapper>
    </Main>
  );
};

export default Contact;
