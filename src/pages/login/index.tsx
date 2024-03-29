import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTouchField } from '@/hooks/useTouchField';
import useIsEmail from '@/hooks/validation/useIsEmail';
import useMinLength from '@/hooks/validation/useMinLength';
import InputField from '@/components/inputs/inputField';
import Button from '@/components/buttons';

type FormValues = {
    email: string;
    password: string;
};

const Login: FunctionComponent = () => {
    const { t } = useTranslation();

    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: '',
    });

    const emailErrorMessage = useIsEmail(formValues.email);
    const passwordErrorMessage = useMinLength(formValues.password, 8);
    const isFormValid = !(emailErrorMessage || passwordErrorMessage);

    const { isFieldTouched, handleFieldTouch } = useTouchField<FormValues>();

    const handleChange = (fieldName: keyof FormValues, value): void => {
        handleFieldTouch(fieldName);
        setFormValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    };
    const handleLogin = (): void => {
        //login api
    };

    return (
        <div>
            <h1>{t('pages.login.title')}</h1>
            <form>
                <InputField
                    type="text"
                    label={t('pages.login.form.email')}
                    value={formValues.email}
                    errorMessage={isFieldTouched('email') ? emailErrorMessage : ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <InputField
                    type="password"
                    label={t('pages.login.form.password')}
                    value={formValues.password}
                    errorMessage={isFieldTouched('password') ? passwordErrorMessage : ''}
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <Button disabled={!isFormValid} onClick={handleLogin}>
                    Login
                </Button>
            </form>
        </div>
    );
};
export default Login;
