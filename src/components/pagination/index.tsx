import { FunctionComponent } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { styled } from 'styled-components';

export type Props = Omit<ReactPaginateProps, 'onPageChange'> & {
    arrows?: boolean;
    hideControls?: boolean;
    hideDisabled?: boolean;
    onPageChange?: (newPage: number) => void;
};

const Pagination: FunctionComponent<Props> = ({
    className,
    arrows,
    hideControls,
    initialPage,
    onPageChange,
    hideDisabled,
    ...reactPaginateProps
}) => {
    return (
        <StyledWrapper className={className} hideControls={hideControls} hideDisabled={hideDisabled}>
            <ReactPaginate
                previousLabel={arrows ? '<' : 'Previous'}
                nextLabel={arrows ? '>' : 'Next'}
                onPageChange={(item) => onPageChange && onPageChange(item.selected)}
                initialPage={initialPage ? initialPage - 1 : undefined}
                {...reactPaginateProps}
            />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div<Pick<Props, 'hideControls' | 'hideDisabled'>>`
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
        list-style-type: none;
        display: flex;
        li {
            a {
                min-width: 2rem;
                min-height: 2rem;
                border: 0.063rem solid ${(props) => props.theme.palette.gray};
                border-radius: 0.5rem;
                font-size: 1rem;
                color: #000;
                outline: none;
                line-height: 1.68rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0.3rem;
                user-select: none;
                cursor: pointer;
                &.no-arrow {
                    display: none;
                }
            }
            &.previous,
            &.next {
                display: ${(props) => (props.hideControls ? 'none' : 'inline')};
                a {
                    padding: 0 0.625rem;
                }
            }
            &.selected {
                a {
                    background: ${(props) => props.theme.palette.primary};
                    color: #fff;
                    border: 0.063rem solid ${(props) => props.theme.palette.primary};
                }
            }
            &.disabled {
                display: ${(props) => (props.hideDisabled ? 'none' : 'inline')};
                opacity: 0.5;
            }
            &:hover:not(.selected, .disabled) {
                a {
                    color: ${(props) => props.theme.palette.primary};
                    border: 0.063rem solid ${(props) => props.theme.palette.primary};
                }
            }
        }
    }
`;

export default Pagination;
