import { useEffect } from 'react';
export const useClickAway = (target, callback) => {
    const handleClickAway = (event) => {
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
