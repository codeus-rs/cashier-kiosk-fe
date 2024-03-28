import { FunctionComponent } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from '@/types/theme';

type Props = JSX.IntrinsicElements['button'] & {
    variant?: 'outlined' | 'solid' | 'text';
    href?: string;
    color?: keyof Palette;
    className?: string;
    disabled?: boolean;
};

const Button: FunctionComponent<Props> = ({ href, children, ...buttonProps }) => {
    return href ? (
        <StyledButton {...buttonProps}>
            <StyledLink to={href}>{children} </StyledLink>
        </StyledButton>
    ) : (
        <StyledButton {...buttonProps}>{children}</StyledButton>
    );
};

Button.defaultProps = {
    variant: 'solid',
    color: 'primary',
};

const StyledButton = styled.button<Props>`
    max-width: fit-content;
    cursor: pointer;
    background-color: ${(props) =>
        props.variant === 'solid' ? props.theme.palette[props.color ?? 'primary'] : 'white'};
    color: ${(props) => (props.variant === 'solid' ? 'white' : props.theme.palette[props.color ?? 'primary'])};
    padding: 0.5rem 1rem;
    border: ${(props) =>
        props.variant === 'outlined' || props.variant === 'solid'
            ? `0.06rem solid ${props.theme.palette[props.color ?? 'primary']}`
            : ''};
    transition: all 0.4s;
    border-radius: 0.5rem;

    &:hover {
        opacity: 0.8;
        background-color: ${(props) =>
            props.variant !== 'solid' ? props.theme.palette[props.color ?? 'primary'] + '0F' : undefined};
    }

    &:disabled {
        opacity: 0.5;
    }
`;

const StyledLink = styled(NavLink)`
    color: inherit;
`;
export default Button;
