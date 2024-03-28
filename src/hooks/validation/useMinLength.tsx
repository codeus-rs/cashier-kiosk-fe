const useMinLength = (value: any, minLength: number, message?: string): string => {
    if (!value || value?.length < minLength) {
        return message ?? `Text needs to be at least ${minLength} characters long`;
    }
    return '';
};

export default useMinLength;
