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
};
const Table = <TData extends Object>({
    items,
    columns,
    pagination,
    handleEdit,
    handleDelete,
    customRowActions,
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
                        {hasActions && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
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
    tr {
        border-top: 0.06rem solid ${(props) => props.theme.palette.gray};
    }
    th,
    td {
        padding: 0.5rem 0.25rem;
    }
    thead tr th {
        text-align: start;
    }
    thead tr {
        border-bottom: 0.12rem solid ${(props) => props.theme.palette.gray};
    }
    margin-bottom: 1rem;
`;

const StyledActions = styled.td`
    display: flex;
    gap: 0.25rem;
    min-height: 100%;
    font-size: 1.5rem;

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
