import { useCallback, useEffect, useState } from 'react';

type WindowsSizeType = {
    width?: number;
    height?: number;
};

const useWindowSize = (): WindowsSizeType => {
    const [windowSize, setWindowSize] = useState<WindowsSizeType>({
        width: undefined,
        height: undefined,
    });

    const handleResize = useCallback((): void => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, [setWindowSize, window]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
        }
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
