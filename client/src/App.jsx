import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/custom/Loader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const ChatListContainer = lazy(() => import("./pages/Chat/ChatListContainer"));
const SearchPage = lazy(() => import("./pages/Search/SearchPage"));
const Freinds = lazy(() => import("./pages/Friends/Friends"));
const MessageBox = lazy(() => import("./pages/Chat/MessageBox"));
const AuthLayout = lazy(() => import("./pages/Auth/AuthLayout"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const NewPassword = lazy(() => import("./pages/Auth/NewPassword"));
const Otp = lazy(() => import("./pages/Auth/Otp"));
const UpdateProfile = lazy(() => import("./pages/User/UpdateProfile"));

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      { index: true, elementL: <Navigate to={"/inbox"} replace={true} /> },
      {
        path: "/inbox",
        element: (
          <Suspense fallback={<Loader />}>
            <ChatListContainer />
          </Suspense>
        ),
        children: [
          {
            path: "/inbox/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <MessageBox />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "friends",
        element: (
          <Suspense fallback={<Loader />}>
            <Freinds />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Auth isLoginPage={true} />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <Auth isLoginPage={false} />
          </Suspense>
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ResetPassword />
          </Suspense>
        ),
      },
      {
        path: "new-password/:token",
        element: (
          <Suspense fallback={<Loader />}>
            <NewPassword />
          </Suspense>
        ),
      },
      {
        path: "verify-otp",
        element: (
          <Suspense fallback={<Loader />}>
            <Otp />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "user",
    children: [
      {
        path: ":userId/update-profile",
        element: (
          <Suspense fallback={<Loader />}>
            <UpdateProfile />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <RouterProvider router={router} />
            <Toaster />
          </div>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
