import { FunctionComponent } from 'react';
import ReactSelect, { Props as ReactSelectProps, StylesConfig } from 'react-select';
import clsx from 'clsx';
import variables from '@/global/variables.module.scss';
import InputFieldWrapper, { BaseInputProps } from '@/components/inputs/inputFieldWrapper';

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
        <InputFieldWrapper helperText={helperText} errorMessage={errorMessage} label={label}>
            <ReactSelect
                className={clsx('react-select', className)}
                classNamePrefix={clsx('react-select', classNamePrefix)}
                placeholder={placeholder}
                styles={selectStyles}
                {...reactSelectProps}
            />
        </InputFieldWrapper>
    );
};

const selectStyles: StylesConfig<any> = {
    valueContainer: (styles) => ({
        ...styles,
        padding: '2px 1.13rem',
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: variables.primary,
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        color: variables.primary,
    }),
    menu: (styles) => ({
        ...styles,
        boxShadow: 'none',
    }),
    menuList: (styles) => ({
        ...styles,
        padding: '0',
        borderColor: variables.primary,
        border: '1px solid',
        borderRadius: variables.borderRadius,
    }),
    control: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? variables.white : variables.lightBgColor,
        borderColor: variables.primary,
        borderRadius: variables.borderRadius,
        cursor: 'pointer',
        boxShadow: isFocused ? variables.inputShadow : 'none',
        minHeight: '3.25rem',
        fontSize: '1rem',
        lineHeight: '1.25rem',
        transition: variables.transition,
        ':hover': {
            borderColor: variables.primary,
        },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                  ? variables.darkBgColor
                  : isFocused
                    ? data.color
                    : undefined,
            color: isDisabled ? '#ccc' : isSelected ? variables.white : variables.black,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            border: 'none',
            fontSize: '0.85rem',
            lineHeight: 'normal',
            padding: '0.625rem 1.13rem',
            transition: variables.transition,

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled ? variables.lightBgColor : undefined,
            },
            ':hover': {
                backgroundColor: variables.lightBgColor,
                color: variables.primary,
            },
        };
    },
    noOptionsMessage: (styles) => ({
        ...styles,
        padding: '0.625rem 1.13rem',
    }),
    placeholder: (styles) => ({ ...styles, color: variables.gray }),
};

export default SelectField;
