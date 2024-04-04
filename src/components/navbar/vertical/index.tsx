import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarItems } from '../useNavItems';
import { StyledVerticalNavbar } from './style';
type Props = {
    className?: string;
};
const VerticalNavbar: FunctionComponent<Props> = ({ className }) => {
    const navbarItems = useNavbarItems();

    return (
        <StyledVerticalNavbar className={className ?? className}>
            {navbarItems.map((item) => {
                return (
                    <Link key={item.title} to={item.link}>
                        {item.icon && <item.icon />}
                        {item.title}
                    </Link>
                );
            })}
        </StyledVerticalNavbar>
    );
};

export default VerticalNavbar;
