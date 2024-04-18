import { ReactElement, ReactNode } from 'react';
import { styled } from 'styled-components';
import toDisplayDate from '@/functions/formatDate';
import { ReactComponent as DeleteIcon } from '@/assets/icons/deleteIcon.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/editIcon.svg';
import Pagination, { Props as PaginationProps } from '../pagination';

type KeysOfValue<T, TCondition> = {
    //https://www.totaltypescript.com/get-keys-of-an-object-where-values-are-of-a-given-type
    [K in keyof T]: T[K] extends TCondition ? K : never;
}[keyof T];

export type TableColumn<TData> = {
    accessorKey: KeysOfValue<TData, string | number>;
    header: string;
    type?: 'text' | 'date';
};

type Props<TData extends Object> = {
    items: TData[];
    columns: TableColumn<TData>[];
    pagination?: PaginationProps;
    handleEdit?: (item: TData) => void;
    handleDelete?: (item: TData) => void;
    customRowActions?: (item: TData) => ReactNode;
    handleRowClick?: (item: TData) => ReactNode;
};
const Table = <TData extends Object>({
    items,
    columns,
    pagination,
    handleEdit,
    handleDelete,
    customRowActions,
    handleRowClick,
}: Props<TData>): ReactElement => {
    const hasActions = handleEdit || handleDelete || customRowActions;
    return (
        <StyledWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        {columns.map(({ header }) => (
                            <th key={header}>{header}</th>
                        ))}
                        {hasActions && <th className="actions">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} onClick={() => handleRowClick && handleRowClick(item)}>
                            {columns.map((column) => {
                                return (
                                    <td key={column.header}>
                                        {parseCellValue(item[column.accessorKey] as string, column)}
                                    </td>
                                );
                            })}
                            {hasActions && (
                                <StyledActions>
                                    {customRowActions && customRowActions(item)}
                                    {handleEdit && (
                                        <button className="editBtn" onClick={() => handleEdit(item)}>
                                            <EditIcon />
                                        </button>
                                    )}
                                    {handleDelete && (
                                        <button className="deleteBtn" onClick={() => handleDelete(item)}>
                                            <DeleteIcon />
                                        </button>
                                    )}
                                </StyledActions>
                            )}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            {pagination && <Pagination {...pagination} />}
        </StyledWrapper>
    );
};

const StyledTable = styled.table`
    min-width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.palette.darkBgColor};
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;
    th,
    td {
        padding: 0.69rem 1.5rem;
    }

    thead {
        tr {
            th {
                text-align: start;
                color: ${(props) => props.theme.palette.white};
                &.actions {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
    tbody {
        tr {
            background: ${(props) => props.theme.palette.white};
            &:nth-child(even) {
                background: ${(props) => props.theme.palette.lightBgColor};
            }
            &:last-child {
                border-radius: ${(props) => `0rem 0rem ${props.theme.borderRadius} ${props.theme.borderRadius}`};
            }
        }
    }

    margin-bottom: 1rem;
`;

const StyledActions = styled.td`
    display: flex;
    gap: 0.87rem;
    min-height: 100%;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;

    button:hover {
        opacity: 0.5;
    }
    .editBtn {
        color: ${(props) => props.theme.palette.primary};
    }
    .deleteBtn {
        color: ${(props) => props.theme.palette.error};
    }
`;

const StyledWrapper = styled.div`
    min-width: 100%;
`;

const parseCellValue = <TData,>(value: string, column: TableColumn<TData>): ReactNode => {
    if (column.type === 'date') {
        return toDisplayDate(value);
    }
    return value;
};

export default Table;
