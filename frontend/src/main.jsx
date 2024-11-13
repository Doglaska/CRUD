import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/page.jsx';
import Products from './pages/products/page.jsx';
import Professional from './pages/professional/page.jsx';
import Profile from './pages/profile/page.jsx';
import Auth from './pages/auth/page.jsx';
import User from './pages/user/page.jsx'; // Verifique se o caminho e o nome do arquivo estão corretos

import Agendamento from './pages/agendamento/page.jsx';

const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/professional', element: <Professional /> },
            { path: '/profile', element: <Profile /> },
            { path: '/auth', element: <Auth /> },
            { path: '/user', element: <User /> },
            { path: '/agendamento', element: <Agendamento/>},

        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={pages} />
    </StrictMode>
);
