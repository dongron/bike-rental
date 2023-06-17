import axios from 'axios';
import { useState } from 'react';

import { ContactForm } from '@/components/contact-form';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

// const dialogId = 'contactDialog';
type RequestType = {
  status: RequestStatusType;
};

const Contact = () => {
  const [request, setRequest] = useState<RequestType>({ status: null });

  const onSubmit = async (data: any) => {
    setRequest({ status: RequestStatus.status.FETCHING });
    await axios({
      url: `/api/contact/`,
      method: 'POST',
      data,
    })
      .then(() => {
        setRequest({ status: RequestStatus.status.DONE });
      })
      .catch(() => {
        setRequest({ status: RequestStatus.status.ERROR });
      });
  };

  return (
    <Main meta={<Meta title="Contact" description="Contact form" />}>
      <ContentWrapper>
        <>
          <div className="mt-40">Contact</div>
          <ContactForm onSubmit={onSubmit} requestStatus={request.status} />
        </>
      </ContentWrapper>
    </Main>
  );
};

export default Contact;
