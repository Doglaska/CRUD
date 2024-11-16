import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação das páginas
import Home from './pages/home/page.jsx';
import Cart from './pages/cart/page.jsx';
import Profile from './pages/profile/page.jsx';
import Products from './pages/products/page.jsx';
import Auth from './pages/auth/page.jsx';
import Profissional from './pages/profissional/page.jsx';
import User from './pages/user/page.jsx';
import Agendamento from './pages/agendamento/page.jsx'; // Adicionando a importação do Agendamento

const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/profissional', element: <Profissional /> },
            { path: '/profile', element: <Profile /> },
            { path: '/auth', element: <Auth /> },
            { path: '/user', element: <User /> },
            { path: '/agendamento', element: <Agendamento/>},
            { path: '/cart', element: <Cart /> }
        ]
    }
]);

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={pages} />
    </React.StrictMode>
);
