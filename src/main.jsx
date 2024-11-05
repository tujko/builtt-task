import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './built/index.css'
import PageNotFound from './pages/PageNotFound'
import List from './pages/List'
import Cart from './pages/Cart'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
