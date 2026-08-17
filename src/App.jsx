import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout              from './components/common/Layout'
import Home                from './components/pages/Home'
import About               from './components/pages/About'
import Services            from './components/pages/Services'
import Contact             from './components/pages/Contact'
import Login               from './components/pages/Login'
import Register            from './components/pages/Register'
import RestaurantPage      from './components/pages/RestaurantPage'
import SearchPage          from './components/pages/SearchPage'
import CartPage            from './components/pages/CartPage'
import OrderSuccessPage    from './components/pages/OrderSuccessPage'
import UserDashboard       from './components/pages/UserDashboard'
import ProfilePage         from './components/pages/ProfilePage'
import OrderHistoryPage    from './components/pages/OrderHistoryPage'
import TrackOrderPage      from './components/pages/TrackOrderPage'
import FavouritesPage      from './components/pages/FavouritesPage'
import NotFoundPage        from './components/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,                  element: <Home /> },
      { path: 'about',                element: <About /> },
      { path: 'services',             element: <Services /> },
      { path: 'contact',              element: <Contact /> },
      { path: 'login',                element: <Login /> },
      { path: 'register',             element: <Register /> },
      { path: 'restaurant/:id',       element: <RestaurantPage /> },
      { path: 'search',               element: <SearchPage /> },
      { path: 'cart',                 element: <CartPage /> },
      { path: 'order-success',        element: <OrderSuccessPage /> },
      { path: 'dashboard',            element: <UserDashboard /> },
      { path: 'profile',              element: <ProfilePage /> },
      { path: 'orders',               element: <OrderHistoryPage /> },
      { path: 'track/:orderId',       element: <TrackOrderPage /> },
      { path: 'favourites',           element: <FavouritesPage /> },
      { path: '*',                    element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}