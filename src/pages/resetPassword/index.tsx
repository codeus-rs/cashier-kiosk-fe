import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTouchField } from '@/hooks/useTouchField';
import useMinLength from '@/hooks/validation/useMinLength';
import { StyledAuthWrapper, StyledForm, StyledAuthContent, StyledImage } from '@/pages/login/style';
import InputField from '@/components/inputs/inputField';
import Button from '@/components/buttons';
import CashMachineImg from '@/assets/images/auth/cash-machine.jpeg';
import { ReactComponent as KeyIcon } from '@/assets/icons/input/key.svg';

type FormValues = {
    password: string;
    confirmPassword: string;
};

const ResetPassword: FunctionComponent = () => {
    const { t } = useTranslation();

    const [formValues, setFormValues] = useState<FormValues>({
        password: '',
        confirmPassword: '',
    });
    const passwordErrorMessage = useMinLength(formValues.password, 8);

    const { isFieldTouched, handleFieldTouch } = useTouchField<FormValues>();

    const handleChange = (fieldName: keyof FormValues, value): void => {
        handleFieldTouch(fieldName);
        setFormValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    };
    const handleResetPassword = (): void => {
        return;
    };

    return (
        <StyledAuthWrapper>
            <StyledAuthContent>
                <StyledImage>
                    <img src={CashMachineImg} alt="cash machine" />
                </StyledImage>
                <StyledForm>
                    <h2>{t('pages.resetPassword.title')}</h2>
                    <form>
                        <InputField
                            type="password"
                            label={t('forms.password')}
                            value={formValues.password}
                            errorMessage={isFieldTouched('password') ? passwordErrorMessage : ''}
                            onChange={(e) => handleChange('password', e.target.value)}
                            icon={<KeyIcon />}
                        />
                        <InputField
                            type="password"
                            label={t('forms.confirmPassword')}
                            value={formValues.password}
                            errorMessage={isFieldTouched('confirmPassword') ? passwordErrorMessage : ''}
                            onChange={(e) => handleChange('confirmPassword', e.target.value)}
                            icon={<KeyIcon />}
                        />
                        <Button disabled={!passwordErrorMessage} width="100%" onClick={handleResetPassword}>
                            {t('pages.resetPassword.title')}
                        </Button>
                    </form>
                </StyledForm>
            </StyledAuthContent>
        </StyledAuthWrapper>
    );
};
export default ResetPassword;
