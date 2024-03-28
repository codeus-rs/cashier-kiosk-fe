const useMaxLength = (value: any, maxLength: number, message?: string): string => {
    if (value && value?.length > maxLength) {
        return message ?? `Text needs to have less than ${maxLength} characters`;
    }
    return '';
};

export default useMaxLength;
