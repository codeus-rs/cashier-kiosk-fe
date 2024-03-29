import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarItems } from './useNavItems';

const Navbar: FunctionComponent = () => {
    const navbarItems = useNavbarItems();

    return (
        <div>
            {navbarItems.map((item) => {
                return (
                    <Link key={item.title} to={item.link}>
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
};
export default Navbar;
