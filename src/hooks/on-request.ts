import { useRef, useState } from 'react';

type Props = {
  loading?: boolean;
  error?: boolean;
  success?: boolean;
};

export const useOnRequest = ({
  loading,
  error,
  success,
}: Props | undefined = {}) => {
  const [isLoading, setLoading] = useState(false ?? loading);
  const [textLoading, setTextLoading] = useState<string | undefined>(undefined);
  const [isError, setError] = useState(false ?? error);
  const [textError, setTextError] = useState<string | undefined>(undefined);
  const [isSuccess, setSuccess] = useState(false ?? success);
  const [textSuccess, setTextSuccess] = useState<string | undefined>(undefined);

  const requestRef = useRef(true);

  const onRequest = {
    loading: (value?: string) => {
      setTextLoading(value);
      setLoading(true);
      setError(false);
      setSuccess(false);
    },
    error: (value?: string) => {
      setTextError(value);
      setLoading(false);
      setError(true);
      setSuccess(false);
    },
    success: (value?: string) => {
      setTextSuccess(value);
      setLoading(false);
      setError(false);
      setSuccess(true);
    },
    clear: () => {
      setLoading(false);
      setTextLoading(undefined);
      setError(false);
      setTextError(undefined);
      setSuccess(false);
      setTextSuccess(undefined);
    },
  };

  return {
    requestRef,
    onRequest,
    isLoading,
    textLoading,
    isError,
    textError,
    isSuccess,
    textSuccess,
  };
};
