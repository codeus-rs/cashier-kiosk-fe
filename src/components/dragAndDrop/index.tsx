import { FunctionComponent, useState } from 'react';
import { DropzoneOptions, ErrorCode, FileRejection, useDropzone } from 'react-dropzone';
import { styled } from 'styled-components';
import AppFile from '@/types/file';
import Button from '../buttons';
import FileList from './filesList';
type Props = DropzoneOptions & {
    dragAndDropMessage?: string;
    files?: AppFile[];
    handleDownload?: (file: AppFile) => void;
    handleDelete?: (file: AppFile) => void;
};
const DragAndDrop: FunctionComponent<Props> = ({
    dragAndDropMessage,
    files = [],
    handleDelete,
    handleDownload,
    ...dropzoneOptions
}) => {
    const handleDrop = async (_: File[], fileRejections: FileRejection[]): Promise<void> => {
        if (fileRejections.length) return;
    };

    const [rejectionMessages, setRejectionMessages] = useState<string[]>([]);
    const handleFileRejections = (fileRejections: FileRejection[]): void => {
        const message = getRejectionMessages(fileRejections);
        setRejectionMessages(message);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        onDropRejected: handleFileRejections,
        noClick: true,
        ...dropzoneOptions,
    });

    return rejectionMessages.length ? (
        <StyledErrorsContainer>
            {rejectionMessages.map((message) => (
                <p key={message}>{message}</p>
            ))}
            <Button onClick={() => setRejectionMessages([])}>Try again</Button>
        </StyledErrorsContainer>
    ) : (
        <StyledContainer {...getRootProps()}>
            <FileList files={files} handleDelete={handleDelete} handleDownload={handleDownload} />
            <input {...getInputProps()} />
            <p>{dragAndDropMessage}</p>
        </StyledContainer>
    );
};

const getRejectionMessages = (fileRejections: FileRejection[]): string[] => {
    const tooManyFilesUploaded = fileRejections
        .flatMap((rejection) => rejection.errors)
        .some((err) => err.code === ErrorCode.TooManyFiles);

    if (tooManyFilesUploaded) {
        return ['Too many files uploaded'];
    }
    const errorMessages = fileRejections.map(
        ({ file, errors }) => `${file.name} ${REJECTION_REASONS?.[errors[0]?.code] || 'is not uploaded'}`,
    );
    return errorMessages;
};

const REJECTION_REASONS: { [key in ErrorCode]: string } = {
    [ErrorCode.FileInvalidType]: 'Does\'t have valid type',// eslint-disable-line
    [ErrorCode.FileTooLarge]: 'is too large',
    [ErrorCode.FileTooSmall]: 'is too small',
    [ErrorCode.TooManyFiles]: 'is not uploaded',
};

DragAndDrop.defaultProps = {
    dragAndDropMessage: 'Drop files here',
    files: [],
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1rem;
    border: 0.063rem dashed ${(props) => props.theme.palette.gray};
    min-width: 100%;
    min-height: 5rem;
`;

const StyledErrorsContainer = styled(StyledContainer)`
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    gap: 0.5rem;
    button {
        align-self: center;
    }
`;

export default DragAndDrop;
