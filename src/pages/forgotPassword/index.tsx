import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTouchField } from '@/hooks/useTouchField';
import useIsEmail from '@/hooks/validation/useIsEmail';
import { StyledAuthWrapper, StyledForm, StyledAuthContent, StyledImage } from '@/pages/login/style';
import InputField from '@/components/inputs/inputField';
import Button from '@/components/buttons';
import CashMachineImg from '@/assets/images/auth/cash-machine.jpeg';

type FormValues = {
    email: string;
};

const ForgotPassword: FunctionComponent = () => {
    const { t } = useTranslation();

    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
    });
    const emailErrorMessage = useIsEmail(formValues.email);

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
                    <h2>{t('pages.forgotPassword.title')}</h2>
                    <form>
                        <InputField
                            type="text"
                            label={t('forms.email')}
                            value={formValues.email}
                            errorMessage={isFieldTouched('email') ? emailErrorMessage : ''}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                        <Button disabled={!emailErrorMessage} width="100%" onClick={handleResetPassword}>
                            {t('pages.resetPassword.title')}
                        </Button>
                    </form>
                </StyledForm>
            </StyledAuthContent>
        </StyledAuthWrapper>
    );
};
export default ForgotPassword;
