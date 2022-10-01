import { Outlet } from 'react-router-dom';
// import Header from '../Header'

export default function MainLayout(props) {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
        </div>
    );
}

