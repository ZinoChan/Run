import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import Layout from '../components/ui/Layout';
import PreLoader from '../components/ui/PreLoader';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('@/views/auth/Login'));
const Home = lazy(() => import('../views/home/Home'));
const Shop = lazy(() => import('../views/shop/Shop'));
const ProductDetails = lazy(() => import('../views/product-details'));
const Cart = lazy(() => import('../views/cart/Cart'));
const Register = lazy(() => import('../views/auth/Register'));
const OrderDetails = lazy(() => import('../views/checkout/OrderDetails'));
const BillingDetails = lazy(() => import('../views/checkout/BillingDetails'));
const Payment = lazy(() => import('../views/checkout/Payment'));
const Profile = lazy(() => import('../views/profile'));
const NotFound = lazy(() => import('../views/404/NotFound'));

export default function AppRoute() {
  return (
    <Routes>
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
          path={ROUTES.PRODUCT_DETAILS}
          element={
            <Suspense fallback={<PreLoader />}>
              <ProductDetails />
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
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<PreLoader />}>
              <Login />
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

        <Route
          path={ROUTES.PROFILE}
          element={
            <Suspense fallback={<PreLoader />}>
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PreLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
