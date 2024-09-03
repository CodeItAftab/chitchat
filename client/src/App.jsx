import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/custom/Loader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ChatListContainer = lazy(() => import("./pages/Chat/ChatListContainer"));
const SearchPage = lazy(() => import("./pages/Search/SearchPage"));
const Freinds = lazy(() => import("./pages/Friends/Freinds"));
const MessageBox = lazy(() => import("./pages/Chat/MessageBox"));
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth/Login"));
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
    element: <Dashboard />,

    children: [
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
  {
    path: "update-profile",
    element: (
      <Suspense fallback={<Loader />}>
        <UpdateProfile />
      </Suspense>
    ),
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
