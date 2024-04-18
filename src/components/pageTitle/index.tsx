import { FunctionComponent, ReactElement } from 'react';
import { styled } from 'styled-components';

type Props = {
    title: string;
    icon?: ReactElement;
};

const PageTitle: FunctionComponent<Props> = ({ title, icon }) => {
    return (
        <StyledPageTitle>
            {icon}
            <h3>{title}</h3>
        </StyledPageTitle>
    );
};

const StyledPageTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.19rem;
    svg {
        margin-right: 0.75rem;
    }
`;
export default PageTitle;
