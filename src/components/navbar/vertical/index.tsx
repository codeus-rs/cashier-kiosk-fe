import { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useGlobalState from '@/store/global';
import useWindowSize from '@/hooks/useResize';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useNavbarItems } from '../useNavItems';
import { StyledVerticalNavbar } from './style';
type Props = {
    className?: string;
};

const VerticalNavbar: FunctionComponent<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const navbarItems = useNavbarItems();
    const { isNavbarCollapsed } = useGlobalState();
    const size = useWindowSize();
    const currentPage = useLocation().pathname;

    const [isMobileWidth, setIsMobileWidth] = useState(!!size.width && size?.width < 1024);

    const handleCloseMenu = (): void => {
        isMobileWidth && useGlobalState.setState({ isNavbarCollapsed: true });
    };

    useEffect(() => {
        setIsMobileWidth(!!size.width && size.width < 1024);
        if (isMobileWidth) {
            handleCloseMenu();
        }
    }, [size.width, isMobileWidth]);

    useOnClickOutside(ref, handleCloseMenu);

    return (
        <StyledVerticalNavbar ref={ref} className={className ?? className}>
            <Link to="/" className="logo">
                Organization name
            </Link>
            {navbarItems.map((item) => {
                return (
                    <Link
                        key={item.title}
                        to={item.link}
                        onClick={handleCloseMenu}
                        className={currentPage === item.link ? 'active' : ''}
                    >
                        {item.icon && <item.icon />}
                        {!isNavbarCollapsed && <p>{item.title}</p>}
                    </Link>
                );
            })}
        </StyledVerticalNavbar>
    );
};

export default VerticalNavbar;
