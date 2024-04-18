import { FunctionComponent } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { useStore } from '@/store';
import Navbar from '@/components/navbar';

const MainLayout: FunctionComponent = () => {
    // const accessToken = useStore((store) => store.accessToken);
    const currentPage = useLocation().pathname;
    const userIsLoggedIn = currentPage !== '/login';

    return (
        <>
            {userIsLoggedIn ? <Navbar /> : <></>}
            <div className={`content ${userIsLoggedIn ? 'protected' : 'public'}`}>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
