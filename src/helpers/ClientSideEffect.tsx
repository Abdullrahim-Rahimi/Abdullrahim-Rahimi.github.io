'use client';
import { useEffect } from 'react';

const ClientSideEffect = () => {
  useEffect(() => {
    function removeScrollLock() {
      document.body.removeAttribute('data-scroll-locked');
    }

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-scroll-locked'
        ) {
          removeScrollLock();
        }
      }
    });

    const config = { attributes: true };

    observer.observe(document.body, config);

    removeScrollLock();

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ClientSideEffect;
