import { Toaster, toast } from 'react-hot-toast';

export const CustomToaster = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      duration: 4000,
      style: {
        background: '#F3F1F0',
        color: '#5E4C46',    
        borderRadius: '10px',
        fontSize: '0.9rem',
        padding: '12px 16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      success: {
        style: {
          background: '#C0E8D5',
        },
        iconTheme: {
          primary: '#0F7A4A',   
          secondary: '#ffffff',
        },
      },
      error: {
        style: {
          background: '#F9D9D9',
        },
        iconTheme: {
          primary: '#B00020',   
          secondary: '#ffffff',
        },
      },
      warning: {
        style: {
          background: '#FBE9CC',
        },
        iconTheme: {
          primary: '#7D531F',   
          secondary: '#ffffff',
        },
      },
      loading: {
        style: {
          background: '#DDEBF9',
        },
        iconTheme: {
          primary: '#1E5BA6',   
          secondary: '#ffffff',
        },
      },
    }}
  />
);

export const customToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  dismiss: () => toast.dismiss(),
  endLoadAndSuccess: (message) => {toast.dismiss(); toast.success(message) },
  endLoadAndError: (message) => {toast.dismiss(); toast.error(message) },
  promise: (promise, { loading, success, error }) =>
    toast.promise(promise, {
      loading,
      success,
      error,
    }),
};
