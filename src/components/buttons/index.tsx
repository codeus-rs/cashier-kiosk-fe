import { FunctionComponent } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
type Props = JSX.IntrinsicElements['button'] & {
    variant?: 'outlined' | 'solid' | 'text';
    href?: string;
    className?: string;
    disabled?: boolean;
    width?: string;
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
};

const getButtonBgColor = (variant: string, active?: 'active' | ''): string | any => {
    switch (variant) {
        case 'solid':
            return active
                ? (props: any) => {
                      props.theme.palette.tertiary;
                  }
                : (props: any) =>
                      `linear-gradient(246deg, ${props.theme.palette.tertiary} 0.59%, ${props.theme.palette.primary} 50.69%,  ${props.theme.palette.primary} 61.38%, ${props.theme.palette.tertiary} 96.41%)`;
        case 'outlined':
            return 'transparent';
        case 'text':
            return active ? `${(props: any) => props.theme.palette.color.tertiary}` : 'white';
        default:
            return active
                ? (props: any) => props.theme.palette.tertiary
                : (props: any) =>
                      `linear-gradient(246deg, ${props.theme.palette.tertiary} 0.59%, ${props.theme.palette.primary} 50.69%,  ${props.theme.palette.primary} 61.38%, ${props.theme.palette.tertiary} 96.41%)`;
    }
};

const getButtonColor = (variant: string, active?: 'active' | ''): string | any => {
    switch (variant) {
        case 'solid':
            return active ? `${(props: any) => props.theme.palette.tertiary}` : 'white';
        case 'outlined':
            return (props: any) => props.theme.palette.black;
        case 'text':
            return (props: any) => props.theme.palette.primary;
        default:
            return 'white';
    }
};
const StyledButton = styled.button<Props>`
    width: ${(props) => (props.width ? props.width : 'fit-content')};
    background: ${(props) => props.variant && getButtonBgColor(props.variant)};
    color: ${(props) => props.variant && getButtonColor(props.variant)};
    padding: 0.75rem 1rem;
    border: ${(props) => (props.variant === 'outlined' ? `1px solid ${props.theme.palette.primary}` : 'none')};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: 1.125rem;
    cursor: pointer;
    background-size: 200% 100%;
    background-position: right;
    transition:
        background-size 0.5s ease-in-out,
        transform 0.3s,
        background-position 0.5s ease-in-out,
        border 0.3s ease-in-out;

    &:hover {
        border: ${(props) => (props.variant === 'outlined' ? `1px solid ${props.theme.palette.tertiary}` : 'none')};
        background-position: left;
    }

    &:active {
        border-color: ${(props) => props.variant && getButtonColor(props.variant, 'active')};
        background: ${(props) => props.variant && getButtonBgColor(props.variant, 'active')};
        color: ${(props) => props.variant && getButtonColor(props.variant, 'active')};
        transform: scale(0.95);
    }

    &:disabled {
        transform: none;
        cursor: not-allowed;
        background: rgba(170, 170, 170, 0.5);
    }
`;

const StyledLink = styled(NavLink)`
    color: inherit;
`;
export default Button;
