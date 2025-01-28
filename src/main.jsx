import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Favourite from './pages/Favourite.jsx';
import Basket from './pages/Basket.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NotFount from './pages/NotFount.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import HomeProducts from './pages/HomeProducts.jsx';
import Home from './pages/Home.jsx';
import UserProfile from './pages/UserProfile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminCategories from './pages/admin-pages/AdminCategories.jsx';
import AdminProducts from './pages/admin-pages/AdminProducts.jsx';
import AdminCreateCategory from './pages/admin-pages/AdminCreateCategory.jsx';
import AdminCreateProduct from './pages/admin-pages/AdminCreateProduct.jsx';
import AdminUsers from './pages/admin-pages/AdminUsers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<HomeProducts />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/admin' element={<AdminDashboard />} >
              <Route index element={<AdminCategories/>}/>
              <Route path='/admin/products' element={<AdminProducts/>}/>
              <Route path='/admin/create-category' element={<AdminCreateCategory/>}/>
              <Route path='/admin/create-product' element={<AdminCreateProduct/>}/>
              <Route path='/admin/users' element={<AdminUsers/>}/>
            </Route>
            <Route path='*' element={<NotFount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
