import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '@/assets/icons/input/search.svg';
import InputFieldWrapper, { BaseInputProps } from '../inputFieldWrapper';

type Props = BaseInputProps;

const Search: FunctionComponent<Props> = ({ helperText, className, onChange, ...inputProps }) => {
    return (
        <StyledSearch className={className}>
            <InputFieldWrapper helperText={helperText}>
                <SearchIcon />
                <input type="text" onChange={onChange} {...inputProps} />
            </InputFieldWrapper>
        </StyledSearch>
    );
};

const StyledSearch = styled.div`
    position: relative;

    input {
        outline: none;
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.palette.lightBgColor};
        border: none;
        height: 2.26rem;
        padding: 0.5rem 0.75rem 0.5rem 2.75rem;
        &::placeholder {
            color: ${(props) => props.theme.palette.secondary};
            font-size: 0.75rem;
        }
    }
    svg {
        position: absolute;
        left: 0.75rem;
        right: auto;
        top: 0.5rem;
    }
`;
export default Search;
