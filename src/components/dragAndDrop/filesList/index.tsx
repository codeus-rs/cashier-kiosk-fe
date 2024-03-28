import { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import { theme } from '@/global/theme';
import File from '@/types/file';
import Table from '@/components/table';
import { ReactComponent as DownloadIcon } from '@/assets/icons/downloadIcon.svg';

type Props = {
    files?: File[];
    handleDownload?: (file: File) => void;
    handleDelete?: (file: File) => void;
};

const FileList: FunctionComponent<Props> = ({ files, handleDelete, handleDownload }) => {
    return (
        <StyledFileList>
            <Table
                items={files ?? []}
                handleDelete={handleDelete}
                customRowActions={(file) =>
                    handleDownload && (
                        <button onClick={() => handleDownload(file)}>
                            <DownloadIcon color={theme.palette.primary} />
                        </button>
                    )
                }
                columns={[
                    { accessorKey: 'name', header: 'Name' },
                    { accessorKey: 'createdAt', header: 'Created at', type: 'date' },
                ]}
            />
        </StyledFileList>
    );
};

const StyledFileList = styled.div`
    min-width: 100%;
`;

export default FileList;
