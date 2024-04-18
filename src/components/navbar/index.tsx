import { FunctionComponent } from 'react';
import useGlobalStore from '@/store/global';
import VerticalNavbar from './vertical';
import HorizontalNavbar from './horizontal';
import { StyledNavbar } from './style';

const Navbar: FunctionComponent = () => {
    const { isNavbarCollapsed } = useGlobalStore();

    return (
        <StyledNavbar className={`navbar ${isNavbarCollapsed ? 'collapsed' : ''}`.trim()}>
            <VerticalNavbar className="vertical-navbar" />
            <HorizontalNavbar className="horizontal-navbar" />
        </StyledNavbar>
    );
};

export default Navbar;
