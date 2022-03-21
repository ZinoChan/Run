import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/ui/Layout';
import PreLoader from '../components/ui/PreLoader';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../views/home/Home'));
const Shop = lazy(() => import('../views/shop/Shop'));
const Cart = lazy(() => import('../views/cart/Cart'));
const Register = lazy(() => import('../views/auth/Register'));
const OrderDetails = lazy(() => import('../views/checkout/OrderDetails'));
const BillingDetails = lazy(() => import('../views/checkout/BillingDetails'));
const Payment = lazy(() => import('../views/checkout/Payment'));

// const NotFound = lazy(() => import('../views/404/NotFound'));

export default function AppRoute() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PreLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.SHOP}
            element={
              <Suspense fallback={<PreLoader />}>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CART}
            element={
              <Suspense fallback={<PreLoader />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <Suspense fallback={<PreLoader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CHECKOUT_STEP_1}
            element={
              <Suspense fallback={<PreLoader />}>
                <PrivateRoute>
                  <OrderDetails />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CHECKOUT_STEP_2}
            element={
              <Suspense fallback={<PreLoader />}>
                <PrivateRoute>
                  <BillingDetails />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CHECKOUT_STEP_3}
            element={
              <Suspense fallback={<PreLoader />}>
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
