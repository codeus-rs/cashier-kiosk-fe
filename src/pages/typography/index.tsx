import { ReactComponent as DownloadIcon } from '@/assets/icons/downloadIcon.svg';
import { getCatFacts } from '@/communication/catFacts';
import BackLink from '@/components/backLink';
import Button from '@/components/buttons';
import DragAndDrop from '@/components/dragAndDrop';
import InputField from '@/components/inputs/inputField';
import Modal from '@/components/modal';
import Pagination from '@/components/pagination';
import Table from '@/components/table';
import { useFetch } from '@/hooks/useFetch';
import useToggle from '@/hooks/useToggle';
import { useTouchField } from '@/hooks/useTouchField';
import useIsEmail from '@/hooks/validation/useIsEmail';
import useMinLength from '@/hooks/validation/useMinLength';
import useMinValue from '@/hooks/validation/useMinValue';
import AppFile from '@/types/file';
import { FunctionComponent, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { Id, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from 'styled-components';

import Skeleton from 'react-loading-skeleton';
import NoItems from '@/components/noItems';
import SelectField from '../../components/select';
import DateField from '../../components/inputs/dateField';
import RadioField from '../../components/inputs/radio';
import CheckboxField from '../../components/inputs/checkbox';
interface FormValues {
    email: string;
    password: string;
    age: string | null;
    dateOfBirth?: string;
}
const Typography: FunctionComponent = () => {
    const modal = useToggle();
    const [currentPage, setCurrentPage] = useState(1);
    const [files, setFiles] = useState(MOCK_FILES);
    const { data, error, refetch, status } = useFetch({
        queryFn: () => getCatFacts(),
    });
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: '',
        age: null,
    });

    const emailErrorMessage = useIsEmail(formValues.email);
    const ageErrorMessage = useMinValue(formValues.age, 17, 'Minimal allowed age is 18');
    const passwordErrorMessage = useMinLength(formValues.password, 8, 'Password must contain at least 8 characters');

    const handleChange = (fieldName: keyof FormValues, value): void => {
        handleFieldTouch(fieldName);
        setFormValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    };
    const { isFieldTouched, handleFieldTouch } = useTouchField<FormValues>();
    const isFormValid = !(emailErrorMessage || passwordErrorMessage || ageErrorMessage);
    const handleShowToast = (): Id => toast('Test toast', { position: 'bottom-left' });
    return (
        <StyledTemplatePage>
            <StyledGroup>
                <form style={{ display: 'flex', gap: '1rem' }}>
                    <div>
                        <InputField
                            type="text"
                            label="E-mail"
                            value={formValues.email}
                            errorMessage={isFieldTouched('email') ? emailErrorMessage : ''}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                        <InputField
                            type="text"
                            label="Password"
                            value={formValues.password}
                            errorMessage={isFieldTouched('password') ? passwordErrorMessage : ''}
                            onChange={(e) => handleChange('password', e.target.value)}
                        />
                        <InputField
                            type="number"
                            label="Age"
                            value={formValues.age}
                            style={{ marginBottom: '1rem' }}
                            errorMessage={isFieldTouched('age') ? ageErrorMessage : ''}
                            onChange={(e) => handleChange('age', e.target.value)}
                        />
                        <CheckboxField label="Privacy  policy" />
                        <Button style={{ marginTop: '1rem' }} disabled={!isFormValid}>
                            Submit
                        </Button>
                    </div>
                    <div>
                        <SelectField
                            label="Role"
                            options={[
                                { value: 'user', label: 'User' },
                                { value: 'admin', label: 'Admin' },
                            ]}
                        />
                        <DateField
                            label="Date of birth"
                            value={formValues.dateOfBirth}
                            onChange={(value) => handleChange('dateOfBirth', value)}
                        />
                        <div>
                            <label>Geneder</label>
                            <RadioField label="Male" name="gender" />
                            <RadioField label="Female" name="gender" />
                        </div>
                    </div>
                </form>
            </StyledGroup>
            <StyledGroup>
                <StyledRow>
                    <Button>Primary solid</Button>
                    <Button color="secondary" variant="solid">
                        Secondary solid
                    </Button>
                </StyledRow>
                <StyledRow>
                    <Button variant="outlined">Primary outlined</Button>
                    <Button color="secondary" variant="outlined">
                        Secondary outlined
                    </Button>
                </StyledRow>
                <Button color="error">Error</Button>
                <Button color="gray">Gray</Button>
            </StyledGroup>
            <StyledGroup>
                <StyledPaginationContainer>
                    <Pagination pageCount={10} initialPage={0} />
                    <Pagination pageCount={10} initialPage={0} arrows hideDisabled />
                    <Pagination pageCount={10} initialPage={0} hideControls />
                </StyledPaginationContainer>
                <Button onClick={modal.open}>Click to open modal</Button>
                <Button onClick={handleShowToast}>Click to show toast</Button>
                <BackLink href="/login" />
                <Modal headline="Newsletter" isOpen={modal.isOpen} handleClose={modal.close} width="32rem">
                    <StyledModalContent>
                        <InputField label="Email" />
                        <Button onClick={modal.close}>Subscribe</Button>
                    </StyledModalContent>
                </Modal>
            </StyledGroup>

            <StyledGroup>
                <DragAndDrop
                    accept={{ 'image/*': [] }}
                    files={files}
                    handleDelete={(deletedFile) =>
                        setFiles((prevFiles) => prevFiles.filter((file) => file.id !== deletedFile.id))
                    }
                />
            </StyledGroup>
            <StyledGroup>
                <div>Status: {status}</div>
                {status === 'loading' || status === 'refetching' ? (
                    <Skeleton count={3} width={300} />
                ) : (
                    <p style={{ flex: 1, minWidth: '100%' }}>{status === 'error' ? error?.message : data?.fact}</p>
                )}

                <div style={{ flex: 1, minWidth: '100%' }}>
                    <Button onClick={() => refetch()}>Refetch</Button>
                </div>
            </StyledGroup>
            <StyledGroup>
                <NoItems />
            </StyledGroup>
            <StyledGroup style={{ gridColumn: '1/3' }}>
                <Table
                    items={[
                        {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'johndoe@codeus.rs',
                            username: 'johndoe',
                        },
                        {
                            firstName: 'Jane',
                            lastName: 'Doe',
                            email: 'janendoe@codeus.rs',
                            username: 'janedoe',
                            test: 'abc',
                        },
                    ]}
                    columns={[
                        { accessorKey: 'firstName', header: 'First Name' },
                        { accessorKey: 'lastName', header: 'Last Name' },
                        { accessorKey: 'username', header: 'E-Mail' },
                        { accessorKey: 'username', header: 'Username' },
                    ]}
                    customRowActions={() => (
                        <button>
                            <DownloadIcon />
                        </button>
                    )}
                    pagination={{
                        pageCount: 5,
                        initialPage: currentPage,
                        onPageChange: setCurrentPage,
                    }}
                />
            </StyledGroup>
        </StyledTemplatePage>
    );
};

const StyledTemplatePage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem;
    gap: 1rem;
`;

const StyledPaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
`;

const StyledModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledRow = styled.div`
    flex-basis: 100%;
    display: flex;
    gap: 1rem;
`;

const StyledGroup = styled.div`
    padding: 1rem;
    display: flex;
    align-items: start;
    gap: 1rem;
    flex-wrap: wrap;
    box-shadow: ${(props) => props.theme.shadows.main};
`;

const MOCK_FILES: AppFile[] = [
    { id: '1', name: 'File 1', createdAt: '2023-01-01' },
    { id: '2', name: 'File 2', createdAt: '2023-01-02' },
];
export default Typography;
