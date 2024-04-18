import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Palette } from '@/types/theme';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type BaseCheckboxProps = Omit<JSX.IntrinsicElements['input'], 'type' | 'checked'>;
type Props = BaseInputProps & BaseCheckboxProps & { color?: keyof Palette };

const CheckboxField: FunctionComponent<Props> = ({
    helperText,
    errorMessage,
    label,
    className,
    value,
    onChange,
    ...checkboxProps
}) => {
    return (
        <InputFieldWrapper helperText={helperText} errorMessage={errorMessage}>
            <StyledCheckbox className={className} onClick={onChange}>
                <div className="checkbox-wrapper">
                    <input type="checkbox" checked={value} onChange={onChange} {...checkboxProps} />
                    <span className="checkmark"></span>
                </div>
                <div className="label">{label}</div>
            </StyledCheckbox>
        </InputFieldWrapper>
    );
};

CheckboxField.defaultProps = {
    color: 'primary',
    defaultChecked: false,
};

const StyledCheckbox = styled.label<Props>`
    display: flex;
    align-items: center;
    cursor: pointer;

    .checkbox-wrapper {
        display: block;
        position: relative;
        height: 1.25rem;
        width: 1.25rem;
        padding-left: 1.8rem;
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
            &:checked {
                ~ .checkmark:after {
                    display: block;
                }
                ~ .checkmark {
                    background-color: ${(props) => props.theme.palette[props.color ?? 'primary']};
                }
            }
            &:disabled {
                + .checkmark,
                input:disabled + .checkmark + .label {
                    opacity: 0.5;
                }
            }
        }

        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 1.25rem;
            width: 1.25rem;
            border: ${(props) => `1px solid ${props.theme.palette.primary}`};
            background: ${(props) => props.theme.palette.lightBgColor};
            border-radius: ${(props) => props.theme.borderRadius};
            box-shadow: ${(props) => props.theme.shadows.main};

            &:after {
                content: '';
                position: absolute;
                display: none;
                left: 0.4rem;
                top: 0.1rem;
                width: 0.35rem;
                height: 0.7rem;
                border: solid white;
                border-width: 0 0.1rem 0.1rem 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }

        &:hover {
            .checkmark,
            .label {
                opacity: 0.7;
            }
        }
    }
`;

export default CheckboxField;
