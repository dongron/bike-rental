import type { FC } from 'react';
import { useEffect } from 'react';

const inputStyles = `
bg-white py-1.5 px-2.5 rounded-xl border-transparent ring-1 ring-brandOrange-500 text-lg
focus:text-black focus:ring-2 focus:ring-brandOrange-900 focus:outline-none focus:border-none focus:border-transparent
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
disabled:bg-gray-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
`;

type InputProps = {
  register: any;
  name: string;
  options: object;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  control?: any;
  errors?: any;
  disabled?: boolean;
};

const Input: FC<InputProps> = ({
  register,
  name,
  label,
  options,
  className,
  placeholder,
  type = 'text',
  disabled = false,
  errors,
}) => {
  const inputId = `${name}-input`;

  useEffect(() => {
    console.log(name, errors[name], errors);
  }, [errors]);

  return (
    <div className={`my-3 block${className}`}>
      <label htmlFor={inputId} className="ml-1 block text-sm font-semibold">
        {label || name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          type={type}
          placeholder={placeholder}
          className={inputStyles}
          style={{ resize: 'none' }}
          rows={6}
          wrap="soft"
          disabled={disabled}
          {...register(name, options)}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          className={inputStyles}
          disabled={disabled}
          {...register(name, options)}
        />
      )}
    </div>
  );
};

export { Input };
