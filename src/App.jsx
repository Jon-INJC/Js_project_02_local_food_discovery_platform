import Home from "./pages/home.jsx"
import Explore from "./pages/explore.jsx";
import Menu from "./pages/restaurantMenu";
import RegisterForm from "./pages/registerRestaurant";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import RestaurantDash from "./pages/restaurantDash";
import RootLayout from "./layout/rootLayout";
import Overview from "./components/restaurantOverview";
import DashMenu from "./components/restaurantMenu";
import DashAnalytics from "./components/restaurantAnalytics";
import DashReview from "./components/restaurantReview";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
function app(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="menu" element={<Menu />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<RestaurantDash />} >
          <Route path="overview" element={<Overview />} />
          <Route path="menu" element={<DashMenu />} />
          <Route path="analytics" element={<DashAnalytics />} />
          <Route path="review" element={<DashReview />} />
        </Route>
      </Route>
    )
  );
  return(
    <RouterProvider router={router} />
);
}

export default app