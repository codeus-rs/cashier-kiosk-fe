import useIsNumber from './useIsNumber';

const useMinValue = (value: any, minValue: number, message?: string): string => {
    const isNumberValidationResult = useIsNumber(value, message);
    if (isNumberValidationResult) {
        return isNumberValidationResult;
    }
    if (value <= minValue) {
        return message ?? `Number needs to be more than ${minValue}`;
    }
    return '';
};

export default useMinValue;
