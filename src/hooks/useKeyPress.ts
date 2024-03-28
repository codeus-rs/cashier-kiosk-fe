import { useCallback, useEffect } from 'react';

const useKeyPress = (
    keyCode: string,
    handleKeyPress?: () => any,
    eventType: 'keypress' | 'keydown' | 'keyup' = 'keydown',
): void => {
    const onKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === keyCode && handleKeyPress) {
                handleKeyPress();
            }
        },
        [keyCode, handleKeyPress],
    );

    useEffect(() => {
        document.addEventListener(eventType, onKeyPress);
        return () => document.removeEventListener(eventType, onKeyPress);
    });
};

export default useKeyPress;
