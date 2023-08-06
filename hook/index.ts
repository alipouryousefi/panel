import { useState } from "react";
import axios, { AxiosResponse, AxiosError, Method } from "axios";

// Define a hook for toggle
type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialState: boolean): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = (nextValue?: boolean) => {
    setState((prevState) =>
      nextValue === true || nextValue === false ? nextValue : !prevState
    );
  };

  return [state, toggle];
};

// Define a hook for sending request
type ApiResponse<T> = AxiosResponse<T> | AxiosError<T>;

const useApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const sendRequest = async <T>(
    method: Method,
    url: string,
    data: any = null
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await axios.request<T>({
        method,
        url,
        data,
      });

      setLoading(false);
      setIsSuccess(true);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setIsSuccess(false);
      return error;
    }
  };

  return {
    loading,
    error,
    isSuccess,
    sendRequest,
  };
};

export { useToggle, useApi };
