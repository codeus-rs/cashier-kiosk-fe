import { FunctionComponent } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { ReactComponent as CalendarIcon } from '@/assets/icons/datePickerIcon.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';
import { BaseInputProps } from '../inputFieldWrapper';
import InputFieldWrapper from '../inputFieldWrapper';

type Props = Omit<ReactDatePickerProps, 'selected'> & BaseInputProps;

const DateField: FunctionComponent<Props> = ({
    errorMessage,
    label,
    helperText,
    placeholder,
    value,
    ...datePickerProps
}) => {
    return (
        <InputFieldWrapper label={label} errorMessage={errorMessage} helperText={helperText}>
            <DateFieldWrapper>
                <DatePicker
                    showIcon
                    placeholderText={placeholder}
                    selected={value}
                    dateFormat="dd.MM.yyyy"
                    icon={<CalendarIcon fontSize={24} />}
                    showMonthDropdown
                    showYearDropdown
                    {...datePickerProps}
                />
            </DateFieldWrapper>
        </InputFieldWrapper>
    );
};

const DateFieldWrapper = styled.div`
    .react-datepicker-wrapper {
        min-width: 100%;
        display: flex;
    }
    input {
        border: 0.065rem solid ${(props) => props.theme.palette.gray};
        border-radius: 0.45rem;
        min-width: 100%;
        padding-top: 0.45rem;
        padding-bottom: 0.45rem;
        padding-left: 1rem;
    }
    .react-datepicker__input-container {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
`;

export default DateField;
