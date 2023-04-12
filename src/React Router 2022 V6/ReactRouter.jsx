import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDetails from './components/AdminDetails';
import { ConTextProvider } from './components/Auth';
import Contact from './components/Contact';
import FeaturedProducts from './components/FeaturedProducts';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import Profile from './components/Profile';
import { RequireAuth } from './components/RequireAuth';
import Users from './components/Users';
import UsersDetails from './components/UsersDetails';
// import About from './components/About';
const LazyLoading = lazy(() => import('./components/About'));       // to change to faster loading

function ReactRouter() {
    return (
        <Router>
            <ConTextProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<><Header /><Home /></>} />
                    <Route path='/about' element={
                        <React.Suspense fallback="waiting bro">     {/* to remove error suspense */}
                            <LazyLoading />
                        </React.Suspense>
                    } />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<h3>page not found</h3>} />
                    <Route path='/order-summary' element={<OrderSummary />} />
                    <Route path='/products' element={<Products />}>
                        <Route index element={<FeaturedProducts />} />
                        <Route path='featured' element={<FeaturedProducts />} />
                        <Route path='new' element={<NewProducts />} />
                    </Route>
                    <Route path='/users' element={<Users />} >
                        <Route path=':userId' element={<UsersDetails />} />
                        <Route path='admin' element={<AdminDetails />} />
                    </Route>
                    <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </ConTextProvider>
        </Router>
    )
}

export default ReactRouter