import styled from 'styled-components';
export const StyledNavbar = styled.div`
    display: flex;
    &.collapsed {
        .vertical-navbar {
            width: 93px;
        }
        .horizontal-navbar {
            @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
                left: 93px;
                width: calc(100% - 93px);
            }
            .menu-arrow {
                transform: rotate(180deg);
            }
        }
    }
`;
