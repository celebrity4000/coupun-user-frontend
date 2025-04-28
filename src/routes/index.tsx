import Layout from "@/components/Layout";
import UserLayout from "@/components/UserLayout";
import About from "@/pages/About";
import Dashboard from "@/pages/Users/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Users/LoginPage";
import Profile from "@/pages/Users/Profile";
import Tutorials from "@/pages/Users/Tutorials";
import Tutorial from "@/pages/Users/Tutorial";
import SignupPage from "@/pages/Users/SignupPage";
import VerifyAccount from "@/pages/Users/VerifyAccount";
import EmailOtpVerification from "@/pages/Users/EmailOtpVerification";
import AddressForm from "@/pages/Users/AddressForm";
import ClientLayout from "@/components/ClientLayout";
import ClientDashboard from "@/pages/Client/ClientDashboard";
import PerformanceDashboard from "@/pages/Client/PerformanceDashboard";
import ProfilePage from "@/pages/Client/ProfilePage";
import BillingHistory from "@/pages/Client/BillingHistory";
import Subscription from "@/pages/Client/Subscription";
import Tickets from "@/pages/Client/Tickets";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  //Users authentication routes
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/signup",
    element: <SignupPage />,
  },
  {
    path: "/user/changeverificationmode",
    element: <VerifyAccount />,
  },
  {
    path: "/user/emailverification",
    element: <EmailOtpVerification />,
  },
  {
    path: "/user/address-form",
    element: <AddressForm />,
  },

  // User dashboard routes
  {
    path: "/user/dashboard",
    element: (
      <UserLayout>
        <Dashboard />
      </UserLayout>
    ),
  },
  {
    path: "/user/profile",
    element: (
      <UserLayout>
        <Profile />
      </UserLayout>
    ),
  },
  {
    path: "/user/tutorials",
    element: (
      <UserLayout>
        <Tutorials />
      </UserLayout>
    ),
  },
  {
    path: "/user/tutorial/:id",
    element: (
      <UserLayout>
        <Tutorial />
      </UserLayout>
    ),
  },

  // Client dashboard routes
  {
    path: "/client/dashboard",
    element: (
      <ClientLayout>
        <ClientDashboard />
      </ClientLayout>
    ),
  },
  {
    path: "/client/performance",
    element: (
      <ClientLayout>
        <PerformanceDashboard />
      </ClientLayout>
    ),
  },
  {
    path: "/client/account/profile",
    element: (
      <ClientLayout>
        <ProfilePage />
      </ClientLayout>
    ),
  },
  {
    path: "/client/account/billinghistory",
    element: (
      <ClientLayout>
        <BillingHistory />
      </ClientLayout>
    ),
  },
  {
    path: "/client/account/tickets",
    element: (
      <ClientLayout>
        <Tickets />
      </ClientLayout>
    ),
  },
  {
    path: "/client/subscription",
    element: (
      <ClientLayout>
        <Subscription />
      </ClientLayout>
    ),
  },
];

export default routes;
