import { FunctionComponent } from 'react';
import { styled } from 'styled-components';
type Props = {
    title: string;
    subtitle: string;
    content: string;
    bottomTitle: string;
};

const KioskCard: FunctionComponent<Props> = ({ title, subtitle, content, bottomTitle }) => {
    return (
        <StyledKioskCard>
            <h2>{title}</h2>
            <div>
                <p>{subtitle}</p>
                <div>{content}</div>
                <p>{bottomTitle}</p>
            </div>
        </StyledKioskCard>
    );
};

const StyledKioskCard = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.palette.lightBgColor};
    margin-bottom: 1.5rem;

    h2 {
        padding: 1.06rem 1.44rem;
        background: ${(props) => props.theme.palette.secondary};
        border-radius: ${(props) => `${props.theme.borderRadius} ${props.theme.borderRadius} 0rem 0rem`};
        color: ${(props) => props.theme.palette.white};
    }
    > div {
        padding: 1.06rem 1.44rem;
        p {
            text-transform: uppercase;
        }
        > div {
            border-top: 1px solid ${(props) => props.theme.palette.borderColor};
            border-bottom: 1px solid ${(props) => props.theme.palette.borderColor};
            padding: 1.06rem 0;
            margin: 1.06rem 0;
        }
    }
`;
export default KioskCard;
