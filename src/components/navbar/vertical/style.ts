import styled from 'styled-components';

export const StyledVerticalNavbar = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    transition: all 0.3s ease-in-out;
    transform: translateX(0px);
    box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.2);
    background: white;
    z-index: 2;
    padding: 1.25rem;
    a {
        display: flex;
        align-items: center;
        svg {
            margin-right: 0.313rem;
        }
    }
`;
