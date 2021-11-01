import { RefObject, useEffect } from 'react';

export const useClickAway = (target: RefObject<any>, callback: () => void) => {
  const handleClickAway = (event: any) => {
    if (target.current && !target.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickAway);
    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  });
};
