import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from '@/components/table';
import Search from '@/components/inputs/search';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as CopyIcon } from '@/assets/icons/copy.svg';
import { ReactComponent as ContentIcon } from '@/assets/icons/navbar/content.svg';
import { StyledPageHeader } from './style';

const List: FunctionComponent = () => {
    const { t } = useTranslation();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchEvent, setSearchEvent] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleRowClick = (e): any => {
        // e.stopPropagation();
        console.log(e);
    };
    const handleValueChange = (e): void => {
        setSearchEvent(e);
        setSearchValue(e.target.value);
    };
    console.log(searchEvent, searchValue);
    return (
        <div className="page">
            <StyledPageHeader>
                <PageTitle title={t('pages.productManagement.list.title')} icon={<ContentIcon />} />
                <Search placeholder="Search" onChange={handleValueChange} />
            </StyledPageHeader>
            <Table
                items={[
                    {
                        product: 'dsadsa',
                        category: 'Doe',
                        price: 'johndoe@codeus.rs',
                        vat: 'johndoe',
                        total: 'johndoe',
                    },
                    {
                        product: 'John',
                        category: 'Doe',
                        price: 'johndoe@codeus.rs',
                        vat: 'johndoe',
                        total: 'johndoe',
                    },
                ]}
                columns={[
                    { accessorKey: 'product', header: 'Product' },
                    { accessorKey: 'category', header: 'Category' },
                    { accessorKey: 'price', header: 'Price' },
                    { accessorKey: 'vat', header: 'VAT' },
                    { accessorKey: 'total', header: 'Total' },
                ]}
                handleRowClick={(e) => handleRowClick(e)}
                handleDelete={() => {
                    return <></>;
                }}
                handleEdit={() => {
                    return <></>;
                }}
                customRowActions={() => (
                    <button>
                        <CopyIcon />
                    </button>
                )}
                pagination={{
                    pageCount: 5,
                    initialPage: currentPage,
                    onPageChange: setCurrentPage,
                }}
            />
        </div>
    );
};
export default List;
