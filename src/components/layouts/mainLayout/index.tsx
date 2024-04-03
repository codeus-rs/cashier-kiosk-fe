import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '@/store';
import Navbar from '@/components/navbar';

const MainLayout: FunctionComponent = () => {
    const accessToken = useStore((store) => store.accessToken);

    const userIsLoggedIn = !!accessToken;

    return (
        <>
            <Navbar />
            <div className={`content ${!userIsLoggedIn ? 'protected' : 'public'}`}>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
