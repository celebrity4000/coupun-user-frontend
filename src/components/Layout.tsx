import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div>
        <Navbar />
        <main>{children || <Outlet />}</main>
        <Footer />
    </div>
);

export default Layout;
