import useIsNumber from './useIsNumber';

const useMaxValue = (value: any, maxValue: number, message?: string): string => {
    const isNumberValidationResult = useIsNumber(value, message);
    if (isNumberValidationResult) {
        return isNumberValidationResult;
    }
    if (value >= maxValue) {
        return message ?? `Number needs to be at less than ${maxValue}`;
    }
    return '';
};

export default useMaxValue;
