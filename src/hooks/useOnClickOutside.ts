import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    outsideClickHandler?: () => void,
): ((e: MouseEvent) => void) => {
    const handleClickOutside = (e: MouseEvent): void => {
        if (e.target && !ref?.current?.contains(e.target as Node) && outsideClickHandler) {
            outsideClickHandler();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [outsideClickHandler]);

    return handleClickOutside;
};
export default useOnClickOutside;
