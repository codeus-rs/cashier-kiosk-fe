import styled from 'styled-components';

export const StyledVerticalNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    transition: ${(props) => props.theme.transition};
    transform: translateX(0px);
    border-right: 1px solid ${(props) => props.theme.palette.borderColor};
    background: ${(props) => props.theme.palette.lightBgColor};
    padding: 1.25rem;
    top: 3.876rem;
    z-index: 1;

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 300px;
        top: 0;
    }
    a {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-bottom: 0.69rem;
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};

        svg {
            transition: ${(props) => props.theme.transition};
        }
        p {
            margin-left: 0.313rem;
        }
        &.logo {
            margin-bottom: 2.37rem;
        }
        &.active {
            color: ${(props) => props.theme.palette.white};
            background: ${(props) =>
                `linear-gradient(246deg, ${props.theme.palette.tertiary} 0.59%,  ${props.theme.palette.primary} 50.69%,   ${props.theme.palette.primary} 61.38%,  ${props.theme.palette.tertiary} 96.41%)`};
            background-size: 200% 100%;
            background-position: right;
            svg {
                path {
                    fill: ${(props) => props.theme.palette.white};
                }
            }
        }
    }
`;
