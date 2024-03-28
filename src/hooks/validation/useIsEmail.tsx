import { EMAIL_REGEX } from '@/constants';
const useIsEmail = (value: string, message?: string): string => {
    if (!(value && EMAIL_REGEX.test(value))) {
        return message ?? 'Entered value is not an email';
    }
    return '';
};

export default useIsEmail;
