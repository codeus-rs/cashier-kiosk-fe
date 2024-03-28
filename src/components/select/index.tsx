import { FunctionComponent } from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import clsx from 'clsx';
import { styled } from 'styled-components';
import InputFieldWrapper, { BaseInputProps } from '../inputs/inputFieldWrapper';

type Props = ReactSelectProps & BaseInputProps;

const SelectField: FunctionComponent<Props> = ({
    helperText,
    errorMessage,
    label,
    className,
    classNamePrefix,
    placeholder,
    ...reactSelectProps
}) => {
    return (
        <SelectFieldWrapper helperText={helperText} errorMessage={errorMessage} label={label}>
            <ReactSelect
                className={clsx('react-select', className)}
                classNamePrefix={clsx('react-select', classNamePrefix)}
                placeholder={placeholder}
                {...reactSelectProps}
            />
        </SelectFieldWrapper>
    );
};

const SelectFieldWrapper = styled(InputFieldWrapper)`
    .react-select__control {
        border-color: ${(props) => props.theme.palette.gray};
        border-radius: 0.5rem;
        min-height: 2.5rem;
    }
    .react-select__option--is-selected {
        background-color: ${(props) => props.theme.palette.primary};
    }
`;

export default SelectField;
