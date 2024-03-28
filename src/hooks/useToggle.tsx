import { useState, useCallback } from 'react';
type Return = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
const useToggle = (initial = false): Return => {
    const [isOpen, setIsOpen] = useState(initial);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((state) => !state), []);

    return { isOpen, open, close, toggle };
};

export default useToggle;
