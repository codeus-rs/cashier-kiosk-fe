import { FunctionComponent, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useGlobalState from '@/store/global';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ReactComponent as MenuIcon } from '@/assets/icons/navbar/menuArrow.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/navbar/user.svg';
import { StyledHorizontalNavbar, StyledUserMenu, StyledUserDropdown } from './style';
type Props = {
    className?: string;
};
const HorizontalNavbar: FunctionComponent<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const { isNavbarCollapsed } = useGlobalState();

    const [dropdown, setDropdown] = useState(false);

    const handleCloseDropdown = (): void => {
        setDropdown(false);
    };

    useOnClickOutside(ref, handleCloseDropdown);
    console.log(isNavbarCollapsed);
    return (
        <StyledHorizontalNavbar className={className ?? className}>
            <button
                className="menu-arrow"
                onClick={() => useGlobalState.setState({ isNavbarCollapsed: !isNavbarCollapsed })}
            >
                <MenuIcon />
            </button>
            <StyledUserMenu>
                <button onClick={() => setDropdown(!dropdown)}>
                    <UserIcon />
                </button>
                <StyledUserDropdown className={dropdown ? 'visible' : 'hidden'}>
                    <h4>Hi User</h4>
                    <Link to="/my-profile">{t('pages.myProfile.title')}</Link>
                    <button>{t('buttons.logout')}</button>
                </StyledUserDropdown>
            </StyledUserMenu>
        </StyledHorizontalNavbar>
    );
};

export default HorizontalNavbar;
