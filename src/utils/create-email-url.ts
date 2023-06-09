export const createEmailUrl = ({
  email,
  subject = '',
  body = '',
}: {
  email: string;
  subject?: string;
  body?: string;
}) => {
  return `mailto:${email}?subject=${
    subject ? encodeURIComponent(subject) : ''
  }&body=${body ? encodeURIComponent(body) : ''}`;
};
