import type { FC } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { VscLoading } from 'react-icons/vsc';

import { CTAButton } from '@/components/cta-button';
import { required } from '@/consts/validation-messages';
import { Theme } from '@/types/theme';
import type { RequestStatusType } from '@/utils/request-status';
import { RequestStatus } from '@/utils/request-status';

import { Input } from '../form/input';

type DefaultValuesType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const defaultValuesEmpty: DefaultValuesType = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const formId = 'contact-form';

type ContactFormProps = {
  onSubmit: (data: any, helpers: any) => void;
  requestStatus?: RequestStatusType;
  defaultValues?: DefaultValuesType;
  triggerReset?: number;
};

const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  requestStatus,
  defaultValues: defaultValuesFromProps,
  triggerReset,
}) => {
  const defaultValues = { ...defaultValuesEmpty, ...defaultValuesFromProps };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (triggerReset) reset();
  }, [triggerReset]);

  const isFetching = RequestStatus.isFetching(requestStatus);

  return (
    <div className="m-auto w-full max-w-screen-md text-center">
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="name"
          options={{ required }}
          errors={errors}
          placeholder="John Doe"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="email"
          options={{ required }}
          errors={errors}
          placeholder="me@gmail.com"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="subject"
          options={{ required }}
          errors={errors}
          placeholder="Subject"
          disabled={isFetching}
        />
        <Input
          register={register}
          name="message"
          options={{ required }}
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
            className="mb-1.5 mt-2 min-w-[150px]"
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
