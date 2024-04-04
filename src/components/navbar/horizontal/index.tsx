import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalState from '@/store/global';
import { ReactComponent as MenuIcon } from '@/assets/icons/navbar/hamburger.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/navbar/user.svg';
import { ReactComponent as ArrowIcon } from '@/assets/icons/navbar/arrow-down.svg';
import { StyledHorizontalNavbar, StyledUserMenu, StyledUserDropdown } from './style';
type Props = {
    className?: string;
};
const HorizontalNavbar: FunctionComponent<Props> = ({ className }) => {
    const { isNavMenuVisible } = useGlobalState();

    const [dropdown, setDropdown] = useState(false);

    return (
        <StyledHorizontalNavbar className={className ?? className}>
            <button onClick={() => useGlobalState.setState({ isNavMenuVisible: !isNavMenuVisible })}>
                <MenuIcon />
            </button>
            <Link to="/">Organization name</Link>
            <StyledUserMenu>
                <button onClick={() => setDropdown(!dropdown)}>
                    <UserIcon />
                    Hi User
                    <ArrowIcon />
                </button>
                <StyledUserDropdown className={dropdown ? 'visible' : 'hidden'}>
                    <Link to="/my-profile">My profile</Link>
                    <button>Logout</button>
                </StyledUserDropdown>
            </StyledUserMenu>
        </StyledHorizontalNavbar>
    );
};

export default HorizontalNavbar;
