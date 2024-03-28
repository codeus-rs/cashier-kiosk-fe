import { FunctionComponent, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default MainLayout;
