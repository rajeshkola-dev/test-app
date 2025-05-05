import { useEffect } from 'react';

export const useMessageBridge = ({ onMessage, filter }) => {
  useEffect(() => {
    const listener = (event) => {
      const data = event?.data;

      // Skip empty messages
      if (!data) return;
      if (
        event?.data?.source &&
        event?.data.source.startsWith("react-devtools")
      ) {
        return;
      }

      console.log('Received message in web app :', data);

      if (typeof onMessage === 'function') {
        onMessage(data, event.origin, event);
      }
    };

    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }, [onMessage, filter]);
};
