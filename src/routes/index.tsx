import Layout from '@/components/Layout';
import About from '@/pages/About';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import Login from '@/pages/Login';


const routes = [
    {
        path: '/',
        element: <Layout><Home /></Layout>,
    },
    {
        path: '/about',
        element: <Layout><About /></Layout>,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: <Layout><Dashboard /></Layout>,
    },
];

export default routes;
