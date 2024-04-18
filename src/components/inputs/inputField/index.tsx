import { FunctionComponent, useState } from 'react';
import { css, styled } from 'styled-components';
import { ReactComponent as EyeShowIcon } from '@/assets/icons/input/eye-show.svg';
import { ReactComponent as EyeHideIcon } from '@/assets/icons/input/eye-hide.svg';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type HtmlInputProps = JSX.IntrinsicElements['input'] &
    BaseInputProps & { type?: 'text' | 'number' | 'password' | 'email' };

type HtmlTextAreaProps = JSX.IntrinsicElements['textarea'] & BaseInputProps & { type: 'textarea' };

type InputFieldProps = HtmlInputProps | HtmlTextAreaProps;

const InputField: FunctionComponent<InputFieldProps> = ({
    errorMessage,
    helperText,
    icon,
    label,
    type,
    value,
    ...inputProps
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = (e): void => {
        if (value !== '') {
            setPasswordVisible(!passwordVisible);
        } else {
            e.preventDefault();
        }
    };

    return (
        <InputFieldWrapper label={label} errorMessage={errorMessage} helperText={helperText}>
            {type === 'textarea' ? (
                <StyledTextArea {...(inputProps as HtmlTextAreaProps)} />
            ) : (
                <StyledInputContent className={icon ? 'has-icon' : ''}>
                    {icon && <StyledInputIcon className="input-icon">{icon}</StyledInputIcon>}
                    <StyledInput
                        type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type}
                        {...(inputProps as HtmlInputProps)}
                    />
                    {type === 'password' ? (
                        <StyledPasswordIcon onClick={(e) => togglePassword(e)} className="cursor-pointer icon">
                            {passwordVisible ? <EyeShowIcon /> : <EyeHideIcon />}
                        </StyledPasswordIcon>
                    ) : (
                        <></>
                    )}
                </StyledInputContent>
            )}
        </InputFieldWrapper>
    );
};

const inputStyles = css`
    border-radius: ${(props) => props.theme.borderRadius};
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.primary};
    padding: 1rem 1.13rem;
    height: 3.25rem;
    font-size: 1rem;
    color: ${(props) => props.theme.palette.gray};
    background: ${(props) => props.theme.palette.lightBgColor};
    outline: none;
    transition: ${(props) => props.theme.transition};
    width: 100%;
    &:focus,
    &:active {
        box-shadow: ${(props) => props.theme.shadows.main};
        background: ${(props) => props.theme.palette.white};
        color: ${(props) => props.theme.palette.black};
        &::placeholder {
            color: ${(props) => props.theme.palette.black};
        }
    }

    &::placeholder {
        transition: ${(props) => props.theme.transition};
        font-size: 1rem;
        line-height: 1.25rem;
        color: ${(props) => props.theme.palette.gray};
    }
`;

const StyledInputContent = styled.div`
    position: relative;
    &.has-icon {
        // svg {
        //     &:first-child {
        //         path {
        //             fill: ${(props) => props.theme.palette.primary};
        //         }
        //     }
        // }
        input {
            padding: 1rem 1.13rem 1rem 3.37rem;
        }
    }
`;
const StyledInputIcon = styled.div`
    position: absolute;
    left: 1.13rem;
    top: 1rem;
`;
const StyledPasswordIcon = styled.div`
    position: absolute;
    right: 1.13rem;
    top: 1rem;
    cursor: pointer;
`;
const StyledInput = styled.input`
    ${inputStyles}
`;

const StyledTextArea = styled.textarea`
    ${inputStyles}
`;

export default InputField;
