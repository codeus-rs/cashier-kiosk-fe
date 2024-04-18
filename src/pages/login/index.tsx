import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTouchField } from '@/hooks/useTouchField';
import useIsEmail from '@/hooks/validation/useIsEmail';
import useMinLength from '@/hooks/validation/useMinLength';
import InputField from '@/components/inputs/inputField';
import Button from '@/components/buttons';
import { ReactComponent as PersonIcon } from '@/assets/icons/input/person.svg';
import { ReactComponent as KeyIcon } from '@/assets/icons/input/key.svg';
import CashMachineImg from '@/assets/images/auth/cash-machine.jpeg';
import { StyledAuthWrapper, StyledForgotLink, StyledForm, StyledAuthContent, StyledImage } from './style';
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
        <StyledAuthWrapper>
            <StyledAuthContent>
                <StyledImage>
                    <img src={CashMachineImg} alt="cash machine" />
                </StyledImage>
                <StyledForm>
                    <h2>{t('pages.login.title')}</h2>
                    <form>
                        <InputField
                            type="text"
                            label={t('forms.email')}
                            value={formValues.email}
                            errorMessage={isFieldTouched('email') ? emailErrorMessage : ''}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder={t('forms.email')}
                            icon={<PersonIcon />}
                        />
                        <InputField
                            type="password"
                            label={t('forms.password')}
                            value={formValues.password}
                            errorMessage={isFieldTouched('password') ? passwordErrorMessage : ''}
                            onChange={(e) => handleChange('password', e.target.value)}
                            placeholder={t('forms.password')}
                            icon={<KeyIcon />}
                        />
                        <StyledForgotLink>
                            <Link to="/forgot-password">{t('pages.forgotPassword.title')}?</Link>
                        </StyledForgotLink>
                        <Button disabled={!isFormValid} width="100%" onClick={handleLogin}>
                            {t('pages.login.form.button')}
                        </Button>
                    </form>
                </StyledForm>
            </StyledAuthContent>
        </StyledAuthWrapper>
    );
};
export default Login;
