import React, { useState, useEffect, ChangeEvent } from 'react';

interface UseFormReturn {
  inputs: FormProps;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => void;
  resetForm: () => void;
  clearForm: () => void;
}

export interface FormProps {
  [key: string]: string | number
}

export default function useForm(initial: FormProps): UseFormReturn {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initial, initialValues]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>,
  ): void {
    const { value, name, type } = e.target;
    const numbersAccepted = ['duration', 'day', 'available'];
    const isNumber = numbersAccepted.includes(name) || type === 'number';

    setInputs({
      ...inputs,
      [name]: isNumber ? +value : value,
    });
  }

  function resetForm(): void {
    setInputs(initial);
  }

  function clearForm(): void {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, '']),
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
