import { FunctionComponent, ReactNode } from 'react';
import { styled } from 'styled-components';

export type BaseInputProps = {
    className?: string;
    value?: any;
    placeholder?: string;
    onChange?: (value: any) => void;
    disabled?: boolean;
    label?: string;
    errorMessage?: string;
    helperText?: string;
};

type Props = BaseInputProps & { children: ReactNode };

const Input: FunctionComponent<Props> = ({ errorMessage, helperText, label, children, className }) => {
    return (
        <Wrapper className={className}>
            {label && <label>{label}</label>}
            {children}
            <div>
                {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
                {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Message = styled.div`
    font-size: 0.75rem;
    font-weight: 500;
    padding-left: 0.3rem;
`;

const StyledErrorMessage = styled(Message)`
    color: ${(props) => props.theme.palette.error};
`;

const StyledHelperText = styled(Message)`
    color: ${(props) => props.theme.palette.darkGray};
`;

export default Input;
