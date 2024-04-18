import styled from 'styled-components';
export const StyledDashboard = styled.div`
    div {
        &.items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.13rem;
        }
    }
`;
