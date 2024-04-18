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
        border-radius: ${(props) => props.theme.borderRadius};
        border-width: 1px;
        border-color: ${(props) => props.theme.palette.primary};
        padding: 1rem 1.13rem;
        height: 3.25rem;
        color: ${(props) => props.theme.palette.gray};
        background: ${(props) => props.theme.palette.lightBgColor};
        transition: ${(props) => props.theme.transition};
        outline: none;
        &:focus,
        &:active {
            box-shadow: ${(props) => props.theme.shadows.main};
            background: ${(props) => props.theme.palette.white};
            color: ${(props) => props.theme.palette.black};
            &::placeholder {
                color: ${(props) => props.theme.palette.black};
            }
        }
    }
    .react-datepicker__input-container {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        svg {
            path {
                fill: ${(props) => props.theme.palette.primary};
            }
        }
    }
    .react-datepicker {
        border: ${(props) => `1px solid ${props.theme.palette.primary}`};
        border-radius: ${(props) => props.theme.borderRadius};
        .react-datepicker__triangle {
            &:before,
            &:after {
                display: none;
            }
        }
        .react-datepicker__navigation {
            span {
                &:before {
                    border-color: ${(props) => props.theme.palette.white};
                }
            }
        }
        .react-datepicker__header {
            background: transparent;
            border-radius: 0;
            background: ${(props) => props.theme.palette.darkBgColor};
            border-radius: ${(props) => `${props.theme.borderRadius} ${props.theme.borderRadius} 0rem 0rem`};
            color: ${(props) => props.theme.palette.white};
            border-color: ${(props) => props.theme.palette.primary};
            .react-datepicker__current-month {
                color: ${(props) => props.theme.palette.white};
                font-weight: normal;
            }
            .react-datepicker__day-name {
                color: ${(props) => props.theme.palette.white};
            }
        }
        .react-datepicker__header__dropdown {
            margin: 10px 0;

            .react-datepicker__month-dropdown-container {
                .react-datepicker__month-read-view--down-arrow {
                    top: 3px;
                    border-color: ${(props) => props.theme.palette.white};
                }
                .react-datepicker__month-option {
                    &:hover {
                        background: ${(props) => props.theme.palette.darkBgColor};
                        color: ${(props) => props.theme.palette.white};
                    }
                }
            }
            .react-datepicker__year-dropdown-container {
                .react-datepicker__navigation--years {
                    &::before {
                        border-color: ${(props) => props.theme.palette.primary};
                        border-style: solid;
                        border-width: 3px 3px 0 0;
                        content: '';
                        display: block;
                        height: 9px;
                        left: 11px;
                        position: absolute;
                        width: 9px;
                    }
                }
                .react-datepicker__navigation--years-upcoming {
                    &::before {
                        top: 17px;
                        transform: rotate(315deg);
                    }
                }

                .react-datepicker__navigation--years-previous {
                    &::before {
                        top: 6px;
                        transform: rotate(135deg);
                    }
                }
                .react-datepicker__year-read-view--down-arrow {
                    top: 3px;
                    border-color: ${(props) => props.theme.palette.white};
                }
                .react-datepicker__year-option {
                    &:hover {
                        background: ${(props) => props.theme.palette.darkBgColor};
                        color: ${(props) => props.theme.palette.white};
                    }
                }
            }
            .react-datepicker__year-dropdown,
            .react-datepicker__month-dropdown {
                background: ${(props) => props.theme.palette.lightBgColor};
                color: ${(props) => props.theme.palette.black};
                border-color: ${(props) => props.theme.palette.primary};
            }
        }
        .react-datepicker__month {
            .react-datepicker__week {
                .react-datepicker__day {
                    font-weight: normal;
                    border-radius: 0;
                    border-radius: ${(props) => props.theme.borderRadius};
                    &:hover {
                        background: ${(props) => props.theme.palette.darkBgColor};
                        color: ${(props) => props.theme.palette.white};
                    }
                }
                .react-datepicker__day--selected,
                .react-datepicker__day--keyboard-selected {
                    background: ${(props) => props.theme.palette.primary};
                    color: ${(props) => props.theme.palette.white};
                }
            }
        }
    }
`;

export default DateField;
