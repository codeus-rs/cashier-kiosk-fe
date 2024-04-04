import styled from 'styled-components';

export const StyledHorizontalNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.938rem;
    position: fixed;
    top: 0;
    left: 300px;
    width: calc(100% - 300px);
    transition: all 0.3s ease-in-out;
    box-shadow: 4px 0px 9px 1px rgba(0, 0, 0, 0.2);
    background: white;
    z-index: 1;
`;
export const StyledUserMenu = styled.div`
    position: relative;
    button {
        display: flex;
        align-items: center;
    }
`;
export const StyledUserDropdown = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    left: 0;
    top: 1.875rem;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    padding: 0.625rem;
    border-radius: 0.313rem;
    background: white;

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`;
