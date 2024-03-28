import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Palette } from '@/types/theme';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type BaseRadioProps = Omit<JSX.IntrinsicElements['input'], 'type' | 'checked'>;
type Props = BaseInputProps & BaseRadioProps & { color?: keyof Palette };

const RadioField: FunctionComponent<Props> = ({
    helperText,
    errorMessage,
    label,
    className,
    onChange,
    ...radioProps
}) => {
    return (
        <InputFieldWrapper helperText={helperText} errorMessage={errorMessage}>
            <StyledRadio className={className} onClick={onChange}>
                <input type="radio" onChange={onChange} {...radioProps} />
                <span className="checkmark"></span>
                <div className="label">{label}</div>
            </StyledRadio>
        </InputFieldWrapper>
    );
};

RadioField.defaultProps = {
    color: 'primary',
    defaultChecked: false,
};

const StyledRadio = styled.label<Props>`
    display: block;
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark:after {
            display: block;
        }
        &:disabled + .checkmark,
        input:disabled + .checkmark + .label {
            opacity: 0.5;
        }
        &:checked ~ .checkmark {
            background-color: ${(props) => props.theme.palette[props.color ?? 'primary']};
        }
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background-color: ${(props) => props.theme.palette.gray};
        border-radius: 50%;
        &:after {
            content: '';
            position: absolute;
            display: none;
            top: 0.375rem;
            left: 0.375rem;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: white;
        }
    }

    &:hover {
        .checkmark,
        .label {
            opacity: 0.7;
        }
    }
`;

export default RadioField;
