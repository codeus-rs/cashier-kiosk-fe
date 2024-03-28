import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '@/assets/icons/arrowBack.svg';

type Props = {
    onClick?: MouseEventHandler;
    className?: string;
    href?: string;
    children?: ReactNode;
};

const BackLink: FunctionComponent<Props> = ({ href, className, onClick, children }) => {
    const nav = useNavigate();
    const handleClick: MouseEventHandler = (e) => (onClick ? onClick(e) : href ? nav(href) : nav(-1));

    return (
        <StyledBackLink onClick={handleClick} className={className}>
            <BackIcon />
            {children}
        </StyledBackLink>
    );
};

const StyledBackLink = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.5rem;
    background: #fff;
    border: 0.07rem solid ${(props) => props.theme.palette.gray};
    border-radius: 0.188rem;
    min-height: 2.5rem;
    min-width: 2.5rem;
    font-size: 1rem;
    padding: 0 0.4rem;
    svg {
        padding-left: 0.4rem;
    }
    &:hover {
        background: ${(props) => props.theme.palette.primary};
        svg {
            path {
                color: #fff;
            }
        }
    }
    img {
        margin-right: 0.3rem;
    }
`;

export default BackLink;
