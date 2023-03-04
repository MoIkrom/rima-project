/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import PrivateElement from "./component/PrivateElement";
import PrivateElementLogin from "./component/PrivateElementLogin";
// Pages
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import OrderTracking from "./pages/OrderTracking";
import OrderTrackingDetail from "./pages/OrderTrackingDetail";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Admin from "./pages/SellerProduct";
import MyOrder from "./pages/MyOrder";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";
import Cart from "./pages/Cart";
import Otp from "./pages/Otp";
import OtpVerified from "./pages/OtpVerified";
import Blog from "./pages/Blog";
import Error from "./component/error/Error404";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <Error /> },
  { path: "/login", element: <PrivateElementLogin><Login /></PrivateElementLogin>, errorElement: <Error /> },
  { path: "/register", element: <PrivateElementLogin><Register /></PrivateElementLogin> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/notification", element: <PrivateElement><Notification /> </PrivateElement>},
  { path: "/chat", element: <PrivateElement><Chat /></PrivateElement> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <PrivateElement allowedRoles={['seller', 'customer']} ><Profile /></PrivateElement>, errorElement: <Error /> },
  { path: "/admin/my-product", element: <PrivateElement><Admin /></PrivateElement>, errorElement: <Error /> },
  { path: "/admin/create-product", element: <PrivateElement allowedRoles={['seller']}><CreateProduct /></PrivateElement> },
  { path: "/admin/my-order", element: <PrivateElement><MyOrder /></PrivateElement> },
  { path: "/product", element: <Product />},
  { path: "/order/tracking", element: <PrivateElement><OrderTracking /></PrivateElement> },
  { path: "/order/tracking/detail", element: <PrivateElement><OrderTrackingDetail /></PrivateElement> },
  { path: "/product/detail/:id", element: <ProductDetail /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <PrivateElement><Cart /></PrivateElement> },
  { path: "/forgot/otp", element: <Otp /> },
  { path: "/forgot/otp/verify", element: <OtpVerified /> },
  { path: "/blog", element: <Blog /> },
  { path: "/error", element: <Error /> },
  { path: "/cart/checkout", element: <PrivateElement><Checkout /></PrivateElement> },
  { path: "/page/contact", element: <Contact /> },
  { path: "/favorite", element: <PrivateElement><Favorite /></PrivateElement> },

]);

export default router;
