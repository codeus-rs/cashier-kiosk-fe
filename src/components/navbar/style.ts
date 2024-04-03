import styled from 'styled-components';
export const StyledNavbar = styled.div`
    display: flex;
    &.hidden {
        .vertical-navbar {
            transform: translateX(-300px);
        }
        .horizontal-navbar {
            left: 0px;
            width: 100%;
        }
    }
`;
