import { FunctionComponent, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { styled } from 'styled-components';
import useKeyPress from '@/hooks/useKeyPress';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ReactComponent as CloseIcon } from '@/assets/icons/closeIcon.svg';

type Props = {
    handleClose?: () => void;
    children: ReactNode;
    headline?: string;
    className?: string;
    isOpen: boolean;
    width?: string;
    hideCloseButton?: boolean;
    disablePortal?: boolean;
};

const Modal: FunctionComponent<Props> = ({
    handleClose,
    children,
    headline,
    className,
    hideCloseButton,
    isOpen,
    disablePortal,
    width,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useKeyPress('Escape', handleClose);
    useOnClickOutside(modalRef, handleClose);
    const modalEl = document.getElementById('modal') as HTMLElement;

    const ModalComponent = (
        <StyledModal ref={modalRef} width={width}>
            <div className="modal-backdrop" onClick={handleClose} />
            <div className={clsx('modal-wrapper', className)}>
                {headline && (
                    <header>
                        <h6 className="headline">{headline}</h6>
                        {!hideCloseButton && (
                            <button onClick={handleClose}>
                                <CloseIcon />
                            </button>
                        )}
                    </header>
                )}
                {children}
            </div>
        </StyledModal>
    );

    return isOpen ? disablePortal ? ModalComponent : createPortal(ModalComponent, modalEl) : <></>;
};

const StyledModal = styled.div<Pick<Props, 'width'>>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
    }
    div {
        &.modal-backdrop {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
    .modal-wrapper {
        position: absolute;
        padding: 0.5rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 50%;
        border-radius: 0.375rem;
        background-color: #fff;
        width: ${(props) => props.width ?? 'max-content'};
        -webkit-box-shadow: ${(props) => props.theme.shadows.main};
        box-shadow: ${(props) => props.theme.shadows.main};
        transform: translateY(-50%);
    }
`;

export default Modal;
