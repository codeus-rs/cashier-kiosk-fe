import { FunctionComponent } from 'react';
import { css, styled } from 'styled-components';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type HtmlInputProps = JSX.IntrinsicElements['input'] &
    BaseInputProps & { type?: 'text' | 'number' | 'password' | 'email' };

type HtmlTextAreaProps = JSX.IntrinsicElements['textarea'] & BaseInputProps & { type: 'textarea' };

type InputFieldProps = HtmlInputProps | HtmlTextAreaProps;

const InputField: FunctionComponent<InputFieldProps> = ({ errorMessage, helperText, label, type, ...inputProps }) => {
    return (
        <InputFieldWrapper label={label} errorMessage={errorMessage} helperText={helperText}>
            {type === 'textarea' ? (
                <StyledTextArea {...(inputProps as HtmlTextAreaProps)} />
            ) : (
                <StyledInput {...(inputProps as HtmlInputProps)} />
            )}
        </InputFieldWrapper>
    );
};

const inputStyles = css`
    border-radius: 0.5rem;
    border-width: 0.065rem;
    border-color: rgb(209 213 219, 1);
    padding: 0.4rem 1rem;
`;

const StyledInput = styled.input`
    ${inputStyles}
`;

const StyledTextArea = styled.textarea`
    ${inputStyles}
`;

export default InputField;
