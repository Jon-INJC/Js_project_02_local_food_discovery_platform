import Home from "./pages/home.jsx";
import Explore from "./pages/explore.jsx";
import Menu from "./pages/restaurantMenu";
import RegisterForm from "./pages/registerRestaurant";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import RestaurantDash from "./pages/restaurantDash";
import RootLayout from "./layout/rootLayout";
import Overview from "./components/dashboardComponents/restaurantOverview.jsx";
import DashMenu from "./components/restaurantMenu";
import DashAnalytics from "./components/restaurantAnalytics";
import DashReview from "./components/restaurantReview";
import RegStep3 from "./components/restaurantRegStep3.jsx";
import RegStep2 from "./components/restaurantRegStep2.jsx";
import RegStep1 from "./components/restaurantRegStep1.jsx";
import AddMenu from "./components/addMenuForm.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Profile from "./pages/profile.jsx";
function app() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="menu" element={<Menu />} />
        <Route path="register" element={<RegisterForm />}>
          <Route index element={<Navigate to="step1" />} />
          <Route path="step1" element={<RegStep1 />} />
          <Route path="step2" element={<RegStep2 />} />
          <Route path="step3" element={<RegStep3 />} />
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<RestaurantDash />}>
          <Route index element={<Navigate to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="menu" element={<DashMenu />} />
          <Route path="analytics" element={<DashAnalytics />} />
          <Route path="review" element={<DashReview />} />
          <Route path="addMenu" element={<AddMenu />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default app;
