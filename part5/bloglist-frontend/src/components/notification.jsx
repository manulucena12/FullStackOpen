import { useEffect } from 'react';

export const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000);

      return () => clearTimeout(timer)
    }
  }, [message, setMessage]);

  if (!message) return null;

  return (
    <>
      {message}
    </>
  )
}
