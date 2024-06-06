import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './navbar.jsx';
import Footer from './components/footer.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/products.jsx';
import History from './pages/history.jsx';
import Contact from './pages/iletisim.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <hr className="border-t-2 border-gray-300 opacity-25 mt-32 w-[60%] mx-auto" />
    <Footer />
  </React.StrictMode>
);
