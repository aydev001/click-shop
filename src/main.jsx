import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.jsx';
import Favourite from './pages/Favourite.jsx';
import Basket from './pages/Basket.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NotFount from './pages/NotFount.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='*' element={<NotFount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
