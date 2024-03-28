import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { Palette } from '@/types/theme';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type BaseSwitchProps = Omit<JSX.IntrinsicElements['input'], 'type' | 'checked'>;
type Props = BaseInputProps & BaseSwitchProps & { color?: keyof Palette; rounded?: boolean };

const SwitchField: FunctionComponent<Props> = ({
    helperText,
    errorMessage,
    label,
    className,
    value,
    onChange,
    rounded,
    ...switchProps
}) => {
    return (
        <InputFieldWrapper helperText={helperText} errorMessage={errorMessage}>
            <StyledSwitch className={className} rounded={rounded} {...switchProps}>
                <input type="checkbox" onClick={onChange} checked={value} {...switchProps} />
                <span className="slider round"></span>
                <div className="label">{label}</div>
            </StyledSwitch>
        </InputFieldWrapper>
    );
};

SwitchField.defaultProps = {
    color: 'primary',
    defaultChecked: false,
    rounded: false,
};

const StyledSwitch = styled.label<Props>`
    position: relative;
    display: flex;
    align-items: center;
    height: 1.5rem;
    input {
        opacity: 0;
        height: 0;
        min-width: 2.8rem;
        &:checked + .slider {
            background-color: ${(props) => props.theme.palette[props.color ?? 'primary']};
        }
        &:focus + .slider {
            box-shadow: 0 0 0.125rem ${(props) => props.theme.palette[props.color ?? 'primary']};
        }
        &:checked + .slider:before {
            -webkit-transform: translateX(1rem);
            -ms-transform: translateX(1rem);
            transform: translateX(1rem);
        }
        &:disabled + .slider,
        &:disabled + .slider + .label {
            opacity: 0.5;
        }
    }
    .slider {
        position: absolute;
        width: 2.5rem;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.palette.gray};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        &:before {
            position: absolute;
            content: '';
            height: 1rem;
            width: 1rem;
            left: 0.25rem;
            bottom: 0.25rem;
            background-color: white;
            -webkit-transition: 0.3s;
            transition: 0.3s;
        }
    }
    .label {
        cursor: pointer;
    }

    ${({ rounded }) => rounded && roundedSwitchStyles}

    &:hover {
        .checkmark,
        .label {
            opacity: 0.5;
        }
    }
`;

const roundedSwitchStyles = css`
    .slider {
        border-radius: 1.25rem;
        &:before {
            border-radius: 50%;
        }
    }
`;

export default SwitchField;
