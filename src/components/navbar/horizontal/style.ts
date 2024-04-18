import styled from 'styled-components';
export const StyledHorizontalNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.938rem;
    transition: ${(props) => props.theme.transition};
    background: white;
    z-index: 1;
    width: 100%;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.palette.borderColor};
    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        left: 300px;
        width: calc(100% - 300px);
        position: fixed;
        top: 0;
        border: none;
    }

    button {
        &.menu-arrow {
            transition: ${(props) => props.theme.transition};
            box-shadow: ${(props) => props.theme.shadows.main};
            border-radius: 50%;
            @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
                margin-left: -2rem;
            }
        }
    }
`;
export const StyledUserMenu = styled.div`
    position: relative;
    button {
        display: flex;
        align-items: center;
        svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;
export const StyledUserDropdown = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    right: 0;
    top: 2.3rem;
    transition: ${(props) => props.theme.transition};
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.palette.lightBgColor};
    width: 6.5rem;

    &.visible {
        opacity: 1;
        visibility: visible;
    }
    h4 {
        padding: 0.4rem 0.8rem;
        background: ${(props) => props.theme.palette.secondary};
        border-radius: ${(props) => `${props.theme.borderRadius} ${props.theme.borderRadius} 0rem 0rem`};
        color: ${(props) => props.theme.palette.white};
    }
    a,
    button {
        padding: 0.4rem 0.8rem;
        display: flex;
    }
`;
