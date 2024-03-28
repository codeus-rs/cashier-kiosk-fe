const useIsNumber = (value: any, message?: string): string => {
    if (Number.isNaN(value ?? Number.NaN)) {
        return message ?? 'Entered value is not an number';
    }
    return '';
};

export default useIsNumber;
