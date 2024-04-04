import { FunctionComponent } from 'react';
import useGlobalState from '@/store/global';
import VerticalNavbar from './vertical';
import HorizontalNavbar from './horizontal';
import { StyledNavbar } from './style';

const Navbar: FunctionComponent = () => {
    const { isNavMenuVisible } = useGlobalState();

    return (
        <StyledNavbar className={`navbar ${isNavMenuVisible ? 'visible' : 'hidden'}`.trim()}>
            <VerticalNavbar className="vertical-navbar" />
            <HorizontalNavbar className="horizontal-navbar" />
        </StyledNavbar>
    );
};

export default Navbar;
