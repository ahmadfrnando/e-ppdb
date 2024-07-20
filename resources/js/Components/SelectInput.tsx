import React from 'react';
import { ComponentProps } from 'react';
import classNames from 'classnames';

interface SelectInputProps extends ComponentProps<'select'> {
  error?: string;
  options: { value: string; label: string }[];
}

export default function SelectInput({
  name,
  error,
  className,
  options = [],
  ref,
  ...props
}: SelectInputProps) {
  return (
    <select
      id={name}
      name={name}
      {...props}
      className={classNames(
        'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm'+ ' ' + className,
      )}
    >
      {options?.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
