import { RefObject, useEffect } from 'react';

export const useClickAway = (target: RefObject<HTMLDivElement>, callback: () => void): void => {
  const handleClickAway = (event: MouseEvent) => {
    if (target.current && !target.current.contains(event.target as Node)) {
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
