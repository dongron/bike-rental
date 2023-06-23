import type { FC } from 'react';

const defaultInputStyles = `w-full bg-white py-1.5 px-2.5 rounded-xl font-medium text-lg text-gray-700 border border-gray-300 
focus:text-gray-900 focus:ring-brandOrange-300 focus:border-brandOrange-300 focus:outline-none block
focus:invalid:border-red-500 focus:invalid:ring-red-500
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
  className = '',
  placeholder,
  type = 'text',
  disabled = false,
  errors,
}) => {
  const inputId = `${name}-input`;

  const errorMessage = errors?.[name]?.message;
  const inputStyles = `${defaultInputStyles} ${
    errorMessage &&
    'border-red-500 ring-red-500 focus:border-red-400 focus:ring-red-400'
  }`;

  return (
    <div className={`my-3 mb-3.5 block w-full ${className}`}>
      <label
        htmlFor={inputId}
        className="mb-1 ml-1 mt-0.5 block text-left text-sm font-semibold"
      >
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
      <div className="mb-0 ml-1 block h-1 text-left text-xs font-medium text-red-500">
        {errorMessage}
      </div>
    </div>
  );
};

export { Input };
