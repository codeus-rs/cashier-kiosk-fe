import { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import { theme } from '@/global/theme';

interface Props {
    headline?: string;
    description?: string;
}
const NoItems: FunctionComponent<Props> = ({ headline, description }) => {
    return (
        <StyledNoItems>
            <h1>{headline}</h1>
            <p>{description}</p>
        </StyledNoItems>
    );
};

NoItems.defaultProps = {
    headline: 'No items',
    description: 'No items in the list',
};

export default NoItems;

const StyledNoItems = styled.div`
    min-width: 100%;
    text-align: center;
    color: ${theme.palette.darkGray};
`;
