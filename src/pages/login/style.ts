import styled from 'styled-components';
export const StyledAuthWrapper = styled.div`
    background: ${(props) => props.theme.palette.darkBgColor};
    padding: 2rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 7.5rem;
    }
    h2 {
        margin-bottom: 1.5rem;
    }
`;
export const StyledAuthContent = styled.div`
    display: flex;
    align-items: center;
    height: 30rem;
    width: 100%;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        height: 40rem;
        max-width: 74rem;
    }
    > div {
        width: 100%;
        height: 100%;
        @media (min-width: ${(props) => props.theme.breakpoints.md}) {
            width: 50%;
        }
    }
`;
export const StyledImage = styled.div`
    border-radius: 1.25rem 0rem 0rem 1.25rem;
    position: relative;
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        display: block;
    }
    &:after {
        content: '';
        background: linear-gradient(151deg, #4b6c48 20.79%, rgba(255, 255, 255, 0) 75.49%);
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        top: 0;
        mix-blend-mode: multiply;
        border-radius: 1.25rem 0rem 0rem 1.25rem;
    }

    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1.25rem 0rem 0rem 1.25rem;
    }
`;
export const StyledForm = styled.div`
    background: ${(props) => props.theme.palette.lightBgColor};
    padding: 2rem;
    border-radius: 1.25rem;
    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        padding: 9.69rem 5.62rem;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        border-radius: 0rem 1.25rem 1.25rem 0rem;
    }
`;
export const StyledForgotLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;
`;
