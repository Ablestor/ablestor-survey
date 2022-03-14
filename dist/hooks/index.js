import { useEffect } from 'react';
export var useClickAway = function (target, callback) {
    var handleClickAway = function (event) {
        if (target.current && !target.current.contains(event.target)) {
            callback();
        }
    };
    useEffect(function () {
        document.addEventListener('click', handleClickAway);
        return function () {
            document.removeEventListener('click', handleClickAway);
        };
    });
};
