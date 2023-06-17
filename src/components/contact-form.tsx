import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { VscLoading } from 'react-icons/vsc';

import { CTAButton } from '@/components/cta-button';
import { Theme } from '@/types/theme';
import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

import { Input } from './form/input';

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const formId = 'contact-form';

type ContactFormProps = {
  onSubmit: (data: any, helpers: any) => void;
  requestStatus?: RequestStatusType;
};

const ContactForm: FC<ContactFormProps> = ({ onSubmit, requestStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm({
    defaultValues,
  });

  const isFetching = RequestStatus.isFetching(requestStatus);

  return (
    <div className="m-auto max-w-screen-md text-center">
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="name"
          options={{ required: true }}
          errors={errors}
          placeholder="John Doe"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="email"
          options={{ required: true }}
          errors={errors}
          placeholder="me@gmail.com"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="subject"
          options={{ required: true }}
          errors={errors}
          placeholder="Subject"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="message"
          options={{ required: true }}
          type="textarea"
          errors={errors}
          placeholder="I would like to ..."
          disabled={isFetching}
        />
        <div>
          <CTAButton
            type="submit"
            theme={Theme.dark}
            disabled={isFetching}
            className="min-w-[150px]"
          >
            {isFetching ? (
              <VscLoading
                className="mx-auto inline animate-spin antialiased"
                size={20}
              />
            ) : (
              'Request a Quote'
            )}
          </CTAButton>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };
