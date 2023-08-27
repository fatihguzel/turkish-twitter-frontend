import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastOptions {
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
}

export const toastWarnNotify = (msg: string) => {
  const options: ToastOptions = {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  toast.warn(msg, options);
};

export const toastSuccessNotify = (msg: string) => {
  const options: ToastOptions = {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  toast.success(msg, options);
};

export const toastErrorNotify = (msg: string) => {
  const options: ToastOptions = {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  toast.error(msg, options);
};
